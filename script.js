'use strict';
/* змінні */
let date = new Date(),
    time = document.querySelector('.clock');


/* функції */
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};


/* записи в браузері */
// date
document.querySelector('.day').textContent = `${date.format('dd.mm.yyyy')}`;

//час
function getCurrentTimeString() {
    return new Date().format('HH:MM:ss');
}

setInterval(() => time.innerHTML = getCurrentTimeString(), 1000);

// секундомір
const watch = document.getElementById('watch');
let milliseconds = 0;
let timer;
let startWatch = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    timer = setInterval(() => {
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);
        watch.innerHTML =
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10)
};

const pausedWatch = () => {
    watch.classList.add(('paused'));
    clearInterval(timer);
};

const resetWatch = () => {
    watch.classList.remove(('paused'));
    clearInterval(timer);
    milliseconds = 0;
    document.querySelector('.stopwatch-display').innerHTML = '';
    watch.innerHTML = '00:00:00'
}

const loopWatch = () => {
    document.querySelector('.stopwatch-display').innerHTML += `<p class="view">${watch.textContent}</p>`
}

// таймер
let count = 25;
let seconds;

function plus() {
    document.querySelector('.timer-display').textContent = `${++count}`;
    seconds = count * 60000;

}

function minus() {
    if (count > 0) {
        document.querySelector('.timer-display').textContent = `${--count}`;
    } else {
        document.querySelector('.timer-display').textContent = `0`;
    }
    seconds = count * 60000;
}


let table = document.querySelector('.timer-tablo'); // 00:00
let display = document.querySelector('.timer-display'); // 25

let tik;

function startTimer() {
    clearInterval(tik);
    tik = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(tik);
            table.innerHTML = 'Game over';
        } else {
            seconds -= 10;
            let dateTimer = new Date(seconds);
            table.innerHTML =
                ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
                ('0' + dateTimer.getUTCSeconds()).slice(-2);
        }
    }, 10)
}


const pausedTimer = () => {
    clearInterval(tik);
};


const resetTimer = () => {
    table.innerHTML = '00:00'
    display.innerHTML = '25';
}














