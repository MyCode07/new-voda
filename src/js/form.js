document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.header__form')) {
        const form = document.querySelector('.header__form');
        const buttun = form.querySelector('.header__form-order');
        buttun.addEventListener('submit', formSend);
    }
    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                // alert(result.message);
                formEmailed();
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert("Ошибка");
                form.classList.remove('_sending');
            }
        } else {
            alert('Заполните обязательные поля');
        }

    }
    function formValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }


      if (document.querySelector('.header__form')) {
        const form = document.querySelector('.header__form');
        const buttun = form.querySelector('.header__form-order');
        buttun.addEventListener('submit', formSend);
    }

    function formEmailed(){
        document.querySelector('.popup__send').classList.add('_sended-form');
        setTimeout(() => {
            document.querySelector('.popup__send').classList.remove('_sended-form');
        }, 2000);
    }

});