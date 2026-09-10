import React from 'react';

export default function SolutionSection() {
  return (
    <section className="py-14 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Light Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-slate-50 to-slate-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block with Top & Bottom Horizontal Bar Lines matching Image 1 */}
        <div className="text-center mb-6">
          <div className="inline-block border-t-2 border-b-2 border-blue-600 py-1.5 px-8 sm:px-12">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-blue-700 tracking-wider uppercase font-sans italic drop-shadow-sm">
              THE SOLUTION
            </h2>
          </div>
        </div>

        {/* Dual-Color Subtitle Header matching Image 1 */}
        <div className="text-center mb-10 sm:mb-14">
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black font-hindi tracking-tight">
            <span className="text-red-600">Horse Fire Tablet </span>
            <span className="text-blue-700">17 चुनिंदा जड़ीबूटियों का बेहतरीन संयोजन</span>
          </h3>
        </div>

        {/* Content Composition: Couple Art + 4 Exact Hindi Paragraphs matching Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          
          {/* Couple Image Left */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative">
              <img 
                src="/home_images/couple.png" 
                alt="Horse Fire Solution Couple" 
                className="h-[360px] sm:h-[480px] lg:h-[540px] w-auto object-contain drop-shadow-xl scale-105 sm:scale-110"
                onError={(e) => {
                  e.target.src = "/home_images/cuple.png";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* 4 Exact Hindi Paragraphs Right matching Image 1 */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base lg:text-lg font-hindi leading-relaxed text-left font-normal">
            
            {/* Paragraph 1 */}
            <p>
              <strong className="text-slate-900 font-sans font-bold">Horse Fire Tablet 17 चुनिंदा जड़ीबूटियों</strong> से बना एक आयुर्वेदिक सप्लीमेंट है जो पुरुष स्वास्थ्य को प्रमोट करने में मदद करता है। उम्र के साथ ऊर्जा, स्टैमिना और ताकत में गिरावट आना सामान्य है। लेकिन आधुनिक जीवनशैली यानी देर रात जागना, आहार में न्यूट्रिएंट्स की कमी और तनाव इस प्रक्रिया को और तेज कर देते हैं, जिससे सप्तधातुओं को सही पोषण नहीं मिलता है।
            </p>

            {/* Paragraph 2 */}
            <p>
              सप्तधातुओं के असंतुलन की वजह से पुरुष ऊर्जा, स्टैमिना और कॉन्फिडेंस का ग्राफ नीचे गिरने लगता है। <strong className="text-slate-900 font-sans font-bold">Horse Fire Tablet</strong> विशेष रूप से उन्हीं खोई हुई शक्तियों को पुनर्जीवित करने के लिए तैयार किया गया है।
            </p>

            {/* Paragraph 3 */}
            <p>
              17 शक्तिशाली जड़ीबूटियों के गुणों से भरपूर <strong className="text-slate-900 font-sans font-bold">Horse Fire Tablet</strong> नेचुरल तरीके से सप्तधातुओं को संतुलित करने में सपोर्ट करता है। संतुलित सप्तधातुओं के साथ शरीर फिर से एनर्जेटिक और एक्टिव महसूस होने लगता है। पुरुष ऊर्जा और स्टैमिना का ग्राफ ऊपर और इसका प्रभाव कॉन्फिडेंस लेवल पर भी देखने को मिल सकता है।
            </p>

            {/* Paragraph 4 */}
            <p>
              इस प्रकार प्रेशर महसूस करने वाले और काम में जल्दी थक जाने वाले पुरुष भी पूरी ऊर्जा और कॉन्फिडेंस के साथ काम जो सफलता पूर्वक देर तक कर पाते है।
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
