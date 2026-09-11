import React, { useState } from 'react';
import { Search, Menu, X, Sparkles } from 'lucide-react';

interface MinimalNavbarProps {
  onSearchClick?: () => void;
  onScrollTo?: (id: string) => void;
}

export const MinimalNavbar: React.FC<MinimalNavbarProps> = ({
  onSearchClick,
  onScrollTo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    if (onScrollTo) {
      onScrollTo(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#F3F0E9]/90 backdrop-blur-md border-b border-[#DED9CA]/60 sticky top-0 z-40 transition-all">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Right (RTL start): Small wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('showcase-0')}
            className="text-xl sm:text-2xl font-bold tracking-tight text-[#242421] font-editorial hover:opacity-80 transition-opacity text-right"
          >
            كومو.
          </button>
          <span className="text-[10px] text-[#77756D] tracking-widest hidden sm:inline-block font-mono border-r border-[#DED9CA] pr-3 mr-1">
            KUMO TOKYO LAB
          </span>
        </div>

        {/* Center: Quiet navigation links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] font-medium tracking-wide text-[#77756D]">
          <button
            onClick={() => handleNavClick('continuous-showcase')}
            className="hover:text-[#242421] transition-colors focus:outline-none"
          >
            معرض الأوعية الحي
          </button>
          <button
            onClick={() => handleNavClick('the-menu')}
            className="hover:text-[#242421] transition-colors focus:outline-none"
          >
            قائمة الأطباق
          </button>
          <button
            onClick={() => handleNavClick('craft-philosophy')}
            className="hover:text-[#242421] transition-colors focus:outline-none"
          >
            فلسفة الاستخلاص
          </button>
        </nav>

        {/* Left (RTL end): Search and Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSearchClick}
            aria-label="البحث في القائمة"
            className="h-10 px-3.5 rounded-full bg-[#FAF9F5] border border-[#DED9CA] flex items-center gap-2 text-xs text-[#242421] hover:bg-[#E8D98F]/40 hover:border-[#D99B19]/50 transition-all duration-200 shadow-2xs"
          >
            <Search className="w-3.5 h-3.5 text-[#77756D]" />
            <span className="hidden sm:inline text-[#77756D]">بحث في الأطباق...</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="القائمة المتنقلة"
            className="md:hidden w-10 h-10 rounded-full bg-[#FAF9F5] border border-[#DED9CA] flex items-center justify-center text-[#242421]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Minimal Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-[#DED9CA] px-6 py-5 space-y-4 text-xs font-medium text-[#242421] text-right shadow-lg">
          <button
            onClick={() => handleNavClick('showcase-0')}
            className="block w-full py-1.5 hover:text-[#D99B19]"
          >
            كومو ميسو (الإصدار ٠١)
          </button>
          <button
            onClick={() => handleNavClick('the-menu')}
            className="block w-full py-1.5 hover:text-[#D99B19]"
          >
            قائمة الأطباق الـ ١٢
          </button>
          <button
            onClick={() => handleNavClick('craft-philosophy')}
            className="block w-full py-1.5 hover:text-[#D99B19]"
          >
            فلسفة الاستخلاص والأركان الثلاثة
          </button>
          <button
            onClick={() => handleNavClick('showcase-1')}
            className="block w-full py-1.5 hover:text-[#D99B19]"
          >
            تونكوتسو الثوم الأسود (الإصدار ٠٢)
          </button>
        </div>
      )}
    </header>
  );
};
