"use strict";
/* Levi Noell-Baba, October 15, 2023, IST239-W01, Hands-on project 08-03
   
   In Hands-on exercise 08-03 the book is teaching us to create objects and use object code to describe the contents of a pizza dn the contents of a shopping cart. 
 */

/*---------------- Object Code ----------------------*/

let cart = { //creation of an object named cart
	items: [], //empty array named items made
	addItem: function (foodItem) { //method named addItem(foodItem)
		this.items.push(foodItem);
	}
};

function Pizza() { //constructor function of pizza object class contianing size and crust property. toppings array also created as empty
	this.size = "";
	this.crust = "";
	this.toppings = [];
}

function Topping() { //contructor function for topping object class created containing the name and side property.
	this.name = "";
	this.side = "";
}

Pizza.prototype.addToCart = function (cart) { //assToCart(cart) method added to the pizza prototype that runs the command cart.items.push(this) to add the pizza to the items array of a shopping cart
	cart.items.push(this);
};

Pizza.prototype.summarize = function () { //added the summarize method to the pizza prototype to create a text string summarizing the content of the pizza
	let summary = "Pizza: " + this.size + " " + this.crust; //declaration of a variable named summary with the initial value of "Pizza"
		
	for (let i = 0; i < this.toppings.length; i++) { //for loop that iterates through the this.toppings array. for each item in the array add the topping.
		summary += " " + this.toppings[i].name + " (" + this.toppings[i].side + ")";
	}
	return summary;
};

Pizza.prototype.addTopping = function(topping) { //addTopping method added to the pizza prototype to send the toppings and pizza to the cart
	this.toppings.push(topping);
}









/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");         // pizza image 
let pizzaSizeBox = document.getElementById("pizzaSize");             // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust");           // pizza crust selection 
let toppingOptions = document.querySelectorAll("input.topping");     // pizza topping option buttons
let addToCart = document.getElementById("addToCart");                // Add to Cart button
let cartBox = document.getElementById("cart");                       // Shopping cart box


// Add event handlers for the pizza toppings   
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
} 

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the pizza image  */
function drawPizza() {
   // Erase current pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");  

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);                                  
      }
   }      
}



// Function to build the pizza
function buildPizza() { //
   
   let myPizza = new Pizza(); //created instance of a pizza object storing it in myPizza
   myPizza.size = pizzaSizeBox.value; //value of myPizza.size to pizzaSizeBox.value
   myPizza.crust = pizzaCrustBox.value; //value of myPizza.crust set to pizzaCustBox.value
   
   let checkedToppings = document.querySelectorAll("input.topping:checked"); 
   
   for (let i = 0; i < checkedToppings.length; i++) { //for loop created to add the selected toppings to the pizza. the for loop iterates through the contents of the checkedToppings node list
	   if (checkedToppings[i].value !== "none") { //if statement that checks if the value of a topping is not equal to none
		   let myTopping = new Topping(); //topping object used to create an instance named myTopping
		   myTopping.name = checkedToppings[i].name; //myTopping.nale set equal to checkedToppings[i].name
		   myTopping.side = checkedToppings[i].value; //myTopping.side set equal to checkedToppings[i].value
		   myPizza.addTopping(myTopping); //addtopping(mytopping) method applied to myPizza
	   }
   }
   return myPizza;
}    

// Function to add the built pizza to the shopping cart
function updateCart() { //function created to add the pizza to the shopping cart
	let myPizza = buildPizza(); //buildPizza() function run and stored in the myPizza variable
	cart.addItem(myPizza); //addItem(myPizza) method applied to the cart object
	console.log(cart); //console.log(cart) method run to write the contents of the cart object to the debugger console
	
	let paragraph = document.createElement("p"); //paragraph element created containing the value of summarize(myPizza)
	paragraph.textContent = myPizza.summarize();
	cartBox.appendChild(paragraph); //appendChild() method used to append the paragraph to the cartBox element
	
	clearPizzaImage(); //reset the page for the next pizza by running the clearPizzaImage() function followed by the clearToppings() function
	clearToppings();
}  
