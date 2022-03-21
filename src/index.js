import { modal } from './modules/modal';
import { timer } from './modules/timer';
import { scroll } from './modules/scroll';
import { validation } from './modules/validation';
import { sendForm } from './modules/sendForm';
import { calc } from './modules/calc';
import { slider } from './modules/slider';
import { photoZoom } from './modules/photo';
import { burger } from './modules/burger';

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
photoZoom();
burger();


