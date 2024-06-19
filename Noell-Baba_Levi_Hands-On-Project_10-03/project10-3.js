"use strict";
/* Levi Noell-Baba, October 29, 2023, IST239-W01, Hands-on project 10-03
   
   In Hands-on exercise 10-03 the book is teaching us to use a Google cloud account with an API key allow location services to be used on a webpage. 
 */


function showMap() {
   
   // Page objects
   let bikeMap = document.getElementById("bikeMap");
   let bikeDirections = document.getElementById("bikeDirections");
   let startingPoint = document.getElementById("startingPoint");
   let endingPoint = document.getElementById("endingPoint");   
   let bikeFind = new google.maps.DirectionsService(); //google.maps.DirectionsService() object constructor used to create a DirectionsService object named bikeFind
   let bikeDraw = new google.maps.DirectionsRenderer(); //google.maps.DirectionsRenderer() object constructor used to create a DirectionsRenderer object named bikeDraw
   let Boulder = new google.maps.LatLng(40.01753, -105.26496); //LatLng object named Boulder created and stored it within a latitude of 40.01753 and longitude of -105.26496
   let myMap = new google.maps.Map(bikeMap, { //google.maps.Map() object constructor used to instantiate a new google map named myMap.
	   zoom: 12, //zoom level set to 12
	   center: Boulder //center of the map set to boulder
   });
   
   startingPoint.addEventListener("change", drawRoute); //event listeners for startingPoint and endingPoint selection lists created running the drawRoute() function in response to the change event
   endingPoint.addEventListener("change", drawRoute);
   
   function drawRoute() { //Creation of the drawRoute function
	   if(startingPoint.selectedIndex !== 0 && endingPoint.selectedIndex !== 0) { //if statement that tests whether the selected index for the startingPoint and endingPoint selection lists are both not equal to 0
		   let bikeRoute = { //bikeRoute defined with an origin at startingPoint.value and a destination at endingPoint.value
			   origin: startingPoint.value,
			   destination: endingPoint.value,
			   travelMode: "BICYCLING" //travelMode option set to BICYCLING
		   }
		   bikeFind.route(bikeRoute, function (response, status) { //route() method applied to the bikeFInd object generating directions between the starting and ending points
			   if(status == "OK") { //if statement that executes if the request is "OK" then applies the setDirections() method to bikeDraw object to request directions from the directions service.
				   bikeDraw.setDirections(response);
				   bikeDraw.setMap(myMap); //setMap() method applied to bikeDraw to display the route within myMap
				   bikeDraw.setPanel(bikeDirections); //setPanel() method applied to bikeDraw to display the turn-by-turn directions within the bikeDirections object.
			   } else { //else statement that executes if the request is not equal to "OK"
				   bikeDirections.textContent = "Directions Unavailable:" + status; //text content of the bikeDirections object changed to "Directions Unavaliable: status".
			   }
		   });
	   }
   }
} 


