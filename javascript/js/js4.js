// Type conversion
let myVar;
let num = 34;
myVar = num;
console.log(myVar +" "+ typeof(myVar));
myVar = String(34);
console.log(myVar +" "+ typeof(myVar));

let boolean = true;
myVar = boolean;
console.log(myVar +" "+ typeof(myVar));

myVar = String(boolean);
console.log(myVar +" "+ typeof(myVar));;

let date = new Date();
myVar = date;
console.log(myVar +" "+ typeof(myVar));

myVar = String(date);
console.log(myVar +" "+ typeof(myVar));

let num1 = 85;
console.log(typeof(num1.toString()))

// other ways are parseFloat()  parseInt() Number() 
console.log(num.toFixed(3), (typeof num));

// Type Coercion

let mystr = "698";
let mynum = 34;

console.log(mystr + mynum)