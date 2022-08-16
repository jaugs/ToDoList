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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* @font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./Tolkien.ttf') format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n   */\r\nbody {\r\n    margin: 0;\r\n    padding: 0px\r\n}\r\n\r\n#container {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#formSpace {\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n}\r\n\r\n#header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: #f8fafc;\r\n    background-color: #64748b;\r\n    padding: 10px;\r\n}\r\n\r\nh2 {\r\n    font-size: 2.5em;\r\n}\r\n\r\n.dragger {\r\n    width: 250px;\r\n    height: 30px;\r\n    background-color: #0f172a;\r\n}\r\n\r\n\r\n.button {\r\n    width: 200px;\r\n    height: 75px;\r\n    cursor: pointer;\r\n    background-color: #334155;\r\n    color: #f8fafc;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border-radius: 7px;\r\n}\r\n\r\n.button:hover {\r\n    filter: brightness(80%);\r\n    background-color: #64748b;\r\n    color: #f8fafc;\r\n}\r\n\r\n\r\n.button:active {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    box-shadow: 0 5px rgb(0, 0, 0);\r\n    transform: translateY(4px);\r\n}\r\n\r\n.project {\r\n    display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    padding: .5rem;\r\n    gap: 20px\r\n}\r\n\r\n#projecttitleBar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: .5rem;\r\n    gap: 4rem;\r\n    align-items: center;\r\n    \r\n   \r\n}\r\n\r\n.active {\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    background-color: #334155;\r\n    color:#f8fafc;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border: 2px solid #0f172a;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n    border: 3px solid blue\r\n}\r\n\r\n.inactive {\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    background-color: #334155;\r\n    color:#f8fafc;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border: 2px solid #0f172a;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n\r\n#display {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    background-color: #f1f5f9;\r\n    color: #0f172a;\r\n    padding: 10px;\r\n    gap: 20px;\r\n}\r\n.card {\r\n    border: 2px solid black;\r\n    background-color: #cbd5e1;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 5px;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 250px;\r\n    height: 200px;\r\n}\r\n\r\n.cardBody {\r\n    border: 2px solid red;\r\n    padding: 20px;\r\n    width: 230px;\r\n    height: 180px;\r\n}\r\n\r\n.priorityColor {\r\n    width: 150px;\r\n    height: 15px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#High {\r\n    background-color: red;\r\n}\r\n\r\n#Medium {\r\n    background-color: yellow;\r\n}\r\n\r\n#Low {\r\n    background-color: green;\r\n}\r\n\r\n\r\n#content {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.label {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    width: 20rem;\r\n    color: #f8fafc;\r\n    padding: 15px;\r\n    gap: 5px;\r\n   background-color: #475569;\r\n    /* background-size: 100% 100%;\r\n    background-position: center center; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  \r\n    border-radius: 10px;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\r\n}\r\n\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item, .listItem {\r\n    /* font-family: 'MyFont'; */\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    width: 15rem;\r\n    color: black;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n   border: 4px solid #1e293b;\r\n   border-radius: 10px;\r\n   background-color: #f8fafc;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border: 4px solid #0f172a\r\n  }\r\n\r\n#description {\r\n    height: 5rem;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n/* @font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./Tolkien.ttf') format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n   */\r\nbody {\r\n    margin: 0;\r\n    padding: 0px\r\n}\r\n\r\n#container {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#formSpace {\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n}\r\n\r\n#header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: #f8fafc;\r\n    background-color: #64748b;\r\n    padding: 10px;\r\n}\r\n\r\nh2 {\r\n    font-size: 2.5em;\r\n}\r\n\r\n.dragger {\r\n    width: 250px;\r\n    height: 30px;\r\n    background-color: #0f172a;\r\n}\r\n\r\n\r\n.button {\r\n    width: 200px;\r\n    height: 75px;\r\n    cursor: pointer;\r\n    background-color: #334155;\r\n    color: #f8fafc;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border-radius: 7px;\r\n}\r\n\r\n.button:hover {\r\n    filter: brightness(80%);\r\n    background-color: #64748b;\r\n    color: #f8fafc;\r\n}\r\n\r\n\r\n.button:active {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    box-shadow: 0 5px rgb(0, 0, 0);\r\n    transform: translateY(4px);\r\n}\r\n\r\n.project {\r\n    display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    padding: .5rem;\r\n    gap: 20px\r\n}\r\n\r\n#projecttitleBar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: .5rem;\r\n    gap: 4rem;\r\n    align-items: center;\r\n    \r\n   \r\n}\r\n\r\n.active {\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    background-color: #334155;\r\n    color:#f8fafc;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border: 2px solid #0f172a;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n    border: 3px solid blue\r\n}\r\n\r\n.inactive {\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    background-color: #334155;\r\n    color:#f8fafc;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border: 2px solid #0f172a;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n\r\n#display {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    background-color: #f1f5f9;\r\n    color: #0f172a;\r\n    padding: 10px;\r\n    gap: 20px;\r\n}\r\n.card {\r\n    border: 2px solid black;\r\n    background-color: #cbd5e1;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 5px;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 250px;\r\n    height: 200px;\r\n}\r\n\r\n.cardBody {\r\n    border: 2px solid red;\r\n    padding: 20px;\r\n    width: 230px;\r\n    height: 180px;\r\n}\r\n\r\n.priorityColor {\r\n    width: 150px;\r\n    height: 15px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#High {\r\n    background-color: red;\r\n}\r\n\r\n#Medium {\r\n    background-color: yellow;\r\n}\r\n\r\n#Low {\r\n    background-color: green;\r\n}\r\n\r\n\r\n#content {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.label {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    width: 20rem;\r\n    color: #f8fafc;\r\n    padding: 15px;\r\n    gap: 5px;\r\n   background-color: #475569;\r\n    /* background-size: 100% 100%;\r\n    background-position: center center; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  \r\n    border-radius: 10px;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\r\n}\r\n\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item, .listItem {\r\n    /* font-family: 'MyFont'; */\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    width: 15rem;\r\n    color: black;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n   border: 4px solid #1e293b;\r\n   border-radius: 10px;\r\n   background-color: #f8fafc;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border: 4px solid #0f172a\r\n  }\r\n\r\n#description {\r\n    height: 5rem;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}"],"sourceRoot":""}]);
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
let formSpace = document.getElementById('formSpace');
const content = document.createElement('div');
let addButton = document.getElementById("addTodo");
addButton.innerText = 'Hide';
addButton.removeEventListener('click', createForm);
addButton.addEventListener('click', hideForm);
content.style.display = 'block flex';
content.setAttribute('id', 'content');
formSpace.appendChild(content);

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
let projectArr = [];


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

