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
      className="w-full relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF9F5] border-t border-[#E8E4D8] overflow-hidden"
      aria-label="Call to Action: Private Atelier Tasting Reservation"
    >
      <div className="w-full max-w-6xl mx-auto">
        
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: THE PURE ISOLATED FOOD HERO CUTOUT WITH NATURAL SHADOW (NO BOX, NO FRAME) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none order-2 lg:order-1">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
              {/* Gentle Floating Motion */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full relative flex flex-col items-center justify-center"
              >
                {/* 100% Isolated Transparent Cutout */}
                <img
                  src="/cutouts/kumo_miso.png"
                  alt="كومو ميسو رامن التوقيع"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain pointer-events-none"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                  }}
                />
                
                {/* Soft Natural Grounding Drop Shadow */}
                <div className="w-[82%] h-8 sm:h-10 bg-[#2A2012] blur-2xl opacity-35 rounded-[100%] mt-[-18px] pointer-events-none -z-10" />
              </motion.div>
            </div>

            {/* Subtle atelier guarantee note */}
            <div className="mt-4 text-center">
              <span className="text-xs font-mono text-[#77756D] uppercase tracking-wider block">
                مرق معتق ببطء لمدة ١٤ ساعة • عجين نودلز يومي طازج
              </span>
              <span className="text-[11px] text-[#A39E8F] mt-1 block">
                متاح يومياً من ٦:٠٠ مساءً حتى ١١:٣٠ مساءً
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

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#242421] hover:bg-[#383733] text-[#FAF9F5] text-sm font-bold tracking-wide transition-all shadow-[0_4px_16px_rgba(36,36,33,0.18)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      <span>تأكيد طلب حجز التجربة الحرفية</span>
                      <ArrowLeft className="w-4 h-4 text-[#D99B19]" />
                    </button>

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
