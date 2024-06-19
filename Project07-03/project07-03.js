"use strict";
/* Levi Noell-Baba, October 05, 2023, IST239-W01, Hands-on project 07-03
   
   In Hands-on exercise 07-03 the book is teaching us to correctly use the properties and methods of Date objects to create a clock that counts down the time to the start of the new year.
 */

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

window.setInterval(countdown, 1000); //use of the setInterval method to run the countdown() function every 1000 milliseconds

function countdown() { //creation of the countdown function
	let now = new Date(); //now set to current date and time using the new Date() object constructor
	currentTime.textContent = now.toLocaleString(); //toLocaleString() method used to display the text of the current date and time in the currentTime object
	let newYear = new Date(2024, 0, 1); //newYear variable declared and use of the newDate() object constructor to store the date January 1, 2024
	let nextYear = now.getFullYear() + 1; //use of the getFullYear() method to get the 4 digit year value from the now variable and increase the value by 1 and store the result in the nextYear variable
	newYear.setFullYear(nextYear); //use of the setFullYear() method to change the year value of newYear to the value of the nextYear variable
	let daysLeft = (newYear - now) / (1000 * 60 * 60 * 24); //calculation that is assigned to the daysLeft variable
	let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24; //calculation that is assigned to the hrsLeft variable
	let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60; //calculation that is assigned to the minsLeft variable
	let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60; //calculation that is assigned to the secsLeft variable
	daysLeftBox.textContent = Math.floor(daysLeft); // use of the Math.floor() method to display the daysLeft variable in the daysLeftBox
	hrsLeftBox.textContent = Math.floor(hrsLeft); // use of the Math.floor() method to display the hrsLeft variable in the hrsLeftBox
	minsLeftBox.textContent = Math.floor(minsLeft); // use of the Math.floor() method to display the minsLeft variable in the minsLeftBox
	secsLeftBox.textContent = Math.floor(secsLeft); // use of the Math.floor() method to display the secsLeft variable in the secsLeftBox
}

