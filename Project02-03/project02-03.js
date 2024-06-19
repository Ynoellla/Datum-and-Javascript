/* Levi Noell-Baba, September 03, 2023, IST239-W01, Hands-on project 02-03
   
   In Hands-on exercise 02-03 the book is teaching us to apply event handlers that use the hover method to detect and display a message if the user is hovering over a specific area.
 */


document.getElementById("square").onmouseover = function () { //use of the onmouseover event handler to detect if the user is hovering over the square. If so, the code displays the given message.
	document.getElementById("feedback").innerHTML = "You're hovering over the square";
}

document.getElementById("square").onmouseout = function() { //use of the onmouseout event handler to detect if the user stops hovering over the square. if so, the code displays an empty message.
	document.getElementById("feedback").innerHTML = "";
}

document.getElementById("triangle").onmouseover = function() { //use of the onmouseover event handler to detect if the user is hovering over the triangle. If so, the code displays the given message.
	document.getElementById("feedback").innerHTML = "You're hovering over the triangle";
}

document.getElementById("triangle").onmouseout = function() { //use of the onmouseout event handler to detect if the user stops hovering over the triangle. if so, the code displays an empty message.
	document.getElementById("feedback").innerHTML = "";
}

document.getElementById("circle").onmouseover = function () { //use of the onmouseover event handler to detect if the user is hovering over the circle. If so, the code displays the given message.
	document.getElementById("feedback").innerHTML = "You're hovering over the circle";
}

document.getElementById("circle").onmouseout = function() { //use of the onmouseout event handler to detect if the user stops hovering over the circle. if so, the code displays an empty message.
	document.getElementById("feedback").innerHTML = "";
}