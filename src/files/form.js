"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.header__form');
	
	form.addEventListener('submit', formSend);

	async function formSend(e) {
	    const form = document.querySelector('.header__form');
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch("https://xn----7sbbfcj9b1a5aj6le.xn--p1ai/wp-content/themes/%D0%B2%D0%BE%D0%B4%D0%B0-%D0%B2%D1%8F%D1%82%D1%81%D0%BA%D0%B0%D1%8F/assets/files/sendmail.php", {
				method: 'POST',
				body: formData
              
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);

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

    const productForms = document.querySelectorAll('.item-product__form');
   
	
    productForms.forEach(item => {
	    item.addEventListener('click', ()=>{
             item.classList.add('_open-form');
            // productFormSend(item)
            console.log(item);
        });
    });

      function productFormSend(elem){
        elem.classList.add('_open-form');
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
});

if (document.querySelector('.popup')) {
    // ссылки открывающие попап
    const popupLinks = document.querySelectorAll('._order-btn');

    const body = document.querySelector('body');

    // контролирует состояние попапа (открытый, закрытый)
    let unlock = true;

    // время анимации по клике на попап
    const timeout = 500;

    if (popupLinks.length > 0) {
        for (let i = 0; i < popupLinks.length; i++) {
            const popupLink = popupLinks[i];
            popupLink.addEventListener('click', function (e) {
                popupOpen(document.querySelector('.popup'));
                e.preventDefault();
            });
        }
    }

    const popupCloseIcon = document.querySelector('.popup__close');
    popupCloseIcon.addEventListener('click', function (e) {
        popupClose(popupCloseIcon.closest('.popup'));
    });

    function popupOpen(popup) {
        if (popup && unlock) {
            popup.classList.add('_open');
            popup.classList.add('_noscroll');
            body.classList.add('_noscroll');
            // по клике не на попап закрыть попап 
            popup.addEventListener('click', function (e) {
                if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                }
            })
        }
    }

    // переход по попапам, елси их ссылки присутствуют в текущем попапе
    function popupClose(popup, doUnock = true) {
        if (unlock) {
            popup.classList.remove('_open');
            popup.classList.remove('_noscroll');
            body.classList.remove('_noscroll');
        }
    }
}

// это для теста его я добавлаю в ту фуннкцию которая успешно отправляет форму 
if (document.querySelector('.popup__send')) {
    document.querySelector('.popup__form-order').addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector('.popup').classList.remove('_open');
        document.querySelector('.popup__send').classList.add('_sended');
        setTimeout(() => {
            document.querySelector('.popup__send').classList.remove('_sended');
            document.querySelector('body').classList.remove('_noscroll');
        }, 3000);
    });
}