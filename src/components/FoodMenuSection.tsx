import React, { useState } from 'react';
import { ProductDish } from '../data/arabicShowcaseData';
import { FoodCard } from './FoodCard';
import { Sparkles, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FoodMenuSectionProps {
  dishes: ProductDish[];
  onOpenProductDetails: (dish: ProductDish) => void;
}

type MenuCategory = 'all' | 'ramen' | 'specials' | 'sides' | 'drinks';

export const FoodMenuSection: React.FC<FoodMenuSectionProps> = ({
  dishes,
  onOpenProductDetails,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  // Filtered list
  const filteredDishes = dishes.filter((dish) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'specials') return dish.featured || dish.categoryTag === 'specials';
    return dish.categoryTag === activeCategory;
  });

  const categoryCounts = {
    all: dishes.length,
    ramen: dishes.filter((d) => d.categoryTag === 'ramen').length,
    specials: dishes.filter((d) => d.featured || d.categoryTag === 'specials').length,
    sides: dishes.filter((d) => d.categoryTag === 'sides').length,
    drinks: dishes.filter((d) => d.categoryTag === 'drinks').length,
  };

  return (
    <section id="the-menu" className="w-[92vw] sm:w-[90vw] max-w-[1450px] mx-auto">
      
      {/* Editorial Section Header */}
      <div className="mb-12 sm:mb-16 border-b border-[#DED9CA] pb-8 text-right">
        
        {/* Top Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#8AA56D] animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-[#8AA56D] uppercase">
            قائمة أطباق المختبر الكاملة • THE 18-PIECE COLLECTION
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            {/* English Editorial Headline */}
            <p className="text-xs sm:text-sm font-mono tracking-widest text-[#77756D] uppercase mb-2">
              Made to be looked at. Made to be eaten.
            </p>
            {/* Arabic Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#242421] font-editorial leading-[1.2]">
              صُمم ليمتع العين. <br />
              <span className="text-[#8AA56D]">صُنع ليكون وليمة لا تُنسى.</span>
            </h2>
          </div>

          {/* Supporting Description */}
          <div className="max-w-md text-xs sm:text-sm text-[#77756D] leading-relaxed">
            <p>
              ١٨ طبقاً وابتكاراً من أفران ومطبخ المعمل؛ أوعية رامن أصيلة، وإصدارات التسوكمين الخاصة، ومقرمشات الواغيو، ومشروبات اليوزو والسينشا المستخلصة بالجليد.
            </p>
            <p className="text-[11px] font-mono text-[#8AA56D] mt-2">
              18 handcrafted culinary items: heirloom ramen, dipping tsukemen, artisan sides, and cold-brew botanicals.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MINIMAL CATEGORY FILTER (SUBTLE, UNDERSTATED TYPOGRAPHY)  */}
        {/* ========================================================= */}
        <div className="mt-10 flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar py-2 text-xs sm:text-sm tracking-wider uppercase font-mono">
          
          <button
            onClick={() => setActiveCategory('all')}
            className={`transition-all whitespace-nowrap flex items-center gap-2 py-2 px-3.5 rounded-full ${
              activeCategory === 'all'
                ? 'text-[#242421] font-bold bg-[#FAF9F5] border border-[#DED9CA] shadow-[inset_0_2.5px_6px_rgba(45,35,20,0.12),inset_0_-1px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.04)]'
                : 'text-[#77756D] hover:text-[#242421]'
            }`}
          >
            <span>الكل • ALL</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E2DDD0]/70 text-[#242421] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">
              {categoryCounts.all}
            </span>
          </button>

          <button
            onClick={() => setActiveCategory('ramen')}
            className={`transition-all whitespace-nowrap flex items-center gap-2 py-2 px-3.5 rounded-full ${
              activeCategory === 'ramen'
                ? 'text-[#242421] font-bold bg-[#FAF9F5] border border-[#DED9CA] shadow-[inset_0_2.5px_6px_rgba(45,35,20,0.12),inset_0_-1px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.04)]'
                : 'text-[#77756D] hover:text-[#242421]'
            }`}
          >
            <span>رامن • RAMEN</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E2DDD0]/70 text-[#242421] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">
              {categoryCounts.ramen}
            </span>
          </button>

          <button
            onClick={() => setActiveCategory('specials')}
            className={`transition-all whitespace-nowrap flex items-center gap-2 py-2 px-3.5 rounded-full ${
              activeCategory === 'specials'
                ? 'text-[#242421] font-bold bg-[#FAF9F5] border border-[#DED9CA] shadow-[inset_0_2.5px_6px_rgba(45,35,20,0.12),inset_0_-1px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.04)]'
                : 'text-[#77756D] hover:text-[#242421]'
            }`}
          >
            <span>الإصدارات الخاصة • SPECIALS</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D99B19]/20 text-[#D99B19] font-bold shadow-[inset_0_1px_2px_rgba(217,155,25,0.2)]">
              {categoryCounts.specials}
            </span>
          </button>

          <button
            onClick={() => setActiveCategory('sides')}
            className={`transition-all whitespace-nowrap flex items-center gap-2 py-2 px-3.5 rounded-full ${
              activeCategory === 'sides'
                ? 'text-[#242421] font-bold bg-[#FAF9F5] border border-[#DED9CA] shadow-[inset_0_2.5px_6px_rgba(45,35,20,0.12),inset_0_-1px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.04)]'
                : 'text-[#77756D] hover:text-[#242421]'
            }`}
          >
            <span>أطباق جانبية • SIDES</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#8AA56D]/20 text-[#8AA56D] font-bold shadow-[inset_0_1px_2px_rgba(138,165,109,0.2)]">
              {categoryCounts.sides}
            </span>
          </button>

          <button
            onClick={() => setActiveCategory('drinks')}
            className={`transition-all whitespace-nowrap flex items-center gap-2 py-2 px-3.5 rounded-full ${
              activeCategory === 'drinks'
                ? 'text-[#242421] font-bold bg-[#FAF9F5] border border-[#DED9CA] shadow-[inset_0_2.5px_6px_rgba(45,35,20,0.12),inset_0_-1px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.04)]'
                : 'text-[#77756D] hover:text-[#242421]'
            }`}
          >
            <span>المشروبات الحرفية • DRINKS</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#8AA56D]/20 text-[#8AA56D] font-bold shadow-[inset_0_1px_2px_rgba(138,165,109,0.2)]">
              {categoryCounts.drinks}
            </span>
          </button>

        </div>

      </div>

      {/* ========================================================= */}
      {/* ART-DIRECTED ASYMMETRIC FOOD GRID (17 PRODUCTS)           */}
      {/* Features prominent cards that span 2 columns with animations */}
      {/* ========================================================= */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredDishes.map((dish, index) => (
            <FoodCard
              key={dish.id}
              dish={dish}
              index={index}
              featured={Boolean(dish.featured && activeCategory === 'all')}
              onOpenDetails={onOpenProductDetails}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State Fallback */}
      {filteredDishes.length === 0 && (
        <div className="py-20 text-center text-[#77756D] bg-[#FAF9F5] rounded-[32px] border border-[#E2DDD0] shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)]">
          <Utensils className="w-8 h-8 mx-auto mb-3 text-[#8AA56D]/60" />
          <p className="text-sm font-semibold text-[#242421]">لا توجد أطباق في هذا القسم حالياً</p>
          <p className="text-xs text-[#77756D] mt-1">يتم تحضير دفعات جديدة في مطبخنا يومياً.</p>
        </div>
      )}

    </section>
  );
};
