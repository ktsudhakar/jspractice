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

function foo1()
{
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