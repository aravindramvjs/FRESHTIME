// creating panel title in js
let workTitle = document.getElementById("timer")
let breakTitle = document.getElementById("break")

// creating time 
let workTime = 25;
let breakTime = 5;
let seconds = "00"

// adding time in html
window.onload = function(){
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = seconds;
}

// countdown timer starts 

function start(){
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    let seconds = 59;
    // let breakCount = 0;

    let timerFunction = function(){
        seconds = seconds -1
        document.getElementById("minutes").innerHTML = workMinutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (seconds == 0){
            workMinutes = workMinutes - 1;
            seconds = 59;
            if (workMinutes == -1){
                workMinutes = breakMinutes;
            }
        }

    }
    setInterval(timerFunction, 1000);
}

// if (breakCount % 2 == 0 ){
                //     workMinutes = breakMinutes;
                //     breakCount++
                // }
                // else{
                //     workMinutes = workTime;
                //     breakCount++
                // }

            //     if (workMinutes != -1){
            //     workTitle.classList.add('active');
            //     breakTitle.classList.remove('active');

            // }