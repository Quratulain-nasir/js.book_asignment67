// ..............................Asignment-21-25...........................................................

// Task 1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + " Welcome!");


// Task 2
// var phoneModel = prompt("Enter your favorite mobile phone model:");
// var inputLength = phoneModel.length;
// document.write("My favorite Phone is  " + phoneModel + "<br> length of String : " + inputLength +"<br>");


// Task 3
// var word = "Pakistani";
// var targetLetter = "7";
// var index = word.indexOf(targetLetter);
// {document.write(" String : " + word  + "<br>Index of 'n' : " + targetLetter );}



// Task 4
// var word = "Hello World";
// var targetLetter = "9";
// var lastIndex = word.lastIndexOf(targetLetter);
// {document.write(" String : " + word  + "<br>Index of '1' : " + targetLetter );}


// Task 5
// var word = "Pakistani";
// var index = "i";  
// var character = word.charAt(index);
// {document.write("String :  " + word + "<br>Character at index 3 : " + index);}


// Task 6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "!");



// Task 7
// var word = "Hyderabad";
// var substringToReplace = "Hyderabad";
// var replacement = "Islamabad";
// var newWord = word.replace(substringToReplace, replacement);
// {document.write("City : " + word + "<br>");
// document.write("After Replacement : " + newWord);}


// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var modifiedMessage = message.replace(/and/g, "&");
// document.write("Previous message: " + message + "<br>");
// document.write("var message: " + modifiedMessage);



// Task 9
// var String = "472";
// var number = Number(String);
// {document.write("Value: " + String + "<br>");
// document.write("Type: " + typeof String + "<br>");
// document.write("Value: " + number + "<br>");
// document.write("Type: " + typeof number);}



// Task 10
// var userInput = prompt("Enter your input:");
// var capitalizedInput = userInput.toUpperCase();{
// document.write("User Input: " + userInput);
// document.write("<br> Upper Case: " + capitalizedInput);}


// Task 11
// var userInput = prompt("Enter your input:");
// var titleCaseInput = toTitleCase(userInput);
// {document.write(" User Input: " + userInput);
// document.write("<br>Title Case: " + titleCaseInput);}
// function toTitleCase(str) {
// var words = str.toLowerCase().split(" ");
// for (var i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);}
// var titleCaseStr = words.join(" ");
// return titleCaseStr;}


// Task 12
// var num = prompt("Enter anynumber in point");
// var numAsString = num.toString().replace(".", "");
// document.write("Number : " + num + "<br>Result : " + numAsString);


// Task 13
// var password = prompt("Enter your password:");
// var isValid = checkPasswordRequirements(password);
// while (!isValid) {password = prompt("Please enter a valid password:\n- It should contain alphabets and numbers\n- It should not start with a number\n- It must be at least 6 characters long");
// isValid = checkPasswordRequirements(password);};
// {document.write("Password: " + password);}
// function checkPasswordRequirements(password) {
// var containsAlphabets = /[a-zA-Z]/.test(password);
// var containsNumbers = /[0-9]/.test(password);
// var startsWithLetter = isNaN(parseInt(password[0]));
// var isLongEnough = password.length >= 6;
// return containsAlphabets && containsNumbers && startsWithLetter && isLongEnough;}


// Task 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// var isItemFound = false;
// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     isItemFound = true;
//     break;
//   }
// }
// if (isItemFound) {
//   alert("Yes, the item is found in the list!");
// } else {
//   alert("No, the item is not found in the list.");
// }


// Task 15
// var password = prompt("Enter a password:");
// function isPasswordValid(password) {
//   var containsAlphabet = /[a-zA-Z]/.test(password);
//   var containsNumber = /[0-9]/.test(password);
//   var startsWithNumber = /^[0-9]/.test(password);
//   var isLengthValid = password.length >= 6;
//   return containsAlphabet && containsNumber && !startsWithNumber && isLengthValid;}
// if (isPasswordValid(password)) {
//   alert("Password is valid!");
// } else {
//   alert("Please enter a valid password.");
// }


// Task 16
// var university = "U<br>n<br>i<br>v<br>e<br>r<br>s<br>i<br>t<br>y<br><br> o<br>f<br><br> K<br>a<br>r<br>a<br>c<br>h<br>i<br>";
// var universityArray = university.split(" ");
// {document.write( university + "<br>");
// }

// Task 17
// var userInput = prompt("Enter your input:");
// var lastCharacter = userInput[userInput.length - 1];
// {document.write("User Input:"+ userInput+ "<br>Last character of Input: " + lastCharacter);}


// Task 18
// var sentence = "The quick brown fox jumps over the lazy dog";
// var wordToCount = "the";
// var lowercaseSentence = sentence.toLowerCase();
// var lowercaseWord = wordToCount.toLowerCase();
// var words = lowercaseSentence.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
// if (words[i] === lowercaseWord) {count++;}};
// {document.write("Text : The quick brown fox jump over the lazy dog." + "<br>There are two occurrences of the " + wordToCount + ": " + count);}
