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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* @font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./Tolkien.ttf') format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n   */\r\nbody {\r\n    margin: 0;\r\n    padding: 0px\r\n}\r\n\r\n#container {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#formSpace {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: #f8fafc;\r\n    background-color: #64748b;\r\n    padding: 10px;\r\n}\r\n\r\nh2 {\r\n    font-size: 2.5em;\r\n}\r\n\r\n.dragger {\r\n    width: 250px;\r\n    height: 30px;\r\n    background-color: #0f172a;\r\n}\r\n\r\n\r\n.button {\r\n    width: 200px;\r\n    height: 75px;\r\n    cursor: pointer;\r\n    background-color: #334155;\r\n    color: #f8fafc;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border-radius: 7px;\r\n}\r\n\r\n.button:hover {\r\n    filter: brightness(80%);\r\n    background-color: #64748b;\r\n    color: #f8fafc;\r\n}\r\n\r\n\r\n.button:active {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    box-shadow: 0 5px rgb(0, 0, 0);\r\n    transform: translateY(4px);\r\n}\r\n\r\n.project {\r\n    display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    padding: .5rem;\r\n    gap: 20px\r\n}\r\n\r\n#projecttitleBar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: .5rem;\r\n    gap: 4rem;\r\n    align-items: center;\r\n    \r\n   \r\n}\r\n\r\n.active {\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    background-color: #334155;\r\n    color:#f8fafc;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border: 2px solid #0f172a;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n    border: 3px solid blue\r\n}\r\n\r\n.inactive {\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    background-color: #334155;\r\n    color:#f8fafc;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border: 2px solid #0f172a;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n\r\n#display {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    background-color: #f1f5f9;\r\n    color: #0f172a;\r\n    padding: 10px;\r\n    gap: 20px;\r\n}\r\n.card {\r\n    border: 2px solid black;\r\n    background-color: #cbd5e1;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 5px;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 250px;\r\n    height: 200px;\r\n}\r\n\r\n.priorityColor {\r\n    width: 150px;\r\n    height: 15px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#High {\r\n    background-color: red;\r\n}\r\n\r\n#Medium {\r\n    background-color: yellow;\r\n}\r\n\r\n#Low {\r\n    background-color: green;\r\n}\r\n\r\n\r\n#content {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.label {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    width: 20rem;\r\n    color: #f8fafc;\r\n    padding: 15px;\r\n    gap: 5px;\r\n   background-color: #475569;\r\n    /* background-size: 100% 100%;\r\n    background-position: center center; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  \r\n    border-radius: 10px;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\r\n}\r\n\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item, .listItem {\r\n    /* font-family: 'MyFont'; */\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    width: 15rem;\r\n    color: black;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n   border: 4px solid #1e293b;\r\n   border-radius: 10px;\r\n   background-color: #f8fafc;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border: 4px solid #0f172a\r\n  }\r\n\r\n#description {\r\n    height: 5rem;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n/* @font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./Tolkien.ttf') format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n   */\r\nbody {\r\n    margin: 0;\r\n    padding: 0px\r\n}\r\n\r\n#container {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#formSpace {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n#header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: #f8fafc;\r\n    background-color: #64748b;\r\n    padding: 10px;\r\n}\r\n\r\nh2 {\r\n    font-size: 2.5em;\r\n}\r\n\r\n.dragger {\r\n    width: 250px;\r\n    height: 30px;\r\n    background-color: #0f172a;\r\n}\r\n\r\n\r\n.button {\r\n    width: 200px;\r\n    height: 75px;\r\n    cursor: pointer;\r\n    background-color: #334155;\r\n    color: #f8fafc;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border-radius: 7px;\r\n}\r\n\r\n.button:hover {\r\n    filter: brightness(80%);\r\n    background-color: #64748b;\r\n    color: #f8fafc;\r\n}\r\n\r\n\r\n.button:active {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    box-shadow: 0 5px rgb(0, 0, 0);\r\n    transform: translateY(4px);\r\n}\r\n\r\n.project {\r\n    display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    padding: .5rem;\r\n    gap: 20px\r\n}\r\n\r\n#projecttitleBar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: .5rem;\r\n    gap: 4rem;\r\n    align-items: center;\r\n    \r\n   \r\n}\r\n\r\n.active {\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    background-color: #334155;\r\n    color:#f8fafc;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border: 2px solid #0f172a;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n    border: 3px solid blue\r\n}\r\n\r\n.inactive {\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    background-color: #334155;\r\n    color:#f8fafc;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    border: 2px solid #0f172a;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n\r\n#display {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    background-color: #f1f5f9;\r\n    color: #0f172a;\r\n    padding: 10px;\r\n    gap: 20px;\r\n}\r\n.card {\r\n    border: 2px solid black;\r\n    background-color: #cbd5e1;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 5px;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 250px;\r\n    height: 200px;\r\n}\r\n\r\n.priorityColor {\r\n    width: 150px;\r\n    height: 15px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#High {\r\n    background-color: red;\r\n}\r\n\r\n#Medium {\r\n    background-color: yellow;\r\n}\r\n\r\n#Low {\r\n    background-color: green;\r\n}\r\n\r\n\r\n#content {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.label {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    width: 20rem;\r\n    color: #f8fafc;\r\n    padding: 15px;\r\n    gap: 5px;\r\n   background-color: #475569;\r\n    /* background-size: 100% 100%;\r\n    background-position: center center; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  \r\n    border-radius: 10px;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\r\n}\r\n\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item, .listItem {\r\n    /* font-family: 'MyFont'; */\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    width: 15rem;\r\n    color: black;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n   border: 4px solid #1e293b;\r\n   border-radius: 10px;\r\n   background-color: #f8fafc;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border: 4px solid #0f172a\r\n  }\r\n\r\n#description {\r\n    height: 5rem;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}"],"sourceRoot":""}]);
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



let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

let toDoArr = [];
let counter = 0;
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

const projectObj = {
    'Default': toDoArr
}
 

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
// const prancingPony = new Image();
// prancingPony.src = prancingPony2;
// prancingPony.id="ponyLogo";
// heading.appendChild(prancingPony);
}
createHeading();


// let note = createListItem();
// newItem(note.title);
// console.log(note);
// console.log(note.getTitle());
// console.log(note.title);

