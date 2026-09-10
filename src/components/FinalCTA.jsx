import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function FinalCTA({ onOrderClick }) {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 border-b border-slate-200 text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        
        <h2 className="text-2xl sm:text-4xl font-black text-blue-700 font-hindi leading-snug">
          "एक नई ज़िंदगी की ओर पहला कदम बढ़ाएं और अपने करीबियों को संतुष्ट कर दें।"
        </h2>

        <p className="text-slate-600 text-sm sm:text-base font-hindi">
          स्टॉक सीमित है! ऑफर समाप्त होने से पहले अपना ऑर्डर बुक करें।
        </p>

        <div className="pt-2">
          <button
            onClick={onOrderClick}
            className="bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-500 hover:to-red-600 text-white font-black text-xl sm:text-2xl py-4 px-8 rounded-full border-2 border-red-500 shadow-xl transform hover:scale-105 transition-all inline-flex items-center space-x-2 font-hindi cursor-pointer"
          >
            <span>RUSH MY ORDER NOW</span>
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
