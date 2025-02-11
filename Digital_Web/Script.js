document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img[data-src]");
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  });


  // ============================= whatshp ======================== //
  function sendToWhatsApp() {
    let phoneNumber = "9120318426";  // Apna WhatsApp number yahan dalein
    let message = "Hello, I am interested! Need a service"; // Default message
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}


function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  const icon = document.querySelector('.menu-toggle i');

  nav.classList.toggle('nav-active');

  if (nav.classList.contains('nav-active')) {
      icon.classList.replace('fa-bars', 'fa-times');
  } else {
      icon.classList.replace('fa-times', 'fa-bars');
  }
}