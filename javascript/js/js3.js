// DATA TYPES
//  Data types in js
// Data types  whatItInclude TypeOfStorage
//  primitive data type has string,numbers,boolean,null,undefiend,symbol (stack)
//  Refernce data type Arrays, Object ,Literals ,functions ,dates  (Heap)

// String
var name = "Parry";
console.log("Where is My " + name);
console.log("Data Type is " + typeof name);

// Number
let marks = 34;
console.log("Data Type is " + typeof marks);

// Boolean
let isDriver = true;
console.log("Data Type is " + typeof isDriver);

// Null
let nullVar = null;
console.log("Data Type is " + typeof nullVar);

// Undefined
let undef = undefined;
console.log("Data Type is " + typeof undef);


// Refernce Data Types


// Arrays
let myArr = [1,2,3,4,5,6,7,8,9,"LOLOLOLOLOLOLOLOL",true,false]
console.log(typeof(myArr));

// Object literals
let stMarks = {
    Parry:34,
    Qarry:38,
    Sarry:36,
    Tarry:35,
    Uarry:34,
    Varry: 90,
}
console.log(stMarks);

function findName(params) {
    
}
console.log(typeof(findName));

let date = new Date();
console.log(typeof(date));
