let firstVisible = false;
const banner = document.querySelector('.section_sticky-banner');
const closeBtnBanner = banner.querySelector('.btn_close_banner')
window.addEventListener('scroll', function () {


    const scrollPosition = window.scrollY || window.pageYOffset;
    closeBtnBanner.addEventListener('click', () => {
        banner.classList.remove('is-visible')
    })
    if (scrollPosition > 200 && !firstVisible) {
        banner.classList.add('is-visible');
        firstVisible = true;
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const accordionContainers = document.querySelectorAll('.accordion-container');

    accordionContainers.forEach(container => {
        const items = container.querySelectorAll('.accordion-item');

        items.forEach(item => {
            const top = item.querySelector('.accordion-item__top');
            top.addEventListener('click', function () {
                // Закрываем все элементы в текущем контейнере
                items.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('is-open');
                    }
                });
                
                // Переключаем текущий элемент
                item.classList.toggle('is-open');
            });
        });
    });
});
const textareaBtn = document.querySelector('.textarea_btn');
const textarea = document.querySelector('.textarea_hidden');

textareaBtn.addEventListener('click', () => {
    textareaBtn.style.display = 'none';
    textarea.classList.remove('textarea_hidden')
});

const caseSwiper = new Swiper('.case-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.case-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    breakpoints: {
        1000: {
            slidesPerView: 'auto',
        }
    },
    navigation: {
        nextEl: '.case-nav-next',
        prevEl: '.case-nav-prev',
    },
});
