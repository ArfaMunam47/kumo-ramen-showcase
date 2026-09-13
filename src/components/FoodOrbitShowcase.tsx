import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus,
  Eye
} from 'lucide-react';
import { ProductDish, ALL_PRODUCTS } from '../data/arabicShowcaseData';

// Direct asset imports for 100% infallible Vite bundling in local Chrome & production
import bowlGoldenMiso from '../assets/cutouts/bowl_golden_miso.png';
import bowlChiliButter from '../assets/cutouts/bowl_chili_butter.png';
import bowlSpicySesame from '../assets/cutouts/bowl_spicy_sesame.png';
import bowlCitrusShio from '../assets/cutouts/bowl_citrus_shio.png';
import bowlTruffleShoyu from '../assets/cutouts/bowl_truffle_shoyu.png';

export interface ShowcaseDishItem {
  id: string;
  name: string;
  nameEn: string;
  subtitle: string;
  price: string;
  image: string;
  fallbackImage: string;
}

// 5 Ultra-Clean 3D Transparent Cutout Ceramic Ramen Bowls (Zero background, zero artifacts, intact ceramic bases)
const SHOWCASE_DISHES: ShowcaseDishItem[] = [
  {
    id: 'kumo-miso',
    name: 'رامن الميسو الذهبي',
    nameEn: 'Golden Miso Ramen',
    subtitle: 'مرق ميسو غني وكريمي مع شريحة شاشو طرية وبيض معتق',
    price: '€14',
    image: bowlGoldenMiso,
    fallbackImage: '/cutouts/bowl_golden_miso.png',
  },
  {
    id: 'chili-butter-ramen',
    name: 'رامن الزبدة والفلفل الحار',
    nameEn: 'Hokkaido Chili Butter Miso',
    subtitle: 'مرق ميسو مدخن مع زبدة هوكايدو الذائبة وخيوط الفلفل الحريرية',
    price: '€15.5',
    image: bowlChiliButter,
    fallbackImage: '/cutouts/bowl_chili_butter.png',
  },
  {
    id: 'spicy-sesame-ramen',
    name: 'رامن السمسم والتشيلي الحار',
    nameEn: 'Spicy Sesame Tantanmen',
    subtitle: 'مرق التانتانمن المحمص الحار مع زيت الفلفل الحرفي',
    price: '€15',
    image: bowlSpicySesame,
    fallbackImage: '/cutouts/bowl_spicy_sesame.png',
  },
  {
    id: 'citrus-shio-ramen',
    name: 'رامن الشيو بالحمضيات واليوزو',
    nameEn: 'Citrus Shio Ramen',
    subtitle: 'مرق دجاج ذهبي نقي متبل بملح أوكيناوا وقشور اليوزو المنعشة',
    price: '€14.5',
    image: bowlCitrusShio,
    fallbackImage: '/cutouts/bowl_citrus_shio.png',
  },
  {
    id: 'truffle-mushroom-ramen',
    name: 'رامن الكمأة السوداء والشوّيو',
    nameEn: 'Black Truffle Shoyu Ramen',
    subtitle: 'مرق شوّيو حريري مع شرائح الكمأة الإيطالية وزيت الكمأة المعتق',
    price: '€17',
    image: bowlTruffleShoyu,
    fallbackImage: '/cutouts/bowl_truffle_shoyu.png',
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

  // Keyboard navigation for power users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handlePrev(); // In RTL, right arrow moves to previous item
      } else if (e.key === 'ArrowLeft') {
        handleNext(); // In RTL, left arrow moves to next item
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Circular offset calculation: -1 is left, 0 is center, +1 is right
  const getDiff = (index: number) => {
    let diff = (index - activeIndex) % total;
    if (diff > total / 2) diff -= total;
    if (diff <= -total / 2) diff += total;
    return diff;
  };

  // Horizontal position offset based on screen width - tuned with normal, balanced padding between bowls
  const getHorizontalOffset = (diff: number) => {
    if (diff === 0) return 0;
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth < 1024;
    const step = isMobile ? 180 : isTablet ? 260 : 330;
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
      className="w-full relative py-8 sm:py-12 md:py-14 px-3 sm:px-6 select-none overflow-hidden bg-[#F3F0E9] flex flex-col items-center justify-center"
      aria-label="معرض الأطباق التفاعلي الحرفي"
    >
      {/* ========================================================= */}
      {/* 1. EDITORIAL COMPACT HEADER                               */}
      {/* ========================================================= */}
      <div className="w-full max-w-xl flex flex-col items-center text-center z-10 mb-4 sm:mb-6">
        <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#8C8370] uppercase mb-1">
          المعرض الحرفي ثلاثي الأبعاد • 3D ARTISAN SHOWCASE
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#242421] tracking-tight">
          اكتشف فن الأوعية اليابانية
        </h2>
        <div className="w-12 h-[2px] bg-[#D4B26F] mt-2 rounded-full" />
      </div>

      {/* ========================================================= */}
      {/* 2. THE 3D PRODUCT STAGE WITH NORMAL PADDING & ANIME BUTTONS */}
      {/* Center bowl: Crisp, 100% sharp, floating 3D ceramic bowl   */}
      {/* Left/Right bowls: Smaller, normal padding, visible softness*/}
      {/* Buttons: Positioned comfortably on outer wings             */}
      {/* ========================================================= */}
      <div className="relative w-full max-w-7xl h-[280px] xs:h-[310px] sm:h-[360px] md:h-[400px] flex items-center justify-center overflow-visible px-2 sm:px-6 md:px-10">
        
        {/* ANIME PREMIUM SCROLL BUTTON (LEFT / PREV) - Comfortably distanced */}
        <div className="absolute left-2 sm:left-4 md:left-6 lg:left-10 z-40 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
          <motion.button
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 450, damping: 18 }}
            onClick={handlePrev}
            aria-label="الوعاء السابق"
            className="group relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#24221E] via-[#171614] to-[#0E0D0C] text-[#E5C158] border-2 border-[#D4AF37]/80 hover:border-[#E5C158] shadow-[0_0_20px_rgba(212,175,55,0.35),0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden"
          >
            {/* Anime Diagonal Katana Light-Streak Reflection */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            
            {/* Anime Mecha HUD Corner Brackets */}
            <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#E5C158]/70 pointer-events-none" />
            <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[#E5C158]/70 pointer-events-none" />

            {/* Glowing Inner Ring */}
            <div className="absolute inset-1 rounded-xl border border-[#D4AF37]/30 group-hover:border-[#E5C158]/60 transition-colors pointer-events-none" />

            {/* Anime Arrow & Glyph */}
            <div className="relative flex items-center justify-center">
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#FAF9F5] group-hover:text-[#E5C158] transition-all duration-300 group-hover:-translate-x-1 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
            </div>
          </motion.button>
          
          {/* Subtle Anime Sub-badge */}
          <span className="hidden sm:inline-block text-[10px] font-mono font-bold tracking-widest text-[#787264] group-hover:text-[#E5C158] uppercase">
            前へ • PREV
          </span>
        </div>

        {/* ANIME PREMIUM SCROLL BUTTON (RIGHT / NEXT) - Comfortably distanced */}
        <div className="absolute right-2 sm:right-4 md:right-6 lg:right-10 z-40 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
          <motion.button
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 450, damping: 18 }}
            onClick={handleNext}
            aria-label="الوعاء التالي"
            className="group relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#24221E] via-[#171614] to-[#0E0D0C] text-[#E5C158] border-2 border-[#D4AF37]/80 hover:border-[#E5C158] shadow-[0_0_20px_rgba(212,175,55,0.35),0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden"
          >
            {/* Anime Diagonal Katana Light-Streak Reflection */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            
            {/* Anime Mecha HUD Corner Brackets */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#E5C158]/70 pointer-events-none" />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#E5C158]/70 pointer-events-none" />

            {/* Glowing Inner Ring */}
            <div className="absolute inset-1 rounded-xl border border-[#D4AF37]/30 group-hover:border-[#E5C158]/60 transition-colors pointer-events-none" />

            {/* Anime Arrow & Glyph */}
            <div className="relative flex items-center justify-center">
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#FAF9F5] group-hover:text-[#E5C158] transition-all duration-300 group-hover:translate-x-1 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
            </div>
          </motion.button>
          
          {/* Subtle Anime Sub-badge */}
          <span className="hidden sm:inline-block text-[10px] font-mono font-bold tracking-widest text-[#787264] group-hover:text-[#E5C158] uppercase">
            NEXT • 次へ
          </span>
        </div>

        {/* 3D BOWLS CAROUSEL */}
        {SHOWCASE_DISHES.map((dish, index) => {
          const diff = getDiff(index);
          const isCenter = diff === 0;
          const isLeft = diff === -1;
          const isRight = diff === 1;
          const isVisible = Math.abs(diff) <= 1;
          const xOffset = getHorizontalOffset(diff);

          // Depth configuration:
          // Center: scale 1.0, 100% crisp, opacity 1, top z-index (30)
          // Left & Right: scale 0.66, dimmed (opacity 0.35) with glassmorphism effect, zIndex 15
          // Hidden offscreen: scale 0.35, 0 opacity, zIndex 5
          let scale = 0.66;
          let opacity = 0.35;
          let zIndex = 15;

          if (isCenter) {
            scale = 1;
            opacity = 1;
            zIndex = 30;
          } else if (!isVisible) {
            scale = 0.35;
            opacity = 0;
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
                zIndex,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 1, 0.5, 1], // Smooth cubic ease
              }}
              whileHover={
                !isCenter && isVisible
                  ? {
                      scale: 0.72,
                      opacity: 0.7,
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
              {/* Center Focus Bowl: Hero 3D floating presentation with realistic physical drop shadow */}
              {isCenter ? (
                <div className="relative flex flex-col items-center group">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative w-[220px] xs:w-[250px] sm:w-[290px] md:w-[330px] aspect-square flex items-center justify-center"
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        if (dish.fallbackImage && e.currentTarget.src !== dish.fallbackImage) {
                          e.currentTarget.src = dish.fallbackImage;
                        }
                      }}
                      style={{
                        filter: 'drop-shadow(0 16px 26px rgba(28, 18, 10, 0.36)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.20))',
                      }}
                      className="w-full h-full object-contain pointer-events-none select-none group-hover:scale-102 transition-transform duration-300"
                    />

                    {/* Subtle inspection badge on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none">
                      <span className="bg-[#FAF9F5]/95 text-[#242421] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.15)] flex items-center gap-1.5 border border-[#DED9CA]">
                        <Eye className="w-3.5 h-3.5 text-[#D99B19]" />
                        <span>معاينة المكونات</span>
                      </span>
                    </div>
                  </motion.div>

                  {/* REALISTIC 3D FLOATING GROUND DROP SHADOW UNDER CENTER BOWL */}
                  <motion.div
                    animate={{
                      scaleX: [1, 0.93, 1],
                      scaleY: [1, 0.90, 1],
                      opacity: [1, 0.82, 1],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative flex flex-col items-center -mt-9 sm:-mt-12 pointer-events-none w-full"
                  >
                    {/* Razor contact shadow directly under ceramic foot */}
                    <div className="w-[36%] h-2.5 bg-[#120B05]/65 rounded-[100%] blur-[2px]" />
                    {/* Dense ambient occlusion core shadow */}
                    <div className="w-[56%] h-4.5 sm:h-5.5 bg-[#1C1208]/45 rounded-[100%] blur-[6px] -mt-1" />
                    {/* Broad soft ground shadow */}
                    <div className="w-[78%] h-7 sm:h-9 bg-[#2E1F12]/24 rounded-[100%] blur-xl -mt-2.5 sm:-mt-3" />
                    {/* Ambient warm table reflection */}
                    <div className="w-[88%] h-8 sm:h-10 bg-[#D4AF37]/12 rounded-[100%] blur-2xl -mt-3" />
                  </motion.div>
                </div>
              ) : (
                /* Inactive Side Bowls: Subdued, ethereal 3D floating with glassmorphic translucency & zero white background */
                <div className="relative flex flex-col items-center group">
                  {/* Floating 3D Bowl with Glassmorphic Lens Atmosphere */}
                  <div className="relative w-[160px] xs:w-[180px] sm:w-[210px] md:w-[230px] aspect-square flex items-center justify-center">
                    
                    {/* Ultra-subtle frosted glass circular atmosphere - purely transparent, zero white background */}
                    <div className="absolute inset-2 rounded-full backdrop-blur-md bg-white/[0.04] border border-white/[0.18] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] pointer-events-none" />

                    {/* Cutout Bowl with Subdued Depth */}
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        if (dish.fallbackImage && e.currentTarget.src !== dish.fallbackImage) {
                          e.currentTarget.src = dish.fallbackImage;
                        }
                      }}
                      style={{
                        filter: 'drop-shadow(0 8px 18px rgba(30, 20, 10, 0.12))',
                      }}
                      className="relative z-10 w-full h-full object-contain pointer-events-none select-none transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Diagonal Glass Reflection Specular Sheen */}
                    <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-transparent via-white/[0.18] to-transparent pointer-events-none z-20 mix-blend-overlay" />

                    {/* Subtle Glassmorphic Mini Action Pill on Hover */}
                    <div className="absolute -bottom-2 inset-x-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
                      <span className="bg-[#171614]/80 backdrop-blur-md text-[#E5C158] text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40 shadow-sm flex items-center gap-1">
                        <span>{isLeft ? 'السابق' : 'التالي'}</span>
                      </span>
                    </div>
                  </div>

                  {/* Soft subtle side ground shadow */}
                  <div className="w-[45%] h-2 bg-[#231A10]/12 rounded-[100%] blur-sm -mt-5 pointer-events-none" />
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
        className="flex flex-col items-center text-center mt-3 sm:mt-4 z-20 px-4"
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
      {/* 4. SYNCED PAGINATION DOTS & COUNTER                       */}
      {/* ========================================================= */}
      <div className="flex items-center justify-center gap-2 mt-3.5 sm:mt-4 z-20">
        {SHOWCASE_DISHES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`الانتقال إلى الطبق ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === activeIndex 
                ? 'w-7 bg-[#242421]' 
                : 'w-2 bg-[#DED9CA] hover:bg-[#A8A295]'
            }`}
          />
        ))}
      </div>

      {/* Subtle Inspection Button */}
      <button
        onClick={() => handleDishInspect(currentDish.id)}
        className="mt-2.5 text-xs font-semibold text-[#8C8370] hover:text-[#242421] flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-3 rounded-full hover:bg-white/40"
      >
        <Plus className="w-3.5 h-3.5" />
        <span>عرض المكونات والوصفة الحرفية</span>
      </button>

    </section>
  );
};

export default FoodOrbitShowcase;
