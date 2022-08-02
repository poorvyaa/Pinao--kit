const WHITE_KEYS = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const BLACK_KEYS = ["q", "w", "e", "r", "t", "y", "u", "i"];

const keys = document.querySelectorAll(".key");
const white = document.querySelectorAll(".key.white-key");
const black = document.querySelectorAll(".key.black-key");

keys.forEach((key) => {
  key.addEventListener("click", function () {
    playnote(key);
  });
});

function playnote(key) {
  const Sound = document.getElementById(key.dataset.note);
  Sound.currentTime = 0;
  Sound.play();
  key.classList.add("active");
  setTimeout(() => {
    key.classList.remove("active");
  }, 100);
}
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (e.repeat) return;

  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playnote(white[whiteKeyIndex]);
  }
  if (blackKeyIndex > -1) {
    playnote(black[blackKeyIndex]);
  }
});
