// DOM Elements
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');
const header = document.querySelector('#header');

// Mobile Menu Toggle
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when clicking a nav link
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    }
  });
});

// Header Scroll Effect & Reveal Animation
let isHeaderScrolled = false;
const revealElements = document.querySelectorAll('.reveal');

const handleScroll = () => {
  // Header background logic
  if (window.scrollY > 50) {
    if (!isHeaderScrolled) {
      header.classList.add('scrolled');
      isHeaderScrolled = true;
    }
  } else {
    if (isHeaderScrolled) {
      header.classList.remove('scrolled');
      isHeaderScrolled = false;
    }
  }

  // Scroll Reveal logic
  const windowHeight = window.innerHeight;
  const elementVisible = 100;

  revealElements.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    }
  });
};

// Throttle scroll event for performance
let throttleTimer;
window.addEventListener('scroll', () => {
  if (throttleTimer) return;
  throttleTimer = setTimeout(() => {
    handleScroll();
    throttleTimer = null;
  }, 10);
});

// Run once on load
handleScroll();

// Typing Effect
const textArray = ["FullStack Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Enthusiast"];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!typingElement.classList.contains("typing")) typingElement.classList.add("typing");
    typingElement.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    typingElement.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!typingElement.classList.contains("typing")) typingElement.classList.add("typing");
    typingElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    typingElement.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Removed redundant reveal logic (now handled in handleScroll)
