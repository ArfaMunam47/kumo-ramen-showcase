import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus,
  Eye
} from 'lucide-react';
import { ProductDish, ALL_PRODUCTS } from '../data/arabicShowcaseData';

export interface ShowcaseDishItem {
  id: string;
  name: string;
  nameEn: string;
  subtitle: string;
  price: string;
  image: string;
}

// 5 Ultra-Clean 3D Transparent Cutout Ceramic Ramen Bowls (Zero background, zero green fringe)
const SHOWCASE_DISHES: ShowcaseDishItem[] = [
  {
    id: 'kumo-miso',
    name: 'رامن الميسو الذهبي',
    nameEn: 'Golden Miso Ramen',
    subtitle: 'مرق ميسو غني وكريمي مع شريحة شاشو طرية وبيض معتق',
    price: '€14',
    image: '/cutouts/bowl_golden_miso.png',
  },
  {
    id: 'kuro-tonkotsu',
    name: 'رامن الثوم الأسود والتونكوتسو',
    nameEn: 'Black Garlic Tonkotsu',
    subtitle: 'مرق تونكوتسو مطبوخ ببطء ٢٠ ساعة مع زيت الثوم الأسود المحمص',
    price: '€16',
    image: '/cutouts/bowl_black_garlic.png',
  },
  {
    id: 'spicy-sesame-ramen',
    name: 'رامن السمسم والتشيلي الحار',
    nameEn: 'Spicy Sesame Tantanmen',
    subtitle: 'مرق التانتانمن المحمص الحار مع زيت الفلفل الحرفي',
    price: '€15',
    image: '/cutouts/bowl_spicy_sesame.png',
  },
  {
    id: 'citrus-shio-ramen',
    name: 'رامن الشيو بالحمضيات واليوزو',
    nameEn: 'Citrus Shio Ramen',
    subtitle: 'مرق دجاج ذهبي نقي متبل بملح أوكيناوا وقشور اليوزو المنعشة',
    price: '€14.5',
    image: '/cutouts/bowl_citrus_shio.png',
  },
  {
    id: 'chili-butter-ramen',
    name: 'رامن الفلفل الحار وزبدة الميسو',
    nameEn: 'Chili Butter Miso',
    subtitle: 'مرق ميسو مدخن مع زبدة هوكايدو وخيوط الفلفل الحريرية',
    price: '€15.5',
    image: '/cutouts/bowl_chili_butter.png',
  },
];

interface FoodOrbitShowcaseProps {
  onSelectProduct?: (dish: ProductDish) => void;
}

