/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* @font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./Tolkien.ttf') format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n   */\r\nbody {\r\n    margin: 0;\r\n    padding: 0px;\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\n#container {\r\n    display: grid;\r\ngrid-template-columns: 1fr 6fr 6fr;\r\ngrid-template-rows: .5fr 2fr 3fr;\r\ngrid-template-areas: \r\n                    \"h h h\"\r\n                    \"s c c\"\r\n                    \"t c c\";\r\n}\r\n\r\n#formSpace {\r\n    grid-area: s;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding:.5rem;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 2rem;\r\n\r\n}\r\n\r\n#header {\r\n    grid-area: h;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: #f8fafc;\r\n    background-color: #475569;\r\n    padding: .5rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 1.8em;\r\n}\r\n\r\n.dragger {\r\n    width: 250px;\r\n    height: 30px;\r\n    background-color: #0f172a;\r\n}\r\n\r\n\r\n.button {\r\n    width: 14rem;\r\n    /* height: 75px; */\r\n    cursor: pointer;\r\n    background-color: #94a3b8;\r\n    color: #0f172a;\r\n    font-weight: 700;\r\n    font-size: 22px;\r\n    border-radius: 40px;\r\n    padding: 9px;\r\n    box-shadow: 0 2px #0f172a;\r\n\r\n}\r\n\r\n.button:hover {\r\n    background-color: #334155;\r\n    color: #f8fafc;\r\n}\r\n\r\n\r\n.button:active {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    transform: translateY(4px);\r\n}\r\n/* \r\n.project {\r\n    /* display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    padding: .5rem;\r\n    gap: 20px */\r\n\r\n\r\n#projecttitleBar {\r\n    grid-area: t;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: .5rem;\r\n    gap: 4rem;\r\n    align-items: center;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n}\r\n\r\n.titleField {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    border-bottom: 1px solid #0f172a;\r\n    padding-left: 3em;\r\n    padding-right: 3em;\r\n    padding-bottom: 0.3em;\r\n}\r\n\r\n.active {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #f3f5f9;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0) 1px 3px 10px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n \r\n}\r\n\r\n.inactive {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #edf1f5;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.list {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n\r\n#display {\r\n    grid-area: c;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    background-color: #f8fafc;\r\n    color: #0f172a;\r\n    padding: 10px;\r\n    gap: 20px;\r\n}\r\n.card {\r\n    border: 2px solid black;\r\n    background-color: #cbd5e1;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 5px;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 250px;\r\n    height: 200px;\r\n}\r\n\r\n.cardBody {\r\n    border: 2px solid red;\r\n    padding: 20px;\r\n    width: 230px;\r\n    height: 180px;\r\n}\r\n\r\n.priorityColor {\r\n    width: 150px;\r\n    height: 15px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#High {\r\n    background-color: red;\r\n}\r\n\r\n#Medium {\r\n    background-color: yellow;\r\n}\r\n\r\n#Low {\r\n    background-color: green;\r\n}\r\n\r\n\r\n#content {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.label {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    width: 20rem;\r\n    color: #f8fafc;\r\n    padding: 15px;\r\n    gap: 5px;\r\n   background-color: #475569;\r\n    /* background-size: 100% 100%;\r\n    background-position: center center; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  \r\n    border-radius: 10px;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\r\n}\r\n\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item, .listItem {\r\n    /* font-family: 'MyFont'; */\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    width: 15rem;\r\n    color: black;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n   border: 4px solid #1e293b;\r\n   border-radius: 10px;\r\n   background-color: #f8fafc;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border: 4px solid #0f172a\r\n  }\r\n\r\n#description {\r\n    height: 5rem;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n/* @font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./Tolkien.ttf') format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n   */\r\nbody {\r\n    margin: 0;\r\n    padding: 0px;\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\n#container {\r\n    display: grid;\r\ngrid-template-columns: 1fr 6fr 6fr;\r\ngrid-template-rows: .5fr 2fr 3fr;\r\ngrid-template-areas: \r\n                    \"h h h\"\r\n                    \"s c c\"\r\n                    \"t c c\";\r\n}\r\n\r\n#formSpace {\r\n    grid-area: s;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding:.5rem;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 2rem;\r\n\r\n}\r\n\r\n#header {\r\n    grid-area: h;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: #f8fafc;\r\n    background-color: #475569;\r\n    padding: .5rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 1.8em;\r\n}\r\n\r\n.dragger {\r\n    width: 250px;\r\n    height: 30px;\r\n    background-color: #0f172a;\r\n}\r\n\r\n\r\n.button {\r\n    width: 14rem;\r\n    /* height: 75px; */\r\n    cursor: pointer;\r\n    background-color: #94a3b8;\r\n    color: #0f172a;\r\n    font-weight: 700;\r\n    font-size: 22px;\r\n    border-radius: 40px;\r\n    padding: 9px;\r\n    box-shadow: 0 2px #0f172a;\r\n\r\n}\r\n\r\n.button:hover {\r\n    background-color: #334155;\r\n    color: #f8fafc;\r\n}\r\n\r\n\r\n.button:active {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    transform: translateY(4px);\r\n}\r\n/* \r\n.project {\r\n    /* display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    padding: .5rem;\r\n    gap: 20px */\r\n\r\n\r\n#projecttitleBar {\r\n    grid-area: t;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: .5rem;\r\n    gap: 4rem;\r\n    align-items: center;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n}\r\n\r\n.titleField {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    border-bottom: 1px solid #0f172a;\r\n    padding-left: 3em;\r\n    padding-right: 3em;\r\n    padding-bottom: 0.3em;\r\n}\r\n\r\n.active {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #f3f5f9;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0) 1px 3px 10px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n \r\n}\r\n\r\n.inactive {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #edf1f5;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.list {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n\r\n#display {\r\n    grid-area: c;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    background-color: #f8fafc;\r\n    color: #0f172a;\r\n    padding: 10px;\r\n    gap: 20px;\r\n}\r\n.card {\r\n    border: 2px solid black;\r\n    background-color: #cbd5e1;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 5px;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 250px;\r\n    height: 200px;\r\n}\r\n\r\n.cardBody {\r\n    border: 2px solid red;\r\n    padding: 20px;\r\n    width: 230px;\r\n    height: 180px;\r\n}\r\n\r\n.priorityColor {\r\n    width: 150px;\r\n    height: 15px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#High {\r\n    background-color: red;\r\n}\r\n\r\n#Medium {\r\n    background-color: yellow;\r\n}\r\n\r\n#Low {\r\n    background-color: green;\r\n}\r\n\r\n\r\n#content {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.label {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    width: 20rem;\r\n    color: #f8fafc;\r\n    padding: 15px;\r\n    gap: 5px;\r\n   background-color: #475569;\r\n    /* background-size: 100% 100%;\r\n    background-position: center center; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  \r\n    border-radius: 10px;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\r\n}\r\n\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item, .listItem {\r\n    /* font-family: 'MyFont'; */\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    width: 15rem;\r\n    color: black;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n   border: 4px solid #1e293b;\r\n   border-radius: 10px;\r\n   background-color: #f8fafc;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border: 4px solid #0f172a\r\n  }\r\n\r\n#description {\r\n    height: 5rem;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



function createForm() {
let header = document.getElementById('header');
const content = document.createElement('div');
let addButton = document.getElementById("addTodo");
addButton.innerText = 'Hide';
addButton.removeEventListener('click', createForm);
addButton.addEventListener('click', hideForm);
content.style.display = 'block flex';
content.setAttribute('id', 'content');
header.appendChild(content);

 let titleLabel = document.createElement('div');
 titleLabel.setAttribute('class', 'label')
 titleLabel.innerText = 'Item Title'
 content.appendChild(titleLabel);
 let title = document.createElement('input');
 title.setAttribute('type', 'text')
 title.setAttribute('id', 'title');
 title.setAttribute('class', 'item');
 titleLabel.appendChild(title);

 let descriptionLabel = document.createElement('div');
 descriptionLabel.setAttribute('class', 'label')
 descriptionLabel.innerText = 'Item Description'
 content.appendChild(descriptionLabel);
 let description = document.createElement('input');
 description.setAttribute('type', 'text')
 description.setAttribute('id', 'description');
 description.setAttribute('class', 'item');
 descriptionLabel.appendChild(description);

 let dueLabel = document.createElement('div');
 dueLabel.setAttribute('class', 'label')
 dueLabel.innerText = 'Due Date'
 content.appendChild(dueLabel);
 let dueDate = document.createElement('input');
 dueDate.setAttribute('type', 'date')
 dueDate.setAttribute('id', 'dueDate');
 dueDate.setAttribute('class', 'item');
 dueLabel.appendChild(dueDate);

 let wrapper = document.createElement('div');
 wrapper.setAttribute('id', 'wrapper');
 wrapper.setAttribute('class', 'label');
 wrapper.innerText = 'Set Priority for Item'
 content.appendChild(wrapper);

 let options = {
    "High": false,
    "Medium": false,
    "Low": false,
 }


for (let key in options) {
    let label = document.createElement("label");
    label.innerText = key;
    let input = document.createElement("input");
    input.type = "radio";
    input.name = 'priority';
    input.value = key;
    label.appendChild(input);
    wrapper.appendChild(label);
}

let submit = document.createElement('input');
submit.setAttribute('type', 'submit')
submit.setAttribute('id', 'submit');
submit.setAttribute('class', 'button');
content.appendChild(submit);
submit.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.addtoDo);
}


