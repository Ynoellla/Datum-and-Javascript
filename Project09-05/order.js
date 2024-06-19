"use strict";
/* Levi Noell-Baba, October 17, 2023, IST239-W01, Hands-on project 09-05
   
   In Hands-on exercise 09-05 the book is teaching us to correctly detect and correct errors in code.
 */

// Page Objects
let submitButton = document.getElementById("submitButton");
let product = document.getElementById("product");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let size = document.getElementById("size");
let color = document.getElementById("color");

submitButton.onclick = function() {
   let itemTotal;
   // Increase the total items in the shopping cart by 1
   if (sessionStorage.getItem("itemsInCart")) { //quotations added around itemsInCart Error #1
      itemTotal = parseInt(sessionStorage.getItem("itemsInCart")) + 1; //quotations added around itemsInCart Error #2
   } else {
      itemTotal = 1;
   }
   
   // Store the number of items in the shopping cart
   sessionStorage.setItem("itemsInCart", itemTotal); //quotation marks added around itemsInCart Error #3
   
   // Create a text string describing the product added to the cart
   let itemText = product.value + " & "; //added spaces around & Error #4
   itemText += price.value + " & "; //added spaces around & Error #5
   itemText += quantity.value + " & "; //added spaces around & Error #6
   itemText += size.value + " & "; //added spaces around & Error #7
   itemText += color.value;

   // Create a new shopping cart storage item with the key name "cartItem" plus the item number
   sessionStorage.setItem("cartItem" + itemTotal, itemText); //sessionStorage.set changed to sessionStorage.setItem Error #8
   
}