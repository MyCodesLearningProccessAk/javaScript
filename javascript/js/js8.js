console.log("iterative loops");

let a = 34;
console.log(a);
a += 1;
console.log(a);
a -= 2;
console.log(a);
a--;
console.log(a);
a++;
console.log(a);

for (let index = 0; index < 9; index++) {
  console.log(index);
}

let j = 1;
while (j < 10) {
  console.log(j + 1);
  j += 1;
}

let k = 0;
do {
  console.log(k);
  if (k === 0) {
    break;
  }
  k += 1;
} while (k < 10);

let arr= [2,3,4,5,6,7,8,9];

arr.forEach(function(element){
  console.log(element);
});

arr.forEach(function(element,index,array){
  console.log(element,index,array);
});

let obj = {
  name : "Rohan Daas",
  age: 78,
  type: "Parry Programmer",
  os: "Ubuntu"
}

for(let key in obj){
  console.log(`the ${key} of object is ${obj[key]}`)
}

for (const iterator of arr) {
  console.log(iterator);
}