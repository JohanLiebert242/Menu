const modalBtn = document.querySelector('.modal-btn');
console.log(modalBtn);
const closeBtn = document.querySelector('.close-btn');
console.log(closeBtn);
const modalOverlay = document.querySelector('.modal-overlay');
console.log(modalOverlay);


modalBtn.onclick = function() {
    modalOverlay.classList.add('open-modal');
}

closeBtn.onclick = function() {
    modalOverlay.classList.remove('open-modal');
}