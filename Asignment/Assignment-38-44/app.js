// // ..............................Asignment-38-44...........................................................

// // Task 1
// function power(a, b) {
// var result = 1;
// for (var i = 0; i < b; i++) {
// result *= a;}
// return result;}
// var base = prompt("Enter the base number:");
// var exponent = prompt("Enter the exponent:");
// var result = power(base, exponent);
// document.write(base + " raised to the power of " + exponent + " is:", result);
  
  
 
// Task2
// prompt("Enter any year")
// function leapYear(y){
// if(y%4===0 && (y%100!==0 ||y % 400 == 0)){
// document.write(y + " is leap year")
// }else{document.write(y + " is not a leap year")}}
// leapYear(2020)


// Task3
// function Area(a, b, c) {
//   var s = calculateSP(a, b, c);
//   var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }
// function calculateSP(a, b, c) {
//   var s = (a + b + c) / 2;
//   return s;
// }
// var A = 3;
// var B = 4;
// var C = 5;
// var area = Area(A, B, C);
// document.write("The area of the triangle is " + area);


// Task 4
// function calculateAverage(subject1, subject2, subject3) {
//   var totalMarks = subject1 + subject2 + subject3;
//   var average = totalMarks / 3;
//   return average;
// }
// function calculatePercentage(subject1, subject2, subject3) {
//   var totalMarks = subject1 + subject2 + subject3;
//   var totalPossibleMarks = 300; // Assuming each subject has 100 marks
//   var percentage = (totalMarks / totalPossibleMarks) * 100;
//   return percentage;
// }
// function mainFunction(subject1, subject2, subject3) {
//   var average = calculateAverage(subject1, subject2, subject3);
//   var percentage = calculatePercentage(subject1, subject2, subject3);
//   document.write('<h1>Marks Sheet</h1>');
//   document.write('Total Marks: ' + (subject1 + subject2 + subject3) + '<br>');
//   document.write('Marks Obtained: ' + (subject1 + subject2 + subject3) + '<br>');
//   document.write('Average: ' + average + '<br>');
//   document.write('Percentage: ' + percentage + '%<br>');
// }
// var marksSubject1 = prompt('Enter marks obtained in subject 1:');
// var marksSubject2 = prompt('Enter marks obtained in subject 2:');
// var marksSubject3 = prompt('Enter marks obtained in subject 3:');
// mainFunction(marksSubject1, marksSubject2, marksSubject3);



//  Task 5
// function Index(str, char) {
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;}}
//   return -1;}
// var inputString = prompt("Enter a string:");
// var searchChar = prompt("Enter a character to search:");
// var index = Index(inputString, searchChar);
// if (index !== -1) {
//   alert("The character '" + searchChar + "' is found at index: " + index);
// } else {
//   alert("The character '" + searchChar + "' is not found in the string.");
// }




// Task6
// function Vowels(sentence) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   var result = '';
//   for (var i = 0; i < sentence.length; i++) {
//     var char = sentence[i].toLowerCase();
//     if (vowels.indexOf(char) === -1) {
//       result += sentence[i];
//     }}return result;s}
// var inputSentence = prompt("Enter a sentence (not more than 25 characters):");
// var modifiedSentence = Vowels(inputSentence);
// alert("Modified sentence: " + modifiedSentence);



// Task 8
// function convertToMeters(kilometers) {
//   return kilometers * 1000;
// }
// function convertToFeet(kilometers) {
//   return kilometers * 3280.84;
// }
// function convertToInches(kilometers) {
//   return kilometers * 39370.1;
// }
// function convertToCentimeters(kilometers) {
//   return kilometers * 100000;
// }
// var distanceInKilometers = prompt("Enter the distance between two cities in kilometers:");
// var distanceInMeters = convertToMeters(distanceInKilometers);
// var distanceInFeet = convertToFeet(distanceInKilometers);
// var distanceInInches = convertToInches(distanceInKilometers);
// var distanceInCentimeters = convertToCentimeters(distanceInKilometers);
// document.write("Distance in meters: " + distanceInMeters);
// document.write("Distance in feet: " + distanceInFeet);
// document.write("Distance in inches: " + distanceInInches);
// document.write("Distance in centimeters: " + distanceInCentimeters);



// Task 9
// function calOvertime(hoursWorked) {
//   var regularHours = 40;
//   var overtimeRate = 12.00;
//   var overtimePay = 0;
//   if (hoursWorked > regularHours) {
//     var overtimeHours = hoursWorked - regularHours;
//     overtimePay = overtimeHours * overtimeRate;}
//   return overtimePay;}
// var hoursWorked = prompt("Enter the number of hours worked:");
// var overtimePay = calOvertime(hoursWorked);
// document.write("Overtime Pay: Rs. " + overtimePay);



// Task 10
// function Currency(amountInHundreds) {
//   var note100 = Math.floor(amountInHundreds);
//   var remainingAmount = amountInHundreds - note100;
//   var note50 = Math.floor(remainingAmount / 0.5);
//   remainingAmount -= note50 * 0.5;
//   var note10 = Math.floor(remainingAmount / 0.1);
//   return {
//     note100: note100,
//     note50: note50,
//     note10: note10
//   };}
// var amountInHundreds = prompt("Enter the amount to be withdrawn in hundreds:");
// var currencyNotes = Currency(amountInHundreds);
// document.write("Number of 100 notes: " + currencyNotes.note100);
// document.write("<br>Number of 50 notes: " + currencyNotes.note50);
// document.write("<br>Number of 10 notes: " + currencyNotes.note10);

