/* Levi Noell-Baba, September 03, 2023, IST239-W01, Hands-on project 02-01
   
   In Hands-on exercise 02-01 the book is teaching us to use event handlers to handle user input to execute designated functions
 */

	function FahrenheitToCelsius(degree){ //creation of function FahrenheitToCelsius that contains the calculations used to get the correct temperature
		return (degree-32)/1.8;
	}

	function CelsiusToFahrenheit(degree){ //creation of function CelsiusToFahrenheit that contains the calculations used to get the correct temperature
		return degree*1.8 + 32;
	}

	document.getElementById("cValue").onchange = function() { //onchange event handler that detects whether the tab button has been pressed by user to trigger anonymous function and start the conversion functions
		var cDegree = this.value;
		document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
	}
	
	document.getElementById("fValue").onchange = function() { //onchange event handler that detects whether the tab button has been pressed by user to trigger anonymous function and start the conversion functions
		var cDegree = this.value;
		document.getElementById("cValue").value = FahrenheitToCelsius(cDegree);
	}