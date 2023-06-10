// ..............................Asignment-35-38...........................................................

// Task 1
// var currentDate = new Date();
// var currentDay = currentDate.getDate();
// var monthNames = [
//   "January", "February", "March", "April", "May", "June", 
//   "July", "August", "September", "October", "November", "December"
// ];
// var currentMonth = monthNames[currentDate.getMonth()];
// var currentYear = currentDate.getFullYear();
// alert("Current Date: " + currentMonth + " " + currentDay + ", " + currentYear);
  


// Task 2
// function greetUser(firstName, lastName) {
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome!");}
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// greetUser(firstName, lastName);
  


// Task 3
// function addNumbers() {
// var number1 = prompt("Enter the first number:");
// var number2 = prompt("Enter the second number:");
// var sum = number1 + number2;
// return sum;}
// var result = addNumbers();
// alert("The sum of the two numbers is: " + result);
  


// Task 4
// function calculator(num1, num2, operator) {
// var result;
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         return "Invalid operator";
//     }
// document.write("<h2>Calculator Result</h2>");
// document.write("<p>" + num1 + " " + operator + " " + num2 + " = " + result + "</p>");
// return result;}
//     var number1 = prompt("Enter the first number:");
//     var number2 = prompt("Enter the second number:");
//     var operator = prompt("Enter the operator (+, -, *, /):");
//     var result = calculator(number1, number2, operator);
  


// Task 5
// function squareNumber(number) {
//     var squared = number * number;
//     return squared;}
//     var input = prompt("Enter a number:");
//     var result = squareNumber(input);
//     alert("The square of " + input + " is: " + result);



// Task 6
// function computeFactorial(number) {
//     if (number === 0) {
//       return 1;}
//     return number * computeFactorial(number - 1);}
//   var input = prompt("Enter a number:");
//   var result = computeFactorial(input);
//   alert("The factorial of " + input + " is: " + result);
  


// Task 7
// function display(start, end) {
//     document.write("<h2>Counting</h2>");
//     for (var i = start; i <= end; i++) {
//       document.write("<p>" + i + "</p>");}}
//   var startNumber = prompt("Enter the start number:");
//   var endNumber = prompt("Enter the end number:");
//   document.write(startNumber, endNumber);
  


// Task 8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//       return number * number;}
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
//     return hypotenuse;}
//   var baseLength = prompt("Enter the length of the base:");
//   var perpendicularLength = prompt("Enter the length of the perpendicular:");
//   var hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
//   document.write("The hypotenuse of the right-angle triangle is: " + hypotenuse);
  


// Task 9
// function calculateRectangleArea(width, height) {
// var area = width * height;
// return area;}
// var width = 10;
// var height = 5;
// var area2 = calculateRectangleArea(width, height);
// document.write("Area of Rectangle : " + area2);
  
  

// Task 11
// var userInput = prompt("Enter your input:");
// var titleCaseInput = toTitleCase(userInput);
// {document.write(" Strig: " + userInput);
// document.write("<br>Title case: " + titleCaseInput);}
// function toTitleCase(str) {
// var words = str.toLowerCase().split(" ");
// for (var i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);}
// var titleCaseStr = words.join(" ");
// return titleCaseStr;}

  

// Task 12
// function findLongestWord(str) {
//     var words = str.split(" ");
//     var longestWord = "";
//       for (var i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     } return longestWord;}
//   var input = prompt("Enter your input:");
//   var longestWord = findLongestWord(input);
//   document.write("String: " + input);
//   document.write("<br>Longest Word: " + longestWord);
  


// Task 13
// function Occur(string, letter) {
//     var count = 0;
//       for (var i = 0; i < string.length; i++) {
//       if (str[i] === letter) {count++;}}
//       return count;}
//   var inputString = 'js';
//   var inputLetter = 'o';
//   var occurrences = Occur(inputString, inputLetter);
//  document.write("Number of occurrences: " + occurrences);


// Task 14
// function calcCircumference(radius) {
//     var circumference = prompt("Enter any number")* Math.PI * radius;
//     document.write("The circumference is " + circumference.toFixed(2));
//   }
//   function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     document.write("<br>The area is " + area.toFixed(2));
//   }
//   var radius = ("Enter any number");
//   calcCircumference(radius);
//   calcArea(radius);
  
  
