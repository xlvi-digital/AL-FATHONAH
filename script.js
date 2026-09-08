const eventDate = new Date("2026-09-19T19:30:00+07:00");
document.body.classList.add("js-ready");
const music = document.querySelector("#background-music");
const musicToggle = document.querySelector(".music-toggle");
const musicLabel = document.querySelector(".music-label");
const countdownNodes = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

function updateCountdown() {
  const remaining = Math.max(0, eventDate.getTime() - Date.now());
  const seconds = Math.floor(remaining / 1000);
  const values = {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
  Object.entries(values).forEach(([key, value]) => {
    countdownNodes[key].textContent = String(value).padStart(2, "0");
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

const revealTargets = document.querySelectorAll(
  "main > section:not(.hero), .footer",
);
if ("IntersectionObserver" in window) {
  revealTargets.forEach((target) => target.classList.add("reveal-target"));
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  revealTargets.forEach((target) => revealObserver.observe(target));
}

function setMusicState(isPlaying) {
  musicToggle.classList.toggle("is-playing", isPlaying);
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.setAttribute(
    "aria-label",
    isPlaying ? "Hentikan musik" : "Putar musik",
  );
  musicLabel.textContent = isPlaying ? "Hentikan musik" : "Putar musik";
}

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    await music.play();
    setMusicState(true);
  } else {
    music.pause();
    setMusicState(false);
  }
});

music.addEventListener("play", () => setMusicState(true));
music.addEventListener("pause", () => setMusicState(false));
music
  .play()
  .then(() => setMusicState(true))
  .catch(() => setMusicState(false));

const toast = document.querySelector(".toast");
document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(button.dataset.copy);
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 1800);
  });
});
