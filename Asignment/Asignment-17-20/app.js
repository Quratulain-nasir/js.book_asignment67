// ..............................Asignment-17-20...........................................................

// Task 1
// var multiply = [];


// Task 2
// num0 = [0,1,2,3]
// num1 = [1,0,1,2]
// num2 = [2,1,0,1]
// document.write(num0 +"<br/>"+num1 +"<br/>"+num2+"<br/>")


// Task 3
// for (var i = 1; i <= 10; i++){
//     document.write(i+"<br/>")
// }


// Task 4
// var table = +prompt("Enter a number  to show its multiplication table");
// var length = +prompt("Enter Multiplication table" );
// document.write("Multiplication Table of " + table +"<br/> length "+length+ "<br/>")
// for(var i = 1; i <= length; i++){
//     document.write(table+" x "+i+" = "+table*i+"<br/>")
// }


// Task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// document.write("apple <br>", "banana<br>", "mango<br>", "orange<br>", "strawberry<br><br>")
// var arr = fruits.length
// for(var i = 0; i <arr; i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br/>")
// }



// Task 6
// var num = [];
// var odd = [];
// var even = [];
// var series = [];
// var countingSeries = "";
// for (var i = 1; i <= 15; i++) {
//   countingSeries += i + ", ";
// }
// document.write("Counting:<br> " + countingSeries +"<br>");
// var reverseCountingSeries = "";
// for (var i = 10; i >= 1; i--) {
//   reverseCountingSeries += i + ", ";
// }
// document.write("Reverse counting:<br> " + reverseCountingSeries +"<br>");
// var evenSeries = "";
// for (var i = 0; i <= 20; i += 2) {
//   evenSeries += i + ", ";
// }
// document.write("Even: <br>" + evenSeries+"<br>");
// var oddSeries = "";
// for (var i = 1; i <= 19; i += 2) {
//   oddSeries += i + ", ";
// }
// document.write("Odd:<br> " + oddSeries +"<br>");
// var series = "";
// for (var i = 1; i <= 10; i++) {
//   series += 2 * i + "k, ";
// }
// document.write("Series:<br> " + series+"<br>");



// Task 7
// var a = ["cake","apple pie","cookie","chips","patties"]
// var user = prompt("Welcome to ABC Bakery what do you want to order sir/ma'am")
// var b = a.indexOf(user)
// if(b<0){
//     alert("we are sorry"+user+"is not available in our bakery")}
// else{
//     alert(user+"is available at index "+b+" in our bakery")}



// Task 8
// var arr = [24,53,78,91,12];
// var max = Math.max.apply(Math,arr)
// var min = Math.min.apply(Math,arr)
// console.log(max , min)
// document.write("Array items: "+arr+"<br/> The largest number is " +max+"<br/>")


// Task 9
// var arr = [24,53,78,91,12];
// var max = Math.max.apply(Math,arr)
// var min = Math.min.apply(Math,arr)
// console.log(max , min)
// document.write("Array items: "+arr+"<br/> The samllest number is " +min+"<br/>")



// Task 10
// for(var i = 1; i<=100; i++){
//     if(i%5 === 0)
//     {document.write(i+" ,")}}