export const numberAnimation = () => {
    const numbers = document.querySelectorAll('.num span');
      window.addEventListener('scroll', function() {
        if (pageYOffset > 1600 && pageYOffset < 1800) {
            numbers.forEach(number => {
                if(!number.classList.contains('stop')) {
                    number.classList.add('stop');
                    let totalNumber = +number.textContent;
                
                    animate({
                        duration: 1500,
                        timing(timeFraction) {
                            return timeFraction;
                        },
                        draw(progress) {
                            number.textContent = Math.round(totalNumber * progress)
                        }
                    });
                } else {
                    return
    }})} })

    const animate = function ({timing, draw, duration}) {
    let start = performance.now();
        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;
            let progress = timing(timeFraction);

            draw(progress); 
            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        });
    }
}