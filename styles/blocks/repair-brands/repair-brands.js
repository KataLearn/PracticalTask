let showMore = document.querySelectorAll(".more__text");
let inner = document.querySelectorAll('.repair-inner');
let showMoreIcon = document.querySelectorAll('.more__icon');


for(let i = 0; i <showMore.length; i++) {
showMore[i].addEventListener('click', function(evt) {
 evt.preventDefault();
 

 showMoreIcon[i].classList.toggle("rotate");
  if (showMoreIcon[i].classList.contains("rotate")) {
    showMore[i].textContent = "Скрыть";
    inner[i].style.height = '70%';
    
  } else {
    showMore[i].textContent = "Показать все";
     inner[i].style.height = '190px';
  }

});
}

