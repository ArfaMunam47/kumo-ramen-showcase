import React, { useState, useEffect, useRef } from 'react';
import { ProductDish, SEVENTEEN_MENU_DISHES } from '../data/arabicShowcaseData';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowLeft, ArrowRight, Eye, Utensils } from 'lucide-react';

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

interface FloatingIngredient {
  name: string;
  nameEn: string;
  positionClass: string;
}

const INGREDIENTS_BY_DISH: Record<string, FloatingIngredient[]> = {
  'kumo-miso': [
    { name: 'نودلز هوكايدو يدوية', nameEn: 'Handmade Wheat Noodles', positionClass: 'top-8 right-6 lg:top-12 lg:right-16' },
    { name: 'ثوم محمص ببطء', nameEn: 'Slow-Toasted Garlic', positionClass: 'bottom-12 right-10 lg:bottom-16 lg:right-24' },
    { name: 'ميسو معتق ٣ سنوات', nameEn: '3-Year Aged Miso', positionClass: 'top-10 left-6 lg:top-14 lg:left-20' },
    { name: 'سمسم ذهبي محمص', nameEn: 'Toasted Golden Sesame', positionClass: 'bottom-10 left-8 lg:bottom-20 lg:left-20' },
  ],
  'kuro-tonkotsu': [
    { name: 'زيت مايو الأسود', nameEn: 'Roasted Black Mayu', positionClass: 'top-8 right-6 lg:top-12 lg:right-16' },
    { name: 'فطر كيكوراجي مقرمش', nameEn: 'Crispy Wood Ear Mushroom', positionClass: 'bottom-12 right-10 lg:bottom-16 lg:right-24' },
    { name: 'شرائح شاشو مكرملة', nameEn: 'Caramelized Chashu', positionClass: 'top-10 left-6 lg:top-14 lg:left-20' },
    { name: 'كراث بينشوتان محمص', nameEn: 'Charred Japanese Leek', positionClass: 'bottom-10 left-8 lg:bottom-20 lg:left-20' },
  ],
  'spicy-sesame-ramen': [
    { name: 'طحينة سمسم حجرية', nameEn: 'Stone-Ground Sesame', positionClass: 'top-8 right-6 lg:top-12 lg:right-16' },
    { name: 'زيت فلفل مقرمش', nameEn: 'Chili Crunch Oil', positionClass: 'bottom-12 right-10 lg:bottom-16 lg:right-24' },
    { name: 'بوك تشوي طازج', nameEn: 'Charred Bok Choy', positionClass: 'top-10 left-6 lg:top-14 lg:left-20' },
    { name: 'بصل أخضر مقرمش', nameEn: 'Fresh Spring Onion', positionClass: 'bottom-10 left-8 lg:bottom-20 lg:left-20' },
  ],
  'yuzu-chicken-ramen': [
    { name: 'بشر قشور اليوزو', nameEn: 'Kochi Mountain Yuzu', positionClass: 'top-8 right-6 lg:top-12 lg:right-16' },
    { name: 'صدر دجاج حر مدخن', nameEn: 'Smoked Free-Range Chicken', positionClass: 'bottom-12 right-10 lg:bottom-16 lg:right-24' },
    { name: 'براعم خيزران غضة', nameEn: 'Tender Bamboo Shoots', positionClass: 'top-10 left-6 lg:top-14 lg:left-20' },
    { name: 'أعشاب كوجو الجبلية', nameEn: 'Wild Mountain Herbs', positionClass: 'bottom-10 left-8 lg:bottom-20 lg:left-20' },
  ],
  'truffle-mushroom-ramen': [
    { name: 'زيت الكمأة السوداء', nameEn: 'Black Truffle Essence', positionClass: 'top-8 right-6 lg:top-12 lg:right-16' },
    { name: 'فطر الموريل البري', nameEn: 'Wild Morel Mushrooms', positionClass: 'bottom-12 right-10 lg:bottom-16 lg:right-24' },
    { name: 'صفار بيض معتق', nameEn: 'Cured Golden Yolk', positionClass: 'top-10 left-6 lg:top-14 lg:left-20' },
    { name: 'رقائق جذر اللوتس', nameEn: 'Crispy Lotus Chips', positionClass: 'bottom-10 left-8 lg:bottom-20 lg:left-20' },
  ],
  'chili-butter-ramen': [
    { name: 'زبدة هوكايدو خام', nameEn: 'Hokkaido Cultured Butter', positionClass: 'top-8 right-6 lg:top-12 lg:right-16' },
    { name: 'ميسو أحمر مدخن', nameEn: 'Smoked Red Miso', positionClass: 'bottom-12 right-10 lg:bottom-16 lg:right-24' },
    { name: 'خيوط الفلفل الحريرية', nameEn: 'Silken Chili Threads', positionClass: 'top-10 left-6 lg:top-14 lg:left-20' },
    { name: 'نودلز سميكة متموجة', nameEn: 'Wavy Thick Noodles', positionClass: 'bottom-10 left-8 lg:bottom-20 lg:left-20' },
  ],
  'shoyu-classic-ramen': [
    { name: 'صويا معتقة سنتين', nameEn: '2-Year Cedar Shoyu', positionClass: 'top-8 right-6 lg:top-12 lg:right-16' },
    { name: 'شريحة نوري ذهبية', nameEn: 'Crisp Ariake Nori', positionClass: 'bottom-12 right-10 lg:bottom-16 lg:right-24' },
    { name: 'براعم مينما متبلة', nameEn: 'Seasoned Menma', positionClass: 'top-10 left-6 lg:top-14 lg:left-20' },
    { name: 'ناروتوماكي تقليدي', nameEn: 'Traditional Narutomaki', positionClass: 'bottom-10 left-8 lg:bottom-20 lg:left-20' },
  ],
  'miso-corn-ramen': [
    { name: 'ذرة حلوة مقرمشة', nameEn: 'Sweet Crisp Corn', positionClass: 'top-8 right-6 lg:top-12 lg:right-16' },
    { name: 'مكعب زبدة ذائبة', nameEn: 'Melting Butter Cube', positionClass: 'bottom-12 right-10 lg:bottom-16 lg:right-24' },
    { name: 'مرق ميسو ذهبي', nameEn: 'Golden Miso Broth', positionClass: 'top-10 left-6 lg:top-14 lg:left-20' },
    { name: 'براعم بصل هوكايدو', nameEn: 'Hokkaido Spring Scallions', positionClass: 'bottom-10 left-8 lg:bottom-20 lg:left-20' },
  ],
};

