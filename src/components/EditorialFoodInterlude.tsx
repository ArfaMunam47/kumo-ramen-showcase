import React from 'react';
import { Wheat, Flame, Droplets, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const EditorialFoodInterlude: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-[92vw] sm:w-[90vw] max-w-[1450px] mx-auto my-20 sm:my-28 lg:my-32 text-right"
    >
      <div className="bg-[#FAF9F5] rounded-[36px] sm:rounded-[44px] border border-[#DED9CA] p-8 sm:p-12 lg:p-16 shadow-[inset_0_2px_12px_rgba(45,35,20,0.04),0_15px_40px_-15px_rgba(45,35,20,0.08)]">
        
        {/* Top Tag */}
        <div className="flex items-center gap-2 mb-4 justify-end">
          <span className="text-xs font-mono font-bold tracking-widest text-[#8AA56D] uppercase">
            مواثيق الطهي الأربعة • THE FOUR CULINARY TENETS
          </span>
          <span className="w-2 h-2 rounded-full bg-[#8AA56D]" />
        </div>

        {/* Big Editorial Quote */}
        <div className="max-w-3xl ml-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#242421] font-editorial leading-relaxed">
            «لا نؤمن بالمرق السريع؛ النكهة كالبناء المعماري، تحتاج لطبقات متراكمة من الزمن والحرارة حتى تستقر في ذاكرة الحواس.»
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#77756D] mt-3">
            — كبير طهاة المعمل، طوكيو ٢٠٢٤
          </p>
        </div>

        {/* Four Minimal Metrics Cards with Staggered Fade-in and Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#DED9CA]">
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2 text-right p-4 rounded-2xl bg-[#FAF9F5] hover:bg-[#F5EFE0]/50 transition-colors"
          >
            <div className="flex items-center justify-end gap-2 text-[#8AA56D]">
              <span className="text-xs font-mono font-bold">المعيار الأول</span>
              <Droplets className="w-4 h-4" />
            </div>
            <h4 className="text-xl font-bold text-[#242421] font-editorial">استخلاص ١٨ ساعة</h4>
            <p className="text-xs text-[#77756D] leading-relaxed">
              ترويق بطيء على حرارة ٩٤°م ثابتة لمنع احتراق البروتينات وإطلاق جزيئات الجيلاتين الحريرية.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2 text-right p-4 rounded-2xl bg-[#FAF9F5] hover:bg-[#F5EFE0]/50 transition-colors"
          >
            <div className="flex items-center justify-end gap-2 text-[#D99B19]">
              <span className="text-xs font-mono font-bold">المعيار الثاني</span>
              <Wheat className="w-4 h-4" />
            </div>
            <h4 className="text-xl font-bold text-[#242421] font-editorial">قمح هوكايدو ٢٨٪</h4>
            <p className="text-xs text-[#77756D] leading-relaxed">
              طحين شتوي ياباني بنسبة رطوبة محكومة، يُعجن يدوياً يومياً ليعطي قوام الكوشي المطاطي المتماسك.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2 text-right p-4 rounded-2xl bg-[#FAF9F5] hover:bg-[#F5EFE0]/50 transition-colors"
          >
            <div className="flex items-center justify-end gap-2 text-[#C85228]">
              <span className="text-xs font-mono font-bold">المعيار الثالث</span>
              <Flame className="w-4 h-4" />
            </div>
            <h4 className="text-xl font-bold text-[#242421] font-editorial">زيت المايو ٧ درجات</h4>
            <p className="text-xs text-[#77756D] leading-relaxed">
              تحميص الثوم والسمسم على ٧ مراحل حرارية متتالية حتى الأسود القاتم بدون ذرة مرارة واحدة.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2 text-right p-4 rounded-2xl bg-[#FAF9F5] hover:bg-[#F5EFE0]/50 transition-colors"
          >
            <div className="flex items-center justify-end gap-2 text-[#77756D]">
              <span className="text-xs font-mono font-bold">المعيار الرابع</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-xl font-bold text-[#242421] font-editorial">صويا براميل الأرز</h4>
            <p className="text-xs text-[#77756D] leading-relaxed">
              تخمير طبيعي غير مسرع يمتد لثلاث سنوات في براميل خشب الأرز المعتقة في مقاطعة ناغانو.
            </p>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};
