let cons = document.querySelector('.container');
console.log(cons.children[1].id);
console.log(cons.children);
console.log(cons.firstChild);
console.log(cons.firstElementChild);
console.log(cons.lastChild);
console.log(cons.lastElementChild);
console.log(cons.childElementCount); //get count of childs

function getHover(xx){
    console.log(xx)
    let color = document.getElementById("color").value;
        xx.style.backgroundColor = color;
} 