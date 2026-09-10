import React from 'react';

export default function AgeInfoSection() {
  return (
    <section className="py-10 sm:py-14 bg-slate-50 border-b border-slate-200 text-center">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main dual color title */}
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-black font-sans tracking-tight leading-none text-center">
          <span className="text-red-600">Decline in </span>
          <span className="text-blue-700">Energy and Testosterone with Age</span>
        </h2>

        {/* Hindi Subtitle */}
        <p className="mt-2 text-lg sm:text-2xl font-bold text-slate-800 font-hindi">
          उम्र के साथ ऊर्जा और टेस्टोस्टेरोन में गिरावट
        </p>

        {/* 4 Line Paragraph */}
        <div className="mt-6 max-w-4xl mx-auto space-y-2 text-sm sm:text-base lg:text-lg text-slate-600 font-hindi leading-relaxed font-normal">
          <p>
            जैसे-जैसे उम्र बढ़ती है, शरीर में प्राकृतिक टेस्टोस्टेरोन का स्तर कम होने लगता है।
          </p>
          <p>
            इसके कारण थकान महसूस होना, ऊर्जा की कमी और दैनिक जीवन में प्रदर्शन में गिरावट आती है।
          </p>
          <p>
            हॉर्स फायर टैबलेट्स प्राकृतिक जड़ी-बूटियों के अनूठे मिश्रण से आपके शरीर की प्राकृतिक क्षमता को सपोर्ट करता है।
          </p>
          <p>
            यह बिना किसी दुष्प्रभाव के आपको पुनः ऊर्जावान और तरोताज़ा महसूस कराने में सहायता करता है।
          </p>
        </div>

      </div>
    </section>
  );
}
