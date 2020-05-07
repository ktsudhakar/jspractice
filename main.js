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


var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
  text += arr[i] + "<br>"
}

var myNumber = 2; 
var txt = "";
while (myNumber != Infinity) {
myNumber = myNumber * myNumber;
txt = txt + myNumber + "<br>";
}


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