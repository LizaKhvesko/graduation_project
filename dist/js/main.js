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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/burger */ \"./modules/burger.js\");\n/* harmony import */ var _modules_sliderProfit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sliderProfit */ \"./modules/sliderProfit.js\");\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/getData */ \"./modules/getData.js\");\n/* harmony import */ var _modules_createSertificate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/createSertificate */ \"./modules/createSertificate.js\");\n/* harmony import */ var _modules_gift__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/gift */ \"./modules/gift.js\");\n/* harmony import */ var _modules_comments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/comments */ \"./modules/comments.js\");\n/* harmony import */ var _modules_numberAnimation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/numberAnimation */ \"./modules/numberAnimation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_getData__WEBPACK_IMPORTED_MODULE_9__.getData)('../db.json')\r\n    .then(data => (0,_modules_createSertificate__WEBPACK_IMPORTED_MODULE_10__.createSertificate)(data));\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.timer)('27 march 2022');\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__.validation)();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__.calc)();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__.sendForm)({\r\n    classForm: '.form-horizontal',\r\n    nameForm: '',\r\n    addInfo: [{\r\n        id: 'calc-total'\r\n    }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__.sendForm)({\r\n    classForm: '',\r\n    nameForm: 'callback-form'\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__.sendForm)({\r\n    classForm: '',\r\n    nameForm: 'application-form'\r\n});\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.slider)();\r\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_7__.burger)();\r\n(0,_modules_sliderProfit__WEBPACK_IMPORTED_MODULE_8__.sliderProfit)();\r\n(0,_modules_gift__WEBPACK_IMPORTED_MODULE_11__.gift)();\r\n(0,_modules_getData__WEBPACK_IMPORTED_MODULE_9__.getData)('../comments.json')\r\n    .then(data => {\r\n        (0,_modules_comments__WEBPACK_IMPORTED_MODULE_12__.comments)(data)\r\n    });\r\n(0,_modules_numberAnimation__WEBPACK_IMPORTED_MODULE_13__.numberAnimation)();\r\n\r\n\r\nconst swiper = new Swiper('.swiper', {\r\n  loop: true,\r\n  autoplay: {\r\n      delay: 3000,\r\n  }\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/burger.js":
/*!***************************!*\
  !*** ./modules/burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => (/* binding */ burger)\n/* harmony export */ });\nconst burger = () => {\r\n   const burgerBtn = document.querySelector('.mobile-menu-btn');\r\n   const menu = document.querySelector('.mobile-menu-wrapper');\r\n   const overlay = document.querySelector('.overlay');\r\n    if (burgerBtn) {\r\n            const scroll = (element) => {\r\n            const id = element.getAttribute('href');\r\n            document.querySelector(id).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n        }\r\n\r\n        const hide = () => {\r\n            menu.style.transform = 'translateX(100%)';\r\n            overlay.style.display = 'none';\r\n        }\r\n\r\n    burgerBtn.addEventListener('click', () => {\r\n        menu.style.transform = 'translateX(0)';\r\n        overlay.style.display = 'block';\r\n    })\r\n\r\n    menu.addEventListener('click', (e) => {\r\n            if(e.target.classList.contains('mobil-menu__close')) {\r\n                hide();\r\n            } else if (e.target.closest('.mobile-menu-wrapper a')) {\r\n                let link = e.target.closest('a');\r\n                e.preventDefault();\r\n                scroll(link);\r\n                hide();\r\n            }\r\n    })\r\n    }\r\n   \r\n}\n\n//# sourceURL=webpack:///./modules/burger.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calc\": () => (/* binding */ calc)\n/* harmony export */ });\nconst calc = () => {\r\n    const calcBlock = document.getElementById('calc');\r\n    const type = document.getElementById('calc-type');\r\n    const material = document.getElementById('calc-type-material');\r\n    const square = document.getElementById('calc-input');\r\n    const total = document.getElementById('calc-total');\r\n\r\n    function countTotal() {\r\n        if (type.options[0].selected !== true && material.options[0].selected !== true && square.value !== '') {\r\n            total.value = (+square.value * type.options[type.selectedIndex].value * material.options[material.selectedIndex].value).toFixed(1);\r\n        } else {\r\n            total.value = '0';\r\n        }\r\n    }\r\n\r\n    if (calcBlock) {\r\n        calcBlock.addEventListener('change', (e) => {\r\n            if (e.target === type || e.target === material || e.target === square) {\r\n                countTotal();\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/comments.js":
