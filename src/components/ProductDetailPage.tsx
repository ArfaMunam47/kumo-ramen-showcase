import React, { useState, useEffect } from 'react';
import { ProductDish } from '../data/arabicShowcaseData';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  Flame, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  ChefHat, 
  Plus, 
  Minus,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProductDetailPageProps {
  dish: ProductDish;
  onBack: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ dish, onBack }) => {
  // Scroll to top on open
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dish]);

  // Interactive Customizations
  const [noodleFirmness, setNoodleFirmness] = useState<'firm' | 'medium' | 'soft'>('medium');
  const [brothRichness, setBrothRichness] = useState<'light' | 'balanced' | 'rich'>('balanced');
  const [spiceLevel, setSpiceLevel] = useState<number>(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);

  // Addon prices
  const addonsList = [
    { id: 'extra-egg', name: 'بيضة أونسن معتقة بنقع التاري', price: 6 },
    { id: 'extra-chashu', name: 'شريحتان شاشو مكرملة على خشب الأرز', price: 12 },
    { id: 'wood-ear-kikurage', name: 'فطر أذن الخشب المقرمش الإضافي', price: 4 },
    { id: 'bamboo-menma', name: 'براعم خيزران مينما متبلة بالدخان', price: 5 },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = addonsList.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalPrice = (dish.priceNum + addonsTotal) * quantity;

  const handleOrder = () => {
    setOrderConfirmed(true);
    setTimeout(() => setOrderConfirmed(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F3F0E9] text-[#242421] text-right font-sans pb-24 animate-fadeIn">
      
      {/* Top Sticky Navigation Bar */}
      <div className="sticky top-0 z-40 bg-[#F3F0E9]/95 backdrop-blur-md border-b border-[#DED9CA]">
        <div className="w-[92vw] sm:w-[90vw] max-w-[1450px] mx-auto h-20 flex items-center justify-between">
          
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#242421] hover:text-[#8AA56D] transition-colors py-2 px-4 rounded-full bg-[#FAF9F5] border border-[#DED9CA] shadow-xs group"
          >
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            <span>العودة للمختبر والقائمة</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="font-bold text-lg font-editorial text-[#242421]">كومو.</span>
            <span className="text-xs text-[#77756D] hidden sm:inline">تفاصيل الوصفة الحرفية</span>
          </div>

          <div className="text-xs font-bold text-[#8AA56D] bg-[#8AA56D]/10 px-3 py-1.5 rounded-full hidden sm:block">
            {dish.category}
          </div>

        </div>
      </div>

      {/* Main Product Details Content */}
      <div className="w-[92vw] sm:w-[90vw] max-w-[1450px] mx-auto pt-10 sm:pt-14">
        
        {/* Top Split Hero: Visual Bowl on Right, Specs & Purchase on Left (RTL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* RIGHT COLUMN (Lg 7 cols): PURE LARGE HERO BOWL & STORY */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* The Large Showcase Frame for the Bowl */}
            <div className="relative bg-[#FAF9F5] rounded-[36px] sm:rounded-[44px] border border-[#DED9CA] p-8 sm:p-14 flex items-center justify-center min-h-[480px] sm:min-h-[560px] overflow-hidden shadow-[inset_0_4px_16px_rgba(45,35,20,0.06),0_20px_50px_-15px_rgba(45,35,20,0.08)]">
              
              {/* Soft warm halo behind the bowl */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#EEDB96]/30 blur-3xl pointer-events-none" />
              
              {/* Massive clean hero bowl (No background food behind it!) */}
              <motion.div 
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className={`relative z-10 p-3 sm:p-4 bg-[#FAF9F5] border-2 border-[#DED9CA] 
                  shadow-[inset_0_4px_16px_rgba(0,0,0,0.14),0_24px_50px_-10px_rgba(40,30,15,0.22)]
                  ${dish.id === 'smoked-duck-shoyu-ramen'
                    ? 'w-full max-w-xl aspect-[16/11] sm:aspect-[4/3] rounded-[36px]'
                    : 'w-72 h-72 sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] rounded-full'}`}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className={`w-full h-full object-cover select-none ${dish.id === 'smoked-duck-shoyu-ramen' ? 'rounded-[28px]' : 'rounded-full'}`}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/src/assets/images/ramen_hero_bowl_1789137270027.jpg';
                  }}
                />
              </motion.div>

              {/* Japanese Title Badge */}
              {dish.japaneseTitle && (
                <span className="absolute top-6 left-6 text-sm font-serif text-[#77756D] bg-[#FAF9F5]/90 border border-[#DED9CA] px-3 py-1 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
                  {dish.japaneseTitle}
                </span>
              )}

              {/* Extraction badge */}
              <span className="absolute bottom-6 right-6 text-xs font-mono text-[#8AA56D] bg-[#FAF9F5]/90 border border-[#DED9CA] px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 shadow-[inset_0_1px_2px_rgba(138,165,109,0.15)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{dish.extractionHours}</span>
              </span>

            </div>

            {/* Dish Story & Culinary Manifesto */}
            <div className="bg-[#FAF9F5] rounded-[32px] border border-[#DED9CA] p-8 sm:p-10 space-y-4 shadow-[inset_0_2px_10px_rgba(45,35,20,0.04)]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8AA56D] uppercase">
                <ChefHat className="w-4 h-4" />
                <span>قصة الابتكار وفلسفة التحضير</span>
              </div>
              <h3 className="text-2xl font-bold text-[#242421] font-editorial">
                ما وراء وعاء {dish.name}
              </h3>
              <p className="text-sm sm:text-base text-[#77756D] leading-relaxed">
                {dish.longStory}
              </p>

              <div className="mt-6 pt-6 border-t border-[#DED9CA]/70 grid grid-cols-3 gap-4 text-center">
                <div className="p-3 rounded-2xl bg-[#F3F0E9]">
                  <span className="text-[10px] text-[#77756D] block mb-1">الاستخلاص</span>
                  <span className="text-xs sm:text-sm font-bold text-[#242421] font-mono-num">{dish.extractionHours}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#F3F0E9]">
                  <span className="text-[10px] text-[#77756D] block mb-1">رطوبة النودلز</span>
                  <span className="text-xs sm:text-sm font-bold text-[#242421] font-mono-num">{dish.hydrationRate}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#F3F0E9]">
                  <span className="text-[10px] text-[#77756D] block mb-1">حرارة السكب</span>
                  <span className="text-xs sm:text-sm font-bold text-[#242421] font-mono-num">{dish.servingTemp}</span>
                </div>
              </div>
            </div>

            {/* Chef Tasting Advice */}
            <div className="bg-[#F1E6BD]/60 rounded-[32px] border border-[#DED9CA] p-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D99B19] uppercase">
                <Sparkles className="w-4 h-4" />
                <span>إرشادات التذوق الحسي</span>
              </div>
              <p className="text-sm text-[#242421] leading-relaxed">
                {dish.chefNotes}
              </p>
              <div className="pt-2 text-xs text-[#77756D] flex items-center gap-2">
                <span className="font-bold text-[#242421]">المشروب الموصى به:</span>
                <span>{dish.recommendedPairing}</span>
              </div>
            </div>

          </div>

          {/* LEFT COLUMN (Lg 5 cols): SPECIFICATIONS & INTERACTIVE CUSTOMIZER */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#FAF9F5] rounded-[36px] border border-[#DED9CA] p-8 sm:p-10 shadow-xs space-y-6">
              
              {/* Header: Title & Pricing */}
              <div>
                <span className="text-xs font-semibold text-[#8AA56D] uppercase tracking-widest block mb-1">
                  {dish.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#242421] font-editorial">
                  {dish.name}
                </h1>
                <p className="text-xs text-[#77756D] mt-1">
                  {dish.subtitle}
                </p>

                <div className="mt-4 flex items-center justify-between pb-4 border-b border-[#DED9CA]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#242421] font-mono-num">
                    {dish.cost}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#77756D]">
                    <Star className="w-4 h-4 fill-[#D99B19] text-[#D99B19]" />
                    <span className="font-bold text-[#242421]">{dish.rating}</span>
                    <span>({dish.reviewsCount} تقييم الذواقة)</span>
                  </div>
                </div>
              </div>

              {/* Nutrition & Sensory Snapshot */}
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-[#F3F0E9]">
                  <span className="text-[10px] text-[#77756D] block">السعرات</span>
                  <span className="font-bold font-mono-num text-[#242421]">{dish.calories}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F3F0E9]">
                  <span className="text-[10px] text-[#77756D] block">البروتين</span>
                  <span className="font-bold font-mono-num text-[#242421]">{dish.protein}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F3F0E9]">
                  <span className="text-[10px] text-[#77756D] block">الكربوهيدرات</span>
                  <span className="font-bold font-mono-num text-[#242421]">{dish.carbs}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F3F0E9]">
                  <span className="text-[10px] text-[#77756D] block">الصوديوم النقي</span>
                  <span className="font-bold font-mono-num text-[#242421]">{dish.sodium}</span>
                </div>
              </div>

              {/* CUSTOMIZER SECTION 1: Noodle Firmness */}
              <div className="space-y-2 pt-2 border-t border-[#DED9CA]/70">
                <label className="text-xs font-bold text-[#242421] block">
                  درجة تماسك النودلز (صلابة القمح)
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setNoodleFirmness('firm')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      noodleFirmness === 'firm'
                        ? 'bg-[#242421] text-[#FAF9F5] border-[#242421] font-bold shadow-xs'
                        : 'bg-[#F3F0E9] border-[#DED9CA] text-[#77756D] hover:bg-[#EAE6DC]'
                    }`}
                  >
                    صلبة (كاسامي)
                  </button>
                  <button
                    type="button"
                    onClick={() => setNoodleFirmness('medium')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      noodleFirmness === 'medium'
                        ? 'bg-[#242421] text-[#FAF9F5] border-[#242421] font-bold shadow-xs'
                        : 'bg-[#F3F0E9] border-[#DED9CA] text-[#77756D] hover:bg-[#EAE6DC]'
                    }`}
                  >
                    معتدلة (فوتسو)
                  </button>
                  <button
                    type="button"
                    onClick={() => setNoodleFirmness('soft')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      noodleFirmness === 'soft'
                        ? 'bg-[#242421] text-[#FAF9F5] border-[#242421] font-bold shadow-xs'
                        : 'bg-[#F3F0E9] border-[#DED9CA] text-[#77756D] hover:bg-[#EAE6DC]'
                    }`}
                  >
                    طرية (ياواراكا)
                  </button>
                </div>
              </div>

              {/* CUSTOMIZER SECTION 2: Broth Concentration */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#242421] block">
                  كثافة وتعتيق المرق
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setBrothRichness('light')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      brothRichness === 'light'
                        ? 'bg-[#242421] text-[#FAF9F5] border-[#242421] font-bold shadow-xs'
                        : 'bg-[#F3F0E9] border-[#DED9CA] text-[#77756D] hover:bg-[#EAE6DC]'
                    }`}
                  >
                    خفيف صافي
                  </button>
                  <button
                    type="button"
                    onClick={() => setBrothRichness('balanced')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      brothRichness === 'balanced'
                        ? 'bg-[#242421] text-[#FAF9F5] border-[#242421] font-bold shadow-xs'
                        : 'bg-[#F3F0E9] border-[#DED9CA] text-[#77756D] hover:bg-[#EAE6DC]'
                    }`}
                  >
                    متوازن (توقيع الشيف)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBrothRichness('rich')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      brothRichness === 'rich'
                        ? 'bg-[#242421] text-[#FAF9F5] border-[#242421] font-bold shadow-xs'
                        : 'bg-[#F3F0E9] border-[#DED9CA] text-[#77756D] hover:bg-[#EAE6DC]'
                    }`}
                  >
                    مكثف غني (كوتيري)
                  </button>
                </div>
              </div>

              {/* CUSTOMIZER SECTION 3: Spice Heat Level */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-[#242421]">مستوى الحدة والحرارة</label>
                  <span className="font-mono-num font-bold text-[#8AA56D]">
                    {spiceLevel === 0 ? 'بدون حرارة' : spiceLevel === 1 ? 'دافئ خفيف' : spiceLevel === 2 ? 'حدة متوسطة' : 'حدة نارية'}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {[0, 1, 2, 3].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSpiceLevel(lvl)}
                      className={`py-2 rounded-xl border text-center transition-all ${
                        spiceLevel === lvl
                          ? 'bg-[#C85228] text-[#FAF9F5] border-[#C85228] font-bold'
                          : 'bg-[#F3F0E9] border-[#DED9CA] text-[#77756D] hover:bg-[#EAE6DC]'
                      }`}
                    >
                      مستوى {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* CUSTOMIZER SECTION 4: Artisanal Extra Add-ons */}
              <div className="space-y-2 pt-2 border-t border-[#DED9CA]/70">
                <label className="text-xs font-bold text-[#242421] block">
                  إضافات حرفية موصى بها
                </label>
                <div className="space-y-2">
                  {addonsList.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-2xl border cursor-pointer flex items-center justify-between text-xs transition-all ${
                          isSelected
                            ? 'bg-[#F1E6BD]/60 border-[#D99B19]'
                            : 'bg-[#F3F0E9] border-[#DED9CA] hover:bg-[#EAE6DC]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                            isSelected ? 'bg-[#242421] border-[#242421] text-white' : 'border-[#77756D]'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <span className="font-medium text-[#242421]">{addon.name}</span>
                        </div>
                        <span className="font-mono-num font-bold text-[#242421]">+{addon.price} ر.س</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quantity & Order Button */}
              <div className="pt-4 border-t border-[#DED9CA] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#77756D]">الكمية:</span>
                  <div className="flex items-center gap-3 bg-[#F3F0E9] border border-[#DED9CA] rounded-full px-3 py-1">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 hover:text-[#D99B19] transition-colors"
                      aria-label="إنقاص الكمية"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono-num font-bold text-sm text-[#242421] px-2">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 hover:text-[#D99B19] transition-colors"
                      aria-label="زيادة الكمية"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-[#77756D]">المجموع الإجمالي:</span>
                  <span className="text-2xl font-bold font-mono-num text-[#242421]">{totalPrice} ر.س</span>
                </div>

                <button
                  type="button"
                  onClick={handleOrder}
                  className="w-full py-4 rounded-full bg-[#242421] text-[#FAF9F5] text-sm font-bold hover:bg-[#3d3d38] transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#D99B19]" />
                  <span>تأكيد طلب التذوق وإعداد الوعاء ({totalPrice} ر.س)</span>
                </button>

                {orderConfirmed && (
                  <div className="p-4 rounded-2xl bg-[#8AA56D]/15 border border-[#8AA56D]/40 text-xs text-[#242421] flex items-center gap-2 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 text-[#8AA56D] shrink-0" />
                    <span>تم إرسال مواصفات الوعاء بنجاح إلى مطبخ المعمل الحرفي! جاري التحضير.</span>
                  </div>
                )}

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#77756D] pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8AA56D]" />
                  <span>تحضير طازج على الطلب • استهلاك خلال ٢٠ دقيقة للاستمتاع بالقوام الأمثل</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 4 INGREDIENTS BREAKDOWN CARDS */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#DED9CA]">
          <div className="mb-8 text-right">
            <span className="text-xs font-bold tracking-widest text-[#8AA56D] uppercase block mb-1">
              التشريح النكهي للوعاء
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#242421] font-editorial">
              المكونات الرئيسية الأربعة وتوافقها
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dish.ingredients.map((ing) => (
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                key={ing.id}
                className="bg-[#FAF9F5] rounded-[28px] border border-[#DED9CA] p-6 text-right space-y-4 shadow-[inset_0_2px_8px_rgba(45,35,20,0.04),0_8px_20px_-6px_rgba(40,30,15,0.05)] hover:shadow-[inset_0_3px_10px_rgba(45,35,20,0.06),0_12px_24px_-6px_rgba(40,30,15,0.09)] transition-all"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-[#DED9CA] shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]">
                  <img
                    src={ing.image}
                    alt={ing.name}
                    className="w-full h-full object-cover"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/src/assets/images/ramen_hero_bowl_1789137270027.jpg';
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#242421]">{ing.name}</h4>
                  <span className="text-xs text-[#8AA56D] font-medium block mt-0.5">{ing.subtitle}</span>
                </div>
                {ing.details && (
                  <p className="text-xs text-[#77756D] leading-relaxed pt-2 border-t border-[#DED9CA]/60">
                    {ing.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
