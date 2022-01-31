'use strict';

// ハンバーガー
const ham = document.getElementById('ham');
const hamNav = document.getElementById('hamNav');

ham.addEventListener('click', ()=> {
    ham.classList.toggle('clickAction');
    hamNav.classList.toggle('clickOpen');
});

// ふわっと表示
const listElement = document.querySelectorAll('.contents > ul li');

document.addEventListener('scroll', ()=> {
    listElement.forEach(value => {
        const scrollEvent = value.getBoundingClientRect().top + value.clientHeight * .4;
        if (window.innerHeight > scrollEvent) {
            value.classList.add('scrllactive');
        } else {
            value.classList.remove('scrllactive');
        }
    });
});