function hideForm() {
    let content = document.getElementById('content');
    content.remove();
    let addButton = document.getElementById("addTodo");
    addButton.removeEventListener('click', hideForm);
    addButton.innerText = 'Add new Item';
    addButton.addEventListener('click', createForm);
}

// function createItem(string, id) {
//     let title = string;
//     let item = document.createElement('div');
//     item.setAttribute('id', id);
//     item.setAttribute('class', 'item');
//     item.innerText = title;
//     return item;
//  }
 
//  function createTitle(string) {
//     let titleText = string;
//     let title = document.createElement('div');
//     title.setAttribute('class', 'title');
//     title.innerText = titleText;
//     return title;
//  }
 
//  function createDescription(string) {
//     let title = document.createElement('div');
//     title.setAttribute('class', 'text');
//     title.innerText = string;
//     return title;
//  }
 
//  function createImage(string, id){
//     let newImage = new Image();
//     newImage.src = string;
//     newImage.id = id;
//     newImage.className = 'image';
//     return newImage;
//  }

// function createContact () {
//     let content = document.getElementById('content');

//     let contactTitle = createTitle('Contact Us');
//     content.appendChild(contactTitle);

//     let barlimanCard = createItem('Barliman Butterbur', 'barliman')
//     content.appendChild(barlimanCard);
//     let barlimanImage = createImage(barliman, 'barliman');
//     barlimanCard.appendChild(barlimanImage);
//     let barlimanText = createDescription('Innkeep - BBbur@breeland.net');
//     barlimanCard.appendChild(barlimanText);

//     let nobCard = createItem('Nob', 'nob')
//     content.appendChild(nobCard);
//     let nobImage = createImage(nob, 'nob');
//     nobCard.appendChild(nobImage);
//     let nobText = createDescription('Cook - slowcoach1@breeland.net');
//     nobCard.appendChild(nobText);

// } 

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addtoDo": () => (/* binding */ addtoDo)
/* harmony export */ });
/* harmony import */ var _listItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listItem.js */ "./src/listItem.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ "./src/form.js");


// import {createMenu} from './menu.js';
// import {createContact} from './contact.js';

// import prancingPony2 from './prancingPony.png';



//ADD DELETE ITEM BUTTON
//ADD MARK COMPLETE BUTTON
//CSS
//ADD PRIORITY/NOTES OTHER FIELDS
//CHANGE VALUES ON  TO DOS
//CLEAN UP/COMMENT


let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

let toDoArr = [];

class listItem {
    constructor(number, title, description, dueDate, priority, project) {
     this.number = number
     this.title = title;
     this.description = description;
     this.dueDate = dueDate;
     this.priority = priority;
     this.project = project;
    }
     getTitle() {
         return this.title;
     }
     getNumber() {
        return this.number;
    }
 }

function createProjectObject() {
    if (localStorage.length != 0) {
        let projectObj = JSON.parse( localStorage.getItem( `projects` ));
        console.log('hello');
        //console.log(projectObj);
    
        for (const key of Object.entries(projectObj)) {
           if (key[0] != "Default"){

            let projectTitle = document.createElement('div')
            let titleBar = document.getElementById('projecttitleBar');
            projectTitle.setAttribute('id', key[0]);
            projectTitle.setAttribute('class', 'inactive');
            projectTitle.innerText = key[0];
            titleBar.appendChild(projectTitle);
            console.log(key[0]);
            projectTitle.addEventListener('click', function(){switchProject(projectTitle)});
            let defaultProject = document.getElementById('Default');
            defaultProject.addEventListener('click', function(){switchProject(defaultProject)});
        }}
        //if (projectObj.length)
        return projectObj
       
    } else {
    let projectObj = {
        'Default': toDoArr
    }
    console.log('empty')
    console.log(projectObj)
    return projectObj
}}

function listItems() {
    let allListItems = document.querySelectorAll('.list');
    for (let k = 0; k < allListItems.length; k++) {
        allListItems[k].remove()
    }
Object.entries(projectObj).forEach(([key, value]) =>  {
    for (let i = 0; i < value.length; i++) {
        let item = value[i];
        let project = item.project;
        let projectTitle = document.getElementById(project);
        let listItem = document.createElement('div');
        listItem.innerText = item.title;
        listItem.setAttribute('class', 'list');
        projectTitle.appendChild(listItem);
    }})
}


function createCounter() {
    if (localStorage.length != 0) {
        let counter = JSON.parse( localStorage.getItem( `counter` ));
        console.log('counter found')
        console.log(counter);
        return counter
    } else {
        let counter = 0;
        return counter
    }
}

function createHeading() {
let heading = document.createElement('div');
heading.setAttribute('id', 'header');
let welcome = document.createElement('h2');
welcome.setAttribute('id', 'welcome')
welcome.innerText = 'Welcome to your Projects'
container.appendChild(heading);
heading.appendChild(welcome);
let formSpace = document.createElement('div');
formSpace.setAttribute('id', 'formSpace');
container.appendChild(formSpace);

let newProjectButton = document.createElement('button');
newProjectButton.setAttribute('id', 'newProjectButton');
newProjectButton.setAttribute('class', 'button');
newProjectButton.innerText = 'Create New Project';
newProjectButton.addEventListener('click', createNewProject);
formSpace.appendChild(newProjectButton);

let addButton = document.createElement('button');
addButton.setAttribute('id', 'addTodo');
addButton.setAttribute('class', 'button');
addButton.innerText = 'Add new Item';
formSpace.appendChild(addButton);
addButton.addEventListener('click', _form_js__WEBPACK_IMPORTED_MODULE_2__.createForm);

let saveButton = document.createElement('button');
saveButton.setAttribute('id', 'saveButton');
saveButton.setAttribute('class', 'button');
saveButton.innerText = 'Save Work';
formSpace.appendChild(saveButton);
saveButton.addEventListener('click', saveWork);

let deleteButton = document.createElement('button');
deleteButton.setAttribute('id', 'deleteButton');
deleteButton.setAttribute('class', 'button');
deleteButton.innerText = 'Delete Work';
formSpace.appendChild(deleteButton);
deleteButton.addEventListener('click', clearOut);
// const prancingPony = new Image();
// prancingPony.src = prancingPony2;
// prancingPony.id="ponyLogo";
// heading.appendChild(prancingPony);
}
createHeading();

function createDefaultProject(){

let header = document.getElementById('header')
const defaultProject = document.createElement('div');
defaultProject.setAttribute('id', 'projectSpace');
defaultProject.setAttribute('class', 'project');
header.appendChild(defaultProject);

let projecttitleBar = document.createElement('div');
projecttitleBar.setAttribute('id', 'projecttitleBar')
let projects = document.createElement('div');
projects.innerText = 'Projects'
projects.setAttribute('class', 'titleField')
projecttitleBar.appendChild(projects);
let projectTitle = document.createElement('div');
projectTitle.innerText = 'Default Project'
projectTitle.setAttribute('class', 'active');
projectTitle.setAttribute('id', 'Default');
container.appendChild(projecttitleBar);
projecttitleBar.appendChild(projectTitle);

let cardSpace = document.createElement('div');
cardSpace.setAttribute('id', 'display');
container.appendChild(cardSpace);


}

createDefaultProject();
let counter = createCounter();
const projectObj = createProjectObject();
addCards();

function createNewProject(){

let formSpace = document.getElementById('formSpace');
let newProjectButton = document.getElementById('newProjectButton');
newProjectButton.removeEventListener('click', createNewProject);
newProjectButton.innerText = 'Hide'
newProjectButton.addEventListener('click', hideProjectForm);
let newProjectForm = document.createElement('div');
newProjectForm.setAttribute('id', 'newProjectForm');
newProjectForm.setAttribute('class', 'form');

let titleLabel = document.createElement('div');
titleLabel.setAttribute('class', 'label')
titleLabel.innerText = 'Project Title'
newProjectForm.appendChild(titleLabel);
let title = document.createElement('input');
title.setAttribute('type', 'text')
title.setAttribute('id', 'projectTitle');
title.setAttribute('class', 'item');
titleLabel.appendChild(title);

let submit = document.createElement('input');
submit.setAttribute('type', 'submit')
submit.setAttribute('id', 'projectSubmit');
submit.setAttribute('class', 'button');
newProjectForm.appendChild(submit);
formSpace.appendChild(newProjectForm)
submit.addEventListener('click', addnewProject);
}

