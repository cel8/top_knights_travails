/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root.dark {\n  --color-primary-bg: #212121;\n  --color-secondary-bg: #000000;\n  --color-primary-fg: #B0BEC5;\n  --color-primary-text: #eeffff;\n  --color-secondary-text: #eeffff;\n  --icon-filter: invert(100%);\n  --color-inactive: #474747;\n  --color-active: #80cbc4;\n  --color-scroll-active: var(--color-primary-fg);\n  --color-scroll-inactive: rgba(176, 190, 197, 0.7);\n  --color-shadow: rgb(54, 54, 54);\n}\n\n:root.light {\n  --color-primary-bg: #FAFAFA;\n  --color-secondary-bg: #B0BEC5;\n  --color-primary-fg: #546E7A;\n  --color-primary-text: #272727;\n  --color-secondary-text: #000000;\n  --icon-filter: invert(0%);\n  --color-inactive: #D2D4D5;\n  --color-active: #39ADB5;\n  --color-scroll-active: var(--color-primary-fg);\n  --color-scroll-inactive: rgba(84, 110, 122, 0.7);\n  --color-shadow: rgb(184, 184, 184);\n}\n\nhtml, body {\n  width: 100%;\n  min-height: 100vh;\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  background-color: var(--color-primary-bg);\n  color: var(--color-primary-text);\n}\n\nfooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  border-top: 0.1rem solid var(--color-primary-fg);\n  background-color: var(--color-secondary-bg);\n  color: var(--color-secondary-text);\n  justify-content: center;\n  align-self: center;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 18px;\n  display: flex;\n}\n\na { \n  color: inherit; \n}\n\n/* Scrollbar */\n\n/* width */\n::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0);\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: var(--color-scroll-active);\n  border-radius: 5rem;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-scroll-inactive);\n  border-radius: 5rem;\n}\n\n/* Switch */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--color-inactive);\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: var(--color-active);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px var(--color-active);;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* Icon */\n\n.icon {\n  width: 2rem;\n}\n\n.header-button {\n  border: none;\n  background-color: var(--color-primary-bg);\n}\n\n.header-button       > p {\n  font-weight: bold;\n  color: var(--color-primary-text);\n}\n\n.header-button       > img  {\n  filter: var(--icon-filter) drop-shadow(1px 2px 0 var(--color-shadow));\n}\n\n.header-button:enabled       > p {\n  filter: brightness(90%);\n}\n\n.header-button:hover:enabled       > img  {\n  filter: var(--icon-filter) brightness(90%) drop-shadow(1px 2px 0 var(--color-shadow));\n}\n\n.header-button:active:enabled       > p {\n  transform: translateY(4px) translateX(2px);\n  filter: brightness(90%);\n}\n\n.header-button:active:enabled       > img {\n  transform: translateY(4px) translateX(2px);\n  filter: var(--icon-filter) brightness(90%) drop-shadow(1px 1px 0 var(--color-shadow));\n}\n\n.header-bar-button {\n  width: 155px;\n}\n\n.header-bar-button > p {\n  margin: 0.3rem;\n  font-weight: bold;\n}\n\n/* Header */\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1rem;\n}\n\nheader > :first-child {\n  margin-right: auto;\n}\n\nheader > :last-child {\n  margin-left: auto;\n}\n\n/* main content */\n\nmain {\n  padding-bottom: 2rem;\n  padding-right: 2rem;\n}\n\n.wrapper {\n  border: 49px solid #462921;\n  width: 960px;\n  margin: 1rem auto;\n  margin-bottom: 3rem;\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: 40px repeat(8, 110px) 40px;\n  grid-template-rows: 40px repeat(8, 110px) 40px;\n  grid-auto-flow: row;\n}\n\n.wrapper-row-inner,\n.wrapper-column-inner {\n  display: grid;\n  grid-gap: 0;\n  grid-auto-flow: row;\n  align-items: strech;\n}\n\n.wrapper-row-inner {\n  grid-template-columns: auto;\n  grid-template-rows: repeat(8, auto);\n}\n\n.wrapper-column-inner {\n  grid-template-columns: repeat(8, auto);\n  grid-template-rows: auto;\n}\n  \n.box {\n  font-size: 120%;\n  background-color: #edeed1;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #000;\n}\n\n.box > .icon {\n  width: inherit;\n}\n\n.box > p {\n  color: #fff;\n  background-color: #000;\n  border-radius: 50%;\n  margin: 0rem;\n  padding: 0.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n}\n\n.box-inner {\n  text-align: center;\n  align-self: center;\n  color: #fff;\n}\n\n.top-header,\n.bottom-header,\n.right-header,\n.left-header,\n.top-left-header,\n.bottom-left-header,\n.top-right-header,\n.bottom-right-header {\n  display: grid;\n  align-items: stretch;\n  background-color: #7d694c;\n}\n\n.top-left-header,\n.bottom-left-header,\n.left-header {\n  grid-column-start: 1;\n  grid-column-end: 1;\n}\n\n.top-left-header,\n.top-right-header,\n.top-header {\n  grid-row-start: 1;\n  grid-row-end: 1;\n}\n\n.top-right-header,\n.bottom-right-header {\n  grid-column-start: 10;\n  grid-column-end: 11;\n}\n\n.bottom-left-header,\n.bottom-right-header {\n  grid-row-start: 10;\n  grid-row-end: 11;\n}\n\n.top-header,\n.bottom-header {\n  grid-column-start: 2;\n  grid-column-end: 10;\n}\n\n.left-header,\n.right-header {\n  grid-row-start: 2;\n  grid-row-end: 10;\n}\n\n.bottom-header {\n  grid-row-start: 10;\n  grid-row-end: 11;\n}\n\n.right-header {\n  grid-column-start: 10;\n  grid-column-end: 11;\n}\n\n.right-header,\n.top-right-header,\n.bottom-right-header {\n  border-right: 1px solid #000;\n}\n\n.top-header,\n.top-left-header,\n.top-right-header {\n  border-top: 1px solid #000;\n}\n\n.left-header,\n.top-left-header,\n.bottom-left-header {\n  border-left: 1px solid #000;\n}\n\n.bottom-header,\n.bottom-left-header,\n.bottom-right-header {\n  border-bottom: 1px solid #000;\n}\n\n.box:nth-child(-2n+12),\n.box:nth-child(12) ~ button:nth-child(-2n+19),\n.box:nth-child(20) ~ button:nth-child(-2n+28), \n.box:nth-child(28) ~ button:nth-child(-2n+35), \n.box:nth-child(36) ~ button:nth-child(-2n+44), \n.box:nth-child(44) ~ button:nth-child(-2n+51), \n.box:nth-child(52) ~ button:nth-child(-2n+60), \n.box:nth-child(60) ~ button:nth-child(-2n+67) {\n  background-color: #779952;\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');\n\n:root.dark {\n  --color-primary-bg: #212121;\n  --color-secondary-bg: #000000;\n  --color-primary-fg: #B0BEC5;\n  --color-primary-text: #eeffff;\n  --color-secondary-text: #eeffff;\n  --icon-filter: invert(100%);\n  --color-inactive: #474747;\n  --color-active: #80cbc4;\n  --color-scroll-active: var(--color-primary-fg);\n  --color-scroll-inactive: rgba(176, 190, 197, 0.7);\n  --color-shadow: rgb(54, 54, 54);\n}\n\n:root.light {\n  --color-primary-bg: #FAFAFA;\n  --color-secondary-bg: #B0BEC5;\n  --color-primary-fg: #546E7A;\n  --color-primary-text: #272727;\n  --color-secondary-text: #000000;\n  --icon-filter: invert(0%);\n  --color-inactive: #D2D4D5;\n  --color-active: #39ADB5;\n  --color-scroll-active: var(--color-primary-fg);\n  --color-scroll-inactive: rgba(84, 110, 122, 0.7);\n  --color-shadow: rgb(184, 184, 184);\n}\n\nhtml, body {\n  width: 100%;\n  min-height: 100vh;\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  background-color: var(--color-primary-bg);\n  color: var(--color-primary-text);\n}\n\nfooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  border-top: 0.1rem solid var(--color-primary-fg);\n  background-color: var(--color-secondary-bg);\n  color: var(--color-secondary-text);\n  justify-content: center;\n  align-self: center;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 18px;\n  display: flex;\n}\n\na { \n  color: inherit; \n}\n\n/* Scrollbar */\n\n/* width */\n::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0);\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: var(--color-scroll-active);\n  border-radius: 5rem;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-scroll-inactive);\n  border-radius: 5rem;\n}\n\n/* Switch */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--color-inactive);\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: var(--color-active);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px var(--color-active);;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* Icon */\n\n.icon {\n  width: 2rem;\n}\n\n.header-button {\n  border: none;\n  background-color: var(--color-primary-bg);\n}\n\n.header-button       > p {\n  font-weight: bold;\n  color: var(--color-primary-text);\n}\n\n.header-button       > img  {\n  filter: var(--icon-filter) drop-shadow(1px 2px 0 var(--color-shadow));\n}\n\n.header-button:enabled       > p {\n  filter: brightness(90%);\n}\n\n.header-button:hover:enabled       > img  {\n  filter: var(--icon-filter) brightness(90%) drop-shadow(1px 2px 0 var(--color-shadow));\n}\n\n.header-button:active:enabled       > p {\n  transform: translateY(4px) translateX(2px);\n  filter: brightness(90%);\n}\n\n.header-button:active:enabled       > img {\n  transform: translateY(4px) translateX(2px);\n  filter: var(--icon-filter) brightness(90%) drop-shadow(1px 1px 0 var(--color-shadow));\n}\n\n.header-bar-button {\n  width: 155px;\n}\n\n.header-bar-button > p {\n  margin: 0.3rem;\n  font-weight: bold;\n}\n\n/* Header */\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1rem;\n}\n\nheader > :first-child {\n  margin-right: auto;\n}\n\nheader > :last-child {\n  margin-left: auto;\n}\n\n/* main content */\n\nmain {\n  padding-bottom: 2rem;\n  padding-right: 2rem;\n}\n\n.wrapper {\n  border: 49px solid #462921;\n  width: 960px;\n  margin: 1rem auto;\n  margin-bottom: 3rem;\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: 40px repeat(8, 110px) 40px;\n  grid-template-rows: 40px repeat(8, 110px) 40px;\n  grid-auto-flow: row;\n}\n\n.wrapper-row-inner,\n.wrapper-column-inner {\n  display: grid;\n  grid-gap: 0;\n  grid-auto-flow: row;\n  align-items: strech;\n}\n\n.wrapper-row-inner {\n  grid-template-columns: auto;\n  grid-template-rows: repeat(8, auto);\n}\n\n.wrapper-column-inner {\n  grid-template-columns: repeat(8, auto);\n  grid-template-rows: auto;\n}\n  \n.box {\n  font-size: 120%;\n  background-color: #edeed1;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #000;\n}\n\n.box > .icon {\n  width: inherit;\n}\n\n.box > p {\n  color: #fff;\n  background-color: #000;\n  border-radius: 50%;\n  margin: 0rem;\n  padding: 0.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n}\n\n.box-inner {\n  text-align: center;\n  align-self: center;\n  color: #fff;\n}\n\n.top-header,\n.bottom-header,\n.right-header,\n.left-header,\n.top-left-header,\n.bottom-left-header,\n.top-right-header,\n.bottom-right-header {\n  display: grid;\n  align-items: stretch;\n  background-color: #7d694c;\n}\n\n.top-left-header,\n.bottom-left-header,\n.left-header {\n  grid-column-start: 1;\n  grid-column-end: 1;\n}\n\n.top-left-header,\n.top-right-header,\n.top-header {\n  grid-row-start: 1;\n  grid-row-end: 1;\n}\n\n.top-right-header,\n.bottom-right-header {\n  grid-column-start: 10;\n  grid-column-end: 11;\n}\n\n.bottom-left-header,\n.bottom-right-header {\n  grid-row-start: 10;\n  grid-row-end: 11;\n}\n\n.top-header,\n.bottom-header {\n  grid-column-start: 2;\n  grid-column-end: 10;\n}\n\n.left-header,\n.right-header {\n  grid-row-start: 2;\n  grid-row-end: 10;\n}\n\n.bottom-header {\n  grid-row-start: 10;\n  grid-row-end: 11;\n}\n\n.right-header {\n  grid-column-start: 10;\n  grid-column-end: 11;\n}\n\n.right-header,\n.top-right-header,\n.bottom-right-header {\n  border-right: 1px solid #000;\n}\n\n.top-header,\n.top-left-header,\n.top-right-header {\n  border-top: 1px solid #000;\n}\n\n.left-header,\n.top-left-header,\n.bottom-left-header {\n  border-left: 1px solid #000;\n}\n\n.bottom-header,\n.bottom-left-header,\n.bottom-right-header {\n  border-bottom: 1px solid #000;\n}\n\n.box:nth-child(-2n+12),\n.box:nth-child(12) ~ button:nth-child(-2n+19),\n.box:nth-child(20) ~ button:nth-child(-2n+28), \n.box:nth-child(28) ~ button:nth-child(-2n+35), \n.box:nth-child(36) ~ button:nth-child(-2n+44), \n.box:nth-child(44) ~ button:nth-child(-2n+51), \n.box:nth-child(52) ~ button:nth-child(-2n+60), \n.box:nth-child(60) ~ button:nth-child(-2n+67) {\n  background-color: #779952;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller/controller-board.js":
/*!********************************************!*\
  !*** ./src/controller/controller-board.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControllerBoard)
/* harmony export */ });
/* harmony import */ var Modules_vertex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/vertex */ "./src/modules/vertex.js");


