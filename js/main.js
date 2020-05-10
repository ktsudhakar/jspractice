console.log(Date());

//difference of undefined and null
console.log('typeof undefined -> ' + '' + typeof undefined); // undefined
console.log('typeof null -> ' + '' + typeof null); // object

//null === undefined
console.log(null === undefined); // false

//null == undefined
console.log(null == undefined); // true

// Array
var newVariable = ['Sudhakar', 'Surendar', 'Sara'];

console.log(newVariable);

newVariable.push('Apsara');

console.log(newVariable);

newVariable.pop();

console.log(newVariable);

console.log(newVariable.constructor);

console.log(newVariable.length);

//

var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
  text += arr[i] + "<br>"
}

//

var myNumber = 2; 
var txt = "";
while (myNumber != Infinity) {
myNumber = myNumber * myNumber;
txt = txt + myNumber + "<br>";
}

//

var fruits1, text1, fLen, i;
fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits1.length;

text1 = "<ul>";
for (i = 0; i < fLen; i++) {
  text1 += "<li>" + fruits1[i] + "</li>";
}
text1 += "</ul>";

document.getElementById("forloop").innerHTML = text1;

//

var fruits2, text2, fLen, i;
fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2[15] = "Lemon";

fLen = fruits2.length;
text2 = "<ul>";
for (i = 0; i < fLen; i++) {
  text2 += "<li>" + fruits2[i] + "</li>";
}
text2 += "</ul>";
document.getElementById("demo2").innerHTML = text2;

//

var fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("isArray").innerHTML = isArray(fruits3);

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

//

var fruits4 = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("pop1").innerHTML = fruits4;
document.getElementById("pop2").innerHTML = fruits4.pop();
document.getElementById("pop3").innerHTML = fruits4;

//

var fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("push1").innerHTML = fruits;
document.getElementById("push2").innerHTML = fruits.push("Kiwi");
document.getElementById("push3").innerHTML = fruits;

//

var cars = [
  {type:"Colvo", year:2016},
  {type:"Aaab", year:2001},
  {type:"BMW", year:2010}
];

function myFunction() {
  cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  displayCars();
}

function displayCars() {
  console.log (cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year);
}

myFunction();

var points = [40, 100, 1, 5, 25, 10];
console.log(points);
function test() {
  points.sort(function(a, b){return a - b});
}
test();
console.log(points);


var points = [40, 100, 1, 5, 25, 10];
console.log(myArrayMin(points));

function myArrayMin(arr) {
  var len = arr.length;
  var min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

//

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
console.log(txt);

function myFunction(value, index, array) {
  txt = txt + value + "<br>"; 
}

//

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

console.log(over18);

function myFunction(value, index, array) {
  return value > 18;
}

//

var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction1);
console.log(sum);

function myFunction1(total, value, index, array) {
  console.log(total, value, index, array);
  return total + value;
}

//

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

//

var date = new Date();
console.log(date);
console.log(date.getDate());
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[date.getMonth()]);

//

var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text);

//

var text;
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}

console.log(text);

//

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

console.log(text);

//

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}

console.log(text);

//

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}

//

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(isArray(fruits));

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

//

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(isArray(fruits));

function isArray(myArray) {
  return myArray.constructor === Array;
}

//

function foo1(){
  return {
      bar: "hello 1"
  };
}
console.log(foo1());

function foo2()
{
  return  {
      bar: "hello 2"
  };
}
console.log(foo2());