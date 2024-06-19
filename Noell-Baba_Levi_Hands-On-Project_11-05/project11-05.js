"use strict";
/* Levi Noell-Baba, November 5, 2023, IST239-W01, Hands-on project 11-05
   
   In Hands-on exercise 11-05 the book is teaching us to correctly detect and correct errors in code.
 */

window.addEventListener("load", init);

function init() {
   // Page Objects
   let selectionList = document.getElementById("authorList");
   let bookReview = document.getElementById("review");
   let podList = document.getElementById("podcastList")
   
   // Fetch a list of authors from the server
   fetch("authorlist.json")//removed the semicolon Error #1
      .then (response => response.json()) //> changed to => Error #2
      .then (json => {
         
         // Place the authors in a selection list
         for (let authors of  json.authorlist) {
            let newOpt = document.createElement("option");
            newOpt.value = authors.initials;
            newOpt.textContent = authors.name;
            selectionList.appendChild(newOpt);
         }
      
         // Create an onchange event handler that displays a review by the selected author
         selectionList.onchange = function() {
            fetch("sfreviews.pl?author="+selectionList.value) //Query string should be URI encoded Error #6
            .then (response => response.text()) //.json changed to .text() Error #5
            .then (review => bookReview.innerHTML = review)
            .catch(e => console.log(e))
            }
         })
      .catch ( e => console.log(e));
   
   // Fetch the list of podcasts from an XML document
   fetch("sfpod.xml")
   .then(response => response.text())
   .then(str => new DOMParser().parseFromString(str, "text/xml")) //Parser() changed to DOMParser() Error#4
   .then (dom => {
      // Rewrite the XML structure into an HTML fragment
      let podcasts = dom.querySelectorAll("item");
      for (let show of podcasts) {
         let title = show.children[0].textContent;
         let summary = show.children[1].textContent;
         let link = show.children[2].textContent;
         let article = `<article><h1><a href=${link}>${title}</a></h1><p>${summary}</p></article>`; //apostrophes changed to backticks Error #3
         podList.insertAdjacentHTML("beforeEnd", article)
      }
   })
   .catch(e => console.log(e))
}

