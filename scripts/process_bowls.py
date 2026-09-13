import subprocess
from collections import deque

def process_bowl(src_path, dst_path, max_y):
    width, height = 1024, 1024
    p = subprocess.Popen(['convert', src_path, '-depth', '8', 'rgb:-'], stdout=subprocess.PIPE)
    rgb_bytes, _ = p.communicate()
    
    # Check corners to get background reference color
    # Usually around 250, 250, 250
    corners = [(0, 0), (1023, 0), (0, 1023), (1023, 1023), (512, 0), (0, 512), (1023, 512)]
    bg_samples = []
    for cx, cy in corners:
        idx = (cy * width + cx) * 3
        bg_samples.append((rgb_bytes[idx], rgb_bytes[idx+1], rgb_bytes[idx+2]))
    
    print(f"Processing {src_path}:")
    print(f"  Corner samples: {bg_samples[:3]}")

    def is_white_bg(r, g, b, y):
        if y >= max_y:
            return True
        # If it is high brightness and low saturation
        max_c = max(r, g, b)
        min_c = min(r, g, b)
        # Background is white/light grey
        if min_c >= 232 and (max_c - min_c) <= 18:
            return True
        if min_c >= 242:
            return True
        return False

    # BFS from all 4 borders to find connected background
    visited = bytearray(width * height)
    queue = deque()

    # Seed all borders
    for x in range(width):
        for y in [0, height - 1]:
            idx = y * width + x
            p_idx = idx * 3
            r, g, b = rgb_bytes[p_idx], rgb_bytes[p_idx+1], rgb_bytes[p_idx+2]
            if is_white_bg(r, g, b, y):
                visited[idx] = 1
                queue.append((x, y))

    for y in range(height):
        for x in [0, width - 1]:
            idx = y * width + x
            if not visited[idx]:
                p_idx = idx * 3
                r, g, b = rgb_bytes[p_idx], rgb_bytes[p_idx+1], rgb_bytes[p_idx+2]
                if is_white_bg(r, g, b, y):
                    visited[idx] = 1
                    queue.append((x, y))

    # Also seed anything below max_y
    for y in range(max_y, height):
        for x in range(width):
            idx = y * width + x
            if not visited[idx]:
                visited[idx] = 1
                queue.append((x, y))

    # BFS expansion
    while queue:
        cx, cy = queue.popleft()
        for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < width and 0 <= ny < height:
                nidx = ny * width + nx
                if not visited[nidx]:
                    np_idx = nidx * 3
                    nr, ng, nb = rgb_bytes[np_idx], rgb_bytes[np_idx+1], rgb_bytes[np_idx+2]
                    if is_white_bg(nr, ng, nb, ny):
                        visited[nidx] = 1
                        queue.append((nx, ny))

    # visited[idx] == 1 means background.
    # Now create RGBA output
    rgba_out = bytearray(width * height * 4)

    # Calculate bounding box of foreground
    min_x, max_x_box = width, 0
    min_y, max_y_box = height, 0
    fg_count = 0

    for y in range(height):
        for x in range(width):
            idx = y * width + x
            out_idx = idx * 4
            p_idx = idx * 3
            r, g, b = rgb_bytes[p_idx], rgb_bytes[p_idx+1], rgb_bytes[p_idx+2]

            if visited[idx] == 1:
                # Transparent background
                rgba_out[out_idx] = 0
                rgba_out[out_idx+1] = 0
                rgba_out[out_idx+2] = 0
                rgba_out[out_idx+3] = 0
            else:
                # Foreground pixel
                fg_count += 1
                if x < min_x: min_x = x
                if x > max_x_box: max_x_box = x
                if y < min_y: min_y = y
                if y > max_y_box: max_y_box = y

                # Soft edge alpha: if neighbor is background, calculate soft alpha
                has_bg_neighbor = False
                for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < width and 0 <= ny < height:
                        if visited[ny * width + nx] == 1:
                            has_bg_neighbor = True
                            break

                if has_bg_neighbor:
                    # Soft anti-aliased edge
                    lum = (r * 299 + g * 587 + b * 114) // 1000
                    alpha = max(140, min(255, 255 - max(0, lum - 220) * 8))
                    rgba_out[out_idx] = r
                    rgba_out[out_idx+1] = g
                    rgba_out[out_idx+2] = b
                    rgba_out[out_idx+3] = alpha
                else:
                    rgba_out[out_idx] = r
                    rgba_out[out_idx+1] = g
                    rgba_out[out_idx+2] = b
                    rgba_out[out_idx+3] = 255

    print(f"  Foreground pixels: {fg_count} ({fg_count/(width*height)*100:.1f}%)")
    print(f"  Bounding box: x=[{min_x}, {max_x_box}], y=[{min_y}, {max_y_box}]")
    print(f"  Height of bowl: {max_y_box - min_y}px, Width: {max_x_box - min_x}px")

    # Write out using convert
    writer = subprocess.Popen(['convert', '-size', f'{width}x{height}', '-depth', '8', 'rgba:-', dst_path], stdin=subprocess.PIPE)
    writer.communicate(rgba_out)
    print(f"  Saved clean cutout to {dst_path}\n")

if __name__ == '__main__':
    dishes = [
        ('src/assets/images/float_miso_bowl_1789288488589.jpg', 'public/cutouts/bowl_golden_miso.png', 800),
        ('src/assets/images/black_garlic_3d_bowl_1789213342794.jpg', 'public/cutouts/bowl_black_garlic.png', 940),
        ('src/assets/images/spicy_3d_ramen_bowl_1789213323413.jpg', 'public/cutouts/bowl_spicy_sesame.png', 990),
        ('src/assets/images/float_shio_bowl_1789288510864.jpg', 'public/cutouts/bowl_citrus_shio.png', 725),
        ('src/assets/images/float_truffle_bowl_1789288597729.jpg', 'public/cutouts/bowl_truffle_shoyu.png', 820),
    ]

    for src, dst, max_y in dishes:
        process_bowl(src, dst, max_y)
