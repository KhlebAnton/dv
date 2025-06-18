function sendMessage(form, type) {
    switch (type) {
        case 'callback':
            ym(57048325,'reachGoal','calback');
            return fetch('wp-content/themes/dv-consulting/mail/mail.html', {
                method: 'POST',
                body: new FormData(jQuery(form).get(0)),
            });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // Form submit
    const callbackModalForm = document.querySelectorAll('.clbck__modal__form');
    const callbackInlineForm = document.querySelectorAll('.clbck__inline__form');
    const callbackInlineEndpageForm = document.querySelectorAll('.clbck__inline__endpage__form');
    const callbackInlineEndpageFormCert = document.querySelectorAll('.clbck__inline__endpage__form--cert');
    const callbackInlineAuditForm = document.querySelectorAll('.clbck__inline__audit__form');
    const callbackVacancyAuditForm = document.querySelectorAll('.section-audit__form');
    const modalSuccess = window.successModalInstance;

    // Подстановка названия пакета услуг при клике
    for (const service of document.querySelectorAll('.packages-list__item')) {
        let button = service.querySelector('.js-popup-callback');
        let packet_name = service.querySelector('.package-title').innerText;
        button.addEventListener('click', ()=>{
            callbackModalForm.forEach((form) => {
                form.querySelector('input[name="service"]').value = packet_name;
            })
        });
    }

    callbackModalForm.forEach((form) => {
        form.addEventListener('submit', function (event) {
            const button = form.querySelector('.submit__btn');
            const buttonClose = form.parentNode.querySelector('.popup__close');

            button.setAttribute('disabled', true);
            button.innerText = 'Отправляем...';
            event.preventDefault();
            sendMessage(form, 'callback').then(function (e) {
                form.reset();
                modalSuccess.openModal();
                buttonClose.click();
                button.innerText = 'Отправить';
            });
        });
    });

    callbackInlineForm.forEach((form) => {
        form.addEventListener('submit', function (event) {
            const button = form.querySelector('.submit__btn');

            button.setAttribute('disabled', true);
            button.innerText = 'Отправляем...';
            event.preventDefault();
            sendMessage(form, 'callback').then(function (e) {
                form.reset();
                modalSuccess.openModal();
                button.innerText = 'Оставить заявку';
            });
        });
    });

    callbackInlineAuditForm.forEach((form) => {
        form.addEventListener('submit', function (event) {
            const button = form.querySelector('.submit__btn');

            button.setAttribute('disabled', true);
            button.innerText = 'Отправляем...';
            event.preventDefault();
            sendMessage(form, 'callback').then(function (e) {
                form.reset();
                modalSuccess.openModal();
                button.innerText = 'Оставить заявку';
            });
        });
    });

    callbackInlineEndpageForm.forEach((form) => {
        form.addEventListener('submit', function (event) {
            const button = form.querySelector('.submit__btn');

            button.setAttribute('disabled', true);
            button.innerText = 'Отправляем...';
            event.preventDefault();
            sendMessage(form, 'callback').then(function (e) {
                form.reset();
                modalSuccess.openModal();
                button.innerText = 'Оставить заявку';
            });
        });
    });

    callbackInlineEndpageFormCert.forEach((form) => {
        form.addEventListener('submit', function (event) {
            const button = form.querySelector('.submit__btn');

            button.setAttribute('disabled', true);
            button.innerText = 'Отправляем...';
            event.preventDefault();
            sendMessage(form, 'callback').then(function (e) {
                form.reset();
                modalSuccess.openModal();
                button.innerText = 'Рассчитать стоимость';
            });
        });
    });

    callbackVacancyAuditForm.forEach((form) => {
        form.addEventListener('submit', function (event) {
            const button = form.querySelector('.submit__btn');
            const file_placeholder = '<p>Перетащите файл с резюме сюда или нажмите для выбора\n' +
                '<strong>PDF, DOC, JPG до 20мб </strong></p>';
            const file_name = form.querySelector('#file-name');

            button.setAttribute('disabled', true);
            button.innerText = 'Отправляем...';
            event.preventDefault();
            sendMessage(form, 'callback').then(function (e) {
                form.reset();
                file_name.innerHTML = file_placeholder;
                modalSuccess.openModal();
                button.innerText = 'Оставить заявку';
            });
        });
    });


});
