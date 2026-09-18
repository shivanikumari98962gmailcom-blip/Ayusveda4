// Main JavaScript File for PHP Application

// Smooth Scroll to Order Form
function scrollToOrderForm() {
  const container = document.getElementById('order-form-container');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const phoneInput = document.getElementById('fieldPhone');
      if (phoneInput) phoneInput.focus();
    }, 600);
  }
}

// Discount Popup Modal & Countdown Timer
let discountTimeLeft = 599; // 9 min 59 sec
let discountInterval = null;

document.addEventListener('DOMContentLoaded', () => {
  const hasSeenModal = sessionStorage.getItem('hasSeenDiscountModal');
  if (!hasSeenModal) {
    setTimeout(() => {
      const modal = document.getElementById('discountModal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        startDiscountTimer();
      }
    }, 2500);
  }
});

function startDiscountTimer() {
  discountInterval = setInterval(() => {
    if (discountTimeLeft > 0) {
      discountTimeLeft--;
      const minutes = Math.floor(discountTimeLeft / 60);
      const seconds = discountTimeLeft % 60;
      const formatted = `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      const timerEl = document.getElementById('discountTimer');
      if (timerEl) timerEl.textContent = formatted;
    } else {
      clearInterval(discountInterval);
    }
  }, 1000);
}

function closeDiscountModal() {
  const modal = document.getElementById('discountModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    sessionStorage.setItem('hasSeenDiscountModal', 'true');
    if (discountInterval) clearInterval(discountInterval);
  }
}

function claimDiscountAndScroll() {
  closeDiscountModal();
  scrollToOrderForm();
}

// Reviews Slider Scroll
function scrollReviewsLeft() {
  const container = document.getElementById('reviewsContainer');
  if (container) {
    container.scrollBy({ left: -320, behavior: 'smooth' });
  }
}

function scrollReviewsRight() {
  const container = document.getElementById('reviewsContainer');
  if (container) {
    container.scrollBy({ left: 320, behavior: 'smooth' });
  }
}

// Form Validation & Direct Order Submission (No OTP)
function handleFormSubmit(e) {
  e.preventDefault();
  
  const nameEl = document.getElementById('fieldName');
  const phoneEl = document.getElementById('fieldPhone');
  const addressEl = document.getElementById('fieldAddress');

  const nameErr = document.getElementById('errorName');
  const phoneErr = document.getElementById('errorPhone');
  const addressErr = document.getElementById('errorAddress');

  // Reset errors
  if (nameErr) nameErr.classList.add('hidden');
  if (phoneErr) phoneErr.classList.add('hidden');
  if (addressErr) addressErr.classList.add('hidden');

  let isValid = true;

  const nameVal = nameEl ? nameEl.value.trim() : '';
  const phoneVal = phoneEl ? phoneEl.value.replace(/\D/g, '') : '';
  const addressVal = addressEl ? addressEl.value.trim() : '';

  if (!nameVal) {
    if (nameErr) {
      nameErr.textContent = 'कृपया पूरा नाम दर्ज करें';
      nameErr.classList.remove('hidden');
    }
    isValid = false;
  }

  if (!phoneVal) {
    if (phoneErr) {
      phoneErr.textContent = 'कृपया 10-अंकों का मोबाइल नंबर दर्ज करें';
      phoneErr.classList.remove('hidden');
    }
    isValid = false;
  } else if (phoneVal.length !== 10) {
    if (phoneErr) {
      phoneErr.textContent = '10-अंकों का वैध मोबाइल नंबर दर्ज करें';
      phoneErr.classList.remove('hidden');
    }
    isValid = false;
  }

  if (!addressVal) {
    if (addressErr) {
      addressErr.textContent = 'कृपया पूरा पता दर्ज करें';
      addressErr.classList.remove('hidden');
    }
    isValid = false;
  }

  if (!isValid) return;

  // Show Submitting Loader
  const submitBtnText = document.getElementById('btnSubmitText');
  const submitBtnSpinner = document.getElementById('btnSubmitSpinner');
  const submitBtn = document.getElementById('btnSubmitOrder');

  if (submitBtnText) submitBtnText.textContent = 'ऑर्डर सबमिट हो रहा है...';
  if (submitBtnSpinner) submitBtnSpinner.classList.remove('hidden');
  if (submitBtn) submitBtn.disabled = true;

  const orderPayload = {
    name: nameVal,
    phone: phoneVal,
    address: addressVal,
    product: 'Horse Fire Tablets - ₹899 (60 Tablets)'
  };

  // Directly Submit Order via Fetch API to api/process_order.php (No OTP step)
  fetch('api/process_order.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderPayload)
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'success') {
      // Redirect to thank you page
      window.location.href = `thankyou.php?order_id=${data.order_id}&name=${encodeURIComponent(data.name)}&phone=${encodeURIComponent(data.phone)}&address=${encodeURIComponent(data.address)}`;
    } else {
      alert('ऑर्डर दर्ज करने में समस्या आई। कृपया पुनः प्रयास करें।');
      if (submitBtnText) submitBtnText.textContent = '⚡ अभी ऑर्डर करें';
      if (submitBtnSpinner) submitBtnSpinner.classList.add('hidden');
      if (submitBtn) submitBtn.disabled = false;
    }
  })
  .catch(err => {
    console.error(err);
    // Fallback direct redirection
    const orderId = 'HF-' + Math.floor(100000 + Math.random() * 900000);
    window.location.href = `thankyou.php?order_id=${orderId}&name=${encodeURIComponent(orderPayload.name)}&phone=${encodeURIComponent(orderPayload.phone)}&address=${encodeURIComponent(orderPayload.address)}`;
  });
}
