import React, { useState, useRef, useEffect } from 'react';
import { ProductDish } from '../data/arabicShowcaseData';
import { ArrowLeft, Clock, Sparkles, Flame } from 'lucide-react';
import { motion } from 'motion/react';

interface FoodCardProps {
  dish: ProductDish;
  featured?: boolean;
  onOpenDetails: (dish: ProductDish) => void;
  index?: number;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  dish,
  featured = false,
  onOpenDetails,
  index = 0,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Check if image is already cached or loaded in memory
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, [dish.image]);

  const staggerDelay = (index % 3) * 0.12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: staggerDelay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onClick={() => onOpenDetails(dish)}
      className={`group relative cursor-pointer bg-[#FAF9F5] rounded-[32px] sm:rounded-[38px] border border-[#E2DDD0] p-6 sm:p-7 flex flex-col justify-between transition-all duration-500
        shadow-[inset_0_6px_18px_rgba(45,35,20,0.12),inset_0_-3px_10px_rgba(45,35,20,0.06),inset_0_1px_2px_rgba(255,255,255,0.95),0_14px_34px_-10px_rgba(40,30,15,0.08)]
        hover:shadow-[inset_0_8px_24px_rgba(45,35,20,0.16),inset_0_-4px_12px_rgba(45,35,20,0.08),inset_0_1px_3px_rgba(255,255,255,1),0_26px_52px_-12px_rgba(40,30,15,0.16)]
        hover:border-[#D99B19]/50
        ${featured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#FAF9F5] via-[#FAF9F5] to-[#F5EFE0]' : ''}`}
    >
      {/* Top Bar: Dish Number + Category Tag + Price */}
      <div className="flex items-center justify-between text-xs mb-3">
        {/* Left: Price in EUR and SAR */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-base sm:text-lg text-[#242421] font-mono-num">
            {dish.cost}
          </span>
          <span className="text-[11px] text-[#77756D] font-mono">
            ({dish.priceEur})
          </span>
        </div>

        {/* Right (RTL): Number & Category */}
        <div className="flex items-center gap-2">
          {dish.featuredBadge && (
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#D99B19] bg-[#D99B19]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-[inset_0_1.5px_3px_rgba(217,155,25,0.22)]">
              <Sparkles className="w-2.5 h-2.5" />
              {dish.featuredBadge}
            </span>
          )}
          <span className="text-xs font-mono font-bold text-[#8AA56D] bg-[#8AA56D]/10 px-2.5 py-0.5 rounded-full shadow-[inset_0_1.5px_3px_rgba(138,165,109,0.22)]">
            #{dish.number}
          </span>
          <span className="text-[11px] font-semibold text-[#77756D] uppercase tracking-wider hidden sm:inline">
            {dish.categoryTag === 'specials'
              ? 'إصدار خاص'
              : dish.categoryTag === 'sides'
              ? 'طبق جانبي'
              : dish.categoryTag === 'drinks'
              ? 'مشروب حرفي'
              : 'رامن حرفي'}
          </span>
        </div>
      </div>

      {/* 3D PHYSICAL OBJECT PRESENTATION: STAGGERED ELEVATING BOWL */}
      {/* Features Framer Motion staggered 'fade-in and lift' with smooth load state */}
      <div className={`relative my-3 py-2 flex items-center justify-center ${featured ? 'min-h-[260px] sm:min-h-[300px]' : 'min-h-[210px] sm:min-h-[240px]'}`}>
        
        {/* Synchronized Warm Ambient Aura that lifts beneath the bowl */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: staggerDelay + 0.1, ease: 'easeOut' }}
          className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#E8D98F]/35 via-[#D99B19]/20 to-transparent blur-2xl pointer-events-none -z-0"
        />

        {/* The Bowl Container - Staggered 'Fade-in and Lift' Framer Motion Object with Deep Inner Shadow */}
        <motion.div 
          initial={{ opacity: 0, y: 36, scale: 0.90 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: staggerDelay + 0.12, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8, scale: 1.045 }}
          className={`relative rounded-full p-2.5 sm:p-3 bg-[#FAF9F5] border border-[#E2DDD0] 
            shadow-[inset_0_8px_20px_rgba(0,0,0,0.22),inset_0_2px_6px_rgba(0,0,0,0.18),inset_0_-3px_10px_rgba(255,255,255,0.6),0_20px_45px_-10px_rgba(40,30,15,0.24)]
            group-hover:shadow-[inset_0_10px_24px_rgba(0,0,0,0.28),inset_0_3px_8px_rgba(0,0,0,0.22),inset_0_-4px_12px_rgba(255,255,255,0.8),0_28px_56px_-10px_rgba(40,30,15,0.32)]
            transition-all duration-500 ease-out overflow-hidden z-10 bg-[#EFECE3]
            ${featured ? 'w-56 h-56 sm:w-68 sm:h-68 lg:w-76 lg:h-76' : 'w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56'}`}
        >
          {/* Porcelain Placeholder Skeleton with gentle warm pulse before asset is visible */}
          {!imageLoaded && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EFECE3] via-[#E7E2D3] to-[#EFECE3] animate-pulse pointer-events-none" />
          )}

          <img
            ref={imgRef}
            src={dish.image}
            alt={dish.name}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover rounded-full select-none transition-opacity duration-300 ease-out ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            decoding="async"
            referrerPolicy="no-referrer"
            style={{
              imageRendering: '-webkit-optimize-contrast',
            }}
            onError={(e) => {
              // Fail-safe fallback so no picture ever appears broken
              e.currentTarget.src = '/src/assets/images/ramen_hero_bowl_1789137270027.jpg';
              setImageLoaded(true);
            }}
          />
          
          {/* Beveled Ceramic Rim Deep Inset Highlight */}
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/15 pointer-events-none shadow-[inset_0_4px_12px_rgba(0,0,0,0.35),inset_0_-2px_6px_rgba(255,255,255,0.3)]" />
          
          {/* Subtle Hover Glaze Light Sheen */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>

        {/* Floating Extraction Hours Badge on the Bowl with Rich Inner Shadow */}
        {dish.extractionHours && (
          <div className="absolute bottom-1 right-2 sm:right-4 bg-[#FAF9F5]/95 backdrop-blur-xs border border-[#E2DDD0] py-1 px-3 rounded-full text-[10px] sm:text-[11px] font-mono text-[#77756D] shadow-[inset_0_2px_4px_rgba(45,35,20,0.08),inset_0_-1px_2px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.06)] flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AA56D] animate-pulse shrink-0" />
            <span className="whitespace-nowrap">{dish.extractionHours}</span>
          </div>
        )}
      </div>

      {/* Card Bottom: Typography, Story, and Action Trigger */}
      <div className="mt-2 text-right">
        
        {/* Names (Arabic + English + Japanese) */}
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#242421] font-editorial group-hover:text-[#D99B19] transition-colors">
              {dish.name}
            </h3>
            {dish.japaneseTitle && (
              <span className="text-xs font-serif text-[#77756D]/80">
                {dish.japaneseTitle}
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-[#77756D] tracking-wide text-left dir-ltr">
            {dish.nameEn}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-xs text-[#77756D] mt-2.5 leading-relaxed line-clamp-2">
          {dish.subtitleEn}
        </p>

        {/* Divider & Action Indicator */}
        <div className="mt-4 pt-3.5 border-t border-[#E2DDD0]/70 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3 text-[#77756D] font-mono text-[11px]">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#8AA56D]" />
              {dish.cookTime}
            </span>
            <span className="hidden sm:inline">
              {dish.calories}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#242421] font-bold group-hover:text-[#D99B19] transition-colors text-xs">
            <span>عرض التفاصيل</span>
            <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1.5 transition-transform" />
          </div>
        </div>

      </div>
    </motion.div>
  );
};
