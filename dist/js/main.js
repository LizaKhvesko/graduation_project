/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_photo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/photo */ \"./modules/photo.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/burger */ \"./modules/burger.js\");\n\n\n\n\n\n\n\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.timer)('27 march 2022');\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)();\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__.validation)();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__.calc)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__.sendForm)({\n    classForm: '.form-horizontal',\n    nameForm: '',\n    addInfo: [{\n        id: 'calc-total'\n    }]\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__.sendForm)({\n    classForm: '',\n    nameForm: 'callback-form'\n});\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__.sendForm)({\n    classForm: '',\n    nameForm: 'application-form'\n});\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.slider)();\n(0,_modules_photo__WEBPACK_IMPORTED_MODULE_7__.photoZoom)();\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_8__.burger)();\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/burger.js":
/*!***************************!*\
  !*** ./modules/burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => (/* binding */ burger)\n/* harmony export */ });\nconst burger = () => {\n    const burgerBtn = document.querySelector('.collapsed');\n\n    burgerBtn.addEventListener('click', (e) => {\n        if (e.target.closest('.collapsed')) {\n            \n        }\n    })\n}\n\n//# sourceURL=webpack:///./modules/burger.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calc\": () => (/* binding */ calc)\n/* harmony export */ });\nconst calc = () => {\n    const calcBlock = document.getElementById('calc');\n    const type = document.getElementById('calc-type');\n    const material = document.getElementById('calc-type-material');\n    const square = document.getElementById('calc-input');\n    const total = document.getElementById('calc-total');\n\n    function countTotal() {\n        if (type.options[0].selected !== true && material.options[0].selected !== true && square.value !== '') {\n            total.value = (+square.value * type.options[type.selectedIndex].value * material.options[material.selectedIndex].value).toFixed(1);\n        } else {\n            total.value = '0';\n        }\n    }\n\n    if (calcBlock) {\n        calcBlock.addEventListener('change', (e) => {\n            if (e.target === type || e.target === material || e.target === square) {\n                countTotal();\n            }\n        })\n    }\n}\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\n     const buttonCall = document.querySelector('.button a');\n     const headerModal = document.querySelector('.header-modal');\n     const overlay = document.querySelector('.overlay');\n     const services = document.getElementById('services');\n     const serviceModal = document.querySelector('.services-modal');\n     const serviceButtons = document.querySelectorAll('.service-button a');\n     const modalBlock = document.querySelector('.modals');\n     \n     buttonCall.setAttribute('href', '#');\n     serviceButtons.forEach(serviceButton =>  serviceButton.setAttribute('href', '#'))\n\n     function changeDisplay(prop, modal) {\n       modal.style.display = prop;\n       overlay.style.display = prop;\n    }\n\n    buttonCall.addEventListener('click', () => {\n        changeDisplay('block', headerModal) \n    })\n\n    services.addEventListener('click', (e) => {\n         if (e.target.closest('.service-button')) {\n              changeDisplay('block', serviceModal) \n         }\n    })\n\n    modalBlock.addEventListener('click', (e) => {\n         if (e.target.classList.contains('overlay')) {\n               changeDisplay('none', headerModal);\n               changeDisplay('none', serviceModal); \n         } else if (e.target.classList.contains('header-modal__close')) {\n              changeDisplay('none', headerModal);\n         } else if (e.target.classList.contains('services-modal__close')) {\n            changeDisplay('none', serviceModal);\n       }\n    })\n}\n\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/photo.js":
