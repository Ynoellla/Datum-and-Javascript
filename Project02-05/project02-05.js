/* Levi Noell-Baba, September 03, 2023, IST239-W01, Hands-on project 02-05
   
   In Hands-on exercise 02-05 the book is teaching us to correctly detect and correct errors in code. 
 */
 
// Add event handlers for each calculator button sending that buttons value to the runCalculator() function
document.getElementById("button0").onclick = function() { //The onclick was coded without "on" being included. Error #1
   runCalculator(0);
}

document.getElementById("button1").onclick = function() {
   runCalculator(1);
}

document.getElementById("button2").onclick = function() {
   runCalculator(2);
}

document.getElementById("button3").onclick = function() {
   runCalculator(3);
}

document.getElementById("button4").onclick = function() {
   runCalculator(4);
}

document.getElementById("button5").onclick = function() {
   runCalculator(5);
}

document.getElementById("button6").onclick = function() {
   runCalculator(6);
}

document.getElementById("button7").onclick = function() {
   runCalculator(7);
}

document.getElementById("button8").onclick = function() {
   runCalculator(8);
}

document.getElementById("button9").onclick = function() {
   runCalculator(9);
}

document.getElementById("buttonAdd").onclick = function() {
   runCalculator("+");
}

document.getElementById("buttonMinus").onclick = function() {
   runCalculator("-"); //improper capitalization in runCalculator. Fixed capitalization. Error #3
}

document.getElementById("buttonMultiply").onclick = function() {
   runCalculator("*");
}

document.getElementById("buttonDivide").onclick = function() { //the parentheses were not included after function. added parentheses. Error #2
   runCalculator("/");
}

document.getElementById("buttonDecimal").onclick = function() {
   runCalculator(".");
}

// Send an empty text string if the Enter key is clicked
document.getElementById("buttonEnter").onclick = function() {
   runCalculator("");
}

// Clear the calculator window if the C key is clicked
document.getElementById("buttonClear").onclick = clearCalculator;  // removed unnecessary parentheses after clearCalculator. Error #4




// Function to enter characters into the calculator window based on what is clicked

function runCalculator(character) {
   // Retrieve the characters in the calculator window
   let calcValue = document.getElementById("calcWindow").value;
   
   // Add the character to the calculator string or if its empty (the enter key) evaluate the equation
   (character) ? calcValue += character : calcValue += " = " + evalEq(calcValue) + "\n"; //The conditional expression "?" had two extra question marks. Error #2
   
   // Update the characters displayed in the calculator window.
   document.getElementById("calcWindow").value = calcValue; //calc_value was not consistent with the previous code that used camelCase. Error #1
}




// Function to clear the calculator window

function clearCalculator() {
      document.getElementById("calcWindow").value =""; //calcWindow was incorrectly capitalized. Error #1
}






/* ===================================================================== */

// Function to evaluate a text string containing an equation, returning a numeric value to a specified number of decimals
function evalEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(6);
}  
