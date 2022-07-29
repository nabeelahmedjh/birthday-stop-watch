var watchButtons = document.querySelectorAll(".watch-btn")

watchButtons.forEach(button => {
    button.addEventListener("click", function() {
        decision(button);
    });
});



function decision(button) {
    switch (button.innerHTML) {
        case 'Start':
            // start the watch
            button.innerHTML = "Stop";
            timer = setInterval(updateTenthOfSecond, 100);
            document.querySelector("#watch-btn-2").toggleAttribute("disabled");

            break;
        case 'Pause':
            // pause the watch
            clearInterval(timer);
            button.innerHTML = "Resume";
            break;
        case 'Resume':
            // resume the watch
            timer = setInterval(updateTenthOfSecond, 100);
            button.innerHTML = "Pause";
            break;
        case 'Stop':
            //stop the watch
            clearInterval(timer);
            InitialState();
            button.innerHTML = "Start";
            break;
        default:
            break;
    }
}


function updateTenthOfSecond() {
    tenthOfSecond = document.querySelector(".tenth-of-second p");
    tenthOfSecondUpdate = parseInt(tenthOfSecond.innerHTML) + 1 + "";

    if (tenthOfSecondUpdate == 10) {
        tenthOfSecondUpdate = '0';
        updateSeconds();  
    }
    tenthOfSecond.innerHTML = tenthOfSecondUpdate;
}


function updateSeconds() {
    seconds = document.querySelector(".seconds p");

    secondsUpdate = parseInt(seconds.innerHTML) + 1 + "";

    if (secondsUpdate == "60") {
        updateMinutes();
        secondsUpdate = '0'
    }
    seconds.innerHTML = secondsUpdate;

}

function updateMinutes() {
    minutes = document.querySelector(".minutes p");

    minutesUpdate = parseInt(minutes.innerHTML) + 1 + "";

    if (minutesUpdate == "60") {
        updateHours();
        minutesUpdate = '0'
    }
    minutes.innerHTML = minutesUpdate;
}

function updateHours() {
    hours = document.querySelector(".hours p");

    hoursUpdate = parseInt(hours.innerHTML) + 1 + "";

    if (hoursUpdate == "60") {
        secondsUpdate = '0'
    }
    seconds.innerHTML = secondsUpdate;
}


function InitialState() {
    timers = document.querySelectorAll(".timer p");
    timers.forEach(timer => {
        timer.innerHTML = "00";
    });
    document.querySelector("#watch-btn-2").innerHTML = "Pause";
    document.querySelector("#watch-btn-2").toggleAttribute("disabled");
}