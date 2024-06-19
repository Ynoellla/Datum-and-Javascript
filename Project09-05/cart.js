"use strict";
/* Levi Noell-Baba, October 17, 2023, IST239-W01, Hands-on project 09-05
   
   In Hands-on exercise 09-05 the book is teaching us to correctly detect and correct errors in code.
 */

// Page Objects
let cartContainer = document.getElementById("cartContainer");

window.addEventListener("load", displayCart);

// Function to construct the table containing items placed in the shopping cart
function displayCart() {
   
   // Check that there are items in the shopping cart
   if (sessionStorage.getItem("itemsInCart")) { //get changed to getItem and added quotations around itemsInCart Error #1 & 2
      let itemTotal = sessionStorage.getItem("itemsInCart"); //Same corrections as above Errors #3 & 4
      
      // Create the code for the table and the table header
      let cartTable = document.createElement("table");
      cartTable.id = "cartTable";
      let tableHeader = `<tr><th>Product</th><th>Description</th><th>Qty</th><th>Price</th>`;
      cartTable.innerHTML = tableHeader;
      
      // For each item in the shopping cart, write a table row
      for (let i = 1; i <= itemTotal; i++) {
         
         // Retrieve information about a product added to the cart
         let productArr = sessionStorage.getItem("cartItem" + i).split(" & "); //session.getItem changed to sessionStorage.getItem and ; split changed to & Error #5 & 6
         let newRow = document.createElement("tr");
         
         // Display the name of the product
         let productCell = document.createElement("td");
         productCell.textContent = productArr[0];
         newRow.appendChild(productCell);
         
         // Display a description of the product (size and color)
         let descriptionCell = document.createElement("td");
         descriptionCell.textContent = productArr[3] + ", " + productArr[4];
         newRow.appendChild(descriptionCell);
         
         // Display the quantity ordered
         let qtyCell = document.createElement("td");
         qtyCell.textContent = productArr[2];
         newRow.appendChild(qtyCell); 
         
         // Display the price of the item
         let priceCell = document.createElement("td");
         priceCell.textContent = productArr[1];
         newRow.appendChild(priceCell); 
         
         cartTable.appendChild(newRow);
      }
      
      cartContainer.appendChild(cartTable);
   }
}