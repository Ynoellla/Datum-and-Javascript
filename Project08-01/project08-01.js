"use strict";
/* Levi Noell-Baba, October 15, 2023, IST239-W01, Hands-on project 08-01
   
   In Hands-on exercise 08-01 the book is teaching us to use object classes to build a countdown timer.
 */

/*--------------- Object Code --------------------*/

function Timer(min, sec) { //Timer constructor function with the min and sec parameters. 
	this.minutes = min; //timer.minutes property equal to min
	this.seconds = sec; //timer.seconds property equal to sec
	this.timeID = null; //timer.timeID property equal to null
}

Timer.prototype.runPause = function (timer, minBox, secBox) { //runPause() method added to the timer object class prototype with three parameters named timer, minBox, and secBox
	if (timer.timeID) { //if else statement that tests whether timer.timedID is truthy. 
		window.clearInterval(timer.timeID); //window.clearinterval() used to pause the timer 
		timer.timeID = null;
	} else {
		timer.timeID = window.setInterval(countdown, 1000); //window.setinterval method used to start the timer
	}
	function countdown() {
		if (timer.seconds > 0) { //if statement that tests if timer.seconds is greater than 0, decrease the value of timer.seconds by 1
			timer.seconds--;
		}else if (timer.minutes > 0) { //else if statement that tests if the timer.minutes is greater than 0, decrease the value of timer.minutes by 1 and set the value of timer.seconds to 59
			timer.minutes--;
			timer.seconds = 59;
		} else { //else statement that runs if the timer has reached 0:0 it stops the timer by running the window.clearInterval() method
			clearInterval(timer.timeID);
			timer.timeID = null;
		}
		minBox.value = timer.minutes; //value of timer.minutes set to minBox.value
		secBox.value = timer.seconds; //value of timer.seconds set to secBox.value
	}
};





/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

minBox.onchange = function () { //onchange event handler that sets myTimer.minutes to minBox.value
	myTimer.minutes = minBox.value;
};

secBox.onchange = function () { //onchange event handler that sets myTimer.seconds to secBox.value
	myTimer.seconds = secBox.value;
};

runPauseTimer.onclick = function () { //onclick event handler created for the runPauseTimer button that runs an anonymous function that applies the runPause() method to myTimer using myTimer, minBox, and secBox as the parameter values.
	myTimer.runPause(myTimer, minBox, secBox);
};

let myTimer = new Timer(minBox.value, secBox.value); //instance of the timer object named myTimer using minBox.value and secBox.value as the parameter values

