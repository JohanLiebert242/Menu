// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://i.pinimg.com/564x/30/b8/82/30b882771962cd2e4a8e468b80325ebb.jpg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://i.pinimg.com/564x/e6/a8/44/e6a8448e291d3f3b4d4842fda7ba3c52.jpg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://i.pinimg.com/736x/80/2d/41/802d41ce6a372daf1b3e024cfda5ac8a.jpg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://i.pinimg.com/736x/8b/9b/34/8b9b34251db3c0511d2ba32753616073.jpg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

//Get Elements
const $ = document.getElementById.bind(document);
const $$ = document.querySelectorAll.bind(document);

const g = document.querySelector.bind(document);
const gg = document.querySelectorAll.bind(document);


const avatar = $('person-img');
const author = $('author');
const job = $('job');
const info = $('info');

const prevBtn = g('.prev-btn');
const nextBtn = g('.next-btn');
const randBtn = g('.random-btn');




let currentItem = 0;

function showPerson(currentItem) {
    const item = reviews[currentItem];
    avatar.src = item.img;  
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


window.addEventListener('DOMContentLoaded', (e) => {
    showPerson(currentItem);
})

prevBtn.onclick = function() {
    --currentItem;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
}

nextBtn.onclick = function() {
    ++currentItem;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
}

randBtn.onclick = function() {
    let randomNumb = Math.floor(Math.random() * reviews.length);
    showPerson(randomNumb);
}