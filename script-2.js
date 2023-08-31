const text = "I'm a web developer & designer.";
const typingSpeed = 100; // milliseconds per character

const typingTextElement = document.getElementById("typing-text");
const cursorElement = document.getElementById("cursor");

let charIndex = 0;

function typeText() {
  if (charIndex < text.length) {
    typingTextElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    cursorElement.style.display = "none";
  }
}

typeText();