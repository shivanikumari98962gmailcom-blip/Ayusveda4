import React, { useState, forwardRef } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ShieldCheck, Lock, X } from 'lucide-react';

const OrderForm = forwardRef(({ id }, ref) => {
  const [formData, setFormData] = useState({ 
    name: '',
    phone: '', 
    address: '',
    product: 'Horse Fire Tablets - ₹899 (60 Tablets)'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState('');
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [placedOrderDetails, setPlacedOrderDetails] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'कृपया पूरा नाम दर्ज करें';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'कृपया फोन नंबर दर्ज करें';
    } else if (cleanPhone.length !== 10) {
      newErrors.phone = '10-अंकों का वैध मोबाइल नंबर दर्ज करें';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'कृपया पूरा पता दर्ज करें';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setPlacedOrderDetails({
        orderId: `HF-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.name,
        product: formData.product,
        phone: formData.phone,
        address: formData.address
      });
      setFormData({ 
        name: '',
        phone: '', 
        address: '',
        product: 'Horse Fire Tablets - ₹899 (60 Tablets)'
      });
      setErrors({});
    }, 600);
  };

  return (
    <div id={id} ref={ref} className="w-full max-w-[440px] mx-auto">
      {/* Outer Card Container with Royal Blue Border */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-blue-600 shadow-2xl relative text-left">
        
        {isSubmitted ? (
          <div className="bg-emerald-50 border-2 border-emerald-500 p-6 rounded-xl text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
            <h4 className="text-2xl font-black text-emerald-700 font-hindi">
              🎉 ऑर्डर सफलता के साथ दर्ज हुआ!
            </h4>
            
            {placedOrderDetails && (
              <div className="bg-white border border-slate-200 p-3 rounded-lg text-left text-xs font-sans space-y-1.5 text-slate-700 shadow-sm">
                <p className="text-blue-700 font-bold">ऑर्डर ID: {placedOrderDetails.orderId}</p>
                <p><span className="text-slate-500">नाम:</span> {placedOrderDetails.name}</p>
                <p><span className="text-slate-500">उत्पाद:</span> {placedOrderDetails.product}</p>
                <p><span className="text-slate-500">फ़ोन:</span> +91 {placedOrderDetails.phone}</p>
                <p><span className="text-slate-500">पता:</span> {placedOrderDetails.address}</p>
              </div>
            )}

            <p className="text-xs text-slate-600 font-hindi">
              आपकी 100% गोपनीय डिलीवरी 2-4 कार्य दिवसों में पहुंचा दी जाएगी। हमारी टीम आपसे पुष्टि हेतु संपर्क करेगी।
            </p>
            
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm uppercase tracking-wider font-sans shadow-lg cursor-pointer"
            >
              एक और ऑर्डर करें
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Online Payment 15% Discount Notice Badge */}
            <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 border-2 border-amber-500 p-2.5 rounded-2xl text-center shadow-md">
              <p className="text-xs sm:text-sm font-black text-slate-950 font-hindi flex items-center justify-center space-x-1">
                <span>💳</span>
                <span>ऑनलाइन पेमेंट पर पाएं <strong className="text-red-700 font-extrabold text-sm sm:text-base underline">FLAT 15% डिस्काउंट!</strong></span>
              </p>
            </div>
            
            {/* Field 1: Full Name Input */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-slate-800 mb-1 font-sans">
                पूरा नाम :
              </label>
              <input
                type="text"
                placeholder=""
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full bg-slate-50 border ${
                  errors.name ? 'border-red-500' : 'border-slate-300'
                } rounded-lg p-3 text-slate-900 font-sans text-sm sm:text-base focus:outline-none focus:border-blue-600 focus:bg-white transition-colors`}
              />
              {errors.name && (
                <p className="text-red-600 text-xs mt-1 font-hindi flex items-center space-x-1 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Field 2: Phone Number Input */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-slate-800 mb-1 font-sans">
                फ़ोन नंबर:
              </label>
              <input
                type="tel"
                maxLength={10}
                placeholder=""
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                className={`w-full bg-slate-50 border ${
                  errors.phone ? 'border-red-500' : 'border-slate-300'
                } rounded-lg p-3 text-slate-900 font-sans text-sm sm:text-base focus:outline-none focus:border-blue-600 focus:bg-white transition-colors`}
              />
              {errors.phone && (
                <p className="text-red-600 text-xs mt-1 font-hindi flex items-center space-x-1 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Field 3: Full Address Input */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-slate-800 mb-1 font-sans">
                पूरा पता :
              </label>
              <input
                type="text"
                placeholder=""
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className={`w-full bg-slate-50 border ${
                  errors.address ? 'border-red-500' : 'border-slate-300'
                } rounded-lg p-3 text-slate-900 font-sans text-sm sm:text-base focus:outline-none focus:border-blue-600 focus:bg-white transition-colors`}
              />
              {errors.address && (
                <p className="text-red-600 text-xs mt-1 font-hindi flex items-center space-x-1 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.address}</span>
                </p>
              )}
            </div>

            {/* Submit Button: Vibrant Red "ऑर्डर करे" */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-xl sm:text-2xl py-3.5 px-6 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 font-hindi cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span>OTP भेजा जा रहा है...</span>
                  </>
                ) : (
                  <span>ऑर्डर करे</span>
                )}
              </button>
            </div>

            {/* Factory Direct Note Subtext */}
            <p className="text-slate-500 text-[11px] sm:text-xs text-center font-hindi pt-1 leading-tight">
              * आपका डेटा सीधे कारखाने में भेजा जाता है। उसके अलावा किसी के पास पहुंच नहीं है वे।
            </p>

            {/* Badges Section below subtext */}
            <div className="pt-2 space-y-3">
              {/* 3 Circular Badges */}
              <div className="flex items-center justify-center space-x-3">
                {/* Badge 1 */}
                <div className="w-12 h-12 rounded-full border border-blue-600 bg-blue-50/60 p-1 flex flex-col items-center justify-center text-[6px] font-bold text-slate-800 uppercase leading-none text-center shadow-sm">
                  <span className="text-[5px] text-blue-700">100%</span>
                  <span className="text-blue-700 font-black text-[7px] my-0.5">MONEY BACK</span>
                  <span className="text-[5px] text-slate-600">GUARANTEE</span>
                </div>
                
                {/* Badge 2 */}
                <div className="w-12 h-12 rounded-full border border-amber-500 bg-amber-50/60 p-1 flex flex-col items-center justify-center text-[6px] font-bold text-slate-800 uppercase leading-none text-center shadow-sm">
                  <span className="text-[5px] text-amber-700">FREE</span>
                  <span className="text-amber-700 font-black text-[7px] my-0.5">SHIPPING</span>
                </div>

                {/* Badge 3 */}
                <div className="w-12 h-12 rounded-full border border-emerald-600 bg-emerald-50/60 p-1 flex flex-col items-center justify-center text-[6px] font-bold text-slate-800 uppercase leading-none text-center shadow-sm">
                  <span className="text-[5px] text-emerald-700">100%</span>
                  <span className="text-emerald-700 font-black text-[7px] my-0.5">HIGH QUALITY</span>
                </div>
              </div>

              {/* Payment Methods Row */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1 opacity-90">
                <span className="bg-slate-100 border border-slate-300 text-slate-800 font-extrabold text-[10px] px-2 py-1 rounded">VISA</span>
                <span className="bg-slate-100 border border-slate-300 text-slate-800 font-extrabold text-[10px] px-2 py-1 rounded">MasterCard</span>
                <span className="bg-slate-100 border border-slate-300 text-cyan-600 font-extrabold text-[10px] px-2 py-1 rounded">Paytm</span>
                <span className="bg-slate-100 border border-slate-300 text-purple-600 font-extrabold text-[10px] px-2 py-1 rounded">PhonePe</span>
                <span className="bg-slate-100 border border-slate-300 text-blue-600 font-extrabold text-[10px] px-2 py-1 rounded">PayPal</span>
              </div>

              {/* Green Payment Secure Note */}
              <div className="flex items-center justify-center space-x-1.5 text-emerald-700 text-xs font-bold font-sans">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Your payment is secure</span>
              </div>

            </div>

          </form>
        )}

      </div>

    </div>
  );
});

export default OrderForm;
