import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  Plus
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

// 7 Pristine transparent-cutout ceramic ramen bowls
const SHOWCASE_DISHES: ShowcaseDishItem[] = [
  {
    id: 'kumo-miso',
    name: 'رامن الميسو الذهبي',
    nameEn: 'Golden Miso Ramen',
    subtitle: 'مرق ميسو غني وكريمي مع شريحة شاشو طرية وبيض معتق',
    price: '€14',
    image: '/cutouts/product_1.png',
  },
  {
    id: 'kuro-tonkotsu',
    name: 'رامن الثوم الأسود والتونكوتسو',
    nameEn: 'Black Garlic Tonkotsu',
    subtitle: 'مرق تونكوتسو مطبوخ ببطء ٢٠ ساعة مع زيت الثوم الأسود المحمص',
    price: '€16',
    image: '/cutouts/product_2.png',
  },
  {
    id: 'spicy-sesame-ramen',
    name: 'رامن السمسم والتشيلي الحار',
    nameEn: 'Spicy Sesame Tantanmen',
    subtitle: 'مرق التانتانمن المحمص الحار مع زيت الفلفل الحرفي',
    price: '€15',
    image: '/cutouts/product_3.png',
  },
  {
    id: 'citrus-shio',
    name: 'رامن الشيو بالحمضيات واليوزو',
    nameEn: 'Citrus Shio Ramen',
    subtitle: 'مرق دجاج ذهبي نقي متبل بملح أوكيناوا وقشور اليوزو المنعشة',
    price: '€14.5',
    image: '/cutouts/product_4.png',
  },
  {
    id: 'truffle-mushroom-ramen',
    name: 'رامن الفطر والكمأة البيضاء',
    nameEn: 'Truffle Wild Mushroom',
    subtitle: 'خلاصة فطر الشيتاكي والإينوكي مع قطرات زيت الكمأة الفاخر',
    price: '€17',
    image: '/cutouts/product_5.png',
  },
  {
    id: 'shoyu-classic-ramen',
    name: 'رامن الشويو التراثي',
    nameEn: 'Tokyo Shoyu Heritage',
    subtitle: 'صويا طوكيو المعتقة في براميل خشب الأرز مع نودلز متموجة',
    price: '€14',
    image: '/cutouts/product_6.png',
  },
  {
    id: 'miso-corn-ramen',
    name: 'رامن الذرة وزبدة هوكايدو',
    nameEn: 'Hokkaido Corn Butter',
    subtitle: 'ميسو أحمر دافئ مع حبات الذرة الذهبية وزبدة المزرعة الذائبة',
    price: '€15',
    image: '/cutouts/product_7.png',
  },
];

