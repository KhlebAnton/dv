document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.page-invest__search-invest-swiper', {
        loop: false,
        allowTouchMove: true,
        autoHeight: true,
        effect: 'slide',
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const tabs = document.querySelectorAll('.search-invest-top__tab');


    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));

            tabs.forEach(t => t.classList.remove('tab--active'));

            this.classList.add('tab--active');

            swiper.slideTo(index);
        });
    });

    swiper.on('slideChange', function () {
        const activeIndex = swiper.activeIndex;

        tabs.forEach(t => t.classList.remove('tab--active'));

        if (tabs[activeIndex]) {
            tabs[activeIndex].classList.add('tab--active');
        }
    });

    function checkScreenWidth() {
        if (window.innerWidth <= 900) {
            document.querySelector('.search-invest-top__tabs').style.display = 'none';
            document.querySelector('.swiper-nav-mobile').style.display = 'flex';
        } else {
            document.querySelector('.search-invest-top__tabs').style.display = 'flex';
            document.querySelector('.swiper-nav-mobile').style.display = 'none';
        }
    }

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    // Храним все экземпляры intlTelInput
    const itiInstances = new WeakMap();

    // Инициализация для всех инпутов с классом iti_phone
    document.querySelectorAll('.iti_phone').forEach(phoneInput => {
        const iti = window.intlTelInput(phoneInput, {
            preferredCountries: ['ru', 'by', 'kz', 'us'],
            separateDialCode: true,
            initialCountry: 'ru',
            utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
        });

        // Сохраняем экземпляр для этого инпута
        itiInstances.set(phoneInput, iti);

        phoneInput.addEventListener('input', function (e) {
            this.value = this.value.replace(/[^\d+]/g, '');
        });

        phoneInput.addEventListener('keydown', function (e) {
            if (/[0-9]|Backspace|Delete|Tab|Escape|Enter|ArrowLeft|ArrowRight|ArrowUp|ArrowDown/.test(e.key)) {
                return;
            }
            if (e.key === '+' && !this.value.includes('+')) {
                return;
            }
            e.preventDefault();
        });
    });

    // Обработчик для всех форм
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function (e) {
            let hasInvalidPhone = false;

            this.querySelectorAll('.iti_phone').forEach(phoneInput => {
                // Получаем экземпляр из нашей Map
                const iti = itiInstances.get(phoneInput);
                if (!iti) return;

                const fullNumber = iti.getNumber();
                phoneInput.value = fullNumber;

                if (!iti.isValidNumber()) {
                    hasInvalidPhone = true;
                    phoneInput.classList.add('error');
                } else {
                    phoneInput.classList.remove('error');
                }
            });

            if (hasInvalidPhone) {
                e.preventDefault();
                alert('Пожалуйста, введите корректные номера телефонов');
            }
        });
    });

    const textareaBtn = document.querySelector('.textarea_btn');
    const textarea = document.querySelector('.textarea_hidden');

    textareaBtn.addEventListener('click', ()=> {
        textareaBtn.style.display = 'none';
        textarea.classList.remove('textarea_hidden')
    })
});