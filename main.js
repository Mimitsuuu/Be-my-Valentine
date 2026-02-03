window.addEventListener("load", () => {
  const audio = document.getElementById("bg-music");
  const hint = document.getElementById("audio-hint");

  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    audio.volume = 0.5;
    audio.play().catch(() => {
      // Autoplay blocked → show hint
      hint.classList.remove("hidden");
    });
  }, 1000);

  const startMusic = () => {
    audio.volume = 0.5;
    audio.play();

    hint.classList.add("hidden");

    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
    document.removeEventListener("keydown", startMusic);
  };

  hint.addEventListener("click", startMusic);
  document.addEventListener("click", startMusic);
  document.addEventListener("touchstart", startMusic);
  document.addEventListener("keydown", startMusic);
});
