const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabsBtn = $$(".tab-btn");
const contents = $$(".content");
const about = $('.about');

about.onclick = (e) => {
    const id = e.target.dataset.id;
    if(id) {
       tabsBtn.forEach((btn) => {
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