class ControllerBoard {
  constructor(boardSize) {
    if (boardSize !== 8) throw new 'Invalid input';
    this.boardSize = boardSize;
    this.#initBoard();
    this.#initBoardLink();
    const paths = [];
    this.searchPathDfs({x: 0, y: 0}, {x: 7, y: 4}, paths);
  }

  #initBoard() {
    this.matrix = new Array(this.boardSize);
    for(let i = 0; i < this.matrix.length; ++i) {
      this.matrix[i] = new Array(this.boardSize);
      for(let j = 0; j < this.matrix[i].length; ++j) {
        this.matrix[i][j] = new Modules_vertex__WEBPACK_IMPORTED_MODULE_0__["default"](i, j);
      }
    }
  }

  #initBoardLink() {
    for(let i = 0; i < this.matrix.length; ++i) {
      for(let j = 0; j < this.matrix[i].length; ++j) {
        if ((i - 2 >= 0) && (j - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i - 2][j - 1]);
        if ((i - 2 >= 0) && (j + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i - 2][j + 1]);
        if ((i + 2 < this.boardSize) && (j - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i + 2][j - 1]);
        if ((i + 2 < this.boardSize) && (j + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i + 2][j + 1]);
        if ((j - 2 >= 0) && (i - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i - 1][j - 2]);
        if ((j - 2 >= 0) && (i + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i + 1][j - 2]);
        if ((j + 2 < this.boardSize) && (i - 1 >= 0)) 
          this.matrix[i][j].addEdge(this.matrix[i - 1][j + 2]);
        if ((j + 2 < this.boardSize) && (i + 1 < this.boardSize)) 
          this.matrix[i][j].addEdge(this.matrix[i + 1][j + 2]);
      }
    }
  }

  #validInput(position) {
    return position && (position.x >= 0 && position.x < this.boardSize);
  }

  searchPathBfs(source, destination, paths = []) {
    if (!this.#validInput(source) || !this.#validInput(destination)) return;
    const visited = new Set();
    const node = this.matrix[source.x][source.y];

    const queue = [[ node, [] ]];

    while (queue.length > 0) {
      const [ current, [...path]] = queue.shift();
      const position = current.getPosition;
      path.push(position);
      
      if (destination.x === position.x && destination.y === position.y) {
        path.forEach(element => {
          paths.push(element);
        });
        return;
      }
      
      if (!visited.has(current)) {
        queue.push(...current.getVertexEdges.map(edge => [ edge, path ]));
      }
      visited.add(current);
    }    
  }

  searchPathDfs(source, destination, paths = [], visited = new Set()) {
    const node = this.matrix[source.x][source.y];
    const destNode = this.matrix[destination.x][destination.y];
    if (visited.has(destNode)) {
      return;
    }

    // Add node to path
    paths.push(node.getPosition);
    if (!visited.has(node)) visited.add(node);

    const edges = node.getVertexEdges;
    const idxFather = paths.length - 1;

    // Iterates on edges 
    for (let i = 0; i < edges.length; ++i) {
      if (visited.has(destNode)) {
        return;
      }

      const edge = edges[i];
      const position = edge.getPosition;

      if (destination.x === position.x && destination.y === position.y) {
        visited.add(edge);
        paths.push(edge.getPosition);
        return;
      }

      if (!visited.has(edge)) {
        visited.add(edge);
        this.searchPathDfs(position, destination, paths, visited);
        
        if (!visited.has(destNode)) {
          // Pop other paths
          while (idxFather + 1 !== paths.length) {
            paths.pop();
          }
        }
      }
    }
  }
}

/***/ }),

/***/ "./src/modules/vertex.js":
/*!*******************************!*\
  !*** ./src/modules/vertex.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vertex)
/* harmony export */ });

class Vertex {
  constructor(xPosition, yPosition) {
    if (Number.isNaN(+xPosition) && 
        Number.isNaN(+yPosition)) throw new 'Invalid input';
    this.xPosition = +xPosition;
    this.yPosition = +yPosition;
    this.edges = [];
  }

  get getPosition() { return { x: this.xPosition, y: this.yPosition }; }

  get getVertexEdges() { return this.edges; }

  addEdge(vertex) {
    // Check for invalid type
    if (!(vertex instanceof Vertex)) throw new 'Invalid input';
    
    // Get vertex position
    const vertexPosition = vertex.getPosition;

    // Check vertex already in links
    if (this.edges.every(v => v.getPosition !== vertexPosition)) {
      // Add new vertex
      this.edges.push(vertex);
    }
  }
};


/***/ }),

/***/ "./src/utilities/button-manager.js":
/*!*****************************************!*\
  !*** ./src/utilities/button-manager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonManager)
/* harmony export */ });
/* harmony import */ var Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/dom-manager */ "./src/utilities/dom-manager.js");


class ButtonManager {
  static createButton(btnText = '', svgIconFileName = null, className = null, cbEvent = undefined) {
    const btn = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeClass('button', className || 'navButton');
    // Insert icon when exist
    if(svgIconFileName) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNodeImg(svgIconFileName, btnText, btn, 'icon');
    }
    // Add text when contains something
    if(btnText.length > 0) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNode('p', btn, null, null, btnText);
    }
    // Add button event
    btn.onclick = cbEvent;
    return btn;  
  }

  static editButtonText(btn, text = '') {
    const btnText = btn.querySelector('p');
    if(btnText) {
      /* Remove or edit text */
      if(text === '') {
        btnText.remove();
      } else {
        btnText.textContent = text;
      }
    } else if(text.length > 0) { /* Create node */
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNode('p', btn, null, null, text);
    }
  }

  static editButtonImage(btn, svgIconFileName = null) {
    const btnText    = btn.querySelector('p');
    const btnImgNode = btn.querySelector('.icon');
    if(btnImgNode) {
      if(!svgIconFileName) {
        btnImgNode.remove();
      } else {
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].updateNodeImg(svgIconFileName, btnImgNode);
      }
    } else if(svgIconFileName) { // Insert icon when exist
      const altText = btnText ? btnText.textContent : '';
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNodeImg(svgIconFileName, altText, btn, 'icon');
    }
  }

  static createImageButton(svgIconFileName, className = null, cbEvent = undefined) {
    return ButtonManager.createButton('', svgIconFileName, className, cbEvent)
  }

  static createTextButton(btnText, className = null, cbEvent = undefined) {
    return ButtonManager.createButton(btnText, null, className, cbEvent)
  }

  static createImageLinkButton(link, svgIconFileName) {
    const node = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeLink(link, null, null, null, 
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeImg(svgIconFileName, 'imageLink', 'icon-link')
    );
    return node;
  }
}


/***/ }),

/***/ "./src/utilities/dom-manager.js":
/*!**************************************!*\
  !*** ./src/utilities/dom-manager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DomManager)
/* harmony export */ });

const imagePath = './images/';

class DomManager {
  // Returns true if it is a DOM element
  static #isElement(o) {
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : // DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
  }

  static createNode(type, className = null, id = null, content = null, children = null) {
    const elem = document.createElement(type);
    // Add class name or ID
    if(className) elem.className = className;
    if(id) elem.id = id;
    // Add text content
    if(content) elem.textContent = content;
    // Eventually add child or children
    DomManager.addNodeChild(elem, children);
    return elem;
  }

  static createNodeContent(type, content, className = null, id = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeClass(type, className, id = null, content = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeID(type, id, className = null, content = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeImg(imgFileName, alt, className = null, id = null, local = true) {
    const fileFullPath = local ? imagePath + imgFileName : imgFileName; // local path or url
    const node = DomManager.createNode('img', className, id, null, null);
    node.setAttribute('src', fileFullPath);
    node.setAttribute('alt', alt);
    return node;
  }

  static createNodeImgClass(imgFileName, alt, className, id = null, local = true) {
    return DomManager.createNodeImg(imgFileName, alt, className, id, local);
  }

  static createNodeImgID(imgFileName, alt, id, className = null, local = true) {
    return DomManager.createNodeImg(imgFileName, alt, className, id, local);
  }

  static createNodeLink(link, className = null, id = null, content = null, children = null) {
    const node = DomManager.createNode('a', className, id, content, children);
    node.setAttribute('href', link);
    node.setAttribute('target', '_blank');
    return node;
  }

  static addNodeChild(father, children) {
    if(children) {
      if(Array.isArray(children)) { // Contains more than one child in Array
        children.forEach(child => {
          father.appendChild(child);
        });
      } else if(DomManager.#isElement(children)) { // Contains just one child
        father.appendChild(children);
      }
    }
  }

  static createAddNode(type, father, className = null, id = null, content = null, children = null) {
    // Append the new node in father
    const node = DomManager.createNode(type, className, id, content, children);
    father.appendChild(node);
    return node;
  }

  static createAddNodeImg(imgFileName, alt, father, className = null, id = null, local = true) {
    // Append the new node in father
    const node = DomManager.createNodeImg(imgFileName, alt, className, id, local);
    father.appendChild(node);
    return node;
  }

  static updateNodeImgBySelector(imgFileName, father, selector, local = true) {
    const imgNode = father.querySelector(selector);
    const url = local ? imagePath + imgFileName : imgFileName;
    if(imgNode) imgNode.setAttribute('src', url);
  }

  static updateNodeImg(imgFileName, imgNode, local = true) {
    const url = local ? imagePath + imgFileName : imgFileName;
    if(imgNode) imgNode.setAttribute('src', url);
  }

  static removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  static isNodeHide(node) {
    return node.style.display === 'none';
  }

  static toggleDisplayByNode(node, nextDisplay = undefined) {
    if(node) {
      if(node.dataset.prevDisplay === undefined) {
        node.dataset.prevDisplay = nextDisplay || node.style.display;
      }
      const prevDisplay = node.style.display;
      node.style.display = (node.style.display !== 'none') ? 'none' 
                                                          : node.dataset.prevDisplay;
      node.dataset.prevDisplay = prevDisplay;
    }
  }

  static toggleDisplay(nodeName, nextDisplay = undefined) {
    const node = document.querySelector(nodeName);
    DomManager.toggleDisplayByNode(node, nextDisplay);
  }
}


/***/ }),

/***/ "./src/view/ui-controller.js":
/*!***********************************!*\
  !*** ./src/view/ui-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UiController),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var Svg_home_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Svg/home-outline.svg */ "./src/assets/images/svg/home-outline.svg");
