import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

export default function swiper__init() {
    return new Swiper('.swiper', {
        modules: [Pagination, Autoplay],
        loop: true,
        speed: 500,
        slidesPerView: 'auto',
        spaceBetween: 28,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
        on: {
            click: function () {
                this.slideNext();
            },
        }
    });
}