// Typing animation for the hero section

const texts = [
  "Web Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Learner"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".highlight").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      setTimeout(type, 800);
    }, 1200);
  } else {
    setTimeout(type, 120);
  }
})();