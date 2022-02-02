window.addEventListener('load', function (e) {

    if (document.querySelectorAll('input[id=count]')) {
        document.querySelectorAll('input[id=count]').forEach(item => {
            item.oninput = function (e) {
                if (this.value.match(/[^0-9]/g)) {
                    this.value = this.value.replace(/[^0-9]/g, '');
                }
                else if (this.value.match(/^0/g)) {
                    this.value = this.value.replace(/^0/g, 1);
                }
            }
        })
    }
    if (document.querySelector('.popup__form-name')) {
        document.querySelector('.popup__form-name').oninput = function (e) {
            if (this.value.match(/[^a-zа-я\s]/gi)) {
                this.value = this.value.replace(/[^a-zа-я\s]/gi, '');
            }
        }
    }

    if (document.querySelector('.header__form-phone')) {
        $(".header__form-phone").mask("+7(999)999-99-99");
    }
    if (document.querySelector('.popup__form-phone')) {
        $(".popup__form-phone").mask("+7(999)999-99-99");
    }

    if (document.querySelector('.catalog__menu-link')) {
        document.querySelectorAll('.catalog__menu-link').forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
            });
        });
    }

    if (window.innerWidth <= 992) {
        if (targetElem.classList.contains('header__burger')) {
            document.querySelector('.header__menu-list').classList.toggle('_active');
            document.querySelector('.contacts-main').classList.toggle('_active');
            targetElem.classList.toggle('_active');
            document.querySelector('body').classList.toggle('_noscroll');
        }
    }

    if (document.querySelector('.catalog__product-slider')) {
        document.querySelectorAll('.catalog__menu-item')[0].classList.add('_active');
        document.querySelector('.water-slider').classList.add('_active');

        productSlider('.water-slider');
        productSlider('.drinks-slider');
        productSlider('.pomps-slider');
        productSlider('.more-slider');
    }
    if (document.querySelector('.catalog__menu')) {
        mobileSlider('.catalog__menu', '.catalog__menu-body', '.catalog__menu-item');
    }
    if (document.querySelector('.three__reasons-slider')) {
        mobileSlider('.three__reasons-slider', '.reasons-column', '.reasons-column__item');
        new Swiper('.three__reasons-slider', {
            navigation: false,
            pagination: {
                el: '.three__reasons-slider-pagination'
            },
            grabCursor: true,
            spaceBetween: 37,
            initialSlide: 1,
            centeredSlides: true,
            slidesPerView: 'auto'
        })
    }

    if (document.querySelector('.catalog__product-slider')) {
        let sliders = document.querySelectorAll('.catalog__product-slider');
        let tabs = document.querySelectorAll('.catalog__menu-item');

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', function () {
                tabs.forEach(item => {
                    item.classList.remove('_active');
                });
                sliders.forEach(item => {
                    item.classList.remove('_active');
                });
                tabs[i].classList.add('_active');
                sliders[i].classList.add('_active');
            })
        }
    }
    if(document.querySelector('.footer__menu-item')){
        let links =document.querySelectorAll('.footer__menu-item');
        links[links.length - 1].classList.add('footer__privacy');
    }

});

function productSlider(slider) {
    new Swiper(slider, {
        navigation: false,
        loop: true,
        // autoplay: {
        //     delay: 500
        // },
        grabCursor: true,
        spaceBetween: 29,
        slidesPerView: 'auto',
        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.stop();
                });

                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.start();
                });
            }
        },
        breakpoints: {
            1440: { spaceBetween: 29 },
            1200: { centeredSlides: false, initialSlide: 0, spaceBetween: 40 },
            320: { centeredSlides: true, initialSlide: 3 }
        },
    })
}

function mobileSlider(slider, wrapper, slides) {
    if (window.innerWidth <= 768) {
        document.querySelector(slider).classList.add('swiper');
        document.querySelector(wrapper).classList.add('swiper-wrapper');
        document.querySelectorAll(slides).forEach(item => {
            item.classList.add('swiper-slide');
        })
        new Swiper('.catalog__menu', {
            navigation: false,
            grabCursor: true,
            spaceBetween: 29,
            slidesPerView: 'auto'
        })
    }
    else {
        document.querySelector(slider).classList.remove('swiper');
        document.querySelector(wrapper).classList.remove('swiper-wrapper');
        document.querySelectorAll(slides).forEach(item => {
            item.classList.remove('swiper-slide');
        })
    }
}