function createDefaultProject(){

const defaultProject = document.createElement('div');
defaultProject.setAttribute('id', 'projectSpace');
defaultProject.setAttribute('class', 'project');
container.appendChild(defaultProject);
let projecttitleBar = document.createElement('div');
projecttitleBar.setAttribute('id', 'projecttitleBar')
let projectTitle = document.createElement('div');
projectTitle.innerText = 'My Project'
//projectTitle.setAttribute('class', 'projectTitle');
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
    console.log(defaultProject);
    let newProject = document.createElement('div');
    newProject.setAttribute('class', 'active');
    defaultProject.removeAttribute('class', 'active')
    defaultProject.setAttribute('class', 'inactive')
    let newProjectTitle = document.getElementById('projectTitle').value;
    let newArr = []
   projectObj[newProjectTitle] = newArr
   console.log(projectObj);
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
        let card = document.createElement('div');
           card.setAttribute('class', 'card');
           card.setAttribute('id', `toDo_${currentProjectArray[i].number}`);
           display.appendChild(card);
           let priorityColor = document.createElement('div');
           priorityColor.setAttribute('class', 'priorityColor');
           priorityColor.setAttribute('id', currentProjectArray[i].priority);
            card.appendChild(priorityColor);

            let expandButton = document.createElement('button');
            expandButton.setAttribute('id', `expand_${currentProjectArray[i].number}`);
            expandButton.setAttribute('class', 'expandButton');
            expandButton.innerText = 'Expand View';
            card.appendChild(expandButton);

           card.appendChild(newItem(currentProjectArray[i].title));
           card.appendChild(newItem(currentProjectArray[i].dueDate));

           expandButton.onclick = () => {
            let details = document.createElement('div');
            details.setAttribute('id', 'details');
            details.innerText = currentProjectArray[i].description;
            card.appendChild(details);
            card.appendChild(collapseButton);
            card.removeChild(expandButton);

            collapseButton.onclick = () => {
                card.removeChild(details);
                card.removeChild(collapseButton);
                card.appendChild(expandButton);
            };
       }
       let collapseButton = document.createElement('button');
           collapseButton.setAttribute('id', `collapse_${currentProjectArray[i].number}`);
           collapseButton.setAttribute('class', 'button');
           collapseButton.innerText = 'Collapse View';
           cardDrag();
    }
}

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
    addtoProject();
    //toDoArr.forEach(addtoProject);
        }

    // function displayCards() {
    // }
    //addtoProject(newItem);
    // console.log(toDoArr);
    // console.log(newItem);
 
   
    // localStorage.setItem( `item ${counter}`, JSON.stringify(item) );
    // console.log( JSON.parse( localStorage.getItem( `item ${counter}` ) ) );
   //return item;


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

function addtoProject(){
    // let cardSpace = document.getElementById('display')
    //         let currentNumber = counter -1;
    //        console.log(toDoArr[currentNumber].title);
    //        let card = document.createElement('div');
    //        card.setAttribute('class', 'card');
    //        card.setAttribute('id', `toDo_${toDoArr[currentNumber].number}`);
    //        cardSpace.appendChild(card);

    //        let dragger = document.createElement('div');
    //        dragger.setAttribute('class', 'dragger');
    //         dragger.setAttribute('id', toDoArr[currentNumber].number)
    //         card.appendChild(dragger);

    //        let priorityColor = document.createElement('div');
    //        priorityColor.setAttribute('class', 'priorityColor');
    //        priorityColor.setAttribute('id', toDoArr[currentNumber].priority);
    //         card.appendChild(priorityColor);

    //        card.appendChild(newItem(toDoArr[currentNumber].title));
    //        card.appendChild(newItem(toDoArr[currentNumber].dueDate));

    //        let expandButton = document.createElement('button');
    //        expandButton.setAttribute('id', `expand_${toDoArr[currentNumber].number}`);
    //        expandButton.setAttribute('class', 'button');
    //        expandButton.innerText = 'Expand View';
    //        card.appendChild(expandButton);
    //        expandButton.onclick = () => {
    //             let details = document.createElement('div');
    //             details.setAttribute('id', 'details');
    //             details.innerText = toDoArr[currentNumber].description;
    //             card.appendChild(details);
    //             card.appendChild(collapseButton);
    //             card.removeChild(expandButton);

    //             collapseButton.onclick = () => {
    //                 card.removeChild(details);
    //                 card.removeChild(collapseButton);
    //                 card.appendChild(expandButton);
    //             };
    //        }
    //        let collapseButton = document.createElement('button');
    //        collapseButton.setAttribute('id', `collapse_${toDoArr[currentNumber].number}`);
    //        collapseButton.setAttribute('class', 'button');
    //        collapseButton.innerText = 'Collapse View';
    //        cardDrag();



        //}
       // let currentProject = document.getElementById('default')
       // let currentItem = toDoArr[]
}


function cardDrag() {

let card = document.querySelector('.card');
console.log(card);
card.onmousedown = function(event) {

    let shiftX = event.clientX - card.getBoundingClientRect().left;
    let shiftY = event.clientY - card.getBoundingClientRect().top;

    card.style.position = 'absolute';
    card.style.zIndex = 1000;
    document.body.append(card);

    moveCard(event.pageX, event.pageY);

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
        let droppableBelow = elemBelow.closest('.projectTitle');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        enterDroppable(currentDroppable);
    }}}

    document.addEventListener('mousemove', onMouseMove);
    card.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        card.onmouseup = null;
      };
    };

function enterDroppable(elem) {
    elem.style.background = 'pink';
   // let currentItem = document.getElementById('')
   //idnum = dragger.attr('id');
   //console.log(idnum);
   let itemNumber = dragger.attributes['id'].value;
   let projectDrop = elem.attributes['id'].value;
   toDoArr[itemNumber].project = projectDrop;
   card.onmouseup = function() {
    card.remove()
    document.removeEventListener('mousemove', onMouseMove);
   }
   console.log(toDoArr[itemNumber]);
   console.log(toDoArr);
  }

  function leaveDroppable(elem) {
   // document.removeEventListener('mousemove', onMouseMove);
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
    
    // let viewButton = document.createElement('button');
    // viewButton.setAttribute('id', 'addTodo');
    // viewButton.setAttribute('class', 'button');
    // viewButton.innerText = 'View new Item';
   // defaultProject.appendChild(viewButton);
   // viewButton.addEventListener('click', projectItems);

clearStorage();

let i;

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}



function clearStorage() {
    window.localStorage.clear;
    localStorage.removeItem('item 1');
    localStorage.removeItem('item 2');
}

// function removeElements() {
//     let element = document.getElementById('content');
//     while (element.firstChild) {
//         element.removeChild(element.firstChild);
//     }
// }