function currentProject(){
    let currentProject = document.querySelector('.active');
    return currentProject
}

function switchProject(elem){
    let currentProject = document.querySelector('.active');
    currentProject.removeAttribute('class', 'active')
    currentProject.setAttribute('class', 'inactive')
    elem.removeAttribute('class', 'inactive')
    elem.setAttribute('class', 'active')
    addCards();
}

function addnewProject(){
    let titleBar = document.getElementById('projecttitleBar');
    let defaultProject = currentProject();
    //console.log(defaultProject);
    let newProject = document.createElement('div');
    newProject.setAttribute('class', 'active');
    defaultProject.removeAttribute('class', 'active')
    defaultProject.setAttribute('class', 'inactive')
    let newProjectTitle = document.getElementById('projectTitle').value;
    let newArr = []
   projectObj[newProjectTitle] = newArr
   //console.log(projectObj);
    newProject.setAttribute('id', newProjectTitle);
    newProject.innerText = newProjectTitle;
    titleBar.appendChild(newProject);
    defaultProject.addEventListener('click', function(){switchProject(defaultProject)})
    newProject.addEventListener('click', function(){switchProject(newProject)})
   // newProject.addEventListener('click', currentProject(newProjectTitle));
    //newProject.onclick = currentProject();
    hideProjectForm();
    //return newprojectObj;
}

function hideProjectForm() {
    let newProjectForm = document.getElementById('newProjectForm');
    newProjectForm.remove();
    let newProjectButton = document.getElementById("newProjectButton");
    newProjectButton.removeEventListener('click', hideProjectForm);
    newProjectButton.innerText = 'Create New Project';
    newProjectButton.addEventListener('click', createNewProject);
}




function addCards() {
    //console.log(projectObj);
    listItems();
    let display = document.getElementById('display');
    let project = currentProject();
    let title = project.attributes['id'].value;
    let currentProjectArray = projectObj[title];
    let allCards = document.querySelectorAll('.card');
    if (allCards.length != 0) {
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].remove();
        }
    }
    for (let i = 0; i < currentProjectArray.length; i++) {
        if (currentProjectArray[i].project == title) {
        displayCard(currentProjectArray[i]);
    }}

    function displayCard(arr) {
        let card = document.createElement('div');
           card.setAttribute('class', 'card');
           card.setAttribute('id', `toDo_${arr.number}`);
           display.appendChild(card);
           let cardTitle = document.createElement('div');
           cardTitle.setAttribute('class', 'cardBar');
           card.appendChild(cardTitle);
           let cardBody = document.createElement('div');
           cardBody.setAttribute('class', 'cardBody');
           card.appendChild(cardBody);
           let priorityColor = document.createElement('div');
           priorityColor.setAttribute('class', 'priorityColor');
           priorityColor.setAttribute('id', arr.priority);
            cardTitle.appendChild(priorityColor);

            let completeButton = document.createElement('button');
            completeButton.setAttribute('id', `complete_${arr.number}`);
            completeButton.setAttribute('class', 'cardButton');
            completeButton.innerText = 'Complete';
            cardTitle.appendChild(completeButton);

            let editButton = document.createElement('button');
            editButton.setAttribute('id', `edit_${arr.number}`);
            editButton.setAttribute('class', 'cardButton');
            editButton.innerText = 'Modify';
            cardTitle.appendChild(editButton);

            let deleteButton = document.createElement('button');
            deleteButton.setAttribute('id', `delete_${arr.number}`);
            deleteButton.setAttribute('class', 'cardButton');
            deleteButton.innerText = 'Delete';
            cardTitle.appendChild(deleteButton);

            let expandButton = document.createElement('button');
            expandButton.setAttribute('id', `expand_${arr.number}`);
            expandButton.setAttribute('class', 'cardButton');
            expandButton.innerText = 'Expand';
            cardTitle.appendChild(expandButton);

           cardBody.appendChild(newItem(arr.title));
           cardBody.appendChild(newItem(arr.dueDate));
           let details = document.createElement('div');
            details.setAttribute('id', 'details');
            details.innerText = arr.description;

            completeButton.onclick = () => {
                card.setAttribute('class', 'complete');
                completeButton.innerText = 'Restart'
                completeButton.onclick = () => {
                    card.setAttribute('class', 'card')
                    completeButton.innerText = 'Complete'
                    return
                }
            }

            editButton.onclick = () => {
                arr.project = "deleted";
                cardTitle.removeChild(editButton);
                (0,_form_js__WEBPACK_IMPORTED_MODULE_2__.createForm)();
            }

            deleteButton.onclick = () => {
                let text = confirm("Are you sure you want to delete this To-Do?")
                if (text == true) {
                    arr.project = "deleted";
                    addCards();
                    console.log(arr.project)
                } else {
                    return
                }}

           expandButton.onclick = () => {
            //console.log(details);
            cardBody.appendChild(details);
            cardTitle.appendChild(collapseButton);
            cardTitle.removeChild(expandButton);

            collapseButton.onclick = () => {
                cardBody.removeChild(details);
                cardTitle.removeChild(collapseButton);
                cardTitle.appendChild(expandButton);
            };
       }
       let collapseButton = document.createElement('button');
           collapseButton.setAttribute('id', `collapse_${arr.number}`);
           collapseButton.setAttribute('class', 'cardButton');
           collapseButton.innerText = 'Hide';
          cardDrag(card);
    }
    
    let allInactive = document.querySelectorAll('.inactive')
    //console.log(allInactive);
    for (let k = 0; k < allInactive.length; k++) {
        //console.log(allInactive[k]);
        let projectTitle = allInactive[k].attributes['id'].value;
        let projectArray = projectObj[projectTitle];
       // console.log(project);
        for (let r = 0; r < projectArray.length; r++) {
            if (projectArray[r].project == project.attributes['id'].value) {
               // console.log(projectArray[r]);
                displayCard(projectArray[r]);
            }}}}

// Adds To Do items from Form into List Item Objects, then adds them to appropriate Project Array after form Submit Button is clicked
function addtoDo() {
    let project = currentProject();
    let projectName = project.attributes['id'].value;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let radioButtons = document.querySelectorAll('input[name="priority"]');
    let selectedSize;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }
    let newItem = new listItem(counter, title, description, dueDate, selectedSize, projectName);
    projectObj[projectName].push(newItem);
    removeForm();
    counter++;
    addCards();
}

function saveWork() {
    localStorage.setItem( `projects`, JSON.stringify(projectObj) );
    console.log( JSON.parse( localStorage.getItem( `projects` ) ) );
    localStorage.setItem( `counter`, JSON.stringify(counter) );
}
   
function removeForm() {
    let formSpace = document.getElementById('formSpace')
    let content = document.getElementById('content');
    //content.style.display = 'none';
    content.remove();
    let addButton = document.getElementById("addTodo");
    addButton.remove();
    addButton = document.createElement('button')
    addButton.setAttribute('id', 'addTodo');
    addButton.setAttribute('class', 'button');
    addButton.innerText = 'Add new Item';
    formSpace.appendChild(addButton);
    addButton.addEventListener('click', _form_js__WEBPACK_IMPORTED_MODULE_2__.createForm);
    //currentProject.removeChild(content);
}

function cardDrag(card) {

//let card = document.querySelector('.card');
//let cardID = document.querySelector('.card')
//let currentProject = currentProject();
card.onmousedown = function(event) {
    let buttons = document.querySelectorAll('.cardButton')
    let elementBelow = document.elementFromPoint(event.clientX, event.clientY);
    for (let i = 0; i < buttons.length; i++) {
    if (elementBelow == buttons[i]) {
        return
    }}



    let shiftX = event.clientX - card.getBoundingClientRect().left;
    let shiftY = event.clientY - card.getBoundingClientRect().top;

    card.style.position = 'absolute';
    card.style.zIndex = 1000;
    document.body.append(card);

    moveCard(event.pageX, event.pageY);

//moves Card at the X and Y coordinates of the page, taking account for the shifts initially when clicking on card
    function moveCard(pageX, pageY) {
        card.style.left = pageX - shiftX + 'px';
        card.style.top = pageY - shiftY + 'px';
      }

    let currentDroppable = null;

    function onMouseMove(event) {
        moveCard(event.pageX, event.pageY);
    

        card.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        card.hidden = false;
        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest('.inactive');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        card.onmouseup = function() {
            
            document.removeEventListener('mousemove', onMouseMove);
            currentDroppable.style.background = 'pink';
            let newProjectName = currentDroppable.attributes['id'].value;
            
           
            let cardID = card.attributes['id'].value;
            let numb = cardID.replace(/[^0-9]/g, ''); 
            let newNum = parseInt(numb,10); 
    
            
            Object.entries(projectObj).forEach(([key, value]) =>  {
                //console.log(value);
                //console.log(value[number]);
                for (let i = 0; i < value.length; i++) {
                    if (value[i].number == newNum) {
                    let item = value[i];
                    item.project = newProjectName
                }
            }})
                
    
            card.remove();
            addCards();


        }


      //  enterDroppable(currentDroppable);
        
    }}}


    document.addEventListener('mousemove', onMouseMove);

    card.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        card.remove();
        addCards();
      };
    };

