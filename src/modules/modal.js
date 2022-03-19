export const modal = () => {
    const body = document.querySelector('body');
    const headerModal = body.querySelector('.header-modal');
    const overlay = body.querySelector('.overlay');

    function changeDisplay(prop) {
       headerModal.style.display = prop;
       overlay.style.display = prop;
    }

   body.addEventListener('click', (e) => {
       if(e.target.classList.contains('header-modal__close') || e.target.classList.contains('overlay')) {
            changeDisplay('none');
       } else if (e.target.classList.contains('fancyboxModal')) {
            changeDisplay('block');
       }
   })
}

