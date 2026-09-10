import React, { useRef, useEffect } from 'react';
import { Award, Video, Play } from 'lucide-react';

export default function RecommendationSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest font-sans">
              Celebrity Endorsement - Kajal Raghwani
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-blue-700 tracking-tight uppercase font-sans drop-shadow-sm">
            Recommendation By Kajal Raghwani
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-hindi">
            जानिए प्रसिद्ध अभिनेताओं और स्वास्थ्य विशेषज्ञों की क्या राय है
          </p>
        </div>

        {/* 2 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
          
          {/* Card 1: Kajal Raghwani Local Video */}
          <div className="flex flex-col space-y-3">
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-600 shadow-xl bg-slate-900 flex items-center justify-center aspect-video sm:aspect-auto sm:min-h-[380px]">
              <video 
                ref={videoRef}
                src="/home_images/kajal-raghwani-video.mp4" 
                controls 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                className="w-full max-h-[420px] object-contain border-0 rounded-2xl"
              >
                आपका ब्राउज़र वीडियो टैग को सपोर्ट नहीं करता है।
              </video>
            </div>
            <div className="text-center pt-1">
              <h4 className="text-base sm:text-lg font-extrabold text-slate-800 font-hindi inline-flex items-center justify-center space-x-1.5">
                <Video className="w-4 h-4 text-blue-600" />
                <span>काजल राघवानी - हॉर्स फायर टैबलेट्स (Special Recommendation)</span>
              </h4>
            </div>
          </div>

          {/* Card 2: YouTube Video Shorts (ID: qc2HOgPCMh8 - AutoPlay Muted) */}
          <div className="flex flex-col space-y-3">
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-600 shadow-xl bg-slate-900 aspect-video sm:aspect-auto sm:min-h-[380px] flex items-center justify-center">
              <iframe 
                src="https://www.youtube.com/embed/qc2HOgPCMh8?autoplay=1&mute=1&muted=1&loop=1&playlist=qc2HOgPCMh8&controls=1&rel=0&enablejsapi=1" 
                title="Horse Fire Tablet Special Recommendation Short" 
                className="w-full h-full sm:min-h-[380px] object-cover border-0 rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center pt-1">
              <h4 className="text-base sm:text-lg font-extrabold text-slate-800 font-hindi inline-flex items-center justify-center space-x-1.5">
                <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
                <span>हॉर्स फायर टैबलेट्स - स्पेशल सुझाव (Celebrity Review Short)</span>
              </h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
