"use strict";
/* Levi Noell-Baba, October 01, 2023, IST239-W01, Hands-on project 06-01
   
   In Hands-on exercise 06-01 the book is teaching us to code a form in javascript that detects if the required fields have been filled and if certain fields fit specifications. if not, a custom message is displayed. 
 */

let submitButton = document.getElementById("submitButton"); //declaring variables submitButton, pwd, and pwd2
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function() { //anonymous function used to check if the passwords do not match
	if(pwd.validity.patternMismatch) {
		pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number"); //setCustomValidity used to set a custom message if the password does not fit specs
	} else if(pwd.value !== pwd2.value) { //setCustomValidity used to set a custom message if the password does not match the initial password
		pwd.setCustomValidity("Your passwords must match");
	} else {
		pwd.setCustomValidity("");
	}
});