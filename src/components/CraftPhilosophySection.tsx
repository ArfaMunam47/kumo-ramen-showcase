import React, { useState } from 'react';
import { Sparkles, Droplets, Wheat, Barrel, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const CraftPhilosophySection: React.FC = () => {
  const [reservationBooked, setReservationBooked] = useState(false);

  return (
    <section id="craft-philosophy" className="w-[92vw] sm:w-[90vw] max-w-[1450px] mx-auto text-right">
      
      {/* Section Header */}
      <div className="mb-12 text-right px-2 sm:px-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#8AA56D] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#8AA56D] uppercase">
            علم الطهي وفلسفة الاستخلاص
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#242421] font-editorial">
          أركان التحضير الحرفي الثلاثة
        </h2>
        <p className="text-sm text-[#77756D] max-w-2xl mt-2 leading-relaxed">
          لا نعتمد على الإضافات الصناعية أو المواد الحافظة؛ كل وعاء رامن يخرج من مختبرنا هو نتاج دراسة علمية دقيقة لدرجات الحرارة ونسب الرطوبة والتخمير الطبيعي.
        </p>
      </div>

      {/* The 3 Pillars Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Pillar 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="bg-[#FAF9F5] rounded-[32px] border border-[#DED9CA] p-8 flex flex-col justify-between shadow-[inset_0_3px_12px_rgba(45,35,20,0.06),0_12px_28px_-8px_rgba(40,30,15,0.07)] hover:border-[#8AA56D]/50 transition-colors"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#8AA56D]/15 text-[#8AA56D] flex items-center justify-center mb-6 shadow-[inset_0_1px_3px_rgba(138,165,109,0.2)]">
              <Droplets className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#77756D] block mb-1">
              الاستخلاص الحراري • ٠١
            </span>
            <h3 className="text-xl font-bold text-[#242421] font-editorial mb-3">
              استخلاص بطيء ١٨ ساعة
            </h3>
            <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed">
              غليان هادئ تحت درجة حرارة ثابتة ٩٨°م يذيب الكولاجين الطبيعي ويحرر أحماض الجلوتاميك المسؤولة عن الأومامي الصافي، دون أن يتعكر صفو المرق أو تتغير نكهته العطرية.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-[#DED9CA]/60 text-[11px] font-mono text-[#8AA56D] flex justify-between">
            <span>حرارة الغليان: ٩٨°م</span>
            <span>نقاء الدهون: ٩٩.٤٪</span>
          </div>
        </motion.div>

        {/* Pillar 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="bg-[#FAF9F5] rounded-[32px] border border-[#DED9CA] p-8 flex flex-col justify-between shadow-[inset_0_3px_12px_rgba(45,35,20,0.06),0_12px_28px_-8px_rgba(40,30,15,0.07)] hover:border-[#D99B19]/50 transition-colors"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#D99B19]/15 text-[#D99B19] flex items-center justify-center mb-6 shadow-[inset_0_1px_3px_rgba(217,155,25,0.2)]">
              <Wheat className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#77756D] block mb-1">
              هندسة القمح • ٠٢
            </span>
            <h3 className="text-xl font-bold text-[#242421] font-editorial mb-3">
              قمح هوكايدو بنسبة رطوبة ٢٨٪
            </h3>
            <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed">
              طحين مطحون على الحجر من حقول هوكايدو الباردة، يُعجن بنسبة رطوبة دقيقة ومياه معدنية قلوية (كانسوي) لتوفير شد مطاطي يحافظ على تماسك النودلز داخل المرق الساخن.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-[#DED9CA]/60 text-[11px] font-mono text-[#D99B19] flex justify-between">
            <span>معيار الرطوبة: ٢٨٪</span>
            <span>وقت الراحة: ٢٤ ساعة</span>
          </div>
        </motion.div>

        {/* Pillar 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="bg-[#FAF9F5] rounded-[32px] border border-[#DED9CA] p-8 flex flex-col justify-between shadow-[inset_0_3px_12px_rgba(45,35,20,0.06),0_12px_28px_-8px_rgba(40,30,15,0.07)] hover:border-[#242421]/50 transition-colors"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#242421]/10 text-[#242421] flex items-center justify-center mb-6 shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)]">
              <Barrel className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#77756D] block mb-1">
              التعتيق الخشبي • ٠٣
            </span>
            <h3 className="text-xl font-bold text-[#242421] font-editorial mb-3">
              تاري الصويا في خشب الأرز
            </h3>
            <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed">
              صلصات التاري الأساسية تُعتق في براميل خشب الكيدو والأرز الياباني القديم لأكثر من ثلاث سنوات، حيث تمتزج الكائنات الدقيقة الطبيعية لتنتج نكهة خشبية دافئة لا تضاهى.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-[#DED9CA]/60 text-[11px] font-mono text-[#242421] flex justify-between">
            <span>التعتيق: ٣ إلى ١٠ سنوات</span>
            <span>البراميل: أرز جبلي</span>
          </div>
        </motion.div>

      </div>

      {/* Tasting Flight & Reservation Invitation Banner (Elevated with Photography & Magnetic CTA) */}
      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 bg-[#FAF9F5] rounded-[36px] sm:rounded-[44px] border-2 border-[#DED9CA] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-15px_rgba(40,30,15,0.08),inset_0_2px_8px_rgba(45,35,20,0.04)] overflow-hidden relative"
      >
        {/* Subtle warm halo */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D99B19]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column in RTL (7 Cols): Editorial Text & Magnetic Reservation CTA */}
          <div className="lg:col-span-7 space-y-4 text-right">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8AA56D] uppercase font-mono">
              <Sparkles className="w-4 h-4 text-[#D99B19]" />
              <span>طاولة التذوق المعملية الحصرية • PRIVATE OMAKASE ATELIER</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#242421] font-editorial leading-tight">
              اختبر رحلة التذوق الكاملة المكونة من خمسة أوعية
            </h3>

            <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed max-w-xl">
              جلسات مسائية حصرية لثمانية ضيوف فقط، يقدم فيها رئيس الطهاة شروحاً مباشرة لكل مرحلة استخلاص ونوع مرق مع تشكيلة شاي ياباني عضوي مقطوف طازجاً من مزارع أوجي.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-[#242421]">
              <span className="bg-[#EFECE3] px-3.5 py-1.5 rounded-full border border-[#DED9CA]">
                ٨ مقاعد فقط لكل جلسة
              </span>
              <span className="bg-[#EFECE3] px-3.5 py-1.5 rounded-full border border-[#DED9CA]">
                ٥ مسارات تذوق متتالية
              </span>
              <span className="text-[#8AA56D] font-bold">
                شاي ياباني عضوي مرافق
              </span>
            </div>

            {/* ACTION ROW */}
            <div className="pt-3">
              {!reservationBooked ? (
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setReservationBooked(true);
                    setTimeout(() => setReservationBooked(false), 7000);
                  }}
                  className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#242421] via-[#33302B] to-[#242421] hover:from-[#1A1815] hover:to-[#1A1815] text-[#FAF9F5] text-sm font-bold transition-all duration-300 shadow-[0_8px_24px_rgba(36,36,33,0.2)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.25)] flex items-center justify-center gap-3 cursor-pointer border border-[#D4AF37]/50 hover:border-[#D4AF37] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                  <Calendar className="w-4 h-4 text-[#E5C158] transition-transform duration-300 group-hover:rotate-6" />
                  <span className="font-extrabold text-[#FAF9F5]">حجز مقعد في طاولة التذوق القادمة</span>
                </motion.button>
              ) : (
                <div className="px-6 py-4 rounded-2xl bg-[#8AA56D] text-white text-xs sm:text-sm font-bold flex items-center gap-3 shadow-md animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>تم تسجيل اهتمامكم بنجاح! سيتواصل معكم منسق المعمل لتأكيد الموعد المفضل.</span>
                </div>
              )}
            </div>
          </div>

          {/* Left Column in RTL (5 Cols): Clean Luxury Product Photography (No text overlays) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[28px] overflow-hidden border-2 border-[#DED9CA] shadow-[0_20px_45px_-10px_rgba(40,30,15,0.14)] group bg-[#FAF9F5]">
              <img 
                src="/images/luxury_ramen_product.jpg"
                alt="طبق الرامن الحرفي الفاخر"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
};
