var typed = new Typed("#element", {
  strings: [
    "Web Developer.",
    "AI Trainer.",
    "Quantum Simulator Developer.",
    "Tech Enthusiast.",
  ],
  typeSpeed: 50,
  loop: true,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault(); // Prevent default anchor jump
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
