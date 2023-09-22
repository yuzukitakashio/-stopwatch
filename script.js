const timeDisplay = document.querySelector('.time');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let isRunning = false;
let startTime;
let interval;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - (startTime || 0);
        interval = setInterval(updateTime, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}

function resetTimer() {
    stopTimer();
    timeDisplay.textContent = '0:00';
    startTime = null;
}

function updateTime() {
    const currentTime = Date.now() - startTime;
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    timeDisplay.textContent = `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
