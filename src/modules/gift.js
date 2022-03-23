export const gift = () => {
    const gift = document.querySelector('.gift');
    const giftModal  = document.querySelector('.gift-modal');
    const overlay = document.querySelector('.overlay');
    const closePhotoGift = document.querySelector('.close-photo-gift');
    let infoForLocal = [];

    infoForLocal = JSON.parse(localStorage.getItem ("infoForLocal")) || infoForLocal;

     window.addEventListener('scroll', function() {
      if (pageYOffset >= 1500 && pageYOffset < 2000 && !gift.classList.contains('no-more-open') && infoForLocal.length === 0) {
              gift.classList.add('open');
      } else { gift.classList.remove('open')}
    });

    gift.querySelector('img').addEventListener('click', () => {
        giftModal.classList.add('gift-modal-open');
        gift.classList.add('no-more-open');
        gift.classList.remove('open')
        overlay.style.display = 'block';
        infoForLocal = [{open: true}];
        localStorage.setItem("infoForLocal", JSON.stringify(infoForLocal));
    })
    
    closePhotoGift.addEventListener('click', () => {
        giftModal.classList.remove('gift-modal-open');
        overlay.style.display = 'none';
    })  
}