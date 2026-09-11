import React, { useState } from 'react';
import { ALL_PRODUCTS, ProductDish } from '../data/arabicShowcaseData';
import { Search, X, ArrowLeft } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (dish: ProductDish) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = ALL_PRODUCTS.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.nameEn.toLowerCase().includes(query.toLowerCase()) ||
      d.description.toLowerCase().includes(query.toLowerCase()) ||
      d.category.toLowerCase().includes(query.toLowerCase()) ||
      d.ingredients.some((ing) => ing.name.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FAF9F5] rounded-[30px] border border-[#DED9CA] max-w-lg w-full p-6 shadow-2xl relative animate-scaleUp text-right"
        role="dialog"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#DED9CA]">
          <div className="flex items-center gap-3 w-full">
            <Search className="w-5 h-5 text-[#77756D]" />
            <input
              type="text"
              placeholder="ابحث عن طبق، مكون، أو نكهة في المعمل..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-[#242421] placeholder-[#77756D]/70 focus:outline-none"
              autoFocus
            />
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F3F0E9] border border-[#DED9CA] flex items-center justify-center text-[#242421] hover:bg-[#E8D98F]/40"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-4 space-y-3 max-h-80 overflow-y-auto">
          {filtered.map((dish) => (
            <div
              key={dish.id}
              onClick={() => {
                onSelectProduct(dish);
                onClose();
              }}
              className="p-3.5 rounded-2xl bg-[#F3F0E9]/60 hover:bg-[#F1E6BD]/60 border border-[#DED9CA] cursor-pointer flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#DED9CA] shadow-inner"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/src/assets/images/ramen_hero_bowl_1789137270027.jpg';
                  }}
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-[#242421] group-hover:text-[#D99B19] transition-colors">{dish.name}</h4>
                    <span className="text-[10px] text-[#8AA56D]">{dish.category.split('•')[0]}</span>
                  </div>
                  <p className="text-[10px] text-[#77756D] mt-0.5">{dish.cost} • {dish.cookTime} • {dish.calories}</p>
                </div>
              </div>
              <ArrowLeft className="w-4 h-4 text-[#77756D] group-hover:-translate-x-1 transition-transform" />
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-8 text-xs text-[#77756D]">
              لا توجد أطباق تطابق بحثك في المعمل الحرفي.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
