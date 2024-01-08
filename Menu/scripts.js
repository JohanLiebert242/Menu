//Local API
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

//Get elements
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const sectionCenter = $('.section-center');
const filterBtn = $$('.filter-btn');
const BtnContainer = $('.btn-container');


window.addEventListener('DOMContentLoaded', (e) => {
   showMenu(menu);
   showDisplayBtns();
});


// function showMenu(type) {
//     let menuItems = type.map((item) => {
//         return `<article class="menu-item">
//         <img src="${item.img}" class="photo" />
//         <div class="item-info">
//           <header>
//             <h4>${item.title}</h4>
//             <h4 class="price">$${item.price}</h4>
//           </header>
//           <p class="item-text">
//             ${item.desc}
//           </p>
//         </div>
//       </article>`
//     }).join("");
//     sectionCenter.innerHTML = menuItems;
// }

// function displayMenuButtons() {
//     const categories = menu.reduce(function(a, currentValue) {
//         if(!a.includes(currentValue.category)) {
//             a.push(currentValue.category);
//         }
//         return a;
//     }, ["all"]);
//     const categoriesBtn = categories.map((category) => {
//         return `<button type="button" class="filter-btn" data-id=${category}>
//              ${category}
//         </button>`;
//     }).join("");
//     BtnContainer.innerHTML = categoriesBtn;
    
//     const filterBtns = BtnContainer.querySelectorAll(".filter-btn");
//     const filterBtn = filterBtns.forEach((btn) => {
//         btn.onclick = function(e) {
//             const category = e.currentTarget.dataset.id;
//             const menuCategory = menu.filter((arrCategory) => {
//                 if(category === arrCategory.category) {
//                     return arrCategory;
//                 }
//             })
//             if(category === "all") {
//                 showMenu(menu);
//             }
//             else {
//                 showMenu(menuCategory);
//             }
//         }
//     });
// }


function showMenu(MenuType) {
    let menu = MenuType.map((menuItem) => {
        return `<article class="menu-item">
        <img src="${menuItem.img}" />
        <div class="item-info">
          <header>
            <h4>${menuItem.title}</h4>
            <h4 class="price">$${menuItem.price}</h4>
          </header>
          <p class="item-text">
            ${menuItem.desc}
          </p>
        </div>
      </article>`
    }).join("");
    sectionCenter.innerHTML = menu;
}

function showDisplayBtns() {
    const categories = menu.reduce((acc, currentValue) => {
        if(!acc.includes(currentValue.category)) {
            acc.push(currentValue.category);
        }
        return acc;
    }, ["all"])
    const category = categories.map((cate) => {
        return `<button type="button" class="filter-btn" data-id="${cate}">${cate}</button>`
    }).join("");
    BtnContainer.innerHTML = category;

    const filterBtns = BtnContainer.querySelectorAll('.filter-btn');
    const filterBtn = filterBtns.forEach((btn) => {
        btn.onclick = function(e) {
            const btnCate = e.currentTarget.dataset.id;
            const menuCate = menu.filter((menuItem) => {
                if(btnCate === menuItem.category) {
                    return menuItem
                }
            })
            if(btnCate === 'all') {
                showMenu(menu);
            }
            else {
                showMenu(menuCate);
            }
        }
    })
}