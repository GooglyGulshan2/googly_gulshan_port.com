// Wait for full DOM load
document.addEventListener("DOMContentLoaded", () => {
  // Typing Effect for Name
  const nameElement = document.querySelector(".highlight");
  const originalText = nameElement.textContent;
  nameElement.textContent = "";

  let index = 0;
  function typeEffect() {
    if (index < originalText.length) {
      nameElement.textContent += originalText.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();

  // Scroll Reveal for Sections
  const revealElements = document.querySelectorAll(".section-box, .text-content");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("reveal-visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on load
});
