const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const about = $('.about');
const contents = $$('.content');
const tabs = $$(".tab-btn");
console.log(tabs);


about.onclick = (e) => {
    const id = e.target.dataset.id;

    if(id) {
       contents.forEach((content) => {
            content.classList.remove('active');
       })

       e.target.classList.add('active');
       tabs.forEach((tab) => {
            tab.classList.remove('active');

       })
       e.target.classList.add('active');
       const elementActive = document.getElementById(id);
       elementActive.classList.add('active');
    }
}