export const validation = () => {
    const names = document.querySelectorAll('input[name="fio"]');
    const tels = document.querySelectorAll('input[name="phone"]');
    const calcInput = document.getElementById('calc-input');

    names.forEach(name => {
        name.addEventListener('input', (e) => {
            let reg = /[^a-zа-я\s]/gi;
            e.target.value = e.target.value.replace(reg, '');
        })
    })

    tels.forEach(tel => {
        tel.addEventListener('input', (e) => {
            let reg = /[^\d\+\(\)]/g;
            e.target.value =  e.target.value.replace(reg, '');
            if (e.target.value.length > 17) {
               tel.style.border = '3px solid red';
            } else {
                tel.style.border = '';
            }
        })
    })

    if (calcInput) {
        calcInput.addEventListener('input', (e) => {
            let reg = /[^\d]/g;
            e.target.value =  e.target.value.replace(reg, '');
        })
    }
}