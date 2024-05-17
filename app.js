const startTimerElem = document.querySelector('#START')
const stopTimerElem = document.querySelector('#STOP')
const countUpTimerResult = document.querySelector('#count_up_timer')
let MyTimer
let totalSeconds = 0

const btnActive = () => {
    if (startTimerElem.disabled) {
        startTimerElem.disabled = false;
        stopTimerElem.disabled = true;
    } else {
        startTimerElem.disabled = true;
        stopTimerElem.disabled = false;
    }
}

function startTimerHandler() {
    MyTimer = setInterval(countUpTimer, 1000)
    btnActive()
}

const stopTimerHandler = () => {
    clearInterval(MyTimer)
    btnActive()
}

const countUpTimer = () => {
    totalSeconds++;
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    var seconds = totalSeconds - (hour * 3600 + minute * 60);
    //
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (seconds < 10) seconds = "0" + seconds;
    //
    countUpTimerResult.innerHTML = hour + ":" + minute + ":" + seconds;
}

startTimerElem.addEventListener('click', startTimerHandler)
stopTimerElem.addEventListener('click', stopTimerHandler)