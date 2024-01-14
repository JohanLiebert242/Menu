const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Get Elements
const form = $('.grocery-form');
const alert = $('.alert');
const input = document.getElementById('grocery');
const submitBtn = $('.submit-btn');
const groceryContainer = $('.grocery-container');
const groceryList = $('.grocery-list');
const clearBtn = $('.clear-btn');


let isEdit = false;
let editId;
let editElement;
//Submit form
form.addEventListener('submit', addItem)

//Functions
function addItem(e) {
    e.preventDefault();
    const value = input.value;
    const id = new Date().getTime().toString(); // To get an unique ID -> dont use in serious project
    
    if(value && !isEdit) {
        const element = document.createElement('article');
        const attribute = document.createAttribute('data-id');
        attribute.value = id;
        element.setAttributeNode(attribute);
        element.classList.add('grocery-item');
        element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
            <!-- edit btn -->
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;
        groceryList.appendChild(element);
        displayAlert('You have successfully added an item', 'success');
        groceryContainer.classList.add('show-container');
    }
    else if(value && isEdit) {

    }
    else {
        displayAlert('Please enter a value', 'danger');
    }
}

function displayAlert(text, type) {
    alert.textContent = text;
    alert.classList.add(`alert-${type}`);

    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${type}`);
    }, 2000);
} 