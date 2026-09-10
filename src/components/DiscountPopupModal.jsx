import React, { useState, useEffect } from 'react';
import { Tag, Sparkles, X, Gift, ArrowRight } from 'lucide-react';

export default function DiscountPopupModal({ onClaimDiscount }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(599); // 9 minutes 59 seconds countdown

  useEffect(() => {
    // Check if user already dismissed popup in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenDiscountModal');
    
    // Popup shows after 2.5 seconds if not closed before
    const timer = setTimeout(() => {
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Countdown Timer
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenDiscountModal', 'true');
  };

  const handleClaim = () => {
    handleClose();
    if (onClaimDiscount) {
      onClaimDiscount();
    }
  };

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div className="bg-white border-2 border-blue-600 p-6 sm:p-8 rounded-3xl max-w-lg w-full relative shadow-2xl text-center overflow-hidden">
        
        {/* Top Blue Accent Ribbon Accent */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-full bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gift Icon Badge */}
        <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-600 flex items-center justify-center mx-auto text-blue-600 shadow-md mb-4">
          <Gift className="w-8 h-8 animate-bounce text-blue-600" />
        </div>

        {/* Badge Header */}
        <div className="inline-flex items-center space-x-1.5 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full mb-3">
          <Sparkles className="w-3.5 h-3.5 text-red-600" />
          <span className="text-xs font-black text-red-700 uppercase tracking-wider font-sans">
            विशेष ऑफर (LIMITED TIME OFFER)
          </span>
        </div>

        {/* Main Offer Title */}
        <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight font-sans uppercase">
          ऑनलाइन ऑर्डर पर पाएं <br />
          <span className="text-blue-700 drop-shadow-sm">
            10-15% की विशेष छूट!
          </span>
        </h3>

        {/* Hindi Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-slate-600 font-hindi leading-relaxed">
          केवल आज ही वेबसाइट से ऑनलाइन ऑर्डर करने पर पायें <strong className="text-red-600 font-bold">FLAT 15% डिस्काउंट</strong> और मुफ्त डिलीवरी (Free Delivery)!
        </p>

        {/* Countdown Box */}
        <div className="my-5 bg-slate-50 border border-blue-200 p-3 rounded-2xl flex items-center justify-between px-4 max-w-xs mx-auto">
          <div className="flex items-center space-x-2 text-blue-700 font-sans text-xs font-bold uppercase">
            <Tag className="w-4 h-4" />
            <span>ऑफर समाप्त होने में:</span>
          </div>
          <div className="font-mono text-lg font-black text-blue-700 bg-white px-3 py-1 rounded-lg border border-blue-200 shadow-sm">
            0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>

        {/* Claim Discount Button */}
        <button
          onClick={handleClaim}
          className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-500 hover:to-red-600 text-white font-black text-lg sm:text-xl py-3.5 px-6 rounded-2xl shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 font-hindi cursor-pointer"
        >
          <span>⚡ अभी 15% छूट का लाभ उठाएं</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Subtext */}
        <p className="text-[11px] text-slate-500 font-hindi mt-3">
          * 100% गोपनीय डिलीवरी | कैश ऑन डिलीवरी (COD) उपलब्ध है
        </p>

      </div>
    </div>
  );
}
