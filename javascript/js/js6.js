console.log("Arrays");

let marks = [12,125,1215,1543];
const fruits = ['Orange','Apple','Pineapple'];
const mixed = ['str',89,[3,5]];
const arr = new Array(23,123,21,'Orange');
console.log(arr.length);
console.log(fruits[1]);
console.log(mixed);
console.log(Array.isArray('dfdf'));
arr[0] = 'Parry';
let arrelement = arr[0];
console.log('element :',arrelement);
console.log(arr);


let value = marks.indexOf(73);
console.log(value);

// manuplating arrya or modifying array
// this methods will change original array value is not returned
marks.push(66); // element will be added at the end
marks.unshift(555); // will push at start
marks.pop(); // removes last value
marks.shift(); // remove value at 1st position
marks.reverse(); // will reverse array 
console.log(marks);

let marks2 = [1,2,3,4];
marks = marks.concat(marks2);
console.log(marks);
let myobj = {
    name:"Parry",
    channel: "codeWithParry",
    isActive: true,
    marks: [1,5,3,6]
}

let myobj2 = {
    name:"Parry",
    channel: "codeWithParry",
    isActive: true,
    marks: {
        maths: 54,
        history: 86,
        biology: 87,
        othersSubjects:{
            physics:87,
            chemistry:54,
            smcs:80
        }
    }
}

console.log(myobj);
console.log(myobj.marks);
console.log(myobj.isActive);

console.log(myobj2.marks.maths);

console.log(myobj['name'])