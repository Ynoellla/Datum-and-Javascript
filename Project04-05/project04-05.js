"use strict";
/* Levi Noell-Baba, September 17, 2023, IST239-W01, Hands-on project 04-05
   
   In Hands-on exercise 04-05 the book is teaching us to correctly detect and correct errors in code using the debugger console. 
 */



const PI = Math.PI; // Declaring the global constant

// Function to convert degrees to radians 
function degreesToRadians(degrees) {
   return degrees * Math.PI/180; //changed 80 to 180
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
   return radians*180/ Math.PI;
}

// Event handler that converts radians to degrees when the input box is changed
document.getElementById("rValue").onchange = function() { //added ending parentheses to the function
   let radians = document.getElementById("rValue").value;
   console.log("Radians =", radians);
   document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians)); //radian changed to radians
}

// Event handler that converts degrees to radians when the input box is changed
document.getElementById("aValue").onchange = function() {
   let degrees = document.getElementById("aValue").value;
   console.log("Degrees =", degrees);
   document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees)); //added missing closing parentheses
}





/* ================================================================= */
 // Function to display a numeric value in the format ##.### 
 function formatValue3(value) {
    return value.toFixed(3);
 }