// Types

// Number

// console.log(10%5);
// console.log(Math.random());
// console.log(Math.PI);
// console.log(parseInt("10", 2) + 213);
// console.log(isNaN("Hello")); // True
// console.log(isNaN(1)); // False
// console.log(typeof +"10");


// String
// Sequences of Unicode characters
// console.log("Hello!");
// console.log("Super duper".length);
// console.log("Chris".charAt(0));
// console.log("Hello " + "world " + "!");
// console.log("i want to be uppercase".toUpperCase());

// Booleans
// var shouldBeTrue = true;
// var shouldBeNull = null;
// 
// console.log(shouldBeNull);
// 
// if (shouldBeNull === true){
//   console.log("Hello!");
// } else {
//   console.log("The var is not true!");
// }

// This  boolean evaluates to true
// var hasContent = "asdfasdfjklé";
// var myArray = ["1", "2", "3", "4"];

// This boolean evaluates to false
// var doesNotHaveContent = "";
// var isZero = 0;
// var nonAssignedVariable;
// var isFalse = false;
// var isNotANumber = NaN;
// 
// console.log(Boolean(hasContent)); // Boolean evaluates to true
// console.log(Boolean(doesNotHaveContent)); // Boolean evaluates to true
// console.log(Boolean(isZero)); // Boolean evaluates to true
// console.log(Boolean(nonAssignedVariable));
// console.log(Boolean(isNotANumber));
// console.log(Boolean(myArray));
// 
// var myObject = new Object();
// myObject['1'] = "Chris";
// myObject['2'] = "Sally";
// myObject['3'] = "Bob";
// console.log(myObject);
// 
// var myOtherObject = {
//   1: "Chris",
//   2: "Sally",
//   3: "Bob",
//   4: "Billy",
//   5: "Jane",
// };
// 
// myOtherObject['unique value'] = "Ashley";
// 
// console.log(myOtherObject);
// 
// var anotherObject = {
//   firstName: "Chris",
//   lastName: "Smith",
//   age: 50,
//   numbers: {
//     mobile: "555-1234",
//     home: "555-5555",
//   },
//   address: "123 Fake St.",
// };
// 
// console.log(anotherObject.numbers.mobile);

// var donut = {
//   type: "coconut",
//   glazed: true,
//   sweetness: 8,
//   hasChocolate: false,
//   sayType: function(){
//     return "Type: " + this.type.charAt(0).toUpperCase() + this.type.slice(1);
//   },
//   showSweetness: function(){
//     return "Sweetness (0-10): " + String(this.sweetness) + "/10";
//   },
// };
// 
// console.log(donut.sayType());
// console.log(donut.showSweetness());
// 
function donutConstructor(type, glazed, sweetness, hasChocolate){
   this.type = type;
   this.glazed = glazed;
   this.sweetness = sweetness;
   this.hasChocolate = hasChocolate;
   this.sayType = function(){
     return "Type: " + this.type.charAt(0).toUpperCase() + this.type.slice(1);
   };
   this.showSweetness = function(){
     return "Sweetness (0-10): " + String(this.sweetness) + "/10";
   };
   return this;
};
//  
// var donut = new donutConstructor('coconut', true, 8, false);
// console.log(donut.sayType());
// console.log(donut.showSweetness());
// let vanillaDonut = new donutConstructor('vanilla', true, 10, false);
// console.log(vanillaDonut.sayType());
// console.log(vanillaDonut.showSweetness());
// console.log(donut.type);
// donut.case = 'paper';
// 
// console.log(donut.case);
// if (donut.case){
//     console.log(donut.type + " has a case!");
// } else {
//     console.log(donut.type + " has no case!");
// }

var myArray = [1, 2, 3, "asdfjké", "asdfasdf", true, new donutConstructor('coconut', true, 8, false)];

var myNamesArray = ["Chris", "Jessica", "John", "Jane"];
var myOtherNames = ["Jake", "Amy", "Timmy"];
var myEvenMoreOtherNames = ["Pete", "Mary Jane"];
var concattedArray = myNamesArray.concat(myOtherNames, myEvenMoreOtherNames);
var slicedArray = concattedArray.slice(5, 7);

var joinedArray = concattedArray.join(" ");

var coconutDonut = new donutConstructor('coconut', true, 8, false);
var vanillaDonut = new donutConstructor('vanilla', true, 10, false);

var myDonuts = [coconutDonut, vanillaDonut];
var donutLength = myDonuts.length;
var lastDonut = myDonuts[donutLength - 1];
console.log(lastDonut.showSweetness());
