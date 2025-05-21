document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })
})

const feedbackBlock = document.querySelector('.feedback__block .cart__feedback')
const firstAnswer = Array.from(feedbackBlock.children)
const btnNext = document.querySelector('.right__btn')
const btnPrev = document.querySelector('.left__btn')

const counterDot = document.querySelector('.counter')
const counterActive = Array.from(counterDot.children)

firstAnswer.forEach(function(slide, index){
    slide.dataset.index = index
})

counterActive.forEach(function(dot,index){  
    dot.dataset.index = index
})

function updateDot(nextIndex) {
    const currentDot = document.querySelector('.dot__active');
    currentDot.classList.remove('dot__active');

    const nextDot = document.querySelector(`.dot[data-index="${nextIndex}"]`);
    nextDot.classList.add('dot__active');
}

btnNext.addEventListener('click', () => {
    isButtonClicked = true;
    currentSlide = feedbackBlock.querySelector('.cart__feedback-active')

    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.remove('cart__feedback-active')

    const nextSlideIndex = currentSlideIndex + 1 >= firstAnswer.length ? 0 : currentSlideIndex + 1
    const nextSlide = document.querySelector(`[data-index="${nextSlideIndex}"]`)
    
    nextSlide.classList.add('cart__feedback-active')

    updateDot(nextSlideIndex)
})

btnPrev.addEventListener('click', () => {
    isButtonClicked = true;
    currentSlide = feedbackBlock.querySelector('.cart__feedback-active')

    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.remove('cart__feedback-active')

    const nextSlideIndex = currentSlideIndex === 0 ? firstAnswer.length - 1 : currentSlideIndex - 1
    
    const nextSlide = document.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.add('cart__feedback-active')

    updateDot(nextSlideIndex)
})


