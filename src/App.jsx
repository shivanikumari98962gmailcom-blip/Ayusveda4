import React, { useRef } from 'react';
import TopHighlightBanner from './components/TopHighlightBanner';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import AgeInfoSection from './components/AgeInfoSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import IngredientsSection from './components/IngredientsSection';
import BenefitsSection from './components/BenefitsSection';
import RecommendationSection from './components/RecommendationSection';
import OfficialWarningSection from './components/OfficialWarningSection';
import ReviewsSection from './components/ReviewsSection';
import DeliverySection from './components/DeliverySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DiscountPopupModal from './components/DiscountPopupModal';

export default function App() {
  const orderFormRef = useRef(null);

  const scrollToOrderForm = () => {
    const orderFormEl = document.getElementById('order-form');
    if (orderFormEl) {
      orderFormEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const phoneInput = orderFormEl.querySelector('input[type="tel"]');
      if (phoneInput) {
        setTimeout(() => {
          phoneInput.focus();
        }, 500);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Highlight Announcement Bar */}
      <TopHighlightBanner onOrderClick={scrollToOrderForm} />

      {/* 10-15% OFF Online Discount Popup Modal */}
      <DiscountPopupModal onClaimDiscount={scrollToOrderForm} />

      {/* Landing Page Content */}
      <main className="flex-grow">
        <HeroSection orderFormRef={orderFormRef} />
        <TrustBadges />
        <RecommendationSection />
        <AgeInfoSection />
        <ProblemSection />
        <SolutionSection onOrderClick={scrollToOrderForm} />
        <IngredientsSection />
        <BenefitsSection onOrderClick={scrollToOrderForm} />
        <OfficialWarningSection onOrderClick={scrollToOrderForm} />
        <ReviewsSection />
        <DeliverySection />
        <FinalCTA onOrderClick={scrollToOrderForm} />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
