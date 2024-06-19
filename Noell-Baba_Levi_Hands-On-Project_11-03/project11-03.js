"use strict";
/* Levi Noell-Baba, November 5, 2023, IST239-W01, Hands-on project 11-03
   
   In Hands-on exercise 11-03 the book is teaching us to complete an app that retrieves customer orders from a script named wworder.pl on the web server.
 */

let orderResult = document.getElementById("orderResult");
let userIDBox = document.getElementById("userID");
let pwdBox = document.getElementById("pwd");
// Retrieve order history when the View Orders button is clicked
viewOrders.onclick = function() {
   let user = userIDBox.value; //user and pwd variables declared with values equal to the value of the userIDBox and pwdBox elements
   let pwd = pwdBox.value;
   fetch(`wworders.pl?id=${user}&pwd=${pwd}`) //fetch method used to connect to wworders.pl?id=user&pwd=pwd where user is the value of the user variable and pwd is the value of the pwd variable
		.then(response => response.json()) //then() method to parse the JSON response object
		.then(json => buildOrderTable(json)) //then() mthod added to run the buildOrderTable() function using the json object as the parameter value
		.catch(error => console.log(error)); //error text written to the console log if the response is rejected
};
// Function to display order history within web tables
function buildOrderTable(obj) { //
	if (obj.status == "Orders Not Found") { //if else structure that tests whether obj.status is equal to "Orders Not Found".
		orderResult.innerHTML = "No orders found for this user id and password"; //if obj.status is equal to "Orders Not Found" inner HTML of the orderResult element changed to the text given.
	} else { //else statement that executes if obj.status is not equal to "Orders Not Found"
		let htmlCode = `<table id="summary"><tr><th>Name</th><td>${obj.username}</td>
						<tr><th>Total Charges</th><td>${obj.totalCharges}</td></tr></table>` //htmlCode variable declared and initial value set to the given text string where username is the value of obj.username and totalCharges is the value of obj.totalCharges.
		for (let orders of obj.orderHistory) { // for loop added to the else condition that loops through the contents of the obj.orderHistory array which creates a separate table for each order.
			htmlCode += `<table class="orderList"><tr><th colspan="2">${orders.orderDate}</th><th colspan="2">${orders.orderCost}</th></tr><tr><th>Description</th>
						<th>Qty</th><th>Price</th><th>Total</th></tr>`;// given text string added to the value of the htmlCode variable with each iteration of the loop. in the text string given date is the value of orderDate property for the current order in the orderHistory array and cost is the value of the orderCost property for the current order
			for (let items of orders.products){ //for loop nested that iterates through the contents of the products array for the current order and for each item in the products array. text string given added to the value of the htmlCode variable where description, qty, price, and total are the values of the description, qty, price, and total properties for the current item in the products array.
				htmlCode+= `<tr><td>${items.description}</td><td>${items.qty}</td><td>${items.price}</td><td>${items.total}</td></tr>`;
			}
			htmlCode+="</table>"; //text string "</table>" added to the htmlCode variable to close off the orderList table
		}
		orderResult.innerHTML = htmlCode; //value of the htmlCode variable wirtten as the inner HTML of the orderResult Element.
	}
}

