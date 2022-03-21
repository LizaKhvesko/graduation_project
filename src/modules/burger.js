export const burger = () => {
    const burgerBtn = document.getElementById('navigation');
    const mobileMenu = burgerBtn.querySelector('.navbar-collapse.collapse');

    burgerBtn.addEventListener('click', (e) => {
        if (e.target.closest('.collapsed')) {
           mobileMenu.classList.toggle('burger-open');
        } else if (mobileMenu.classList.contains('burger-open') && !e.target.classList.contains('navbar-collapse')) {
            mobileMenu.classList.remove('burger-open');
        }
    })
}