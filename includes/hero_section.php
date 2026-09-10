<!-- Hero Section -->
<section class="relative pt-4 sm:pt-6 pb-0 text-slate-900 overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-100">
  
  <!-- Subtle Light Background Glow -->
  <div 
    class="absolute inset-0 pointer-events-none z-0"
    style="background: radial-gradient(circle at 50% 35%, rgba(59, 130, 246, 0.08) 0%, rgba(241, 245, 249, 0.5) 50%, #f8fafc 100%);"
  ></div>

  <div class="max-w-[1600px] w-full mx-auto px-4 sm:px-8 relative z-10">
    
    <!-- Top Header Row: CALL US NOW Box Top Right -->
    <div class="flex justify-end mb-4 sm:mb-6">
      <a 
        href="tel:9925015492" 
        class="flex items-center space-x-0 border-2 border-blue-600 rounded-lg overflow-hidden bg-white shadow-lg hover:opacity-95 transition-opacity"
      >
        <div class="bg-red-600 text-white font-black text-xs sm:text-sm px-3.5 sm:px-4 py-2 uppercase font-sans tracking-wider flex items-center space-x-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span>CALL US NOW</span>
        </div>
        <div class="bg-white text-blue-700 font-black text-base sm:text-2xl px-3.5 sm:px-4 py-1.5 font-mono tracking-wider">
          9925015492
        </div>
      </a>
    </div>

    <!-- Main Title Block -->
    <div class="text-left mb-4 sm:mb-6">
      <h1 class="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase font-sans drop-shadow-sm">
        <span class="text-red-600">HORSEFIRE</span>
        <span class="text-blue-700 ml-2 sm:ml-4">TABLET</span>
      </h1>

      <div class="inline-block mt-2 border-t-2 border-b-2 border-amber-500 py-1 max-w-full">
        <p class="text-slate-800 font-bold italic text-sm sm:text-xl lg:text-2xl font-sans tracking-wide">
          Multi-Herb Supplement For Male Wellness
        </p>
      </div>
    </div>

    <!-- 3 Column Wide Hero Composition -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative">
      
      <!-- Left Column: 4 Points + Product Bottle & Banner Image -->
      <div class="lg:col-span-5 space-y-5 z-10 pb-4">
        
        <!-- 4 Green Checkmark Points -->
        <div class="space-y-3">
          <?php 
          $points = [
            "टेस्टोस्टेरोन बढ़ाने में सपोर्ट करे",
            "थकान कम करने में उपयोगी",
            "शक्ति और स्टैमिना में सपोर्ट",
            "पुरुष ऊर्जा बढ़ाने में मदद करे"
          ];
          foreach ($points as $point): 
          ?>
            <div class="flex items-center space-x-3 text-left">
              <div class="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 shadow-md text-white">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span class="text-sm sm:text-lg lg:text-xl font-extrabold text-slate-800 font-hindi">
                <?php echo $point; ?>
              </span>
            </div>
          <?php endforeach; ?>
        </div>

        <!-- Product Bottle & Banner Image -->
        <div 
          onclick="scrollToOrderForm()"
          class="pt-2 flex justify-start cursor-pointer hover:opacity-95 transition-opacity"
        >
          <img 
            src="assets/images/hero-bottle-banner.png" 
            alt="Horse Fire Bottle Testosterone Support Save 10%" 
            class="w-full max-w-[520px] h-auto object-contain drop-shadow-xl"
            onerror="this.src='assets/images/bottlesave.webp'"
          />
        </div>

      </div>

      <!-- Center Column: Large Couple Image -->
      <div class="lg:col-span-3 flex justify-center relative z-0 mt-4 lg:-mt-48">
        <div class="relative">
          <img 
            src="assets/images/cuple.png" 
            alt="Horse Fire Couple" 
            class="h-[360px] sm:h-[540px] lg:h-[640px] xl:h-[700px] w-auto object-contain drop-shadow-xl scale-105 sm:scale-110"
            onerror="this.src='assets/images/couple.png'"
          />
          <div class="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-slate-100 via-slate-100/70 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <!-- Right Column: Order Form Card + Trust Seals -->
      <div class="lg:col-span-4 space-y-4 z-10 pb-4 mt-6 lg:-mt-44">
        
        <!-- 3 Large Seals aligned above Order Form -->
        <div class="flex items-center justify-center space-x-3 sm:space-x-4 pb-2">
          <div class="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-blue-600 bg-white p-1 sm:p-1.5 flex flex-col items-center justify-center text-[7px] sm:text-[8px] font-bold text-slate-800 uppercase leading-none shadow-md text-center">
            <span class="text-[6px] sm:text-[7px] text-slate-500">100%</span>
            <span class="text-blue-700 font-black text-[8px] sm:text-[10px] my-0.5">SATISFACTION</span>
            <span class="text-[6px] sm:text-[7px] text-slate-500">GUARANTEED</span>
          </div>
          
          <div class="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-amber-500 bg-white p-1 sm:p-1.5 flex flex-col items-center justify-center text-[7px] sm:text-[8px] font-bold text-slate-800 uppercase leading-none shadow-md text-center">
            <span class="text-[6px] sm:text-[7px] text-slate-500">The</span>
            <span class="text-amber-600 font-black text-[9px] sm:text-[11px] my-0.5">BEST</span>
            <span class="text-[6px] sm:text-[7px] text-slate-500">Choice</span>
          </div>
          
          <div class="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-blue-600 bg-white p-1 sm:p-1.5 flex flex-col items-center justify-center text-[7px] sm:text-[8px] font-bold text-slate-800 uppercase leading-none shadow-md text-center">
            <span class="text-[6px] sm:text-[7px] text-slate-500">QUALITY</span>
            <span class="text-blue-700 font-black text-[9px] sm:text-[11px] my-0.5">TOP</span>
            <span class="text-[6px] sm:text-[7px] text-slate-500">GUARANTEED</span>
          </div>
        </div>

        <!-- Order Form Include -->
        <?php include 'includes/order_form.php'; ?>

      </div>

    </div>

  </div>

  <!-- Bottom Full-Width Slanted Badges & Security Bar -->
  <div class="mt-6 border-t border-slate-200 bg-white pt-4 pb-4 shadow-inner">
    <div class="max-w-[1600px] w-full mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
      
      <div class="relative border-2 border-blue-600 bg-blue-50/50 p-2.5 sm:p-3 transform -skew-x-12 text-center shadow-sm rounded">
        <span class="text-[10px] sm:text-base font-black text-blue-700 uppercase tracking-wider block font-sans">
          100% SATISFACTION
        </span>
        <span class="text-[8px] sm:text-xs text-slate-700 font-sans block mt-0.5 font-medium">
          YOU'RE GOING TO LOVE THIS
        </span>
      </div>

      <div class="relative border-2 border-amber-500 bg-amber-50/50 p-2.5 sm:p-3 transform -skew-x-12 text-center shadow-sm rounded">
        <span class="text-[10px] sm:text-base font-black text-amber-700 uppercase tracking-wider block font-sans">
          CONVENIENT TABLET
        </span>
        <span class="text-[8px] sm:text-xs text-slate-700 font-sans block mt-0.5 font-medium">
          SIMPLE DIRECTION TO FOLLOW
        </span>
      </div>

      <div class="relative border-2 border-emerald-600 bg-emerald-50/50 p-2.5 sm:p-3 transform -skew-x-12 text-center shadow-sm rounded">
        <span class="text-[10px] sm:text-base font-black text-emerald-700 uppercase tracking-wider block font-sans">
          PURE AYURVEDIC
        </span>
        <span class="text-[8px] sm:text-xs text-slate-700 font-sans block mt-0.5 font-medium">
          MADE WITH NATURAL HERBS
        </span>
      </div>

      <div class="bg-slate-100 p-2.5 sm:p-3 rounded-xl flex items-center justify-center space-x-2 shadow-sm border border-slate-300">
        <img 
          src="assets/images/secure1.png" 
          alt="McAfee SECURE & RapidSSL" 
          class="h-7 sm:h-10 w-auto object-contain"
          onerror="this.style.display='none'"
        />
      </div>

    </div>
  </div>

</section>
