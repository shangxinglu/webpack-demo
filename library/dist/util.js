(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["util"] = factory();
	else
		root["util"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./library/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatTime": () => (/* binding */ formatTime),
/* harmony export */   "formatNumber": () => (/* binding */ formatNumber)
/* harmony export */ });
/**
 * @description 格式化时间戳
 * 
 * @param {Date|Number} [date] 时间对象或时间戳
 * @param {String} [format='Y-M-D'] 目标格式   Y:年  M:月   D:日   h:小时   i:分   s:秒   'Y-M-D'=>'2020-01-01' 
 * 
 * @returns {String}
 */
const formatTime = (date, format = 'Y-M-D') => {
    let result = '';

    switch (typeof date) {
        case 'undefined':
            date = new Date();
            break;

        case 'number':
            date = new Date(date);
            break;

        case 'object':
            if (date === null) {
                date = new Date();
            }
            break;

        default:
            throw new Error('date类型错误');
    }

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    [year, month, day, hour, minute, second] = [year, month, day, hour, minute, second].map(formatNumber);


    result = format.replace(/(Y)|(M)|(D)|(h)|(i)|(s)/g, (match) => {
        let result = '';
        switch (match) {
            case 'Y':
                result = year;
                break;

            case 'M':
                result = month;

                break;

            case 'D':
                result = day;

                break;

            case 'h':
                result = hour;

                break;

            case 'i':
                result = minute;

                break;

            case 's':
                result = second;

                break;
        }

        return result;
    });

    return result;
}

const formatNumber = n => {
    n = '' + n;
    return n[1] ? n : '0' + n;
}
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=util.js.map