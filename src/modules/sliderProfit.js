export const sliderProfit = () => {
    let width = document.documentElement.clientWidth;
    const benefitsItem = Array.from(document.querySelectorAll('.benefits__item'));
    const arrows = document.querySelector('.benefits-arrows');

    if (width > 576) {
        let firstGroup = benefitsItem.slice(0,3);
        let secondGroup = benefitsItem.slice(3);
        const benefitsArrows = document.querySelectorAll('.benefits__arrow');

        secondGroup.forEach(item => item.classList.add('noActiveBenefit'));
        secondGroup.forEach(item => item.classList.add('disappear'));

        benefitsArrows.forEach(benefitsArrow => {
            benefitsArrow.addEventListener('click', (e) => {
                firstGroup.forEach(item => item.classList.toggle('disappear'))
                secondGroup.forEach(item => item.classList.toggle('disappear'))
                setTimeout(() => {
                    secondGroup.forEach(item => item.classList.toggle('noActiveBenefit'));
                    firstGroup.forEach(item => item.classList.toggle('noActiveBenefit'));
                }, 500)
            })
        })
    } else {
         let currentSlide = 0;

          const prevSlide = (index) => {
            benefitsItem[index].classList.add('noActiveBenefit');
        };

        const nextSlide = (index) => {
           benefitsItem[index].classList.remove('noActiveBenefit');
        }

        benefitsItem.forEach((item, index) => {
            if(index !== 0) {
                item.classList.add('noActiveBenefit')
            }
        })

        arrows.addEventListener('click', (e) => {
            if (e.target.closest('.benefits__arrow--left')) {
                prevSlide(currentSlide)
                currentSlide--
                if(currentSlide < 0) {
                   currentSlide =  benefitsItem.length-1
                }
                nextSlide(currentSlide)
            } else if (e.target.closest('.benefits__arrow--right')) {
                prevSlide(currentSlide)
                currentSlide++
                if(currentSlide >= benefitsItem.length) {
                   currentSlide =  0
                }
                nextSlide(currentSlide)
            }
        })

    }
}
