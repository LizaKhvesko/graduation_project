export const autoSlider = () => {
    const sliderBlock = document.querySelector('.offer-backgr');
    const slides = document.querySelectorAll('.offer-img');
    let currentSlide = 0;
    let interval;

    const prevSlide = (index) => {
        slides[index].classList.remove('offer-img-active');
    };

    const nextSlide = (index) => {
        slides[index].classList.add('offer-img-active');
    }

    const autoSlide = () => {
            prevSlide(currentSlide);

            currentSlide++
            if(currentSlide >= slides.length) {
                currentSlide = 0;
            }
            nextSlide(currentSlide);
    }

    const startSlide = (timer = 2500) => {
        interval = setInterval(autoSlide, timer);
    };

    startSlide()
}