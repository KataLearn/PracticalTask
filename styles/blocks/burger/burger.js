let burger = document.querySelector('.burger');
let aside = document.querySelector('.aside');
let overlay = document.querySelector('.overlay');
let asideClose = document.querySelector('.aside__header--close');
let closeBtn = document.querySelector('.close');


burger.addEventListener('click', () => {
    aside.classList.add('aside-burger');
    overlay.classList.add('overlay-open');
})

asideClose.addEventListener('click', () => {
    aside.classList.remove('aside-burger');
    overlay.classList.remove('overlay-open');

})

overlay.addEventListener('click', () => {
    aside.classList.remove('aside-burger');
    overlay.classList.remove('overlay-open');

})



