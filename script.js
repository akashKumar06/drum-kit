window.addEventListener("keydown", function (e) {
  const code = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${code}"`);
  const key = document.querySelector(`.key[data-key="${code}"`);
  if (!audio) return;
  // why it is required because the time we are pressing the button it is playing so it will not play it again
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

function removeTransition(e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

console.log("Hello");
