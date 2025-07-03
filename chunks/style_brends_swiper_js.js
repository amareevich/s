"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["style_brends_swiper_js"],{

/***/ "./style/brends/swiper.js":
/*!********************************!*\
  !*** ./style/brends/swiper.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ swiper__init)\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\r\n\r\n\r\nfunction swiper__init() {\r\n    return new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.swiper', {\r\n        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay],\r\n        loop: true,\r\n        speed: 500,\r\n        slidesPerView: 'auto',\r\n        spaceBetween: 28,\r\n        pagination: {\r\n            el: '.swiper-pagination',\r\n            type: 'bullets',\r\n            clickable: true\r\n        },\r\n        autoplay: {\r\n            delay: 1500,\r\n            disableOnInteraction: false\r\n        },\r\n        on: {\r\n            click: function () {\r\n                this.slideNext();\r\n            },\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./style/brends/swiper.js?");

/***/ })

}]);