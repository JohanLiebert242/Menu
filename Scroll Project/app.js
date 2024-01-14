const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navToggle = $('.nav-toggle');
const linksContainer = $('.links-container');
const links = $(".links");
const nav = document.getElementById('nav');
const topLink = $('.top-link');
const scrollLinks = $$(".scroll-link");



//Show nav in mobile screen
navToggle.onclick = (e) => {
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
}

//Show fixed nav + go-home btn
window.onscroll = (e) => {
    const windowCurrentHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;


    if(windowCurrentHeight > navHeight) {
        nav.classList.add('fixed-nav');
    }
    else {
        nav.classList.remove('fixed-nav');
    }

    if(windowCurrentHeight > 500) {
        topLink.classList.add('show-link');
    }
    else {
        topLink.classList.remove('show-link');
    }
}

//Adjust height
scrollLinks.forEach((scrollLink) => {
    scrollLink.onclick = ((e) => {

        e.preventDefault();

        const id = e.target.getAttribute('href').slice(1);
        const elementClicked = document.getElementById(id).offsetTop;

        const navHeight = nav.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        const is_FixedNav = nav.classList.contains('fixed-nav');
        console.log(is_FixedNav);

        let position = elementClicked - navHeight;
        console.log(position);
        if(!is_FixedNav) {
            position = position - navHeight;
        }
        if(navHeight > 82) {
            position = position + linksContainerHeight;
        }

        window.scrollTo({
            left:0,
            top: position
        })
        linksContainer.style.height = 0;
    })
})