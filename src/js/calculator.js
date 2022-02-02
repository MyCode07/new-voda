window.addEventListener('load', function () {
    if (document.querySelector('[data-delivery]')) {
        document.querySelectorAll('[data-delivery]')[1].classList.add('_active');
    }
    if (document.querySelector('[data-cooking]')) {
        document.querySelectorAll('[data-cooking]')[0].classList.add('_active');
    }
    document.addEventListener('click', function (e) {
        calculate(e);
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

        calcBottleCount();

    }
    if (targetElem.classList.contains('count-plus')) {
        let count = targetElem.parentElement.querySelector('.calc__input');
        let value = +count.value;
        value += 1;
        count.value = value;



    }




}



function calcBottleCount() {
    let personsCount = document.querySelector('._persons');
    let persons = +personsCount.value;
    let daysCount = document.querySelector('._days');
    let days = +daysCount.value;


    // срендяя ежедневная норма для одного чела 2 литра
    let norma = 2;

    // среняее ежеднегное количество воды на готовку 
    let cooking = 4;

    // 19 литров в бутылке
    let bottle = 19;

    // количество бутулок - не меньше 1
    let bottleCount;

    // 1 чел 1 бутылку пъёт за 9 дней без готовки 
    let personSpendOneBottle = bottle / norma;

    // если челодней больше или равно кратное 9 я величиавю бутылку на 1

    let oneBottleSpend = persons * days;
    if (oneBottleSpend <= 9) {
        bottleCount = 1;
    }

    // мне надо сделать паттерн из этого
    if(oneBottleSpend>9*1 && oneBottleSpend<=9*2){
        bottleCount = 2;
    }
    if(oneBottleSpend>9*2 && oneBottleSpend<=9*3){
        bottleCount = 3;
    }




    /* каждый раз когда чел*дней = кратное 9 я дабавялю +1 к бутилке, если чел*дней <= 9 то бутылка = 1 это без готовки */
    /* а с готовкой к челу добавляет норма готовки в день становится 2 + 4 = 6 и та же самая логика, если кратное 9 то  я дабавялю +1 к бутилке, если меньше или равно 9, бутылка = 1; */
}






