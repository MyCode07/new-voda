window.addEventListener('load', function (e) {
    if (document.querySelector('[data-delivery]')) {
        document.querySelectorAll('[data-delivery]')[1].classList.add('_active');
    }
    if (document.querySelector('[data-cooking]')) {
        document.querySelectorAll('[data-cooking]')[0].classList.add('_active');
    }
    document.addEventListener('click', function (e) {
        let targetElem = e.target;

        if (targetElem.classList.contains('count-minus')) {
            let count = targetElem.parentElement.querySelector('.calc__input');
            let value = +count.value;
            if (value > 1) {
                value -= 1;
                count.value = value;
            }
            else {
                value = 1;
                count.value = value;
            }
        }
        if (targetElem.classList.contains('count-plus')) {
            let count = targetElem.parentElement.querySelector('.calc__input');
            let value = +count.value;
            value += 1;
            count.value = value;
        }
        if (document.querySelector('.calculator')) {
            calculate(e);
        }
    });

    document.addEventListener('input', function (e) {
        if (document.querySelector('.calculator')) {
            calculate(e);
        }
    });
});

function calculate(e) {
    let targetElem = e.target;
    if (targetElem.hasAttribute('data-delivery')) {
        document.querySelectorAll('[data-delivery]').forEach(item => {
            item.classList.remove('_active');
        });
        targetElem.classList.add('_active');
    }

    if (targetElem.hasAttribute('data-cooking')) {
        document.querySelectorAll('[data-cooking]').forEach(item => {
            item.classList.remove('_active');
        });
        targetElem.classList.add('_active');
    }

    //--------------------------------------------------------------
    let personsCount = document.querySelector('._persons');
    let daysCount = document.querySelector('._days');
    let persons = + personsCount.value;
    let days = + daysCount.value;

    // срендяя ежедневная норма для одного чела 2 литра
    let norma = 2;

    // среняее ежеднегное количество воды на готовку 
    let cooking = 4;

    // 19 литров в бутылке
    let bottle = 19;

    // количество бутулок - не меньше 1
    let bottleCount;

    // 1 чел 1 бутылку пъёт за 9 дней без готовки 
    let personSpendOneBottle;

    if (document.querySelector('#with-cooking').classList.contains('_active')) {
        personSpendOneBottle = Math.floor(bottle / (norma + cooking));
    }
    else {
        personSpendOneBottle = Math.floor(bottle / norma);
    }

    // если челодней больше или равно кратное 9 я величиавю бутылку на 1

    let oneBottleSpend = persons * days;

    if (targetElem.classList.contains('column-calc__count-minus')) {
        console.log(Math.floor(oneBottleSpend / personSpendOneBottle));
    }
    if (targetElem.classList.contains('column-calc__count-plus')) {
        console.log(Math.floor(oneBottleSpend / personSpendOneBottle));
    }

    bottleCount = Math.floor(oneBottleSpend / personSpendOneBottle) + 1;

    if (oneBottleSpend <= personSpendOneBottle) {
        bottleCount = 1;
    }

    if (document.querySelector('.water-count')) {
        document.querySelector('.water-count').innerText = bottleCount;
    }
}

// перед npm run build файлы которые будешь подключить отдельно убери в папку files- это ссылки, калкулятор и форма

