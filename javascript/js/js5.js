console.log('we are at burgerKing');
const name = 'Parry';
const greeting = 'Good moring'
console.log(greeting + ' ' + name);

let html 
html = "<h1> this is heading </h1>"+
        "<p>this is My para</p>";
html = html.concat('this',' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase);
console.log(html.toUpperCase);
console.log(html);

console.log(html[1]);
console.log(html.indexOf('hssdfsd1')); // string dose not exist then output will be -1
console.log(html.lastIndexOf('hssdfsd1')); // to get index of last apperance
console.log(html.charAt(1)); // to get character at that index
console.log(html.endsWith('ddsd')); // see if the string with given string it ans will be true if not then false
console.log(html.includes('this')); // check if the string is available in string or not returns true or false
console.log(html.substring(0,8)); // get string between cordinates
console.log(html.slice(0,6)); // get the string between cordinates and remove rest 
console.log(html.split('>')); // will split the content after the string appers in string 
console.log(html.replace('this','it')); // will replace first apperance

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
                <h1>This is Heading </h1>
                <p> You Like  ${fruit1} and ${fruit2}
                </p>

            `;

document.body.innerHTML = myHtml;
