"use strict";
/* Levi Noell-Baba, September 23, 2023, IST239-W01, Hands-on project 05-05
   
   In Hands-on exercise 05-05 the book is teaching us to correctly detect and correct errors in code.
 */

// Reference to the game board
let board = document.getElementById("board");

// Reference to the tiles within the game board
let allTiles = document.getElementsByClassName("tile");

// Objects that will reference the first and second tile clicked by the player
let firstFlipped;
let secondFlipped;

// Variable containing the id of a timed command
let timeID;

// Counter of the number of tiles currently flipped
let tilesFlipped = 0;

// Functions to run when the page is loaded
window.addEventListener("load", scrambleTiles);
window.addEventListener("load", playConcentration)



// Function that scrambles the order of the tiles within the board
function scrambleTiles() {
   for (let i = 0; i < allTiles.length; i++) { //<= changed to < Error #1
      
      // Random index integer from 0 to the number of tiles minus 1
      let randomIndex = Math.floor(allTiles.length*Math.random());
      
      // Randomly insert a tile before the current tile in the loop
      board.insertBefore(board.children[i], board.children[randomIndex]); //insert changed to insertBefore Error #2     
   }
}


// Function that sets up the game play
function playConcentration() {
   // Create event handlers for all tiles in the game board
   for (let i = 0; i < allTiles.length; i++) {
      
      // Run when a tile is clicked
      allTiles[i].onclick = function() {
         // Test to see if the back of the tile is displayed
         if (this.lastElementChild.className = "back") { //This changed to this Error #6
            
            tilesFlipped++;  // increase the flip count by 1
            
            if (tilesFlipped === 1) { //= changed to === Error #1
               // if this is the first tile clicked then flip it
               firstFlipped = this; //This changed to This Error #5
               firstFlipped.appendChild(firstFlipped.firstElementChild);
            } else if (tilesFlipped === 2) { //= changed to === Error #2
               // if this is the second tile clicked then flip it
               // and then flip both tiles back after 1 second
               secondFlipped = this; //This changed to this Error #3
               secondFlipped.appendChild(secondFlipped.firstElementChild);
               timeID = window.setTimeout(flipBack, 1000); //1 changed to 1000 Error #7
            }
         }
      }
   }  
   
   /* Function to flip the two tiles if they don't match */
   function flipBack() {
      // test to determine whether the tile images don't match
      if (firstFlipped.lastElementChild.src !== secondFlipped.lastElementChild.src) {   
         
         // if they don't match, then flip each one
         firstFlipped.appendChild(firstFlipped.firstElementChild);
         secondFlipped.appendChild(secondFlipped.firstElementChild);
      }
      
      // Reset the tiles flipped counter to zero
      tilesFlipped = 0; //titlesFlipped changed to tilesFlipped Error #1
   }   
}


