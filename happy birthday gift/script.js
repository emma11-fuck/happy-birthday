const CORRECT_PIN = "1508";
let currentPin = "";

function pressKey(num) {
  if (currentPin.length < 4) {
    currentPin += num;
    updateDots();
  }

  if (currentPin.length === 4) {
    checkPin();
  }
}

function clearPass() {
  currentPin = "";
  updateDots();
}

function updateDots() {
  const dotsContainer = document.getElementById("pass-dots");
  const dots = dotsContainer.querySelectorAll(".dot");
  
  dots.forEach((dot, index) => {
    if (index < currentPin.length) {
      dot.style.color = "#ff1493";
    } else {
      dot.style.color = "#ccc";
    }
  });
}

function checkPin() {
  const title = document.getElementById("pass-title");
  const box = document.querySelector("#password-screen .pixel-box");
  
  if (currentPin === CORRECT_PIN) {
    title.innerText = "You got it!";
    title.style.color = "#2ed573";
    setTimeout(() => {
      switchScreen("password-screen", "start-screen");
    }, 800);
  } else {
    title.innerText = "Wrong Code!";
    title.style.color = "#ff4757";
    box.classList.add("shake-anim");

    setTimeout(() => {
      box.classList.remove("shake-anim");
      clearPass();
      title.innerText = "Guess the password";
      title.style.color = "inherit";
    }, 800);
  }
}

function switchScreen(fromId, toId) {
  const fromScreen = document.getElementById(fromId);
  const toScreen = document.getElementById(toId);

  fromScreen.classList.remove("active");
  
  setTimeout(() => {
    toScreen.classList.add("active");
  }, 200);
}

function goToGifts() {
  switchScreen("start-screen", "gift-screen");
}

/* Modal Controls */
function openGift(type) {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("hidden");

  document.querySelectorAll(".modal-content").forEach(el => el.classList.add("hidden"));

  const selectedModal = document.getElementById(`modal-${type}`);
  selectedModal.classList.remove("hidden");
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("hidden");
}