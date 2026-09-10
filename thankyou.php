<?php
include 'includes/header.php';

$orderId = htmlspecialchars($_GET['order_id'] ?? 'HF-123456');
$name = htmlspecialchars($_GET['name'] ?? 'ग्राहक');
$phone = htmlspecialchars($_GET['phone'] ?? '');
$address = htmlspecialchars($_GET['address'] ?? '');
?>

<div class="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-12">
  <div class="bg-white border-2 border-blue-600 rounded-3xl p-6 sm:p-10 max-w-xl w-full text-center shadow-2xl space-y-6">
    
    <!-- Success Icon Badge -->
    <div class="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600 shadow-lg">
      <svg class="w-10 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
      </svg>
    </div>

    <!-- Main Thank You Heading -->
    <div>
      <h1 class="text-3xl sm:text-4xl font-black text-slate-900 font-hindi">
        बधाई हो, आपका ऑर्डर सफलतापूर्वक दर्ज हो गया है! 🎉
      </h1>
      <p class="text-sm text-slate-600 font-hindi mt-2">
        हमारे स्वास्थ्य प्रतिनिधि जल्द ही आपके मोबाइल नंबर पर कॉल करके ऑर्डर की पुष्टि करेंगे।
      </p>
    </div>

    <!-- Order Summary Card -->
    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left space-y-3 font-sans text-sm">
      <div class="flex justify-between items-center border-b border-slate-200 pb-2">
        <span class="text-slate-500 font-bold">ऑर्डर आईडी (Order ID):</span>
        <span class="font-mono font-black text-blue-700 text-base"><?php echo $orderId; ?></span>
      </div>

      <div class="flex justify-between items-center border-b border-slate-200 pb-2">
        <span class="text-slate-500 font-bold">प्रोडक्ट (Product):</span>
        <span class="font-bold text-slate-900">Horse Fire Tablets (₹899)</span>
      </div>

      <div class="flex justify-between items-center border-b border-slate-200 pb-2">
        <span class="text-slate-500 font-bold">नाम (Customer Name):</span>
        <span class="font-bold text-slate-900 font-hindi"><?php echo $name; ?></span>
      </div>

      <?php if ($phone): ?>
        <div class="flex justify-between items-center border-b border-slate-200 pb-2">
          <span class="text-slate-500 font-bold">मोबाइल (Phone):</span>
          <span class="font-mono font-bold text-slate-900">+91 <?php echo $phone; ?></span>
        </div>
      <?php endif; ?>

      <?php if ($address): ?>
        <div class="flex justify-between items-start pt-1">
          <span class="text-slate-500 font-bold flex-shrink-0 mr-3">डिलीवरी पता (Address):</span>
          <span class="font-bold text-slate-900 font-hindi text-right"><?php echo $address; ?></span>
        </div>
      <?php endif; ?>

      <div class="flex justify-between items-center pt-2 text-emerald-700 font-bold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
        <span>भुगतान विधि (Payment Method):</span>
        <span class="font-black">कैश ऑन डिलीवरी (COD)</span>
      </div>
    </div>

    <!-- Back to Home Button -->
    <a 
      href="index.php" 
      class="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-base py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 font-hindi"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
      </svg>
      <span>मुख्य पृष्ठ पर वापस जाएं (Back to Main Page)</span>
    </a>

  </div>
</div>

<?php include 'includes/footer.php'; ?>
