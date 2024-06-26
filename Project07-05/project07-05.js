"use strict";
/* Levi Noell-Baba, October 05, 2023, IST239-W01, Hands-on project 07-05
   
   In Hands-on exercise 07-05 the book is teaching us to correctly detect and correct errors in code.
 */

// Onchange event handler to load an external file for author 1
document.getElementById("button1").onchange = function() {
   // Retrieve the selected file for author 1
   let file = this.files[0]; //this.file changed to this.files Error #1
   let doc = document.getElementById("document1");
   let count = document.getElementById("count1");
   
   // Generate the word frequency table for author 1
   generateWordFreq(file, doc, count);
};

// Onchange event handler to load an external file for author 2
document.getElementById("button2").onchange = function() {
   // Retrieve the selected file for author 2
   let file = this.files[0]; //this.file changed to this.files Error #2
   let doc = document.getElementById("document2");
   let count = document.getElementById("count2");
   
   // Generate the word frequency table for author 2
   generateWordFreq(file, doc, count);
};


// Function that generates a table of frequencies for words
// of 1 to 15 characters in length

function generateWordFreq(inputFile, outputDoc, outputCount) {
   // Read the contents of the selected file
   let fr = new FileReader(); //new Reader() changed to new FileReader() Error #3
   fr.readAsText(inputFile); //fr.read(inputFile) changed to fr.readAsText(inputFile) Error #4

   // Once the file has finished loading, display the document in the page
   fr.onload=function() { 
      outputDoc.innerHTML = fr.result;
      
      // Store the text content of the output document
      let sourceText = outputDoc.textContent; //changed to outputDoc.textContent Error #9
      
      // Remove any character that is not alphabetic or whitespace
      let alphaRegx = /[^a-zA-Z\s]/g; //Removed quotation marks Error #5
      sourceText = sourceText.replace(alphaRegx, "");  //added space in the quotation marks Error#7

      // Split the text into an array at each occurence of one or more whitespace characters
      let words = sourceText.split(/\s+/);

      // Initial frequency array for words of 1 to 15 characters in length
      // Setting their initial counts to 0.
      let freqs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      // Loop through every word in the words array
      for (let i = 0; i < words.length; i++) { //changed <= to < Error #6
         
         // If a word has 15 or more characters, add it to the count
         // of words in the array with index 15
         if (words[i].length >= 15) {
            freqs[15]++;
         } else {
            // Add to the count of words of length i by increasing
            // the value of the ith entry in the freqs array
            freqs[words[i].length]++;
         }
      }

      // Store the total number of words in the sample text
      let totalWords = words.length;
      
      // Loop through the 15 entries in the freqs array
      // Ignore the 0th index, since we don't count words of 0 length
      let outputPara = outputCount.getElementsByTagName("p");
      for (let i = 1; i <= 15; i++) {
         // Calculate the percent of words of each length
         // Display the frequency to 1 decimal place
         let percent = ((freqs[i] / totalWords) *100).toFixed(1)+"%" //fixed calculation Error #8
         outputPara[i - 1].textContent = percent;
      }      
      
   } 
   
}