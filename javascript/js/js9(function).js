function GMFunctionDefaultValue(name,thanks="Thank You") { // if thanks dose not recives a value then the assigned value will be used
    let message = ` Hello ${name} and ${thanks}`
    return message;
}

function GMFunction(name,thanks) { // if  there is no default to thanks value undefined or NA or something elsse will be printed 
    let message = ` Hello ${name} and ${thanks}`
    return message;
}


function GMFunctionSingleParameter(name) {
    let message = ` Hello ${name}`
    return message;
}

let nameParry = 'Parry';
console.log(GMFunctionSingleParameter(nameParry));
console.log(GMFunctionDefaultValue(nameParry));
console.log(GMFunction(nameParry,"Thank you lol"));


// How to run a function multiple times with changing values

let names = ["A","B","C","D",1,2,3,4,5,6];

for (let nameIt of names) { 
    let val = GMFunction(nameIt,"Thank you lol");
    console.log(val);
}


// how make function in var

const myGreet =function(name){
 let message = ` Hello ${name}`
    return message;
}

console.log(myGreet(nameParry));

const myobj = {
    name: "SKillF",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game);
console.log(myobj.game()); // this will run function on key game in obj if () are  missing then it will return function has string

