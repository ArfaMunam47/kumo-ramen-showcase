import React, { useState, useRef, useEffect } from 'react';
import { ProductDish } from '../data/arabicShowcaseData';
import { Star, ArrowLeft, Sparkles, ChefHat } from 'lucide-react';
import { motion } from 'motion/react';

interface FoodShowcaseProps {
  dish: ProductDish;
  index: number;
  onOpenProductDetails: (dish: ProductDish) => void;
}

export const FoodShowcase: React.FC<FoodShowcaseProps> = ({
  dish,
  index,
  onOpenProductDetails,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Check if image is already cached or loaded in memory
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, [dish.image]);
  return (
    <div className="w-[92vw] sm:w-[90vw] max-w-[1450px] mx-auto flex flex-col">
      {/* Top Editorial Category & Title Header Above Card */}
      <div className="mb-5 sm:mb-7 text-right px-2 sm:px-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#8AA56D] uppercase bg-[#8AA56D]/10 px-3 py-1 rounded-full shadow-[inset_0_1px_2px_rgba(138,165,109,0.15)]">
            {dish.category}
          </span>
          {dish.japaneseTitle && (
            <span className="text-sm font-serif text-[#77756D]">
              {dish.japaneseTitle}
            </span>
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#242421] font-editorial">
            {dish.name}
          </h2>
          <button
            onClick={() => onOpenProductDetails(dish)}
            className="self-start sm:self-auto flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8AA56D] hover:text-[#242421] transition-colors group"
          >
            <span>عرض تفاصيل الطبق والوصفة الحرفية</span>
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* THE PRISTINE, CLEAN SHOWCASE ARTBOARD CARD                */}
      {/* Absolute rule: NO food behind food, NO messy background   */}
      {/* ========================================================= */}
      <div 
        className="relative w-full bg-[#FAF9F5] rounded-[32px] sm:rounded-[42px] border border-[#DED9CA] shadow-[inset_0_4px_16px_rgba(45,35,20,0.06),inset_0_1px_3px_rgba(45,35,20,0.04),0_20px_50px_-15px_rgba(45,35,20,0.08),0_0_1px_1px_rgba(222,217,202,0.6)] overflow-hidden min-h-[750px] lg:min-h-[820px] flex flex-col lg:flex-row"
      >
        {/* ========================================================= */}
        {/* RIGHT INFORMATION SIDEBAR (Mirrored for RTL)              */}
        {/* ========================================================= */}
        <aside className="w-full lg:w-[130px] xl:w-[140px] bg-[#F1E6BD] border-b lg:border-b-0 lg:border-l border-[#DED9CA] p-6 sm:p-7 lg:py-10 flex lg:flex-col justify-between shrink-0 select-none">
          
          {/* Vertical stack of specifications */}
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-7 w-full text-right lg:text-center">
            
            {/* Cook Time */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#77756D] uppercase block">
                وقت الطهي
              </span>
              <span className="text-base sm:text-lg font-bold text-[#242421] font-mono-num block">
                {dish.cookTime}
              </span>
              <span className="text-[10px] text-[#8AA56D] hidden lg:block font-medium">
                حرارة ٩٨°م
              </span>
            </div>

            <div className="hidden lg:block h-[1px] bg-[#DED9CA]/80 w-full" />

            {/* Calories */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#77756D] uppercase block">
                السعرات
              </span>
              <span className="text-base sm:text-lg font-bold text-[#242421] font-mono-num block">
                {dish.calories}
              </span>
              <span className="text-[10px] text-[#77756D] hidden lg:block font-medium">
                طاقة صافية
              </span>
            </div>

            <div className="hidden lg:block h-[1px] bg-[#DED9CA]/80 w-full" />

            {/* Protein */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#77756D] uppercase block">
                البروتين
              </span>
              <span className="text-base sm:text-lg font-bold text-[#242421] font-mono-num block">
                {dish.protein}
              </span>
              <span className="text-[10px] text-[#77756D] hidden lg:block font-medium">
                أحماض أمينية
              </span>
            </div>

            <div className="hidden lg:block h-[1px] bg-[#DED9CA]/80 w-full" />

            {/* Cost */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#77756D] uppercase block">
                السعر
              </span>
              <span className="text-base sm:text-lg font-bold text-[#242421] font-mono-num block">
                {dish.cost}
              </span>
              <span className="text-[10px] text-[#D99B19] hidden lg:block font-medium">
                سعر القائمة
              </span>
            </div>

            <div className="hidden lg:block h-[1px] bg-[#DED9CA]/80 w-full" />

            {/* Rating */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#77756D] uppercase block">
                التقييم
              </span>
              <div className="flex items-center justify-start lg:justify-center gap-1">
                <span className="text-base sm:text-lg font-bold text-[#242421] font-mono-num">
                  {dish.rating}
                </span>
                <Star className="w-3.5 h-3.5 fill-[#D99B19] text-[#D99B19]" />
              </div>
              <span className="text-[10px] text-[#77756D] hidden lg:block font-medium">
                إشادة الذواقة
              </span>
            </div>

            <div className="hidden lg:block h-[1px] bg-[#DED9CA]/80 w-full" />

            {/* Cooking Difficulty */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#77756D] uppercase block">
                التحضير
              </span>
              <span className="text-xs sm:text-sm lg:text-base font-bold text-[#8AA56D] block">
                {dish.difficulty}
              </span>
              <span className="text-[10px] text-[#77756D] hidden lg:block font-medium">
                صياغة متقنة
              </span>
            </div>

          </div>

          {/* Micro aesthetic code stamp */}
          <div className="hidden lg:block pt-8 border-t border-[#DED9CA]/80 text-[10px] font-mono text-[#77756D] leading-tight">
            KOMO.LAB
            <br />
            EDITION_0{index + 1}
          </div>

        </aside>

        {/* ========================================================= */}
        {/* MAIN SHOWCASE INTERIOR: CLEAN, PURE, SOLITARY HERO BOWL   */}
        {/* ========================================================= */}
        <div className="flex-1 p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between">
          
          {/* Top Area: Description & Badge */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 text-right">
            <div className="max-w-2xl">
              <p className="text-sm sm:text-base text-[#77756D] leading-relaxed">
                {dish.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8AA56D] bg-[#8AA56D]/10 px-3 py-1.5 rounded-full shrink-0 self-start">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{dish.extractionHours}</span>
            </div>
          </div>

          {/* ======================================================= */}
          {/* CENTRAL STAGE: PURE HERO FOOD BOWL (NO FOOD BEHIND FOOD) */}
          {/* ======================================================= */}
          <div className="relative my-8 sm:my-12 py-6 flex items-center justify-center min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]">
            
            {/* Soft, warm atmospheric halo behind bowl with synchronized lift & glow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.75, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
              className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full bg-gradient-to-tr from-[#E8D98F]/40 via-[#D99B19]/25 to-transparent blur-3xl pointer-events-none" 
            />

            {/* DOMINANT HERO RAMEN BOWL: Framer Motion Staggered 'Fade-in & Lift' Presentation */}
            <motion.div 
              initial={{ opacity: 0, y: 55, scale: 0.90 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.035 }}
              onClick={() => onOpenProductDetails(dish)}
              className="group relative z-10 cursor-pointer w-64 h-64 sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] xl:w-[560px] xl:h-[560px] rounded-full p-3 sm:p-4 bg-[#FAF9F5] border-2 border-[#DED9CA]/90 
                shadow-[inset_0_4px_16px_rgba(0,0,0,0.15),0_28px_65px_-12px_rgba(40,30,15,0.22)] 
                hover:shadow-[inset_0_6px_20px_rgba(0,0,0,0.18),0_42px_85px_-10px_rgba(40,30,15,0.30)] 
                transition-all duration-500 bg-[#EFECE3] overflow-hidden"
              title="انقر لفتح تفاصيل الطبق والوصفة الحرفية الكاملة"
            >
              {/* Porcelain Skeleton placeholder while image loads */}
              {!imageLoaded && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EFECE3] via-[#E7E2D3] to-[#EFECE3] animate-pulse pointer-events-none z-0" />
              )}

              <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner z-10">
                <img
                  ref={imgRef}
                  src={dish.image}
                  alt={dish.name}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out select-none ${
                    imageLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-[6px]'
                  }`}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/src/assets/images/ramen_hero_bowl_1789137270027.jpg';
                    setImageLoaded(true);
                  }}
                />
                {/* Ceramic rim highlight */}
                <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-black/10 pointer-events-none shadow-[inset_0_3px_8px_rgba(255,255,255,0.45)]" />
                
                {/* Subtle Hover Glaze Light Sheen */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Tasteful hover indicator overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs rounded-full">
                  <span className="bg-[#FAF9F5] text-[#242421] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>عرض التفاصيل والطلب</span>
                    <ArrowLeft className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ======================================================= */}
          {/* BOTTOM DATA AREA: EDITORIAL MEASUREMENTS                */}
          {/* ======================================================= */}
          <div className="pt-6 border-t border-[#DED9CA]/80">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
              
              {/* 1. Texture */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold text-[#77756D]">القوام</span>
                  <span className="font-mono-num font-bold text-[#242421]">
                    {dish.metrics.texture}٪
                  </span>
                </div>
                <div className="h-[3px] bg-[#DED9CA] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#8AA56D] rounded-full" 
                    style={{ width: `${dish.metrics.texture}%` }}
                  />
                </div>
              </div>

              {/* 2. Richness */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold text-[#77756D]">الكثافة</span>
                  <span className="font-mono-num font-bold text-[#242421]">
                    {dish.metrics.richness}٪
                  </span>
                </div>
                <div className="h-[3px] bg-[#DED9CA] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#D99B19] rounded-full" 
                    style={{ width: `${dish.metrics.richness}%` }}
                  />
                </div>
              </div>

              {/* 3. Spice */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold text-[#77756D]">الحدة</span>
                  <span className="font-mono-num font-bold text-[#242421]">
                    {dish.metrics.spice}٪
                  </span>
                </div>
                <div className="h-[3px] bg-[#DED9CA] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#C85228] rounded-full" 
                    style={{ width: `${dish.metrics.spice}%` }}
                  />
                </div>
              </div>

              {/* 4. Aroma */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold text-[#77756D]">العبق</span>
                  <span className="font-mono-num font-bold text-[#242421]">
                    {dish.metrics.aroma}٪
                  </span>
                </div>
                <div className="h-[3px] bg-[#DED9CA] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#6F8056] rounded-full" 
                    style={{ width: `${dish.metrics.aroma}%` }}
                  />
                </div>
              </div>

              {/* 5. Broth Extraction */}
              <div className="space-y-1.5 col-span-2 sm:col-span-1">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold text-[#77756D]">الاستخلاص</span>
                  <span className="font-mono-num font-bold text-[#242421]">
                    {dish.metrics.extraction}٪
                  </span>
                </div>
                <div className="h-[3px] bg-[#DED9CA] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#8AA56D] rounded-full" 
                    style={{ width: `${dish.metrics.extraction}%` }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
