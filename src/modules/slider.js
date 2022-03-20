export const slider = () => {
    const services = document.getElementById('services');
    const serviceBlocks = document.querySelectorAll('.service-block');
    const arrowLeft = document.querySelector('.services__arrow--left');
    const arrowRight = document.querySelector('.services__arrow--right');

    let currentSlide1 = 0;
    let currentSlide2 = 1;

    const activeSlides = (elements, index1, index2, strClass) => {
        elements[index1].classList.remove(strClass);
        elements[index2].classList.remove(strClass);
    };

    const noActiveSlides = (elements, index1, index2, strClass) => {
        elements[index1].classList.add(strClass);
        elements[index2].classList.add(strClass);
    }

    activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');

    services.addEventListener('click', (e) => {
        if (e.target.classList.contains('services__arrow--right')) {
            noActiveSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');
                currentSlide1 += 2;
                currentSlide2 += 2
            if (currentSlide1 > serviceBlocks.length ||currentSlide2 > serviceBlocks.length ) {
                currentSlide1 = 0;
                currentSlide2 = 1;
            }
            activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');
        } else if (e.target.classList.contains('services__arrow--left')) {
            noActiveSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');
                currentSlide1 -= 2;
                currentSlide2 -= 2;
            if (currentSlide1 < 0 ||currentSlide2 < 0 ) {
                currentSlide1 = serviceBlocks.length-2;
                currentSlide2 = serviceBlocks.length-1;
            }
            activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');
        }
    })
}