import { modal } from './modules/modal';
import { timer } from './modules/timer';
import { scroll } from './modules/scroll';
import { validation } from './modules/validation';
import { sendForm } from './modules/sendForm';
import { calc } from './modules/calc';
import { slider } from './modules/slider';

modal();
timer('27 march 2022');
scroll();
validation();
calc();
sendForm({
    classForm: '.form-horizontal',
    addInfo: [{
        type: 'input',
        id: 'calc-total'
    }]
});
slider();


