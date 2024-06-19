"use strict";
/* Levi Noell-Baba, October 29, 2023, IST239-W01, Hands-on project 10-01
   
   In Hands-on exercise 10-01 the book is teaching us to write code that will enable the users to drag and drop elements into specific places. 
 */

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);      
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

for (let i = 0; i < pieces.length; i++) { //for loop that iterates through every item in the pieces node list and adds an event listener that runs the grabPiece() function in response to the pointerdown event
	pieces[i].addEventListener("pointerdown", grabPiece);
}

function grabPiece(e) { //creation of the grabPiece function
	pointerX = e.clientX; //values of pointerX and pointerY variable to the values of the clientX and clientY properties of the event object
	pointerY = e.clientY;
	e.target.style.touchAction = "none"; //value of the touchAction style for the event target set to "none"
	e.target.style.zIndex = zCounter++; //value of the zCounter variable increased by 1 and the value applied to the zIndex style of the event target
	pieceX = e.target.offsetLeft; //value of pieceX and pieceY variables set to the values of the offsetLeft and offsetTop properties of the event target
	pieceY = e.target.offsetTop;
	e.target.addEventListener("pointermove", movePiece); //added event listener to the event target that runs the movePiece() function in response to the pointermove event.
	e.target.addEventListener("pointerup", dropPiece); //added an event listener to the event target that runs the dropPiece() function in response to the pointerup method.
}

function movePiece(e) { //creation of the movePiece function
	let diffX = e.clientX - pointerX; //diffX and diffY variables declared and set equal to the difference between e.clientX and e.clientY, and pointerX and pointerY.
	let diffY = e.clientY - pointerY;
	e.target.style.left = pieceX + diffX + "px"; //value of the left style property of the event taget set to the sum of pieceX and diffX plus the text string "px"
	e.target.style.top = pieceY + diffY + "px"; //value of the top style property of the event target set to the sum of pieceY and diffY plus the text string "px".
}

function dropPiece(e) { //dropPiece() function created
	e.target.removeEventListener("pointermove", movePiece); //movePiece() function removed from the event listener for the pointerup event
	e.target.removeEventListener("pointerup", dropPiece); //dropPiece() function removed from the event listener for the pointerup event.
}

