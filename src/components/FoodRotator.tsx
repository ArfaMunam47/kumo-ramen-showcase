import React, { useState, useEffect, useRef } from 'react';
import { ProductDish, ALL_PRODUCTS } from '../data/arabicShowcaseData';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Pause, Play } from 'lucide-react';

interface FoodRotatorProps {
  onOpenProductDetails: (dish: ProductDish) => void;
}

// 8 Curated Master Signature Dishes for the Continuous Showcase
const ROTATOR_DISH_IDS = [
  'kumo-miso',
  'kuro-tonkotsu',
  'spicy-sesame-ramen',
  'yuzu-chicken-ramen',
  'truffle-mushroom-ramen',
  'chili-butter-ramen',
  'shoyu-classic-ramen',
  'miso-corn-ramen',
];

// 4-side culinary ingredient callouts for each dish (with safe offset classes well outside the food circle)
interface CulinaryCallout {
  name: string;
  nameEn: string;
  badge: string;
  positionClass: string;
}

const DISH_CALLOUTS: Record<string, CulinaryCallout[]> = {
  'kumo-miso': [
    { name: 'ميسو معتق ٣ سنوات', nameEn: '3-Year Cedar Miso', badge: 'تخمير حجري', positionClass: 'top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-4' },
    { name: 'نودلز هوكايدو يدوية', nameEn: 'Hand-Pulled Wheat', badge: 'عجن بطيء', positionClass: 'top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-4' },
    { name: 'ثوم محمص ببطء', nameEn: 'Slow-Charred Garlic', badge: 'زيت عطري', positionClass: 'bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-4' },
    { name: 'سمسم ذهبي محمص', nameEn: 'Golden Toasted Sesame', badge: 'طحن بارد', positionClass: 'bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-3 md:left-4' },
  ],
  'kuro-tonkotsu': [
    { name: 'زيت مايو الأسود', nameEn: 'Roasted Black Mayu', badge: 'تفحيم ثوم', positionClass: 'top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-4' },
    { name: 'فطر كيكوراجي مقرمش', nameEn: 'Crispy Wood Ear', badge: 'قرمشة صوتية', positionClass: 'top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-4' },
    { name: 'شرائح شاشو مكرملة', nameEn: 'Caramelized Chashu', badge: 'طهي بطيء', positionClass: 'bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-4' },
    { name: 'كراث بينشوتان محمص', nameEn: 'Charred Leek', badge: 'فحم طبيعي', positionClass: 'bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-3 md:left-4' },
  ],
  'spicy-sesame-ramen': [
    { name: 'طحينة سمسم حجرية', nameEn: 'Stone-Ground Sesame', badge: 'طحن يدوي', positionClass: 'top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-4' },
    { name: 'زيت فلفل مقرمش', nameEn: 'Chili Crunch Oil', badge: 'نقع بارد', positionClass: 'top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-4' },
    { name: 'بوك تشوي مقرمش', nameEn: 'Crisp Baby Bok Choy', badge: 'سوتيه هادئ', positionClass: 'bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-4' },
    { name: 'بصل أخضر مقرمش', nameEn: 'Fresh Spring Onion', badge: 'تقطيع يومي', positionClass: 'bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-3 md:left-4' },
  ],
  'yuzu-chicken-ramen': [
    { name: 'بشر قشور اليوزو', nameEn: 'Kochi Mountain Yuzu', badge: 'حمضيات نقية', positionClass: 'top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-4' },
    { name: 'دجاج حر مدخن', nameEn: 'Smoked Free-Range Chicken', badge: 'تدخين قيقب', positionClass: 'top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-4' },
    { name: 'براعم خيزران غضة', nameEn: 'Tender Menma Bamboo', badge: 'تتبيل تاري', positionClass: 'bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-4' },
    { name: 'أعشاب كوجو الجبلية', nameEn: 'Wild Mountain Herbs', badge: 'حصاد صباحي', positionClass: 'bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-3 md:left-4' },
  ],
  'truffle-mushroom-ramen': [
    { name: 'زيت الكمأة السوداء', nameEn: 'Black Truffle Oil', badge: 'استخلاص نقي', positionClass: 'top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-4' },
    { name: 'فطر الموريل البري', nameEn: 'Wild Morel Mushrooms', badge: 'سوتيه زبدة', positionClass: 'top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-4' },
    { name: 'صفار أونسن معتق', nameEn: 'Cured Golden Yolk', badge: 'نقع ٢٤ ساعة', positionClass: 'bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-4' },
    { name: 'رقائق جذر اللوتس', nameEn: 'Crispy Lotus Chips', badge: 'قلي خفيف', positionClass: 'bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-3 md:left-4' },
  ],
  'chili-butter-ramen': [
    { name: 'زبدة هوكايدو خام', nameEn: 'Cultured Hokkaido Butter', badge: 'حليب نقي', positionClass: 'top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-4' },
    { name: 'ميسو أحمر مدخن', nameEn: 'Smoked Red Miso', badge: 'تعتيق سنتين', positionClass: 'top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-4' },
    { name: 'خيوط الفلفل الحريرية', nameEn: 'Silken Chili Threads', badge: 'نكهة عطرية', positionClass: 'bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-4' },
    { name: 'نودلز سميكة متموجة', nameEn: 'Wavy Thick Noodles', badge: 'امتصاص مرق', positionClass: 'bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-3 md:left-4' },
  ],
  'shoyu-classic-ramen': [
    { name: 'صويا معتقة براميل الأرز', nameEn: '2-Year Cedar Shoyu', badge: 'تعتيق تقليدي', positionClass: 'top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-4' },
    { name: 'شريحة نوري بحرية', nameEn: 'Crisp Ariake Nori', badge: 'حصاد شتوي', positionClass: 'top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-4' },
    { name: 'براعم مينما مقرمشة', nameEn: 'Seasoned Menma Shoots', badge: 'نقع أومامي', positionClass: 'bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-4' },
    { name: 'ناروتوماكي تقليدي', nameEn: 'Artisan Narutomaki', badge: 'دوامة البحر', positionClass: 'bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-3 md:left-4' },
  ],
  'miso-corn-ramen': [
    { name: 'ذرة هوكايدو السكرية', nameEn: 'Sweet Hokkaido Corn', badge: 'قرمشة طبيعية', positionClass: 'top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-4' },
    { name: 'مكعب زبدة ذائبة', nameEn: 'Melting Butter Cube', badge: 'إذابة بطيئة', positionClass: 'top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-4' },
    { name: 'مرق ميسو ذهبي', nameEn: 'Golden Miso Broth', badge: '١٤ ساعة غليان', positionClass: 'bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-3 md:right-4' },
    { name: 'بصل أخضر هوكايدو', nameEn: 'Hokkaido Spring Scallions', badge: 'نضارة فورية', positionClass: 'bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-3 md:left-4' },
  ],
};

