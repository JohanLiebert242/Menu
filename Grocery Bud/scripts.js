const $ =document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// --------- Get elements --------------
const form = $('.grocery-form');
const alert = $('.alert');
const input = document.getElementById('grocery');
const submitBtn = $('.submit-btn');
const groceryContainer = $('.grocery-container');
const groceryList = $('.grocery-list');
const clearBtn = $('.clear-btn');

let editFlag = false;
let editId;
let editItem;
// ---------- Events --------------
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItem);
window.addEventListener('DOMContentLoaded', setUpItems);


// ----------- Functions -----------
function addItem(e) {
    e.preventDefault();

    const value = input.value;
    const id = new Date().getTime().toString();  // To get an unique id (dont use in real project)
    if(value && !editFlag) {
        
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
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click', editItems);
        groceryList.appendChild(element);

        displayAlert('Item successfully added', 'success');
        groceryContainer.classList.add('show-container');
        addToLocalStorage(id, value);
        setBackToDefault();
    }
    else if(value && editFlag ) {
        editItem.innerHTML = value;
        displayAlert('value changed', 'success');
        editFromLocalStorage(editId, value);
        setBackToDefault();
    }
    else {
        displayAlert('Please enter a value', 'danger');
    }
}

function displayAlert(text, type) {
    alert.textContent = text;
    alert.classList.add(`alert-${type}`);

    setTimeout(()=> {
        alert.textContent = "";
        alert.classList.remove(`alert-${type}`);
    }, 1000)
}

function clearItem() {
    const items = $$('.grocery-item');

    if(items.length > 0 ) {
        items.forEach((item) => {
            groceryList.removeChild(item);
        });
    }
    displayAlert('Empty list', 'danger');
    groceryContainer.classList.remove('show-container');
    setBackToDefault();
    localStorage.removeItem('list');
}

function deleteItem(e) {
    const deletedElement = e.currentTarget.parentElement.parentElement; // Có thể dùng e.currentTarget.parentElement.parentElement cũng oke
    const id = deletedElement.dataset.id;

    groceryList.removeChild(deletedElement);

    if(groceryList.children.length === 0) {
       groceryContainer.classList.remove('show-container');
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
    removeFromLocalStorage(id);
}

function editItems(e) {
    const element = e.currentTarget.parentElement.parentElement;
    
    editItem = e.currentTarget.parentElement.previousElementSibling;

    input.value = editItem.innerHTML;
    submitBtn.textContent = 'edit';
    editFlag = true;
    editId = element.dataset.id;
}
function setBackToDefault() {
    input.value = "";
    editFlag = false;
    editId = "";
    submitBtn.textContent = "submit";
}


//Local Storage Functions
function addToLocalStorage(id, value) {
    let grocery = {id, value}; 
    let items = getStorage();

    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getStorage();
    items = items.filter((item) => {
        if(item.id !== id) {
            return item;
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
}

function editFromLocalStorage(id,value) {
    let items = getStorage();
    console.log(items);

    items = items.map((item) => {
        if(item.id  === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list', JSON.stringify(items));
}

function getStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []; 
}


function setUpItems() {
    let items = getStorage();

    if(items.length > 0) {
        items.forEach((item) => {
            createItems(item.id, item.value);
        });
        groceryContainer.classList.add('show-container');
    }
}

function createItems(id,value ) {
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
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click', editItems);
        groceryList.appendChild(element);
}

//How Local Storage operates
// localStorage.setItem('name of key', JSON.stringify('value')) ->  local storage only stores string so have to stringify it -> the value you pass in can be any type
// localStorage.getItem('key');
// localStorage.removeItem('key');

