"use strict";
/* Levi Noell-Baba, September 17, 2023, IST239-W01, Hands-on project 04-03
   
   In Hands-on exercise 04-03 the book is teaching us to use a try catch finally statement in code. The book is also teaching us to find and fix errors found in the code. 
 */

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   let commentText = document.getElementById("comment").value;
   let charCount = countCharacters(commentText);
   // Try catch finally to detect an error and update the wordCountBox whether an error has been found or not
   try {
	   //Test if charCount is greater than MAX_REVIEW
	   if (charCount > MAX_REVIEW) {
		   throw new Error("You have exceeded the character count limit");
	   }
   } catch (error) {
	   // display the error message in warningBox
	   warningBox.innerHTML = error.message;
   } finally {
	   //Update the wordCountBox with charCount, whether exception is thrown or not
	   wordCountBox.innerHTML = charCount;
   }
}









/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 