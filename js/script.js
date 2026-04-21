// AUDIO BACKGROUND
const audio = document.getElementById("bg-audio");
const btn = document.getElementById("audio-toggle");

let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    audio.play();
    btn.textContent = "🔇";
  } else {
    audio.pause();
    btn.textContent = "🔊";
  }
  playing = !playing;
});

// QUOTE AUDIO
const quoteBtn = document.getElementById("play-quote");
const quoteAudio = document.getElementById("quote-audio");

quoteBtn.addEventListener("click", () => {
  quoteAudio.currentTime = 0;
  quoteAudio.play();
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});