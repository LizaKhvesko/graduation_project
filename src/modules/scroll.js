export const scroll = () => {
    const arrowImg = document.querySelector('.smooth-scroll img');

    arrowImg.addEventListener('click', () => {
        window.scrollTo(pageXOffset, 0)
    })

    window.addEventListener('scroll', function() {
      arrowImg.hidden = (pageYOffset < document.documentElement.clientHeight);
    });
}