/*!*****************************!*\
  !*** ./modules/comments.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comments\": () => (/* binding */ comments)\n/* harmony export */ });\nconst comments = (data) => {\r\n    const loading = document.querySelector('.loading');\r\n    loading.remove();\r\n\r\n    const comments = data.comments;\r\n    let commentsContainer = document.querySelector('#reviews .comments-container');\r\n    let newComment\r\n\r\n    function createComment(part1, part2) {\r\n        newComment = document.createElement('div');\r\n        newComment.classList.add('review-margin-bottom');\r\n        newComment.classList.add('row');\r\n        newComment.classList.add('comment-item');\r\n        newComment.innerHTML = `\r\n                ${part1}\r\n\t\t\t\t${part2}\r\n            `\r\n        commentsContainer.append(newComment) \r\n    }\r\n\r\n\r\n    comments.forEach((comment, index) => {\r\n       let photo = comment.image ? comment.image : 'no-photo.png'\r\n       let part1 = `\r\n            <div class=\"col-xs-3 col-sm-2\">\r\n\t\t\t\t<div class=\"review-user\">\r\n\t\t\t\t\t<img src=\"images/users/${photo}\" alt=\"\" class=\"img-responsive avatar\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n       `\r\n       let part2 = `\r\n            <div class=\"col-xs-9 col-sm-9\">\r\n\t\t\t\t<div class=\"review-inner review-gray review-arrow review-arrow-right\">\r\n\t\t\t\t\t<p class=\"text-normal\">${comment.author}</p>\r\n\t\t\t\t\t<p>${comment.comment}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n       `\r\n        if(index % 2 === 1) {\r\n           createComment(part1, part2)\r\n        } else {\r\n            createComment(part2, part1)\r\n        }\r\n    })\r\n\r\n    let commentsAll = Array.from(document.querySelectorAll('.comment-item'));\r\n    commentsAll.forEach((comment, index) => {\r\n        if(index > 2) {\r\n             comment.classList.add('noActive-comment');\r\n        } else {\r\n                comment.classList.remove('noActive-comment');\r\n            }\r\n        })\r\n\r\n    setInterval(() => {\r\n        commentsAll.forEach(comment => {\r\n            comment.classList.toggle('noActive-comment');\r\n        })\r\n    }, 20000);\r\n}\r\n\r\n\t\n\n//# sourceURL=webpack:///./modules/comments.js?");

/***/ }),

/***/ "./modules/createSertificate.js":
/*!**************************************!*\
  !*** ./modules/createSertificate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSertificate\": () => (/* binding */ createSertificate)\n/* harmony export */ });\nconst createSertificate = (data) => {\r\n    const container = document.querySelector('#documents .container');\r\n    const info = data.sertificates;\r\n    const block = document.createElement('div');\r\n    block.classList.add('text-center');\r\n    block.innerHTML = '';\r\n    info.forEach(item => {\r\n        block.innerHTML += `\r\n             <div class=\"col-sm-4\">\r\n\t    \t    <a href=\"${item.small}\" class=\"sertificate-document\" data-fancybox-group=\"gallery-documents\">\r\n\t\t\t        <img src=\"${item.small}\" class=\"img-responsive glo\" alt=\"\">\r\n\t\t\t        <div class=\"document-overlay\"></div>\r\n\t            </a>\r\n\t        </div>\r\n        `\r\n    })\r\n    container.append(block);\r\n\r\n    const overlay = document.querySelector('.overlay');\r\n    const sertificatesGlo = document.querySelectorAll('.sertificate-document');\r\n    const documentOverlay = document.querySelectorAll('.document-overlay');\r\n    const bigPhoto = document.querySelector('.big-photo');\r\n    const bigPhotoAdress = [];\r\n\r\n    info.forEach(item => bigPhotoAdress.push(item.big));\r\n\r\n    sertificatesGlo.forEach((item,index) =>{\r\n         item.addEventListener('mouseover', () => {\r\n            documentOverlay[index].style.opacity = '0.9';\r\n         })\r\n\r\n         item.addEventListener('mouseout', () => {\r\n            documentOverlay[index].style.opacity = ''; \r\n         })\r\n\r\n         item.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            bigPhoto.innerHTML = '';\r\n            bigPhoto.innerHTML = `\r\n                <img class=\"close-photo\" src=\"images/close-1.png\">\r\n\t\t\t\t<img src=\"${bigPhotoAdress[index]}\" class=\"big-photo-img\">\r\n            `\r\n            bigPhoto.style.display = 'block';\r\n            overlay.style.display = 'block';\r\n\r\n            const closePhotoBtn = document.querySelector('.close-photo')\r\n            closePhotoBtn.addEventListener('click', () => {\r\n                bigPhoto.style.display = 'none';\r\n                overlay.style.display = 'none'\r\n            })\r\n        })\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/createSertificate.js?");

/***/ }),

