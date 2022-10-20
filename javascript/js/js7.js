console.log("conditional loops")
let age = 199;

if(typeof age !== undefined){
    console.log(age);
}
if(age <= 18 || age <= 45){
    console.log('Welcome to PartyHouse, Your age is ' + age);
} else if(age < 18) {
    console.log(' you are child you cant enter')
}else if(age > 45){
    console.log('You are too old to enter')

}
if(age === 18){
    console.log(age);
}
if(age !== 18){
    console.log("age is "+ age);
}


// turnory operator
console.log(age==45? 'Age is 45':'Age is not 45');

//Switch 
switch (age) {
    case 18:
        console.log('age is 18');
        break;
    case 19:
        console.log('age is 19');
        break;
    case 25:
        console.log('age is 28');
        break;
    default:
        console.log(age);
        break;
}