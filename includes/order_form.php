<!-- Order Form Card Container -->
<div id="order-form-container" class="w-full max-w-[440px] mx-auto">
  <div class="w-full bg-white border-2 border-blue-600 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden text-slate-900">
    
    <!-- Header Badge -->
    <div class="text-center pb-4 border-b border-slate-200 mb-5">
      <div class="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full text-blue-700 font-black text-xs uppercase tracking-widest font-sans mb-2 shadow-sm">
        <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>OFFICIAL ORDER FORM</span>
      </div>
      <h3 class="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight uppercase">
        कैश ऑन डिलीवरी (COD) उपलब्ध
      </h3>
      <p class="text-xs text-slate-600 font-hindi mt-1">
        फॉर्म भरें और ऑर्डर कम्फर्म करने के लिए सबमिट करें
      </p>

      <!-- Online Payment 15% Discount Notice Badge -->
      <div class="mt-3 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 border-2 border-amber-500 p-2.5 rounded-2xl text-center shadow-md">
        <p class="text-xs sm:text-sm font-black text-slate-950 font-hindi flex items-center justify-center space-x-1">
          <span>💳</span>
          <span>ऑनलाइन पेमेंट पर पाएं <strong class="text-red-700 font-extrabold text-sm sm:text-base underline">FLAT 15% डिस्काउंट!</strong></span>
        </p>
      </div>
    </div>

    <!-- Form Element -->
    <form id="leadOrderForm" onsubmit="handleFormSubmit(event)" novalidate class="space-y-4">
      
      <!-- Select Product (Fixed Read-only Input) -->
      <div class="space-y-1 text-left">
        <label class="block text-xs font-bold text-slate-700 uppercase font-sans">
          चुना गया प्रोडक्ट (Selected Product)
        </label>
        <input 
          type="text" 
          name="product" 
          value="Horse Fire Tablets - ₹899 (60 Tablets)" 
          readonly 
          class="w-full bg-slate-100 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-blue-700 cursor-not-allowed outline-none"
        />
      </div>

      <!-- Full Name Input -->
      <div class="space-y-1 text-left">
        <label class="block text-xs font-bold text-slate-700 uppercase font-sans">
          पूरा नाम (Full Name) <span class="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          id="fieldName"
          name="name" 
          placeholder="अपना पूरा नाम दर्ज करें..." 
          class="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all font-hindi"
        />
        <p id="errorName" class="text-xs text-red-600 font-hindi hidden"></p>
      </div>

      <!-- Mobile Number Input -->
      <div class="space-y-1 text-left">
        <label class="block text-xs font-bold text-slate-700 uppercase font-sans">
          मोबाइल नंबर (10-Digit Mobile Number) <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 text-sm font-bold font-sans">
            +91
          </div>
          <input 
            type="tel" 
            id="fieldPhone"
            name="phone" 
            maxlength="10"
            placeholder="10 अंकों का मोबाइल नंबर..." 
            class="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl pl-12 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all font-mono font-bold"
          />
        </div>
        <p id="errorPhone" class="text-xs text-red-600 font-hindi hidden"></p>
      </div>

      <!-- Delivery Address Input -->
      <div class="space-y-1 text-left">
        <label class="block text-xs font-bold text-slate-700 uppercase font-sans">
          पूरा पता (Complete Delivery Address) <span class="text-red-500">*</span>
        </label>
        <textarea 
          id="fieldAddress"
          name="address" 
          rows="3"
          placeholder="मकान नंबर, गली/मोहल्ला, लैंडमार्क, शहर और पिनकोड..." 
          class="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all font-hindi resize-none"
        ></textarea>
        <p id="errorAddress" class="text-xs text-red-600 font-hindi hidden"></p>
      </div>

      <!-- Submit Order Button -->
      <button 
        type="submit"
        id="btnSubmitOrder"
        class="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-500 hover:to-red-600 text-white font-black text-lg sm:text-xl py-4 px-6 rounded-2xl shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 font-hindi cursor-pointer mt-2"
      >
        <span id="btnSubmitText">⚡ अभी ऑर्डर करें</span>
        <svg id="btnSubmitSpinner" class="w-5 h-5 animate-spin hidden" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </button>

    </form>

    <!-- Bottom Security & Privacy Badges -->
    <div class="mt-5 pt-4 border-t border-slate-200 flex items-center justify-around text-[10px] text-slate-600 font-hindi">
      <div class="flex items-center space-x-1">
        <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
        <span>100% सुरक्षित भुगतान</span>
      </div>
      <div class="flex items-center space-x-1">
        <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
        <span>गोपनीय पैकेजिंग</span>
      </div>
      <div class="flex items-center space-x-1">
        <svg class="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        <span>निःशुल्क डिलीवरी</span>
      </div>
    </div>

  </div>
</div>