// Rich, culinary-derived ambient lighting profiles for each dish
const DISH_AMBIENT_LIGHTING: Record<string, {
  glow: string;
  glowWide: string;
  borderGlow: string;
  accent: string;
}> = {
  'kumo-miso': {
    glow: 'rgba(217, 155, 25, 0.22)',
    glowWide: 'rgba(232, 217, 143, 0.28)',
    borderGlow: 'rgba(255, 215, 120, 0.85)',
    accent: '#D99B19',
  },
  'kuro-tonkotsu': {
    glow: 'rgba(180, 115, 60, 0.20)',
    glowWide: 'rgba(210, 160, 115, 0.25)',
    borderGlow: 'rgba(245, 195, 145, 0.80)',
    accent: '#B4733C',
  },
  'spicy-sesame-ramen': {
    glow: 'rgba(210, 95, 55, 0.22)',
    glowWide: 'rgba(240, 140, 100, 0.28)',
    borderGlow: 'rgba(255, 185, 150, 0.85)',
    accent: '#D25F37',
  },
  'yuzu-chicken-ramen': {
    glow: 'rgba(145, 170, 85, 0.22)',
    glowWide: 'rgba(195, 215, 140, 0.28)',
    borderGlow: 'rgba(235, 248, 180, 0.85)',
    accent: '#8AA56D',
  },
  'truffle-mushroom-ramen': {
    glow: 'rgba(175, 140, 100, 0.20)',
    glowWide: 'rgba(215, 185, 150, 0.25)',
    borderGlow: 'rgba(245, 220, 185, 0.80)',
    accent: '#AF8C64',
  },
  'chili-butter-ramen': {
    glow: 'rgba(220, 125, 45, 0.22)',
    glowWide: 'rgba(245, 165, 95, 0.28)',
    borderGlow: 'rgba(255, 210, 150, 0.85)',
    accent: '#DC7D2D',
  },
  'shoyu-classic-ramen': {
    glow: 'rgba(195, 145, 70, 0.20)',
    glowWide: 'rgba(225, 185, 125, 0.25)',
    borderGlow: 'rgba(245, 215, 165, 0.80)',
    accent: '#C39146',
  },
  'miso-corn-ramen': {
    glow: 'rgba(225, 175, 45, 0.22)',
    glowWide: 'rgba(245, 210, 115, 0.28)',
    borderGlow: 'rgba(255, 230, 140, 0.85)',
    accent: '#E1AF2D',
  },
};

