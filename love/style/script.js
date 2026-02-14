// ===== SOUND =====
const sound = document.getElementById('popsound');
const nyanCat = document.getElementById('nyan-cat');
const meow = document.getElementById('meosound');

// ===== MESSAGE LIST =====
const messages = [
  "Anh thích em 💕",
  "Anh thương em 🤗",
  "I Love You 🥰",
  "Em thật xinh đẹp 💖",
  "Hạnh phúc nhé 💫",
  "Luôn mỉm cười nhé 😊",
  "Love You 3000 💘",
  "Em là món quà 🎁",
  "Saranghaeyo ❤️",
  "Thu Hà ❤️"
];

// ===== CLICK COUNT =====
let heartClickCount = 0;
let nextBtnShown = false;

// ===== NYAN CAT SOUND =====
nyanCat.addEventListener('click', () => {
  meow.currentTime = 0;
  meow.play();
});

nyanCat.addEventListener('touchstart', () => {
  meow.currentTime = 0;
  meow.play();
});

// ===== MAIN FUNCTION (HTML gọi vào đây) =====
function showRandomMessage(event) {
  heartClickCount++;

  // ===== MESSAGE EFFECT (LUÔN CHẠY) =====
  sound.currentTime = 0;
  sound.play();

  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = messages[Math.floor(Math.random() * messages.length)];

  const angle = Math.random() * Math.PI * 2;
  msg.style.setProperty("--dx", Math.cos(angle) * 200 + "px");
  msg.style.setProperty("--dy", Math.sin(angle) * 200 + "px");

  const rect = event.currentTarget.getBoundingClientRect();
  msg.style.position = "fixed";
  msg.style.left = rect.left + rect.width / 2 + "px";
  msg.style.top = rect.top + rect.height / 2 + "px";
  msg.style.transform = "translate(-50%, -50%)";

  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);

  // ===== LẦN THỨ 10: HIỆN NÚT TIẾP =====
  if (heartClickCount === 10 && !nextBtnShown) {
    nextBtnShown = true;
    showNextButton();
  }
}

// ===== CREATE NEXT BUTTON =====
function showNextButton() {
  const btn = document.createElement("button");
  btn.innerText = "TIẾP THEO 💖";

  btn.style.position = "fixed";
  btn.style.left = "50%";
  btn.style.bottom = "120px";
  btn.style.transform = "translateX(-50%)";

  btn.style.padding = "10px 20px";
  btn.style.fontSize = "16px";
  btn.style.borderRadius = "30px";
  btn.style.border = "2px solid #bdbdbd";   // viền xám nhạt
btn.style.boxSizing = "border-box";    // để viền không làm nút to thêm

  btn.style.cursor = "pointer";
  btn.style.background = "linear-gradient(135deg,#ff5f9e,#ff8fab)";
  btn.style.color = "#fff";
  btn.style.fontWeight = "bold";
  btn.style.zIndex = "999999";

  btn.onclick = () => {
    window.location.href = "./dainganha.html"; // 🔁 đổi link
  };

  document.body.appendChild(btn);
}




