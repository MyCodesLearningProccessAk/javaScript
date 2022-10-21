// var  can be used has global value and let has block scope && var has function level scope && suggested to use const and let

if(1){
    var i = 234;  // here scope of i is global
    console.log(i);
}

console.log(i);
function ui(name){
    var i = 9; // here scope of i is function based this value wont be avilable out side function   
    console.log(i);
    return `this is a ${name} ui`;
}
console.log(ui("Parry"),i);