"use strict";
/* Levi Noell-Baba, September 23, 2023, IST239-W01, Hands-on project 05-01
   
   In Hands-on exercise 05-01 the book is teaching us to use loops to keep checking data until a true result is returned.
 */

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID; //declaration of the timeID variable without an initial value
let questionList = document.querySelectorAll("div#quiz input"); //creation of questionList





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}
// an onclick event handler added to the startQuiz object
startQuiz.onclick = function() {
	overlay.className = "showquiz";
	timeID = setInterval(countdown, 1000);
};
//creation of the countdown() function
function countdown() {
	if (timeLeft === 0) { //if statement that checks is the user has run out of time.
		clearInterval(timeID); //use of the clearInterval() method to cancel the timed command
		let totalCorrect = checkAnswers(); //declaration of variable named totalCorrect
		
		if (totalCorrect === correctAnswers.length) { //if statement that checks if totalCorrect is equal to the length of the correctAnswers array. if so, an alert window congratulating the student on getting 100% is generated.
			alert("Congratulations! You got 100%!");
		} else { //else statement that executes if the user does not get all answers correct. it will display an alert window telling the users the number of incorrect answers, changes the value of timeLeft variable to quizTime, sets the quizClock.value to the value of the timeLeft variable, and changes the class attribute of the overlay object to "hidequiz".
			alert("You got " + (correctAnswers.length - totalCorrect) + " incorrect out of " + correctAnswers.length + " questions.");
			timeLeft = quizTime;
			quizClock.value = timeLeft;
			overlay.className = "hidequiz";
		}
	} else { //else statement that executes if the timeLeft variable is not equal to 0
		timeLeft--; //code that decreases the value of timeLeft by 1
		quizClock.value = timeLeft; //code that sets the quickClock.value to the value of the timeLeft variable.
	}
}

