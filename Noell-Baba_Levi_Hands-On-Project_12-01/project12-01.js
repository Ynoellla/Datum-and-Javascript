"use strict";
/* Levi Noell-Baba, November 11, 2023, IST239-W01, Hands-on project 12-01
   
   In Hands-on exercise 12-01 the book is teaching us to create a dropdown menu containing links to other pages on the website
 */

$(() => {
	$("li.submenu") //jQuery selector created for the li.submenu element
	.mouseover(e => { //mouseover() method attached to the selector that runs an anonymous function
		$(e.currentTarget).children("ul").show(); //show() method applied to the selector to show the contents of the dropdown menu during the mouseover event
	})
	.mouseout(e => { //mouseout() method chained to the li.submenu selector
		$(e.currentTarget).children("ul").hide(); //hide() method applied to the slector to hide the contents of the dropdown menu during the mouseout event
	});
});




                                                