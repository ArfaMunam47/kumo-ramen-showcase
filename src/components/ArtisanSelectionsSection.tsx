import React from 'react';
import { ProductDish } from '../data/arabicShowcaseData';
import { Star, ArrowLeft, Clock, Flame } from 'lucide-react';

interface ArtisanSelectionsSectionProps {
  dishes: ProductDish[];
  onOpenProductDetails: (dish: ProductDish) => void;
}

export const ArtisanSelectionsSection: React.FC<ArtisanSelectionsSectionProps> = ({
  dishes,
  onOpenProductDetails,
}) => {
  return (
    <section id="artisan-menu" className="w-[92vw] sm:w-[90vw] max-w-[1450px] mx-auto">
      
      {/* Section Header */}
      <div className="mb-10 sm:mb-14 text-right px-2 sm:px-4 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#DED9CA]/80 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#8AA56D]" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#8AA56D] uppercase">
              المختارات الحرفية الأربعة
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#242421] font-editorial">
            تشكيلات المعمل الموسمية
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#77756D] max-w-md leading-relaxed">
          أربعة أطباق تمثل مدارس استخلاص النكهة المختلفة في مختبرنا؛ من الصويا المعتقة في خشب الأرز إلى حمضيات اليوزو النادرة ونودلز الكمأة الجافة.
        </p>
      </div>

      {/* The Four Large Food Cards (Completely non-overlapping, spacious, high impact) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            onClick={() => onOpenProductDetails(dish)}
            className="group cursor-pointer bg-[#FAF9F5] rounded-[32px] sm:rounded-[36px] border border-[#DED9CA] p-6 sm:p-8 hover:shadow-[0_20px_50px_-15px_rgba(45,35,20,0.12)] hover:border-[#D99B19]/50 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Card Top: Category & Price */}
            <div className="flex items-center justify-between text-xs mb-6">
              <span className="font-semibold text-[#8AA56D] bg-[#8AA56D]/10 px-3 py-1 rounded-full">
                {dish.category}
              </span>
              <span className="font-bold text-base sm:text-lg text-[#242421] font-mono-num">
                {dish.cost}
              </span>
            </div>

            {/* LARGE HERO FOOD BOWL (Large scale, clean, no overlapping background) */}
            <div className="relative my-4 py-4 flex items-center justify-center">
              <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#EEDB96]/20 blur-2xl pointer-events-none" />
              
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-64 lg:h-64 rounded-full p-2.5 bg-[#FAF9F5] border border-[#DED9CA] shadow-md group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content & Metadata */}
            <div className="mt-4 text-right">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#242421] font-editorial group-hover:text-[#D99B19] transition-colors">
                  {dish.name}
                </h3>
                {dish.japaneseTitle && (
                  <span className="text-xs font-serif text-[#77756D]">
                    {dish.japaneseTitle}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#77756D] mt-2 leading-relaxed line-clamp-2">
                {dish.subtitle}
              </p>

              {/* Specification pills */}
              <div className="mt-6 pt-4 border-t border-[#DED9CA]/60 flex items-center justify-between text-xs text-[#77756D]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 font-mono-num">
                    <Clock className="w-3.5 h-3.5 text-[#8AA56D]" />
                    {dish.cookTime}
                  </span>
                  <span className="flex items-center gap-1 font-mono-num">
                    <Flame className="w-3.5 h-3.5 text-[#C85228]" />
                    {dish.calories}
                  </span>
                  <span className="hidden sm:flex items-center gap-1 font-mono-num">
                    <Star className="w-3.5 h-3.5 fill-[#D99B19] text-[#D99B19]" />
                    {dish.rating}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[#242421] font-bold group-hover:text-[#D99B19] transition-colors">
                  <span>عرض التفاصيل</span>
                  <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