// 4-side culinary headings for each dish (Top-Right, Top-Left, Bottom-Right, Bottom-Left)
const DISH_FOUR_HEADINGS: Record<string, {
  topRight: { title: string; subtitle: string };
  topLeft: { title: string; subtitle: string };
  bottomRight: { title: string; subtitle: string };
  bottomLeft: { title: string; subtitle: string };
}> = {
  'kumo-miso': {
    topRight: { title: 'ميسو معتق ٣ سنوات', subtitle: 'تخمير حجري تقليدي' },
    topLeft: { title: 'نودلز هوكايدو يدوية', subtitle: 'عجن بطيء ودقيق' },
    bottomRight: { title: 'شريحة شاشو طرية', subtitle: 'طهي بطيء ومكرمل' },
    bottomLeft: { title: 'بيض أجينتسوكي معتق', subtitle: 'صفار كريمي غني' },
  },
  'kuro-tonkotsu': {
    topRight: { title: 'زيت المايو الأسود', subtitle: 'تفحيم ثوم حرفي' },
    topLeft: { title: 'فطر كيكوراجي مقرمش', subtitle: 'قرمشة صوتية طبيعية' },
    bottomRight: { title: 'مرق تونكوتسو ٢٠ ساعة', subtitle: 'استخلاص بطيء مركز' },
    bottomLeft: { title: 'كراث بينشوتان مشوي', subtitle: 'فحم ياباني أصيل' },
  },
  'spicy-sesame-ramen': {
    topRight: { title: 'طحينة سمسم حجرية', subtitle: 'طحن يدوي بطيء' },
    topLeft: { title: 'زيت فلفل مقرمش', subtitle: 'نقع فلفل حار عطري' },
    bottomRight: { title: 'بوك تشوي طازج', subtitle: 'سوتيه خفيف وهادئ' },
    bottomLeft: { title: 'بصل أخضر مقرمش', subtitle: 'تقطيع يومي دقيق' },
  },
  'citrus-shio': {
    topRight: { title: 'قشور يوزو كوتشي', subtitle: 'حمضيات جبلية نقية' },
    topLeft: { title: 'مرق دجاج ذهبي نقي', subtitle: 'ملح صخري أوكيناوا' },
    bottomRight: { title: 'فطر إينوكي غض', subtitle: 'طازج ومقرمش' },
    bottomLeft: { title: 'شاشو الدجاج المدخن', subtitle: 'تدخين قيقب بطيء' },
  },
  'truffle-mushroom-ramen': {
    topRight: { title: 'زيت الكمأة البيضاء', subtitle: 'استخلاص نقي فاخر' },
    topLeft: { title: 'فطر الشيتاكي البري', subtitle: 'سوتيه زبدة طبيعية' },
    bottomRight: { title: 'توفو مدخن حرفي', subtitle: 'بروتين نباتي نقي' },
    bottomLeft: { title: 'مرق خضار أومامي', subtitle: 'طبخ هادئ مركز' },
  },
  'shoyu-classic-ramen': {
    topRight: { title: 'صويا براميل الأرز', subtitle: 'تعتيق سنتين كاملتين' },
    topLeft: { title: 'شريحة نوري بحرية', subtitle: 'حصاد شتوي ممتاز' },
    bottomRight: { title: 'براعم مينما مقرمشة', subtitle: 'تتبيل تاري أصيل' },
    bottomLeft: { title: 'نودلز طوكيو المتموجة', subtitle: 'قمح ياباني طازج' },
  },
  'miso-corn-ramen': {
    topRight: { title: 'ذرة هوكايدو السكرية', subtitle: 'حلاوة وقرمشة طبيعية' },
    topLeft: { title: 'مكعب زبدة هوكايدو', subtitle: 'إذابة بطيئة حليبية' },
    bottomRight: { title: 'مرق ميسو دافئ', subtitle: '١٤ ساعة غليان هادئ' },
    bottomLeft: { title: 'بصل كوجو الأخضر', subtitle: 'نضارة فورية عطرة' },
  },
};

interface FoodFourHeadingsShowcaseProps {
  onOpenProductDetails?: (dish: ProductDish) => void;
}

