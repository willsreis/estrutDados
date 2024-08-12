var num = 1; // {1}
num = 3; // {2}
var price = 1.5; // {3}
var myName = 'Packt'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}

console.log('num: ' + num);
 console.log('myName: ' + myName);
 console.log('trueValue: ' + trueValue);
 console.log('price: ' + price);
 console.log('nullVar: ' + nullVar);
 console.log('und: ' + und);




var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
var myVariable = 'local';
return myVariable;
}

function myOtherFunction() {
myOtherVariable = 'local';
return myOtherVariable;
}

console.log(myVariable); //{1} global
console.log(myFunction()); //{2}local
console.log(myVariable); // global
console.log(myOtherVariable); //{3} global
console.log(myOtherFunction()); //{4} local
console.log(myOtherVariable); //{5}local



