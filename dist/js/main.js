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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.timer)('27 march 2022');\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\n    const callBtn = document.querySelector('.button');\n    const headerModal = document.querySelector('.header-modal');\n    const overlay = document.querySelector('.overlay');\n    const close = headerModal.querySelector('.header-modal__close');\n\n     function changeDisplay(prop) {\n       headerModal.style.display = prop;\n       overlay.style.display = prop;\n    }\n  \n    callBtn.addEventListener('click', () => {\n        changeDisplay('block')\n    })\n\n   close.addEventListener('click', () => {\n        changeDisplay('none')  \n   })\n}\n\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (date) => {\n    const daysSpan = document.querySelectorAll('.count_1 span');\n    const hoursSpan = document.querySelectorAll('.count_2 span');\n    const minutesSpan = document.querySelectorAll('.count_3 span');\n    const secondsSpan = document.querySelectorAll('.count_4 span');\n\n    const getRemaining = () => {\n        let dateStop = new Date(date).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\n        let hours = Math.floor((timeRemaining / 60 / 60) %24);\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n         if (timeRemaining < 0) {\n            timeRemaining = 0;\n            days = 0;\n            hours = 0;\n            minutes = 0;\n            seconds = 0;\n        }\n        \n        return {timeRemaining, days, hours, minutes, seconds}\n    }\n\n    const updateClock = () => {\n        let getTime = getRemaining();\n        \n        daysSpan.forEach(daySpan => {\n            getTime.days < 10 ? daySpan.textContent = '0' + getTime.days : daySpan.textContent = getTime.days;\n        })\n        hoursSpan.forEach(hourSpan => {\n            getTime.hours < 10 ? hourSpan.textContent = '0' + getTime.hours : hourSpan.textContent = getTime.hours;\n        })\n        minutesSpan.forEach(minuteSpan => {\n            getTime.minutes < 10 ?  minuteSpan.textContent = '0' + getTime.minutes : minuteSpan.textContent = getTime.minutes;\n        })\n        secondsSpan.forEach(secondSpan => {\n            getTime.seconds < 10 ? secondSpan.textContent = '0' + getTime.seconds : secondSpan.textContent = getTime.seconds;\n        })\n    }\n\n    const interval = () => {\n        let intervalId;\n        let getTime = getRemaining();\n        updateClock();\n        if(getTime.timeRemaining > 0) {\n            intervalId = setInterval(updateClock, 1000);\n        } else {\n            clearInterval(intervalId)\n        }\n    }\n    interval();\n}\n\n//# sourceURL=webpack:///./modules/timer.js?");

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