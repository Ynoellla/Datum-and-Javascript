"use strict";
/* Levi Noell-Baba, October 29, 2023, IST239-W01, Hands-on project 10-05
   
   In Hands-on exercise 10-05 the book is teaching us to correctly detect and correct errors in code.
 */


// Event handler to for keydown events within the current document
document.onkeydown = selectLetter; //onkeypress changed to onkeydown Error #5

// Function to apply keyboard actions to select a letter or navigate the puzzle
function selectLetter(e) {
   
   e.preventDefault(); //event changed to e Error #1
   
   // Reference the letter to the left of the current letter
   let leftLetter = document.getElementById(currentLetter.dataset.left);
   
   // Reference the letter above the current letter
   let upLetter = document.getElementById(currentLetter.dataset.up);
   
   // Reference the letter to the right of the current letter
   let rightLetter = document.getElementById(currentLetter.dataset.right); 
   
   // Reference the letter below the current letter
   let downLetter = document.getElementById(currentLetter.dataset.down); 
   
   // Get the key typed by the player
   let userKey = e.key; //code changed to key Error #2
 
   if (userKey === "ArrowLeft") { // Move left 
      formatPuzzle(leftLetter);  
      
   } else if (userKey === "ArrowUp") { // Move up
      formatPuzzle(upLetter);  
      
   } else if (userKey === "ArrowRight" || userKey === "Tab") { // Move right
      formatPuzzle(rightLetter);  
      
   } else if (userKey === "ArrowDown" || userKey === "Enter") { // Move down
      formatPuzzle(downLetter);  
      
   } else if (userKey === "Backspace" || userKey === "Delete") { // Delete the character
      currentLetter.textContent = ""; 
      
   } else if (userKey === " ") { // Toggle the typing direction // Space changed to " " Error #3
      switchTypeDirection();  
      
   } else if (userKey >= "a" && userKey <= "z") { // Write the character
      currentLetter.textContent = userKey.toUpperCase();  //added the toUpperCase function Error #4
      
      if (typeDirection === "right") {
         formatPuzzle(rightLetter);  // Move right after typing the letter
      } else {
         formatPuzzle(downLetter);  // Move down after typing the letter
      }
   }

}

