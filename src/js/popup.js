// if (document.querySelector('.popup')) {
//     // ссылки открывающие попап
//     const popupLinks = document.querySelectorAll('._order-btn');

//     const body = document.querySelector('body');

//     // контролирует состояние попапа (открытый, закрытый)
//     let unlock = true;

//     // время анимации по клике на попап
//     const timeout = 500;

//     if (popupLinks.length > 0) {
//         for (let i = 0; i < popupLinks.length; i++) {
//             const popupLink = popupLinks[i];
//             popupLink.addEventListener('click', function (e) {
//                 popupOpen(document.querySelector('.popup'));
//                 e.preventDefault();
//             });
//         }
//     }

//     const popupCloseIcon = document.querySelector('.popup__close');
//     popupCloseIcon.addEventListener('click', function (e) {
//         popupClose(popupCloseIcon.closest('.popup'));
//     });

//     function popupOpen(popup) {
//         if (popup && unlock) {
//             popup.classList.add('_open');
//             popup.classList.add('_noscroll');
//             body.classList.add('_noscroll');
//             // по клике не на попап закрыть попап 
//             popup.addEventListener('click', function (e) {
//                 if (!e.target.closest('.popup__content')) {
//                     popupClose(e.target.closest('.popup'));
//                 }
//             })
//         }
//     }

//     // переход по попапам, елси их ссылки присутствуют в текущем попапе
//     function popupClose(popup, doUnock = true) {
//         if (unlock) {
//             popup.classList.remove('_open');
//             popup.classList.remove('_noscroll');
//             body.classList.remove('_noscroll');
//         }
//     }
// }

// // это для теста его я добавлаю в ту фуннкцию которая успешно отправляет форму 
// if (document.querySelector('.popup__send')) {
//     document.querySelector('.popup__form-order').addEventListener('click',function(e){
//         e.preventDefault();
//         document.querySelector('.popup').classList.remove('_open');
//         document.querySelector('.popup__send').classList.add('_sended');
//         setTimeout(() => {
//             document.querySelector('.popup__send').classList.remove('_sended');
//             document.querySelector('body').classList.remove('_noscroll');
//         }, 3000);
//     });
// }