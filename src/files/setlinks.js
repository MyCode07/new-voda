window.addEventListener('load', function () {
    setLinksHref();
});

function setLinksHref() {
    if (document.querySelector('.header__main-contacts .contacts-main__phone')) {
        let phoneLink = document.querySelector('.header__main-contacts .contacts-main__phone');
        let phone = phoneLink.querySelector('.contact-item').innerText;

        if (phone != '') {
            let phoneReady = phone.replace((/[^0-9]/g), '');
            phoneLink.href = `tel:+${phoneReady.trim()}`;
        }
        else {
            phoneLink.href = `#`;
        }
    }

    if (document.querySelector('.header__main-contacts .contacts-main__whatsapp')) {
        let whappLink = document.querySelector('.header__main-contacts .contacts-main__whatsapp');
        let whapp = whappLink.querySelector('.contact-item').innerText;

        if (whapp != '') {
            let whappReady = whapp.replace((/[^0-9]/g), '');
            whappLink.href = `https://wa.me/+${whappReady.trim()}`;
        }
        else {
            whappLink.href = `#`;
        }

    }

    if (document.querySelector('.header__main-contacts .contacts-main__instagram')) {

        let instaLink = document.querySelector('.header__main-contacts .contacts-main__instagram');
        let insta = instaLink.querySelector('.contact-item').innerText;

        if (insta != '') {
            let instaReady = insta.replace((/\@/g), '');
            instaLink.href = `https://www.instagram.com/${instaReady.trim()}/`;
        }
        else {
            instaLink.href = `#`;
        }
    }

    if (document.querySelector('.footer__contacts-phone')) {

        let footerPhoneLink = document.querySelector('.footer__contacts-phone');
        let footerPhone = footerPhoneLink.querySelector('.contact-item').innerText;

        if (footerPhone != '') {
            let footerPhoneReady = footerPhone.replace((/[^0-9]/g), '');
            footerPhoneLink.href = `tel:+${footerPhoneReady.trim()}`;
        }
        else {
            footerPhoneLink.href = `#`;
        }
    }

    if (document.querySelector('.footer__contacts-whatsapp')) {
        let footerWhappLink = document.querySelector('.footer__contacts-whatsapp');
        let footerWhapp = footerWhappLink.querySelector('.contact-item').innerText;

        if (footerWhapp != '') {
            let footerWhappReady = footerWhapp.replace((/[^0-9]/g), '');
            footerWhappLink.href = `https://wa.me/+${footerWhappReady.trim()}`;
        }
        else {
            footerWhappLink.href = `#`;
        }

    }

    if (document.querySelector('.footer__contacts-instagram')) {

        let footerInstaLink = document.querySelector('.footer__contacts-instagram');
        let footerInsta = footerInstaLink.querySelector('.contact-item').innerText;

        if (footerInsta != '') {
            let footerInstaReady = footerInsta.replace((/\@/g), '');
            footerInstaLink.href = `https://www.instagram.com/${footerInstaReady.trim()}/`;
        }
        else {
            footerInstaLink.href = `#`;
        }
    }

    if (document.querySelector('.footer__contacts-vk')) {
        let vkLink = document.querySelector('.footer__contacts-vk');
        let vk = vkLink.querySelector('.contact-item').innerText;

        if (vk != '') {
            vkLink.href = `https://${vk.trim()}`;
        }
        else {
            vkLink.href = `#`;
        }

    }
}