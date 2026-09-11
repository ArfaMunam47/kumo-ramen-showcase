import React, { useState } from 'react';
import { Send, MapPin, Clock, Phone, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ProperFooterProps {
  onScrollTo: (id: string) => void;
}

export const ProperFooter: React.FC<ProperFooterProps> = ({ onScrollTo }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-[#EFECE3] border-t border-[#DED9CA] pt-16 sm:pt-20 pb-12 text-[#242421] text-right font-sans">
      <div className="w-[92vw] sm:w-[90vw] max-w-[1450px] mx-auto">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-16 border-b border-[#DED9CA]">
          
          {/* Col 1 & 2: Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold tracking-tight font-editorial text-[#242421]">
                كومو.
              </span>
              <span className="text-xs text-[#77756D] tracking-widest font-mono">
                KUMO TOKYO LAB
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#77756D] leading-relaxed max-w-sm">
              مختبر الرامن المعاصر وفلسفة الاستخلاص الحرفي. نبتكر في طوكيو ونقدم تجارب تذوق حسية تستند إلى علوم التخمير الطبيعي وأجود أنواع قمح الشتاء من هوكايدو.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#8AA56D] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>مكونات طبيعية ١٠٠٪ • بدون منكهات صناعية • حلال بالكامل</span>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#77756D]">
              التنقل والاستكشاف
            </h4>
            <ul className="space-y-2.5 text-xs text-[#242421]">
              <li>
                <button 
                  onClick={() => onScrollTo('showcase-0')}
                  className="hover:text-[#D99B19] transition-colors"
                >
                  كومو ميسو (الإصدار ٠١)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('artisan-menu')}
                  className="hover:text-[#D99B19] transition-colors"
                >
                  المختارات الحرفية الأربعة
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('craft-philosophy')}
                  className="hover:text-[#D99B19] transition-colors"
                >
                  أركان الاستخلاص الثلاثة
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('showcase-1')}
                  className="hover:text-[#D99B19] transition-colors"
                >
                  تونكوتسو الثوم الأسود (الإصدار ٠٢)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Locations & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#77756D]">
              الفروع وساعات العمل
            </h4>
            <div className="space-y-3 text-xs text-[#77756D]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8AA56D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#242421] block">طوكيو • أوموتيساندو</span>
                  <span>٤-١٢-١٠ جينغوماي، شيبويا</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8AA56D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#242421] block">الرياض • حي السفارات</span>
                  <span>ساحة الثقافة والضيافة</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#D99B19] shrink-0" />
                <span>يومياً: ١٢:٠٠ ظهراً – ١٠:٣٠ مساءً</span>
              </div>
            </div>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#77756D]">
              النشرة البريدية للمعمل
            </h4>
            <p className="text-xs text-[#77756D] leading-relaxed">
              اشترك لتلقي دعوات الإصدارات التجريبية المحدودة وقوائم التذوق الفصلية.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center bg-[#FAF9F5] border border-[#DED9CA] rounded-full p-1 focus-within:border-[#242421] transition-colors">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent text-xs px-3 py-1.5 w-full focus:outline-none text-[#242421] placeholder-[#77756D]/70 text-right"
                />
                <button
                  type="submit"
                  aria-label="اشتراك"
                  className="w-8 h-8 rounded-full bg-[#242421] text-[#FAF9F5] flex items-center justify-center hover:bg-[#3d3d38] transition-colors shrink-0"
                >
                  <Send className="w-3.5 h-3.5 transform -rotate-45" />
                </button>
              </div>

              {isSubscribed && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#8AA56D] font-medium animate-fadeIn">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>شكراً لاشتراككم؛ أهلاً بكم في مجتمع المعمل.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77756D]">
          <div className="flex items-center gap-6 text-[11px]">
            <span>© ٢٠٢٦ كومو رامن لاب. جميع الحقوق محفوظة.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">مختبر الطهي المعاصر</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="hover:text-[#242421] transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-[#242421] transition-colors">معايير الجودة والاستدامة</a>
            <a href="#" className="hover:text-[#242421] transition-colors">تواصل مع الشيف</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
