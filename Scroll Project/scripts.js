const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const navToggle = $('.nav-toggle');
const linksContainer = $('.links-container');
const links = $('.links');

navToggle.onclick = (e) => {
    let linksContainerHeight = linksContainer.getBoundingClientRect().height;
    let linksHeight = links.getBoundingClientRect().height;
    if(linksContainerHeight === 0 ) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
}


const navbar = document.getElementById("nav");
const topLinkBtn = $('.top-link');

window.onscroll = (e) => {
    let windowHeight = window.pageYOffset;
    let navHeight = nav.getBoundingClientRect().height;
    if(windowHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    }
    else {
        navbar.classList.remove("fixed-nav");
    }
    if(windowHeight > 500) {
        topLinkBtn.classList.add("show-link");
    }
}


const scrollLinks = $$('.scroll-link');
scrollLinks.forEach((link) => {
    link.onclick = (e) => {
        e.preventDefault();


        let id = e.currentTarget.getAttribute("href").slice(1);
        let element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;

        const isFixedNavbar = navbar.classList.contains("fixed-nav");

        if(!isFixedNavbar) {
            position = position - navHeight;
        }
        if(navHeight > 82) {
            position = position + linksContainerHeight;
        }
        
        
        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0;
    }
})

// Method : getBoundingClientRect() -> return a DOMRect object with 8 properties : left,top, right, bottom .....
//         window.pageX(Y)Offset
//         preventDefault()
//         offsetTop




