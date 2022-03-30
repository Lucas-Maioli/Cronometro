var seconds = 0;
var minutes = 0;
var hours = 0;

var interval;

function digts(digits) {
    if(digits < 10){
        return('0'+digits)
    }else{
        return(digits)
    }
}

function start() {
    timer()
    interval = setInterval(timer, 1000);
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval)
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('timer').innerText = '00:00:00';
}



function timer() {
    seconds++

    if (seconds == 60) {
        minutes++;
        seconds = 0;
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
    }
    
    document.getElementById('timer').innerText = digts(hours)+':'+digts(minutes)+':'+digts(seconds);
}