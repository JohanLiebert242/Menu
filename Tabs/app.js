const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const about = $(".about");
const tabBtns = $$(".tab-btn");
const contents = $$(".content");

about.onclick = (e) => {
    const id = e.target.dataset.id;
    if(id) {
        tabBtns.forEach((btn) => {
            btn.classList.remove("active");
        })
        e.target.classList.add("active");

        contents.forEach((content) => {
            content.classList.remove("active");
        })
    }
    const element = document.getElementById(id);
    element.classList.add("active");
}


//We can go from parent element and take out an element and check if(that element)