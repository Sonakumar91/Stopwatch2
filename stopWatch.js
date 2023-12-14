let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
    } else {
        timer = setInterval(updateStopwatch, 1000);
        document.getElementById('startStop').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById('startStop').innerText = 'Start';
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Event listeners
document.getElementById('startStop').addEventListener('click', startStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);