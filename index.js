import './index.html';

import './styles/blocks/read-more/read-more';

import './styles/blocks/burger/burger';

import './styles/style.scss';



import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './styles/blocks/repair-brands/repair-brands';

// init Swiper:

const swiper = new Swiper('.swiper', {
   modules: [Navigation, Pagination],
  loop: true,
    spaceBetween: 16,
    slidesPerView: 1.25,
    watchSlidesProgress: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


