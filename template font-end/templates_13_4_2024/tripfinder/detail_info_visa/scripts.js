document.addEventListener("DOMContentLoaded", function() {
  const infoItems = document.querySelectorAll(".info-item");
  
  infoItems.forEach((item, index) => {
      item.style.opacity = 0;
      setTimeout(() => {
          item.style.transition = "opacity 0.5s ease-in-out";
          item.style.opacity = 1;
      }, index * 200); // Delays each item's fade-in for a staggered effect
  });
});
