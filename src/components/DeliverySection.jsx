import React from 'react';

export default function DeliverySection({ onOrderClick }) {
  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid Row: Left Hindi Notice + Courier Logos & Right Delivery/Product Composition matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Text & Courier Logos Block */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            {/* Blue Hindi Headline */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-700 font-hindi leading-relaxed">
              पार्सल आपको पूरी तरह से गोपनीय तरीके से मिलता है, जिसे की आप घर में या ऑफिस में कही भी ऑर्डर कर मंगवा सकते है
            </h3>

            {/* Courier Logos Banner Strip (BlueDart, EcomExpress, IndiaPost) */}
            <div className="py-2">
              <img 
                src="/home_images/shipping-img.jpg" 
                alt="Delivery Partners - BLUE DART, Ecom Express, India Post" 
                className="w-full max-w-md sm:max-w-lg h-auto object-contain rounded-md shadow-md border border-slate-300"
              />
            </div>

            {/* Blue English Delivery Subtext */}
            <p className="text-sm sm:text-base font-bold text-slate-700 font-sans tracking-wide">
              Free Delivery All India, No extra charges all over india our delivery service is available
            </p>

          </div>

          {/* Right Delivery Guy & Product Box/Bottle Image matching reference image 1 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <img 
                src="/home_images/private-delivery.png" 
                alt="Private Confidential Delivery Guy with Horse Fire Box & Bottle" 
                className="h-64 sm:h-80 lg:h-96 w-auto object-contain drop-shadow-lg"
                onError={(e) => {
                  e.target.src = "/home_images/single-bottle.png";
                }}
              />
            </div>
          </div>

        </div>

        {/* Horizontal Line Divider matching reference image */}
        <div className="border-t border-slate-200 my-8 sm:my-10 max-w-5xl mx-auto"></div>

        {/* Bottom Row: Bold Hindi Headline + Yellow/Gold RUSH MY ORDER Button matching reference image */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto text-center sm:text-left">
          
          {/* Bold Dark Hindi Headline */}
          <h4 className="text-xl sm:text-3xl font-black text-slate-900 font-hindi tracking-tight">
            आपकी पार्टनर बोल उठेगी, अब बस भी करो ना !
          </h4>

          {/* Yellow RUSH MY ORDER Button */}
          <button
            onClick={onOrderClick}
            className="cursor-pointer transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <img 
              src="/home_images/rushmyorder.gif" 
              alt="RUSH MY ORDER" 
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-xl"
              onError={(e) => {
                e.target.outerHTML = '<div class="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black font-black px-8 py-3.5 rounded-full text-base sm:text-xl shadow-xl font-sans uppercase border border-yellow-200">RUSH MY ORDER</div>';
              }}
            />
          </button>

        </div>

      </div>
    </section>
  );
}
