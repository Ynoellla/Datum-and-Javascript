/* Levi Noell-Baba, September 10, 2023, IST239-W01, Hands-on project 03-01
   
   In Hands-on exercise 03-01 the book is teaching us how to use a for loop and an if statement to calculate the total cost of items as they are selected. 
 */





 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 //declaring the variable menuItems
 var menuItems = document.getElementsByClassName("menuItem");
 //for loop that loops through the menuItems with a counter variable that increases by an increment of 1. event listener included to detect when an item is selected to add to total cost. 
for (var i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener("click", calcTotal);
}
//calcTotal function that calculates the total cost of the customer order. initial value set to 0 and a for loop that loops through the menuItems that detects if the item is selected using an if statement. if true, it increases the value of the order total.
function calcTotal() {
	var orderTotal = 0;
	
	for (var i = 0; i < menuItems.length; i++) {
		if (menuItems[i].checked) {
			orderTotal += parseFloat(menuItems[i].value);
		}
	}
	var billTotalElement = document.getElementById("billTotal");
	billTotalElement.innerHTML = formatCurrency(orderTotal);
}