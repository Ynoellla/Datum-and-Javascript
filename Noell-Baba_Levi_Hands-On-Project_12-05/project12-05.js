"use strict";
/* Levi Noell-Baba, November 11, 2023, IST239-W01, Hands-on project 12-05
   
   In Hands-on exercise 12-05 the book is teaching us to correctly detect and correct errors in code.
 */

$("form#userform") // . changed to # Error #1
// apply the novalidate attribute so that the browser validation is not run
.attr("novalidate", "") //Removed semicolon to fix chaining error. Error #2
.submit( e => {  //// run a function when the form is submitted.

   let isValid = true;
   
   // confirm that a username has been supplied
   let username = $("input#username"); 
   // test the value of the username input box
   if ($(username).val() === "") { //added parentheses after .val Error #3
      // if the name is missing, display an error message      
      isValid = false;
      $(username).next()
      // animate the reveal of the error message
      .hide()
      .text("* You must supply a username")
      .show(500);
   } else {
      // display an empty text string
      $(username).next().text("");
   }
   
   
   // confirm that an email address has been supplied
   let email = $("input#email");	//added quotation marks around selector. Error #4
   // test the text of the email box is a valid email address
   let mailRE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //changed quotation marks to back slashes Error #5
	let validMail = mailRE.test(email.val()); 
   
   if (validMail !== true) {
      // if the email address does not match the regular expression pattern, display an error message
      isValid = false;
      $(email).next()
      .hide()
      .text("* Not a valid e-mail address")
      .show(500);      
   } else {
      // display an empty text string
      $(email).next().text("");
   }
   
   
   // confirm that valid password has been supplied
   let pwd = $("input#pwd");
   // test the text of the password box conforms to the password rules
	let pwdRE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	let validPwd = pwdRE.test(pwd.val());
   
   if (validPwd !== true) {
      // if the password does not match the regular expression pattern, display an error message
      isValid = false;
      $(pwd).next()
      // animate the reveal of the error message
      .hide()
      .text("* Invalid password")
      .show(500); //Removed semicolons Error #6      
   } else {
      // display an empty text string
      $(pwd).next().text("");
   }
   
   
   // confirm that the two passwords match
   let pwd2 = $("input#pwd2");; 
   
   if (pwd.val() !== pwd2.val()) {
      // if the passwords don't match, display an error message
      isValid = false;
      $(pwd2).next()
      // animate the reveal of the error message
      .hide()
      .text("* Passwords must match")
      .show(500);      //.5 changed to 500 as it refers to milliseconds Error #7
   }  else {
      // display an empty text string
      $(pwd2).next().text("");
   } 
   
   // Confirm that there is no invalid data in the form
   if (isValid == false) {//condition changed to a double equal sign Error #8
      // if there is invalid data, cancel the form submission
      e.preventDefault();
   }
   
});