let readMoreText = document.querySelector('.read-more__text');
let rotateIcon = document.querySelector('.read-more__icon');
let innerDesc = document.querySelector('.main__description--inner--text');


readMoreText.addEventListener('click', ()=> {
    if(readMoreText.textContent == 'Читать далее') {
readMoreText.textContent = 'Скрыть';
   innerDesc.style.height = '100%';
    } else {
        readMoreText.textContent = 'Читать далее';
        innerDesc.style.height = '160px';
    }
   rotateIcon.classList.toggle('rotate');
});


let items = document.querySelectorAll('.main-menu__item');
items.forEach(el => {
    el.addEventListener('click', function(){
        items.forEach(e => e.classList.remove("active"))

        this.classList.add('active')
    })
})