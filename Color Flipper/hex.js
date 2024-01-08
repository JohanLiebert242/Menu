const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn= $('button');
const color = $('.color');
console.log(color);

btn.onclick = function() {
    let hexColor = '#';

    for(let i = 0  ; i < 6; i++) {
        hexColor += hex[getRandNumb()];
    }
    color.textContent = hexColor;
    document.body.style.background = hexColor;
}

function getRandNumb() {
    return Math.floor(Math.random() * hex.length);
}