// Variables in JS
// var,let,const are keywords to define vars

var name = "Parry";
var channel = "CodeWithParry";
console.log(name, channel);

// Rules for creating js vars

// 1. cannot start with numbers
// 2. can start with letter,numbersm _ or $
// 3. are case sensitive

var city = "Delhi";
console.log(city);

const ownersName = "Parry Parry";
//ownersName = "Parry"; cant do it lol 
console.log(ownersName);

const fruit = "orange";

{
    let city = 'yavatmal';
    city = "Pune";
    console.log(city);
}
console.log(city);


// DATA TYPES

const arr1 = [12,13,45,46,78];
arr1.push(558);
console.log(arr1);

//  Most Common Programming case types:
// 1) camelCase 
// 2) kebab-case 
// 3) snake_Case
// 4) PascalCase