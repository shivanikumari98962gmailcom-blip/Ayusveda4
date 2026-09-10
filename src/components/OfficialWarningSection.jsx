import React from 'react';

export default function OfficialWarningSection({ onOrderClick }) {
  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Paragraph 1: Warning Notice */}
        <p className="text-slate-700 text-sm sm:text-base lg:text-lg font-hindi max-w-5xl mx-auto leading-relaxed text-center font-normal">
          अब Horse Fire के कई नकली कॉपी प्रोडक्ट बनने लगे हैं इसलिए इसे केवल सप्लायर की ऑफिशियल साइट से ही ऑर्डर करें | दो बार बेइज्जती सुनने से एक बार ट्राय करके देखना अच्छा होता है। एक नई ज़िंदगी की ओर पहला कदम बढ़ाएं और अपने करीबियों को संतुष्ट कर दें।
        </p>

        {/* Paragraph 2: Guarantee Notice */}
        <p className="text-slate-900 text-sm sm:text-base lg:text-lg font-hindi max-w-5xl mx-auto leading-relaxed text-center font-bold">
          हम अपने पाठकों का बिचौलियों से पीछा छुड़वाते हैं और हम यह भी गारंटी देते हैं: कि अगर उत्पाद प्रभावी नहीं है तो खरीद की कीमत की 100% वापसी हो जाएगी। यह छूट सीमित समय तक उपलब्ध है।
        </p>

        {/* Single Centered Product Card matching reference image 1 */}
        <div className="max-w-md mx-auto pt-4 flex justify-center">
          <div 
            onClick={onOrderClick}
            className="flex flex-col items-center cursor-pointer group w-full"
          >
            <div className="w-full border-2 border-blue-600 rounded-xl overflow-hidden bg-slate-50 p-3 shadow-xl group-hover:scale-[1.02] transition-transform duration-300 flex justify-center">
              <img 
                src="/home_images/single-bottle.png" 
                alt="Horse Fire Tablets Original Bottle" 
                className="h-72 sm:h-96 w-auto object-contain rounded-lg drop-shadow-md"
                onError={(e) => {
                  e.target.src = "/home_images/bottlesave.webp";
                }}
              />
            </div>
            <h3 className="text-blue-700 text-2xl sm:text-3xl font-black font-sans uppercase tracking-wider mt-4 drop-shadow-sm">
              HORSE FIRE TABLETS
            </h3>
            
            {/* Price Badge ₹899 */}
            <div className="mt-1.5 flex items-center justify-center space-x-3">
              <span className="text-slate-400 line-through text-lg font-sans">₹2499</span>
              <span className="text-red-600 font-black text-2xl sm:text-3xl font-sans drop-shadow-sm">₹899</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