// function enterDroppable(elem) {
    
//     elem.style.background = 'pink';
//     }

  function leaveDroppable(elem) {
    //console.log(elem);
   //document.removeEventListener('mousemove', onMouseMove);
    elem.style.background = '';
  }

card.ondragstart = function() {
    return false;};

}


function newItem(string) {
    let item = document.createElement('div');
    item.setAttribute('class', 'listItem');
    item.innerText = string;
    return item;
    }
    

console.log(localStorage);



function clearOut() {
    localStorage.clear();
    console.log(localStorage);
}




/***/ }),

/***/ "./src/listItem.js":
/*!*************************!*\
  !*** ./src/listItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createListItem": () => (/* binding */ createListItem)
/* harmony export */ });




function createListItem() {
    
    // let item = new listItem('title', 'this is', '11/2', 'high')
    // console.log(item);
    // return item

    // let title = createTitle('The Prancing Pony')
    // content.appendChild(title);
    // title.appendChild(createHeading());

    // let footer = createTitle('By JAUGS 2022');
    // footer.setAttribute('id', 'footer');
    // content.appendChild(footer);
    }




// function createHeading() {
//         let title = "- by Barliman Butterbur";
//         let heading = document.createElement('div');
//         heading.setAttribute('id', 'heading');
//         heading.setAttribute('class', 'card');
//         heading.innerText = title;
//         return heading;
//     }

// function createTitle(string) {
//         let titleText = string;
//         let title = document.createElement('div');
//         title.setAttribute('class', 'title');
//         title.innerText = titleText;
//         return title;
// }

// function createText() {
//     let infoText = "The Prancing Pony has been a Breeland staple for over 300 years. Come and stay in our most comfortable rooms (including Hobbit-Sized rooms) while enjoing the best food west of the Misty Mountains! - Barliman";
//     let info1 = document.createElement('div');
//     info1.setAttribute('id', 'text');
//     info1.setAttribute('class', 'card');
//     info1.innerText = infoText;
//     return info1;
// }

// function createHours() {
//         let list = document.createElement('ul');
//         list.setAttribute('id', 'hourList');
//         list.setAttribute('class', 'card');
//         let data = ["Breakfast: served at Sunrise daily", "Second-Breakfast: served two hours after Sunrise", "Luncheon: served at high noon", "Supper: served at Sunset", "Stables available upon request"]
  
//         data.forEach((item) => {
//             let li = document.createElement("li");
//             li.setAttribute('class', 'listItem')
//             li.innerText = item;
//             list.appendChild(li);
//       });
//     return list;
// }

