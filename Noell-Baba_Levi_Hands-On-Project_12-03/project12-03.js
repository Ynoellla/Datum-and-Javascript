"use strict";
/* Levi Noell-Baba, November 11, 2023, IST239-W01, Hands-on project 12-03
   
   In Hands-on exercise 12-03 the book is teaching us to use Jquery to add visual effects to a recipe page for a dessert website.
 */


$( () => {
	$("article > h2").click(e => { //click() method applied to the aricle > h2 selector.
		let heading = $(e.target); //heading variable declared referencing the target of the click event
		let list = $(heading).next(); //list variable declared referencing the next sibling element of the heading variable
		let headingImage = $(heading).children("img"); //headingImage variable declared freferencing the children of the heading variable whose tag name is "img"
		list.slideToggle(500) //slideToggle() method applied to the list variable over a half-second interval to alternate between hiding and showing the content of the lists
		if(headingImage.attr("src") === "plus.png") { //attr() method applied to the headingIMage variable to get the value of the src attribute to change the symbol displayed in the headings.
			headingImage.attr("src", "minus.png");
		} else {
			headingImage.attr("src", "plus.png");
		}
	});
});