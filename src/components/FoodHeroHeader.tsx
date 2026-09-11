import React from 'react';
import { ProductDish, ALL_PRODUCTS } from '../data/arabicShowcaseData';
import { Sparkles, Clock, Flame, UtensilsCrossed } from 'lucide-react';
import { motion } from 'motion/react';

interface FoodHeroHeaderProps {
  onSelectDish: (dish: ProductDish) => void;
  onScrollToMenu: () => void;
}

export const FoodHeroHeader: React.FC<FoodHeroHeaderProps> = ({
  onSelectDish,
  onScrollToMenu,
}) => {
  return (
    <section className="w-[92vw] sm:w-[90vw] max-w-[1450px] mx-auto text-right mb-10 sm:mb-14 px-2 sm:px-4">
      
      {/* 1. Micro Food Labels & Kitchen Status Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-3 border-b border-[#DED9CA]/60 pb-3 mb-6 text-[11px] font-mono tracking-wider uppercase text-[#77756D]"
      >
        {/* Left: Limited Daily Production Status */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#8AA56D] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#8AA56D] animate-pulse" />
            <span>المطبخ مفتوح الآن • مطبخ طوكيو الحرفي</span>
          </span>
          <span className="text-[#DED9CA]">|</span>
          <span className="hidden sm:inline">دفعة اليوم: ١٥٠ وعاء فقط</span>
        </div>

        {/* Right (RTL): Food Category Indicators */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
          <span className="text-[#242421] font-bold">OUR MENU</span>
          <span>•</span>
          <span>SIGNATURE DISHES</span>
          <span>•</span>
          <span>HANDCRAFTED DAILY</span>
          <span>•</span>
          <span className="hidden md:inline">FROM THE KITCHEN</span>
          <span className="hidden md:inline">•</span>
          <span className="text-[#D99B19] font-bold hidden md:inline">SEASONAL SELECTION</span>
        </div>
      </motion.div>

      {/* 2. Main Editorial Header with Culinary Weight */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#8AA56D]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#8AA56D] uppercase">
              رامن استخلاص بطيء • طوكيو أوموتيساندو
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#242421] font-editorial leading-[1.15]">
            هندسة المرق المعتق <br />
            <span className="text-[#8AA56D]">ونودلز قمح هوكايدو الحرفية</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md space-y-3"
        >
          <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed">
            نطبخ كل وعاء وفق معادلة كيميائية ونكهية دقيقة؛ مرق يستخلص حتى ١٨ ساعة في قدور نحاسية نقية، ونودلز تُعجن وتُسحب يدوياً كل صباح برطوبة ٢٨٪.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onScrollToMenu}
              className="font-bold text-[#242421] hover:text-[#D99B19] transition-colors flex items-center gap-1.5 underline decoration-[#D99B19] decoration-2 underline-offset-4"
            >
              <span>تصفح القائمة الكاملة (١٨ صنفاً)</span>
              <span>↓</span>
            </button>
            <span className="text-[#77756D]">|</span>
            <span className="text-[#77756D] font-mono text-[11px]">
              ١٨ ابتكاراً من أفران ومطبخ المعمل
            </span>
          </div>
        </motion.div>
      </div>

      {/* 3. Real Dish Index / Ticker Bar (Clickable directly to any of the 18 dishes!) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 pt-4 border-t border-[#DED9CA]/80"
      >
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#8AA56D] font-bold">
            فهرس الأطباق الـ ١٨ السريع • 18-DISH ATELIER INDEX:
          </span>
          <span className="text-[10px] text-[#77756D] font-mono hidden sm:inline">
            انقر أي صنف لعرض تشريحه النكهي فوراً
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-2">
          {ALL_PRODUCTS.map((dish, index) => (
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 + index * 0.025, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              key={dish.id}
              onClick={() => onSelectDish(dish)}
              className="group shrink-0 flex items-center gap-2 py-1.5 px-3 rounded-full bg-[#FAF9F5] border border-[#E2DDD0] hover:border-[#D99B19] hover:bg-[#FAF9F5] transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.03)] text-right"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 border border-[#DED9CA] shadow-inner bg-[#EFECE3]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/src/assets/images/ramen_hero_bowl_1789137270027.jpg';
                  }}
                />
              </div>
              <span className="font-mono text-[10px] font-bold text-[#8AA56D] group-hover:text-[#D99B19]">
                #{dish.number}
              </span>
              <span className="text-xs font-semibold text-[#242421] group-hover:text-[#D99B19] whitespace-nowrap">
                {dish.name}
              </span>
              <span className="text-[11px] text-[#77756D] font-mono-num hidden sm:inline">
                {dish.cost}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

    </section>
  );
};
