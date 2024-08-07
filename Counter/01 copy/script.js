//geting elements



let incrementBtn = document.querySelector('#increment');
let decrementBtn = document.querySelector('#decrement');


let countEl = document.querySelector('#count');
let totalEl = document.querySelector('#total-el');
let saveEl = document.querySelector('#save-el');


let saveBtn = document.querySelector('#save-btn')

let count = 0;
let totalCount = 0;

incrementBtn.addEventListener('click', ()=>{
    count++;
    countEl.textContent = count;

});
decrementBtn.addEventListener('click', ()=>{
    count--;
    countEl.textContent = count;
});

saveBtn.addEventListener('click', ()=>{
    totalEl.textContent  = totalCount += parseInt(countEl.innerText);
});


let reset = document.querySelectorAll('.reset')