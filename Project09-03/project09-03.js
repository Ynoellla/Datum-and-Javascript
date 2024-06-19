"use strict";
/* Levi Noell-Baba, October 17, 2023, IST239-W01, Hands-on project 09-03
   
   In Hands-on exercise 09-03 the book is teaching us to code a website that will record the date and time of your last visit in a local storage item and marked with the text string "New" upon first visit.
 */

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");


if(localStorage.sbloggerVisit) { //if statement that tests whether the object locatStorage.sbloggerVisit exists
	let storedLastDate = localStorage.getItem("sbloggerVisit"); //value of the sbloggerVisit key retrieved from local storage and saved key value to the storedLastDate variable
	lastVisitDate.textContent = storedLastDate; //value of storedLastDate displayed as text content of the lastVisitDate object to show the date of the user's last visit to the website
	let lastDate = new Date(storedLastDate); //LastDate variable declared and used to store date object using the value of the storedLastDate variable
	for(let items of articleDates) { //for loop that iterates through each item in the articleDates collections
		let articleDate = new Date(items.textContent); //articleDate variable declared and storing within it a date object containing the date text of the current item in the loop
		if(articleDate > lastDate) { //if statement that tests if articleDate is greater thatn lastDate
			items.innerHTML += "<strong>new</strong>"; //adds "<strong>new</strong>" to the html content of the current item in the articleDates collection
		}
	}
} else {
	lastVisitDate.textContent = "Welcome to SBlogger!"; //text content of the lastVisitDate object changed to "Welcome to SBlogger!"
	for(let items of articleDates) { //for loop created that iterates through each item in the articleDates collection.
		items.innerHTML += "<strong>new</strong>"; //adds "<strong>new</strong" to the html content of the current date item
	}
}
let currentDate = new Date("09/12/2024"); //currentDate variable declared and stored within it is a date object containing the date "9/12/2024"
localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString()); //apply the toLocaleDateString() method to currentDate and store the date string in sbloggerVisit key of local storage
