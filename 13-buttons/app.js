'use strict';

/*
    Сделать 5 кнопок с текстом "Нажми меня" и div, где отображается 
    число нажатий (по умолчанию 0).
        - При нажатии кнопки, текст на ней меняется на "Нажата!". У всех 
        остальных - "Нажми меня"
        - С нажатием любой кнопки счетчик увеличивается на 1.
*/

let currentValue = 0
const buttons = document.querySelector('.buttons');
const counter = document.querySelector('.counter');

buttons.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('button')) {
        currentValue++;
        counter.innerText = currentValue;
    }
    const i = target.getAttribute('data-id');
    document.querySelectorAll(`button[data-id]`).forEach(el => {
        el.innerText = 'Нажми меня';
    })
    const element = document.querySelector(`button[data-id="${i}"]`);
    if (element) {
        element.innerText = 'Нажата!'
    }
})