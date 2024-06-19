"use strict";
/* Levi Noell-Baba, September 17, 2023, IST239-W01, Hands-on project 04-01
   
   In Hands-on exercise 04-01 the book is teaching us to a try catch statement to catch exceptions and notify the user to input a valid value. 
 */

// Global Constants
const COST_PER_LB = 0.50; //Global constant was declared as $50 instead of $0.50. Error #1
const COST_PER_MILE = 0.75; //Global constant was declared as $75 instead of $0.75. Error #2
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");


// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
   let totalCost = 0;      // Set the initial estimate to $0
   msgBox.innerHTML = "";  // Erase any warnings in the message box
   
//try catch statements that detect when the weight is less than or equal to 0. if so, the program throws a message to notify the user.
   try {
	   if (!(wgtBox.value > 0)) {
		   throw new Error("Enter a positive weight");
	   }
	   
	   totalCost += wgtBox.value * COST_PER_LB;
   }   catch (weightError) {
	   msgBox.innerHTML = weightError.message;
	   return;
   }   

//try catch statements that detect when the distance is less than or equal to 0. if so, the program throws a message to notify the user.
   try {
	   if (!(distBox.value > 0)) {
		   throw new Error("Enter a positive distance");
	   }
	   
	   totalCost+= distBox.value * COST_PER_MILE;
   }   catch (distanceError) {
	   msgBox.innerHTML = distanceError.message;
	   return;
   }
  
   
   if (document.getElementById("setupBox").checked) {
      totalCost += SETUP_COST
   }
   
   // Display the moving cost estimate in the totalBox, formatted as currency
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}



 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }