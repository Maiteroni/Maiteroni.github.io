const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;


prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    slide();
});

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slideCount;
    slide();
});

const slide = () => {
    const imageWidth = slider.clientWidth;
    const slideOffset = -slideIndex * imageWidth;
    slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
    slide();
});

//форма заказа
function serializeForm(formNode) {
    const { elements } = formNode //собираем данные из полей формы
    const data = Array.from(elements) //создаем из этих полей массив, для каждого в элемент пишем название и введенное значение
        .map((element) => {
            const { name, value } = element
            return { name, value }
        })
}

//При отправке формы мы собираем данные, запустив ф-ю сбора из полей и формирования массива
function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(orderForm)
}

//слушаем отправку формы
const orderForm = document.getElementById('order-form')
orderForm.addEventListener('submit', handleFormSubmit)
