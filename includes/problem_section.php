<!-- Problem Section -->
<section class="py-14 sm:py-20 bg-white text-slate-900 border-b border-slate-200 text-center relative overflow-hidden">
  
  <!-- Background Radial Glow -->
  <div 
    class="absolute inset-0 pointer-events-none"
    style="background: radial-gradient(ellipse at center, rgba(239, 246, 255, 0.6) 0%, #ffffff 70%, #ffffff 100%);"
  ></div>

  <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
    
    <!-- Title Block with Top & Bottom Horizontal Bar Lines -->
    <div class="inline-block border-t-2 border-b-2 border-blue-600 py-1.5 px-8 sm:px-12 mb-10 sm:mb-14">
      <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black text-blue-700 tracking-wider uppercase font-sans italic drop-shadow-sm">
        THE PROBLEM
      </h2>
    </div>

    <!-- 2x2 Parallelogram Photo Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
      <?php
      $problems = [
        ["img" => "assets/images/psp-1.webp", "caption" => "उम्र के साथ टेस्टोस्टेरोन में गिरावट"],
        ["img" => "assets/images/psp-2.webp", "caption" => "पुरुष ऊर्जा और स्टैमिना की कमी"],
        ["img" => "assets/images/psp-3.webp", "caption" => "काम का तनाव और मानसिक थकान"],
        ["img" => "assets/images/psp-4.webp", "caption" => "शीघ्रपतन और इरेक्शन की समस्या"]
      ];
      foreach ($problems as $item):
      ?>
        <div class="flex flex-col items-center group">
          
          <!-- Slanted Parallelogram Container -->
          <div class="w-full aspect-[4/3] transform -skew-x-[14deg] sm:-skew-x-[16deg] overflow-hidden rounded-md border-2 border-slate-300 bg-slate-100 shadow-lg group-hover:border-blue-600 transition-all duration-300">
            <img 
              src="<?php echo $item['img']; ?>" 
              alt="<?php echo $item['caption']; ?>" 
              class="w-full h-full object-cover transform skew-x-[14deg] sm:skew-x-[16deg] scale-125 filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
              onerror="this.src='assets/images/cuple.png'"
            />
          </div>

          <!-- Hindi Caption Below Card -->
          <p class="mt-3.5 text-base sm:text-lg lg:text-xl font-extrabold text-slate-800 font-hindi text-center drop-shadow-sm">
            <?php echo $item['caption']; ?>
          </p>

        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>
