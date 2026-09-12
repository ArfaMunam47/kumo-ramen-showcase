/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ALL_PRODUCTS, 
  ProductDish 
} from './data/arabicShowcaseData';
import { MinimalNavbar } from './components/MinimalNavbar';
import { FoodHeroHeader } from './components/FoodHeroHeader';
import { FoodRotator } from './components/FoodRotator';
import { EditorialFoodInterlude } from './components/EditorialFoodInterlude';
import { FoodMenuSection } from './components/FoodMenuSection';
import { FoodOrbitShowcase } from './components/FoodOrbitShowcase';
import { CraftPhilosophySection } from './components/CraftPhilosophySection';
import { ArtisanCtaSection } from './components/ArtisanCtaSection';
import { ProperFooter } from './components/ProperFooter';
import { SearchModal } from './components/SearchModal';
import { ProductDetailPage } from './components/ProductDetailPage';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductDish | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Instant image preloading: pre-cache all culinary photos into memory
  useEffect(() => {
    ALL_PRODUCTS.forEach((dish) => {
      if (dish.image) {
        const img = new Image();
        img.src = dish.image;
      }
      if (dish.ingredients) {
        dish.ingredients.forEach((ing) => {
          if (ing.image) {
            const ingImg = new Image();
            ingImg.src = ing.image;
          }
        });
      }
    });
  }, []);

  const scrollToSection = (id: string) => {
    // If currently viewing a product detail, go back to main first
    if (selectedProduct) {
      setSelectedProduct(null);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // If a user clicks on any product (hero showcase or any of the 12 menu dishes),
  // open the full dedicated Product Detail Page!
  if (selectedProduct) {
    return (
      <ProductDetailPage
        dish={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F0E9] text-[#242421] selection:bg-[#E8D98F] selection:text-[#242421] font-sans">
      
      {/* 1. Minimal Luxury Navbar (RTL) */}
      <MinimalNavbar
        onSearchClick={() => setIsSearchOpen(true)}
        onScrollTo={scrollToSection}
      />

      {/* ========================================================= */}
      {/* MAIN EDITORIAL FLOW: SPACIOUS, ELEGANT & CONTINUOUS       */}
      {/* ========================================================= */}
      <main className="w-full pt-8 sm:pt-12 pb-24 flex flex-col items-center">
        
        {/* 1. FOOD-FOCUSED HERO HEADER & DISH INDEX */}
        {/* Communicates immediately that this is a premium food atelier */}
        <FoodHeroHeader
          onSelectDish={(dish) => setSelectedProduct(dish)}
          onScrollToMenu={() => scrollToSection('the-menu')}
        />

        {/* --------------------------------------------------------- */}
        {/* 2. CIRCULAR TACTILE SHOWCASE (3S AUTO ROTATION)           */}
        {/* Circular Stoneware vessel with deep drop shadows & 3s timer*/}
        {/* --------------------------------------------------------- */}
        <div className="w-full mb-10 sm:mb-14">
          <FoodRotator
            onOpenProductDetails={(dish) => setSelectedProduct(dish)}
          />
        </div>

        {/* --------------------------------------------------------- */}
        {/* 3. EDITORIAL FOOD INTERLUDE / CRAFT STANDARDS            */}
        {/* Elevates the culinary authority and extends page depth   */}
        {/* --------------------------------------------------------- */}
        <div className="w-full mb-16 sm:mb-20">
          <EditorialFoodInterlude />
        </div>

        {/* --------------------------------------------------------- */}
        {/* 4. THE MENU: 17-DISH ASYMMETRIC COLLECTION WITH 3D FOOD  */}
        {/* "Made to be looked at. Made to be eaten."                 */}
        {/* --------------------------------------------------------- */}
        <div className="w-full mb-16 sm:mb-20">
          <FoodMenuSection
            dishes={ALL_PRODUCTS}
            onOpenProductDetails={(dish) => setSelectedProduct(dish)}
          />
        </div>

        {/* --------------------------------------------------------- */}
        {/* 5. 3D BLUR-TO-FOCUS SHOWCASE (BEFORE CTA & FOOTER)        */}
        {/* Manual Click, Blurry Sides, Highlight Center, 1 Page     */}
        {/* --------------------------------------------------------- */}
        <div className="w-full mb-16 sm:mb-20">
          <FoodOrbitShowcase
            onSelectProduct={(dish) => setSelectedProduct(dish)}
          />
        </div>

        {/* --------------------------------------------------------- */}
        {/* 6. THE THREE PILLARS OF CRAFTSMANSHIP & TASTING FLIGHT   */}
        {/* --------------------------------------------------------- */}
        <div className="w-full mb-20 sm:mb-28">
          <CraftPhilosophySection />
        </div>

        {/* --------------------------------------------------------- */}
        {/* 7. PRIVATE ATELIER TASTING CALL TO ACTION SECTION        */}
        {/* --------------------------------------------------------- */}
        <div className="w-full">
          <ArtisanCtaSection />
        </div>

      </main>

      {/* 7. Comprehensive Proper Footer */}
      <ProperFooter onScrollTo={scrollToSection} />

      {/* Universal Search Modal across all products */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(dish) => setSelectedProduct(dish)}
      />

    </div>
  );
}
