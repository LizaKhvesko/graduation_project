import { modal } from './modules/modal';
import { timer } from './modules/timer';
import { scroll } from './modules/scroll';
import { validation } from './modules/validation';
import { sendForm } from './modules/sendForm';
import { calc } from './modules/calc';
import { slider } from './modules/slider';
import { burger } from './modules/burger';
import { sliderProfit } from './modules/sliderProfit';
import { getData } from './modules/getData';
import { createSertificate } from './modules/createSertificate';
import { gift } from './modules/gift';
import { comments } from './modules/comments';
import { numberAnimation } from './modules/numberAnimation';



getData('../db.json')
    .then(data => createSertificate(data));
modal();
timer('27 march 2022');
scroll();
validation();
calc();
sendForm({
    classForm: '.form-horizontal',
    nameForm: '',
    addInfo: [{
        id: 'calc-total'
    }]
});
sendForm({
    classForm: '',
    nameForm: 'callback-form'
});
sendForm({
    classForm: '',
    nameForm: 'application-form'
});
slider();
burger();
sliderProfit();
gift();
getData('../comments.json')
    .then(data => {
        comments(data)
    });
numberAnimation();


const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
      delay: 3000,
  }
});






