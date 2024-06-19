"use strict";
/* Levi Noell-Baba, October 01, 2023, IST239-W01, Hands-on project 06-03
   
   In Hands-on exercise 06-03 the book is teaching us to code a form that will copy information from one part of the form to another if certain conditions are fulfilled. 
 */

let useShip = document.getElementById("useShip");

useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling() { //function used to insert values from ship into bill if the checkbox is checked
	if(useShip.checked) { //if statement that checks if the checkbox is checked
		document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
		document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
		document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
		document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
		document.getElementById("cityBill").value = document.getElementById("cityShip").value;
		document.getElementById("countryBill").value = document.getElementById("countryShip").value;
		document.getElementById("codeBill").value = document.getElementById("codeShip").value;
		document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
	}
}

let formElements = document.querySelectorAll("input[type='text']"); //declaring different variables of formElements, fieldCount, and errorBox
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

for(let i = 0; i < fieldCount; i++) { //for loop that iterates through each element in the formElements node list and applies an event listener that calls a function.
	formElements[i].addEventListener("invalid", showValidationError);
}

function showValidationError(evt) { //showValidationError(evt) function created. use of the preventDefault() method to prevent browser from applying the native browser tools
	evt.preventDefault();
	errorBox.textContent = "Complete all highlighted fields"; //errorbox textContent set to specified message if triggered.
}