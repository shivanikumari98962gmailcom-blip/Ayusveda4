import React from 'react';

export default function IngredientsSection() {
  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 border-b border-slate-200 text-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ingredients Graphic Poster matching reference image 1 */}
        <div className="max-w-5xl mx-auto flex justify-center">
          <img 
            src="/home_images/powerful-ingredients.png" 
            alt="POWERFULL INGREDIENT - Shilajit, Ashwagandha, Gokshura, Safed Musli, Kaunch Beej, Shatavari" 
            className="w-full h-auto max-h-[650px] object-contain rounded-2xl drop-shadow-[0_10px_30px_rgba(255,150,0,0.25)]"
          />
        </div>

      </div>
    </section>
  );
}
