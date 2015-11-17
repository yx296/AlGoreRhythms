// function setLocation(city) {
//   var country = "France"; 

//   function printLocation() {       
//     console.log("You are in " + city + ", " + country);  
//   }

//   return printLocation;
// }

// //A closure can refer to an inner function that is able to remember
// // its surronding scope(outer functions) even when it is executed outside its lexical scope


// //value of currentLocation is the inner printLocation() function
// var currentLocation = setLocation ("Paris");   
// console.log(currentLocation);
// // currentLocation();   // output: You are in Paris, France



function cityLocation() {
  var city = "Paris";

  return {
    get: function() { console.log(city); },  
    set: function(newCity) { city = newCity; }
  };
}

var myLocation = cityLocation();

console.log(myLocation);
// myLocation.get();           // output: Paris
// myLocation.set('Sydney');
// myLocation.get();           // output: Sydney