// const projectObj = {
//     'Default': toDoArr
// }
 

//const projectObj = new ProjectObj('Default', toDoArr);

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

let saveButton = document.createElement('button');
saveButton.setAttribute('id', 'saveButton');
saveButton.setAttribute('class', 'button');
saveButton.innerText = 'Save Work';
formSpace.appendChild(saveButton);
saveButton.addEventListener('click', saveWork);

// let loadButton = document.createElement('button');
// loadButton.setAttribute('id', 'loadButton');
// loadButton.setAttribute('class', 'button');
// loadButton.innerText = 'Load Work';
// formSpace.appendChild(loadButton);
// loadButton.addEventListener('click', getWork);

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

const defaultProject = document.createElement('div');
defaultProject.setAttribute('id', 'projectSpace');
defaultProject.setAttribute('class', 'project');
container.appendChild(defaultProject);
let projecttitleBar = document.createElement('div');
projecttitleBar.setAttribute('id', 'projecttitleBar')
let projectTitle = document.createElement('div');
projectTitle.innerText = 'My Project'
projectTitle.setAttribute('class', 'active');
projectTitle.setAttribute('id', 'Default');
defaultProject.appendChild(projecttitleBar);
projecttitleBar.appendChild(projectTitle);
let addButton = document.createElement('button');
addButton.setAttribute('id', 'addTodo');
addButton.setAttribute('class', 'button');
addButton.innerText = 'Add new Item';
projecttitleBar.appendChild(addButton);
let newProjectButton = document.createElement('button');
newProjectButton.setAttribute('id', 'newProjectButton');
newProjectButton.setAttribute('class', 'button');
newProjectButton.innerText = 'Create New Project';
newProjectButton.addEventListener('click', createNewProject);
projecttitleBar.appendChild(newProjectButton);
addButton.addEventListener('click', _form_js__WEBPACK_IMPORTED_MODULE_2__.createForm);
let cardSpace = document.createElement('div');
cardSpace.setAttribute('id', 'display');
defaultProject.appendChild(cardSpace);


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
    let titleBar = document.getElementById('projecttitleBar')
    let content = document.getElementById('content');
    //content.style.display = 'none';
    content.remove();
    let addButton = document.getElementById("addTodo");
    addButton.remove();
    addButton = document.createElement('button')
    addButton.setAttribute('id', 'addTodo');
    addButton.setAttribute('class', 'button');
    addButton.innerText = 'Add new Item';
    titleBar.appendChild(addButton);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZm9CO0FBQ2lCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsOENBQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSUE7QUFDNkM7QUFDN0MsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsZUFBZTtBQUNMO0FBQ3JCO0FBQ3VDO0FBQ3RCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCw0QkFBNEI7QUFDMUY7QUFDQSxnRUFBZ0UsOEJBQThCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdEQUFVO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BpQnVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9MaXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvbGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLyogQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXHJcXG4gICAgc3JjOiB1cmwoJy4vVG9sa2llbi50dGYnKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIH1cXHJcXG4gICAqL1xcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDBweFxcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm1TcGFjZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBmb250LXNpemU6IDIuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dlciB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDc1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDVweCByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZ2FwOiAyMHB4XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0dGl0bGVCYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGdhcDogNHJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxyXFxuICAgIGNvbG9yOiNmOGZhZmM7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsdWVcXHJcXG59XFxyXFxuXFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAuN3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xcclxcbiAgICBjb2xvcjojZjhmYWZjO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMGYxNzJhO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZGlzcGxheSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCb2R5IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjMwcHg7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eUNvbG9yIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNIaWdoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jTWVkaXVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4jTG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDM1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAzNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAyMHB4IDVweCAxMHB4LCByZ2IoMCAwIDAgLyAzMCUpIDVweCAxMHB4IDBweCAtMTBweCwgcmdiKDAgMCAwIC8gMjAlKSA2cHggLTVweCAxOHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0sIC5saXN0SXRlbSB7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnTXlGb250JzsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB3aWR0aDogMTVyZW07XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgIGJvcmRlcjogNHB4IHNvbGlkICMxZTI5M2I7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzBmMTcyYVxcclxcbiAgfVxcclxcblxcclxcbiNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTs7Ozs7O0lBTUk7QUFDSjtJQUNJLFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsbUJBQW1COzs7QUFHdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLFFBQVE7R0FDVCx5QkFBeUI7SUFDeEI7eUNBQ3FDO0lBQ3JDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLHFIQUFxSDtBQUN6SDs7O0FBR0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7R0FDRyx5QkFBeUI7R0FDekIsbUJBQW1CO0dBQ25CLHlCQUF5QjtBQUM1Qjs7QUFFQTtJQUNJO0VBQ0Y7O0FBRUY7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4vKiBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9Ub2xraWVuLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgfVxcclxcbiAgICovXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMHB4XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jZm9ybVNwYWNlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgY29sb3I6ICMwZjE3MmE7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBnYXA6IDIwcHhcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3R0aXRsZUJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgcGFkZGluZzogLjdyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcXHJcXG4gICAgY29sb3I6I2Y4ZmFmYztcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzBmMTcyYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmx1ZVxcclxcbn1cXHJcXG5cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxyXFxuICAgIGNvbG9yOiNmOGZhZmM7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbiNkaXNwbGF5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5jYXJkIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJvZHkge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5Q29sb3Ige1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI0hpZ2gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNNZWRpdW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbiNMb3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMzVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgd2lkdGg6IDM1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA0MCUpIDIwcHggNXB4IDEwcHgsIHJnYigwIDAgMCAvIDMwJSkgNXB4IDEwcHggMHB4IC0xMHB4LCByZ2IoMCAwIDAgLyAyMCUpIDZweCAtNXB4IDE4cHggaW5zZXQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50ZXh0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSwgLmxpc3RJdGVtIHtcXHJcXG4gICAgLyogZm9udC1mYW1pbHk6ICdNeUZvbnQnOyAqL1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHdpZHRoOiAxNXJlbTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICAgYm9yZGVyOiA0cHggc29saWQgIzFlMjkzYjtcXHJcXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMGYxNzJhXFxyXFxuICB9XFxyXFxuXFxyXFxuI2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHtjcmVhdGVGb3JtfTtcclxuaW1wb3J0IHsgYWRkdG9EbyB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcclxubGV0IGZvcm1TcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU3BhY2UnKTtcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5sZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb2RvXCIpO1xyXG5hZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0hpZGUnO1xyXG5hZGRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVGb3JtKTtcclxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUZvcm0pO1xyXG5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2sgZmxleCc7XHJcbmNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XHJcbmZvcm1TcGFjZS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xhYmVsJylcclxuIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ0l0ZW0gVGl0bGUnXHJcbiBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxuIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcclxuIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbScpO1xyXG4gdGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbCcpXHJcbiBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9ICdJdGVtIERlc2NyaXB0aW9uJ1xyXG4gY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXHJcbiBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XHJcbiBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxuIGRlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuIGxldCBkdWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gZHVlTGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbCcpXHJcbiBkdWVMYWJlbC5pbm5lclRleHQgPSAnRHVlIERhdGUnXHJcbiBjb250ZW50LmFwcGVuZENoaWxkKGR1ZUxhYmVsKTtcclxuIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuIGR1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxyXG4gZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZURhdGUnKTtcclxuIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtJyk7XHJcbiBkdWVMYWJlbC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuXHJcbiBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dyYXBwZXInKTtcclxuIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbCcpO1xyXG4gd3JhcHBlci5pbm5lclRleHQgPSAnU2V0IFByaW9yaXR5IGZvciBJdGVtJ1xyXG4gY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuXHJcbiBsZXQgb3B0aW9ucyA9IHtcclxuICAgIFwiSGlnaFwiOiBmYWxzZSxcclxuICAgIFwiTWVkaXVtXCI6IGZhbHNlLFxyXG4gICAgXCJMb3dcIjogZmFsc2UsXHJcbiB9XHJcblxyXG5cclxuZm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLmlubmVyVGV4dCA9IGtleTtcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICBpbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICAgIGlucHV0LnZhbHVlID0ga2V5O1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbn1cclxuXHJcbmxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5zdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdCcpO1xyXG5zdWJtaXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24nKTtcclxuY29udGVudC5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGR0b0RvKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpZGVGb3JtKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29udGVudC5yZW1vdmUoKTtcclxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XHJcbiAgICBhZGRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRm9ybSk7XHJcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBuZXcgSXRlbSc7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVGb3JtKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlSXRlbShzdHJpbmcsIGlkKSB7XHJcbi8vICAgICBsZXQgdGl0bGUgPSBzdHJpbmc7XHJcbi8vICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG4vLyAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxuLy8gICAgIGl0ZW0uaW5uZXJUZXh0ID0gdGl0bGU7XHJcbi8vICAgICByZXR1cm4gaXRlbTtcclxuLy8gIH1cclxuIFxyXG4vLyAgZnVuY3Rpb24gY3JlYXRlVGl0bGUoc3RyaW5nKSB7XHJcbi8vICAgICBsZXQgdGl0bGVUZXh0ID0gc3RyaW5nO1xyXG4vLyAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XHJcbi8vICAgICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XHJcbi8vICAgICByZXR1cm4gdGl0bGU7XHJcbi8vICB9XHJcbiBcclxuLy8gIGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKHN0cmluZykge1xyXG4vLyAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcclxuLy8gICAgIHRpdGxlLmlubmVyVGV4dCA9IHN0cmluZztcclxuLy8gICAgIHJldHVybiB0aXRsZTtcclxuLy8gIH1cclxuIFxyXG4vLyAgZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc3RyaW5nLCBpZCl7XHJcbi8vICAgICBsZXQgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIG5ld0ltYWdlLnNyYyA9IHN0cmluZztcclxuLy8gICAgIG5ld0ltYWdlLmlkID0gaWQ7XHJcbi8vICAgICBuZXdJbWFnZS5jbGFzc05hbWUgPSAnaW1hZ2UnO1xyXG4vLyAgICAgcmV0dXJuIG5ld0ltYWdlO1xyXG4vLyAgfVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlQ29udGFjdCAoKSB7XHJcbi8vICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4vLyAgICAgbGV0IGNvbnRhY3RUaXRsZSA9IGNyZWF0ZVRpdGxlKCdDb250YWN0IFVzJyk7XHJcbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XHJcblxyXG4vLyAgICAgbGV0IGJhcmxpbWFuQ2FyZCA9IGNyZWF0ZUl0ZW0oJ0JhcmxpbWFuIEJ1dHRlcmJ1cicsICdiYXJsaW1hbicpXHJcbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhcmxpbWFuQ2FyZCk7XHJcbi8vICAgICBsZXQgYmFybGltYW5JbWFnZSA9IGNyZWF0ZUltYWdlKGJhcmxpbWFuLCAnYmFybGltYW4nKTtcclxuLy8gICAgIGJhcmxpbWFuQ2FyZC5hcHBlbmRDaGlsZChiYXJsaW1hbkltYWdlKTtcclxuLy8gICAgIGxldCBiYXJsaW1hblRleHQgPSBjcmVhdGVEZXNjcmlwdGlvbignSW5ua2VlcCAtIEJCYnVyQGJyZWVsYW5kLm5ldCcpO1xyXG4vLyAgICAgYmFybGltYW5DYXJkLmFwcGVuZENoaWxkKGJhcmxpbWFuVGV4dCk7XHJcblxyXG4vLyAgICAgbGV0IG5vYkNhcmQgPSBjcmVhdGVJdGVtKCdOb2InLCAnbm9iJylcclxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9iQ2FyZCk7XHJcbi8vICAgICBsZXQgbm9iSW1hZ2UgPSBjcmVhdGVJbWFnZShub2IsICdub2InKTtcclxuLy8gICAgIG5vYkNhcmQuYXBwZW5kQ2hpbGQobm9iSW1hZ2UpO1xyXG4vLyAgICAgbGV0IG5vYlRleHQgPSBjcmVhdGVEZXNjcmlwdGlvbignQ29vayAtIHNsb3djb2FjaDFAYnJlZWxhbmQubmV0Jyk7XHJcbi8vICAgICBub2JDYXJkLmFwcGVuZENoaWxkKG5vYlRleHQpO1xyXG5cclxuLy8gfSAiLCJcclxuaW1wb3J0IHtjcmVhdGVMaXN0SXRlbX0gZnJvbSAnLi9saXN0SXRlbS5qcyc7XHJcbi8vIGltcG9ydCB7Y3JlYXRlTWVudX0gZnJvbSAnLi9tZW51LmpzJztcclxuLy8gaW1wb3J0IHtjcmVhdGVDb250YWN0fSBmcm9tICcuL2NvbnRhY3QuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuLy8gaW1wb3J0IHByYW5jaW5nUG9ueTIgZnJvbSAnLi9wcmFuY2luZ1BvbnkucG5nJztcclxuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vZm9ybS5qcyc7XHJcbmV4cG9ydCB7YWRkdG9Eb307XHJcblxyXG4vL0FERCBERUxFVEUgSVRFTSBCVVRUT05cclxuLy9BREQgTUFSSyBDT01QTEVURSBCVVRUT05cclxuLy9DU1NcclxuLy9BREQgUFJJT1JJVFkvTk9URVMgT1RIRVIgRklFTERTXHJcbi8vQ0hBTkdFIFZBTFVFUyBPTiAgVE8gRE9TXHJcbi8vQ0xFQU4gVVAvQ09NTUVOVFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG5sZXQgdG9Eb0FyciA9IFtdO1xyXG5sZXQgcHJvamVjdEFyciA9IFtdO1xyXG5cclxuXHJcbmNsYXNzIGxpc3RJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKG51bWJlciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgIHRoaXMubnVtYmVyID0gbnVtYmVyXHJcbiAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgfVxyXG4gICAgIGdldFRpdGxlKCkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgICB9XHJcbiAgICAgZ2V0TnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlcjtcclxuICAgIH1cclxuIH1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPYmplY3QoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3RPYmogPSBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggYHByb2plY3RzYCApKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHByb2plY3RPYmopO1xyXG4gICAgXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdE9iaikpIHtcclxuICAgICAgICAgICBpZiAoa2V5WzBdICE9IFwiRGVmYXVsdFwiKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBsZXQgdGl0bGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHRpdGxlQmFyJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywga2V5WzBdKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5hY3RpdmUnKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IGtleVswXTtcclxuICAgICAgICAgICAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5WzBdKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtzd2l0Y2hQcm9qZWN0KHByb2plY3RUaXRsZSl9KTtcclxuICAgICAgICAgICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0RlZmF1bHQnKTtcclxuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe3N3aXRjaFByb2plY3QoZGVmYXVsdFByb2plY3QpfSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICAvL2lmIChwcm9qZWN0T2JqLmxlbmd0aClcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0T2JqXHJcbiAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICBsZXQgcHJvamVjdE9iaiA9IHtcclxuICAgICAgICAnRGVmYXVsdCc6IHRvRG9BcnJcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdlbXB0eScpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0T2JqKVxyXG4gICAgcmV0dXJuIHByb2plY3RPYmpcclxufX1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvdW50ZXIoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggYGNvdW50ZXJgICkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb3VudGVyIGZvdW5kJylcclxuICAgICAgICBjb25zb2xlLmxvZyhjb3VudGVyKTtcclxuICAgICAgICByZXR1cm4gY291bnRlclxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50ZXJcclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uc3QgcHJvamVjdE9iaiA9IHtcclxuLy8gICAgICdEZWZhdWx0JzogdG9Eb0FyclxyXG4vLyB9XHJcbiBcclxuXHJcbi8vY29uc3QgcHJvamVjdE9iaiA9IG5ldyBQcm9qZWN0T2JqKCdEZWZhdWx0JywgdG9Eb0Fycik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKCkge1xyXG5sZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5oZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XHJcbmxldCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxud2VsY29tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlbGNvbWUnKVxyXG53ZWxjb21lLmlubmVyVGV4dCA9ICdXZWxjb21lIHRvIHlvdXIgUHJvamVjdHMnXHJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuaGVhZGluZy5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcclxubGV0IGZvcm1TcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5mb3JtU3BhY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtU3BhY2UnKTtcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1TcGFjZSk7XHJcblxyXG5sZXQgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5zYXZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2F2ZUJ1dHRvbicpO1xyXG5zYXZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbnNhdmVCdXR0b24uaW5uZXJUZXh0ID0gJ1NhdmUgV29yayc7XHJcbmZvcm1TcGFjZS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVXb3JrKTtcclxuXHJcbi8vIGxldCBsb2FkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbi8vIGxvYWRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdsb2FkQnV0dG9uJyk7XHJcbi8vIGxvYWRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24nKTtcclxuLy8gbG9hZEJ1dHRvbi5pbm5lclRleHQgPSAnTG9hZCBXb3JrJztcclxuLy8gZm9ybVNwYWNlLmFwcGVuZENoaWxkKGxvYWRCdXR0b24pO1xyXG4vLyBsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0V29yayk7XHJcblxyXG5sZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZUJ1dHRvbicpO1xyXG5kZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24nKTtcclxuZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICdEZWxldGUgV29yayc7XHJcbmZvcm1TcGFjZS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhck91dCk7XHJcbi8vIGNvbnN0IHByYW5jaW5nUG9ueSA9IG5ldyBJbWFnZSgpO1xyXG4vLyBwcmFuY2luZ1Bvbnkuc3JjID0gcHJhbmNpbmdQb255MjtcclxuLy8gcHJhbmNpbmdQb255LmlkPVwicG9ueUxvZ29cIjtcclxuLy8gaGVhZGluZy5hcHBlbmRDaGlsZChwcmFuY2luZ1BvbnkpO1xyXG59XHJcbmNyZWF0ZUhlYWRpbmcoKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCl7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kZWZhdWx0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RTcGFjZScpO1xyXG5kZWZhdWx0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QnKTtcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0KTtcclxubGV0IHByb2plY3R0aXRsZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wcm9qZWN0dGl0bGVCYXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0dGl0bGVCYXInKVxyXG5sZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnByb2plY3RUaXRsZS5pbm5lclRleHQgPSAnTXkgUHJvamVjdCdcclxucHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJyk7XHJcbnByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0RlZmF1bHQnKTtcclxuZGVmYXVsdFByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdHRpdGxlQmFyKTtcclxucHJvamVjdHRpdGxlQmFyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcbmxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVG9kbycpO1xyXG5hZGRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24nKTtcclxuYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgbmV3IEl0ZW0nO1xyXG5wcm9qZWN0dGl0bGVCYXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxubGV0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxubmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2plY3RCdXR0b24nKTtcclxubmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDcmVhdGUgTmV3IFByb2plY3QnO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3UHJvamVjdCk7XHJcbnByb2plY3R0aXRsZUJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcclxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlRm9ybSk7XHJcbmxldCBjYXJkU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY2FyZFNwYWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlzcGxheScpO1xyXG5kZWZhdWx0UHJvamVjdC5hcHBlbmRDaGlsZChjYXJkU3BhY2UpO1xyXG5cclxuXHJcbn1cclxuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcclxubGV0IGNvdW50ZXIgPSBjcmVhdGVDb3VudGVyKCk7XHJcbmNvbnN0IHByb2plY3RPYmogPSBjcmVhdGVQcm9qZWN0T2JqZWN0KCk7XHJcbmFkZENhcmRzKCk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKXtcclxuXHJcbmxldCBmb3JtU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVNwYWNlJyk7XHJcbmxldCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RCdXR0b24nKTtcclxubmV3UHJvamVjdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld1Byb2plY3QpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdIaWRlJ1xyXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVByb2plY3RGb3JtKTtcclxubGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdEZvcm0nKTtcclxubmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtJyk7XHJcblxyXG5sZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG50aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwnKVxyXG50aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0IFRpdGxlJ1xyXG5uZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxubGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG50aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RUaXRsZScpO1xyXG50aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxudGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG5sZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxyXG5zdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0U3VibWl0Jyk7XHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5uZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG5mb3JtU3BhY2UuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pXHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZG5ld1Byb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjdXJyZW50UHJvamVjdCgpe1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0XHJcbiAgICB9XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hQcm9qZWN0KGVsZW0pe1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgY3VycmVudFByb2plY3QucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKVxyXG4gICAgY3VycmVudFByb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmFjdGl2ZScpXHJcbiAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5hY3RpdmUnKVxyXG4gICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpXHJcbiAgICBhZGRDYXJkcygpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZG5ld1Byb2plY3QoKXtcclxuICAgIGxldCB0aXRsZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0dGl0bGVCYXInKTtcclxuICAgIGxldCBkZWZhdWx0UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcclxuICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJyk7XHJcbiAgICBkZWZhdWx0UHJvamVjdC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpXHJcbiAgICBkZWZhdWx0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luYWN0aXZlJylcclxuICAgIGxldCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJykudmFsdWU7XHJcbiAgICBsZXQgbmV3QXJyID0gW11cclxuICAgcHJvamVjdE9ialtuZXdQcm9qZWN0VGl0bGVdID0gbmV3QXJyXHJcbiAgIC8vY29uc29sZS5sb2cocHJvamVjdE9iaik7XHJcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBuZXdQcm9qZWN0VGl0bGUpO1xyXG4gICAgbmV3UHJvamVjdC5pbm5lclRleHQgPSBuZXdQcm9qZWN0VGl0bGU7XHJcbiAgICB0aXRsZUJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtzd2l0Y2hQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KX0pXHJcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtzd2l0Y2hQcm9qZWN0KG5ld1Byb2plY3QpfSlcclxuICAgLy8gbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSkpO1xyXG4gICAgLy9uZXdQcm9qZWN0Lm9uY2xpY2sgPSBjdXJyZW50UHJvamVjdCgpO1xyXG4gICAgaGlkZVByb2plY3RGb3JtKCk7XHJcbiAgICAvL3JldHVybiBuZXdwcm9qZWN0T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XHJcbiAgICBsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKTtcclxuICAgIG5ld1Byb2plY3RGb3JtLnJlbW92ZSgpO1xyXG4gICAgbGV0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdXR0b25cIik7XHJcbiAgICBuZXdQcm9qZWN0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVByb2plY3RGb3JtKTtcclxuICAgIG5ld1Byb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0NyZWF0ZSBOZXcgUHJvamVjdCc7XHJcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3UHJvamVjdCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZENhcmRzKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0T2JqKTtcclxuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKTtcclxuICAgIGxldCBwcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcclxuICAgIGxldCB0aXRsZSA9IHByb2plY3QuYXR0cmlidXRlc1snaWQnXS52YWx1ZTtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdEFycmF5ID0gcHJvamVjdE9ialt0aXRsZV07XHJcbiAgICBsZXQgYWxsQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xyXG4gICAgaWYgKGFsbENhcmRzLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhbGxDYXJkc1tpXS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY3VycmVudFByb2plY3RBcnJheVtpXS5wcm9qZWN0ID09IHRpdGxlKSB7XHJcbiAgICAgICAgZGlzcGxheUNhcmQoY3VycmVudFByb2plY3RBcnJheVtpXSk7XHJcbiAgICB9fVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDYXJkKGFycikge1xyXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcclxuICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9Eb18ke2Fyci5udW1iZXJ9YCk7XHJcbiAgICAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJhcicpO1xyXG4gICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcclxuICAgICAgICAgICBsZXQgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBjYXJkQm9keS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCb2R5Jyk7XHJcbiAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQm9keSk7XHJcbiAgICAgICAgICAgbGV0IHByaW9yaXR5Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBwcmlvcml0eUNvbG9yLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlDb2xvcicpO1xyXG4gICAgICAgICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKCdpZCcsIGFyci5wcmlvcml0eSk7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChwcmlvcml0eUNvbG9yKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNvbXBsZXRlXyR7YXJyLm51bWJlcn1gKTtcclxuICAgICAgICAgICAgY29tcGxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICdDb21wbGV0ZSc7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBgZWRpdF8ke2Fyci5udW1iZXJ9YCk7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b24uaW5uZXJUZXh0ID0gJ01vZGlmeSc7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBgZGVsZXRlXyR7YXJyLm51bWJlcn1gKTtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJ1dHRvbicpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSc7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGBleHBhbmRfJHthcnIubnVtYmVyfWApO1xyXG4gICAgICAgICAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGV4cGFuZEJ1dHRvbi5pbm5lclRleHQgPSAnRXhwYW5kJztcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKG5ld0l0ZW0oYXJyLnRpdGxlKSk7XHJcbiAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQobmV3SXRlbShhcnIuZHVlRGF0ZSkpO1xyXG4gICAgICAgICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdpZCcsICdkZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGRldGFpbHMuaW5uZXJUZXh0ID0gYXJyLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICAgICAgY29tcGxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ1Jlc3RhcnQnXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJylcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAnQ29tcGxldGUnXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVkaXRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFyci5wcm9qZWN0ID0gXCJkZWxldGVkXCI7XHJcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGUucmVtb3ZlQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVGb3JtKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFRvLURvP1wiKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRleHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wcm9qZWN0ID0gXCJkZWxldGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2FyZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnIucHJvamVjdClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICBleHBhbmRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkZXRhaWxzKTtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChjb2xsYXBzZUJ1dHRvbik7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChleHBhbmRCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY29sbGFwc2VCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhcmRCb2R5LnJlbW92ZUNoaWxkKGRldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgY2FyZFRpdGxlLnJlbW92ZUNoaWxkKGNvbGxhcHNlQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgfVxyXG4gICAgICAgbGV0IGNvbGxhcHNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGBjb2xsYXBzZV8ke2Fyci5udW1iZXJ9YCk7XHJcbiAgICAgICAgICAgY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQnV0dG9uJyk7XHJcbiAgICAgICAgICAgY29sbGFwc2VCdXR0b24uaW5uZXJUZXh0ID0gJ0hpZGUnO1xyXG4gICAgICAgICAgY2FyZERyYWcoY2FyZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBhbGxJbmFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmFjdGl2ZScpXHJcbiAgICAvL2NvbnNvbGUubG9nKGFsbEluYWN0aXZlKTtcclxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsSW5hY3RpdmUubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGFsbEluYWN0aXZlW2tdKTtcclxuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gYWxsSW5hY3RpdmVba10uYXR0cmlidXRlc1snaWQnXS52YWx1ZTtcclxuICAgICAgICBsZXQgcHJvamVjdEFycmF5ID0gcHJvamVjdE9ialtwcm9qZWN0VGl0bGVdO1xyXG4gICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgaWYgKHByb2plY3RBcnJheVtyXS5wcm9qZWN0ID09IHByb2plY3QuYXR0cmlidXRlc1snaWQnXS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlbcl0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUNhcmQocHJvamVjdEFycmF5W3JdKTtcclxuICAgICAgICAgICAgfX19fVxyXG5cclxuLy8gQWRkcyBUbyBEbyBpdGVtcyBmcm9tIEZvcm0gaW50byBMaXN0IEl0ZW0gT2JqZWN0cywgdGhlbiBhZGRzIHRoZW0gdG8gYXBwcm9wcmlhdGUgUHJvamVjdCBBcnJheSBhZnRlciBmb3JtIFN1Ym1pdCBCdXR0b24gaXMgY2xpY2tlZFxyXG5mdW5jdGlvbiBhZGR0b0RvKCkge1xyXG4gICAgbGV0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdCgpO1xyXG4gICAgbGV0IHByb2plY3ROYW1lID0gcHJvamVjdC5hdHRyaWJ1dGVzWydpZCddLnZhbHVlO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcclxuICAgIGxldCByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl0nKTtcclxuICAgIGxldCBzZWxlY3RlZFNpemU7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmFkaW9CdXR0b24gb2YgcmFkaW9CdXR0b25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2l6ZSA9IHJhZGlvQnV0dG9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBsZXQgbmV3SXRlbSA9IG5ldyBsaXN0SXRlbShjb3VudGVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHNlbGVjdGVkU2l6ZSwgcHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdE9ialtwcm9qZWN0TmFtZV0ucHVzaChuZXdJdGVtKTtcclxuICAgIHJlbW92ZUZvcm0oKTtcclxuICAgIGNvdW50ZXIrKztcclxuICAgIGFkZENhcmRzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVXb3JrKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIGBwcm9qZWN0c2AsIEpTT04uc3RyaW5naWZ5KHByb2plY3RPYmopICk7XHJcbiAgICBjb25zb2xlLmxvZyggSlNPTi5wYXJzZSggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIGBwcm9qZWN0c2AgKSApICk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggYGNvdW50ZXJgLCBKU09OLnN0cmluZ2lmeShjb3VudGVyKSApO1xyXG59XHJcbiAgIFxyXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xyXG4gICAgbGV0IHRpdGxlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3R0aXRsZUJhcicpXHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAvL2NvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGNvbnRlbnQucmVtb3ZlKCk7XHJcbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb2RvXCIpO1xyXG4gICAgYWRkQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRvZG8nKTtcclxuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG4gICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgbmV3IEl0ZW0nO1xyXG4gICAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUZvcm0pO1xyXG4gICAgLy9jdXJyZW50UHJvamVjdC5yZW1vdmVDaGlsZChjb250ZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FyZERyYWcoY2FyZCkge1xyXG5cclxuLy9sZXQgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XHJcbi8vbGV0IGNhcmRJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcclxuLy9sZXQgY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdCgpO1xyXG5jYXJkLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRCdXR0b24nKVxyXG4gICAgbGV0IGVsZW1lbnRCZWxvdyA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChlbGVtZW50QmVsb3cgPT0gYnV0dG9uc1tpXSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfX1cclxuXHJcblxyXG5cclxuICAgIGxldCBzaGlmdFggPSBldmVudC5jbGllbnRYIC0gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgbGV0IHNoaWZ0WSA9IGV2ZW50LmNsaWVudFkgLSBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHJcbiAgICBjYXJkLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGNhcmQuc3R5bGUuekluZGV4ID0gMTAwMDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNhcmQpO1xyXG5cclxuICAgIG1vdmVDYXJkKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblxyXG4vL21vdmVzIENhcmQgYXQgdGhlIFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgdGhlIHBhZ2UsIHRha2luZyBhY2NvdW50IGZvciB0aGUgc2hpZnRzIGluaXRpYWxseSB3aGVuIGNsaWNraW5nIG9uIGNhcmRcclxuICAgIGZ1bmN0aW9uIG1vdmVDYXJkKHBhZ2VYLCBwYWdlWSkge1xyXG4gICAgICAgIGNhcmQuc3R5bGUubGVmdCA9IHBhZ2VYIC0gc2hpZnRYICsgJ3B4JztcclxuICAgICAgICBjYXJkLnN0eWxlLnRvcCA9IHBhZ2VZIC0gc2hpZnRZICsgJ3B4JztcclxuICAgICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50RHJvcHBhYmxlID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xyXG4gICAgICAgIG1vdmVDYXJkKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcbiAgICBcclxuXHJcbiAgICAgICAgY2FyZC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGxldCBlbGVtQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG4gICAgICAgIGNhcmQuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFlbGVtQmVsb3cpIHJldHVybjtcclxuICAgICAgICBsZXQgZHJvcHBhYmxlQmVsb3cgPSBlbGVtQmVsb3cuY2xvc2VzdCgnLmluYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUgIT0gZHJvcHBhYmxlQmVsb3cpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcclxuICAgICAgICAgICAgICAgIGxlYXZlRHJvcHBhYmxlKGN1cnJlbnREcm9wcGFibGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnREcm9wcGFibGUgPSBkcm9wcGFibGVCZWxvdztcclxuICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcclxuICAgICAgICBjYXJkLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgICAgICAgICBjdXJyZW50RHJvcHBhYmxlLnN0eWxlLmJhY2tncm91bmQgPSAncGluayc7XHJcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0TmFtZSA9IGN1cnJlbnREcm9wcGFibGUuYXR0cmlidXRlc1snaWQnXS52YWx1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBjYXJkSUQgPSBjYXJkLmF0dHJpYnV0ZXNbJ2lkJ10udmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBudW1iID0gY2FyZElELnJlcGxhY2UoL1teMC05XS9nLCAnJyk7IFxyXG4gICAgICAgICAgICBsZXQgbmV3TnVtID0gcGFyc2VJbnQobnVtYiwxMCk7IFxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhwcm9qZWN0T2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+ICB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codmFsdWVbbnVtYmVyXSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlW2ldLm51bWJlciA9PSBuZXdOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHZhbHVlW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvamVjdCA9IG5ld1Byb2plY3ROYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgYWRkQ2FyZHMoKTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyAgZW50ZXJEcm9wcGFibGUoY3VycmVudERyb3BwYWJsZSk7XHJcbiAgICAgICAgXHJcbiAgICB9fX1cclxuXHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cclxuICAgIGNhcmQub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgICAgIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgYWRkQ2FyZHMoKTtcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4vLyBmdW5jdGlvbiBlbnRlckRyb3BwYWJsZShlbGVtKSB7XHJcbiAgICBcclxuLy8gICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZCA9ICdwaW5rJztcclxuLy8gICAgIH1cclxuXHJcbiAgZnVuY3Rpb24gbGVhdmVEcm9wcGFibGUoZWxlbSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhlbGVtKTtcclxuICAgLy9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAnJztcclxuICB9XHJcblxyXG5jYXJkLm9uZHJhZ3N0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7fTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuZXdJdGVtKHN0cmluZykge1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0SXRlbScpO1xyXG4gICAgaXRlbS5pbm5lclRleHQgPSBzdHJpbmc7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXJPdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcbn1cclxuXHJcblxyXG4iLCJleHBvcnQge2NyZWF0ZUxpc3RJdGVtfVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaXN0SXRlbSgpIHtcclxuICAgIFxyXG4gICAgLy8gbGV0IGl0ZW0gPSBuZXcgbGlzdEl0ZW0oJ3RpdGxlJywgJ3RoaXMgaXMnLCAnMTEvMicsICdoaWdoJylcclxuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgLy8gcmV0dXJuIGl0ZW1cclxuXHJcbiAgICAvLyBsZXQgdGl0bGUgPSBjcmVhdGVUaXRsZSgnVGhlIFByYW5jaW5nIFBvbnknKVxyXG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAvLyB0aXRsZS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkaW5nKCkpO1xyXG5cclxuICAgIC8vIGxldCBmb290ZXIgPSBjcmVhdGVUaXRsZSgnQnkgSkFVR1MgMjAyMicpO1xyXG4gICAgLy8gZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XHJcbiAgICAvLyBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVIZWFkaW5nKCkge1xyXG4vLyAgICAgICAgIGxldCB0aXRsZSA9IFwiLSBieSBCYXJsaW1hbiBCdXR0ZXJidXJcIjtcclxuLy8gICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkaW5nJyk7XHJcbi8vICAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcclxuLy8gICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4vLyAgICAgICAgIHJldHVybiBoZWFkaW5nO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlVGl0bGUoc3RyaW5nKSB7XHJcbi8vICAgICAgICAgbGV0IHRpdGxlVGV4dCA9IHN0cmluZztcclxuLy8gICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XHJcbi8vICAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVUZXh0O1xyXG4vLyAgICAgICAgIHJldHVybiB0aXRsZTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlVGV4dCgpIHtcclxuLy8gICAgIGxldCBpbmZvVGV4dCA9IFwiVGhlIFByYW5jaW5nIFBvbnkgaGFzIGJlZW4gYSBCcmVlbGFuZCBzdGFwbGUgZm9yIG92ZXIgMzAwIHllYXJzLiBDb21lIGFuZCBzdGF5IGluIG91ciBtb3N0IGNvbWZvcnRhYmxlIHJvb21zIChpbmNsdWRpbmcgSG9iYml0LVNpemVkIHJvb21zKSB3aGlsZSBlbmpvaW5nIHRoZSBiZXN0IGZvb2Qgd2VzdCBvZiB0aGUgTWlzdHkgTW91bnRhaW5zISAtIEJhcmxpbWFuXCI7XHJcbi8vICAgICBsZXQgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIGluZm8xLnNldEF0dHJpYnV0ZSgnaWQnLCAndGV4dCcpO1xyXG4vLyAgICAgaW5mbzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbi8vICAgICBpbmZvMS5pbm5lclRleHQgPSBpbmZvVGV4dDtcclxuLy8gICAgIHJldHVybiBpbmZvMTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlSG91cnMoKSB7XHJcbi8vICAgICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4vLyAgICAgICAgIGxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdob3VyTGlzdCcpO1xyXG4vLyAgICAgICAgIGxpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbi8vICAgICAgICAgbGV0IGRhdGEgPSBbXCJCcmVha2Zhc3Q6IHNlcnZlZCBhdCBTdW5yaXNlIGRhaWx5XCIsIFwiU2Vjb25kLUJyZWFrZmFzdDogc2VydmVkIHR3byBob3VycyBhZnRlciBTdW5yaXNlXCIsIFwiTHVuY2hlb246IHNlcnZlZCBhdCBoaWdoIG5vb25cIiwgXCJTdXBwZXI6IHNlcnZlZCBhdCBTdW5zZXRcIiwgXCJTdGFibGVzIGF2YWlsYWJsZSB1cG9uIHJlcXVlc3RcIl1cclxuICBcclxuLy8gICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuLy8gICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4vLyAgICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3RJdGVtJylcclxuLy8gICAgICAgICAgICAgbGkuaW5uZXJUZXh0ID0gaXRlbTtcclxuLy8gICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgcmV0dXJuIGxpc3Q7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xyXG4vLyAgICAgbGV0IGluZm9UZXh0ID0gXCJGaW5kIHVzIGp1c3QgcGFzdCB0aGUgV2VzdC1HYXRlLCBpbiBCcmVlLCB3ZXN0IG9mIENoZXQtd29vZCwgbm9ydGggZnJvbSB0aGUgR3JlZW53YXlcIlxyXG4vLyAgICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBsb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uJyk7XHJcbi8vICAgICBsb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcclxuLy8gICAgIGxvY2F0aW9uLmlubmVyVGV4dCA9IGluZm9UZXh0O1xyXG4vLyAgICAgcmV0dXJuIGxvY2F0aW9uO1xyXG4vLyB9XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==