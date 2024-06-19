"use strict";
/* Levi Noell-Baba, September 23, 2023, IST239-W01, Hands-on project 05-03
   
   In Hands-on exercise 05-03 the book is teaching us to set anchor points that can be used as links on a webpage.
 */

//declare variables
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

//loop through child elements of sourceDoc
for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
	//if statement that checks if the node name is equal to the heading constant
	if (n.nodeName === heading){
		//creating an anchor element
		let anchor = document.createElement("a");
		anchor.id = "doclink" + headingCount;
		n.insertBefore(anchor, n.firstElementChild); //the anchor is inserted before the first child of the current node
		let listItem = document.createElement("li"); //list item and link elements created
		let link = document.createElement("a");
		link.textContent = n.textContent; //link text content declared
		link.href = "#" + "doclink" + headingCount; //code that links the ID of the header
		listItem.appendChild(link); //link is appended to listItem
		toc.appendChild(listItem); //code that appends listItem to the toc object
		headingCount++; //headcounting increases in increments
	}
}