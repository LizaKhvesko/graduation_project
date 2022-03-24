export const scroll = () => {
    const arrowImg = document.querySelector('.smooth-scroll img');
    arrowImg.hidden = true;

    arrowImg.addEventListener('click', () => {
        window.scrollTo(pageXOffset, 0)
    })

    window.addEventListener('scroll', () => {
      arrowImg.hidden = (pageYOffset < document.documentElement.clientHeight);
    });
}