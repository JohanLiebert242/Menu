const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


//Get Elements
const form = $('.grocery-form');
const alert = $('.alert');
const input = document.getElementById('grocery');
const submitBtn = $('.submit-btn');
const container = $('.grocery-container');
const list = $('.grocery-list');
const clearBtn = $('.clear-btn');



let editFlag = false;
let editElement;
let editId;
//Events 
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItem);
window.addEventListener('DOMContentLoaded', setUpItems);


//Functions
function addItem(e) {
    e.preventDefault();
    const value = input.value;

    const id = new Date().getTime().toString();
    
    if(value && !editFlag) {
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        const attribute = document.createAttribute('data-id');
        attribute.value = id;
        element.setAttributeNode(attribute);
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

        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);    


        list.appendChild(element);
        container.classList.add('show-container');

        displayAlert('Item added', 'success');
        addToLocalStorage(id, value);
        setBackToDefault();    
    }
    else if(value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        editFromLocalStorage(editId, value);
        setBackToDefault();
    }
    else {
        displayAlert('Please enter a value', 'danger');
    }
}

function editItem(e) {
    const element = e.currentTarget.closest('.grocery-item');

    editElement = e.currentTarget.parentElement.previousElementSibling;
    input.value = editElement.innerHTML;
    submitBtn.textContent = 'edit';
    editFlag = true;

    editId = element.dataset.id;
}

function deleteItem(e) {
    const deleteItem = e.currentTarget.closest('.grocery-item');
    list.removeChild(deleteItem);

    if(list.children.length === 0) {
        container.classList.remove('show-container');
    }

    const id = deleteItem.dataset.id;

    displayAlert('item removed', 'danger');
    setBackToDefault();
    removeFromLocalStorage(id);
}

function clearItem() {
    const items = $$('.grocery-item');
    
    if(items.length > 0 ) {
        items.forEach((item) => {
            list.removeChild(item);
        })
    }

    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    localStorage.removeItem('list');
}


function displayAlert(text, type) {
    alert.textContent = text;
    alert.classList.add(`alert-${type}`);

    //Clear alert
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${type}`);
    }, 1000)
}

function setBackToDefault() {
    input.value = "";
    submitBtn.textContent = "submit";
    editFlag = false;
    editId = "";
}


//Local Storage functions
function addToLocalStorage(id, value) {
    const grocery = {id, value};
    let items = getLocalStorage();
    items.push(grocery);

    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter((item) => {
        if(item.id !== id) {
            return item;
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
}

function editFromLocalStorage(id,value) {
    let items = getLocalStorage();
    items = items.map((item) => {
        if(item.id === id) {
            item.value = value;
        }
        return item;
    })
    localStorage.setItem('list', JSON.stringify(items));

}

function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

// Set up
function setUpItems() {
    let items = getLocalStorage();

    if(items.length > 0) {
        items.forEach((item) => {
            createListItems(item.id, item.value);
        });
        container.classList.add('show-container');
    }
}


function createListItems(id, value) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    const attribute = document.createAttribute('data-id');
    attribute.value = id;
    element.setAttributeNode(attribute);
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

    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);    


    list.appendChild(element);
}


//Notes:
// DomContentLoaded, createElement, createAttribute, setAttributeNode, removeChild, appendChild();

//LocalStorage
// JSON.parse(localStorage.getItem("key"));
// localStorage.setItem("key", JSON.stringify("value : can be object, array,... -> cuz it will be parsed intro string"));
// localStorage.removeItem