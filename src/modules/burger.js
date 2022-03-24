export const burger = () => {
   const burgerBtn = document.querySelector('.mobile-menu-btn');
   const menu = document.querySelector('.mobile-menu-wrapper');
   const overlay = document.querySelector('.overlay');

    const scroll = (element) => {
        const id = element.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    const hide = () => {
        menu.style.transform = 'translateX(100%)';
        overlay.style.display = 'none';
    }

   burgerBtn.addEventListener('click', () => {
       menu.style.transform = 'translateX(0)';
       overlay.style.display = 'block';
   })

   menu.addEventListener('click', (e) => {
        if(e.target.classList.contains('mobil-menu__close')) {
            hide();
        } else if (e.target.closest('.mobile-menu-wrapper a')) {
            let link = e.target.closest('a');
            e.preventDefault();
            scroll(link);
            hide();
        }
   })
}