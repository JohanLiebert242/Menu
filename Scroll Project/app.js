const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navToggle = $('.nav-toggle');
const linksContainer = $('.links-container');
const links = $(".links");


//Toggle Nav button on small screen
navToggle.onclick = (e) => {
    let linksContainerHeight = linksContainer.getBoundingClientRect().height;
    let linksHeight = links.getBoundingClientRect().height;
    if(linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
}

//Nav fixed + Top link Btn
const navbar = document.getElementById('nav');
const topLinkBtn = $(".top-link");
window.onscroll = (e) => {
    let navbarHeight = navbar.getBoundingClientRect().height;
    let windowHeight = window.pageYOffset;
    if(windowHeight > navbarHeight) {
        navbar.classList.add("fixed-nav");
    }
    else {
        navbar.classList.remove("fixed-nav");
    }
    if(windowHeight > 500) {
        topLinkBtn.classList.add('show-link');
    }
}

//Caculate the height
const scrollLinks = $$(".scroll-link");
scrollLinks.forEach((scrollLink) => {
    scrollLink.onclick = (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let navbarHeight = navbar.getBoundingClientRect().height;
        let linksContainerHeight = linksContainer.getBoundingClientRect().height;

        let position = element.offsetTop - navbarHeight;
        const is_FixedNav = navbar.classList.contains("fixed-nav");

        if(!is_FixedNav) {
            position = position - navbarHeight;
        }

        if(navbarHeight > 82) {
            position = position + linksContainerHeight;
        }


        window.scrollTo({
            left: 0,
            top: position
        })


        linksContainer.style.height = 0;
    }
})