/***/ "./modules/getData.js":
/*!****************************!*\
  !*** ./modules/getData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst getData = (url) => {\r\n      return fetch(url)\r\n        .then(response => response.json())\r\n        .catch(() => console.log('Произошла ошибка, данных нет!'))\r\n}\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/gift.js":
/*!*************************!*\
  !*** ./modules/gift.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gift\": () => (/* binding */ gift)\n/* harmony export */ });\nconst gift = () => {\r\n    const gift = document.querySelector('.gift');\r\n    const giftModal  = document.querySelector('.gift-modal');\r\n    const overlay = document.querySelector('.overlay');\r\n    const closePhotoGift = document.querySelector('.close-photo-gift');\r\n    let infoForLocal = [];\r\n\r\n    infoForLocal = JSON.parse(localStorage.getItem (\"infoForLocal\")) || infoForLocal;\r\n\r\n     window.addEventListener('scroll', function() {\r\n      if (pageYOffset >= 1250 && pageYOffset < 1720 && !gift.classList.contains('no-more-open') && infoForLocal.length === 0) {\r\n              gift.classList.add('open');\r\n      } else { gift.classList.remove('open')}\r\n    });\r\n\r\n    gift.querySelector('img').addEventListener('click', () => {\r\n        giftModal.classList.add('gift-modal-open');\r\n        gift.classList.add('no-more-open');\r\n        gift.classList.remove('open')\r\n        overlay.style.display = 'block';\r\n        infoForLocal = [{open: true}];\r\n        localStorage.setItem(\"infoForLocal\", JSON.stringify(infoForLocal));\r\n    })\r\n    \r\n    closePhotoGift.addEventListener('click', () => {\r\n        giftModal.classList.remove('gift-modal-open');\r\n        overlay.style.display = 'none';\r\n    })  \r\n}\n\n//# sourceURL=webpack:///./modules/gift.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\r\n     const buttonCall = document.querySelector('.button a');\r\n     const headerModal = document.querySelector('.header-modal');\r\n     const overlay = document.querySelector('.overlay');\r\n     const services = document.getElementById('services');\r\n     const serviceModal = document.querySelector('.services-modal');\r\n     const modalBlock = document.querySelector('.modals');\r\n     const bigPhoto = document.querySelector('.big-photo');\r\n     const wantCall = document.querySelector('.fadeInUp a');\r\n     const giftModal  = document.querySelector('.gift-modal');\r\n     const menu = document.querySelector('.mobile-menu-wrapper');\r\n     \r\n     function changeDisplay(prop, modal) {\r\n       modal.style.display = prop;\r\n       overlay.style.display = prop;\r\n    }\r\n\r\n    buttonCall.addEventListener('click', (e) => {\r\n          e.preventDefault();\r\n        changeDisplay('block', headerModal) \r\n        \r\n    })\r\n\r\n    services.addEventListener('click', (e) => {\r\n         if (e.target.closest('.service-button')) {\r\n              e.preventDefault();\r\n               changeDisplay('block', serviceModal) \r\n         }\r\n    })\r\n\r\n    modalBlock.addEventListener('click', (e) => {\r\n         if (e.target.classList.contains('overlay')) {\r\n               changeDisplay('none', headerModal);\r\n               changeDisplay('none', serviceModal);\r\n               changeDisplay('none', bigPhoto);\r\n               changeDisplay('none', giftModal);\r\n               menu.style.transform = 'translateX(100%)';\r\n         } else if (e.target.classList.contains('header-modal__close')) {\r\n              changeDisplay('none', headerModal);\r\n         } else if (e.target.classList.contains('services-modal__close')) {\r\n            changeDisplay('none', serviceModal);\r\n       }\r\n    })\r\n\r\n    wantCall.addEventListener('click', (e) => {\r\n          e.preventDefault();\r\n          changeDisplay('block', serviceModal)\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/numberAnimation.js":
/*!************************************!*\
  !*** ./modules/numberAnimation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberAnimation\": () => (/* binding */ numberAnimation)\n/* harmony export */ });\nconst numberAnimation = () => {\n    const numbers = document.querySelectorAll('.num span');\n      window.addEventListener('scroll', function() {\n        if (pageYOffset > 1600 && pageYOffset < 1800) {\n            numbers.forEach(number => {\n                if(!number.classList.contains('stop')) {\n                    number.classList.add('stop');\n                    let totalNumber = +number.textContent;\n                \n                    animate({\n                        duration: 1500,\n                        timing(timeFraction) {\n                            return timeFraction;\n                        },\n                        draw(progress) {\n                            number.textContent = Math.round(totalNumber * progress)\n                        }\n                    });\n                } else {\n                    return\n    }})} })\n\n    const animate = function ({timing, draw, duration}) {\n    let start = performance.now();\n        requestAnimationFrame(function animate(time) {\n            let timeFraction = (time - start) / duration;\n            if (timeFraction > 1) timeFraction = 1;\n            let progress = timing(timeFraction);\n\n            draw(progress); \n            if (timeFraction < 1) {\n                requestAnimationFrame(animate);\n            }\n        });\n    }\n}\n\n//# sourceURL=webpack:///./modules/numberAnimation.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\nconst scroll = () => {\r\n    const arrowImg = document.querySelector('.smooth-scroll img');\r\n    arrowImg.hidden = true;\r\n\r\n    arrowImg.addEventListener('click', () => {\r\n        window.scrollTo(pageXOffset, 0)\r\n    })\r\n\r\n    window.addEventListener('scroll', () => {\r\n      arrowImg.hidden = (pageYOffset < document.documentElement.clientHeight);\r\n    });\r\n}\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\nconst sendForm = ({classForm = '', nameForm = '', addInfo = []}) => {\r\n    let forms;\r\n    const overlay = document.querySelector('.overlay');\r\n    if (classForm !== '') {\r\n        forms = document.querySelectorAll(classForm);\r\n    } else {\r\n        forms = document.getElementsByName(nameForm);\r\n    }\r\n\r\n    function afterSendData (modal) {\r\n        const text = modal.querySelector('p.text-center');\r\n        text.textContent = 'Ваши данные успешно отправлены!'\r\n        setTimeout(() => {\r\n            modal.style.display = 'none';\r\n            overlay.style.display = 'none';\r\n        }, 2000)\r\n        setTimeout(() => {\r\n            text.textContent = 'Мы гарантируем 100% онфиденциальность. Ваша информация не будет распространяться.'\r\n        }, 2500)\r\n    }\r\n    \r\n    forms.forEach(form => {\r\n        const inputs = Array.from(form.querySelectorAll('input'));\r\n        inputs.forEach(input => input.required = true)\r\n\r\n        const sendData = (data) => {\r\n            return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n                method: 'POST',\r\n                body: JSON.stringify(data),\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\" \r\n                }}).then(res => res.json())\r\n        }\r\n\r\n        const submitForm = () => {\r\n            if (inputs.every(input => input.style.border !== '3px solid red')) {      \r\n                const formData = new FormData(form);\r\n                const formBody = {};\r\n\r\n                formData.forEach((val, key) => {\r\n                    if (key === 'phone') {\r\n                        val = val.split('').map(el => +el).filter(el => el).join('');\r\n                        formBody[key] = val; \r\n                    } else if (val !== '') {\r\n                        formBody[key] = val; \r\n                    }\r\n                })\r\n\r\n                if(nameForm) {\r\n                   delete formBody.page\r\n                }\r\n                nameForm === 'callback-form' ? formBody['reason'] = 'call' : '';\r\n                classForm === '.form-horizontal' ? formBody['reason'] = 'discount' : '';\r\n                nameForm === 'application-form' ? formBody['reason'] = 'need a master' : '';\r\n                \r\n                addInfo.forEach(elem => {\r\n                    const element = document.getElementById(elem.id);\r\n                    if (element) {\r\n                        if (element.value.length >= 1){\r\n                            formBody[elem.id] = element.value;  \r\n                        }\r\n                    }\r\n                })\r\n            \r\n                sendData(formBody)\r\n                    .then(() => {\r\n                        inputs.forEach(input => {\r\n                            input.value = ''\r\n                        })\r\n                        addInfo.forEach(elem => {\r\n                            const element = document.getElementById(elem.id);\r\n                            if (element) {\r\n                                const form = document.getElementById('calc');\r\n                                const inputs = form.querySelectorAll('input');\r\n                                const selects = form.querySelectorAll('select');\r\n                                inputs.forEach(input => input.value = '');\r\n                                selects.forEach(select => select.options[0].selected = true)\r\n                            }\r\n                        })\r\n                    })\r\n                    .then(() => {\r\n                        if (nameForm === 'callback-form') {\r\n                            const headerModal = document.querySelector('.header-modal');\r\n                            afterSendData(headerModal)\r\n                        } else if (nameForm === 'application-form') {\r\n                            const serviceModal = document.querySelector('.services-modal');\r\n                           afterSendData(serviceModal)\r\n                        } else if (classForm === '.form-horizontal') {\r\n                            let texts = document.querySelectorAll('.help-block');\r\n                            texts.forEach(text =>{\r\n                                text.textContent = 'Ваши данные успешно отправлены!'\r\n                                setTimeout(() => {\r\n                                     text.textContent = 'Мы гарантируем 100% онфиденциальность. Ваша информация не будет распространяться.'\r\n                                }, 2000)\r\n                        })}\r\n                    })\r\n                    .catch(error => console.log(error))\r\n            } else {\r\n                return\r\n            }\r\n        }\r\n\r\n        try {\r\n            if (!form) {\r\n                throw new Error('Не найдена форма')\r\n            }\r\n\r\n            form.addEventListener('submit', (e) => {\r\n                e.preventDefault();\r\n                submitForm()\r\n            })\r\n        } catch (error) {\r\n            console.log(error.message)\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = () => {\r\n    const services = document.getElementById('services');\r\n    const serviceBlocks = document.querySelectorAll('.service-block');\r\n\r\n    let width = document.documentElement.clientWidth;\r\n\r\n    function doSlide (countOfSlides) {\r\n        let currentSlide1 = countOfSlides - countOfSlides;\r\n        let currentSlide2 = countOfSlides - 1;\r\n\r\n        const activeSlides = (elements, index1, index2, strClass) => {\r\n            elements[index1].classList.remove(strClass);\r\n            elements[index2].classList.remove(strClass);\r\n        };\r\n\r\n        const noActiveSlides = (elements, index1, index2, strClass) => {\r\n            elements[index1].classList.add(strClass);\r\n            elements[index2].classList.add(strClass);\r\n        }\r\n\r\n        activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\r\n\r\n        services.addEventListener('click', (e) => {\r\n            if (e.target.closest('.services__arrow--right')) {\r\n                noActiveSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\r\n                    currentSlide1 += countOfSlides;\r\n                    currentSlide2 += countOfSlides;\r\n                if (currentSlide1 >= serviceBlocks.length || currentSlide2 >= serviceBlocks.length ) {\r\n                    currentSlide1 = countOfSlides - countOfSlides;\r\n                    currentSlide2 = countOfSlides - 1;\r\n                }\r\n                activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\r\n            } else if (e.target.closest('.services__arrow--left')) {\r\n                noActiveSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\r\n                    currentSlide1 -= countOfSlides;\r\n                    currentSlide2 -= countOfSlides;\r\n                if (currentSlide1 < 0 ||currentSlide2 < 0 ) {\r\n                    currentSlide1 = serviceBlocks.length-countOfSlides;\r\n                    currentSlide2 = serviceBlocks.length-1;\r\n                }\r\n                activeSlides(serviceBlocks, currentSlide1, currentSlide2, 'service-block-noActive');\r\n            }\r\n        })\r\n    }\r\n\r\n    width > 576 ? doSlide(2) : doSlide(1);\r\n}\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/sliderProfit.js":
