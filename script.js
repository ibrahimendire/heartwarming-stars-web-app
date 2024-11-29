// Heartwarming love sentences
const sentences = [
  "You are my shining star, lighting up my world with love. 🌟",
  "Every moment with you feels like a beautiful dream come true. 💕",
  "You are the love of my life, my heart beats only for you. 💖",
  "I would search the entire galaxy just to find you. 🌌",
  "Your love fills my soul with warmth and joy. ✨",
  "You make my world a better place, just by being in it. 💫",
  "Every day with you is a gift, full of happiness and love. 🌟",
  "You are my forever, and I’ll love you endlessly. 💞",
  "In your eyes, I see my home and my future. 🌙",
  "I am yours, and you are mine, forever. 💍",
  "No distance is too far when it comes to being with you. 🌍",
  "With you by my side, the world is a much brighter place. 🌞",
  "Every kiss from you is a promise of a lifetime of love. 💋",
  "My heart beats for you and only you. ❤️",
  "I love you more than all the stars in the sky. ✨",
  "You are my sunshine, even on the darkest days. 🌞",
  "My world is a better place because you’re in it. 🌈",
  "With you, every day feels like a new adventure. 🚀",
  "You are the reason my heart smiles. 😊",
  "Together, we can conquer anything and everything. 💪",
  "Your love is the sweetest melody that my heart has ever known. 🎶",
  "In your arms, I have found my safe place. 🤗",
  "You are the best part of my day, every day. 🌅",
  "No matter where life takes us, I will always choose you. 💫",
];

// Generate Random Stars
function generateStars() {
  const starryNight = document.querySelector(".starry-night");
  const numStars = 20; // Number of stars to be generated

  // Loop to generate stars
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Assign random star shape: heart, sparkle, or star
    const randomShape = Math.floor(Math.random() * 3);
    if (randomShape === 0) {
      star.classList.add("heart");
    } else if (randomShape === 1) {
      star.classList.add("sparkle");
    } else {
      star.classList.add("star");
    }

    // Generate random positions for the stars
    const x = Math.random() * (window.innerWidth - 30); // Subtract star size to fit in window
    const y = Math.random() * (window.innerHeight - 30); // Subtract star size to fit in window
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // Add event listener for clicking on the star
    star.addEventListener("click", showPopup);

    // Append the star to the starry night background
    starryNight.appendChild(star);
  }
}

// Show Popup with Random Love Sentence
function showPopup() {
  const popup = document.getElementById("star-popup");
  const sentence = sentences[Math.floor(Math.random() * sentences.length)];
  document.getElementById("love-sentence").textContent = sentence;
  popup.classList.remove("hidden");
}

// Close the Popup
function closePopup() {
  document.getElementById("star-popup").classList.add("hidden");
}

// Initialize the app (generate stars when the stars screen is loaded)
document.addEventListener("DOMContentLoaded", function () {
  generateStars();
  console.log("Stars are generated!");
});
