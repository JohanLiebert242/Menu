const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.onclick = function(e) {
        const parentElement = e.currentTarget.closest('.question');
        questions.forEach((item) => {
            console.log(item);
            if(item !== parentElement) {
                item.classList.remove('show-text');
            }
        })
        parentElement.classList.toggle('show-text');
        
    }
})
