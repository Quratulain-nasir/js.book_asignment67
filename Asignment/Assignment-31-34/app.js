// ..............................Asignment-31-34...........................................................

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
// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// var monthNames = [
//   "January", "February", "March", "April", "May", "June", 
//   "July", "August", "September", "October", "November", "December"
// ];
// var currentMonthName = monthNames[currentMonth];
// alert("Current Month: " + currentMonthName);



// Task 3
// var currentDate = new Date();
// var currentDay = currentDate.toLocaleString("en-us", { weekday: "short" });
// var firstThreeLetters = currentDay.substring(0, 3);
// alert("Today is " + firstThreeLetters);



// Task 4
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if (currentDay === 0 || currentDay === 6) {
// alert("It's Fun day");}



// Task 5
// var currentDate = new Date();
// if (currentDate.getDate() <= 15) {
// var message = "First fifteen days of the month";
// } else {
// var message = "Last days of the month";}
// document.write(message);


// Task 6
// var currentDate = new Date();
// var minutesSinceEpoch = Math.floor(currentDate.getTime() / (1000 * 60));
// var myVariable = minutesSinceEpoch;
// document.write("Current Date is : " + now.getDate()/60);



// Task 7
// var currentHour = new Date().getHours();
// if (currentHour < 12) {
//   alert("It's " + currentHour +  " AM");
// } else {
//   alert("It's" + currentHour +   " PM");}


// Task 8
// var lastDayOfMonth = new Date(2020, 11, 31);
// var laterDate = lastDayOfMonth;
// document.write(laterDate);


// Task 9
// var startDate = new Date(2015, 5, 18);
// var currentDate = new Date();
// var timeDiff = currentDate.getTime() - startDate.getTime();
// var daysPass = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
// document.write(`Number of days passed since 1st Ramadan: ${daysPass}`);


// Task 10
// var refDate = new Date(); 
// refDate.setFullYear(2015, 0, 1); 
// var secElapsed = Math.floor((refDate.getTime() - Date.parse('2015-01-01')) / 1000);
// document.write("On reference Set Date " + refDate + "<br>Seconds has passed since the beginning of 2015. ");



// Task 11
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write(" Current date :" + currentDate +"<br> 1 hour ago it was " + currentDate);


// Task 12
// var currentDate = new Date();
// var pastDate = new Date();
// pastDate.setFullYear(currentDate.getFullYear() - 100);
// document.write(" Current date :" + currentDate +"<br>100 years back from today is :  " + pastDate);


// Task 13
// var age = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write(" Your age is : " + age + "<br>Your birth year is: " + birthYear);


// Task 14
// var customerName = prompt("Enter customer name:");
// var currentMonth = prompt("Enter current month:");
// var numberOfUnits = prompt("Enter number of units consumed:");
// var chargesPerUnit = prompt("Enter charges per unit:");
// var latePaymentSurcharge = prompt("Enter late payment surcharge:");
// var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
// var grossAmountPayable = prompt(netAmountPayable) + latePaymentSurcharge;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Current Month: " + currentMonth + "<br>");
// document.write("Number of Units: " + numberOfUnits + "<br>");
// document.write("Charges per Unit: " + chargesPerUnit + "<br><br>");
// document.write("Net Amount Payable (within Due Date): " + netAmountPayable + "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable + "<br>");




