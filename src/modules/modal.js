export const modal = () => {
     const buttonCall = document.querySelector('.button a');
     const headerModal = document.querySelector('.header-modal');
     const overlay = document.querySelector('.overlay');
     const services = document.getElementById('services');
     const serviceModal = document.querySelector('.services-modal');
     const modalBlock = document.querySelector('.modals');
     const bigPhoto = document.querySelector('.big-photo');
     const wantCall = document.querySelector('.fadeInUp a');
     const giftModal  = document.querySelector('.gift-modal');
     
     function changeDisplay(prop, modal) {
       modal.style.display = prop;
       overlay.style.display = prop;
    }

    buttonCall.addEventListener('click', () => {
        changeDisplay('block', headerModal) 
    })

    services.addEventListener('click', (e) => {
         if (e.target.closest('.service-button')) {
               changeDisplay('block', serviceModal) 
         }
    })

    modalBlock.addEventListener('click', (e) => {
         if (e.target.classList.contains('overlay')) {
               changeDisplay('none', headerModal);
               changeDisplay('none', serviceModal);
               changeDisplay('none', bigPhoto);
               changeDisplay('none', giftModal);
         } else if (e.target.classList.contains('header-modal__close')) {
              changeDisplay('none', headerModal);
         } else if (e.target.classList.contains('services-modal__close')) {
            changeDisplay('none', serviceModal);
       }
    })

    wantCall.addEventListener('click', (e) => {
          e.preventDefault();
          changeDisplay('block', serviceModal)
    })
}

