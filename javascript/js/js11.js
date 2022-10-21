let a = document;
a = document.all;
a = document.body;
a = document.forms;
// Array.forms(a).array.forEach(function(element){
//     console.log(element);
// });
a = document.links[0];
console.log(a);

function getColorCOde(){
    let color = document.getElementById("color").value;
    document.getElementById("first").style.backgroundColor = color;
    document.getElementById("second").style.backgroundColor = color;
    document.getElementById("thirt").style.backgroundColor = color;
    document.getElementById("fourth").style.backgroundColor = color;
    document.getElementById("five").style.backgroundColor = color;
    console.log(color);
    // console.log(background);
}