// function createLocation() {
//     let infoText = "Find us just past the West-Gate, in Bree, west of Chet-wood, north from the Greenway"
//     let location = document.createElement('div');
//     location.setAttribute('id', 'location');
//     location.setAttribute('class', 'card');
//     location.innerText = infoText;
//     return location;
// }



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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2REFBNkQsOEJBQThCLHVEQUF1RCx5QkFBeUIsMkJBQTJCLE9BQU8sbUJBQW1CLGtCQUFrQixxQkFBcUIsc0RBQXNELG9CQUFvQixzQkFBc0IsdUNBQXVDLHFDQUFxQyw2SEFBNkgsS0FBSyxvQkFBb0IscUJBQXFCLHNCQUFzQiwrQkFBK0Isa0NBQWtDLHVCQUF1QixvQ0FBb0MsNEJBQTRCLGtCQUFrQixzQkFBc0IsNEJBQTRCLDZCQUE2QixTQUFTLGlCQUFpQixxQkFBcUIsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLGtCQUFrQix1QkFBdUIsa0NBQWtDLHVCQUF1QixLQUFLLFlBQVkseUJBQXlCLEtBQUssa0JBQWtCLHFCQUFxQixxQkFBcUIsa0NBQWtDLEtBQUsscUJBQXFCLHFCQUFxQix5QkFBeUIsMEJBQTBCLGtDQUFrQyx1QkFBdUIseUJBQXlCLHdCQUF3Qiw0QkFBNEIscUJBQXFCLGtDQUFrQyxTQUFTLHVCQUF1QixrQ0FBa0MsdUJBQXVCLEtBQUssNEJBQTRCLGtDQUFrQyx1QkFBdUIsbUNBQW1DLEtBQUsscUJBQXFCLHlCQUF5Qix1Q0FBdUMsNENBQTRDLGtDQUFrQyx1QkFBdUIsdUJBQXVCLGtEQUFrRCxxQkFBcUIsc0JBQXNCLCtCQUErQixnQ0FBZ0MsdUJBQXVCLGtCQUFrQiw0QkFBNEIsa0NBQWtDLHVCQUF1QixLQUFLLHFCQUFxQix3QkFBd0IseUJBQXlCLGtDQUFrQyx1QkFBdUIseUNBQXlDLDBCQUEwQiwyQkFBMkIsOEJBQThCLEtBQUssaUJBQWlCLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLGdDQUFnQyxxQkFBcUIsdUJBQXVCLHdCQUF3Qix5QkFBeUIsa0NBQWtDLHNCQUFzQiwrQ0FBK0MsMkJBQTJCLDJCQUEyQixxQkFBcUIsVUFBVSxtQkFBbUIsc0JBQXNCLCtCQUErQixnQ0FBZ0MsZ0NBQWdDLHFCQUFxQix1QkFBdUIsd0JBQXdCLHlCQUF5QixrQ0FBa0Msc0JBQXNCLHFEQUFxRCwyQkFBMkIsMkJBQTJCLHFCQUFxQixLQUFLLGVBQWUsd0JBQXdCLHlCQUF5QiwwQkFBMEIsMkJBQTJCLEtBQUssc0JBQXNCLHFCQUFxQixzQkFBc0IsK0NBQStDLGtDQUFrQyx1QkFBdUIsc0JBQXNCLGtCQUFrQixLQUFLLFdBQVcsZ0NBQWdDLGtDQUFrQyx3QkFBd0IseUJBQXlCLHFCQUFxQiw0QkFBNEIscURBQXFELHFCQUFxQixzQkFBc0IsS0FBSyxtQkFBbUIsOEJBQThCLHNCQUFzQixxQkFBcUIsc0JBQXNCLEtBQUssd0JBQXdCLHFCQUFxQixxQkFBcUIsNEJBQTRCLEtBQUssZUFBZSw4QkFBOEIsS0FBSyxpQkFBaUIsaUNBQWlDLEtBQUssY0FBYyxnQ0FBZ0MsS0FBSyxzQkFBc0IscUJBQXFCLGtDQUFrQyx1QkFBdUIsd0JBQXdCLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixrQkFBa0Isc0JBQXNCLHlCQUF5Qiw0QkFBNEIsS0FBSyxlQUFlLHFCQUFxQixrQ0FBa0MsdUJBQXVCLHdCQUF3QixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsa0JBQWtCLHNCQUFzQix5QkFBeUIsNEJBQTRCLEtBQUssZ0JBQWdCLHdCQUF3Qix5QkFBeUIscUJBQXFCLHVCQUF1QixzQkFBc0IsaUJBQWlCLGlDQUFpQyxzQ0FBc0MsNENBQTRDLHdCQUF3QiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixrQ0FBa0MsOEhBQThILEtBQUssbUJBQW1CLDJCQUEyQixLQUFLLDBCQUEwQixrQ0FBa0MsMEJBQTBCLHlCQUF5QixxQkFBcUIscUJBQXFCLHNCQUFzQixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsS0FBSywwQkFBMEIsaUNBQWlDLDJCQUEyQixpQ0FBaUMsS0FBSyxnQ0FBZ0Msd0NBQXdDLHNCQUFzQixxQkFBcUIsS0FBSyxnQkFBZ0IscUJBQXFCLEtBQUssT0FBTyw0RUFBNEUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLFFBQVEsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFV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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw4Q0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFJQTtBQUM2QztBQUM3QyxXQUFXLFlBQVk7QUFDdkIsV0FBVyxlQUFlO0FBQ0w7QUFDckI7QUFDdUM7QUFDdEI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELDRCQUE0QjtBQUMxRjtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2aUJ1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vc3JjL2xpc3RJdGVtLmpzIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi8qIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgIHNyYzogdXJsKCcuL1RvbGtpZW4udHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB9XFxyXFxuICAgKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciA2ZnI7XFxyXFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDJmciAzZnI7XFxyXFxuZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaCBoIGhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwicyBjIGNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwidCBjIGNcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybVNwYWNlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzFlMjkzYjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6LjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnZXIge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxNHJlbTtcXHJcXG4gICAgLyogaGVpZ2h0OiA3NXB4OyAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGEzYjg7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggIzBmMTcyYTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG59XFxyXFxuLyogXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGdhcDogMjBweCAqL1xcclxcblxcclxcblxcclxcbiNwcm9qZWN0dGl0bGVCYXIge1xcclxcbiAgICBncmlkLWFyZWE6IHQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzFlMjkzYjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlRmllbGQge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y1Zjk7XFxyXFxuICAgIGNvbG9yOiMwZjE3MmE7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCkgMXB4IDNweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZjU7XFxyXFxuICAgIGNvbG9yOiMwZjE3MmE7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zMykgLTJweCAycHggNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2Rpc3BsYXkge1xcclxcbiAgICBncmlkLWFyZWE6IGM7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCb2R5IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjMwcHg7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eUNvbG9yIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNIaWdoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jTWVkaXVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4jTG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDM1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAzNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAyMHB4IDVweCAxMHB4LCByZ2IoMCAwIDAgLyAzMCUpIDVweCAxMHB4IDBweCAtMTBweCwgcmdiKDAgMCAwIC8gMjAlKSA2cHggLTVweCAxOHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0sIC5saXN0SXRlbSB7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnTXlGb250JzsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB3aWR0aDogMTVyZW07XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgIGJvcmRlcjogNHB4IHNvbGlkICMxZTI5M2I7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzBmMTcyYVxcclxcbiAgfVxcclxcblxcclxcbiNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTs7Ozs7O0lBTUk7QUFDSjtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakIsa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUNoQzs7OzJCQUcyQjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCOztBQUU3Qjs7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Q0Y7O0FBRUY7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4vKiBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9Ub2xraWVuLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgfVxcclxcbiAgICovXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgNmZyO1xcclxcbmdyaWQtdGVtcGxhdGUtcm93czogLjVmciAyZnIgM2ZyO1xcclxcbmdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxcImggaCBoXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxcInMgYyBjXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxcInQgYyBjXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm1TcGFjZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogcztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOi41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICB3aWR0aDogMTRyZW07XFxyXFxuICAgIC8qIGhlaWdodDogNzVweDsgKi9cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhM2I4O1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcclxcbiAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4ICMwZjE3MmE7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxyXFxufVxcclxcbi8qIFxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgLyogZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgY29sb3I6ICMwZjE3MmE7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBnYXA6IDIwcHggKi9cXHJcXG5cXHJcXG5cXHJcXG4jcHJvamVjdHRpdGxlQmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGdhcDogNHJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgY29sb3I6ICMxZTI5M2I7XFxyXFxufVxcclxcblxcclxcbi50aXRsZUZpZWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwZjE3MmE7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM2VtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAuN3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWY5O1xcclxcbiAgICBjb2xvcjojMGYxNzJhO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDApIDFweCAzcHggMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbi5pbmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAuN3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWY1O1xcclxcbiAgICBjb2xvcjojMGYxNzJhO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzMpIC0ycHggMnB4IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNkaXNwbGF5IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgY29sb3I6ICMwZjE3MmE7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuLmNhcmQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQm9keSB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHlDb2xvciB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jSGlnaCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI01lZGl1bSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuI0xvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAzNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICB3aWR0aDogMzVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMjBweCA1cHggMTBweCwgcmdiKDAgMCAwIC8gMzAlKSA1cHggMTBweCAwcHggLTEwcHgsIHJnYigwIDAgMCAvIDIwJSkgNnB4IC01cHggMThweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLCAubGlzdEl0ZW0ge1xcclxcbiAgICAvKiBmb250LWZhbWlseTogJ015Rm9udCc7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICBib3JkZXI6IDRweCBzb2xpZCAjMWUyOTNiO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwZjE3MmFcXHJcXG4gIH1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb24ge1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQge2NyZWF0ZUZvcm19O1xyXG5pbXBvcnQgeyBhZGR0b0RvIH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xyXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XHJcbmFkZEJ1dHRvbi5pbm5lclRleHQgPSAnSGlkZSc7XHJcbmFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUZvcm0pO1xyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRm9ybSk7XHJcbmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayBmbGV4JztcclxuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcclxuaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwnKVxyXG4gdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnSXRlbSBUaXRsZSdcclxuIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG4gdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xyXG4gdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtJyk7XHJcbiB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiBsZXQgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xhYmVsJylcclxuIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ0l0ZW0gRGVzY3JpcHRpb24nXHJcbiBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxuIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcclxuIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbScpO1xyXG4gZGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gbGV0IGR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiBkdWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xhYmVsJylcclxuIGR1ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgRGF0ZSdcclxuIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHVlTGFiZWwpO1xyXG4gbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXHJcbiBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xyXG4gZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxuIGR1ZUxhYmVsLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG5cclxuIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd3JhcHBlcicpO1xyXG4gd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xhYmVsJyk7XHJcbiB3cmFwcGVyLmlubmVyVGV4dCA9ICdTZXQgUHJpb3JpdHkgZm9yIEl0ZW0nXHJcbiBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuIGxldCBvcHRpb25zID0ge1xyXG4gICAgXCJIaWdoXCI6IGZhbHNlLFxyXG4gICAgXCJNZWRpdW1cIjogZmFsc2UsXHJcbiAgICBcIkxvd1wiOiBmYWxzZSxcclxuIH1cclxuXHJcblxyXG5mb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0ga2V5O1xyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgIGlucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgaW5wdXQudmFsdWUgPSBrZXk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcclxufVxyXG5cclxubGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jylcclxuc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKHN1Ym1pdCk7XHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZHRvRG8pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGlkZUZvcm0oKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb250ZW50LnJlbW92ZSgpO1xyXG4gICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9kb1wiKTtcclxuICAgIGFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVGb3JtKTtcclxuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIG5ldyBJdGVtJztcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUZvcm0pO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVJdGVtKHN0cmluZywgaWQpIHtcclxuLy8gICAgIGxldCB0aXRsZSA9IHN0cmluZztcclxuLy8gICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbi8vICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbScpO1xyXG4vLyAgICAgaXRlbS5pbm5lclRleHQgPSB0aXRsZTtcclxuLy8gICAgIHJldHVybiBpdGVtO1xyXG4vLyAgfVxyXG4gXHJcbi8vICBmdW5jdGlvbiBjcmVhdGVUaXRsZShzdHJpbmcpIHtcclxuLy8gICAgIGxldCB0aXRsZVRleHQgPSBzdHJpbmc7XHJcbi8vICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcclxuLy8gICAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcclxuLy8gICAgIHJldHVybiB0aXRsZTtcclxuLy8gIH1cclxuIFxyXG4vLyAgZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oc3RyaW5nKSB7XHJcbi8vICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xyXG4vLyAgICAgdGl0bGUuaW5uZXJUZXh0ID0gc3RyaW5nO1xyXG4vLyAgICAgcmV0dXJuIHRpdGxlO1xyXG4vLyAgfVxyXG4gXHJcbi8vICBmdW5jdGlvbiBjcmVhdGVJbWFnZShzdHJpbmcsIGlkKXtcclxuLy8gICAgIGxldCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgbmV3SW1hZ2Uuc3JjID0gc3RyaW5nO1xyXG4vLyAgICAgbmV3SW1hZ2UuaWQgPSBpZDtcclxuLy8gICAgIG5ld0ltYWdlLmNsYXNzTmFtZSA9ICdpbWFnZSc7XHJcbi8vICAgICByZXR1cm4gbmV3SW1hZ2U7XHJcbi8vICB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVDb250YWN0ICgpIHtcclxuLy8gICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbi8vICAgICBsZXQgY29udGFjdFRpdGxlID0gY3JlYXRlVGl0bGUoJ0NvbnRhY3QgVXMnKTtcclxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcclxuXHJcbi8vICAgICBsZXQgYmFybGltYW5DYXJkID0gY3JlYXRlSXRlbSgnQmFybGltYW4gQnV0dGVyYnVyJywgJ2JhcmxpbWFuJylcclxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFybGltYW5DYXJkKTtcclxuLy8gICAgIGxldCBiYXJsaW1hbkltYWdlID0gY3JlYXRlSW1hZ2UoYmFybGltYW4sICdiYXJsaW1hbicpO1xyXG4vLyAgICAgYmFybGltYW5DYXJkLmFwcGVuZENoaWxkKGJhcmxpbWFuSW1hZ2UpO1xyXG4vLyAgICAgbGV0IGJhcmxpbWFuVGV4dCA9IGNyZWF0ZURlc2NyaXB0aW9uKCdJbm5rZWVwIC0gQkJidXJAYnJlZWxhbmQubmV0Jyk7XHJcbi8vICAgICBiYXJsaW1hbkNhcmQuYXBwZW5kQ2hpbGQoYmFybGltYW5UZXh0KTtcclxuXHJcbi8vICAgICBsZXQgbm9iQ2FyZCA9IGNyZWF0ZUl0ZW0oJ05vYicsICdub2InKVxyXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChub2JDYXJkKTtcclxuLy8gICAgIGxldCBub2JJbWFnZSA9IGNyZWF0ZUltYWdlKG5vYiwgJ25vYicpO1xyXG4vLyAgICAgbm9iQ2FyZC5hcHBlbmRDaGlsZChub2JJbWFnZSk7XHJcbi8vICAgICBsZXQgbm9iVGV4dCA9IGNyZWF0ZURlc2NyaXB0aW9uKCdDb29rIC0gc2xvd2NvYWNoMUBicmVlbGFuZC5uZXQnKTtcclxuLy8gICAgIG5vYkNhcmQuYXBwZW5kQ2hpbGQobm9iVGV4dCk7XHJcblxyXG4vLyB9ICIsIlxyXG5pbXBvcnQge2NyZWF0ZUxpc3RJdGVtfSBmcm9tICcuL2xpc3RJdGVtLmpzJztcclxuLy8gaW1wb3J0IHtjcmVhdGVNZW51fSBmcm9tICcuL21lbnUuanMnO1xyXG4vLyBpbXBvcnQge2NyZWF0ZUNvbnRhY3R9IGZyb20gJy4vY29udGFjdC5qcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG4vLyBpbXBvcnQgcHJhbmNpbmdQb255MiBmcm9tICcuL3ByYW5jaW5nUG9ueS5wbmcnO1xyXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9mb3JtLmpzJztcclxuZXhwb3J0IHthZGR0b0RvfTtcclxuXHJcbi8vQUREIERFTEVURSBJVEVNIEJVVFRPTlxyXG4vL0FERCBNQVJLIENPTVBMRVRFIEJVVFRPTlxyXG4vL0NTU1xyXG4vL0FERCBQUklPUklUWS9OT1RFUyBPVEhFUiBGSUVMRFNcclxuLy9DSEFOR0UgVkFMVUVTIE9OICBUTyBET1NcclxuLy9DTEVBTiBVUC9DT01NRU5UXHJcblxyXG5cclxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxubGV0IHRvRG9BcnIgPSBbXTtcclxuXHJcbmNsYXNzIGxpc3RJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKG51bWJlciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgIHRoaXMubnVtYmVyID0gbnVtYmVyXHJcbiAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgfVxyXG4gICAgIGdldFRpdGxlKCkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgICB9XHJcbiAgICAgZ2V0TnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlcjtcclxuICAgIH1cclxuIH1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPYmplY3QoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3RPYmogPSBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggYHByb2plY3RzYCApKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHByb2plY3RPYmopO1xyXG4gICAgXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdE9iaikpIHtcclxuICAgICAgICAgICBpZiAoa2V5WzBdICE9IFwiRGVmYXVsdFwiKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBsZXQgdGl0bGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHRpdGxlQmFyJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywga2V5WzBdKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5hY3RpdmUnKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IGtleVswXTtcclxuICAgICAgICAgICAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5WzBdKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtzd2l0Y2hQcm9qZWN0KHByb2plY3RUaXRsZSl9KTtcclxuICAgICAgICAgICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0RlZmF1bHQnKTtcclxuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe3N3aXRjaFByb2plY3QoZGVmYXVsdFByb2plY3QpfSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICAvL2lmIChwcm9qZWN0T2JqLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gcHJvamVjdE9ialxyXG4gICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgbGV0IHByb2plY3RPYmogPSB7XHJcbiAgICAgICAgJ0RlZmF1bHQnOiB0b0RvQXJyXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnZW1wdHknKVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdE9iailcclxuICAgIHJldHVybiBwcm9qZWN0T2JqXHJcbn19XHJcblxyXG5mdW5jdGlvbiBsaXN0SXRlbXMoKSB7XHJcbiAgICBsZXQgYWxsTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QnKTtcclxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsTGlzdEl0ZW1zLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgYWxsTGlzdEl0ZW1zW2tdLnJlbW92ZSgpXHJcbiAgICB9XHJcbk9iamVjdC5lbnRyaWVzKHByb2plY3RPYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4gIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHZhbHVlW2ldO1xyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gaXRlbS5wcm9qZWN0O1xyXG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0KTtcclxuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaXN0SXRlbS5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xyXG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdCcpO1xyXG4gICAgICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICB9fSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvdW50ZXIoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggYGNvdW50ZXJgICkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb3VudGVyIGZvdW5kJylcclxuICAgICAgICBjb25zb2xlLmxvZyhjb3VudGVyKTtcclxuICAgICAgICByZXR1cm4gY291bnRlclxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50ZXJcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGluZygpIHtcclxubGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xyXG5sZXQgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbndlbGNvbWUuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWxjb21lJylcclxud2VsY29tZS5pbm5lclRleHQgPSAnV2VsY29tZSB0byB5b3VyIFByb2plY3RzJ1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbmhlYWRpbmcuYXBwZW5kQ2hpbGQod2VsY29tZSk7XHJcbmxldCBmb3JtU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZm9ybVNwYWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybVNwYWNlJyk7XHJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtU3BhY2UpO1xyXG5cclxubGV0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxubmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2plY3RCdXR0b24nKTtcclxubmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDcmVhdGUgTmV3IFByb2plY3QnO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3UHJvamVjdCk7XHJcbmZvcm1TcGFjZS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcclxuXHJcbmxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVG9kbycpO1xyXG5hZGRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24nKTtcclxuYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgbmV3IEl0ZW0nO1xyXG5mb3JtU3BhY2UuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlRm9ybSk7XHJcblxyXG5sZXQgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5zYXZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2F2ZUJ1dHRvbicpO1xyXG5zYXZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbnNhdmVCdXR0b24uaW5uZXJUZXh0ID0gJ1NhdmUgV29yayc7XHJcbmZvcm1TcGFjZS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVXb3JrKTtcclxuXHJcbmxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlQnV0dG9uJyk7XHJcbmRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5kZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSBXb3JrJztcclxuZm9ybVNwYWNlLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyT3V0KTtcclxuLy8gY29uc3QgcHJhbmNpbmdQb255ID0gbmV3IEltYWdlKCk7XHJcbi8vIHByYW5jaW5nUG9ueS5zcmMgPSBwcmFuY2luZ1BvbnkyO1xyXG4vLyBwcmFuY2luZ1BvbnkuaWQ9XCJwb255TG9nb1wiO1xyXG4vLyBoZWFkaW5nLmFwcGVuZENoaWxkKHByYW5jaW5nUG9ueSk7XHJcbn1cclxuY3JlYXRlSGVhZGluZygpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKXtcclxuXHJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJylcclxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0U3BhY2UnKTtcclxuZGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0Jyk7XHJcbmhlYWRlci5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdCk7XHJcblxyXG5sZXQgcHJvamVjdHRpdGxlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnByb2plY3R0aXRsZUJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3R0aXRsZUJhcicpXHJcbmxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wcm9qZWN0cy5pbm5lclRleHQgPSAnUHJvamVjdHMnXHJcbnByb2plY3RzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGVGaWVsZCcpXHJcbnByb2plY3R0aXRsZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XHJcbmxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucHJvamVjdFRpdGxlLmlubmVyVGV4dCA9ICdEZWZhdWx0IFByb2plY3QnXHJcbnByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpO1xyXG5wcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdEZWZhdWx0Jyk7XHJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0dGl0bGVCYXIpO1xyXG5wcm9qZWN0dGl0bGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuXHJcbmxldCBjYXJkU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY2FyZFNwYWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlzcGxheScpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFNwYWNlKTtcclxuXHJcblxyXG59XHJcblxyXG5jcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xyXG5sZXQgY291bnRlciA9IGNyZWF0ZUNvdW50ZXIoKTtcclxuY29uc3QgcHJvamVjdE9iaiA9IGNyZWF0ZVByb2plY3RPYmplY3QoKTtcclxuYWRkQ2FyZHMoKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKXtcclxuXHJcbmxldCBmb3JtU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVNwYWNlJyk7XHJcbmxldCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RCdXR0b24nKTtcclxubmV3UHJvamVjdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld1Byb2plY3QpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdIaWRlJ1xyXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVByb2plY3RGb3JtKTtcclxubGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdEZvcm0nKTtcclxubmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtJyk7XHJcblxyXG5sZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG50aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwnKVxyXG50aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0IFRpdGxlJ1xyXG5uZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxubGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG50aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RUaXRsZScpO1xyXG50aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxudGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG5sZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxyXG5zdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0U3VibWl0Jyk7XHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5uZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG5mb3JtU3BhY2UuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pXHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZG5ld1Byb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjdXJyZW50UHJvamVjdCgpe1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFByb2plY3QoZWxlbSl7XHJcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcbiAgICBjdXJyZW50UHJvamVjdC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpXHJcbiAgICBjdXJyZW50UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luYWN0aXZlJylcclxuICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycsICdpbmFjdGl2ZScpXHJcbiAgICBlbGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJylcclxuICAgIGFkZENhcmRzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZG5ld1Byb2plY3QoKXtcclxuICAgIGxldCB0aXRsZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0dGl0bGVCYXInKTtcclxuICAgIGxldCBkZWZhdWx0UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcclxuICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJyk7XHJcbiAgICBkZWZhdWx0UHJvamVjdC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpXHJcbiAgICBkZWZhdWx0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luYWN0aXZlJylcclxuICAgIGxldCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJykudmFsdWU7XHJcbiAgICBsZXQgbmV3QXJyID0gW11cclxuICAgcHJvamVjdE9ialtuZXdQcm9qZWN0VGl0bGVdID0gbmV3QXJyXHJcbiAgIC8vY29uc29sZS5sb2cocHJvamVjdE9iaik7XHJcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBuZXdQcm9qZWN0VGl0bGUpO1xyXG4gICAgbmV3UHJvamVjdC5pbm5lclRleHQgPSBuZXdQcm9qZWN0VGl0bGU7XHJcbiAgICB0aXRsZUJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtzd2l0Y2hQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KX0pXHJcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtzd2l0Y2hQcm9qZWN0KG5ld1Byb2plY3QpfSlcclxuICAgLy8gbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSkpO1xyXG4gICAgLy9uZXdQcm9qZWN0Lm9uY2xpY2sgPSBjdXJyZW50UHJvamVjdCgpO1xyXG4gICAgaGlkZVByb2plY3RGb3JtKCk7XHJcbiAgICAvL3JldHVybiBuZXdwcm9qZWN0T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XHJcbiAgICBsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKTtcclxuICAgIG5ld1Byb2plY3RGb3JtLnJlbW92ZSgpO1xyXG4gICAgbGV0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdXR0b25cIik7XHJcbiAgICBuZXdQcm9qZWN0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVByb2plY3RGb3JtKTtcclxuICAgIG5ld1Byb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0NyZWF0ZSBOZXcgUHJvamVjdCc7XHJcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3UHJvamVjdCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZENhcmRzKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0T2JqKTtcclxuICAgIGxpc3RJdGVtcygpO1xyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG4gICAgbGV0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdCgpO1xyXG4gICAgbGV0IHRpdGxlID0gcHJvamVjdC5hdHRyaWJ1dGVzWydpZCddLnZhbHVlO1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0T2JqW3RpdGxlXTtcclxuICAgIGxldCBhbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XHJcbiAgICBpZiAoYWxsQ2FyZHMubGVuZ3RoICE9IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbENhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFsbENhcmRzW2ldLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdEFycmF5W2ldLnByb2plY3QgPT0gdGl0bGUpIHtcclxuICAgICAgICBkaXNwbGF5Q2FyZChjdXJyZW50UHJvamVjdEFycmF5W2ldKTtcclxuICAgIH19XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNhcmQoYXJyKSB7XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4gICAgICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGB0b0RvXyR7YXJyLm51bWJlcn1gKTtcclxuICAgICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgICAgIGxldCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQmFyJyk7XHJcbiAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xyXG4gICAgICAgICAgIGxldCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgIGNhcmRCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJvZHknKTtcclxuICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcclxuICAgICAgICAgICBsZXQgcHJpb3JpdHlDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eUNvbG9yJyk7XHJcbiAgICAgICAgICAgcHJpb3JpdHlDb2xvci5zZXRBdHRyaWJ1dGUoJ2lkJywgYXJyLnByaW9yaXR5KTtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHByaW9yaXR5Q29sb3IpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBgY29tcGxldGVfJHthcnIubnVtYmVyfWApO1xyXG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCdXR0b24nKTtcclxuICAgICAgICAgICAgY29tcGxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0NvbXBsZXRlJztcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGBlZGl0XyR7YXJyLm51bWJlcn1gKTtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCdXR0b24nKTtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvbi5pbm5lclRleHQgPSAnTW9kaWZ5JztcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGBkZWxldGVfJHthcnIubnVtYmVyfWApO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAnRGVsZXRlJztcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGV4cGFuZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGV4cGFuZF8ke2Fyci5udW1iZXJ9YCk7XHJcbiAgICAgICAgICAgIGV4cGFuZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCdXR0b24nKTtcclxuICAgICAgICAgICAgZXhwYW5kQnV0dG9uLmlubmVyVGV4dCA9ICdFeHBhbmQnO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQobmV3SXRlbShhcnIudGl0bGUpKTtcclxuICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChuZXdJdGVtKGFyci5kdWVEYXRlKSk7XHJcbiAgICAgICAgICAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RldGFpbHMnKTtcclxuICAgICAgICAgICAgZGV0YWlscy5pbm5lclRleHQgPSBhcnIuZGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAnUmVzdGFydCdcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICdDb21wbGV0ZSdcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWRpdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXJyLnByb2plY3QgPSBcImRlbGV0ZWRcIjtcclxuICAgICAgICAgICAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChlZGl0QnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUZvcm0oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgVG8tRG8/XCIpXHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnByb2plY3QgPSBcImRlbGV0ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDYXJkcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyci5wcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgIGV4cGFuZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRldGFpbHMpO1xyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGNvbGxhcHNlQnV0dG9uKTtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLnJlbW92ZUNoaWxkKGV4cGFuZEJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBjb2xsYXBzZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZEJvZHkucmVtb3ZlQ2hpbGQoZGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGUucmVtb3ZlQ2hpbGQoY29sbGFwc2VCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICB9XHJcbiAgICAgICBsZXQgY29sbGFwc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICBjb2xsYXBzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNvbGxhcHNlXyR7YXJyLm51bWJlcn1gKTtcclxuICAgICAgICAgICBjb2xsYXBzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCdXR0b24nKTtcclxuICAgICAgICAgICBjb2xsYXBzZUJ1dHRvbi5pbm5lclRleHQgPSAnSGlkZSc7XHJcbiAgICAgICAgICBjYXJkRHJhZyhjYXJkKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGFsbEluYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluYWN0aXZlJylcclxuICAgIC8vY29uc29sZS5sb2coYWxsSW5hY3RpdmUpO1xyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxJbmFjdGl2ZS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYWxsSW5hY3RpdmVba10pO1xyXG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBhbGxJbmFjdGl2ZVtrXS5hdHRyaWJ1dGVzWydpZCddLnZhbHVlO1xyXG4gICAgICAgIGxldCBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0T2JqW3Byb2plY3RUaXRsZV07XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHByb2plY3RBcnJheS5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdEFycmF5W3JdLnByb2plY3QgPT0gcHJvamVjdC5hdHRyaWJ1dGVzWydpZCddLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheVtyXSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q2FyZChwcm9qZWN0QXJyYXlbcl0pO1xyXG4gICAgICAgICAgICB9fX19XHJcblxyXG4vLyBBZGRzIFRvIERvIGl0ZW1zIGZyb20gRm9ybSBpbnRvIExpc3QgSXRlbSBPYmplY3RzLCB0aGVuIGFkZHMgdGhlbSB0byBhcHByb3ByaWF0ZSBQcm9qZWN0IEFycmF5IGFmdGVyIGZvcm0gU3VibWl0IEJ1dHRvbiBpcyBjbGlja2VkXHJcbmZ1bmN0aW9uIGFkZHRvRG8oKSB7XHJcbiAgICBsZXQgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmF0dHJpYnV0ZXNbJ2lkJ10udmFsdWU7XHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlO1xyXG4gICAgbGV0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpO1xyXG4gICAgbGV0IHNlbGVjdGVkU2l6ZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByYWRpb0J1dHRvbiBvZiByYWRpb0J1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYWRpb0J1dHRvbi5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTaXplID0gcmFkaW9CdXR0b24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIGxldCBuZXdJdGVtID0gbmV3IGxpc3RJdGVtKGNvdW50ZXIsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc2VsZWN0ZWRTaXplLCBwcm9qZWN0TmFtZSk7XHJcbiAgICBwcm9qZWN0T2JqW3Byb2plY3ROYW1lXS5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgcmVtb3ZlRm9ybSgpO1xyXG4gICAgY291bnRlcisrO1xyXG4gICAgYWRkQ2FyZHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVdvcmsoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggYHByb2plY3RzYCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdE9iaikgKTtcclxuICAgIGNvbnNvbGUubG9nKCBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggYHByb2plY3RzYCApICkgKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBgY291bnRlcmAsIEpTT04uc3RyaW5naWZ5KGNvdW50ZXIpICk7XHJcbn1cclxuICAgXHJcbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XHJcbiAgICBsZXQgZm9ybVNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TcGFjZScpXHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAvL2NvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGNvbnRlbnQucmVtb3ZlKCk7XHJcbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb2RvXCIpO1xyXG4gICAgYWRkQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRvZG8nKTtcclxuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG4gICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgbmV3IEl0ZW0nO1xyXG4gICAgZm9ybVNwYWNlLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVGb3JtKTtcclxuICAgIC8vY3VycmVudFByb2plY3QucmVtb3ZlQ2hpbGQoY29udGVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhcmREcmFnKGNhcmQpIHtcclxuXHJcbi8vbGV0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xyXG4vL2xldCBjYXJkSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpXHJcbi8vbGV0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcclxuY2FyZC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkQnV0dG9uJylcclxuICAgIGxldCBlbGVtZW50QmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZWxlbWVudEJlbG93ID09IGJ1dHRvbnNbaV0pIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH19XHJcblxyXG5cclxuXHJcbiAgICBsZXQgc2hpZnRYID0gZXZlbnQuY2xpZW50WCAtIGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgIGxldCBzaGlmdFkgPSBldmVudC5jbGllbnRZIC0gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG4gICAgY2FyZC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBjYXJkLnN0eWxlLnpJbmRleCA9IDEwMDA7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcclxuXHJcbiAgICBtb3ZlQ2FyZChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cclxuLy9tb3ZlcyBDYXJkIGF0IHRoZSBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIHRoZSBwYWdlLCB0YWtpbmcgYWNjb3VudCBmb3IgdGhlIHNoaWZ0cyBpbml0aWFsbHkgd2hlbiBjbGlja2luZyBvbiBjYXJkXHJcbiAgICBmdW5jdGlvbiBtb3ZlQ2FyZChwYWdlWCwgcGFnZVkpIHtcclxuICAgICAgICBjYXJkLnN0eWxlLmxlZnQgPSBwYWdlWCAtIHNoaWZ0WCArICdweCc7XHJcbiAgICAgICAgY2FyZC5zdHlsZS50b3AgPSBwYWdlWSAtIHNoaWZ0WSArICdweCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICBsZXQgY3VycmVudERyb3BwYWJsZSA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgICAgICBtb3ZlQ2FyZChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG4gICAgXHJcblxyXG4gICAgICAgIGNhcmQuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZWxlbUJlbG93ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcclxuICAgICAgICBjYXJkLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghZWxlbUJlbG93KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGRyb3BwYWJsZUJlbG93ID0gZWxlbUJlbG93LmNsb3Nlc3QoJy5pbmFjdGl2ZScpO1xyXG4gICAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlICE9IGRyb3BwYWJsZUJlbG93KSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBsZWF2ZURyb3BwYWJsZShjdXJyZW50RHJvcHBhYmxlKTtcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50RHJvcHBhYmxlID0gZHJvcHBhYmxlQmVsb3c7XHJcbiAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlKSB7XHJcbiAgICAgICAgY2FyZC5vbm1vdXNldXAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgICAgICAgICAgY3VycmVudERyb3BwYWJsZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3BpbmsnO1xyXG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdE5hbWUgPSBjdXJyZW50RHJvcHBhYmxlLmF0dHJpYnV0ZXNbJ2lkJ10udmFsdWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY2FyZElEID0gY2FyZC5hdHRyaWJ1dGVzWydpZCddLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgbnVtYiA9IGNhcmRJRC5yZXBsYWNlKC9bXjAtOV0vZywgJycpOyBcclxuICAgICAgICAgICAgbGV0IG5ld051bSA9IHBhcnNlSW50KG51bWIsMTApOyBcclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocHJvamVjdE9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiAge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHZhbHVlW251bWJlcl0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVtpXS5udW1iZXIgPT0gbmV3TnVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB2YWx1ZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnByb2plY3QgPSBuZXdQcm9qZWN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGFkZENhcmRzKCk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gIGVudGVyRHJvcHBhYmxlKGN1cnJlbnREcm9wcGFibGUpO1xyXG4gICAgICAgIFxyXG4gICAgfX19XHJcblxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHJcbiAgICBjYXJkLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgICAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgIGFkZENhcmRzKCk7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuLy8gZnVuY3Rpb24gZW50ZXJEcm9wcGFibGUoZWxlbSkge1xyXG4gICAgXHJcbi8vICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAncGluayc7XHJcbi8vICAgICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxlYXZlRHJvcHBhYmxlKGVsZW0pIHtcclxuICAgIC8vY29uc29sZS5sb2coZWxlbSk7XHJcbiAgIC8vZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XHJcbiAgfVxyXG5cclxuY2FyZC5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO307XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmV3SXRlbShzdHJpbmcpIHtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdEl0ZW0nKTtcclxuICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyaW5nO1xyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyT3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xyXG59XHJcblxyXG5cclxuIiwiZXhwb3J0IHtjcmVhdGVMaXN0SXRlbX1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0oKSB7XHJcbiAgICBcclxuICAgIC8vIGxldCBpdGVtID0gbmV3IGxpc3RJdGVtKCd0aXRsZScsICd0aGlzIGlzJywgJzExLzInLCAnaGlnaCcpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIC8vIHJldHVybiBpdGVtXHJcblxyXG4gICAgLy8gbGV0IHRpdGxlID0gY3JlYXRlVGl0bGUoJ1RoZSBQcmFuY2luZyBQb255JylcclxuICAgIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgLy8gdGl0bGUuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGluZygpKTtcclxuXHJcbiAgICAvLyBsZXQgZm9vdGVyID0gY3JlYXRlVGl0bGUoJ0J5IEpBVUdTIDIwMjInKTtcclxuICAgIC8vIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xyXG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlSGVhZGluZygpIHtcclxuLy8gICAgICAgICBsZXQgdGl0bGUgPSBcIi0gYnkgQmFybGltYW4gQnV0dGVyYnVyXCI7XHJcbi8vICAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGluZycpO1xyXG4vLyAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbi8vICAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSB0aXRsZTtcclxuLy8gICAgICAgICByZXR1cm4gaGVhZGluZztcclxuLy8gICAgIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cmluZykge1xyXG4vLyAgICAgICAgIGxldCB0aXRsZVRleHQgPSBzdHJpbmc7XHJcbi8vICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xyXG4vLyAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcclxuLy8gICAgICAgICByZXR1cm4gdGl0bGU7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVRleHQoKSB7XHJcbi8vICAgICBsZXQgaW5mb1RleHQgPSBcIlRoZSBQcmFuY2luZyBQb255IGhhcyBiZWVuIGEgQnJlZWxhbmQgc3RhcGxlIGZvciBvdmVyIDMwMCB5ZWFycy4gQ29tZSBhbmQgc3RheSBpbiBvdXIgbW9zdCBjb21mb3J0YWJsZSByb29tcyAoaW5jbHVkaW5nIEhvYmJpdC1TaXplZCByb29tcykgd2hpbGUgZW5qb2luZyB0aGUgYmVzdCBmb29kIHdlc3Qgb2YgdGhlIE1pc3R5IE1vdW50YWlucyEgLSBCYXJsaW1hblwiO1xyXG4vLyAgICAgbGV0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBpbmZvMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RleHQnKTtcclxuLy8gICAgIGluZm8xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4vLyAgICAgaW5mbzEuaW5uZXJUZXh0ID0gaW5mb1RleHQ7XHJcbi8vICAgICByZXR1cm4gaW5mbzE7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZUhvdXJzKCkge1xyXG4vLyAgICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuLy8gICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG91ckxpc3QnKTtcclxuLy8gICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4vLyAgICAgICAgIGxldCBkYXRhID0gW1wiQnJlYWtmYXN0OiBzZXJ2ZWQgYXQgU3VucmlzZSBkYWlseVwiLCBcIlNlY29uZC1CcmVha2Zhc3Q6IHNlcnZlZCB0d28gaG91cnMgYWZ0ZXIgU3VucmlzZVwiLCBcIkx1bmNoZW9uOiBzZXJ2ZWQgYXQgaGlnaCBub29uXCIsIFwiU3VwcGVyOiBzZXJ2ZWQgYXQgU3Vuc2V0XCIsIFwiU3RhYmxlcyBhdmFpbGFibGUgdXBvbiByZXF1ZXN0XCJdXHJcbiAgXHJcbi8vICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbi8vICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuLy8gICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0SXRlbScpXHJcbi8vICAgICAgICAgICAgIGxpLmlubmVyVGV4dCA9IGl0ZW07XHJcbi8vICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIHJldHVybiBsaXN0O1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcclxuLy8gICAgIGxldCBpbmZvVGV4dCA9IFwiRmluZCB1cyBqdXN0IHBhc3QgdGhlIFdlc3QtR2F0ZSwgaW4gQnJlZSwgd2VzdCBvZiBDaGV0LXdvb2QsIG5vcnRoIGZyb20gdGhlIEdyZWVud2F5XCJcclxuLy8gICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgbG9jYXRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdsb2NhdGlvbicpO1xyXG4vLyAgICAgbG9jYXRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbi8vICAgICBsb2NhdGlvbi5pbm5lclRleHQgPSBpbmZvVGV4dDtcclxuLy8gICAgIHJldHVybiBsb2NhdGlvbjtcclxuLy8gfVxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=