import React from 'react';

export default function ProblemSection() {
  const problems = [
    {
      img: "/home_images/psp-1.webp",
      caption: "उम्र के साथ टेस्टोस्टेरोन में गिरावट"
    },
    {
      img: "/home_images/psp-2.webp",
      caption: "पुरुष ऊर्जा और स्टैमिना की कमी"
    },
    {
      img: "/home_images/psp-3.webp",
      caption: "काम का तनाव और मानसिक थकान"
    },
    {
      img: "/home_images/psp-4.webp",
      caption: "शीघ्रपतन और इरेक्शन की समस्या"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 border-b border-slate-200 text-center relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Block with Top & Bottom Horizontal Bar Lines matching Image 1 */}
        <div className="inline-block border-t-2 border-b-2 border-blue-600 py-1.5 px-8 sm:px-12 mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-blue-700 tracking-wider uppercase font-sans italic drop-shadow-sm">
            THE PROBLEM
          </h2>
        </div>

        {/* 2x2 Parallelogram Photo Cards Grid matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
          {problems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              
              {/* Slanted Parallelogram Container */}
              <div className="w-full aspect-[4/3] transform -skew-x-[14deg] sm:-skew-x-[16deg] overflow-hidden rounded-md border-2 border-slate-300 bg-slate-100 shadow-lg group-hover:border-blue-600 transition-all duration-300">
                <img 
                  src={item.img} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transform skew-x-[14deg] sm:skew-x-[16deg] scale-125 filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.src = "/home_images/cuple.png";
                  }}
                />
              </div>

              {/* Hindi Caption Below Card */}
              <p className="mt-3.5 text-base sm:text-lg lg:text-xl font-extrabold text-slate-800 font-hindi text-center drop-shadow-sm">
                {item.caption}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
