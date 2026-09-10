import React from 'react';

export default function TrustBadges() {
  return (
    <div className="bg-slate-100 border-b border-slate-200 py-3 px-4 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-around gap-4 text-center">
        <div className="flex items-center space-x-2">
          <span className="text-blue-700 font-extrabold text-xs sm:text-sm">✔ 100% AYURVEDIC</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-700 font-extrabold text-xs sm:text-sm">✔ NO SIDE EFFECTS</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-700 font-extrabold text-xs sm:text-sm">✔ CASH ON DELIVERY</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-700 font-extrabold text-xs sm:text-sm">✔ SECRET PACKAGING</span>
        </div>
      </div>
    </div>
  );
}
