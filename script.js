

var MS_PER_TICK = 10;
var MAX_MS = 100;
var MAX_S = 60;
var MAX_M = 60;
var MAX_H = 23;

var ms = 0, s = 0, m = 0, h = 0;
var timer;

var display = document.querySelector(".timer-display");
var laps = document.querySelector(".laps");

function start() {
    if (!timer) {
        timer = setInterval(updateTimer, MS_PER_TICK);
    }
}

function updateTimer() {
    display.innerHTML = getTimer();
    ms++;
    if (ms == MAX_MS) {
        ms = 0;
        s++;
    }
    if (s == MAX_S) {
        s = 0;
        m++;
    }
    if (m == MAX_M) {
        m = 0;
        h++;
    }
    if (h > MAX_H) {
        h = 0;
    }
}

function getTimer() {
    return (h < 10 ? "0" + h : h) + " : " + 
           (m < 10 ? "0" + m : m) + " : " + 
           (s < 10 ? "0" + s : s) + " : " + 
           (ms < 10 ? "0" + ms : ms);
}

function pause() {
    stopTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function reset() {
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    display.innerHTML = getTimer();
}

function restart() {
    if (timer) {
        reset();
        start();
    } else {
        start();
    }
}

function lap() {
    if (timer) {
        var Li = document.createElement("li");
        Li.innerHTML = getTimer();
        laps.appendChild(Li);
    }
}

function resetLap() {
    laps.innerHTML = "";
}

// Add event listeners to buttons
document.querySelector(".start-button").addEventListener("click", start);
document.querySelector(".pause-button").addEventListener("click", pause);
document.querySelector(".stop-button").addEventListener("click", stopTimer);
document.querySelector(".reset-button").addEventListener("click", reset);
document.querySelector(".restart-button").addEventListener("click", restart);
document.querySelector(".lap-button").addEventListener("click", lap);
document.querySelector(".reset-lap-button").addEventListener("click", resetLap);