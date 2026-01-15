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

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(15, 15, 18, 0.95)';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  } else {
    header.style.background = 'rgba(15, 15, 18, 0.85)';
    header.style.boxShadow = 'none';
  }
});

// Typing Effect
const textArray = ["FullStack Developer", "UI/UX Enthusiast", "Creative Coder",];
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

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  revealElements.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger once on load
