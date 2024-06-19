"use strict";
/* Levi Noell-Baba, November 5, 2023, IST239-W01, Hands-on project 11-01
   
   In Hands-on exercise 11-01 the book is teaching us to use fetch to retrieve the astronomy picture of the day from an API on the NASA website.
 */

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {   
let dateStr = dateBox.value; //dateStr variable declared and set equal to the value of the dateBox element.
	fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateStr}`) //fetch method used to make a request to the given URL
		.then(response => response.json()) //then() method added to take a successful response and apply the json() method to the response object to parse the JSON text string.
		.then(json => showPicture(json)) //then() method added that receives the JSON object and runs the showPicture() method with the json object as the parameter value.
		.catch(error => console.log(error)); //catch() method added to display the text of the rejected promise in the debugger console
};
function showPicture(json) { //showPicture() function created with the parameter named json.
	if (json.media_type === "video") { //if json.media_type equals "video" inner HTML of the image box element changed to `<iframe src = "${json.url}"></iframe><h1>${json.title}</h1><p>${json.explanation}</p>`
		imageBox.innerHTML = `<iframe src = "${json.url}"></iframe><h1>${json.title}</h1><p>${json.explanation}</p>`;
	} else if (json.media_type === "image") { //else if statement that tests if json.media_type equals "image" if so the the inner HTML of imageBox element changed to <img src="${json.url}" /><h1>${json.title}</h1><p>${json.explanation}</p>
		imageBox.innerHTML = `<img src="${json.url}" /><h1>${json.title}</h1><p>${json.explanation}</p>`;
	} else { //Else statement that changes to the inner HTML of the imageBox element to the text string "Image not Available".
		imageBox.innerHTML = "Image not Available"; 
	}
}



