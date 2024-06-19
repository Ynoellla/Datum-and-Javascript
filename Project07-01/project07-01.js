"use strict";
/* Levi Noell-Baba, October 05, 2023, IST239-W01, Hands-on project 07-01
   
   In Hands-on exercise 07-01 the book is teaching us to use regular expressions to verify that a password passes validation before it is accepted
 */

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
   e.preventDefault(); //e.preventDefault() command used to prevent the browser from responding to the submit event
   
   let regex1 = /[A-Z]/; //regex1 variable created to contain a regular expression literal with a character class that matches any uppercase letter A through Z
   let regex2 = /\d/; //regex2 variable created containing a regular expression literal that matches any single digit
   let regex3 = /[!$#%]/; //regex3 variable created containing a regular expression with a character class containing the symbols !$#%
   
   if(pwd.length < 8) { //if else statement that tests the password to fit the criteria
	   feedback.textContent = "Your password must be at least 8 characters"; //message that displays if the password is less than 8 characters long
   } else if (regex1.test(pwd) === false) { //else if statement using the test() method with the regex1 regular axpression applied to the pwd variable. if it returns a false value, the message is displayed
	   feedback.textContent = "Your password must include an upper case letter";
   } else if (regex2.test(pwd) === false) { //else if statement using the test() method withe the regex2 regular expression applied to pwd. if it returns a false value, the message is displayed.
	   feedback.textContent = "Your password must include a number";
   } else if (regex3.test(pwd) === false) { //else if statement using the test() method withe the regex3 regular expression applied to pwd. if it returns a false value, the message is displayed.
	   feedback.textContent = "Your password must include one of the following '!#%$'";
   }
   else { //else statement that submits the form if all of the conditions are met.
	   signupForm.submit();
   }

}
);