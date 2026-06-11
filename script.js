const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
}

const letters = "BAKE20HAPPYBIRTHDAY❤0101";
const fontSize = 18;
let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array(columns).fill(1);

resize();
window.addEventListener("resize", resize);

function drawMatrix() {
  ctx.fillStyle = "rgba(2, 0, 8, 0.13)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff4fa3";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

setInterval(drawMatrix, 45);

const slides = [...document.querySelectorAll(".slide")];
const start = document.getElementById("start");
let index = 0;
let timer = null;

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

function play() {
  start.classList.add("hide");
  index = 0;
  showSlide(index);

  timer = setInterval(() => {
    index++;
    if (index >= slides.length) {
      clearInterval(timer);
      return;
    }
    showSlide(index);
  }, 4200);
}

start.addEventListener("click", play);
