const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const videoContainer = $('.video-container');
const preloader = $('.preloader');
const switchBtn = $('.switch-btn');
console.log(switchBtn);

window.onload = () => {
    preloader.classList.add("hide-preloader");
}


switchBtn.onclick = () => {
    if(!switchBtn.classList.contains("slide")) {
        switchBtn.classList.add("slide");
        videoContainer.pause();
    }
    else {
        switchBtn.classList.remove("slide");
        videoContainer.play();
    }
}