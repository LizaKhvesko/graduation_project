export const sliderProfit = () => {
    const benefitsItem = Array.from(document.querySelectorAll('.benefits__item'));
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
}
