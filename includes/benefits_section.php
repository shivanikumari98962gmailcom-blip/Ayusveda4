<!-- Benefits Section -->
<section class="py-14 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
  
  <!-- Background Glow -->
  <div 
    class="absolute inset-0 pointer-events-none"
    style="background: radial-gradient(ellipse at center, rgba(239, 246, 255, 0.4) 0%, #f8fafc 70%, #f8fafc 100%);"
  ></div>

  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
      
      <!-- Left Column: Title + 6 Bullet Points -->
      <div class="lg:col-span-7 space-y-6 text-left">
        
        <!-- Title -->
        <h2 class="text-3xl sm:text-5xl font-black font-hindi tracking-tight">
          <span class="text-red-600">HorseFire Tablets</span>
          <span class="text-blue-700"> से मिलने वाले लाभ ।</span>
        </h2>

        <!-- 6 Bullet Points -->
        <div class="space-y-3.5 pt-2">
          <?php
          $benefits = [
            "सबसे पहले यह अंदरूनी रिकवरी को सपोर्ट करता है।",
            "टेस्टोस्टेरोन बूस्ट करने में सपोर्ट करता है।",
            "सप्तधातुओं को सही और संतुलित रखने में मदद करता है।",
            "दैनिक थकान और तनाव मैनेज करने में मदद करता है।",
            "स्ट्रेंथ, स्टैमिना और पुरुष ऊर्जा को बूस्ट करने में मदद करता है।",
            "सम्पूर्ण पुरुष स्वास्थ्य को बढ़ावा देने में मदद करता है।"
          ];
          foreach ($benefits as $benefit):
          ?>
            <div class="flex items-start space-x-3 text-slate-800 font-hindi text-base sm:text-xl leading-relaxed">
              <span class="text-blue-600 text-xl sm:text-2xl font-bold leading-none mt-0.5">•</span>
              <span><?php echo $benefit; ?></span>
            </div>
          <?php endforeach; ?>
        </div>

      </div>

      <!-- Right Column: Grayscale Couple Image -->
      <div class="lg:col-span-5 flex justify-center relative">
        <div class="relative overflow-hidden rounded-b-xl max-h-[500px]">
          <img 
            src="assets/images/cuple.png" 
            alt="Horse Fire Benefits Couple" 
            class="h-[340px] sm:h-[460px] lg:h-[500px] w-auto object-cover object-top grayscale drop-shadow-xl"
            onerror="this.src='assets/images/couple.png'"
          />
          <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent pointer-events-none"></div>
        </div>
      </div>

    </div>

  </div>
</section>
