import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function TopHighlightBanner({ onOrderClick }) {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white border-y-2 border-amber-400 shadow-xl py-2 px-3 sm:px-6 flex items-center justify-between transition-all" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      
      {/* Container to center content */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
        
        {/* Left/Center Text Block with Pulsing Dot */}
        <div className="flex items-center justify-center sm:justify-start space-x-2 w-full sm:w-auto">
          {/* Pulsing Dot */}
          <span className="relative flex h-3 w-3 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-300"></span>
          </span>

          <div className="flex items-center space-x-1.5 text-xs sm:text-sm lg:text-base font-extrabold font-hindi tracking-wide text-white drop-shadow">
            <Sparkles className="w-4 h-4 text-amber-300 hidden xs:inline-block flex-shrink-0" />
            <span>
              🔥 <strong className="text-amber-300 underline uppercase font-sans">SPECIAL OFFER:</strong> ऑनलाइन पेमेंट (Online Payment) करने पर पायें <span className="text-amber-300 font-black text-sm sm:text-lg">FLAT 15% की भारी छूट!</span>
            </span>
          </div>
        </div>

        {/* Right CTA Button */}
        <button
          onClick={onOrderClick}
          className="flex-shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm py-1.5 px-3 sm:px-4 rounded-full shadow-lg uppercase tracking-wider font-sans flex items-center space-x-1 transition-transform transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap border border-amber-200"
        >
          <span>15% छूट पाएं</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
}
