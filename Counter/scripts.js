const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const value = document.getElementById('value');
const btns = $$('.btn');

function PutValue() {
    value.textContent = cnt;
}

let cnt = 0;

btns.forEach((btn) => {
    btn.onclick = function(e) {
        const target = e.currentTarget.classList;
        if(target.contains('decrease')) {
            --cnt;
            PutValue();
            if(cnt < 0) {
                value.style.color = "red";
            }
        }
        else if(target.contains("increase")) {
            ++cnt;
            PutValue();
            if(cnt > 0) {
                value.style.color = "Green";
            }
        }
        else if(target.contains("reset")) {
            cnt = 0;
            PutValue();
            value.style.color = "initial";
        }
    }
})

//properties : currentTarget -> currentTarget.classList
// methods: element.classList.contains("...") -> kiểm tra xem có class nào đó hay không (string)
