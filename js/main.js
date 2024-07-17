const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");
const reeEl = document.getElementById("rest");

let interval;
let timeLeft = 5;
// 1500으로 바꿔주기

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);

      document.querySelector("#img-wrapper > div:nth-child(1) > img").src =
        "images/bg5.png";

      timeLeft = 1500;

      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  document.querySelector("#img-wrapper > div:nth-child(1) > img").src =
    "images/bg25.png";
  timeLeft = 1500;
  updateTimer();
}

function rest() {
  timeLeft = 300;
  document.querySelector("#img-wrapper > div:nth-child(1) > img").src =
    "images/bg5.png";

  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