/* harmony import */ var Svg_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Svg/github.svg */ "./src/assets/images/svg/github.svg");
/* harmony import */ var Svg_dark_theme_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Svg/dark-theme.svg */ "./src/assets/images/svg/dark-theme.svg");
/* harmony import */ var Svg_light_theme_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Svg/light-theme.svg */ "./src/assets/images/svg/light-theme.svg");
/* harmony import */ var Svg_chess_knight_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Svg/chess-knight.svg */ "./src/assets/images/svg/chess-knight.svg");
/* harmony import */ var Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Utilities/dom-manager */ "./src/utilities/dom-manager.js");
/* harmony import */ var Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Utilities/button-manager */ "./src/utilities/button-manager.js");
/* harmony import */ var Controller_controller_board__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Controller/controller-board */ "./src/controller/controller-board.js");










const root = document.documentElement;
const main = document.querySelector('main');

const settings = { theme: 'dark' };

const boardSize = 8;
const phases = {
  phaseRest:     0,
  phaseSetDst:   1,
  phaseComplete: 2
};

const graphFirstSearch = {
  dfs: 'Depth-first search',
  bfs: 'Breadth-first search'
};

class UiController {
  constructor() {
    this.controllerBoard = new Controller_controller_board__WEBPACK_IMPORTED_MODULE_7__["default"](boardSize);
    this.srcPosition = {
      x: -1,
      y: -1
    };
    this.dstPosition = {
      x: -1,
      y: -1
    };
    this.stepPhase = phases.phaseRest;
    this.btnRandomKnight = null;
    this.algorithm = graphFirstSearch.bfs;
    this.updateChessBoardTimer = -1;
  }

  #stopUpdateChess() {
    if (this.updateChessBoardTimer !== -1) {
      clearInterval(this.updateChessBoardTimer);
      this.updateChessBoardTimer = -1;
    }
  }

  #cleanUpBoard() {
    this.#stopUpdateChess();
    this.stepPhase = phases.phaseRest;
    this.#setPosition();
    this.btnRandomKnight.disabled = false;
    this.#doCreateHome();
  }

  #doLoadHeader() {
    const header  = document.querySelector('header');
    
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(header, Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createImageButton('home-outline.svg', 'header-button', () => this.#cleanUpBoard()));
    
    this.btnRandomKnight = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createTextButton('random knight', 'header-bar-button', () => {
      if (this.stepPhase === phases.phaseComplete) {
        this.#cleanUpBoard();
      }

      if (this.stepPhase === phases.phaseRest) {
        const getRandomPosition = () => Math.floor(Math.random() * boardSize);
        const rndPosition = {
          x: getRandomPosition(),
          y: getRandomPosition()
        };
        this.#setPosition(rndPosition.x, rndPosition.y);
        UiController.#setKnight(rndPosition.x, rndPosition.y);
        this.btnRandomKnight.disabled = true;
        this.stepPhase = phases.phaseSetDst;
      }
    });
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(header, this.btnRandomKnight);

    const btn = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createTextButton(this.algorithm, 'header-bar-button', () => {
      if (this.algorithm === graphFirstSearch.bfs) this.algorithm = graphFirstSearch.dfs;
      else this.algorithm = graphFirstSearch.bfs;

      Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].editButtonText(btn, this.algorithm);
    });

    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(header, btn);

    const btnToggleTheme = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createImageButton(`${settings.theme}-theme.svg`, 'header-button', () => {
      settings.theme = (settings.theme !== 'dark' ? 'dark' : 'light');
      Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].editButtonImage(btnToggleTheme, `${settings.theme}-theme.svg`);
      root.className = settings.theme;
    });

    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(header, btnToggleTheme);
  }

  #doCreateHome() {
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].removeAllChildNodes(main);
    const divWrapper = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', main, 'wrapper');
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'top-left-header');
    const divTop = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'top-header');
    const divTopWrapper = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divTop, 'wrapper-column-inner');
    for (let i = 0; i < boardSize; ++i) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divTopWrapper, 'box-inner', null, String.fromCharCode(65 + i));
    }
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'top-right-header');
    const divLeft = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'left-header');
    const divLeftWrapper = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divLeft, 'wrapper-row-inner');
    for (let i = 0; i < boardSize; ++i) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divLeftWrapper, 'box-inner', null, 1 + i);
    }
    for (let i = 0; i < boardSize; ++i) {
      for (let j = 0; j < boardSize; ++j) {
        const grid = Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createButton('', null, 'box', (e) => this.#onCellClick(e));
        grid.dataset.x = i;
        grid.dataset.y = j;
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(divWrapper, grid);
      }
    }
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'bottom-left-header');
    const divBottom = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'bottom-header');
    const divBottomWrapper = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divBottom, 'wrapper-column-inner');
    for (let i = 0; i < boardSize; ++i) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divBottomWrapper, 'box-inner', null, String.fromCharCode(65 + i));
    }
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'bottom-right-header');
    const divRight = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divWrapper, 'right-header');
    const divRightWrapper = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divRight, 'wrapper-row-inner');
    for (let i = 0; i < boardSize; ++i) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('div', divRightWrapper, 'box-inner', null, 1 + i);
    }
  }

  static #setKnight(x, y) {
    if (Number.isNaN(+x) || Number.isNaN(+y)) return;
    if ((x > boardSize) || (y > boardSize)) return;
    const target = main.querySelector(`[data-x='${x}'][data-y='${y}']`);
    Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].editButtonImage(target, 'chess-knight.svg');
  }

  static #setMoveStep(x, y, step) {
    if (Number.isNaN(+x) || Number.isNaN(+y)) return;
    if ((x > boardSize) || (y > boardSize)) return;
    const target = main.querySelector(`[data-x='${x}'][data-y='${y}']`);
    Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].editButtonText(target, step.toString(10));
    Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].editButtonImage(target);
  }

  #setPosition(x = -1, y = -1, isDst = false) {
    if (Number.isNaN(+x) || Number.isNaN(+y)) return;
    if ((x > boardSize) || (y > boardSize)) return;

    // Reset
    if ((x < 0) || (y < 0)) {
      this.srcPosition.x = -1;
      this.srcPosition.y = -1;
      this.dstPosition.x = -1;
      this.dstPosition.y = -1;
      return;
    }

    if (!isDst) {
      this.srcPosition.x = +x;
      this.srcPosition.y = +y;
    } else {
      this.dstPosition.x = +x;
      this.dstPosition.y = +y;
    }
  }
  
  #onCellClick(e) {
    const paths = [];
    const { target } = e;
    if (this.updateChessBoardTimer !== -1) return;
    const dataset = (target.nodeName.toLowerCase() === 'button') ? target.dataset
      : target.parentNode.dataset;
    const x = +dataset.x;
    const y = +dataset.y;
    if (this.stepPhase === phases.phaseComplete) {
      this.#cleanUpBoard();
    }

    switch (this.stepPhase) {
      case phases.phaseRest:
        this.#setPosition(x, y);
        UiController.#setKnight(x, y);
        this.btnRandomKnight.disabled = true;
        this.stepPhase = phases.phaseSetDst;
        break;
      case phases.phaseSetDst:
        this.#setPosition(x, y, true);

        if (this.algorithm === graphFirstSearch.bfs)
          this.controllerBoard.searchPathBfs(this.srcPosition, this.dstPosition, paths);
        else
          this.controllerBoard.searchPathDfs(this.srcPosition, this.dstPosition, paths);
        
        if (paths.length >= 2) {
          let iterator = 0;
          this.updateChessBoardTimer = setInterval(() => {
            const step = paths[iterator];
            const knightStep = paths[iterator + 1];
            UiController.#setMoveStep(step.x, step.y, iterator + 1);
            UiController.#setKnight(knightStep.x, knightStep.y);
            iterator++;
            if (iterator === paths.length - 1) {
              this.#stopUpdateChess();
              this.stepPhase = phases.phaseComplete;
              this.btnRandomKnight.disabled = false;
            }
          }, 500);
        }        
        break;
      default:
        break;
    }
  }

  #doLoadMainContent() {
    this.#doCreateHome();
  }

  static #doLoadFooter() {
    const curYear = new Date().getFullYear();
    const footer = document.querySelector('footer')
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].createAddNode('p', footer, null, null, `Copyright © ${curYear} Alessandro Celotti`);
    Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_5__["default"].addNodeChild(footer, Utilities_button_manager__WEBPACK_IMPORTED_MODULE_6__["default"].createImageLinkButton('https://github.com/cel8', 'github.svg'));
  }

  doLoadUI() {
    // Set main root theme
    root.className = settings.theme;
    this.#doLoadHeader();
    this.#doLoadMainContent();
    UiController.#doLoadFooter();
  }
}


/***/ }),

/***/ "./src/assets/images/svg/chess-knight.svg":
/*!************************************************!*\
  !*** ./src/assets/images/svg/chess-knight.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "images/chess-knight.svg";

/***/ }),

/***/ "./src/assets/images/svg/dark-theme.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/dark-theme.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "images/dark-theme.svg";

/***/ }),

/***/ "./src/assets/images/svg/github.svg":
/*!******************************************!*\
  !*** ./src/assets/images/svg/github.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "images/github.svg";

/***/ }),

/***/ "./src/assets/images/svg/home-outline.svg":
/*!************************************************!*\
  !*** ./src/assets/images/svg/home-outline.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "images/home-outline.svg";

/***/ }),

/***/ "./src/assets/images/svg/light-theme.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/svg/light-theme.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "images/light-theme.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Style/style.css */ "./src/style/style.css");
/* harmony import */ var View_ui_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! View/ui-controller */ "./src/view/ui-controller.js");



const uiController = new View_ui_controller__WEBPACK_IMPORTED_MODULE_1__["default"]();