export const FoodFourHeadingsShowcase: React.FC<FoodFourHeadingsShowcaseProps> = ({ 
  onOpenProductDetails 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = SHOWCASE_DISHES.length;

  // Preload cutouts for instant changes
  useEffect(() => {
    SHOWCASE_DISHES.forEach((dish) => {
      const img = new Image();
      img.src = dish.image;
    });
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // FIXED 3S DURATION AS REQUESTED:
  // "make that time duration of 3s only in 2nd web page the pictures should change after 3s"
  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 3000); // Exactly 3 seconds

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, handleNext]);

  const currentDish = SHOWCASE_DISHES[activeIndex];
  const headings = DISH_FOUR_HEADINGS[currentDish.id] || DISH_FOUR_HEADINGS['kumo-miso'];

  const handleDishInspect = (dishId: string) => {
    if (!onOpenProductDetails) return;
    const matched = ALL_PRODUCTS.find((p) => p.id === dishId) || ALL_PRODUCTS[0];
    onOpenProductDetails(matched);
  };

  return (
    <section 
      id="live-dish-showcase"
      className="w-full relative py-6 sm:py-8 md:py-10 px-4 select-none overflow-hidden bg-[#F3F0E9] flex flex-col items-center justify-center"
      aria-label="معرض الأطباق الرباعي"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ========================================================= */}
      {/* 1. EDITORIAL HEADER WITH NORMAL, COMPACT PADDING          */}
      {/* ========================================================= */}
      <div className="w-full max-w-xl flex flex-col items-center text-center z-10 mb-3 sm:mb-4">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#8C8370] uppercase mb-1">
          مختارات الاستخلاص الحي
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#242421] tracking-tight">
          توازن المكونات الأربعة
        </h2>
        <div className="w-8 h-[1.5px] bg-[#D4B26F]/60 mt-1.5" />
      </div>

      {/* ========================================================= */}
      {/* 2. THE 1-PAGE STAGE: 4 HEADINGS WITH NORMAL PADDING       */}
      {/* ========================================================= */}
      <div className="relative w-full max-w-4xl h-[280px] xs:h-[310px] sm:h-[340px] md:h-[370px] flex items-center justify-center">
        
        {/* TOP-RIGHT HEADING */}
        <div className="absolute top-1 sm:top-2 right-1 sm:right-4 md:right-8 z-30 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`tr-${currentDish.id}`}
              initial={{ opacity: 0, x: 10, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.96 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex items-center gap-2 bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#DED9CA] shadow-xs text-right"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4B26F] shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#242421] leading-tight">
                  {headings.topRight.title}
                </h4>
                <span className="text-[10px] sm:text-[11px] text-[#726F66] font-medium leading-tight">
                  {headings.topRight.subtitle}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TOP-LEFT HEADING */}
        <div className="absolute top-1 sm:top-2 left-1 sm:left-4 md:left-8 z-30 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`tl-${currentDish.id}`}
              initial={{ opacity: 0, x: -10, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.96 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex items-center gap-2 bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#DED9CA] shadow-xs text-right"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#242421] leading-tight">
                  {headings.topLeft.title}
                </h4>
                <span className="text-[10px] sm:text-[11px] text-[#726F66] font-medium leading-tight">
                  {headings.topLeft.subtitle}
                </span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#8AA56D] shrink-0" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM-RIGHT HEADING */}
        <div className="absolute bottom-2 sm:bottom-4 right-1 sm:right-4 md:right-8 z-30 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`br-${currentDish.id}`}
              initial={{ opacity: 0, x: 10, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.96 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex items-center gap-2 bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#DED9CA] shadow-xs text-right"
            >
              <span className="w-2 h-2 rounded-full bg-[#C85228] shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#242421] leading-tight">
                  {headings.bottomRight.title}
                </h4>
                <span className="text-[10px] sm:text-[11px] text-[#726F66] font-medium leading-tight">
                  {headings.bottomRight.subtitle}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM-LEFT HEADING */}
        <div className="absolute bottom-2 sm:bottom-4 left-1 sm:left-4 md:left-8 z-30 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`bl-${currentDish.id}`}
              initial={{ opacity: 0, x: -10, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.96 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex items-center gap-2 bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#DED9CA] shadow-xs text-right"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#242421] leading-tight">
                  {headings.bottomLeft.title}
                </h4>
                <span className="text-[10px] sm:text-[11px] text-[#726F66] font-medium leading-tight">
                  {headings.bottomLeft.subtitle}
                </span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#D99B19] shrink-0" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ======================================================= */}
        {/* CENTER SOLITARY BOWL: CRISP, NORMAL SCALE, DEEP SHADOW */}
        {/* ======================================================= */}
        <div 
          onClick={() => handleDishInspect(currentDish.id)}
          className="relative flex flex-col items-center justify-center cursor-pointer z-20 group"
          role="button"
          tabIndex={0}
          aria-label={`عرض تفاصيل ${currentDish.name}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDish.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="relative flex flex-col items-center"
            >
              {/* Micro Floating Ceramic Bowl */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-[190px] xs:w-[220px] sm:w-[260px] md:w-[300px] aspect-[4/3] flex items-center justify-center"
              >
                <img
                  src={currentDish.image}
                  alt={currentDish.name}
                  loading="eager"
                  className="w-full h-full object-contain pointer-events-none select-none drop-shadow-md group-hover:scale-102 transition-transform duration-300"
                />
              </motion.div>

              {/* HEAVY MULTI-LAYER DROP SHADOW */}
              <motion.div
                animate={{
                  scaleX: [1, 0.94, 1],
                  scaleY: [1, 0.91, 1],
                  opacity: [1, 0.86, 1],
                }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative flex flex-col items-center -mt-5 sm:-mt-7 pointer-events-none w-full"
              >
                {/* 1. Direct bowl foot contact shadow */}
                <div className="w-[34%] h-3 bg-[#140e08]/75 rounded-[100%] blur-[2.5px]" />
                {/* 2. Strong occlusion shadow */}
                <div className="w-[56%] h-5 sm:h-6 bg-[#1a120a]/60 rounded-[100%] blur-md -mt-2" />
                {/* 3. Deep ground shadow */}
                <div className="w-[78%] h-8 sm:h-11 bg-[#26170c]/40 rounded-[100%] blur-xl -mt-3.5 sm:-mt-4" />
                {/* 4. Broad ambient shadow */}
                <div className="w-[94%] h-11 sm:h-14 bg-[#2a1b0e]/20 rounded-[100%] blur-2xl -mt-5 sm:-mt-7" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* ========================================================= */}
      {/* 3. DISH TITLE & PRICE (NORMAL SPACING)                    */}
      {/* ========================================================= */}
      <motion.div 
        key={`desc-${currentDish.id}`}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col items-center text-center mt-1 sm:mt-2 z-20 px-4 max-w-sm"
      >
        <h3 className="text-lg sm:text-xl font-extrabold text-[#242421] tracking-tight">
          {currentDish.name}
        </h3>
        
        <p className="text-xs text-[#726F66] mt-0.5 font-medium line-clamp-1">
          {currentDish.subtitle}
        </p>

        <span className="text-xs sm:text-sm font-bold text-[#8C6D23] mt-1 font-mono">
          {currentDish.price}
        </span>
      </motion.div>

      {/* ========================================================= */}
      {/* 4. COMPACT CONTROLS WITH 3S INDICATOR                      */}
      {/* ========================================================= */}
      <div className="flex items-center justify-center gap-2.5 mt-3 sm:mt-4 z-20">
        
        {/* Previous */}
        <button
          onClick={handlePrev}
          aria-label="الطبق السابق"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/60 hover:bg-white/90 active:scale-95 backdrop-blur-md border border-white/80 text-[#242421] flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
        >
          <ChevronRight className="w-3.5 h-3.5 text-[#242421]" />
        </button>

        {/* Center Capsule: Counter + 3s badge + play/pause */}
        <div className="h-7 sm:h-8 px-3 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-xs flex items-center gap-2">
          <span className="text-xs font-mono tracking-wider text-[#242421] font-bold">
            {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>

          <div className="w-[1px] h-2.5 bg-[#242421]/20" />

          {/* 3s Duration Indicator */}
          <span className="text-[10px] font-mono text-[#8C8370] font-semibold">
            3s
          </span>

          <div className="w-[1px] h-2.5 bg-[#242421]/20" />

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'إيقاف التدوير التلقائي' : 'تشغيل التدوير التلقائي'}
            className="text-[#726F66] hover:text-[#242421] transition-colors p-0.5 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
          </button>
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label="الطبق التالي"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/60 hover:bg-white/90 active:scale-95 backdrop-blur-md border border-white/80 text-[#242421] flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
        >
          <ChevronLeft className="w-3.5 h-3.5 text-[#242421]" />
        </button>

      </div>

      {/* Subtle details trigger */}
      <button
        onClick={() => handleDishInspect(currentDish.id)}
        className="mt-2 text-[11px] font-semibold text-[#8C8370] hover:text-[#242421] flex items-center gap-1 transition-colors cursor-pointer py-0.5 px-2.5 rounded-full hover:bg-white/40"
      >
        <Plus className="w-3 h-3" />
        <span>عرض المكونات والوصفة</span>
      </button>

    </section>
  );
};

export default FoodFourHeadingsShowcase;
