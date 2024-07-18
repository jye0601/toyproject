const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

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

      document.getElementById("img-wrapper").style.backgroundImage =
        'url("../images/bg5.png")';

      document.getElementById("img-wrapper").style.backgroundRepeat =
        "no-repeat;";

      document.getElementById("img-wrapper").style.backgroundPosition =
        "left top;";

      document.getElementById("body").style.font = "color: white";

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

  document.getElementById("img-wrapper").style.backgroundImage =
    'url("../images/bg25.png")';
  timeLeft = 1500;
  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
