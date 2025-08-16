document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Elements
  const menuBtn = document.getElementById("menuBtn");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const contactForm = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMessage");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const heroSection = document.getElementById("hero");

  // Mobile menu toggle
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });

  // Close mobile menu
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });

  // Close menu when clicking nav link on mobile only
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        mobileMenu.classList.add("translate-x-full");
      }
    });
  });

  // Contact form submit
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contactForm.reset();
      successMsg.classList.remove("hidden");
      setTimeout(() => successMsg.classList.add("hidden"), 5000);
    });
  }

  // Scroll-to-top button
  window.addEventListener("scroll", () => {
    if (window.scrollY > heroSection.offsetHeight - 50) {
      scrollTopBtn.classList.remove("hidden");
    } else {
      scrollTopBtn.classList.add("hidden");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
  });

  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
  });
});