export const FoodRotator: React.FC<FoodRotatorProps> = ({ onOpenProductDetails }) => {
  // Collect the 8 dishes in precise order
  const dishes: ProductDish[] = ROTATOR_DISH_IDS.map((id) => {
    const found = SEVENTEEN_MENU_DISHES.find((d) => d.id === id);
    if (found) return found;
    return SEVENTEEN_MENU_DISHES[0];
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const currentDish = dishes[currentIndex];
  const currentIngredients = INGREDIENTS_BY_DISH[currentDish.id] || INGREDIENTS_BY_DISH['kumo-miso'];

  // 3.8s auto-rotation interval, cleanly paused when hovered
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dishes.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, dishes.length, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section 
      id="continuous-showcase"
      className="w-full relative bg-[#F3F0E9] py-16 sm:py-24 lg:py-32 overflow-hidden flex flex-col items-center justify-center font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Soft Natural Lighting Gradients (NO BLACK, NO DARK GRADIENT) */}
      <div className="absolute -top-36 right-1/4 w-[500px] h-[500px] bg-[#E8D98F]/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-36 left-1/4 w-[500px] h-[500px] bg-[#8AA56D]/15 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle organic dotted grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8C2B3_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      {/* Outer Center Stage Container */}
      <div className="w-[94vw] sm:w-[90vw] max-w-[1300px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* ======================================================== */}
        {/* 1. EDITORIAL HEADER: MINIMAL & REFINED                   */}
        {/* ======================================================== */}
        <div className="space-y-3 max-w-xl mx-auto mb-8 sm:mb-12">
          
          <div className="inline-flex items-center gap-2 bg-[#FAF9F5] border border-[#DED9CA] px-4 py-1.5 rounded-full shadow-[0_2px_8px_rgba(45,35,20,0.04)]">
            <span className="w-2 h-2 rounded-full bg-[#D99B19] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#77756D] uppercase">
              معرض التذوق الحي المتواصل • CONTINUOUS FOOD SHOWCASE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-editorial text-[#242421] tracking-tight">
            تشكيلة أوعية التوقيع الحرفي
          </h2>
          
          <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed">
            استعراض بصري حي لأطباق المعلم تاتسويا المستخلصة يومياً على نار هادئة. تتناوب الأوعية تلقائياً كل أربع ثوانٍ.
          </p>

        </div>

        {/* ======================================================== */}
        {/* 2. THE GRAND FOOD STAGE: 50-65% DOMINANT BOWL AREA       */}
        {/* Isolated large physical food object + grounding shadow    */}
        {/* ======================================================== */}
        <div className="relative w-full max-w-4xl min-h-[460px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[620px] flex flex-col items-center justify-center my-2 sm:my-4">
          
          {/* SATELLITE FLOATING INGREDIENTS (Inside Showcase Only) */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={`ingredients-${currentDish.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full relative"
              >
                {currentIngredients.map((ing, i) => (
                  <motion.div
                    key={ing.name}
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      y: [0, -6, 0], 
                      scale: 1,
                      transition: {
                        y: { repeat: Infinity, duration: 4 + i, ease: 'easeInOut' },
                        opacity: { duration: 0.5, delay: i * 0.1 },
                        scale: { duration: 0.5, delay: i * 0.1 }
                      }
                    }}
                    exit={{ opacity: 0, y: -15, scale: 0.9, transition: { duration: 0.35 } }}
                    className={`absolute ${ing.positionClass} z-20 flex items-center gap-2.5 bg-[#FAF9F5]/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#DED9CA] shadow-[0_8px_20px_-4px_rgba(45,35,20,0.08)]`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8AA56D]" />
                    <div className="text-right">
                      <span className="block text-xs font-bold text-[#242421] leading-none">
                        {ing.name}
                      </span>
                      <span className="block text-[10px] font-mono text-[#77756D] leading-tight dir-ltr text-left mt-0.5">
                        {ing.nameEn}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* THE MAIN FOOD BOWL: SEAMLESS CONTINUOUS EXCHANGE */}
          <div 
            className="relative z-10 flex flex-col items-center justify-center cursor-pointer group"
            onClick={() => onOpenProductDetails(currentDish)}
            title="انقر لفتح تفاصيل الطبق والوصفة الحرفية"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDish.id}
                initial={{ opacity: 0, scale: 1.05, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center"
              >
                {/* Visual Bowl Vessel: Physical food object directly on warm ivory surface */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden
                    border-[6px] sm:border-[8px] border-[#FAF9F5]
                    shadow-[0_32px_75px_-18px_rgba(45,35,20,0.28),0_12px_30px_-6px_rgba(45,35,20,0.12),inset_0_2px_4px_rgba(255,255,255,0.9)]
                    bg-[#FAF9F5] select-none"
                >
                  <img
                    src={currentDish.image}
                    alt={currentDish.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 select-none"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />

                  {/* Soft organic glazed ceramic highlight ring */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 pointer-events-none" />

                  {/* Japanese Title Seal (Subtle in Corner) */}
                  {currentDish.japaneseTitle && (
                    <div className="absolute top-5 right-6 bg-[#FAF9F5]/90 backdrop-blur-md text-[#242421] text-xs font-serif px-3 py-1 rounded-full border border-[#DED9CA] shadow-sm pointer-events-none">
                      {currentDish.japaneseTitle}
                    </div>
                  )}

                  {/* Interactive Hover Pill overlay */}
                  <div className="absolute inset-0 bg-[#242421]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-[#FAF9F5] text-[#242421] text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-[#D99B19]" />
                      <span>عرض تفاصيل الطبق • VIEW DISH</span>
                    </span>
                  </div>
                </motion.div>

                {/* SOFT NATURAL GROUNDING SHADOW UNDERNEATH */}
                <div className="w-[80%] max-w-[380px] h-9 sm:h-12 bg-[#2D2314]/14 blur-2xl rounded-[100%] mx-auto mt-[-16px] sm:mt-[-22px] pointer-events-none -z-0" />

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pause Notice on Hover (Discreet, subtle) */}
          {isPaused && (
            <div className="absolute bottom-1 sm:bottom-3 text-[11px] font-mono text-[#8AA56D] bg-[#FAF9F5] border border-[#DED9CA] px-3 py-1 rounded-full shadow-sm animate-fadeIn">
              تم إيقاف التبديل التلقائي مؤقتاً لتأمل الطبق
            </div>
          )}

        </div>

        {/* ======================================================== */}
        {/* 3. SYNCHRONIZED MINIMAL TEXT & PRICING                   */}
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
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#8AA56D] tracking-wider uppercase">
                  {currentDish.category}
                </span>
                <span className="text-[#C8C2B3]">•</span>
                <span className="font-mono text-xs text-[#77756D]">
                  صنف رقم #{currentDish.number}
                </span>
              </div>

              {/* Dish Name: High impact typography */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-editorial text-[#242421]">
                {currentDish.name}
              </h3>

              {/* English Subtitle */}
              <p className="text-xs sm:text-sm font-mono text-[#77756D] dir-ltr text-center">
                {currentDish.nameEn} • {currentDish.subtitleEn}
              </p>

              {/* Minimal Short Story */}
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
                  className="px-5 py-2.5 rounded-full bg-[#FAF9F5] text-[#242421] border border-[#DED9CA] hover:border-[#D99B19] hover:text-[#D99B19] text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D99B19]" />
                  <span>استكشاف الوصفة والحرفية</span>
                </button>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ======================================================== */}
        {/* 4. MINIMAL DISCREET PROGRESS INDICATOR (01 / 08)         */}
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
                      ? 'w-8 bg-[#D99B19]'
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
