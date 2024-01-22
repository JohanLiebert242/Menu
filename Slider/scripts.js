const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Get elements 
const slides = $$(".slide");
const prevBtn =  $('.prevBtn');
const nextBtn =  $('.nextBtn');

//Set up
slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`;
});

//Events
let counter = 0;
nextBtn.onclick = () => {
    counter++;
    move();
}

prevBtn.onclick = () => {
    counter--;
    move();
}


//Function
// function move() {
//     if(counter > slides.length -1 ) {
//         counter = 0;
//     }
//     else if(counter < 0) {
//         counter = slides.length - 1;
//     }
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`;
//     })
// }

//Another way
function move() {
    if(counter > 0) {
        prevBtn.style.display = "block";
    }
    else {
        prevBtn.style.display = "none";
    }
    if(counter < slides.length - 1) {
        nextBtn.style.display = "block";
    }
    else {
        nextBtn.style.display = "none";
    }
    slides.forEach((slide) => {
        slide.style.transform  = `translateX(-${counter * 100}%)`;
    })
}
prevBtn.style.display = "none";
