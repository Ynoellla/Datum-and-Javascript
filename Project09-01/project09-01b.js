"use strict";
/* Levi Noell-Baba, October 17, 2023, IST239-W01, Hands-on project 09-01
   
   In Hands-on exercise 09-01 the book is teaching us to connect different web pages and their contents to diplay the intended content.
 */

let query = location.search.slice(1); //slice method applied to location.search object to store text after the first character in the query variable
query = query.replace(/\+/g, " "); //replace method used to replace every occurrence of the + character in the variable with a blank space
query = decodeURIComponent(query); //decodeURIComponent() method applied to replace every URI-encoded character in query with the matching character
const cardFields = query.split(/&/g); //split method applied to the query string to split the text at every occurrence of the & character and placing each name=value pair as a separate item in the cardFields array
for(let items of cardFields) { //for loop that loops through every item in the cardFields array.
	let nameValue = items.split(/=/); //split method used to split each item at the location of the = character and store the substrings in the nameValue array variable
	let name = nameValue[0]; //first item in the nameValue array atored in the name variable
	let value = nameValue[1]; //second item in the NameValue array stored in the value variable
	document.getElementById(name).textContent = value; //value of the value variable stored as the text content of the document element with an id equal to the name variable
}