/*!**************************!*\
  !*** ./modules/photo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"photoZoom\": () => (/* binding */ photoZoom)\n/* harmony export */ });\nconst photoZoom = () => {\n     /*const documents = document.getElementById('documents');\n    const overlay = document.querySelector('.overlay');\n\n   let photoBig = document.createElement('div');\n    photoBig.classList.add('big-photo');\n    photoBig.innerHTML = '<img src=\"../../dist/images/documents/original/document4.jpg\" alt=\"original\" class=\"original\">'\n    documents.append(photoBig)\n    documents.addEventListener('click', (e) => {\n        console.log(e.target)\n        if (e.target.clasList.contains('img-responsive')) {\n            e.preventDefault();\n            overlay.style.display = 'block';\n        }\n    })*/\n\n}\n\n//# sourceURL=webpack:///./modules/photo.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\nconst scroll = () => {\n    const arrowImg = document.querySelector('.smooth-scroll img');\n    arrowImg.hidden = true;\n\n    arrowImg.addEventListener('click', () => {\n        window.scrollTo(pageXOffset, 0)\n    })\n\n    window.addEventListener('scroll', function() {\n      arrowImg.hidden = (pageYOffset < document.documentElement.clientHeight);\n    });\n}\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\nconst sendForm = ({classForm = '', nameForm = '', addInfo = []}) => {\n    let forms;\n    if (classForm !== '') {\n        forms = document.querySelectorAll(classForm)\n    } else {\n        forms = document.getElementsByName(nameForm);\n    }\n    \n    forms.forEach(form => {\n        const inputs = Array.from(form.querySelectorAll('input'));\n        inputs.forEach(input => input.required = true)\n\n        const sendData = (data) => {\n            return fetch('https://jsonplaceholder.typicode.com/posts', {\n                method: 'POST',\n                body: JSON.stringify(data),\n                headers: {\n                    \"Content-Type\": \"application/json\" \n                }}).then(res => res.json())\n        }\n\n        const submitForm = () => {\n            if (inputs.every(input => input.style.border !== '3px solid red')) {\n                const formData = new FormData(form);\n                const formBody = {};\n\n                formData.forEach((val, key) => {\n                    formBody[key] = val; \n                })\n                if(nameForm) {\n                   delete formBody.page\n                }\n                if (nameForm === 'callback-form') {\n                   formBody['reason'] = 'call' \n                } else if (classForm === '.form-horizontal') {\n                    formBody['reason'] = 'discount' \n                }\n\n                addInfo.forEach(elem => {\n                const element = document.getElementById(elem.id);\n                if (element) {\n                    if (element.value.length >= 1){\n                        formBody[elem.id] = element.value;  \n                    }\n                }\n            })\n            \n                sendData(formBody)\n                    .then(() => {\n                        inputs.forEach(input => {\n                            input.value = ''\n                        })\n                        addInfo.forEach(elem => {\n                            const element = document.getElementById(elem.id);\n                            if (element) {\n                                const form = document.getElementById('calc');\n                                const inputs = form.querySelectorAll('input');\n                                const selects = form.querySelectorAll('select');\n                                inputs.forEach(input => input.value = '');\n                                selects.forEach(select => select.options[0].selected = true)\n                            }\n                        })\n                    })\n                    .catch(error => console.log(error))\n            } else {\n                return\n            }\n        }\n\n        try {\n            if (!form) {\n                throw new Error('Не найдена форма')\n            }\n\n            form.addEventListener('submit', (e) => {\n                e.preventDefault();\n                submitForm()\n            })\n        } catch (error) {\n            console.log(error.message)\n        }\n    })\n}\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = () => {\n    const services = document.getElementById('services');\n    const serviceBlocks = document.querySelectorAll('.service-block');\n    let width = document.documentElement.clientWidth;\n\n    function doSlide (countOfSlides) {\n        let currentSlide1 = countOfSlides - countOfSlides;\n        let currentSlide2 = countOfSlides - 1;\n\n        const activeSlides = (elements, index1, index2, strClass) => {\n            elements[index1].classList.remove(strClass);\n            elements[index2].classList.remove(strClass);\n        };\n\n        const noActiveSlides = (elements, index1, index2, strClass) => {\n            elements[index1].classList.add(strClass);\n            elements[index2].classList.add(strClass);\n        }\n\n        activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\n\n        services.addEventListener('click', (e) => {\n            if (e.target.closest('.services__arrow--right')) {\n                noActiveSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\n                    currentSlide1 += countOfSlides;\n                    currentSlide2 += countOfSlides;\n                if (currentSlide1 >= serviceBlocks.length ||currentSlide2 >= serviceBlocks.length ) {\n                    currentSlide1 = countOfSlides - countOfSlides;\n                    currentSlide2 = countOfSlides - 1;\n                }\n                activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\n            } else if (e.target.closest('.services__arrow--left')) {\n                noActiveSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\n                    currentSlide1 -= countOfSlides;\n                    currentSlide2 -= countOfSlides;\n                if (currentSlide1 < 0 ||currentSlide2 < 0 ) {\n                    currentSlide1 = serviceBlocks.length-countOfSlides;\n                    currentSlide2 = serviceBlocks.length-1;\n                }\n                activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\n            }\n        })\n    }\n\n    width > 576 ? doSlide(2) : doSlide(1);\n}\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (date) => {\n    const daysSpan = document.querySelectorAll('.count_1 span');\n    const hoursSpan = document.querySelectorAll('.count_2 span');\n    const minutesSpan = document.querySelectorAll('.count_3 span');\n    const secondsSpan = document.querySelectorAll('.count_4 span');\n\n    const getRemaining = () => {\n        let dateStop = new Date(date).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\n        let hours = Math.floor((timeRemaining / 60 / 60) %24);\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n         if (timeRemaining < 0) {\n            timeRemaining = 0;\n            days = 0;\n            hours = 0;\n            minutes = 0;\n            seconds = 0;\n        }\n        \n        return {timeRemaining, days, hours, minutes, seconds}\n    }\n\n    const addZero = (time, spans) => {\n         spans.forEach(span => {\n            time < 10 ? span.textContent = '0' + time : span.textContent = time;\n        })\n    }\n\n    const updateClock = () => {\n        let getTime = getRemaining();\n        \n        addZero(getTime.days, daysSpan);\n        addZero(getTime.hours, hoursSpan);\n        addZero(getTime.minutes, minutesSpan);\n        addZero(getTime.seconds, secondsSpan);\n    }\n\n    const interval = () => {\n        let intervalId;\n        let getTime = getRemaining();\n        updateClock();\n        if(getTime.timeRemaining > 0) {\n            intervalId = setInterval(updateClock, 1000);\n        } else {\n            clearInterval(intervalId)\n        }\n    }\n    interval();\n}\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validation\": () => (/* binding */ validation)\n/* harmony export */ });\nconst validation = () => {\n    const names = document.querySelectorAll('input[name=\"fio\"]');\n    const tels = document.querySelectorAll('input[name=\"phone\"]');\n    const calcInput = document.getElementById('calc-input');\n    \n    names.forEach(name => {\n        name.addEventListener('input', (e) => {\n            let reg = /[^a-zа-я]/gi;\n            e.target.value =  e.target.value.replace(reg, '');\n        })\n    })\n\n    tels.forEach(tel => {\n        tel.addEventListener('input', (e) => {\n            let reg = /[^\\d\\+\\(\\)]/g;\n            e.target.value =  e.target.value.replace(reg, '');\n            if (e.target.value.length > 17) {\n               tel.style.border = '3px solid red';\n            } else {\n                tel.style.border = ''\n            }\n            e.target.value =e.target.value[0] + e.target.value.slice(1).replace('+', '');\n        })\n    })\n\n    if (calcInput) {\n        calcInput.addEventListener('input', (e) => {\n            let reg = /[^\\d]/g;\n            e.target.value =  e.target.value.replace(reg, '');\n        })\n    }\n}\n\n//# sourceURL=webpack:///./modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;