window.onload = () => {
  uiController.doLoadUI();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVyQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3Bfa25pZ2h0c190cmF2YWlscy8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcF9rbmlnaHRzX3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcF9rbmlnaHRzX3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcF9rbmlnaHRzX3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcF9rbmlnaHRzX3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3Bfa25pZ2h0c190cmF2YWlscy8uL3NyYy9jb250cm9sbGVyL2NvbnRyb2xsZXItYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvbW9kdWxlcy92ZXJ0ZXguanMiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvdXRpbGl0aWVzL2J1dHRvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvcF9rbmlnaHRzX3RyYXZhaWxzLy4vc3JjL3V0aWxpdGllcy9kb20tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b3Bfa25pZ2h0c190cmF2YWlscy8uL3NyYy92aWV3L3VpLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9rbmlnaHRzX3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3Bfa25pZ2h0c190cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wX2tuaWdodHNfdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3QuZGFyayB7XFxuICAtLWNvbG9yLXByaW1hcnktYmc6ICMyMTIxMjE7XFxuICAtLWNvbG9yLXNlY29uZGFyeS1iZzogIzAwMDAwMDtcXG4gIC0tY29sb3ItcHJpbWFyeS1mZzogI0IwQkVDNTtcXG4gIC0tY29sb3ItcHJpbWFyeS10ZXh0OiAjZWVmZmZmO1xcbiAgLS1jb2xvci1zZWNvbmRhcnktdGV4dDogI2VlZmZmZjtcXG4gIC0taWNvbi1maWx0ZXI6IGludmVydCgxMDAlKTtcXG4gIC0tY29sb3ItaW5hY3RpdmU6ICM0NzQ3NDc7XFxuICAtLWNvbG9yLWFjdGl2ZTogIzgwY2JjNDtcXG4gIC0tY29sb3Itc2Nyb2xsLWFjdGl2ZTogdmFyKC0tY29sb3ItcHJpbWFyeS1mZyk7XFxuICAtLWNvbG9yLXNjcm9sbC1pbmFjdGl2ZTogcmdiYSgxNzYsIDE5MCwgMTk3LCAwLjcpO1xcbiAgLS1jb2xvci1zaGFkb3c6IHJnYig1NCwgNTQsIDU0KTtcXG59XFxuXFxuOnJvb3QubGlnaHQge1xcbiAgLS1jb2xvci1wcmltYXJ5LWJnOiAjRkFGQUZBO1xcbiAgLS1jb2xvci1zZWNvbmRhcnktYmc6ICNCMEJFQzU7XFxuICAtLWNvbG9yLXByaW1hcnktZmc6ICM1NDZFN0E7XFxuICAtLWNvbG9yLXByaW1hcnktdGV4dDogIzI3MjcyNztcXG4gIC0tY29sb3Itc2Vjb25kYXJ5LXRleHQ6ICMwMDAwMDA7XFxuICAtLWljb24tZmlsdGVyOiBpbnZlcnQoMCUpO1xcbiAgLS1jb2xvci1pbmFjdGl2ZTogI0QyRDRENTtcXG4gIC0tY29sb3ItYWN0aXZlOiAjMzlBREI1O1xcbiAgLS1jb2xvci1zY3JvbGwtYWN0aXZlOiB2YXIoLS1jb2xvci1wcmltYXJ5LWZnKTtcXG4gIC0tY29sb3Itc2Nyb2xsLWluYWN0aXZlOiByZ2JhKDg0LCAxMTAsIDEyMiwgMC43KTtcXG4gIC0tY29sb3Itc2hhZG93OiByZ2IoMTg0LCAxODQsIDE4NCk7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1iZyk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS10ZXh0KTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDAuMXJlbSBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5LWZnKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1iZyk7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LXRleHQpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5hIHsgXFxuICBjb2xvcjogaW5oZXJpdDsgXFxufVxcblxcbi8qIFNjcm9sbGJhciAqL1xcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMC41cmVtO1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zY3JvbGwtYWN0aXZlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc2Nyb2xsLWluYWN0aXZlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxufVxcblxcbi8qIFN3aXRjaCAqL1xcblxcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQgeyBcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1pbmFjdGl2ZSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWN0aXZlKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tY29sb3ItYWN0aXZlKTs7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiBJY29uICovXFxuXFxuLmljb24ge1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5oZWFkZXItYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYmcpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiAgICAgICA+IHAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS10ZXh0KTtcXG59XFxuXFxuLmhlYWRlci1idXR0b24gICAgICAgPiBpbWcgIHtcXG4gIGZpbHRlcjogdmFyKC0taWNvbi1maWx0ZXIpIGRyb3Atc2hhZG93KDFweCAycHggMCB2YXIoLS1jb2xvci1zaGFkb3cpKTtcXG59XFxuXFxuLmhlYWRlci1idXR0b246ZW5hYmxlZCAgICAgICA+IHAge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uOmhvdmVyOmVuYWJsZWQgICAgICAgPiBpbWcgIHtcXG4gIGZpbHRlcjogdmFyKC0taWNvbi1maWx0ZXIpIGJyaWdodG5lc3MoOTAlKSBkcm9wLXNoYWRvdygxcHggMnB4IDAgdmFyKC0tY29sb3Itc2hhZG93KSk7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uOmFjdGl2ZTplbmFibGVkICAgICAgID4gcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KSB0cmFuc2xhdGVYKDJweCk7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG59XFxuXFxuLmhlYWRlci1idXR0b246YWN0aXZlOmVuYWJsZWQgICAgICAgPiBpbWcge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCkgdHJhbnNsYXRlWCgycHgpO1xcbiAgZmlsdGVyOiB2YXIoLS1pY29uLWZpbHRlcikgYnJpZ2h0bmVzcyg5MCUpIGRyb3Atc2hhZG93KDFweCAxcHggMCB2YXIoLS1jb2xvci1zaGFkb3cpKTtcXG59XFxuXFxuLmhlYWRlci1iYXItYnV0dG9uIHtcXG4gIHdpZHRoOiAxNTVweDtcXG59XFxuXFxuLmhlYWRlci1iYXItYnV0dG9uID4gcCB7XFxuICBtYXJnaW46IDAuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmhlYWRlciA+IDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbmhlYWRlciA+IDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4vKiBtYWluIGNvbnRlbnQgKi9cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgYm9yZGVyOiA0OXB4IHNvbGlkICM0NjI5MjE7XFxuICB3aWR0aDogOTYwcHg7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDA7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggcmVwZWF0KDgsIDExMHB4KSA0MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IHJlcGVhdCg4LCAxMTBweCkgNDBweDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxufVxcblxcbi53cmFwcGVyLXJvdy1pbm5lcixcXG4ud3JhcHBlci1jb2x1bW4taW5uZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAwO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBzdHJlY2g7XFxufVxcblxcbi53cmFwcGVyLXJvdy1pbm5lciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCBhdXRvKTtcXG59XFxuXFxuLndyYXBwZXItY29sdW1uLWlubmVyIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIGF1dG8pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG4gIFxcbi5ib3gge1xcbiAgZm9udC1zaXplOiAxMjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVkMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4uYm94ID4gLmljb24ge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxufVxcblxcbi5ib3ggPiBwIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMHJlbTtcXG4gIHBhZGRpbmc6IDAuMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmJveC1pbm5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRvcC1oZWFkZXIsXFxuLmJvdHRvbS1oZWFkZXIsXFxuLnJpZ2h0LWhlYWRlcixcXG4ubGVmdC1oZWFkZXIsXFxuLnRvcC1sZWZ0LWhlYWRlcixcXG4uYm90dG9tLWxlZnQtaGVhZGVyLFxcbi50b3AtcmlnaHQtaGVhZGVyLFxcbi5ib3R0b20tcmlnaHQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDY5NGM7XFxufVxcblxcbi50b3AtbGVmdC1oZWFkZXIsXFxuLmJvdHRvbS1sZWZ0LWhlYWRlcixcXG4ubGVmdC1oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxufVxcblxcbi50b3AtbGVmdC1oZWFkZXIsXFxuLnRvcC1yaWdodC1oZWFkZXIsXFxuLnRvcC1oZWFkZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLXJvdy1lbmQ6IDE7XFxufVxcblxcbi50b3AtcmlnaHQtaGVhZGVyLFxcbi5ib3R0b20tcmlnaHQtaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxMDtcXG4gIGdyaWQtY29sdW1uLWVuZDogMTE7XFxufVxcblxcbi5ib3R0b20tbGVmdC1oZWFkZXIsXFxuLmJvdHRvbS1yaWdodC1oZWFkZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDEwO1xcbiAgZ3JpZC1yb3ctZW5kOiAxMTtcXG59XFxuXFxuLnRvcC1oZWFkZXIsXFxuLmJvdHRvbS1oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDEwO1xcbn1cXG5cXG4ubGVmdC1oZWFkZXIsXFxuLnJpZ2h0LWhlYWRlciB7XFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIGdyaWQtcm93LWVuZDogMTA7XFxufVxcblxcbi5ib3R0b20taGVhZGVyIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxMDtcXG4gIGdyaWQtcm93LWVuZDogMTE7XFxufVxcblxcbi5yaWdodC1oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDEwO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAxMTtcXG59XFxuXFxuLnJpZ2h0LWhlYWRlcixcXG4udG9wLXJpZ2h0LWhlYWRlcixcXG4uYm90dG9tLXJpZ2h0LWhlYWRlciB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4udG9wLWhlYWRlcixcXG4udG9wLWxlZnQtaGVhZGVyLFxcbi50b3AtcmlnaHQtaGVhZGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4ubGVmdC1oZWFkZXIsXFxuLnRvcC1sZWZ0LWhlYWRlcixcXG4uYm90dG9tLWxlZnQtaGVhZGVyIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLmJvdHRvbS1oZWFkZXIsXFxuLmJvdHRvbS1sZWZ0LWhlYWRlcixcXG4uYm90dG9tLXJpZ2h0LWhlYWRlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLmJveDpudGgtY2hpbGQoLTJuKzEyKSxcXG4uYm94Om50aC1jaGlsZCgxMikgfiBidXR0b246bnRoLWNoaWxkKC0ybisxOSksXFxuLmJveDpudGgtY2hpbGQoMjApIH4gYnV0dG9uOm50aC1jaGlsZCgtMm4rMjgpLCBcXG4uYm94Om50aC1jaGlsZCgyOCkgfiBidXR0b246bnRoLWNoaWxkKC0ybiszNSksIFxcbi5ib3g6bnRoLWNoaWxkKDM2KSB+IGJ1dHRvbjpudGgtY2hpbGQoLTJuKzQ0KSwgXFxuLmJveDpudGgtY2hpbGQoNDQpIH4gYnV0dG9uOm50aC1jaGlsZCgtMm4rNTEpLCBcXG4uYm94Om50aC1jaGlsZCg1MikgfiBidXR0b246bnRoLWNoaWxkKC0ybis2MCksIFxcbi5ib3g6bnRoLWNoaWxkKDYwKSB+IGJ1dHRvbjpudGgtY2hpbGQoLTJuKzY3KSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc5OTUyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtF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QUFDL0I7O0FBRUE7Ozs7Ozs7O0VBUUUseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdC5kYXJrIHtcXG4gIC0tY29sb3ItcHJpbWFyeS1iZzogIzIxMjEyMTtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5LWJnOiAjMDAwMDAwO1xcbiAgLS1jb2xvci1wcmltYXJ5LWZnOiAjQjBCRUM1O1xcbiAgLS1jb2xvci1wcmltYXJ5LXRleHQ6ICNlZWZmZmY7XFxuICAtLWNvbG9yLXNlY29uZGFyeS10ZXh0OiAjZWVmZmZmO1xcbiAgLS1pY29uLWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbiAgLS1jb2xvci1pbmFjdGl2ZTogIzQ3NDc0NztcXG4gIC0tY29sb3ItYWN0aXZlOiAjODBjYmM0O1xcbiAgLS1jb2xvci1zY3JvbGwtYWN0aXZlOiB2YXIoLS1jb2xvci1wcmltYXJ5LWZnKTtcXG4gIC0tY29sb3Itc2Nyb2xsLWluYWN0aXZlOiByZ2JhKDE3NiwgMTkwLCAxOTcsIDAuNyk7XFxuICAtLWNvbG9yLXNoYWRvdzogcmdiKDU0LCA1NCwgNTQpO1xcbn1cXG5cXG46cm9vdC5saWdodCB7XFxuICAtLWNvbG9yLXByaW1hcnktYmc6ICNGQUZBRkE7XFxuICAtLWNvbG9yLXNlY29uZGFyeS1iZzogI0IwQkVDNTtcXG4gIC0tY29sb3ItcHJpbWFyeS1mZzogIzU0NkU3QTtcXG4gIC0tY29sb3ItcHJpbWFyeS10ZXh0OiAjMjcyNzI3O1xcbiAgLS1jb2xvci1zZWNvbmRhcnktdGV4dDogIzAwMDAwMDtcXG4gIC0taWNvbi1maWx0ZXI6IGludmVydCgwJSk7XFxuICAtLWNvbG9yLWluYWN0aXZlOiAjRDJENEQ1O1xcbiAgLS1jb2xvci1hY3RpdmU6ICMzOUFEQjU7XFxuICAtLWNvbG9yLXNjcm9sbC1hY3RpdmU6IHZhcigtLWNvbG9yLXByaW1hcnktZmcpO1xcbiAgLS1jb2xvci1zY3JvbGwtaW5hY3RpdmU6IHJnYmEoODQsIDExMCwgMTIyLCAwLjcpO1xcbiAgLS1jb2xvci1zaGFkb3c6IHJnYigxODQsIDE4NCwgMTg0KTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXRleHQpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktZmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktdGV4dCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmEgeyBcXG4gIGNvbG9yOiBpbmhlcml0OyBcXG59XFxuXFxuLyogU2Nyb2xsYmFyICovXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAwLjVyZW07XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNjcm9sbC1hY3RpdmUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zY3JvbGwtaW5hY3RpdmUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLyogU3dpdGNoICovXFxuXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7IFxcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWluYWN0aXZlKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY3RpdmUpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1jb2xvci1hY3RpdmUpOztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59XFxuXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi8qIEljb24gKi9cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1iZyk7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uICAgICAgID4gcCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXRleHQpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiAgICAgICA+IGltZyAge1xcbiAgZmlsdGVyOiB2YXIoLS1pY29uLWZpbHRlcikgZHJvcC1zaGFkb3coMXB4IDJweCAwIHZhcigtLWNvbG9yLXNoYWRvdykpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbjplbmFibGVkICAgICAgID4gcCB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG59XFxuXFxuLmhlYWRlci1idXR0b246aG92ZXI6ZW5hYmxlZCAgICAgICA+IGltZyAge1xcbiAgZmlsdGVyOiB2YXIoLS1pY29uLWZpbHRlcikgYnJpZ2h0bmVzcyg5MCUpIGRyb3Atc2hhZG93KDFweCAycHggMCB2YXIoLS1jb2xvci1zaGFkb3cpKTtcXG59XFxuXFxuLmhlYWRlci1idXR0b246YWN0aXZlOmVuYWJsZWQgICAgICAgPiBwIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpIHRyYW5zbGF0ZVgoMnB4KTtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbjphY3RpdmU6ZW5hYmxlZCAgICAgICA+IGltZyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KSB0cmFuc2xhdGVYKDJweCk7XFxuICBmaWx0ZXI6IHZhcigtLWljb24tZmlsdGVyKSBicmlnaHRuZXNzKDkwJSkgZHJvcC1zaGFkb3coMXB4IDFweCAwIHZhcigtLWNvbG9yLXNoYWRvdykpO1xcbn1cXG5cXG4uaGVhZGVyLWJhci1idXR0b24ge1xcbiAgd2lkdGg6IDE1NXB4O1xcbn1cXG5cXG4uaGVhZGVyLWJhci1idXR0b24gPiBwIHtcXG4gIG1hcmdpbjogMC4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuaGVhZGVyID4gOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuaGVhZGVyID4gOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi8qIG1haW4gY29udGVudCAqL1xcblxcbm1haW4ge1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBib3JkZXI6IDQ5cHggc29saWQgIzQ2MjkyMTtcXG4gIHdpZHRoOiA5NjBweDtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCByZXBlYXQoOCwgMTEwcHgpIDQwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggcmVwZWF0KDgsIDExMHB4KSA0MHB4O1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG59XFxuXFxuLndyYXBwZXItcm93LWlubmVyLFxcbi53cmFwcGVyLWNvbHVtbi1pbm5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDA7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgYWxpZ24taXRlbXM6IHN0cmVjaDtcXG59XFxuXFxuLndyYXBwZXItcm93LWlubmVyIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIGF1dG8pO1xcbn1cXG5cXG4ud3JhcHBlci1jb2x1bW4taW5uZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcbiAgXFxuLmJveCB7XFxuICBmb250LXNpemU6IDEyMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWQxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5ib3ggPiAuaWNvbiB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG59XFxuXFxuLmJveCA+IHAge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAwcmVtO1xcbiAgcGFkZGluZzogMC4xcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYm94LWlubmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udG9wLWhlYWRlcixcXG4uYm90dG9tLWhlYWRlcixcXG4ucmlnaHQtaGVhZGVyLFxcbi5sZWZ0LWhlYWRlcixcXG4udG9wLWxlZnQtaGVhZGVyLFxcbi5ib3R0b20tbGVmdC1oZWFkZXIsXFxuLnRvcC1yaWdodC1oZWFkZXIsXFxuLmJvdHRvbS1yaWdodC1oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkNjk0YztcXG59XFxuXFxuLnRvcC1sZWZ0LWhlYWRlcixcXG4uYm90dG9tLWxlZnQtaGVhZGVyLFxcbi5sZWZ0LWhlYWRlciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogMTtcXG59XFxuXFxuLnRvcC1sZWZ0LWhlYWRlcixcXG4udG9wLXJpZ2h0LWhlYWRlcixcXG4udG9wLWhlYWRlciB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMTtcXG59XFxuXFxuLnRvcC1yaWdodC1oZWFkZXIsXFxuLmJvdHRvbS1yaWdodC1oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDEwO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAxMTtcXG59XFxuXFxuLmJvdHRvbS1sZWZ0LWhlYWRlcixcXG4uYm90dG9tLXJpZ2h0LWhlYWRlciB7XFxuICBncmlkLXJvdy1zdGFydDogMTA7XFxuICBncmlkLXJvdy1lbmQ6IDExO1xcbn1cXG5cXG4udG9wLWhlYWRlcixcXG4uYm90dG9tLWhlYWRlciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogMTA7XFxufVxcblxcbi5sZWZ0LWhlYWRlcixcXG4ucmlnaHQtaGVhZGVyIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZ3JpZC1yb3ctZW5kOiAxMDtcXG59XFxuXFxuLmJvdHRvbS1oZWFkZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDEwO1xcbiAgZ3JpZC1yb3ctZW5kOiAxMTtcXG59XFxuXFxuLnJpZ2h0LWhlYWRlciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTA7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDExO1xcbn1cXG5cXG4ucmlnaHQtaGVhZGVyLFxcbi50b3AtcmlnaHQtaGVhZGVyLFxcbi5ib3R0b20tcmlnaHQtaGVhZGVyIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XFxufVxcblxcbi50b3AtaGVhZGVyLFxcbi50b3AtbGVmdC1oZWFkZXIsXFxuLnRvcC1yaWdodC1oZWFkZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5sZWZ0LWhlYWRlcixcXG4udG9wLWxlZnQtaGVhZGVyLFxcbi5ib3R0b20tbGVmdC1oZWFkZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4uYm90dG9tLWhlYWRlcixcXG4uYm90dG9tLWxlZnQtaGVhZGVyLFxcbi5ib3R0b20tcmlnaHQtaGVhZGVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4uYm94Om50aC1jaGlsZCgtMm4rMTIpLFxcbi5ib3g6bnRoLWNoaWxkKDEyKSB+IGJ1dHRvbjpudGgtY2hpbGQoLTJuKzE5KSxcXG4uYm94Om50aC1jaGlsZCgyMCkgfiBidXR0b246bnRoLWNoaWxkKC0ybisyOCksIFxcbi5ib3g6bnRoLWNoaWxkKDI4KSB+IGJ1dHRvbjpudGgtY2hpbGQoLTJuKzM1KSwgXFxuLmJveDpudGgtY2hpbGQoMzYpIH4gYnV0dG9uOm50aC1jaGlsZCgtMm4rNDQpLCBcXG4uYm94Om50aC1jaGlsZCg0NCkgfiBidXR0b246bnRoLWNoaWxkKC0ybis1MSksIFxcbi5ib3g6bnRoLWNoaWxkKDUyKSB+IGJ1dHRvbjpudGgtY2hpbGQoLTJuKzYwKSwgXFxuLmJveDpudGgtY2hpbGQoNjApIH4gYnV0dG9uOm50aC1jaGlsZCgtMm4rNjcpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzk5NTI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBWZXJ0ZXggZnJvbSBcIk1vZHVsZXMvdmVydGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGJvYXJkU2l6ZSkge1xuICAgIGlmIChib2FyZFNpemUgIT09IDgpIHRocm93IG5ldyAnSW52YWxpZCBpbnB1dCc7XG4gICAgdGhpcy5ib2FyZFNpemUgPSBib2FyZFNpemU7XG4gICAgdGhpcy4jaW5pdEJvYXJkKCk7XG4gICAgdGhpcy4jaW5pdEJvYXJkTGluaygpO1xuICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgdGhpcy5zZWFyY2hQYXRoRGZzKHt4OiAwLCB5OiAwfSwge3g6IDcsIHk6IDR9LCBwYXRocyk7XG4gIH1cblxuICAjaW5pdEJvYXJkKCkge1xuICAgIHRoaXMubWF0cml4ID0gbmV3IEFycmF5KHRoaXMuYm9hcmRTaXplKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXRyaXgubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMubWF0cml4W2ldID0gbmV3IEFycmF5KHRoaXMuYm9hcmRTaXplKTtcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLm1hdHJpeFtpXS5sZW5ndGg7ICsraikge1xuICAgICAgICB0aGlzLm1hdHJpeFtpXVtqXSA9IG5ldyBWZXJ0ZXgoaSwgaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2luaXRCb2FyZExpbmsoKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgKytpKSB7XG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5tYXRyaXhbaV0ubGVuZ3RoOyArK2opIHtcbiAgICAgICAgaWYgKChpIC0gMiA+PSAwKSAmJiAoaiAtIDEgPj0gMCkpIFxuICAgICAgICAgIHRoaXMubWF0cml4W2ldW2pdLmFkZEVkZ2UodGhpcy5tYXRyaXhbaSAtIDJdW2ogLSAxXSk7XG4gICAgICAgIGlmICgoaSAtIDIgPj0gMCkgJiYgKGogKyAxIDwgdGhpcy5ib2FyZFNpemUpKSBcbiAgICAgICAgICB0aGlzLm1hdHJpeFtpXVtqXS5hZGRFZGdlKHRoaXMubWF0cml4W2kgLSAyXVtqICsgMV0pO1xuICAgICAgICBpZiAoKGkgKyAyIDwgdGhpcy5ib2FyZFNpemUpICYmIChqIC0gMSA+PSAwKSkgXG4gICAgICAgICAgdGhpcy5tYXRyaXhbaV1bal0uYWRkRWRnZSh0aGlzLm1hdHJpeFtpICsgMl1baiAtIDFdKTtcbiAgICAgICAgaWYgKChpICsgMiA8IHRoaXMuYm9hcmRTaXplKSAmJiAoaiArIDEgPCB0aGlzLmJvYXJkU2l6ZSkpIFxuICAgICAgICAgIHRoaXMubWF0cml4W2ldW2pdLmFkZEVkZ2UodGhpcy5tYXRyaXhbaSArIDJdW2ogKyAxXSk7XG4gICAgICAgIGlmICgoaiAtIDIgPj0gMCkgJiYgKGkgLSAxID49IDApKSBcbiAgICAgICAgICB0aGlzLm1hdHJpeFtpXVtqXS5hZGRFZGdlKHRoaXMubWF0cml4W2kgLSAxXVtqIC0gMl0pO1xuICAgICAgICBpZiAoKGogLSAyID49IDApICYmIChpICsgMSA8IHRoaXMuYm9hcmRTaXplKSkgXG4gICAgICAgICAgdGhpcy5tYXRyaXhbaV1bal0uYWRkRWRnZSh0aGlzLm1hdHJpeFtpICsgMV1baiAtIDJdKTtcbiAgICAgICAgaWYgKChqICsgMiA8IHRoaXMuYm9hcmRTaXplKSAmJiAoaSAtIDEgPj0gMCkpIFxuICAgICAgICAgIHRoaXMubWF0cml4W2ldW2pdLmFkZEVkZ2UodGhpcy5tYXRyaXhbaSAtIDFdW2ogKyAyXSk7XG4gICAgICAgIGlmICgoaiArIDIgPCB0aGlzLmJvYXJkU2l6ZSkgJiYgKGkgKyAxIDwgdGhpcy5ib2FyZFNpemUpKSBcbiAgICAgICAgICB0aGlzLm1hdHJpeFtpXVtqXS5hZGRFZGdlKHRoaXMubWF0cml4W2kgKyAxXVtqICsgMl0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICN2YWxpZElucHV0KHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uICYmIChwb3NpdGlvbi54ID49IDAgJiYgcG9zaXRpb24ueCA8IHRoaXMuYm9hcmRTaXplKTtcbiAgfVxuXG4gIHNlYXJjaFBhdGhCZnMoc291cmNlLCBkZXN0aW5hdGlvbiwgcGF0aHMgPSBbXSkge1xuICAgIGlmICghdGhpcy4jdmFsaWRJbnB1dChzb3VyY2UpIHx8ICF0aGlzLiN2YWxpZElucHV0KGRlc3RpbmF0aW9uKSkgcmV0dXJuO1xuICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubWF0cml4W3NvdXJjZS54XVtzb3VyY2UueV07XG5cbiAgICBjb25zdCBxdWV1ZSA9IFtbIG5vZGUsIFtdIF1dO1xuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IFsgY3VycmVudCwgWy4uLnBhdGhdXSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGN1cnJlbnQuZ2V0UG9zaXRpb247XG4gICAgICBwYXRoLnB1c2gocG9zaXRpb24pO1xuICAgICAgXG4gICAgICBpZiAoZGVzdGluYXRpb24ueCA9PT0gcG9zaXRpb24ueCAmJiBkZXN0aW5hdGlvbi55ID09PSBwb3NpdGlvbi55KSB7XG4gICAgICAgIHBhdGguZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBwYXRocy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGN1cnJlbnQpKSB7XG4gICAgICAgIHF1ZXVlLnB1c2goLi4uY3VycmVudC5nZXRWZXJ0ZXhFZGdlcy5tYXAoZWRnZSA9PiBbIGVkZ2UsIHBhdGggXSkpO1xuICAgICAgfVxuICAgICAgdmlzaXRlZC5hZGQoY3VycmVudCk7XG4gICAgfSAgICBcbiAgfVxuXG4gIHNlYXJjaFBhdGhEZnMoc291cmNlLCBkZXN0aW5hdGlvbiwgcGF0aHMgPSBbXSwgdmlzaXRlZCA9IG5ldyBTZXQoKSkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm1hdHJpeFtzb3VyY2UueF1bc291cmNlLnldO1xuICAgIGNvbnN0IGRlc3ROb2RlID0gdGhpcy5tYXRyaXhbZGVzdGluYXRpb24ueF1bZGVzdGluYXRpb24ueV07XG4gICAgaWYgKHZpc2l0ZWQuaGFzKGRlc3ROb2RlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFkZCBub2RlIHRvIHBhdGhcbiAgICBwYXRocy5wdXNoKG5vZGUuZ2V0UG9zaXRpb24pO1xuICAgIGlmICghdmlzaXRlZC5oYXMobm9kZSkpIHZpc2l0ZWQuYWRkKG5vZGUpO1xuXG4gICAgY29uc3QgZWRnZXMgPSBub2RlLmdldFZlcnRleEVkZ2VzO1xuICAgIGNvbnN0IGlkeEZhdGhlciA9IHBhdGhzLmxlbmd0aCAtIDE7XG5cbiAgICAvLyBJdGVyYXRlcyBvbiBlZGdlcyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAodmlzaXRlZC5oYXMoZGVzdE5vZGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZWRnZSA9IGVkZ2VzW2ldO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uO1xuXG4gICAgICBpZiAoZGVzdGluYXRpb24ueCA9PT0gcG9zaXRpb24ueCAmJiBkZXN0aW5hdGlvbi55ID09PSBwb3NpdGlvbi55KSB7XG4gICAgICAgIHZpc2l0ZWQuYWRkKGVkZ2UpO1xuICAgICAgICBwYXRocy5wdXNoKGVkZ2UuZ2V0UG9zaXRpb24pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZWRnZSkpIHtcbiAgICAgICAgdmlzaXRlZC5hZGQoZWRnZSk7XG4gICAgICAgIHRoaXMuc2VhcmNoUGF0aERmcyhwb3NpdGlvbiwgZGVzdGluYXRpb24sIHBhdGhzLCB2aXNpdGVkKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVzdE5vZGUpKSB7XG4gICAgICAgICAgLy8gUG9wIG90aGVyIHBhdGhzXG4gICAgICAgICAgd2hpbGUgKGlkeEZhdGhlciArIDEgIT09IHBhdGhzLmxlbmd0aCkge1xuICAgICAgICAgICAgcGF0aHMucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3Rvcih4UG9zaXRpb24sIHlQb3NpdGlvbikge1xuICAgIGlmIChOdW1iZXIuaXNOYU4oK3hQb3NpdGlvbikgJiYgXG4gICAgICAgIE51bWJlci5pc05hTigreVBvc2l0aW9uKSkgdGhyb3cgbmV3ICdJbnZhbGlkIGlucHV0JztcbiAgICB0aGlzLnhQb3NpdGlvbiA9ICt4UG9zaXRpb247XG4gICAgdGhpcy55UG9zaXRpb24gPSAreVBvc2l0aW9uO1xuICAgIHRoaXMuZWRnZXMgPSBbXTtcbiAgfVxuXG4gIGdldCBnZXRQb3NpdGlvbigpIHsgcmV0dXJuIHsgeDogdGhpcy54UG9zaXRpb24sIHk6IHRoaXMueVBvc2l0aW9uIH07IH1cblxuICBnZXQgZ2V0VmVydGV4RWRnZXMoKSB7IHJldHVybiB0aGlzLmVkZ2VzOyB9XG5cbiAgYWRkRWRnZSh2ZXJ0ZXgpIHtcbiAgICAvLyBDaGVjayBmb3IgaW52YWxpZCB0eXBlXG4gICAgaWYgKCEodmVydGV4IGluc3RhbmNlb2YgVmVydGV4KSkgdGhyb3cgbmV3ICdJbnZhbGlkIGlucHV0JztcbiAgICBcbiAgICAvLyBHZXQgdmVydGV4IHBvc2l0aW9uXG4gICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguZ2V0UG9zaXRpb247XG5cbiAgICAvLyBDaGVjayB2ZXJ0ZXggYWxyZWFkeSBpbiBsaW5rc1xuICAgIGlmICh0aGlzLmVkZ2VzLmV2ZXJ5KHYgPT4gdi5nZXRQb3NpdGlvbiAhPT0gdmVydGV4UG9zaXRpb24pKSB7XG4gICAgICAvLyBBZGQgbmV3IHZlcnRleFxuICAgICAgdGhpcy5lZGdlcy5wdXNoKHZlcnRleCk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IERvbU1hbmFnZXIgZnJvbSAnVXRpbGl0aWVzL2RvbS1tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uTWFuYWdlciB7XG4gIHN0YXRpYyBjcmVhdGVCdXR0b24oYnRuVGV4dCA9ICcnLCBzdmdJY29uRmlsZU5hbWUgPSBudWxsLCBjbGFzc05hbWUgPSBudWxsLCBjYkV2ZW50ID0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYnRuID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlQ2xhc3MoJ2J1dHRvbicsIGNsYXNzTmFtZSB8fCAnbmF2QnV0dG9uJyk7XG4gICAgLy8gSW5zZXJ0IGljb24gd2hlbiBleGlzdFxuICAgIGlmKHN2Z0ljb25GaWxlTmFtZSkge1xuICAgICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlSW1nKHN2Z0ljb25GaWxlTmFtZSwgYnRuVGV4dCwgYnRuLCAnaWNvbicpO1xuICAgIH1cbiAgICAvLyBBZGQgdGV4dCB3aGVuIGNvbnRhaW5zIHNvbWV0aGluZ1xuICAgIGlmKGJ0blRleHQubGVuZ3RoID4gMCkge1xuICAgICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdwJywgYnRuLCBudWxsLCBudWxsLCBidG5UZXh0KTtcbiAgICB9XG4gICAgLy8gQWRkIGJ1dHRvbiBldmVudFxuICAgIGJ0bi5vbmNsaWNrID0gY2JFdmVudDtcbiAgICByZXR1cm4gYnRuOyAgXG4gIH1cblxuICBzdGF0aWMgZWRpdEJ1dHRvblRleHQoYnRuLCB0ZXh0ID0gJycpIHtcbiAgICBjb25zdCBidG5UZXh0ID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbiAgICBpZihidG5UZXh0KSB7XG4gICAgICAvKiBSZW1vdmUgb3IgZWRpdCB0ZXh0ICovXG4gICAgICBpZih0ZXh0ID09PSAnJykge1xuICAgICAgICBidG5UZXh0LnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnRuVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHRleHQubGVuZ3RoID4gMCkgeyAvKiBDcmVhdGUgbm9kZSAqL1xuICAgICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdwJywgYnRuLCBudWxsLCBudWxsLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZWRpdEJ1dHRvbkltYWdlKGJ0biwgc3ZnSWNvbkZpbGVOYW1lID0gbnVsbCkge1xuICAgIGNvbnN0IGJ0blRleHQgICAgPSBidG4ucXVlcnlTZWxlY3RvcigncCcpO1xuICAgIGNvbnN0IGJ0bkltZ05vZGUgPSBidG4ucXVlcnlTZWxlY3RvcignLmljb24nKTtcbiAgICBpZihidG5JbWdOb2RlKSB7XG4gICAgICBpZighc3ZnSWNvbkZpbGVOYW1lKSB7XG4gICAgICAgIGJ0bkltZ05vZGUucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBEb21NYW5hZ2VyLnVwZGF0ZU5vZGVJbWcoc3ZnSWNvbkZpbGVOYW1lLCBidG5JbWdOb2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoc3ZnSWNvbkZpbGVOYW1lKSB7IC8vIEluc2VydCBpY29uIHdoZW4gZXhpc3RcbiAgICAgIGNvbnN0IGFsdFRleHQgPSBidG5UZXh0ID8gYnRuVGV4dC50ZXh0Q29udGVudCA6ICcnO1xuICAgICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlSW1nKHN2Z0ljb25GaWxlTmFtZSwgYWx0VGV4dCwgYnRuLCAnaWNvbicpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVJbWFnZUJ1dHRvbihzdmdJY29uRmlsZU5hbWUsIGNsYXNzTmFtZSA9IG51bGwsIGNiRXZlbnQgPSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQnV0dG9uTWFuYWdlci5jcmVhdGVCdXR0b24oJycsIHN2Z0ljb25GaWxlTmFtZSwgY2xhc3NOYW1lLCBjYkV2ZW50KVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVRleHRCdXR0b24oYnRuVGV4dCwgY2xhc3NOYW1lID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBCdXR0b25NYW5hZ2VyLmNyZWF0ZUJ1dHRvbihidG5UZXh0LCBudWxsLCBjbGFzc05hbWUsIGNiRXZlbnQpXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSW1hZ2VMaW5rQnV0dG9uKGxpbmssIHN2Z0ljb25GaWxlTmFtZSkge1xuICAgIGNvbnN0IG5vZGUgPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVMaW5rKGxpbmssIG51bGwsIG51bGwsIG51bGwsIFxuICAgICAgRG9tTWFuYWdlci5jcmVhdGVOb2RlSW1nKHN2Z0ljb25GaWxlTmFtZSwgJ2ltYWdlTGluaycsICdpY29uLWxpbmsnKVxuICAgICk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn1cbiIsIlxuY29uc3QgaW1hZ2VQYXRoID0gJy4vaW1hZ2VzLyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbU1hbmFnZXIge1xuICAvLyBSZXR1cm5zIHRydWUgaWYgaXQgaXMgYSBET00gZWxlbWVudFxuICBzdGF0aWMgI2lzRWxlbWVudChvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIiA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vIERPTTJcbiAgICAgIG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lPT09XCJzdHJpbmdcIlxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAvLyBBZGQgY2xhc3MgbmFtZSBvciBJRFxuICAgIGlmKGNsYXNzTmFtZSkgZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgaWYoaWQpIGVsZW0uaWQgPSBpZDtcbiAgICAvLyBBZGQgdGV4dCBjb250ZW50XG4gICAgaWYoY29udGVudCkgZWxlbS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgLy8gRXZlbnR1YWxseSBhZGQgY2hpbGQgb3IgY2hpbGRyZW5cbiAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChlbGVtLCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTm9kZUNvbnRlbnQodHlwZSwgY29udGVudCwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsKSB7XG4gICAgcmV0dXJuIERvbU1hbmFnZXIuY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBudWxsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlQ2xhc3ModHlwZSwgY2xhc3NOYW1lLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsKSB7XG4gICAgcmV0dXJuIERvbU1hbmFnZXIuY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBudWxsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlSUQodHlwZSwgaWQsIGNsYXNzTmFtZSA9IG51bGwsIGNvbnRlbnQgPSBudWxsKSB7XG4gICAgcmV0dXJuIERvbU1hbmFnZXIuY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBudWxsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgbG9jYWwgPSB0cnVlKSB7XG4gICAgY29uc3QgZmlsZUZ1bGxQYXRoID0gbG9jYWwgPyBpbWFnZVBhdGggKyBpbWdGaWxlTmFtZSA6IGltZ0ZpbGVOYW1lOyAvLyBsb2NhbCBwYXRoIG9yIHVybFxuICAgIGNvbnN0IG5vZGUgPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGUoJ2ltZycsIGNsYXNzTmFtZSwgaWQsIG51bGwsIG51bGwpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlRnVsbFBhdGgpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVJbWdDbGFzcyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUsIGlkID0gbnVsbCwgbG9jYWwgPSB0cnVlKSB7XG4gICAgcmV0dXJuIERvbU1hbmFnZXIuY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUsIGlkLCBsb2NhbCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTm9kZUltZ0lEKGltZ0ZpbGVOYW1lLCBhbHQsIGlkLCBjbGFzc05hbWUgPSBudWxsLCBsb2NhbCA9IHRydWUpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQsIGxvY2FsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlTGluayhsaW5rLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgICBjb25zdCBub2RlID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlKCdhJywgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgY2hpbGRyZW4pO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgbGluayk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBhZGROb2RlQ2hpbGQoZmF0aGVyLCBjaGlsZHJlbikge1xuICAgIGlmKGNoaWxkcmVuKSB7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgeyAvLyBDb250YWlucyBtb3JlIHRoYW4gb25lIGNoaWxkIGluIEFycmF5XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgIGZhdGhlci5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmKERvbU1hbmFnZXIuI2lzRWxlbWVudChjaGlsZHJlbikpIHsgLy8gQ29udGFpbnMganVzdCBvbmUgY2hpbGRcbiAgICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQWRkTm9kZSh0eXBlLCBmYXRoZXIsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAgIC8vIEFwcGVuZCB0aGUgbmV3IG5vZGUgaW4gZmF0aGVyXG4gICAgY29uc3Qgbm9kZSA9IERvbU1hbmFnZXIuY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbik7XG4gICAgZmF0aGVyLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUFkZE5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgZmF0aGVyLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGxvY2FsID0gdHJ1ZSkge1xuICAgIC8vIEFwcGVuZCB0aGUgbmV3IG5vZGUgaW4gZmF0aGVyXG4gICAgY29uc3Qgbm9kZSA9IERvbU1hbmFnZXIuY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUsIGlkLCBsb2NhbCk7XG4gICAgZmF0aGVyLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZU5vZGVJbWdCeVNlbGVjdG9yKGltZ0ZpbGVOYW1lLCBmYXRoZXIsIHNlbGVjdG9yLCBsb2NhbCA9IHRydWUpIHtcbiAgICBjb25zdCBpbWdOb2RlID0gZmF0aGVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGNvbnN0IHVybCA9IGxvY2FsID8gaW1hZ2VQYXRoICsgaW1nRmlsZU5hbWUgOiBpbWdGaWxlTmFtZTtcbiAgICBpZihpbWdOb2RlKSBpbWdOb2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBpbWdOb2RlLCBsb2NhbCA9IHRydWUpIHtcbiAgICBjb25zdCB1cmwgPSBsb2NhbCA/IGltYWdlUGF0aCArIGltZ0ZpbGVOYW1lIDogaW1nRmlsZU5hbWU7XG4gICAgaWYoaW1nTm9kZSkgaW1nTm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGlzTm9kZUhpZGUobm9kZSkge1xuICAgIHJldHVybiBub2RlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJztcbiAgfVxuXG4gIHN0YXRpYyB0b2dnbGVEaXNwbGF5QnlOb2RlKG5vZGUsIG5leHREaXNwbGF5ID0gdW5kZWZpbmVkKSB7XG4gICAgaWYobm9kZSkge1xuICAgICAgaWYobm9kZS5kYXRhc2V0LnByZXZEaXNwbGF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnByZXZEaXNwbGF5ID0gbmV4dERpc3BsYXkgfHwgbm9kZS5zdHlsZS5kaXNwbGF5O1xuICAgICAgfVxuICAgICAgY29uc3QgcHJldkRpc3BsYXkgPSBub2RlLnN0eWxlLmRpc3BsYXk7XG4gICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAobm9kZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpID8gJ25vbmUnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbm9kZS5kYXRhc2V0LnByZXZEaXNwbGF5O1xuICAgICAgbm9kZS5kYXRhc2V0LnByZXZEaXNwbGF5ID0gcHJldkRpc3BsYXk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRvZ2dsZURpc3BsYXkobm9kZU5hbWUsIG5leHREaXNwbGF5ID0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9kZU5hbWUpO1xuICAgIERvbU1hbmFnZXIudG9nZ2xlRGlzcGxheUJ5Tm9kZShub2RlLCBuZXh0RGlzcGxheSk7XG4gIH1cbn1cbiIsIlxuaW1wb3J0ICdTdmcvaG9tZS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgJ1N2Zy9naXRodWIuc3ZnJztcbmltcG9ydCAnU3ZnL2RhcmstdGhlbWUuc3ZnJztcbmltcG9ydCAnU3ZnL2xpZ2h0LXRoZW1lLnN2Zyc7XG5pbXBvcnQgJ1N2Zy9jaGVzcy1rbmlnaHQuc3ZnJztcbmltcG9ydCBEb21NYW5hZ2VyIGZyb20gJ1V0aWxpdGllcy9kb20tbWFuYWdlcic7XG5pbXBvcnQgQnV0dG9uTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvYnV0dG9uLW1hbmFnZXInO1xuaW1wb3J0IENvbnRyb2xsZXJCb2FyZCBmcm9tICdDb250cm9sbGVyL2NvbnRyb2xsZXItYm9hcmQnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0geyB0aGVtZTogJ2RhcmsnIH07XG5cbmNvbnN0IGJvYXJkU2l6ZSA9IDg7XG5jb25zdCBwaGFzZXMgPSB7XG4gIHBoYXNlUmVzdDogICAgIDAsXG4gIHBoYXNlU2V0RHN0OiAgIDEsXG4gIHBoYXNlQ29tcGxldGU6IDJcbn07XG5cbmNvbnN0IGdyYXBoRmlyc3RTZWFyY2ggPSB7XG4gIGRmczogJ0RlcHRoLWZpcnN0IHNlYXJjaCcsXG4gIGJmczogJ0JyZWFkdGgtZmlyc3Qgc2VhcmNoJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb250cm9sbGVyQm9hcmQgPSBuZXcgQ29udHJvbGxlckJvYXJkKGJvYXJkU2l6ZSk7XG4gICAgdGhpcy5zcmNQb3NpdGlvbiA9IHtcbiAgICAgIHg6IC0xLFxuICAgICAgeTogLTFcbiAgICB9O1xuICAgIHRoaXMuZHN0UG9zaXRpb24gPSB7XG4gICAgICB4OiAtMSxcbiAgICAgIHk6IC0xXG4gICAgfTtcbiAgICB0aGlzLnN0ZXBQaGFzZSA9IHBoYXNlcy5waGFzZVJlc3Q7XG4gICAgdGhpcy5idG5SYW5kb21LbmlnaHQgPSBudWxsO1xuICAgIHRoaXMuYWxnb3JpdGhtID0gZ3JhcGhGaXJzdFNlYXJjaC5iZnM7XG4gICAgdGhpcy51cGRhdGVDaGVzc0JvYXJkVGltZXIgPSAtMTtcbiAgfVxuXG4gICNzdG9wVXBkYXRlQ2hlc3MoKSB7XG4gICAgaWYgKHRoaXMudXBkYXRlQ2hlc3NCb2FyZFRpbWVyICE9PSAtMSkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnVwZGF0ZUNoZXNzQm9hcmRUaW1lcik7XG4gICAgICB0aGlzLnVwZGF0ZUNoZXNzQm9hcmRUaW1lciA9IC0xO1xuICAgIH1cbiAgfVxuXG4gICNjbGVhblVwQm9hcmQoKSB7XG4gICAgdGhpcy4jc3RvcFVwZGF0ZUNoZXNzKCk7XG4gICAgdGhpcy5zdGVwUGhhc2UgPSBwaGFzZXMucGhhc2VSZXN0O1xuICAgIHRoaXMuI3NldFBvc2l0aW9uKCk7XG4gICAgdGhpcy5idG5SYW5kb21LbmlnaHQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLiNkb0NyZWF0ZUhvbWUoKTtcbiAgfVxuXG4gICNkb0xvYWRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgIFxuICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGhlYWRlciwgQnV0dG9uTWFuYWdlci5jcmVhdGVJbWFnZUJ1dHRvbignaG9tZS1vdXRsaW5lLnN2ZycsICdoZWFkZXItYnV0dG9uJywgKCkgPT4gdGhpcy4jY2xlYW5VcEJvYXJkKCkpKTtcbiAgICBcbiAgICB0aGlzLmJ0blJhbmRvbUtuaWdodCA9IEJ1dHRvbk1hbmFnZXIuY3JlYXRlVGV4dEJ1dHRvbigncmFuZG9tIGtuaWdodCcsICdoZWFkZXItYmFyLWJ1dHRvbicsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0ZXBQaGFzZSA9PT0gcGhhc2VzLnBoYXNlQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy4jY2xlYW5VcEJvYXJkKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0ZXBQaGFzZSA9PT0gcGhhc2VzLnBoYXNlUmVzdCkge1xuICAgICAgICBjb25zdCBnZXRSYW5kb21Qb3NpdGlvbiA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgICAgIGNvbnN0IHJuZFBvc2l0aW9uID0ge1xuICAgICAgICAgIHg6IGdldFJhbmRvbVBvc2l0aW9uKCksXG4gICAgICAgICAgeTogZ2V0UmFuZG9tUG9zaXRpb24oKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLiNzZXRQb3NpdGlvbihybmRQb3NpdGlvbi54LCBybmRQb3NpdGlvbi55KTtcbiAgICAgICAgVWlDb250cm9sbGVyLiNzZXRLbmlnaHQocm5kUG9zaXRpb24ueCwgcm5kUG9zaXRpb24ueSk7XG4gICAgICAgIHRoaXMuYnRuUmFuZG9tS25pZ2h0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGVwUGhhc2UgPSBwaGFzZXMucGhhc2VTZXREc3Q7XG4gICAgICB9XG4gICAgfSk7XG4gICAgRG9tTWFuYWdlci5hZGROb2RlQ2hpbGQoaGVhZGVyLCB0aGlzLmJ0blJhbmRvbUtuaWdodCk7XG5cbiAgICBjb25zdCBidG4gPSBCdXR0b25NYW5hZ2VyLmNyZWF0ZVRleHRCdXR0b24odGhpcy5hbGdvcml0aG0sICdoZWFkZXItYmFyLWJ1dHRvbicsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmFsZ29yaXRobSA9PT0gZ3JhcGhGaXJzdFNlYXJjaC5iZnMpIHRoaXMuYWxnb3JpdGhtID0gZ3JhcGhGaXJzdFNlYXJjaC5kZnM7XG4gICAgICBlbHNlIHRoaXMuYWxnb3JpdGhtID0gZ3JhcGhGaXJzdFNlYXJjaC5iZnM7XG5cbiAgICAgIEJ1dHRvbk1hbmFnZXIuZWRpdEJ1dHRvblRleHQoYnRuLCB0aGlzLmFsZ29yaXRobSk7XG4gICAgfSk7XG5cbiAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChoZWFkZXIsIGJ0bik7XG5cbiAgICBjb25zdCBidG5Ub2dnbGVUaGVtZSA9IEJ1dHRvbk1hbmFnZXIuY3JlYXRlSW1hZ2VCdXR0b24oYCR7c2V0dGluZ3MudGhlbWV9LXRoZW1lLnN2Z2AsICdoZWFkZXItYnV0dG9uJywgKCkgPT4ge1xuICAgICAgc2V0dGluZ3MudGhlbWUgPSAoc2V0dGluZ3MudGhlbWUgIT09ICdkYXJrJyA/ICdkYXJrJyA6ICdsaWdodCcpO1xuICAgICAgQnV0dG9uTWFuYWdlci5lZGl0QnV0dG9uSW1hZ2UoYnRuVG9nZ2xlVGhlbWUsIGAke3NldHRpbmdzLnRoZW1lfS10aGVtZS5zdmdgKTtcbiAgICAgIHJvb3QuY2xhc3NOYW1lID0gc2V0dGluZ3MudGhlbWU7XG4gICAgfSk7XG5cbiAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChoZWFkZXIsIGJ0blRvZ2dsZVRoZW1lKTtcbiAgfVxuXG4gICNkb0NyZWF0ZUhvbWUoKSB7XG4gICAgRG9tTWFuYWdlci5yZW1vdmVBbGxDaGlsZE5vZGVzKG1haW4pO1xuICAgIGNvbnN0IGRpdldyYXBwZXIgPSBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2RpdicsIG1haW4sICd3cmFwcGVyJyk7XG4gICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZXcmFwcGVyLCAndG9wLWxlZnQtaGVhZGVyJyk7XG4gICAgY29uc3QgZGl2VG9wID0gRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZXcmFwcGVyLCAndG9wLWhlYWRlcicpO1xuICAgIGNvbnN0IGRpdlRvcFdyYXBwZXIgPSBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2RpdicsIGRpdlRvcCwgJ3dyYXBwZXItY29sdW1uLWlubmVyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemU7ICsraSkge1xuICAgICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZUb3BXcmFwcGVyLCAnYm94LWlubmVyJywgbnVsbCwgU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpKTtcbiAgICB9XG4gICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZXcmFwcGVyLCAndG9wLXJpZ2h0LWhlYWRlcicpO1xuICAgIGNvbnN0IGRpdkxlZnQgPSBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2RpdicsIGRpdldyYXBwZXIsICdsZWZ0LWhlYWRlcicpO1xuICAgIGNvbnN0IGRpdkxlZnRXcmFwcGVyID0gRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZMZWZ0LCAnd3JhcHBlci1yb3ctaW5uZXInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgKytpKSB7XG4gICAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2RpdicsIGRpdkxlZnRXcmFwcGVyLCAnYm94LWlubmVyJywgbnVsbCwgMSArIGkpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgKytpKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkU2l6ZTsgKytqKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBCdXR0b25NYW5hZ2VyLmNyZWF0ZUJ1dHRvbignJywgbnVsbCwgJ2JveCcsIChlKSA9PiB0aGlzLiNvbkNlbGxDbGljayhlKSk7XG4gICAgICAgIGdyaWQuZGF0YXNldC54ID0gaTtcbiAgICAgICAgZ3JpZC5kYXRhc2V0LnkgPSBqO1xuICAgICAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChkaXZXcmFwcGVyLCBncmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZXcmFwcGVyLCAnYm90dG9tLWxlZnQtaGVhZGVyJyk7XG4gICAgY29uc3QgZGl2Qm90dG9tID0gRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZXcmFwcGVyLCAnYm90dG9tLWhlYWRlcicpO1xuICAgIGNvbnN0IGRpdkJvdHRvbVdyYXBwZXIgPSBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2RpdicsIGRpdkJvdHRvbSwgJ3dyYXBwZXItY29sdW1uLWlubmVyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemU7ICsraSkge1xuICAgICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZCb3R0b21XcmFwcGVyLCAnYm94LWlubmVyJywgbnVsbCwgU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpKTtcbiAgICB9XG4gICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZXcmFwcGVyLCAnYm90dG9tLXJpZ2h0LWhlYWRlcicpO1xuICAgIGNvbnN0IGRpdlJpZ2h0ID0gRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZXcmFwcGVyLCAncmlnaHQtaGVhZGVyJyk7XG4gICAgY29uc3QgZGl2UmlnaHRXcmFwcGVyID0gRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZSaWdodCwgJ3dyYXBwZXItcm93LWlubmVyJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemU7ICsraSkge1xuICAgICAgRG9tTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZSaWdodFdyYXBwZXIsICdib3gtaW5uZXInLCBudWxsLCAxICsgaSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljICNzZXRLbmlnaHQoeCwgeSkge1xuICAgIGlmIChOdW1iZXIuaXNOYU4oK3gpIHx8IE51bWJlci5pc05hTigreSkpIHJldHVybjtcbiAgICBpZiAoKHggPiBib2FyZFNpemUpIHx8ICh5ID4gYm9hcmRTaXplKSkgcmV0dXJuO1xuICAgIGNvbnN0IHRhcmdldCA9IG1haW4ucXVlcnlTZWxlY3RvcihgW2RhdGEteD0nJHt4fSddW2RhdGEteT0nJHt5fSddYCk7XG4gICAgQnV0dG9uTWFuYWdlci5lZGl0QnV0dG9uSW1hZ2UodGFyZ2V0LCAnY2hlc3Mta25pZ2h0LnN2ZycpO1xuICB9XG5cbiAgc3RhdGljICNzZXRNb3ZlU3RlcCh4LCB5LCBzdGVwKSB7XG4gICAgaWYgKE51bWJlci5pc05hTigreCkgfHwgTnVtYmVyLmlzTmFOKCt5KSkgcmV0dXJuO1xuICAgIGlmICgoeCA+IGJvYXJkU2l6ZSkgfHwgKHkgPiBib2FyZFNpemUpKSByZXR1cm47XG4gICAgY29uc3QgdGFyZ2V0ID0gbWFpbi5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke3h9J11bZGF0YS15PScke3l9J11gKTtcbiAgICBCdXR0b25NYW5hZ2VyLmVkaXRCdXR0b25UZXh0KHRhcmdldCwgc3RlcC50b1N0cmluZygxMCkpO1xuICAgIEJ1dHRvbk1hbmFnZXIuZWRpdEJ1dHRvbkltYWdlKHRhcmdldCk7XG4gIH1cblxuICAjc2V0UG9zaXRpb24oeCA9IC0xLCB5ID0gLTEsIGlzRHN0ID0gZmFsc2UpIHtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKCt4KSB8fCBOdW1iZXIuaXNOYU4oK3kpKSByZXR1cm47XG4gICAgaWYgKCh4ID4gYm9hcmRTaXplKSB8fCAoeSA+IGJvYXJkU2l6ZSkpIHJldHVybjtcblxuICAgIC8vIFJlc2V0XG4gICAgaWYgKCh4IDwgMCkgfHwgKHkgPCAwKSkge1xuICAgICAgdGhpcy5zcmNQb3NpdGlvbi54ID0gLTE7XG4gICAgICB0aGlzLnNyY1Bvc2l0aW9uLnkgPSAtMTtcbiAgICAgIHRoaXMuZHN0UG9zaXRpb24ueCA9IC0xO1xuICAgICAgdGhpcy5kc3RQb3NpdGlvbi55ID0gLTE7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFpc0RzdCkge1xuICAgICAgdGhpcy5zcmNQb3NpdGlvbi54ID0gK3g7XG4gICAgICB0aGlzLnNyY1Bvc2l0aW9uLnkgPSAreTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kc3RQb3NpdGlvbi54ID0gK3g7XG4gICAgICB0aGlzLmRzdFBvc2l0aW9uLnkgPSAreTtcbiAgICB9XG4gIH1cbiAgXG4gICNvbkNlbGxDbGljayhlKSB7XG4gICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgICBpZiAodGhpcy51cGRhdGVDaGVzc0JvYXJkVGltZXIgIT09IC0xKSByZXR1cm47XG4gICAgY29uc3QgZGF0YXNldCA9ICh0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpID8gdGFyZ2V0LmRhdGFzZXRcbiAgICAgIDogdGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldDtcbiAgICBjb25zdCB4ID0gK2RhdGFzZXQueDtcbiAgICBjb25zdCB5ID0gK2RhdGFzZXQueTtcbiAgICBpZiAodGhpcy5zdGVwUGhhc2UgPT09IHBoYXNlcy5waGFzZUNvbXBsZXRlKSB7XG4gICAgICB0aGlzLiNjbGVhblVwQm9hcmQoKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuc3RlcFBoYXNlKSB7XG4gICAgICBjYXNlIHBoYXNlcy5waGFzZVJlc3Q6XG4gICAgICAgIHRoaXMuI3NldFBvc2l0aW9uKHgsIHkpO1xuICAgICAgICBVaUNvbnRyb2xsZXIuI3NldEtuaWdodCh4LCB5KTtcbiAgICAgICAgdGhpcy5idG5SYW5kb21LbmlnaHQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0ZXBQaGFzZSA9IHBoYXNlcy5waGFzZVNldERzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHBoYXNlcy5waGFzZVNldERzdDpcbiAgICAgICAgdGhpcy4jc2V0UG9zaXRpb24oeCwgeSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWxnb3JpdGhtID09PSBncmFwaEZpcnN0U2VhcmNoLmJmcylcbiAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJCb2FyZC5zZWFyY2hQYXRoQmZzKHRoaXMuc3JjUG9zaXRpb24sIHRoaXMuZHN0UG9zaXRpb24sIHBhdGhzKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuY29udHJvbGxlckJvYXJkLnNlYXJjaFBhdGhEZnModGhpcy5zcmNQb3NpdGlvbiwgdGhpcy5kc3RQb3NpdGlvbiwgcGF0aHMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNoZXNzQm9hcmRUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBwYXRoc1tpdGVyYXRvcl07XG4gICAgICAgICAgICBjb25zdCBrbmlnaHRTdGVwID0gcGF0aHNbaXRlcmF0b3IgKyAxXTtcbiAgICAgICAgICAgIFVpQ29udHJvbGxlci4jc2V0TW92ZVN0ZXAoc3RlcC54LCBzdGVwLnksIGl0ZXJhdG9yICsgMSk7XG4gICAgICAgICAgICBVaUNvbnRyb2xsZXIuI3NldEtuaWdodChrbmlnaHRTdGVwLngsIGtuaWdodFN0ZXAueSk7XG4gICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBwYXRocy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuI3N0b3BVcGRhdGVDaGVzcygpO1xuICAgICAgICAgICAgICB0aGlzLnN0ZXBQaGFzZSA9IHBoYXNlcy5waGFzZUNvbXBsZXRlO1xuICAgICAgICAgICAgICB0aGlzLmJ0blJhbmRvbUtuaWdodC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gICNkb0xvYWRNYWluQ29udGVudCgpIHtcbiAgICB0aGlzLiNkb0NyZWF0ZUhvbWUoKTtcbiAgfVxuXG4gIHN0YXRpYyAjZG9Mb2FkRm9vdGVyKCkge1xuICAgIGNvbnN0IGN1clllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcbiAgICBEb21NYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBmb290ZXIsIG51bGwsIG51bGwsIGBDb3B5cmlnaHQgwqkgJHtjdXJZZWFyfSBBbGVzc2FuZHJvIENlbG90dGlgKTtcbiAgICBEb21NYW5hZ2VyLmFkZE5vZGVDaGlsZChmb290ZXIsIEJ1dHRvbk1hbmFnZXIuY3JlYXRlSW1hZ2VMaW5rQnV0dG9uKCdodHRwczovL2dpdGh1Yi5jb20vY2VsOCcsICdnaXRodWIuc3ZnJykpO1xuICB9XG5cbiAgZG9Mb2FkVUkoKSB7XG4gICAgLy8gU2V0IG1haW4gcm9vdCB0aGVtZVxuICAgIHJvb3QuY2xhc3NOYW1lID0gc2V0dGluZ3MudGhlbWU7XG4gICAgdGhpcy4jZG9Mb2FkSGVhZGVyKCk7XG4gICAgdGhpcy4jZG9Mb2FkTWFpbkNvbnRlbnQoKTtcbiAgICBVaUNvbnRyb2xsZXIuI2RvTG9hZEZvb3RlcigpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJ1N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgVWlDb250cm9sbGVyIGZyb20gJ1ZpZXcvdWktY29udHJvbGxlcic7XG5cbmNvbnN0IHVpQ29udHJvbGxlciA9IG5ldyBVaUNvbnRyb2xsZXIoKTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgdWlDb250cm9sbGVyLmRvTG9hZFVJKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9