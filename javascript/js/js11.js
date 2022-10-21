let a = document;
a = document.all;
a = document.body;
a = document.forms;
// Array.forms(a).array.forEach(function(element){
//     console.log(element);
// });
a = document.links[0];
console.log(a);

// Single element selector
function getColorCOde(){
    let color = document.getElementById("color").value;
    document.getElementById("first").style.backgroundColor = color;
    document.getElementById("second").style.backgroundColor = color;
    document.getElementById("thirt").style.backgroundColor = color;
    document.getElementById("fourth").style.backgroundColor = color;
    document.getElementById("five").style.backgroundColor = color;
    console.log(color);
    // console.log(background);


    document.querySelector("child");
}

// Multi element selector
function getColorCode2(){
    let color = document.getElementById("color").value;
    let elems = document.getElementsByClassName('child');
    for (const element of elems) {
       // document.getElementById(elems[index].id).style.backgroundColor = color; //for loop
        document.getElementById(element.id).style.backgroundColor = color;
    }
}