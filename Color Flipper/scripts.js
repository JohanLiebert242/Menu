const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn= $('button');
const color = $('.color');

btn.onclick = function() {
    let randNumb = getRandNumb();
    color.textContent = colors[randNumb];
    document.body.style.background = colors[randNumb];
}

function getRandNumb() {
    return Math.floor(Math.random() * colors.length);
}


// element.style.(style you want to change);
