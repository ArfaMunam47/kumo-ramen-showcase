import React from 'react';
import { ShowcaseIngredient } from '../data/arabicShowcaseData';
import { X, Sparkles } from 'lucide-react';

interface IngredientDetailModalProps {
  ingredient: ShowcaseIngredient | null;
  onClose: () => void;
}

export const IngredientDetailModal: React.FC<IngredientDetailModalProps> = ({
  ingredient,
  onClose,
}) => {
  if (!ingredient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FAF9F5] rounded-[30px] border border-[#DED9CA] max-w-sm w-full p-6 shadow-2xl relative animate-scaleUp text-right"
        role="dialog"
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#F3F0E9] border border-[#DED9CA] flex items-center justify-center text-[#242421] hover:bg-[#E8D98F]/40"
          aria-label="إغلاق"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 text-[10px] text-[#8AA56D] font-bold uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>مواصفات المكون الحرفي</span>
        </div>

        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border border-[#DED9CA] shadow-sm">
          <img
            src={ingredient.image}
            alt={ingredient.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-xl font-bold text-[#242421] font-editorial text-center">
          {ingredient.name}
        </h3>
        <p className="text-xs text-[#77756D] text-center mt-1">
          {ingredient.subtitle}
        </p>

        <div className="mt-6 pt-4 border-t border-[#DED9CA]/60 text-[11px] text-[#77756D] space-y-2">
          <div className="flex justify-between">
            <span>طريقة الحفظ:</span>
            <span className="font-medium text-[#242421]">تعتيق خفيف بدرجة ٤°م</span>
          </div>
          <div className="flex justify-between">
            <span>التوافق النكهي:</span>
            <span className="font-medium text-[#8AA56D]">مرق الصويا والميسو المحمص</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-2.5 rounded-full bg-[#242421] text-[#FAF9F5] text-xs font-medium hover:bg-[#383834] transition-colors"
        >
          العودة للمواصفات
        </button>
      </div>
    </div>
  );
};
