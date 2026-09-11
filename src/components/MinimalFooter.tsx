import React from 'react';

export const MinimalFooter: React.FC = () => {
  return (
    <footer className="mt-20 py-12 px-6 sm:px-10 border-t border-[#DED9CA]/60 text-[#77756D] text-xs">
      <div className="max-w-[1520px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-4">
          <span className="font-bold text-[#242421] text-base font-editorial tracking-tight">
            كومو.
          </span>
          <span className="text-[#DED9CA]">|</span>
          <span className="text-[11px] text-[#77756D]">
            مختبر الرامن المعاصر والابتكار الحرفي
          </span>
        </div>

        <div className="flex items-center gap-8 text-[11px]">
          <span>طوكيو • أوموتيساندو</span>
          <span>ساعات الاستقبال: ١٢:٠٠ – ٢٢:٠٠</span>
          <span>© ٢٠٢٦ كومو. جميع الحقوق محفوظة.</span>
        </div>

      </div>
    </footer>
  );
};
