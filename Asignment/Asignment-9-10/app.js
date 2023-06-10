// ..............................Asignment-9-10...........................................................

// Task 1
// var cityName = prompt("Enter the city name:");
// if (cityName.toLowerCase() === "karachi") 
// document.write("<h2>Welcome to the city of lights!</h2>");


// Task 2
// var gender = prompt("Enter your gender");
// if (gender ==="male") 
// {alert("Good Morning Sir");}
// else if(gender ==="female") 
// {alert("Good Morning Ma'am");}


// Task 3
// var color = prompt("Enter traffic signal color");
// if (color === "red") {
//   alert("Must Stop");
// } else if (color  === "green") {
//   alert("Move Now")
// } else if (color  === "Yellow") {
//   alert("Ready to  Move");
// }


// Task 4
// var liter = prompt(" tell me remaining fuel in your car");
// if (liter < 0.25) 
//   {alert("Please refill the fuel in your car")} 
// else {alert("No Need to refill Fuel is sufficient");}



// Task 5
// a
// var a = 4;
// if (++a === 5) 
// {alert("given condition for variable a is true");}

// //b
// var b = 82;
// if (b++ === 83) 
// {alert("given condition for variable b is true");}

// // c
// var c = 12;
// if (c++ === 13) 
// {alert("condition 1 is true");}
// if (c === 13) 
// {alert("condition 2 is true");}
// if (++c < 14) 
// {alert("condition 3 is true");}
// if (c === 14) 
// {alert("condition 4 is true");}

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) 
// {alert("The cost equals");}

// // e
// if (true) 
// {alert("True");}
// if (false) 
// {  alert("False");}

// // f
// if ("car" < "cat") 
// { alert("car is smaller than cat");}


// Task 6
// function calculateGrade(marksObtained, totalMarks) {
// var percentage = (marksObtained / totalMarks) * 100;
// var grade, remark;
// if (percentage >= 80) {
// grade = "A+";
// remark = "Excellent";
// } else if (percentage >= 70) {
// grade = "A";
// remark = "Good";
// } else if (percentage >= 60) {
// grade = "B";
// remark = "Need to Improve";
// } else if (percentage >= 50) {
// grade = "C";
// remark = "Fail";}
// return { percentage, grade, remark };
// }
// var marks1 = prompt('Enter marks obtained in subject 1:');
// var marks2 = prompt('Enter marks obtained in subject 2:');
// var marks3 = prompt('Enter marks obtained in subject 3:');
// var totalMarks = marks1 + marks2 + marks3;
// var result = calculateGrade(marks1 + marks2 + marks3, totalMarks);
// document.write('<h1>Marks Sheet</h1>');
// document.write('Total Marks: ' + totalMarks + '<br>');
// document.write('Marks Obtained: ' + (marks1 + marks2 + marks3) + '<br>');
// document.write('Percentage: ' + result.percentage.toFixed(2) + '%<br>');
// document.write('Grade: ' + result.grade + '<br>');
// document.write('Remarks: ' + result.remark + '<br>');


// Task 7
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = prompt("Guess the secret number (between 1 and 10):");
// if (userGuess === secretNumber) {
// document.write("<h3>Bingo! Correct answer.</h3>");
// } else if (userGuess === secretNumber + 1) {
// document.write("<h3>Close enough to the correct answer.</h3>");
// } else {
// document.write("<h3>Sorry, that's not the correct answer. " + ".</h3>");}


// Task 8
// var number = prompt("Enter a number:");
// if (number % 3 === 0) {
//   document.write("<h3>The number " + number + " is divisible by 3.</h3>");
// } else {
//   document.write("<h3>The number " + number + " is not divisible by 3.</h3>");
// }


// Task 9
// var number = +prompt("Enter a number:");
// if (number % 2 === 0) {
//   document.write("<h3>The number " + number + " is even.</h3>");
// } else {
//   document.write("<h3>The number " + number + " is odd.</h3>");
// }


// Task 10
// var temperature = prompt("Enter the temperarure");
// if (temperature > 40) {
//     document.write("<h3>It is too hot outside.</h3>");
//   } else if (temperature > 30) {
//     document.write("<h3>The weather today is normal.</h3>");
//   } else if (temperature > 20) {
//     document.write("<h3>Today's weather is cool.</h3>");
//   } else if (temperature > 10) {
//     document.write("<h3>OMG! Today's weather is so cool.</h3>");
//   } else {
//     document.write("<h3>It is extremely cold outside.</h3>");
//   }


// Task 11
//  var firstNumber = prompt("Enter the first number:");
//  var secondNumber = prompt("Enter the second number:");
//  var operation = prompt("Enter the operation (+, -, *, /, %):");
//  var result;
//  if (operation === "+") {
//  result = firstNumber + secondNumber;
//  } else if (operation === "-") {
//  result = firstNumber - secondNumber;
//  } else if (operation === "*") {
//  result = firstNumber * secondNumber;
//  } else if (operation === "/") {
//  result = firstNumber / secondNumber;
//  } else if (operation === "%") {
//  result = firstNumber % secondNumber;
//  } else {
//  document.write("<h3>Invalid operation.</h3>");
//  throw new Error("Invalid operation.");
//  }
//  document.write("<h3>The calculated result is: " + result + "</h3>");



