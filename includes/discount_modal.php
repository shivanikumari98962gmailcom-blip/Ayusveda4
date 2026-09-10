<!-- Discount Popup Modal Overlay -->
<div id="discountModal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden items-center justify-center p-4 animate-in fade-in duration-300">
  
  <!-- Modal Container -->
  <div class="bg-white border-2 border-blue-600 p-6 sm:p-8 rounded-3xl max-w-lg w-full relative shadow-2xl text-center overflow-hidden">
    
    <!-- Top Blue Accent Ribbon -->
    <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>

    <!-- Close Button -->
    <button 
      onclick="closeDiscountModal()"
      class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-full bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
      aria-label="Close modal"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Gift Icon Badge -->
    <div class="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-600 flex items-center justify-center mx-auto text-blue-600 shadow-md mb-4">
      <svg class="w-8 h-8 animate-bounce text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13C10.832 21 2 20 2 12V8h20v4c0 8-8.832 9-10 9z"/>
      </svg>
    </div>

    <!-- Badge Header -->
    <div class="inline-flex items-center space-x-1.5 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full mb-3">
      <svg class="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
      <span class="text-xs font-black text-red-700 uppercase tracking-wider font-sans">
        विशेष ऑफर (LIMITED TIME OFFER)
      </span>
    </div>

    <!-- Main Offer Title -->
    <h3 class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight font-sans uppercase">
      ऑनलाइन ऑर्डर पर पाएं <br />
      <span class="text-blue-700 drop-shadow-sm">
        10-15% की विशेष छूट!
      </span>
    </h3>

    <!-- Hindi Subtitle -->
    <p class="mt-3 text-sm sm:text-base text-slate-600 font-hindi leading-relaxed">
      केवल आज ही वेबसाइट से ऑनलाइन ऑर्डर करने पर पायें <strong class="text-red-600 font-bold">FLAT 15% डिस्काउंट</strong> और मुफ्त डिलीवरी (Free Delivery)!
    </p>

    <!-- Countdown Box -->
    <div class="my-5 bg-slate-50 border border-blue-200 p-3 rounded-2xl flex items-center justify-between px-4 max-w-xs mx-auto">
      <div class="flex items-center space-x-2 text-blue-700 font-sans text-xs font-bold uppercase">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
        </svg>
        <span>ऑफर समाप्त होने में:</span>
      </div>
      <div id="discountTimer" class="font-mono text-lg font-black text-blue-700 bg-white px-3 py-1 rounded-lg border border-blue-200 shadow-sm">
        09:59
      </div>
    </div>

    <!-- Claim Discount Button -->
    <button
      onclick="claimDiscountAndScroll()"
      class="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-500 hover:to-red-600 text-white font-black text-lg sm:text-xl py-3.5 px-6 rounded-2xl shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 font-hindi cursor-pointer"
    >
      <span>⚡ अभी 15% छूट का लाभ उठाएं</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
      </svg>
    </button>

    <!-- Subtext -->
    <p class="text-[11px] text-slate-500 font-hindi mt-3">
      * 100% गोपनीय डिलीवरी | कैश ऑन डिलीवरी (COD) उपलब्ध है
    </p>

  </div>
</div>