export const FoodRotator: React.FC<FoodRotatorProps> = ({ onOpenProductDetails }) => {
  // Collect the 8 dishes in precise order
  const dishes: ProductDish[] = ROTATOR_DISH_IDS.map((id) => {
    const found = ALL_PRODUCTS.find((d) => d.id === id);
    if (found) return found;
    return ALL_PRODUCTS[0];
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = useRef(false);

  const currentDish = dishes[currentIndex];
  const ambient = DISH_AMBIENT_LIGHTING[currentDish.id] || DISH_AMBIENT_LIGHTING['kumo-miso'];

  // Preload all 8 rotator images on mount so switching between dishes is instantaneous and crystal-clear
  useEffect(() => {
    dishes.forEach((dish) => {
      const img = new Image();
      img.src = dish.image;
    });
  }, [dishes]);

  // Check reduced motion & touch capability on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    isTouchDevice.current = !window.matchMedia('(hover: hover)').matches;

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // 4.5s calm auto-rotation interval, paused when hovered or explicitly paused
  useEffect(() => {
    if (isPaused || isHovered) return;

    // Fixed 3s auto-rotation interval as requested, paused when hovered or explicitly paused
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dishes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, isHovered, dishes.length, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  // Subtle parallax on desktop pointer movement (capped strictly at 4px)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice.current || prefersReducedMotion) return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMouseOffset({ x: x * 4, y: y * 4 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseOffset({ x: 0, y: 0 });
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section 
      id="continuous-showcase"
      className="w-full relative bg-[#F3F0E9] py-6 sm:py-8 md:py-10 overflow-hidden flex flex-col items-center justify-center font-sans select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Soft Natural Ambient Gradients */}
      <div className="absolute -top-36 right-1/4 w-[500px] h-[500px] bg-[#E8D98F]/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-36 left-1/4 w-[500px] h-[500px] bg-[#8AA56D]/15 rounded-full blur-[110px] pointer-events-none" />
      
      {/* Subtle organic dotted grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8C2B3_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />

      {/* Outer Center Stage Container */}
      <div className="w-[94vw] sm:w-[90vw] max-w-[1240px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* ======================================================== */}
        {/* 1. EDITORIAL HEADER: REFINED, SNUG PADDING              */}
        {/* ======================================================== */}
        <div className="space-y-2 max-w-xl mx-auto mb-3 sm:mb-4">
          
          <div className="inline-flex items-center gap-2 bg-[#FAF9F5] border border-[#DED9CA] px-3.5 py-1 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(45,35,20,0.03)]">
            <span 
              className="w-2 h-2 rounded-full animate-pulse transition-colors duration-700" 
              style={{ backgroundColor: ambient.accent }}
            />
            <span className="text-[10.5px] font-mono font-bold tracking-wider text-[#77756D] uppercase">
              معرض التذوق الحي المتواصل • THE LIVING ATELIER
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-editorial text-[#242421] tracking-tight">
            تشكيلة أوعية التوقيع الحرفي
          </h2>
          
          <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed">
            استعراض بصري حي لأطباق المعلم تاتسويا المستخلصة على نار هادئة؛ تتناوب الأوعية برقة كل ٣ ثوانٍ في ضوئها الطبيعي.
          </p>

        </div>

        {/* ======================================================== */}
        {/* 2. THE 3D TACTILE FOOD CIRCLE STAGE (INNER SHADOW FOCUS) */}
        {/* Compact stage width so callouts wrap neatly around circle*/}
        {/* ======================================================== */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-2xl sm:max-w-3xl min-h-[300px] sm:min-h-[340px] md:min-h-[370px] flex flex-col items-center justify-center my-1 sm:my-2 px-3"
        >
          
          {/* A. DIFFUSED AMBIENT OUTER GLOW (Subtle & soft on warm canvas) */}
          <motion.div
            animate={{
              backgroundColor: ambient.glow,
              scale: isHovered ? 1.04 : 1,
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] rounded-full blur-[60px] pointer-events-none -z-10 opacity-75"
          />

          {/* Secondary subtle halo for natural light bleed */}
          <motion.div
            animate={{
              backgroundColor: ambient.glowWide,
            }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute w-72 h-72 sm:w-88 sm:h-88 md:w-[440px] md:h-[440px] rounded-full blur-[90px] pointer-events-none -z-20 opacity-35"
          />

          {/* B. THE 4-SIDE CULINARY CALLOUTS (Snug padding, neatly framing the circle) */}
          <div className="absolute inset-0 pointer-events-none z-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={`callouts-${currentDish.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full relative"
              >
                {(DISH_CALLOUTS[currentDish.id] || DISH_CALLOUTS['kumo-miso']).map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ 
                      opacity: 1, 
                      y: prefersReducedMotion ? 0 : [0, -2.5, 0], 
                      scale: 1,
                      transition: {
                        y: { repeat: Infinity, duration: 4.2 + idx * 0.4, ease: 'easeInOut' },
                        opacity: { duration: 0.35, delay: idx * 0.06 },
                        scale: { duration: 0.35, delay: idx * 0.06 }
                      }
                    }}
                    exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                    className={`absolute ${item.positionClass} pointer-events-auto flex items-center gap-2 bg-[#FAF9F5]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#DED9CA] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_8px_rgba(45,35,20,0.05)] hover:border-[#D99B19]/50 transition-colors`}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-500" 
                      style={{ backgroundColor: ambient.accent }}
                    />
                    <div className="text-right">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-[#242421] leading-tight">
                          {item.name}
                        </span>
                        <span className="text-[8.5px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#EFECE3] text-[#77756D]">
                          {item.badge}
                        </span>
                      </div>
                      <span className="block text-[9.5px] font-mono text-[#77756D] leading-tight dir-ltr text-left mt-0.5">
                        {item.nameEn}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* C. MAIN TACTILE VESSEL WITH CRISP FOOD & INNER SHADOW EXPERIENCE (NO DROP SHADOW) */}
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: mouseOffset.x,
                    y: mouseOffset.y,
                  }
            }
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="relative flex flex-col items-center z-10"
          >
            {/* Outer Sculpted Ceramic Vessel Ring with Inset / Inner Bevel (No Outer Drop Shadow) */}
            <div
              onClick={() => onOpenProductDetails(currentDish)}
              className="group relative cursor-pointer rounded-full p-2 sm:p-2.5 md:p-3 bg-[#FAF9F5] border border-[#DDD7C8]
                shadow-[inset_0_2px_5px_rgba(255,255,255,1),inset_0_-3px_8px_rgba(45,35,20,0.12)]
                hover:border-[#D99B19]/50
                transition-all duration-300 ease-out"
            >
              
              {/* Inner Circular Well: Rich Sunken Inner Shadow Experience */}
              <div 
                className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-[310px] md:h-[310px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden bg-[#FAF8F2]"
              >
                
                {/* 1. THE FOOD IMAGE: 100% Crisp & High-Definition (Full Clarity) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDish.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full h-full relative z-0"
                  >
                    {/* Continuous Micro-Floating Motion */}
                    <motion.div
                      animate={
                        prefersReducedMotion
                          ? {}
                          : {
                              y: [0, -2, 0],
                            }
                      }
                      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-full h-full"
                    >
                      <img
                        src={currentDish.image}
                        alt={currentDish.name}
                        loading="eager"
                        className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-103"
                        decoding="sync"
                        referrerPolicy="no-referrer"
                        style={{
                          imageRendering: '-webkit-optimize-contrast',
                          backfaceVisibility: 'hidden',
                          transform: 'translateZ(0)',
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* 2. INNER BORDER LIGHTING RING: Confined Strictly to the Rim Edge */}
                <div 
                  className="absolute inset-0 rounded-full pointer-events-none z-10 transition-colors duration-700"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${ambient.borderGlow}`,
                  }}
                />

                {/* 3. RICH TACTILE INNER SHADOW EXPERIENCE (Recessed Stoneware Depth, Zero Drop Shadow) */}
                <div 
                  className="absolute inset-0 rounded-full pointer-events-none z-20"
                  style={{
                    boxShadow: 'inset 0 18px 32px rgba(18, 12, 6, 0.58), inset 0 -14px 26px rgba(18, 12, 6, 0.42), inset 0 3px 8px rgba(0, 0, 0, 0.35), inset 0 0 20px rgba(25, 18, 10, 0.25)',
                  }}
                />

                {/* 4. INTERACTIVE HOVER OVERLAY: Pure & Transparent */}
                <div className="absolute inset-0 bg-[#242421]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center z-30 pointer-events-none">
                  <span className="bg-[#FAF9F5] text-[#242421] text-xs font-bold px-4 py-2 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.2)] flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-250 border border-[#DED9CA]">
                    <Eye className="w-3.5 h-3.5 text-[#D99B19]" />
                    <span>عرض تشريح الطبق والوصفة • VIEW RECIPE</span>
                  </span>
                </div>

              </div>

            </div>

          </motion.div>

          {/* E. Subtle Pause / Play Indicator */}
          <div className="mt-4 flex items-center gap-2 z-20">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="text-[10px] font-mono text-[#77756D] hover:text-[#242421] bg-[#FAF9F5] border border-[#DED9CA]/70 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] transition-colors cursor-pointer hover:border-[#D99B19]"
            >
              {isPaused ? (
                <>
                  <Play className="w-2.5 h-2.5 text-[#8AA56D]" />
                  <span>استئناف التبديل التلقائي</span>
                </>
              ) : (
                <>
                  <Pause className="w-2.5 h-2.5 text-[#D99B19]" />
                  <span>إيقاف مؤقت لتأمل الطبق</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* ======================================================== */}
        {/* 3. EDITORIAL TEXT & DETAILS (STRICTLY OUTSIDE THE BOWL)  */}
        {/* Redesigned to breathe gracefully beneath the dish         */}
        {/* ======================================================== */}
        <div className="max-w-xl mx-auto mt-4 sm:mt-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentDish.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              
              {/* Category, Number, & Japanese Title Pill (Clean & Outside) */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF9F5] border border-[#DED9CA] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(45,35,20,0.04)]">
                <span 
                  className="w-1.5 h-1.5 rounded-full transition-colors duration-700" 
                  style={{ backgroundColor: ambient.accent }}
                />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#77756D]">
                  {currentDish.category}
                </span>
                <span className="text-[#DED9CA]">•</span>
                <span className="font-mono text-xs text-[#77756D]">
                  #{currentDish.number}
                </span>
                {currentDish.japaneseTitle && (
                  <>
                    <span className="text-[#DED9CA]">•</span>
                    <span className="font-serif text-xs font-medium text-[#242421] tracking-wider">
                      {currentDish.japaneseTitle}
                    </span>
                  </>
                )}
              </div>

              {/* Dish Name: High impact typography */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-editorial text-[#242421]">
                {currentDish.name}
              </h3>

              {/* English Subtitle */}
              <p className="text-xs sm:text-sm font-mono text-[#77756D] dir-ltr text-center">
                {currentDish.nameEn} • {currentDish.subtitleEn}
              </p>

              {/* Culinary Description */}
              <p className="text-xs sm:text-sm text-[#55534E] leading-relaxed max-w-md mx-auto">
                {currentDish.description}
              </p>

              {/* Price & Immediate Action */}
              <div className="pt-2 flex items-center justify-center gap-4">
                
                <div className="flex items-baseline gap-1.5 font-mono-num text-[#242421]">
                  <span className="text-2xl sm:text-3xl font-bold text-[#D99B19]">
                    {currentDish.priceNum || 49}
                  </span>
                  <span className="text-xs font-mono font-medium text-[#77756D]">ر.س</span>
                  <span className="text-xs font-mono text-[#8E8A80] mr-1">
                    ({currentDish.priceEur || '€14'})
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenProductDetails(currentDish)}
                  className="px-5 py-2.5 rounded-full bg-[#FAF9F5] text-[#242421] border border-[#DED9CA] hover:border-[#D99B19] hover:text-[#D99B19] text-xs font-bold transition-all shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_8px_rgba(45,35,20,0.06)] flex items-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D99B19]" />
                  <span>استكشاف الوصفة والحرفية</span>
                </button>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ======================================================== */}
        {/* 4. DISCREET PROGRESS INDICATOR (01 / 08)                  */}
        {/* ======================================================== */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3">
          
          {/* Subtle Dash Pagination */}
          <div className="flex items-center gap-1.5">
            {dishes.map((d, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={d.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
                    isActive
                      ? 'w-8 bg-[#D99B19] shadow-[0_1px_4px_rgba(217,155,25,0.3)]'
                      : 'w-2 bg-[#DED9CA] hover:bg-[#B5B0A2]'
                  }`}
                  title={`الانتقال إلى ${d.name}`}
                  aria-label={`انتقل إلى طبق رقم ${index + 1}`}
                />
              );
            })}
          </div>

          {/* Counter 01 / 08 */}
          <div className="font-mono text-xs text-[#77756D] tracking-widest">
            <strong className="text-[#242421]">0{currentIndex + 1}</strong>
            <span className="mx-1 text-[#C8C2B3]">/</span>
            <span>0{dishes.length}</span>
          </div>

        </div>

      </div>

    </section>
  );
};

