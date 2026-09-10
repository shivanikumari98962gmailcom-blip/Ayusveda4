import React from 'react';

export default function BenefitsSection() {
  const benefits = [
    "सबसे पहले यह अंदरूनी रिकवरी को सपोर्ट करता है।",
    "टेस्टोस्टेरोन बूस्ट करने में सपोर्ट करता है।",
    "सप्तधातुओं को सही और संतुलित रखने में मदद करता है।",
    "दैनिक थकान और तनाव मैनेज करने में मदद करता है।",
    "स्ट्रेंथ, स्टैमिना और पुरुष ऊर्जा को बूस्ट करने में मदद करता है।",
    "सम्पूर्ण पुरुष स्वास्थ्य को बढ़ावा देने में मदद करता है।"
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-slate-50 to-slate-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Title + 6 Bullet Points */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Title matching reference image */}
            <h2 className="text-3xl sm:text-5xl font-black font-hindi tracking-tight">
              <span className="text-red-600">HorseFire Tablets</span>
              <span className="text-blue-700"> से मिलने वाले लाभ ।</span>
            </h2>

            {/* 6 Bullet Points with simple dots */}
            <div className="space-y-3.5 pt-2">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-slate-800 font-hindi text-base sm:text-xl leading-relaxed">
                  <span className="text-blue-600 text-xl sm:text-2xl font-bold leading-none mt-0.5">•</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Grayscale Couple Image with Clean Bottom Fade */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative overflow-hidden rounded-b-xl max-h-[500px]">
              <img 
                src="/home_images/cuple.png" 
                alt="Horse Fire Benefits Couple" 
                className="h-[340px] sm:h-[460px] lg:h-[500px] w-auto object-cover object-top grayscale drop-shadow-xl"
                onError={(e) => {
                  e.target.src = "/home_images/couple.png";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