/*!*********************************!*\
  !*** ./modules/sliderProfit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderProfit\": () => (/* binding */ sliderProfit)\n/* harmony export */ });\nconst sliderProfit = () => {\r\n    let width = document.documentElement.clientWidth;\r\n    const benefitsItem = Array.from(document.querySelectorAll('.benefits__item'));\r\n    const arrows = document.querySelector('.benefits-arrows');\r\n\r\n    if (width > 576) {\r\n        let firstGroup = benefitsItem.slice(0,3);\r\n        let secondGroup = benefitsItem.slice(3);\r\n        const benefitsArrows = document.querySelectorAll('.benefits__arrow');\r\n\r\n        secondGroup.forEach(item => item.classList.add('noActiveBenefit'));\r\n        secondGroup.forEach(item => item.classList.add('disappear'));\r\n\r\n        benefitsArrows.forEach(benefitsArrow => {\r\n            benefitsArrow.addEventListener('click', (e) => {\r\n                firstGroup.forEach(item => item.classList.toggle('disappear'))\r\n                secondGroup.forEach(item => item.classList.toggle('disappear'))\r\n                setTimeout(() => {\r\n                    secondGroup.forEach(item => item.classList.toggle('noActiveBenefit'));\r\n                    firstGroup.forEach(item => item.classList.toggle('noActiveBenefit'));\r\n                }, 500)\r\n            })\r\n        })\r\n    } else {\r\n         let currentSlide = 0;\r\n\r\n          const prevSlide = (index) => {\r\n            benefitsItem[index].classList.add('noActiveBenefit');\r\n        };\r\n\r\n        const nextSlide = (index) => {\r\n           benefitsItem[index].classList.remove('noActiveBenefit');\r\n        }\r\n\r\n        benefitsItem.forEach((item, index) => {\r\n            if(index !== 0) {\r\n                item.classList.add('noActiveBenefit')\r\n            }\r\n        })\r\n\r\n        arrows.addEventListener('click', (e) => {\r\n            if (e.target.closest('.benefits__arrow--left')) {\r\n                prevSlide(currentSlide)\r\n                currentSlide--\r\n                if(currentSlide < 0) {\r\n                   currentSlide =  benefitsItem.length-1\r\n                }\r\n                nextSlide(currentSlide)\r\n            } else if (e.target.closest('.benefits__arrow--right')) {\r\n                prevSlide(currentSlide)\r\n                currentSlide++\r\n                if(currentSlide >= benefitsItem.length) {\r\n                   currentSlide =  0\r\n                }\r\n                nextSlide(currentSlide)\r\n            }\r\n        })\r\n\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/sliderProfit.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (date) => {\r\n    const daysSpan = document.querySelectorAll('.count_1 span');\r\n    const hoursSpan = document.querySelectorAll('.count_2 span');\r\n    const minutesSpan = document.querySelectorAll('.count_3 span');\r\n    const secondsSpan = document.querySelectorAll('.count_4 span');\r\n\r\n    const getRemaining = () => {\r\n        let dateStop = new Date(date).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) %24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n         if (timeRemaining < 0) {\r\n            timeRemaining = 0;\r\n            days = 0;\r\n            hours = 0;\r\n            minutes = 0;\r\n            seconds = 0;\r\n        }\r\n        \r\n        return {timeRemaining, days, hours, minutes, seconds}\r\n    }\r\n\r\n    const addZero = (time, spans) => {\r\n         spans.forEach(span => {\r\n            time < 10 ? span.textContent = '0' + time : span.textContent = time;\r\n        })\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getRemaining();\r\n        \r\n        addZero(getTime.days, daysSpan);\r\n        addZero(getTime.hours, hoursSpan);\r\n        addZero(getTime.minutes, minutesSpan);\r\n        addZero(getTime.seconds, secondsSpan);\r\n    }\r\n\r\n    const interval = () => {\r\n        let intervalId;\r\n        let getTime = getRemaining();\r\n        updateClock();\r\n        if(getTime.timeRemaining > 0) {\r\n            intervalId = setInterval(updateClock, 1000);\r\n        } else {\r\n            clearInterval(intervalId);\r\n        }\r\n    }\r\n    interval();\r\n}\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validation\": () => (/* binding */ validation)\n/* harmony export */ });\nconst validation = () => {\r\n    const names = document.querySelectorAll('input[name=\"fio\"]');\r\n    const tels = document.querySelectorAll('input[name=\"phone\"]');\r\n    const calcInput = document.getElementById('calc-input');\r\n\r\n    names.forEach(name => {\r\n        name.addEventListener('input', (e) => {\r\n            let reg = /[^a-zа-я\\s]/gi;\r\n            e.target.value = e.target.value.replace(reg, '');\r\n        })\r\n    })\r\n\r\n    tels.forEach(tel => {\r\n        tel.addEventListener('input', (e) => {\r\n            let reg = /[^\\d\\+\\(\\)]/g;\r\n            e.target.value =  e.target.value.replace(reg, '');\r\n            if (e.target.value.length > 17) {\r\n               tel.style.border = '3px solid red';\r\n            } else {\r\n                tel.style.border = '';\r\n            }\r\n        })\r\n    })\r\n\r\n    if (calcInput) {\r\n        calcInput.addEventListener('input', (e) => {\r\n            let reg = /[^\\d]/g;\r\n            e.target.value =  e.target.value.replace(reg, '');\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./modules/validation.js?");

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