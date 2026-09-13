import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, Sparkles, CheckCircle2, Phone, MapPin, ArrowLeft } from 'lucide-react';

export const ArtisanCtaSection: React.FC = () => {
  const [guests, setGuests] = useState('2');
  const [experience, setExperience] = useState('tasting-flight');
  const [selectedTime, setSelectedTime] = useState('20:00');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'ATL-' + Math.floor(100000 + Math.random() * 900000);
    setReservationCode(code);
    setIsSubmitted(true);
  };

  return (
    <section 
      id="artisan-atelier-cta"
      className="w-full relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F4] via-[#F4EFE6] to-[#ECE7DC] border-t border-[#E8E4D8] overflow-hidden"
      aria-label="Call to Action: Private Atelier Tasting Reservation"
    >
      {/* Subtle ambient warm lighting in the corner */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#8AA56D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* TOP EDITORIAL BADGE & HEADLINE */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F0E9] border border-[#DED9CA] text-[#77756D] text-[11px] font-mono tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#D99B19]" />
            <span>PRIVATE ATELIER EXPERIENCE • طاولة التذوق الحصرية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242421] tracking-tight leading-tight">
            احجز مقعدك في مختبر الطهي الحي
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#77756D] leading-relaxed max-w-lg mx-auto">
            تجربة تذوق استثنائية من ٧ مسارات يعدها الطهاة مباشرة أمامك في جلسة حميمية لا تتجاوز ١٢ ضيفاً في كل أمسية.
          </p>
        </div>

        {/* MAIN TWO-COLUMN SHOWCASE & BOOKING INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT: LUXURY ATELIER CHEF CULINARY SHOWCASE (EYE-GRABBING, CLEAR, HIGH CONTRAST) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none order-2 lg:order-1">
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full max-w-[460px] relative rounded-3xl overflow-hidden border-2 border-[#DED9CA] shadow-[0_20px_50px_rgba(40,30,15,0.12)] bg-[#242421] group"
            >
              {/* Ultra-premium culinary photography */}
              <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden">
                <img
                  src="/images/atelier_chef_tasting.jpg"
                  alt="مختبر الطهي الياباني الحي وطاولة التذوق"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Atmospheric gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815]/90 via-[#1A1815]/30 to-transparent pointer-events-none" />

                {/* Top Badge: Live exclusivity indicator */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1815]/85 backdrop-blur-md border border-[#D4AF37]/50 text-white text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                    <span className="font-bold text-[#E5C158]">متاح ٤ مقاعد فقط هذا الأسبوع</span>
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 right-4 left-4 z-10 text-right space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#E5C158] font-mono uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>MASTER CHEF ATELIER • طاولة الشيف الخاصة</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    جلسات التذوق المعملية الحصرية
                  </h4>
                  <p className="text-xs text-stone-300 font-medium">
                    استخلاص حراري مباشر، واغيو A5 معتق، وخيوط نودلز طازجة تُعد أمام عينيك.
                  </p>
                </div>
              </div>

              {/* Bottom Atelier Credentials Bar */}
              <div className="p-4 bg-[#1F1E1B] border-t border-stone-800 flex items-center justify-between text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8AA56D]" />
                  <span className="font-mono">جلسة حميمية لـ ١٢ ضيفاً</span>
                </div>
                <span className="text-[#D4AF37] font-mono font-bold tracking-wider">
                  OMAKASE 7-COURSES
                </span>
              </div>
            </motion.div>

            {/* Atelier guarantee note */}
            <div className="mt-4 text-center">
              <span className="text-xs font-mono text-[#77756D] uppercase tracking-wider block">
                مرق معتق ببطء لمدة ١٤ ساعة • شاي ماتشا معتق من أوجي
              </span>
              <span className="text-[11px] text-[#A39E8F] mt-1 block">
                الحجز المسبق إلزامي لضمان جودة الاستخلاص الطازج
              </span>
            </div>
          </div>

          {/* RIGHT: REFINED RESERVATION INTERFACE */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-[#F3F0E9] border border-[#E4E0D2] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_16px_40px_rgba(45,35,20,0.04)]">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleBooking} className="space-y-6">
                    
                    {/* Experience Choice */}
                    <div>
                      <label className="block text-xs font-bold text-[#242421] uppercase tracking-wider mb-2 font-mono">
                        ١. اختر مسار التجربة • SELECTION
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setExperience('tasting-flight')}
                          className={`p-3.5 rounded-xl border text-right transition-all cursor-pointer ${
                            experience === 'tasting-flight'
                              ? 'bg-[#FAF9F5] border-[#242421] shadow-sm text-[#242421]'
                              : 'bg-[#F3F0E9] border-[#DED9CA] text-[#77756D] hover:bg-[#FAF9F5]/50'
                          }`}
                        >
                          <div className="font-bold text-sm text-[#242421]">مسار التذوق الكامل (٧ أطباق)</div>
                          <div className="text-xs text-[#77756D] mt-0.5">رامن التوقيع، مقبلات واغيو، وشاي ماتشا معتق • €65</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setExperience('signature-table')}
                          className={`p-3.5 rounded-xl border text-right transition-all cursor-pointer ${
                            experience === 'signature-table'
                              ? 'bg-[#FAF9F5] border-[#242421] shadow-sm text-[#242421]'
                              : 'bg-[#F3F0E9] border-[#DED9CA] text-[#77756D] hover:bg-[#FAF9F5]/50'
                          }`}
                        >
                          <div className="font-bold text-sm text-[#242421]">طاولة الرامن الحرفية المفتوحة</div>
                          <div className="text-xs text-[#77756D] mt-0.5">اختيارك من أي طبقين رامن ومقبلات حصرية • €38</div>
                        </button>
                      </div>
                    </div>

                    {/* Guests & Time Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Guests Selector */}
                      <div>
                        <label className="block text-xs font-bold text-[#242421] uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#D99B19]" />
                          <span>عدد الضيوف</span>
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {['1', '2', '4', '6'].map((num) => (
                            <button
                              key={num}
                              type="button"
                              onClick={() => setGuests(num)}
                              className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                guests === num
                                  ? 'bg-[#242421] text-[#FAF9F5]'
                                  : 'bg-[#FAF9F5] border border-[#DED9CA] text-[#242421] hover:bg-white'
                              }`}
                            >
                              {num === '1' ? 'ضيف ١' : `${num} ضيوف`}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Slot Selector */}
                      <div>
                        <label className="block text-xs font-bold text-[#242421] uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#D99B19]" />
                          <span>وقت الجلسة</span>
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {['18:30', '20:00', '21:45'].map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                                selectedTime === time
                                  ? 'bg-[#242421] text-[#FAF9F5]'
                                  : 'bg-[#FAF9F5] border border-[#DED9CA] text-[#242421] hover:bg-white'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Guest Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#242421] uppercase tracking-wider mb-1.5 font-mono">
                          اسم الضيف الكريم
                        </label>
                        <input
                          type="text"
                          required
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          placeholder="مثال: سلطان القحطاني"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DED9CA] text-sm text-[#242421] placeholder-[#A39E8F] focus:outline-none focus:border-[#242421] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#242421] uppercase tracking-wider mb-1.5 font-mono">
                          رقم الهاتف للتأكيد
                        </label>
                        <input
                          type="tel"
                          required
                          value={guestPhone}
                          onChange={(e) => setGuestPhone(e.target.value)}
                          placeholder="+966 50 123 4567"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DED9CA] text-sm text-[#242421] placeholder-[#A39E8F] focus:outline-none focus:border-[#242421] transition-colors font-mono"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    {/* Eye-Grabbing Premium Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.015, y: -2 }}
                      whileTap={{ scale: 0.985 }}
                      type="submit"
                      className="group relative w-full py-4 sm:py-4.5 rounded-xl bg-gradient-to-r from-[#242421] via-[#33302B] to-[#242421] hover:from-[#1A1815] hover:to-[#1A1815] text-[#FAF9F5] text-sm sm:text-base font-bold tracking-wide transition-all duration-300 shadow-[0_8px_24px_rgba(36,36,33,0.22)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.28)] flex items-center justify-center gap-3 cursor-pointer border border-[#D4AF37]/50 hover:border-[#D4AF37] overflow-hidden"
                    >
                      {/* Subtle gold sheen animation on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                      
                      <Sparkles className="w-4 h-4 text-[#E5C158] transition-transform duration-300 group-hover:rotate-12" />
                      <span className="font-extrabold text-[#FAF9F5]">تأكيد طلب حجز التجربة الحرفية</span>
                      <ArrowLeft className="w-4 h-4 text-[#E5C158] transition-transform duration-300 group-hover:-translate-x-1" />
                    </motion.button>

                    {/* Reassurance Footer */}
                    <div className="flex flex-wrap items-center justify-between text-[11px] text-[#77756D] pt-2 border-t border-[#E4E0D2]">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#D99B19]" />
                        <span>حي العليا، الرياض • بوليفارد الطهي الحرفي</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#8AA56D]" />
                        <span dir="ltr">+966 11 456 7890</span>
                      </div>
                    </div>

                  </form>
                ) : (
                  /* SUBMITTED CONFIRMATION VIEW */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 sm:py-8 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#8AA56D]/15 text-[#5B783E] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#242421]">
                      تم استلام طلب حجزك بنجاح، يا {guestName || 'ضيفنا الكريم'}
                    </h3>

                    <p className="text-sm text-[#55534E] max-w-md mx-auto leading-relaxed">
                      سيتواصل معك المضيف الحرفي هاتفياً عبر الرقم المسجل خلال دقائق لتأكيد تفضيلات المرق والمقاعد الخاصة.
                    </p>

                    <div className="inline-block bg-[#FAF9F5] border border-[#DED9CA] rounded-xl px-6 py-3 my-2 text-center">
                      <span className="text-[11px] font-mono text-[#77756D] uppercase block">رمز الحجز المؤقت</span>
                      <span className="text-lg font-mono font-bold text-[#242421] tracking-widest">{reservationCode}</span>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setGuestName('');
                          setGuestPhone('');
                        }}
                        className="text-xs font-mono text-[#77756D] hover:text-[#242421] underline underline-offset-4 cursor-pointer"
                      >
                        إجراء حجز آخر أو تعديل البيانات
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