export const FoodOrbitShowcase: React.FC<FoodOrbitShowcaseProps> = ({ onSelectProduct }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  const total = SHOWCASE_DISHES.length;

  // Window resize tracking for responsive distance between bowls
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload cutout assets
  useEffect(() => {
    SHOWCASE_DISHES.forEach((dish) => {
      const img = new Image();
      img.src = dish.image;
    });
  }, []);

  // Circular offset calculation: -1 is left, 0 is center, +1 is right
  const getDiff = (index: number) => {
    let diff = (index - activeIndex) % total;
    if (diff > total / 2) diff -= total;
    if (diff <= -total / 2) diff += total;
    return diff;
  };

  // Horizontal position offset based on screen width
  const getHorizontalOffset = (diff: number) => {
    if (diff === 0) return 0;
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth < 1024;
    const step = isMobile ? 155 : isTablet ? 240 : 300;
    return diff * step;
  };

  // Manual navigation on click only (NO auto-rotation)
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const currentDish = SHOWCASE_DISHES[activeIndex];

  const handleDishInspect = (dishId: string) => {
    if (!onSelectProduct) return;
    const matched = ALL_PRODUCTS.find((p) => p.id === dishId) || ALL_PRODUCTS[0];
    onSelectProduct(matched);
  };

  return (
    <section 
      id="premium-food-showcase"
      className="w-full relative py-7 sm:py-10 md:py-12 px-4 select-none overflow-hidden bg-[#F3F0E9] flex flex-col items-center justify-center"
      aria-label="معرض الأطباق التفاعلي الحرفي"
    >
      {/* ========================================================= */}
      {/* 1. EDITORIAL COMPACT HEADER                               */}
      {/* ========================================================= */}
      <div className="w-full max-w-xl flex flex-col items-center text-center z-10 mb-4 sm:mb-6">
        <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#8C8370] uppercase mb-1">
          المعرض الحرفي • انقر على أي وعاء للتنقل
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#242421] tracking-tight">
          اكتشف فن الأوعية اليابانية
        </h2>
        <div className="w-10 h-[1.5px] bg-[#D4B26F]/60 mt-2" />
      </div>

      {/* ========================================================= */}
      {/* 2. THE 3D PRODUCT STAGE (BLUR-TO-FOCUS 3-BOWL EXPERIENCE)  */}
      {/* Center bowl: Large, 100% sharp, floating, contact shadow   */}
      {/* Left/Right bowls: Small, blurry, click to bring to center  */}
      {/* ========================================================= */}
      <div className="relative w-full max-w-4xl h-[250px] xs:h-[280px] sm:h-[320px] md:h-[350px] flex items-center justify-center overflow-visible">
        {SHOWCASE_DISHES.map((dish, index) => {
          const diff = getDiff(index);
          const isCenter = diff === 0;
          const isLeft = diff === -1;
          const isRight = diff === 1;
          const isVisible = Math.abs(diff) <= 1;
          const xOffset = getHorizontalOffset(diff);

          // 3D Depth-of-field configuration:
          // Center: full scale (1.0), 100% sharp (0px blur), top z-index
          // Left & Right: subtle blur (2.5px - clear and appetizing, not overly blurred), scale 0.68, opacity 0.72
          // Hidden offscreen: scale 0.4, 0 opacity
          let scale = 0.68;
          let opacity = 0.72;
          let blurValue = 2.5;
          let zIndex = 15;

          if (isCenter) {
            scale = 1;
            opacity = 1;
            blurValue = 0;
            zIndex = 30;
          } else if (!isVisible) {
            scale = 0.4;
            opacity = 0;
            blurValue = 8;
            zIndex = 5;
          }

          return (
            <motion.div
              key={dish.id}
              initial={false}
              animate={{
                x: xOffset,
                scale,
                opacity,
                filter: `blur(${blurValue}px)`,
                zIndex,
              }}
              transition={{
                duration: 0.55,
                ease: [0.25, 1, 0.5, 1], // Fluid cubic ease
              }}
              whileHover={
                !isCenter && isVisible
                  ? {
                      scale: 0.74,
                      opacity: 0.88,
                      filter: 'blur(1px)',
                    }
                  : {}
              }
              onClick={() => {
                if (isCenter) {
                  handleDishInspect(dish.id);
                } else if (isLeft) {
                  handlePrev();
                } else if (isRight) {
                  handleNext();
                } else {
                  setActiveIndex(index);
                }
              }}
              className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-pointer"
              style={{
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
              role="button"
              tabIndex={isVisible ? 0 : -1}
              aria-label={isCenter ? `عرض تفاصيل ${dish.name}` : `اختيار ${dish.name}`}
            >
              {/* Center Focus Bowl: Large, crisp, gentle float & rich contact drop shadow */}
              {isCenter ? (
                <div className="relative flex flex-col items-center group">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative w-[210px] xs:w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] aspect-[4/3] flex items-center justify-center"
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-contain pointer-events-none select-none drop-shadow-sm group-hover:scale-102 transition-transform duration-300"
                    />

                    {/* Subtle inspection badge on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none">
                      <span className="bg-[#FAF9F5]/95 text-[#242421] text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.15)] flex items-center gap-1.5 border border-[#DED9CA]">
                        <Eye className="w-3.5 h-3.5 text-[#D99B19]" />
                        <span>معاينة</span>
                      </span>
                    </div>
                  </motion.div>

                  {/* DEEP CONTACT & GROUND SHADOW UNDER CENTER BOWL */}
                  <motion.div
                    animate={{
                      scaleX: [1, 0.95, 1],
                      scaleY: [1, 0.92, 1],
                      opacity: [1, 0.86, 1],
                    }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative flex flex-col items-center -mt-4 sm:-mt-6 pointer-events-none w-full"
                  >
                    {/* Razor contact shadow */}
                    <div className="w-[38%] h-3 bg-[#140e08]/70 rounded-[100%] blur-[2px]" />
                    {/* Dense occlusion shadow */}
                    <div className="w-[58%] h-5 sm:h-6 bg-[#1a120a]/50 rounded-[100%] blur-md -mt-1.5" />
                    {/* Broad soft ground shadow */}
                    <div className="w-[78%] h-8 sm:h-10 bg-[#2b1f14]/30 rounded-[100%] blur-xl -mt-3.5 sm:-mt-4" />
                  </motion.div>
                </div>
              ) : (
                /* Inactive Side Bowls: Smaller, blurry, with soft ground contact */
                <div className="relative flex flex-col items-center">
                  <div className="relative w-[190px] xs:w-[220px] sm:w-[260px] md:w-[290px] aspect-[4/3] flex items-center justify-center">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                  </div>
                  {/* Soft side ground shadow */}
                  <div className="w-[52%] h-3 bg-[#231A10]/20 rounded-[100%] blur-sm -mt-2 pointer-events-none" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* 3. PRODUCT INFORMATION (MINIMAL ARABIC TYPOGRAPHY)         */}
      {/* ========================================================= */}
      <motion.div 
        key={currentDish.id}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex flex-col items-center text-center mt-2 sm:mt-3 z-20 px-4"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#242421] tracking-tight">
          {currentDish.name}
        </h3>
        
        <p className="text-xs sm:text-sm text-[#726F66] mt-0.5 font-medium max-w-sm sm:max-w-md line-clamp-2">
          {currentDish.subtitle}
        </p>

        <span className="text-sm sm:text-base font-bold text-[#8C6D23] mt-1 font-mono">
          {currentDish.price}
        </span>
      </motion.div>

      {/* ========================================================= */}
      {/* 4. MANUAL GLASS CONTROLS (CLICK ONLY, NO AUTO ROTATION)   */}
      {/* ========================================================= */}
      <div className="flex items-center justify-center gap-3 mt-3.5 sm:mt-4 z-20">
        
        {/* Previous (‹) */}
        <button
          onClick={handlePrev}
          aria-label="الطبق السابق"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/60 hover:bg-white/90 active:scale-95 backdrop-blur-md border border-white/80 text-[#242421] flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 text-[#242421]" />
        </button>

        {/* Center Counter */}
        <div className="h-9 sm:h-10 px-4 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-xs flex items-center">
          <span className="text-xs sm:text-sm font-mono tracking-wider text-[#242421] font-bold">
            {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Next (›) */}
        <button
          onClick={handleNext}
          aria-label="الطبق التالي"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/60 hover:bg-white/90 active:scale-95 backdrop-blur-md border border-white/80 text-[#242421] flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-[#242421]" />
        </button>

      </div>

      {/* Subtle Inspection Button */}
      <button
        onClick={() => handleDishInspect(currentDish.id)}
        className="mt-2 text-xs font-semibold text-[#8C8370] hover:text-[#242421] flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-3 rounded-full hover:bg-white/40"
      >
        <Plus className="w-3.5 h-3.5" />
        <span>عرض المكونات والوصفة الحرفية</span>
      </button>

    </section>
  );
};

export default FoodOrbitShowcase;