// let homepageButton = document.createElement('button');
// homepageButton.innerText = "Home";
// homepageButton.setAttribute('id', 'homebutton');
// homepageButton.setAttribute('class', 'linkButton');
// heading.appendChild(homepageButton);
// homepageButton.addEventListener('click', removeElements);
// homepageButton.addEventListener('click', createHomepage);

// let menuButton = document.createElement('button');
// menuButton.innerText = "Menu";
// menuButton.setAttribute('id', 'menubutton');
// menuButton.setAttribute('class', 'linkButton');
// heading.appendChild(menuButton);
// menuButton.addEventListener('click', removeElements);
// menuButton.addEventListener('click', createMenu);

// let contactButton = document.createElement('button');
// contactButton.innerText = "Contact";
// contactButton.setAttribute('id', 'contactbutton');
// contactButton.setAttribute('class', 'linkButton');
// heading.appendChild(contactButton);
// contactButton.addEventListener('click', removeElements);
// contactButton.addEventListener('click', createContact);

// createHomepage();




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDhDQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUlBO0FBQzZDO0FBQzdDLFdBQVcsWUFBWTtBQUN2QixXQUFXLGVBQWU7QUFDTDtBQUNyQjtBQUN1QztBQUN0QjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnREFBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw4QkFBOEI7QUFDdEYsb0RBQW9ELDBCQUEwQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0EsMkNBQTJDLDhCQUE4QjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw4QkFBOEI7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsOEJBQThCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFFBQVE7QUFDN0MsOERBQThELFFBQVE7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdEQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw4QkFBOEI7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOEJBQThCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCw4QkFBOEI7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUJBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyQkFBMkI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pldUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9saXN0SXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4vKiBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9Ub2xraWVuLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgfVxcclxcbiAgICovXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMHB4XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jZm9ybVNwYWNlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgY29sb3I6ICMwZjE3MmE7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBnYXA6IDIwcHhcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3R0aXRsZUJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgcGFkZGluZzogLjdyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcXHJcXG4gICAgY29sb3I6I2Y4ZmFmYztcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzBmMTcyYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmx1ZVxcclxcbn1cXHJcXG5cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxyXFxuICAgIGNvbG9yOiNmOGZhZmM7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbiNkaXNwbGF5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5jYXJkIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHlDb2xvciB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jSGlnaCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI01lZGl1bSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuI0xvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAzNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICB3aWR0aDogMzVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMjBweCA1cHggMTBweCwgcmdiKDAgMCAwIC8gMzAlKSA1cHggMTBweCAwcHggLTEwcHgsIHJnYigwIDAgMCAvIDIwJSkgNnB4IC01cHggMThweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLCAubGlzdEl0ZW0ge1xcclxcbiAgICAvKiBmb250LWZhbWlseTogJ015Rm9udCc7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICBib3JkZXI6IDRweCBzb2xpZCAjMWUyOTNiO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwZjE3MmFcXHJcXG4gIH1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb24ge1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7Ozs7OztJQU1JO0FBQ0o7SUFDSSxTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsU0FBUztJQUNULG1CQUFtQjs7O0FBR3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0Qyx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGFBQWE7SUFDYixTQUFTO0FBQ2I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLFFBQVE7R0FDVCx5QkFBeUI7SUFDeEI7eUNBQ3FDO0lBQ3JDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLHFIQUFxSDtBQUN6SDs7O0FBR0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7R0FDRyx5QkFBeUI7R0FDekIsbUJBQW1CO0dBQ25CLHlCQUF5QjtBQUM1Qjs7QUFFQTtJQUNJO0VBQ0Y7O0FBRUY7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4vKiBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9Ub2xraWVuLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgfVxcclxcbiAgICovXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMHB4XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jZm9ybVNwYWNlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgY29sb3I6ICMwZjE3MmE7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBnYXA6IDIwcHhcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3R0aXRsZUJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgcGFkZGluZzogLjdyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcXHJcXG4gICAgY29sb3I6I2Y4ZmFmYztcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzBmMTcyYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmx1ZVxcclxcbn1cXHJcXG5cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxyXFxuICAgIGNvbG9yOiNmOGZhZmM7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbiNkaXNwbGF5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5jYXJkIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHlDb2xvciB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jSGlnaCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI01lZGl1bSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuI0xvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAzNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICB3aWR0aDogMzVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMjBweCA1cHggMTBweCwgcmdiKDAgMCAwIC8gMzAlKSA1cHggMTBweCAwcHggLTEwcHgsIHJnYigwIDAgMCAvIDIwJSkgNnB4IC01cHggMThweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLCAubGlzdEl0ZW0ge1xcclxcbiAgICAvKiBmb250LWZhbWlseTogJ015Rm9udCc7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICBib3JkZXI6IDRweCBzb2xpZCAjMWUyOTNiO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwZjE3MmFcXHJcXG4gIH1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb24ge1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQge2NyZWF0ZUZvcm19O1xyXG5pbXBvcnQgeyBhZGR0b0RvIH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xyXG5sZXQgZm9ybVNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TcGFjZScpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XHJcbmFkZEJ1dHRvbi5pbm5lclRleHQgPSAnSGlkZSc7XHJcbmFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUZvcm0pO1xyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRm9ybSk7XHJcbmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayBmbGV4JztcclxuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcclxuZm9ybVNwYWNlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwnKVxyXG4gdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnSXRlbSBUaXRsZSdcclxuIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG4gdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xyXG4gdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtJyk7XHJcbiB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiBsZXQgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xhYmVsJylcclxuIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ0l0ZW0gRGVzY3JpcHRpb24nXHJcbiBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxuIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcclxuIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbScpO1xyXG4gZGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gbGV0IGR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiBkdWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xhYmVsJylcclxuIGR1ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgRGF0ZSdcclxuIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHVlTGFiZWwpO1xyXG4gbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXHJcbiBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xyXG4gZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxuIGR1ZUxhYmVsLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG5cclxuIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd3JhcHBlcicpO1xyXG4gd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xhYmVsJyk7XHJcbiB3cmFwcGVyLmlubmVyVGV4dCA9ICdTZXQgUHJpb3JpdHkgZm9yIEl0ZW0nXHJcbiBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuIGxldCBvcHRpb25zID0ge1xyXG4gICAgXCJIaWdoXCI6IGZhbHNlLFxyXG4gICAgXCJNZWRpdW1cIjogZmFsc2UsXHJcbiAgICBcIkxvd1wiOiBmYWxzZSxcclxuIH1cclxuXHJcblxyXG5mb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0ga2V5O1xyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgIGlucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgaW5wdXQudmFsdWUgPSBrZXk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcclxufVxyXG5cclxubGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jylcclxuc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKHN1Ym1pdCk7XHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZHRvRG8pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGlkZUZvcm0oKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb250ZW50LnJlbW92ZSgpO1xyXG4gICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9kb1wiKTtcclxuICAgIGFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVGb3JtKTtcclxuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIG5ldyBJdGVtJztcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUZvcm0pO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVJdGVtKHN0cmluZywgaWQpIHtcclxuLy8gICAgIGxldCB0aXRsZSA9IHN0cmluZztcclxuLy8gICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbi8vICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbScpO1xyXG4vLyAgICAgaXRlbS5pbm5lclRleHQgPSB0aXRsZTtcclxuLy8gICAgIHJldHVybiBpdGVtO1xyXG4vLyAgfVxyXG4gXHJcbi8vICBmdW5jdGlvbiBjcmVhdGVUaXRsZShzdHJpbmcpIHtcclxuLy8gICAgIGxldCB0aXRsZVRleHQgPSBzdHJpbmc7XHJcbi8vICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcclxuLy8gICAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcclxuLy8gICAgIHJldHVybiB0aXRsZTtcclxuLy8gIH1cclxuIFxyXG4vLyAgZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oc3RyaW5nKSB7XHJcbi8vICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xyXG4vLyAgICAgdGl0bGUuaW5uZXJUZXh0ID0gc3RyaW5nO1xyXG4vLyAgICAgcmV0dXJuIHRpdGxlO1xyXG4vLyAgfVxyXG4gXHJcbi8vICBmdW5jdGlvbiBjcmVhdGVJbWFnZShzdHJpbmcsIGlkKXtcclxuLy8gICAgIGxldCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgbmV3SW1hZ2Uuc3JjID0gc3RyaW5nO1xyXG4vLyAgICAgbmV3SW1hZ2UuaWQgPSBpZDtcclxuLy8gICAgIG5ld0ltYWdlLmNsYXNzTmFtZSA9ICdpbWFnZSc7XHJcbi8vICAgICByZXR1cm4gbmV3SW1hZ2U7XHJcbi8vICB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVDb250YWN0ICgpIHtcclxuLy8gICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbi8vICAgICBsZXQgY29udGFjdFRpdGxlID0gY3JlYXRlVGl0bGUoJ0NvbnRhY3QgVXMnKTtcclxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcclxuXHJcbi8vICAgICBsZXQgYmFybGltYW5DYXJkID0gY3JlYXRlSXRlbSgnQmFybGltYW4gQnV0dGVyYnVyJywgJ2JhcmxpbWFuJylcclxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFybGltYW5DYXJkKTtcclxuLy8gICAgIGxldCBiYXJsaW1hbkltYWdlID0gY3JlYXRlSW1hZ2UoYmFybGltYW4sICdiYXJsaW1hbicpO1xyXG4vLyAgICAgYmFybGltYW5DYXJkLmFwcGVuZENoaWxkKGJhcmxpbWFuSW1hZ2UpO1xyXG4vLyAgICAgbGV0IGJhcmxpbWFuVGV4dCA9IGNyZWF0ZURlc2NyaXB0aW9uKCdJbm5rZWVwIC0gQkJidXJAYnJlZWxhbmQubmV0Jyk7XHJcbi8vICAgICBiYXJsaW1hbkNhcmQuYXBwZW5kQ2hpbGQoYmFybGltYW5UZXh0KTtcclxuXHJcbi8vICAgICBsZXQgbm9iQ2FyZCA9IGNyZWF0ZUl0ZW0oJ05vYicsICdub2InKVxyXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChub2JDYXJkKTtcclxuLy8gICAgIGxldCBub2JJbWFnZSA9IGNyZWF0ZUltYWdlKG5vYiwgJ25vYicpO1xyXG4vLyAgICAgbm9iQ2FyZC5hcHBlbmRDaGlsZChub2JJbWFnZSk7XHJcbi8vICAgICBsZXQgbm9iVGV4dCA9IGNyZWF0ZURlc2NyaXB0aW9uKCdDb29rIC0gc2xvd2NvYWNoMUBicmVlbGFuZC5uZXQnKTtcclxuLy8gICAgIG5vYkNhcmQuYXBwZW5kQ2hpbGQobm9iVGV4dCk7XHJcblxyXG4vLyB9ICIsIlxyXG5pbXBvcnQge2NyZWF0ZUxpc3RJdGVtfSBmcm9tICcuL2xpc3RJdGVtLmpzJztcclxuLy8gaW1wb3J0IHtjcmVhdGVNZW51fSBmcm9tICcuL21lbnUuanMnO1xyXG4vLyBpbXBvcnQge2NyZWF0ZUNvbnRhY3R9IGZyb20gJy4vY29udGFjdC5qcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG4vLyBpbXBvcnQgcHJhbmNpbmdQb255MiBmcm9tICcuL3ByYW5jaW5nUG9ueS5wbmcnO1xyXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9mb3JtLmpzJztcclxuZXhwb3J0IHthZGR0b0RvfTtcclxuXHJcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyJyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbmxldCB0b0RvQXJyID0gW107XHJcbmxldCBjb3VudGVyID0gMDtcclxubGV0IHByb2plY3RBcnIgPSBbXTtcclxuXHJcblxyXG5jbGFzcyBsaXN0SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihudW1iZXIsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgICB0aGlzLm51bWJlciA9IG51bWJlclxyXG4gICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIH1cclxuICAgICBnZXRUaXRsZSgpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICAgfVxyXG4gICAgIGdldE51bWJlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXI7XHJcbiAgICB9XHJcbiB9XHJcblxyXG5jb25zdCBwcm9qZWN0T2JqID0ge1xyXG4gICAgJ0RlZmF1bHQnOiB0b0RvQXJyXHJcbn1cclxuIFxyXG5cclxuLy9jb25zdCBwcm9qZWN0T2JqID0gbmV3IFByb2plY3RPYmooJ0RlZmF1bHQnLCB0b0RvQXJyKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmcoKSB7XHJcbmxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcclxubGV0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG53ZWxjb21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VsY29tZScpXHJcbndlbGNvbWUuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8geW91ciBQcm9qZWN0cydcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG5oZWFkaW5nLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xyXG5sZXQgZm9ybVNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmZvcm1TcGFjZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1TcGFjZScpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVNwYWNlKTtcclxuLy8gY29uc3QgcHJhbmNpbmdQb255ID0gbmV3IEltYWdlKCk7XHJcbi8vIHByYW5jaW5nUG9ueS5zcmMgPSBwcmFuY2luZ1BvbnkyO1xyXG4vLyBwcmFuY2luZ1BvbnkuaWQ9XCJwb255TG9nb1wiO1xyXG4vLyBoZWFkaW5nLmFwcGVuZENoaWxkKHByYW5jaW5nUG9ueSk7XHJcbn1cclxuY3JlYXRlSGVhZGluZygpO1xyXG5cclxuXHJcbi8vIGxldCBub3RlID0gY3JlYXRlTGlzdEl0ZW0oKTtcclxuLy8gbmV3SXRlbShub3RlLnRpdGxlKTtcclxuLy8gY29uc29sZS5sb2cobm90ZSk7XHJcbi8vIGNvbnNvbGUubG9nKG5vdGUuZ2V0VGl0bGUoKSk7XHJcbi8vIGNvbnNvbGUubG9nKG5vdGUudGl0bGUpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKXtcclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRlZmF1bHRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdFNwYWNlJyk7XHJcbmRlZmF1bHRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCcpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3QpO1xyXG5sZXQgcHJvamVjdHRpdGxlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnByb2plY3R0aXRsZUJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3R0aXRsZUJhcicpXHJcbmxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucHJvamVjdFRpdGxlLmlubmVyVGV4dCA9ICdNeSBQcm9qZWN0J1xyXG4vL3Byb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RUaXRsZScpO1xyXG5wcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcclxucHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnRGVmYXVsdCcpO1xyXG5kZWZhdWx0UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0dGl0bGVCYXIpO1xyXG5wcm9qZWN0dGl0bGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxubGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5hZGRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUb2RvJyk7XHJcbmFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5hZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBuZXcgSXRlbSc7XHJcbnByb2plY3R0aXRsZUJhci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG5sZXQgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdEJ1dHRvbicpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbm5ld1Byb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0NyZWF0ZSBOZXcgUHJvamVjdCc7XHJcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdQcm9qZWN0KTtcclxucHJvamVjdHRpdGxlQmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVGb3JtKTtcclxubGV0IGNhcmRTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jYXJkU3BhY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdkaXNwbGF5Jyk7XHJcbmRlZmF1bHRQcm9qZWN0LmFwcGVuZENoaWxkKGNhcmRTcGFjZSk7XHJcbn1cclxuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKXtcclxuXHJcbmxldCBmb3JtU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVNwYWNlJyk7XHJcbmxldCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RCdXR0b24nKTtcclxubmV3UHJvamVjdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld1Byb2plY3QpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdIaWRlJ1xyXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVByb2plY3RGb3JtKTtcclxubGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdEZvcm0nKTtcclxubmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtJyk7XHJcblxyXG5sZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG50aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwnKVxyXG50aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0IFRpdGxlJ1xyXG5uZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxubGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG50aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RUaXRsZScpO1xyXG50aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxudGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG5sZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxyXG5zdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0U3VibWl0Jyk7XHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5uZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG5mb3JtU3BhY2UuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pXHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZG5ld1Byb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjdXJyZW50UHJvamVjdCgpe1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0XHJcbiAgICB9XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hQcm9qZWN0KGVsZW0pe1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgY3VycmVudFByb2plY3QucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKVxyXG4gICAgY3VycmVudFByb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmFjdGl2ZScpXHJcbiAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5hY3RpdmUnKVxyXG4gICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpXHJcbiAgICBhZGRDYXJkcygpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZG5ld1Byb2plY3QoKXtcclxuICAgIGxldCB0aXRsZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0dGl0bGVCYXInKTtcclxuICAgIGxldCBkZWZhdWx0UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpO1xyXG4gICAgZGVmYXVsdFByb2plY3QucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKVxyXG4gICAgZGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmFjdGl2ZScpXHJcbiAgICBsZXQgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpLnZhbHVlO1xyXG4gICAgbGV0IG5ld0FyciA9IFtdXHJcbiAgIHByb2plY3RPYmpbbmV3UHJvamVjdFRpdGxlXSA9IG5ld0FyclxyXG4gICBjb25zb2xlLmxvZyhwcm9qZWN0T2JqKTtcclxuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIG5ld1Byb2plY3RUaXRsZSk7XHJcbiAgICBuZXdQcm9qZWN0LmlubmVyVGV4dCA9IG5ld1Byb2plY3RUaXRsZTtcclxuICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG4gICAgZGVmYXVsdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe3N3aXRjaFByb2plY3QoZGVmYXVsdFByb2plY3QpfSlcclxuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe3N3aXRjaFByb2plY3QobmV3UHJvamVjdCl9KVxyXG4gICAvLyBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3VycmVudFByb2plY3QobmV3UHJvamVjdFRpdGxlKSk7XHJcbiAgICAvL25ld1Byb2plY3Qub25jbGljayA9IGN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBoaWRlUHJvamVjdEZvcm0oKTtcclxuICAgIC8vcmV0dXJuIG5ld3Byb2plY3RPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Rm9ybScpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0ucmVtb3ZlKCk7XHJcbiAgICBsZXQgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ1dHRvblwiKTtcclxuICAgIG5ld1Byb2plY3RCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlUHJvamVjdEZvcm0pO1xyXG4gICAgbmV3UHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ3JlYXRlIE5ldyBQcm9qZWN0JztcclxuICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdQcm9qZWN0KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ2FyZHMoKSB7XHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcbiAgICBsZXQgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0LmF0dHJpYnV0ZXNbJ2lkJ10udmFsdWU7XHJcbiAgICBsZXQgY3VycmVudFByb2plY3RBcnJheSA9IHByb2plY3RPYmpbdGl0bGVdO1xyXG4gICAgbGV0IGFsbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcclxuICAgIGlmIChhbGxDYXJkcy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsQ2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWxsQ2FyZHNbaV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4gICAgICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGB0b0RvXyR7Y3VycmVudFByb2plY3RBcnJheVtpXS5udW1iZXJ9YCk7XHJcbiAgICAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICAgICBsZXQgcHJpb3JpdHlDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eUNvbG9yJyk7XHJcbiAgICAgICAgICAgcHJpb3JpdHlDb2xvci5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VycmVudFByb2plY3RBcnJheVtpXS5wcmlvcml0eSk7XHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb2xvcik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGV4cGFuZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGV4cGFuZF8ke2N1cnJlbnRQcm9qZWN0QXJyYXlbaV0ubnVtYmVyfWApO1xyXG4gICAgICAgICAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRCdXR0b24nKTtcclxuICAgICAgICAgICAgZXhwYW5kQnV0dG9uLmlubmVyVGV4dCA9ICdFeHBhbmQgVmlldyc7XHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChuZXdJdGVtKGN1cnJlbnRQcm9qZWN0QXJyYXlbaV0udGl0bGUpKTtcclxuICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG5ld0l0ZW0oY3VycmVudFByb2plY3RBcnJheVtpXS5kdWVEYXRlKSk7XHJcblxyXG4gICAgICAgICAgIGV4cGFuZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGV0YWlscycpO1xyXG4gICAgICAgICAgICBkZXRhaWxzLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0QXJyYXlbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY29sbGFwc2VCdXR0b24pO1xyXG4gICAgICAgICAgICBjYXJkLnJlbW92ZUNoaWxkKGV4cGFuZEJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBjb2xsYXBzZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZC5yZW1vdmVDaGlsZChkZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoY29sbGFwc2VCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgfVxyXG4gICAgICAgbGV0IGNvbGxhcHNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGBjb2xsYXBzZV8ke2N1cnJlbnRQcm9qZWN0QXJyYXlbaV0ubnVtYmVyfWApO1xyXG4gICAgICAgICAgIGNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgY29sbGFwc2VCdXR0b24uaW5uZXJUZXh0ID0gJ0NvbGxhcHNlIFZpZXcnO1xyXG4gICAgICAgICAgIGNhcmREcmFnKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFkZHMgVG8gRG8gaXRlbXMgZnJvbSBGb3JtIGludG8gTGlzdCBJdGVtIE9iamVjdHMsIHRoZW4gYWRkcyB0aGVtIHRvIGFwcHJvcHJpYXRlIFByb2plY3QgQXJyYXkgYWZ0ZXIgZm9ybSBTdWJtaXQgQnV0dG9uIGlzIGNsaWNrZWRcclxuZnVuY3Rpb24gYWRkdG9EbygpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcclxuICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3QuYXR0cmlidXRlc1snaWQnXS52YWx1ZTtcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdJyk7XHJcbiAgICBsZXQgc2VsZWN0ZWRTaXplO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJhZGlvQnV0dG9uIG9mIHJhZGlvQnV0dG9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNpemUgPSByYWRpb0J1dHRvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgbGV0IG5ld0l0ZW0gPSBuZXcgbGlzdEl0ZW0oY291bnRlciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBzZWxlY3RlZFNpemUsIHByb2plY3ROYW1lKTtcclxuICAgIHByb2plY3RPYmpbcHJvamVjdE5hbWVdLnB1c2gobmV3SXRlbSk7XHJcbiAgICByZW1vdmVGb3JtKCk7XHJcbiAgICBjb3VudGVyKys7XHJcbiAgICBhZGRDYXJkcygpO1xyXG4gICAgYWRkdG9Qcm9qZWN0KCk7XHJcbiAgICAvL3RvRG9BcnIuZm9yRWFjaChhZGR0b1Byb2plY3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBkaXNwbGF5Q2FyZHMoKSB7XHJcbiAgICAvLyB9XHJcbiAgICAvL2FkZHRvUHJvamVjdChuZXdJdGVtKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRvRG9BcnIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobmV3SXRlbSk7XHJcbiBcclxuICAgXHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggYGl0ZW0gJHtjb3VudGVyfWAsIEpTT04uc3RyaW5naWZ5KGl0ZW0pICk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyggSlNPTi5wYXJzZSggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIGBpdGVtICR7Y291bnRlcn1gICkgKSApO1xyXG4gICAvL3JldHVybiBpdGVtO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XHJcbiAgICBsZXQgdGl0bGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHRpdGxlQmFyJylcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIC8vY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY29udGVudC5yZW1vdmUoKTtcclxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XHJcbiAgICBhZGRCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVG9kbycpO1xyXG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBuZXcgSXRlbSc7XHJcbiAgICB0aXRsZUJhci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlRm9ybSk7XHJcbiAgICAvL2N1cnJlbnRQcm9qZWN0LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGR0b1Byb2plY3QoKXtcclxuICAgIC8vIGxldCBjYXJkU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpXHJcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50TnVtYmVyID0gY291bnRlciAtMTtcclxuICAgIC8vICAgICAgICBjb25zb2xlLmxvZyh0b0RvQXJyW2N1cnJlbnROdW1iZXJdLnRpdGxlKTtcclxuICAgIC8vICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbiAgICAvLyAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRvRG9fJHt0b0RvQXJyW2N1cnJlbnROdW1iZXJdLm51bWJlcn1gKTtcclxuICAgIC8vICAgICAgICBjYXJkU3BhY2UuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcblxyXG4gICAgLy8gICAgICAgIGxldCBkcmFnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyAgICAgICAgZHJhZ2dlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RyYWdnZXInKTtcclxuICAgIC8vICAgICAgICAgZHJhZ2dlci5zZXRBdHRyaWJ1dGUoJ2lkJywgdG9Eb0FycltjdXJyZW50TnVtYmVyXS5udW1iZXIpXHJcbiAgICAvLyAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHJhZ2dlcik7XHJcblxyXG4gICAgLy8gICAgICAgIGxldCBwcmlvcml0eUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyAgICAgICAgcHJpb3JpdHlDb2xvci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5Q29sb3InKTtcclxuICAgIC8vICAgICAgICBwcmlvcml0eUNvbG9yLnNldEF0dHJpYnV0ZSgnaWQnLCB0b0RvQXJyW2N1cnJlbnROdW1iZXJdLnByaW9yaXR5KTtcclxuICAgIC8vICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eUNvbG9yKTtcclxuXHJcbiAgICAvLyAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChuZXdJdGVtKHRvRG9BcnJbY3VycmVudE51bWJlcl0udGl0bGUpKTtcclxuICAgIC8vICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG5ld0l0ZW0odG9Eb0FycltjdXJyZW50TnVtYmVyXS5kdWVEYXRlKSk7XHJcblxyXG4gICAgLy8gICAgICAgIGxldCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIC8vICAgICAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGBleHBhbmRfJHt0b0RvQXJyW2N1cnJlbnROdW1iZXJdLm51bWJlcn1gKTtcclxuICAgIC8vICAgICAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24nKTtcclxuICAgIC8vICAgICAgICBleHBhbmRCdXR0b24uaW5uZXJUZXh0ID0gJ0V4cGFuZCBWaWV3JztcclxuICAgIC8vICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XHJcbiAgICAvLyAgICAgICAgZXhwYW5kQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gICAgICAgICAgICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RldGFpbHMnKTtcclxuICAgIC8vICAgICAgICAgICAgIGRldGFpbHMuaW5uZXJUZXh0ID0gdG9Eb0FycltjdXJyZW50TnVtYmVyXS5kZXNjcmlwdGlvbjtcclxuICAgIC8vICAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgICAvLyAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNvbGxhcHNlQnV0dG9uKTtcclxuICAgIC8vICAgICAgICAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoZXhwYW5kQnV0dG9uKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBjb2xsYXBzZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNhcmQucmVtb3ZlQ2hpbGQoZGV0YWlscyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2FyZC5yZW1vdmVDaGlsZChjb2xsYXBzZUJ1dHRvbik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xyXG4gICAgLy8gICAgICAgICAgICAgfTtcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgbGV0IGNvbGxhcHNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAvLyAgICAgICAgY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGBjb2xsYXBzZV8ke3RvRG9BcnJbY3VycmVudE51bWJlcl0ubnVtYmVyfWApO1xyXG4gICAgLy8gICAgICAgIGNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbiAgICAvLyAgICAgICAgY29sbGFwc2VCdXR0b24uaW5uZXJUZXh0ID0gJ0NvbGxhcHNlIFZpZXcnO1xyXG4gICAgLy8gICAgICAgIGNhcmREcmFnKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy99XHJcbiAgICAgICAvLyBsZXQgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVmYXVsdCcpXHJcbiAgICAgICAvLyBsZXQgY3VycmVudEl0ZW0gPSB0b0RvQXJyW11cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNhcmREcmFnKCkge1xyXG5cclxubGV0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpO1xyXG5jb25zb2xlLmxvZyhjYXJkKTtcclxuY2FyZC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgbGV0IHNoaWZ0WCA9IGV2ZW50LmNsaWVudFggLSBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICBsZXQgc2hpZnRZID0gZXZlbnQuY2xpZW50WSAtIGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuICAgIGNhcmQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgY2FyZC5zdHlsZS56SW5kZXggPSAxMDAwO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FyZCk7XHJcblxyXG4gICAgbW92ZUNhcmQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlQ2FyZChwYWdlWCwgcGFnZVkpIHtcclxuICAgICAgICBjYXJkLnN0eWxlLmxlZnQgPSBwYWdlWCAtIHNoaWZ0WCArICdweCc7XHJcbiAgICAgICAgY2FyZC5zdHlsZS50b3AgPSBwYWdlWSAtIHNoaWZ0WSArICdweCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICBsZXQgY3VycmVudERyb3BwYWJsZSA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgICAgICBtb3ZlQ2FyZChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xyXG5cclxuICAgICAgICBjYXJkLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IGVsZW1CZWxvdyA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcbiAgICAgICAgY2FyZC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAoIWVsZW1CZWxvdykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBkcm9wcGFibGVCZWxvdyA9IGVsZW1CZWxvdy5jbG9zZXN0KCcucHJvamVjdFRpdGxlJyk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUgIT0gZHJvcHBhYmxlQmVsb3cpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcclxuICAgICAgICAgICAgICAgIGxlYXZlRHJvcHBhYmxlKGN1cnJlbnREcm9wcGFibGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnREcm9wcGFibGUgPSBkcm9wcGFibGVCZWxvdztcclxuICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcclxuICAgICAgICBlbnRlckRyb3BwYWJsZShjdXJyZW50RHJvcHBhYmxlKTtcclxuICAgIH19fVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIGNhcmQub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgICAgIGNhcmQub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG5mdW5jdGlvbiBlbnRlckRyb3BwYWJsZShlbGVtKSB7XHJcbiAgICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAncGluayc7XHJcbiAgIC8vIGxldCBjdXJyZW50SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcnKVxyXG4gICAvL2lkbnVtID0gZHJhZ2dlci5hdHRyKCdpZCcpO1xyXG4gICAvL2NvbnNvbGUubG9nKGlkbnVtKTtcclxuICAgbGV0IGl0ZW1OdW1iZXIgPSBkcmFnZ2VyLmF0dHJpYnV0ZXNbJ2lkJ10udmFsdWU7XHJcbiAgIGxldCBwcm9qZWN0RHJvcCA9IGVsZW0uYXR0cmlidXRlc1snaWQnXS52YWx1ZTtcclxuICAgdG9Eb0FycltpdGVtTnVtYmVyXS5wcm9qZWN0ID0gcHJvamVjdERyb3A7XHJcbiAgIGNhcmQub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjYXJkLnJlbW92ZSgpXHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgIH1cclxuICAgY29uc29sZS5sb2codG9Eb0FycltpdGVtTnVtYmVyXSk7XHJcbiAgIGNvbnNvbGUubG9nKHRvRG9BcnIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbGVhdmVEcm9wcGFibGUoZWxlbSkge1xyXG4gICAvLyBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAnJztcclxuICB9XHJcblxyXG5jYXJkLm9uZHJhZ3N0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7fTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBuZXdJdGVtKHN0cmluZykge1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0SXRlbScpO1xyXG4gICAgaXRlbS5pbm5lclRleHQgPSBzdHJpbmc7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gbGV0IHZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIC8vIHZpZXdCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUb2RvJyk7XHJcbiAgICAvLyB2aWV3QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbiAgICAvLyB2aWV3QnV0dG9uLmlubmVyVGV4dCA9ICdWaWV3IG5ldyBJdGVtJztcclxuICAgLy8gZGVmYXVsdFByb2plY3QuYXBwZW5kQ2hpbGQodmlld0J1dHRvbik7XHJcbiAgIC8vIHZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0SXRlbXMpO1xyXG5cclxuY2xlYXJTdG9yYWdlKCk7XHJcblxyXG5sZXQgaTtcclxuXHJcbmNvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZVwiKTtcclxuZm9yIChpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykgICB7XHJcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2Uua2V5KGkpICsgXCI9W1wiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkgKyBcIl1cIik7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwic2Vzc2lvbiBzdG9yYWdlXCIpO1xyXG5mb3IgKGkgPSAwOyBpIDwgc2Vzc2lvblN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnNvbGUubG9nKHNlc3Npb25TdG9yYWdlLmtleShpKSArIFwiPVtcIiArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc2Vzc2lvblN0b3JhZ2Uua2V5KGkpKSArIFwiXVwiKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2l0ZW0gMScpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2l0ZW0gMicpO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiByZW1vdmVFbGVtZW50cygpIHtcclxuLy8gICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuLy8gICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuLy8gICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyBsZXQgaG9tZXBhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuLy8gaG9tZXBhZ2VCdXR0b24uaW5uZXJUZXh0ID0gXCJIb21lXCI7XHJcbi8vIGhvbWVwYWdlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZWJ1dHRvbicpO1xyXG4vLyBob21lcGFnZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpbmtCdXR0b24nKTtcclxuLy8gaGVhZGluZy5hcHBlbmRDaGlsZChob21lcGFnZUJ1dHRvbik7XHJcbi8vIGhvbWVwYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWxlbWVudHMpO1xyXG4vLyBob21lcGFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUhvbWVwYWdlKTtcclxuXHJcbi8vIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbi8vIG1lbnVCdXR0b24uaW5uZXJUZXh0ID0gXCJNZW51XCI7XHJcbi8vIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51YnV0dG9uJyk7XHJcbi8vIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaW5rQnV0dG9uJyk7XHJcbi8vIGhlYWRpbmcuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XHJcbi8vIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVFbGVtZW50cyk7XHJcbi8vIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVNZW51KTtcclxuXHJcbi8vIGxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbi8vIGNvbnRhY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XHJcbi8vIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0YnV0dG9uJyk7XHJcbi8vIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaW5rQnV0dG9uJyk7XHJcbi8vIGhlYWRpbmcuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XHJcbi8vIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVFbGVtZW50cyk7XHJcbi8vIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVDb250YWN0KTtcclxuXHJcbi8vIGNyZWF0ZUhvbWVwYWdlKCk7XHJcblxyXG5cclxuIiwiZXhwb3J0IHtjcmVhdGVMaXN0SXRlbX1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0oKSB7XHJcbiAgICBcclxuICAgIC8vIGxldCBpdGVtID0gbmV3IGxpc3RJdGVtKCd0aXRsZScsICd0aGlzIGlzJywgJzExLzInLCAnaGlnaCcpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIC8vIHJldHVybiBpdGVtXHJcblxyXG4gICAgLy8gbGV0IHRpdGxlID0gY3JlYXRlVGl0bGUoJ1RoZSBQcmFuY2luZyBQb255JylcclxuICAgIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgLy8gdGl0bGUuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGluZygpKTtcclxuXHJcbiAgICAvLyBsZXQgZm9vdGVyID0gY3JlYXRlVGl0bGUoJ0J5IEpBVUdTIDIwMjInKTtcclxuICAgIC8vIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xyXG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlSGVhZGluZygpIHtcclxuLy8gICAgICAgICBsZXQgdGl0bGUgPSBcIi0gYnkgQmFybGltYW4gQnV0dGVyYnVyXCI7XHJcbi8vICAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGluZycpO1xyXG4vLyAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbi8vICAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSB0aXRsZTtcclxuLy8gICAgICAgICByZXR1cm4gaGVhZGluZztcclxuLy8gICAgIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cmluZykge1xyXG4vLyAgICAgICAgIGxldCB0aXRsZVRleHQgPSBzdHJpbmc7XHJcbi8vICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xyXG4vLyAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcclxuLy8gICAgICAgICByZXR1cm4gdGl0bGU7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVRleHQoKSB7XHJcbi8vICAgICBsZXQgaW5mb1RleHQgPSBcIlRoZSBQcmFuY2luZyBQb255IGhhcyBiZWVuIGEgQnJlZWxhbmQgc3RhcGxlIGZvciBvdmVyIDMwMCB5ZWFycy4gQ29tZSBhbmQgc3RheSBpbiBvdXIgbW9zdCBjb21mb3J0YWJsZSByb29tcyAoaW5jbHVkaW5nIEhvYmJpdC1TaXplZCByb29tcykgd2hpbGUgZW5qb2luZyB0aGUgYmVzdCBmb29kIHdlc3Qgb2YgdGhlIE1pc3R5IE1vdW50YWlucyEgLSBCYXJsaW1hblwiO1xyXG4vLyAgICAgbGV0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBpbmZvMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RleHQnKTtcclxuLy8gICAgIGluZm8xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4vLyAgICAgaW5mbzEuaW5uZXJUZXh0ID0gaW5mb1RleHQ7XHJcbi8vICAgICByZXR1cm4gaW5mbzE7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZUhvdXJzKCkge1xyXG4vLyAgICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuLy8gICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG91ckxpc3QnKTtcclxuLy8gICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4vLyAgICAgICAgIGxldCBkYXRhID0gW1wiQnJlYWtmYXN0OiBzZXJ2ZWQgYXQgU3VucmlzZSBkYWlseVwiLCBcIlNlY29uZC1CcmVha2Zhc3Q6IHNlcnZlZCB0d28gaG91cnMgYWZ0ZXIgU3VucmlzZVwiLCBcIkx1bmNoZW9uOiBzZXJ2ZWQgYXQgaGlnaCBub29uXCIsIFwiU3VwcGVyOiBzZXJ2ZWQgYXQgU3Vuc2V0XCIsIFwiU3RhYmxlcyBhdmFpbGFibGUgdXBvbiByZXF1ZXN0XCJdXHJcbiAgXHJcbi8vICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbi8vICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuLy8gICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0SXRlbScpXHJcbi8vICAgICAgICAgICAgIGxpLmlubmVyVGV4dCA9IGl0ZW07XHJcbi8vICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIHJldHVybiBsaXN0O1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcclxuLy8gICAgIGxldCBpbmZvVGV4dCA9IFwiRmluZCB1cyBqdXN0IHBhc3QgdGhlIFdlc3QtR2F0ZSwgaW4gQnJlZSwgd2VzdCBvZiBDaGV0LXdvb2QsIG5vcnRoIGZyb20gdGhlIEdyZWVud2F5XCJcclxuLy8gICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgbG9jYXRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdsb2NhdGlvbicpO1xyXG4vLyAgICAgbG9jYXRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbi8vICAgICBsb2NhdGlvbi5pbm5lclRleHQgPSBpbmZvVGV4dDtcclxuLy8gICAgIHJldHVybiBsb2NhdGlvbjtcclxuLy8gfVxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=