import React from 'react';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import OrderForm from './OrderForm';

export default function HeroSection({ orderFormRef }) {
  const points = [
    "टेस्टोस्टेरोन बढ़ाने में सपोर्ट करे",
    "थकान कम करने में उपयोगी",
    "शक्ति और स्टैमिना में सपोर्ट",
    "पुरुष ऊर्जा बढ़ाने में मदद करे"
  ];

  return (
    <section className="relative pt-4 sm:pt-6 pb-0 text-slate-900 overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      
      {/* Subtle Light Background Glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 35%, rgba(59, 130, 246, 0.08) 0%, rgba(241, 245, 249, 0.5) 50%, #f8fafc 100%)'
        }}
      ></div>

      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Header Row: CALL US NOW Box Top Right */}
        <div className="flex justify-end mb-4 sm:mb-6">
          <a 
            href="tel:9925015492" 
            className="flex items-center space-x-0 border-2 border-blue-600 rounded-lg overflow-hidden bg-white shadow-lg hover:opacity-95 transition-opacity"
          >
            <div className="bg-red-600 text-white font-black text-xs sm:text-sm px-3.5 sm:px-4 py-2 uppercase font-sans tracking-wider flex items-center space-x-1.5">
              <PhoneCall className="w-4 h-4" />
              <span>CALL US NOW</span>
            </div>
            <div className="bg-white text-blue-700 font-black text-base sm:text-2xl px-3.5 sm:px-4 py-1.5 font-mono tracking-wider">
              9925015492
            </div>
          </a>
        </div>

        {/* Main Title Block */}
        <div className="text-left mb-4 sm:mb-6">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase font-sans drop-shadow-sm">
            <span className="text-red-600">HORSEFIRE</span>
            <span className="text-blue-700 ml-2 sm:ml-4">TABLET</span>
          </h1>

          <div className="inline-block mt-2 border-t-2 border-b-2 border-amber-500 py-1 max-w-full">
            <p className="text-slate-800 font-bold italic text-sm sm:text-xl lg:text-2xl font-sans tracking-wide">
              Multi-Herb Supplement For Male Wellness
            </p>
          </div>
        </div>

        {/* 3 Column Wide Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative">
          
          {/* Left Column: 4 Points + Product Bottle & Banner Image */}
          <div className="lg:col-span-5 space-y-5 z-10 pb-4">
            
            {/* 4 Green Checkmark Points */}
            <div className="space-y-3">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-left">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-lg lg:text-xl font-extrabold text-slate-800 font-hindi">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Product Bottle & Gold Boxes + Green Offer Banner Image matching reference image 2 100% */}
            <div 
              onClick={() => {
                const el = document.getElementById('order-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="pt-2 flex justify-start cursor-pointer hover:opacity-95 transition-opacity"
            >
              <img 
                src="/home_images/hero-bottle-banner.png" 
                alt="Horse Fire Bottle Testosterone Support Save 10%" 
                className="w-full max-w-[520px] h-auto object-contain drop-shadow-xl"
                onError={(e) => {
                  e.target.src = "/home_images/bottlesave.webp";
                }}
              />
            </div>

          </div>

          {/* Center Column: Large Couple Image */}
          <div className="lg:col-span-3 flex justify-center relative z-0 mt-4 lg:-mt-48">
            <div className="relative">
              <img 
                src="/home_images/cuple.png" 
                alt="Horse Fire Couple" 
                className="h-[360px] sm:h-[540px] lg:h-[640px] xl:h-[700px] w-auto object-contain drop-shadow-xl scale-105 sm:scale-110"
                onError={(e) => {
                  e.target.src = "/home_images/couple.png";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-slate-100 via-slate-100/70 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: Order Form Card + Trust Seals */}
          <div className="lg:col-span-4 space-y-4 z-10 pb-4 mt-6 lg:-mt-44">
            
            {/* 3 Large, Highly Visible Seals aligned above Order Form */}
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 pb-2">
              {/* Seal 1 */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-blue-600 bg-white p-1 sm:p-1.5 flex flex-col items-center justify-center text-[7px] sm:text-[8px] font-bold text-slate-800 uppercase leading-none shadow-md text-center">
                <span className="text-[6px] sm:text-[7px] text-slate-500">100%</span>
                <span className="text-blue-700 font-black text-[8px] sm:text-[10px] my-0.5">SATISFACTION</span>
                <span className="text-[6px] sm:text-[7px] text-slate-500">GUARANTEED</span>
              </div>
              
              {/* Seal 2 */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-amber-500 bg-white p-1 sm:p-1.5 flex flex-col items-center justify-center text-[7px] sm:text-[8px] font-bold text-slate-800 uppercase leading-none shadow-md text-center">
                <span className="text-[6px] sm:text-[7px] text-slate-500">The</span>
                <span className="text-amber-600 font-black text-[9px] sm:text-[11px] my-0.5">BEST</span>
                <span className="text-[6px] sm:text-[7px] text-slate-500">Choice</span>
              </div>
              
              {/* Seal 3 */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-blue-600 bg-white p-1 sm:p-1.5 flex flex-col items-center justify-center text-[7px] sm:text-[8px] font-bold text-slate-800 uppercase leading-none shadow-md text-center">
                <span className="text-[6px] sm:text-[7px] text-slate-500">QUALITY</span>
                <span className="text-blue-700 font-black text-[9px] sm:text-[11px] my-0.5">TOP</span>
                <span className="text-[6px] sm:text-[7px] text-slate-500">GUARANTEED</span>
              </div>
            </div>

            {/* Order Form Component */}
            <OrderForm ref={orderFormRef} id="order-form" />

          </div>

        </div>

      </div>

      {/* Bottom Full-Width Slanted Badges & Security Bar */}
      <div className="mt-6 border-t border-slate-200 bg-white pt-4 pb-4 shadow-inner">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          
          {/* Badge 1 */}
          <div className="relative border-2 border-blue-600 bg-blue-50/50 p-2.5 sm:p-3 transform -skew-x-12 text-center shadow-sm rounded">
            <span className="text-[10px] sm:text-base font-black text-blue-700 uppercase tracking-wider block font-sans">
              100% SATISFACTION
            </span>
            <span className="text-[8px] sm:text-xs text-slate-700 font-sans block mt-0.5 font-medium">
              YOU'RE GOING TO LOVE THIS
            </span>
          </div>

          {/* Badge 2 */}
          <div className="relative border-2 border-amber-500 bg-amber-50/50 p-2.5 sm:p-3 transform -skew-x-12 text-center shadow-sm rounded">
            <span className="text-[10px] sm:text-base font-black text-amber-700 uppercase tracking-wider block font-sans">
              CONVENIENT TABLET
            </span>
            <span className="text-[8px] sm:text-xs text-slate-700 font-sans block mt-0.5 font-medium">
              SIMPLE DIRECTION TO FOLLOW
            </span>
          </div>

          {/* Badge 3 */}
          <div className="relative border-2 border-emerald-600 bg-emerald-50/50 p-2.5 sm:p-3 transform -skew-x-12 text-center shadow-sm rounded">
            <span className="text-[10px] sm:text-base font-black text-emerald-700 uppercase tracking-wider block font-sans">
              PURE AYURVEDIC
            </span>
            <span className="text-[8px] sm:text-xs text-slate-700 font-sans block mt-0.5 font-medium">
              MADE WITH NATURAL HERBS
            </span>
          </div>

          {/* Badge 4: Bright Security Badges */}
          <div className="bg-slate-100 p-2.5 sm:p-3 rounded-xl flex items-center justify-center space-x-2 shadow-sm border border-slate-300">
            <img 
              src="/home_images/secure1.png" 
              alt="McAfee SECURE & RapidSSL" 
              className="h-7 sm:h-10 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

        </div>
      </div>

    </section>
  );
}
