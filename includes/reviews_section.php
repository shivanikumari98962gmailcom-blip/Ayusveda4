<!-- Reviews Section -->
<section class="py-14 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
  
  <!-- Background Glow -->
  <div 
    class="absolute inset-0 pointer-events-none"
    style="background: radial-gradient(ellipse at center, rgba(239, 246, 255, 0.4) 0%, #f8fafc 70%, #f8fafc 100%);"
  ></div>

  <div class="max-w-[1500px] mx-auto px-2 sm:px-4 relative z-10 text-center">
    
    <!-- Title -->
    <h2 class="text-4xl sm:text-6xl font-black text-blue-700 tracking-widest uppercase font-sans mb-10 drop-shadow-sm">
      Reviews
    </h2>

    <!-- Horizontal Scroller Wrapper -->
    <div class="relative max-w-6xl mx-auto">
      
      <!-- Left Arrow Button -->
      <button
        onclick="scrollReviewsLeft()"
        class="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center shadow-lg transition-all cursor-pointer border border-slate-300"
        aria-label="Scroll Left"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <!-- Continuous Horizontal Scroll Container -->
      <div 
        id="reviewsContainer"
        class="flex flex-nowrap overflow-x-auto scrollbar-none scroll-smooth space-x-4 sm:space-x-6 py-4 px-8 snap-x snap-mandatory"
        style="scrollbar-width: none; -ms-overflow-style: none;"
      >
        <?php
        $reviews = [
          [
            "avatar" => "assets/images/11.jpg",
            "name" => "Anil Kush",
            "text" => "Abhi tak mai kai product use kar chuka hu...ye sabse abaa hai. mere vichar se khaskar mere liye ye ayurved ka best formulation hai. Iska kuchh hi din use krne ke bad meri stamina aur timing increase ho gyi. Horse Fire Tablet ne meri marital life ko khushahal bna diya."
          ],
          [
            "avatar" => "assets/images/22.jpg",
            "name" => "Hemraj Prasad",
            "text" => "सच में ये एक बढ़िया सप्लीमेंट हे पुरुषों के लिए! जब से इसे ले रहा हूँ काफी एक्टिव और एनर्जेटिक महसूस होता है। गेम भी सुधर गया हे अब बिना थके ज्यादा देर तक खेल पाता हूँ।"
          ],
          [
            "avatar" => "assets/images/33.jpg",
            "name" => "Prakash Yadav",
            "text" => "Pure, classic, and extraordinary supplement for male wellness, this really works... you should buy without any doubt."
          ],
          [
            "avatar" => "assets/images/44.jpg",
            "name" => "Rakesh Sharma",
            "text" => "सुरक्षित डिलीवरी और बेहतरीन परिणाम! हॉर्स फायर टैबलेट्स ने मेरी शक्ति और स्टैमिना में गजब का सुधार किया है। 100% संतुष्ट हूँ।"
          ],
          [
            "avatar" => "assets/images/55.jpg",
            "name" => "Vikram Singh",
            "text" => "100% Ayurvedic and zero side effects. Natural herbs ka result bahut achha hai. Timing aur energy dono me bohot improvement mila hai."
          ],
          [
            "avatar" => "assets/images/66.jpg",
            "name" => "Deepak Verma",
            "text" => "Puri tarah se satisfied hu. Confidential packaging me deliver hua. Overall male health and stamina ke liye best product hai."
          ]
        ];
        foreach ($reviews as $rev):
        ?>
          <div class="flex-none w-[270px] sm:w-[310px] lg:w-[330px] border-2 border-slate-200 rounded-xl bg-white p-5 sm:p-6 text-center shadow-md flex flex-col items-center justify-start space-y-3 min-h-[340px] snap-center hover:border-blue-600 transition-colors">
            
            <!-- Circular Avatar Image -->
            <div class="w-20 h-20 rounded-full border-2 border-blue-600 overflow-hidden bg-slate-100 shadow-sm flex-shrink-0">
              <img 
                src="<?php echo $rev['avatar']; ?>" 
                alt="<?php echo $rev['name']; ?>" 
                class="w-full h-full object-cover"
                onerror="this.src='assets/images/77.jpg'"
              />
            </div>

            <!-- Reviewer Name -->
            <h3 class="text-blue-700 text-lg sm:text-xl font-extrabold font-sans mt-1">
              <?php echo $rev['name']; ?>
            </h3>

            <!-- Review Text -->
            <p class="text-slate-600 text-xs sm:text-sm font-hindi leading-relaxed text-center font-normal">
              <?php echo $rev['text']; ?>
            </p>

          </div>
        <?php endforeach; ?>
      </div>

      <!-- Right Arrow Button -->
      <button
        onclick="scrollReviewsRight()"
        class="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center shadow-lg transition-all cursor-pointer border border-slate-300"
        aria-label="Scroll Right"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

    </div>

  </div>
</section>
