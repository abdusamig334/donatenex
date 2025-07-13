// main.js – DonateNex Interactions & GSAP Animations

document.addEventListener("DOMContentLoaded", () => {
  // ===== Sticky Navbar on Scroll =====
  const navbar = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shadow-lg", "backdrop-blur");
    } else {
      navbar.classList.remove("shadow-lg", "backdrop-blur");
    }
  });

  // ===== GSAP Scroll Animations =====
  if (typeof gsap !== 'undefined') {
    gsap.utils.toArray(".fade-in, .slide-up, .zoom-in, .rotate-in").forEach((el) => {
      gsap.fromTo(el, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }

  // ===== CTA Button Ripple Effect =====
  const buttons = document.querySelectorAll("a, button");
  buttons.forEach(btn => {
    btn.addEventListener("click", e => {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
      btn.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
});

// Optional: Ripple CSS (can be moved to main.css)
const style = document.createElement('style');
style.innerHTML = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: rippleEffect 0.6s linear;
    background-color: rgba(0, 255, 224, 0.4);
    pointer-events: none;
    width: 100px;
    height: 100px;
    z-index: 1;
  }
  @keyframes rippleEffect {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  a, button {
    position: relative;
    overflow: hidden;
  }
`;
document.head.appendChild(style);
