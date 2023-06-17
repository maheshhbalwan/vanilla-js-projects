const display = document.querySelector(".display");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let startTime, intervalId;

// Define the start function that Starts Time
function start() {
  startTime = Date.now();
  intervalId = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    const milliseconds = Math.floor(elapsedTime / 100);
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    // HH:MM:SS:SS
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(
      milliseconds
    )}`;
    display.textContent = formattedTime;
  }, 10);
}

function pause() {
  clearInterval(intervalId);
}

function stop() {
  clearInterval(intervalId);
}

function reset() {
  clearInterval(intervalId);
  display.textContent = "00:00:00:00";
}

// adding a leading ) to a number id its less the 10
function pad(number) {
  return number < 10 ? "0" + number : number;
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
