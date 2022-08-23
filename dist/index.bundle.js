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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* @font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./Tolkien.ttf') format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n   */\r\nbody {\r\n    margin: 0;\r\n    padding: 0px;\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\n#container {\r\n    display: grid;\r\ngrid-template-columns: 1fr 6fr 6fr;\r\ngrid-template-rows: .5fr 2fr 3fr;\r\ngrid-template-areas: \r\n                    \"h h h\"\r\n                    \"s c c\"\r\n                    \"t c c\";\r\n}\r\n\r\n#formSpace {\r\n    grid-area: s;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding:.5rem;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 2rem;\r\n\r\n}\r\n\r\n#header {\r\n    grid-area: h;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: #f8fafc;\r\n    background-color: #475569;\r\n    padding: .5rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 1.8em;\r\n}\r\n\r\n.dragger {\r\n    width: 250px;\r\n    height: 30px;\r\n    background-color: #0f172a;\r\n}\r\n\r\n\r\n.button {\r\n    width: 14rem;\r\n    /* height: 75px; */\r\n    cursor: pointer;\r\n    background-color: #94a3b8;\r\n    color: #0f172a;\r\n    font-weight: 700;\r\n    font-size: 22px;\r\n    border-radius: 40px;\r\n    padding: 9px;\r\n    box-shadow: 0 2px #0f172a;\r\n\r\n}\r\n\r\n.button:hover {\r\n    background-color: #334155;\r\n    color: #f8fafc;\r\n}\r\n\r\n\r\n.button:active {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    transform: translateY(4px);\r\n}\r\n/* \r\n.project {\r\n    /* display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    padding: .5rem;\r\n    gap: 20px */\r\n\r\n\r\n#projecttitleBar {\r\n    grid-area: t;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: .5rem;\r\n    gap: 3rem;\r\n    align-items: center;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n}\r\n\r\n.titleField {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    border-bottom: 1px solid #0f172a;\r\n    padding-left: 3em;\r\n    padding-right: 3em;\r\n    padding-bottom: 0.3em;\r\n}\r\n\r\n.active {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #fcfdfd;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0) 1px 3px 10px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n    border: 4px solid #475569;\r\n \r\n}\r\n\r\n.inactive {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #edf1f5;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.list {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    padding-top: 10px;\r\n    padding-left: 20px;\r\n  \r\n}\r\n\r\n.listColor {\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 15px;\r\n}\r\n\r\n\r\n#display {\r\n    grid-area: c;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    background-color: #f8fafc;\r\n    color: #0f172a;\r\n    padding: 10px;\r\n    gap: 20px;\r\n}\r\n.card {\r\n    border: 2px solid black;\r\n    background-color: #cbd5e1;\r\n    border-radius: 15px;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 0px 5px 5px 5px;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 300px;\r\n    height: 250px;\r\n}\r\n\r\n.cardBar {\r\n    padding: 2px;\r\n}\r\n\r\n.cardBody {\r\n    \r\n    padding: 20px;\r\n\r\n}\r\n\r\n.cardButton {\r\n    background-color: #fcfdfd;\r\n    color:#0f172a;\r\n    border-radius: 10px;\r\n    width: 75px;\r\n\r\n}\r\n\r\n.priorityColor {\r\n    width: 300px;\r\n    height: 15px;\r\n    border-radius: 15px;\r\n    border: 2px solid #0f172a;\r\n}\r\n\r\n#Urgent {\r\n    background-color: red;\r\n}\r\n\r\n#High {\r\n    background-color: orange;\r\n}\r\n\r\n#Medium {\r\n    background-color: yellow;\r\n}\r\n\r\n#Low {\r\n    background-color: green;\r\n}\r\n\r\n\r\n#content {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.label {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    width: 20rem;\r\n    color: #f8fafc;\r\n    padding: 15px;\r\n    gap: 5px;\r\n   background-color: #475569;\r\n    /* background-size: 100% 100%;\r\n    background-position: center center; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  \r\n    border-radius: 10px;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\r\n}\r\n\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item, .listItem {\r\n    /* font-family: 'MyFont'; */\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    width: 15rem;\r\n    color: black;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n   border: 4px solid #1e293b;\r\n   border-radius: 10px;\r\n   background-color: #f8fafc;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border: 4px solid #0f172a\r\n  }\r\n\r\n#description {\r\n    height: 5rem;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n/* @font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./Tolkien.ttf') format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n   */\r\nbody {\r\n    margin: 0;\r\n    padding: 0px;\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\n#container {\r\n    display: grid;\r\ngrid-template-columns: 1fr 6fr 6fr;\r\ngrid-template-rows: .5fr 2fr 3fr;\r\ngrid-template-areas: \r\n                    \"h h h\"\r\n                    \"s c c\"\r\n                    \"t c c\";\r\n}\r\n\r\n#formSpace {\r\n    grid-area: s;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding:.5rem;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 2rem;\r\n\r\n}\r\n\r\n#header {\r\n    grid-area: h;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: #f8fafc;\r\n    background-color: #475569;\r\n    padding: .5rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 1.8em;\r\n}\r\n\r\n.dragger {\r\n    width: 250px;\r\n    height: 30px;\r\n    background-color: #0f172a;\r\n}\r\n\r\n\r\n.button {\r\n    width: 14rem;\r\n    /* height: 75px; */\r\n    cursor: pointer;\r\n    background-color: #94a3b8;\r\n    color: #0f172a;\r\n    font-weight: 700;\r\n    font-size: 22px;\r\n    border-radius: 40px;\r\n    padding: 9px;\r\n    box-shadow: 0 2px #0f172a;\r\n\r\n}\r\n\r\n.button:hover {\r\n    background-color: #334155;\r\n    color: #f8fafc;\r\n}\r\n\r\n\r\n.button:active {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    transform: translateY(4px);\r\n}\r\n/* \r\n.project {\r\n    /* display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    padding: .5rem;\r\n    gap: 20px */\r\n\r\n\r\n#projecttitleBar {\r\n    grid-area: t;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: .5rem;\r\n    gap: 3rem;\r\n    align-items: center;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n}\r\n\r\n.titleField {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    border-bottom: 1px solid #0f172a;\r\n    padding-left: 3em;\r\n    padding-right: 3em;\r\n    padding-bottom: 0.3em;\r\n}\r\n\r\n.active {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #fcfdfd;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0) 1px 3px 10px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n    border: 4px solid #475569;\r\n \r\n}\r\n\r\n.inactive {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #edf1f5;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.list {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    padding-top: 10px;\r\n    padding-left: 20px;\r\n  \r\n}\r\n\r\n.listColor {\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 15px;\r\n}\r\n\r\n\r\n#display {\r\n    grid-area: c;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    background-color: #f8fafc;\r\n    color: #0f172a;\r\n    padding: 10px;\r\n    gap: 20px;\r\n}\r\n.card {\r\n    border: 2px solid black;\r\n    background-color: #cbd5e1;\r\n    border-radius: 15px;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 0px 5px 5px 5px;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 300px;\r\n    height: 250px;\r\n}\r\n\r\n.cardBar {\r\n    padding: 2px;\r\n}\r\n\r\n.cardBody {\r\n    \r\n    padding: 20px;\r\n\r\n}\r\n\r\n.cardButton {\r\n    background-color: #fcfdfd;\r\n    color:#0f172a;\r\n    border-radius: 10px;\r\n    width: 75px;\r\n\r\n}\r\n\r\n.priorityColor {\r\n    width: 300px;\r\n    height: 15px;\r\n    border-radius: 15px;\r\n    border: 2px solid #0f172a;\r\n}\r\n\r\n#Urgent {\r\n    background-color: red;\r\n}\r\n\r\n#High {\r\n    background-color: orange;\r\n}\r\n\r\n#Medium {\r\n    background-color: yellow;\r\n}\r\n\r\n#Low {\r\n    background-color: green;\r\n}\r\n\r\n\r\n#content {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.label {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    width: 20rem;\r\n    color: #f8fafc;\r\n    padding: 15px;\r\n    gap: 5px;\r\n   background-color: #475569;\r\n    /* background-size: 100% 100%;\r\n    background-position: center center; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  \r\n    border-radius: 10px;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\r\n}\r\n\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item, .listItem {\r\n    /* font-family: 'MyFont'; */\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    width: 15rem;\r\n    color: black;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n   border: 4px solid #1e293b;\r\n   border-radius: 10px;\r\n   background-color: #f8fafc;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border: 4px solid #0f172a\r\n  }\r\n\r\n#description {\r\n    height: 5rem;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}"],"sourceRoot":""}]);
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
    "Urgent": false,
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



//ADD DELETE ITEM BUTTON - Done
//ADD MARK COMPLETE BUTTON - done
//CSS
//ADD PRIORITY/NOTES OTHER FIELDS
//CHANGE VALUES ON  TO DOS- done
//CLEAN UP/COMMENT
//form validation
//change heading
//delete Projects


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
        let priorityColor = document.createElement('div');
        priorityColor.setAttribute('class','listColor');
        priorityColor.setAttribute('id', item.priority);
        listItem.appendChild(priorityColor);

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
            //currentDroppable.style.background = '#f3f5f9';
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
    //elem.style.background = 'blue';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmb0I7QUFDaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDhDQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0lBO0FBQzZDO0FBQzdDLFdBQVcsWUFBWTtBQUN2QixXQUFXLGVBQWU7QUFDTDtBQUNyQjtBQUN1QztBQUN0QjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsNEJBQTRCO0FBQzFGO0FBQ0EsZ0VBQWdFLDhCQUE4QjtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0RBQVU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw4QkFBOEI7QUFDdEYsb0RBQW9ELDBCQUEwQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsV0FBVztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxXQUFXO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsV0FBVztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFdBQVc7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxXQUFXO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxXQUFXO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdEQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0JBQWtCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvaUJ1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vc3JjL2xpc3RJdGVtLmpzIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi8qIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgIHNyYzogdXJsKCcuL1RvbGtpZW4udHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB9XFxyXFxuICAgKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciA2ZnI7XFxyXFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDJmciAzZnI7XFxyXFxuZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaCBoIGhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwicyBjIGNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwidCBjIGNcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybVNwYWNlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzFlMjkzYjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6LjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnZXIge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxNHJlbTtcXHJcXG4gICAgLyogaGVpZ2h0OiA3NXB4OyAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGEzYjg7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggIzBmMTcyYTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG59XFxyXFxuLyogXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGdhcDogMjBweCAqL1xcclxcblxcclxcblxcclxcbiNwcm9qZWN0dGl0bGVCYXIge1xcclxcbiAgICBncmlkLWFyZWE6IHQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzFlMjkzYjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlRmllbGQge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxyXFxuICAgIGNvbG9yOiMwZjE3MmE7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCkgMXB4IDNweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjNDc1NTY5O1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZjU7XFxyXFxuICAgIGNvbG9yOiMwZjE3MmE7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zMykgLTJweCAycHggNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5saXN0Q29sb3Ige1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZGlzcGxheSB7XFxyXFxuICAgIGdyaWQtYXJlYTogYztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5jYXJkIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgcGFkZGluZzogMHB4IDVweCA1cHggNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCb2R5IHtcXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jYXJkQnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmRmZDtcXHJcXG4gICAgY29sb3I6IzBmMTcyYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgd2lkdGg6IDc1cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eUNvbG9yIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XFxyXFxufVxcclxcblxcclxcbiNVcmdlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNIaWdoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4jTWVkaXVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4jTG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDM1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAzNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAyMHB4IDVweCAxMHB4LCByZ2IoMCAwIDAgLyAzMCUpIDVweCAxMHB4IDBweCAtMTBweCwgcmdiKDAgMCAwIC8gMjAlKSA2cHggLTVweCAxOHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0sIC5saXN0SXRlbSB7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnTXlGb250JzsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB3aWR0aDogMTVyZW07XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgIGJvcmRlcjogNHB4IHNvbGlkICMxZTI5M2I7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzBmMTcyYVxcclxcbiAgfVxcclxcblxcclxcbiNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTs7Ozs7O0lBTUk7QUFDSjtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakIsa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUNoQzs7OzJCQUcyQjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7OztBQUdB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SUFDZCxhQUFhO0lBQ2IsUUFBUTtHQUNULHlCQUF5QjtJQUN4Qjt5Q0FDcUM7SUFDckMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixtQkFBbUI7SUFDbkIscUhBQXFIO0FBQ3pIOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtHQUNHLHlCQUF5QjtHQUN6QixtQkFBbUI7R0FDbkIseUJBQXlCO0FBQzVCOztBQUVBO0lBQ0k7RUFDRjs7QUFFRjtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi8qIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgIHNyYzogdXJsKCcuL1RvbGtpZW4udHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB9XFxyXFxuICAgKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciA2ZnI7XFxyXFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDJmciAzZnI7XFxyXFxuZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaCBoIGhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwicyBjIGNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwidCBjIGNcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybVNwYWNlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzFlMjkzYjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6LjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnZXIge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxNHJlbTtcXHJcXG4gICAgLyogaGVpZ2h0OiA3NXB4OyAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGEzYjg7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggIzBmMTcyYTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG59XFxyXFxuLyogXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGdhcDogMjBweCAqL1xcclxcblxcclxcblxcclxcbiNwcm9qZWN0dGl0bGVCYXIge1xcclxcbiAgICBncmlkLWFyZWE6IHQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzFlMjkzYjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlRmllbGQge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxyXFxuICAgIGNvbG9yOiMwZjE3MmE7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCkgMXB4IDNweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjNDc1NTY5O1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZjU7XFxyXFxuICAgIGNvbG9yOiMwZjE3MmE7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zMykgLTJweCAycHggNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5saXN0Q29sb3Ige1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZGlzcGxheSB7XFxyXFxuICAgIGdyaWQtYXJlYTogYztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5jYXJkIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgcGFkZGluZzogMHB4IDVweCA1cHggNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCb2R5IHtcXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jYXJkQnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmRmZDtcXHJcXG4gICAgY29sb3I6IzBmMTcyYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgd2lkdGg6IDc1cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eUNvbG9yIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XFxyXFxufVxcclxcblxcclxcbiNVcmdlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNIaWdoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4jTWVkaXVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4jTG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDM1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAzNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAyMHB4IDVweCAxMHB4LCByZ2IoMCAwIDAgLyAzMCUpIDVweCAxMHB4IDBweCAtMTBweCwgcmdiKDAgMCAwIC8gMjAlKSA2cHggLTVweCAxOHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0sIC5saXN0SXRlbSB7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnTXlGb250JzsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB3aWR0aDogMTVyZW07XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgIGJvcmRlcjogNHB4IHNvbGlkICMxZTI5M2I7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzBmMTcyYVxcclxcbiAgfVxcclxcblxcclxcbiNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7Y3JlYXRlRm9ybX07XHJcbmltcG9ydCB7IGFkZHRvRG8gfSBmcm9tICcuL2luZGV4LmpzJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XHJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9kb1wiKTtcclxuYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdIaWRlJztcclxuYWRkQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlRm9ybSk7XHJcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVGb3JtKTtcclxuY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrIGZsZXgnO1xyXG5jb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xyXG5oZWFkZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG4gbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbCcpXHJcbiB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdJdGVtIFRpdGxlJ1xyXG4gY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXHJcbiB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XHJcbiB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxuIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwnKVxyXG4gZGVzY3JpcHRpb25MYWJlbC5pbm5lclRleHQgPSAnSXRlbSBEZXNjcmlwdGlvbidcclxuIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XHJcbiBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG4gZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xyXG4gZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtJyk7XHJcbiBkZXNjcmlwdGlvbkxhYmVsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiBsZXQgZHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuIGR1ZUxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwnKVxyXG4gZHVlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlJ1xyXG4gY29udGVudC5hcHBlbmRDaGlsZChkdWVMYWJlbCk7XHJcbiBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcclxuIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XHJcbiBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbScpO1xyXG4gZHVlTGFiZWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcblxyXG4gbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICd3cmFwcGVyJyk7XHJcbiB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwnKTtcclxuIHdyYXBwZXIuaW5uZXJUZXh0ID0gJ1NldCBQcmlvcml0eSBmb3IgSXRlbSdcclxuIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcblxyXG4gbGV0IG9wdGlvbnMgPSB7XHJcbiAgICBcIlVyZ2VudFwiOiBmYWxzZSxcclxuICAgIFwiSGlnaFwiOiBmYWxzZSxcclxuICAgIFwiTWVkaXVtXCI6IGZhbHNlLFxyXG4gICAgXCJMb3dcIjogZmFsc2UsXHJcbiB9XHJcblxyXG5cclxuZm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLmlubmVyVGV4dCA9IGtleTtcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICBpbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICAgIGlucHV0LnZhbHVlID0ga2V5O1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbn1cclxuXHJcbmxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5zdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdCcpO1xyXG5zdWJtaXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24nKTtcclxuY29udGVudC5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGR0b0RvKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpZGVGb3JtKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29udGVudC5yZW1vdmUoKTtcclxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XHJcbiAgICBhZGRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRm9ybSk7XHJcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBuZXcgSXRlbSc7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVGb3JtKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlSXRlbShzdHJpbmcsIGlkKSB7XHJcbi8vICAgICBsZXQgdGl0bGUgPSBzdHJpbmc7XHJcbi8vICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG4vLyAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxuLy8gICAgIGl0ZW0uaW5uZXJUZXh0ID0gdGl0bGU7XHJcbi8vICAgICByZXR1cm4gaXRlbTtcclxuLy8gIH1cclxuIFxyXG4vLyAgZnVuY3Rpb24gY3JlYXRlVGl0bGUoc3RyaW5nKSB7XHJcbi8vICAgICBsZXQgdGl0bGVUZXh0ID0gc3RyaW5nO1xyXG4vLyAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XHJcbi8vICAgICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XHJcbi8vICAgICByZXR1cm4gdGl0bGU7XHJcbi8vICB9XHJcbiBcclxuLy8gIGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKHN0cmluZykge1xyXG4vLyAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcclxuLy8gICAgIHRpdGxlLmlubmVyVGV4dCA9IHN0cmluZztcclxuLy8gICAgIHJldHVybiB0aXRsZTtcclxuLy8gIH1cclxuIFxyXG4vLyAgZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc3RyaW5nLCBpZCl7XHJcbi8vICAgICBsZXQgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuLy8gICAgIG5ld0ltYWdlLnNyYyA9IHN0cmluZztcclxuLy8gICAgIG5ld0ltYWdlLmlkID0gaWQ7XHJcbi8vICAgICBuZXdJbWFnZS5jbGFzc05hbWUgPSAnaW1hZ2UnO1xyXG4vLyAgICAgcmV0dXJuIG5ld0ltYWdlO1xyXG4vLyAgfVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlQ29udGFjdCAoKSB7XHJcbi8vICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4vLyAgICAgbGV0IGNvbnRhY3RUaXRsZSA9IGNyZWF0ZVRpdGxlKCdDb250YWN0IFVzJyk7XHJcbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XHJcblxyXG4vLyAgICAgbGV0IGJhcmxpbWFuQ2FyZCA9IGNyZWF0ZUl0ZW0oJ0JhcmxpbWFuIEJ1dHRlcmJ1cicsICdiYXJsaW1hbicpXHJcbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhcmxpbWFuQ2FyZCk7XHJcbi8vICAgICBsZXQgYmFybGltYW5JbWFnZSA9IGNyZWF0ZUltYWdlKGJhcmxpbWFuLCAnYmFybGltYW4nKTtcclxuLy8gICAgIGJhcmxpbWFuQ2FyZC5hcHBlbmRDaGlsZChiYXJsaW1hbkltYWdlKTtcclxuLy8gICAgIGxldCBiYXJsaW1hblRleHQgPSBjcmVhdGVEZXNjcmlwdGlvbignSW5ua2VlcCAtIEJCYnVyQGJyZWVsYW5kLm5ldCcpO1xyXG4vLyAgICAgYmFybGltYW5DYXJkLmFwcGVuZENoaWxkKGJhcmxpbWFuVGV4dCk7XHJcblxyXG4vLyAgICAgbGV0IG5vYkNhcmQgPSBjcmVhdGVJdGVtKCdOb2InLCAnbm9iJylcclxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9iQ2FyZCk7XHJcbi8vICAgICBsZXQgbm9iSW1hZ2UgPSBjcmVhdGVJbWFnZShub2IsICdub2InKTtcclxuLy8gICAgIG5vYkNhcmQuYXBwZW5kQ2hpbGQobm9iSW1hZ2UpO1xyXG4vLyAgICAgbGV0IG5vYlRleHQgPSBjcmVhdGVEZXNjcmlwdGlvbignQ29vayAtIHNsb3djb2FjaDFAYnJlZWxhbmQubmV0Jyk7XHJcbi8vICAgICBub2JDYXJkLmFwcGVuZENoaWxkKG5vYlRleHQpO1xyXG5cclxuLy8gfSAiLCJcclxuaW1wb3J0IHtjcmVhdGVMaXN0SXRlbX0gZnJvbSAnLi9saXN0SXRlbS5qcyc7XHJcbi8vIGltcG9ydCB7Y3JlYXRlTWVudX0gZnJvbSAnLi9tZW51LmpzJztcclxuLy8gaW1wb3J0IHtjcmVhdGVDb250YWN0fSBmcm9tICcuL2NvbnRhY3QuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuLy8gaW1wb3J0IHByYW5jaW5nUG9ueTIgZnJvbSAnLi9wcmFuY2luZ1BvbnkucG5nJztcclxuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vZm9ybS5qcyc7XHJcbmV4cG9ydCB7YWRkdG9Eb307XHJcblxyXG4vL0FERCBERUxFVEUgSVRFTSBCVVRUT04gLSBEb25lXHJcbi8vQUREIE1BUksgQ09NUExFVEUgQlVUVE9OIC0gZG9uZVxyXG4vL0NTU1xyXG4vL0FERCBQUklPUklUWS9OT1RFUyBPVEhFUiBGSUVMRFNcclxuLy9DSEFOR0UgVkFMVUVTIE9OICBUTyBET1MtIGRvbmVcclxuLy9DTEVBTiBVUC9DT01NRU5UXHJcbi8vZm9ybSB2YWxpZGF0aW9uXHJcbi8vY2hhbmdlIGhlYWRpbmdcclxuLy9kZWxldGUgUHJvamVjdHNcclxuXHJcblxyXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG5sZXQgdG9Eb0FyciA9IFtdO1xyXG5cclxuY2xhc3MgbGlzdEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobnVtYmVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcbiAgICAgdGhpcy5udW1iZXIgPSBudW1iZXJcclxuICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICB9XHJcbiAgICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgIH1cclxuICAgICBnZXROdW1iZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyO1xyXG4gICAgfVxyXG4gfVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdE9iamVjdCgpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoICE9IDApIHtcclxuICAgICAgICBsZXQgcHJvamVjdE9iaiA9IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBgcHJvamVjdHNgICkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvamVjdE9iaik7XHJcbiAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0T2JqKSkge1xyXG4gICAgICAgICAgIGlmIChrZXlbMF0gIT0gXCJEZWZhdWx0XCIpe1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGxldCB0aXRsZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0dGl0bGVCYXInKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCBrZXlbMF0pO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmFjdGl2ZScpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0ga2V5WzBdO1xyXG4gICAgICAgICAgICB0aXRsZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlbMF0pO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe3N3aXRjaFByb2plY3QocHJvamVjdFRpdGxlKX0pO1xyXG4gICAgICAgICAgICBsZXQgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVmYXVsdCcpO1xyXG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7c3dpdGNoUHJvamVjdChkZWZhdWx0UHJvamVjdCl9KTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIC8vaWYgKHByb2plY3RPYmoubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0T2JqXHJcbiAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICBsZXQgcHJvamVjdE9iaiA9IHtcclxuICAgICAgICAnRGVmYXVsdCc6IHRvRG9BcnJcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdlbXB0eScpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0T2JqKVxyXG4gICAgcmV0dXJuIHByb2plY3RPYmpcclxufX1cclxuXHJcbmZ1bmN0aW9uIGxpc3RJdGVtcygpIHtcclxuICAgIGxldCBhbGxMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdCcpO1xyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxMaXN0SXRlbXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICBhbGxMaXN0SXRlbXNba10ucmVtb3ZlKClcclxuICAgIH1cclxuT2JqZWN0LmVudHJpZXMocHJvamVjdE9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiAge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpdGVtID0gdmFsdWVbaV07XHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBpdGVtLnByb2plY3Q7XHJcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QpO1xyXG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxpc3RJdGVtLmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0Jyk7XHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICAgICAgICBsZXQgcHJpb3JpdHlDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3RDb2xvcicpO1xyXG4gICAgICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW0ucHJpb3JpdHkpO1xyXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5Q29sb3IpO1xyXG5cclxuICAgIH19KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ291bnRlcigpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoICE9IDApIHtcclxuICAgICAgICBsZXQgY291bnRlciA9IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBgY291bnRlcmAgKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvdW50ZXIgZm91bmQnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50ZXIpO1xyXG4gICAgICAgIHJldHVybiBjb3VudGVyXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICByZXR1cm4gY291bnRlclxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKCkge1xyXG5sZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5oZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XHJcbmxldCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxud2VsY29tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlbGNvbWUnKVxyXG53ZWxjb21lLmlubmVyVGV4dCA9ICdXZWxjb21lIHRvIHlvdXIgUHJvamVjdHMnXHJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuaGVhZGluZy5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcclxubGV0IGZvcm1TcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5mb3JtU3BhY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtU3BhY2UnKTtcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1TcGFjZSk7XHJcblxyXG5sZXQgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdEJ1dHRvbicpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbm5ld1Byb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0NyZWF0ZSBOZXcgUHJvamVjdCc7XHJcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdQcm9qZWN0KTtcclxuZm9ybVNwYWNlLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xyXG5cclxubGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5hZGRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUb2RvJyk7XHJcbmFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5hZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBuZXcgSXRlbSc7XHJcbmZvcm1TcGFjZS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVGb3JtKTtcclxuXHJcbmxldCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbnNhdmVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzYXZlQnV0dG9uJyk7XHJcbnNhdmVCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24nKTtcclxuc2F2ZUJ1dHRvbi5pbm5lclRleHQgPSAnU2F2ZSBXb3JrJztcclxuZm9ybVNwYWNlLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG5zYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVdvcmspO1xyXG5cclxubGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5kZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVCdXR0b24nKTtcclxuZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbmRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAnRGVsZXRlIFdvcmsnO1xyXG5mb3JtU3BhY2UuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJPdXQpO1xyXG4vLyBjb25zdCBwcmFuY2luZ1BvbnkgPSBuZXcgSW1hZ2UoKTtcclxuLy8gcHJhbmNpbmdQb255LnNyYyA9IHByYW5jaW5nUG9ueTI7XHJcbi8vIHByYW5jaW5nUG9ueS5pZD1cInBvbnlMb2dvXCI7XHJcbi8vIGhlYWRpbmcuYXBwZW5kQ2hpbGQocHJhbmNpbmdQb255KTtcclxufVxyXG5jcmVhdGVIZWFkaW5nKCk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpe1xyXG5cclxubGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKVxyXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kZWZhdWx0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RTcGFjZScpO1xyXG5kZWZhdWx0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QnKTtcclxuaGVhZGVyLmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0KTtcclxuXHJcbmxldCBwcm9qZWN0dGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucHJvamVjdHRpdGxlQmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHRpdGxlQmFyJylcclxubGV0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnByb2plY3RzLmlubmVyVGV4dCA9ICdQcm9qZWN0cydcclxucHJvamVjdHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZUZpZWxkJylcclxucHJvamVjdHRpdGxlQmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcclxubGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gJ0RlZmF1bHQgUHJvamVjdCdcclxucHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJyk7XHJcbnByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0RlZmF1bHQnKTtcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3R0aXRsZUJhcik7XHJcbnByb2plY3R0aXRsZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG5cclxubGV0IGNhcmRTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jYXJkU3BhY2Uuc2V0QXR0cmlidXRlKCdpZCcsICdkaXNwbGF5Jyk7XHJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkU3BhY2UpO1xyXG5cclxuXHJcbn1cclxuXHJcbmNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XHJcbmxldCBjb3VudGVyID0gY3JlYXRlQ291bnRlcigpO1xyXG5jb25zdCBwcm9qZWN0T2JqID0gY3JlYXRlUHJvamVjdE9iamVjdCgpO1xyXG5hZGRDYXJkcygpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCgpe1xyXG5cclxubGV0IGZvcm1TcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU3BhY2UnKTtcclxubGV0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEJ1dHRvbicpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3UHJvamVjdCk7XHJcbm5ld1Byb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0hpZGUnXHJcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlUHJvamVjdEZvcm0pO1xyXG5sZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICduZXdQcm9qZWN0Rm9ybScpO1xyXG5uZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0nKTtcclxuXHJcbmxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbCcpXHJcbnRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ1Byb2plY3QgVGl0bGUnXHJcbm5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG5sZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG50aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXHJcbnRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdFRpdGxlJyk7XHJcbnRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbScpO1xyXG50aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbmxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5zdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RTdWJtaXQnKTtcclxuc3VibWl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbm5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XHJcbmZvcm1TcGFjZS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSlcclxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkbmV3UHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGN1cnJlbnRQcm9qZWN0KCl7XHJcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcbiAgICByZXR1cm4gY3VycmVudFByb2plY3RcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoUHJvamVjdChlbGVtKXtcclxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcclxuICAgIGN1cnJlbnRQcm9qZWN0LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJylcclxuICAgIGN1cnJlbnRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5hY3RpdmUnKVxyXG4gICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luYWN0aXZlJylcclxuICAgIGVsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKVxyXG4gICAgYWRkQ2FyZHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkbmV3UHJvamVjdCgpe1xyXG4gICAgbGV0IHRpdGxlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3R0aXRsZUJhcicpO1xyXG4gICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcclxuICAgIC8vY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xyXG4gICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcclxuICAgIGRlZmF1bHRQcm9qZWN0LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJylcclxuICAgIGRlZmF1bHRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5hY3RpdmUnKVxyXG4gICAgbGV0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKS52YWx1ZTtcclxuICAgIGxldCBuZXdBcnIgPSBbXVxyXG4gICBwcm9qZWN0T2JqW25ld1Byb2plY3RUaXRsZV0gPSBuZXdBcnJcclxuICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0T2JqKTtcclxuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIG5ld1Byb2plY3RUaXRsZSk7XHJcbiAgICBuZXdQcm9qZWN0LmlubmVyVGV4dCA9IG5ld1Byb2plY3RUaXRsZTtcclxuICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG4gICAgZGVmYXVsdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe3N3aXRjaFByb2plY3QoZGVmYXVsdFByb2plY3QpfSlcclxuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe3N3aXRjaFByb2plY3QobmV3UHJvamVjdCl9KVxyXG4gICAvLyBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3VycmVudFByb2plY3QobmV3UHJvamVjdFRpdGxlKSk7XHJcbiAgICAvL25ld1Byb2plY3Qub25jbGljayA9IGN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBoaWRlUHJvamVjdEZvcm0oKTtcclxuICAgIC8vcmV0dXJuIG5ld3Byb2plY3RPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Rm9ybScpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0ucmVtb3ZlKCk7XHJcbiAgICBsZXQgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ1dHRvblwiKTtcclxuICAgIG5ld1Byb2plY3RCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlUHJvamVjdEZvcm0pO1xyXG4gICAgbmV3UHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSAnQ3JlYXRlIE5ldyBQcm9qZWN0JztcclxuICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdQcm9qZWN0KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ2FyZHMoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHByb2plY3RPYmopO1xyXG4gICAgbGlzdEl0ZW1zKCk7XHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcbiAgICBsZXQgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0LmF0dHJpYnV0ZXNbJ2lkJ10udmFsdWU7XHJcbiAgICBsZXQgY3VycmVudFByb2plY3RBcnJheSA9IHByb2plY3RPYmpbdGl0bGVdO1xyXG4gICAgbGV0IGFsbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcclxuICAgIGlmIChhbGxDYXJkcy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsQ2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWxsQ2FyZHNbaV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0QXJyYXlbaV0ucHJvamVjdCA9PSB0aXRsZSkge1xyXG4gICAgICAgIGRpc3BsYXlDYXJkKGN1cnJlbnRQcm9qZWN0QXJyYXlbaV0pO1xyXG4gICAgfX1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5Q2FyZChhcnIpIHtcclxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbiAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRvRG9fJHthcnIubnVtYmVyfWApO1xyXG4gICAgICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCYXInKTtcclxuICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XHJcbiAgICAgICAgICAgbGV0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQm9keScpO1xyXG4gICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xyXG4gICAgICAgICAgIGxldCBwcmlvcml0eUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgcHJpb3JpdHlDb2xvci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5Q29sb3InKTtcclxuICAgICAgICAgICBwcmlvcml0eUNvbG9yLnNldEF0dHJpYnV0ZSgnaWQnLCBhcnIucHJpb3JpdHkpO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb2xvcik7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY29tcGxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGBjb21wbGV0ZV8ke2Fyci5udW1iZXJ9YCk7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJ1dHRvbicpO1xyXG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAnQ29tcGxldGUnO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGVkaXRfJHthcnIubnVtYmVyfWApO1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJ1dHRvbicpO1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uLmlubmVyVGV4dCA9ICdNb2RpZnknO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRlbGV0ZV8ke2Fyci5udW1iZXJ9YCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCdXR0b24nKTtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICdEZWxldGUnO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgZXhwYW5kQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBgZXhwYW5kXyR7YXJyLm51bWJlcn1gKTtcclxuICAgICAgICAgICAgZXhwYW5kQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJ1dHRvbicpO1xyXG4gICAgICAgICAgICBleHBhbmRCdXR0b24uaW5uZXJUZXh0ID0gJ0V4cGFuZCc7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xyXG5cclxuICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChuZXdJdGVtKGFyci50aXRsZSkpO1xyXG4gICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKG5ld0l0ZW0oYXJyLmR1ZURhdGUpKTtcclxuICAgICAgICAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGV0YWlscycpO1xyXG4gICAgICAgICAgICBkZXRhaWxzLmlubmVyVGV4dCA9IGFyci5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICdSZXN0YXJ0J1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0NvbXBsZXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlZGl0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHJvamVjdCA9IFwiZGVsZXRlZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FyZFRpdGxlLnJlbW92ZUNoaWxkKGVkaXRCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlRm9ybSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBUby1Ebz9cIilcclxuICAgICAgICAgICAgICAgIGlmICh0ZXh0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHJvamVjdCA9IFwiZGVsZXRlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENhcmRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyLnByb2plY3QpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgZXhwYW5kQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGV0YWlscyk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGRldGFpbHMpO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoY29sbGFwc2VCdXR0b24pO1xyXG4gICAgICAgICAgICBjYXJkVGl0bGUucmVtb3ZlQ2hpbGQoZXhwYW5kQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbGxhcHNlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkQm9keS5yZW1vdmVDaGlsZChkZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChjb2xsYXBzZUJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgIH1cclxuICAgICAgIGxldCBjb2xsYXBzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgIGNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBgY29sbGFwc2VfJHthcnIubnVtYmVyfWApO1xyXG4gICAgICAgICAgIGNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJ1dHRvbicpO1xyXG4gICAgICAgICAgIGNvbGxhcHNlQnV0dG9uLmlubmVyVGV4dCA9ICdIaWRlJztcclxuICAgICAgICAgIGNhcmREcmFnKGNhcmQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgYWxsSW5hY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5hY3RpdmUnKVxyXG4gICAgLy9jb25zb2xlLmxvZyhhbGxJbmFjdGl2ZSk7XHJcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbEluYWN0aXZlLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhhbGxJbmFjdGl2ZVtrXSk7XHJcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGFsbEluYWN0aXZlW2tdLmF0dHJpYnV0ZXNbJ2lkJ10udmFsdWU7XHJcbiAgICAgICAgbGV0IHByb2plY3RBcnJheSA9IHByb2plY3RPYmpbcHJvamVjdFRpdGxlXTtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0QXJyYXlbcl0ucHJvamVjdCA9PSBwcm9qZWN0LmF0dHJpYnV0ZXNbJ2lkJ10udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5W3JdKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDYXJkKHByb2plY3RBcnJheVtyXSk7XHJcbiAgICAgICAgICAgIH19fX1cclxuXHJcbi8vIEFkZHMgVG8gRG8gaXRlbXMgZnJvbSBGb3JtIGludG8gTGlzdCBJdGVtIE9iamVjdHMsIHRoZW4gYWRkcyB0aGVtIHRvIGFwcHJvcHJpYXRlIFByb2plY3QgQXJyYXkgYWZ0ZXIgZm9ybSBTdWJtaXQgQnV0dG9uIGlzIGNsaWNrZWRcclxuZnVuY3Rpb24gYWRkdG9EbygpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcclxuICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3QuYXR0cmlidXRlc1snaWQnXS52YWx1ZTtcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdJyk7XHJcbiAgICBsZXQgc2VsZWN0ZWRTaXplO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJhZGlvQnV0dG9uIG9mIHJhZGlvQnV0dG9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNpemUgPSByYWRpb0J1dHRvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgbGV0IG5ld0l0ZW0gPSBuZXcgbGlzdEl0ZW0oY291bnRlciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBzZWxlY3RlZFNpemUsIHByb2plY3ROYW1lKTtcclxuICAgIHByb2plY3RPYmpbcHJvamVjdE5hbWVdLnB1c2gobmV3SXRlbSk7XHJcbiAgICByZW1vdmVGb3JtKCk7XHJcbiAgICBjb3VudGVyKys7XHJcbiAgICBhZGRDYXJkcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlV29yaygpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBgcHJvamVjdHNgLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0T2JqKSApO1xyXG4gICAgY29uc29sZS5sb2coIEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBgcHJvamVjdHNgICkgKSApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIGBjb3VudGVyYCwgSlNPTi5zdHJpbmdpZnkoY291bnRlcikgKTtcclxufVxyXG4gICBcclxuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcclxuICAgIGxldCBmb3JtU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVNwYWNlJylcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIC8vY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY29udGVudC5yZW1vdmUoKTtcclxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XHJcbiAgICBhZGRCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVG9kbycpO1xyXG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBuZXcgSXRlbSc7XHJcbiAgICBmb3JtU3BhY2UuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUZvcm0pO1xyXG4gICAgLy9jdXJyZW50UHJvamVjdC5yZW1vdmVDaGlsZChjb250ZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FyZERyYWcoY2FyZCkge1xyXG5cclxuLy9sZXQgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XHJcbi8vbGV0IGNhcmRJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcclxuLy9sZXQgY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdCgpO1xyXG5jYXJkLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRCdXR0b24nKVxyXG4gICAgbGV0IGVsZW1lbnRCZWxvdyA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChlbGVtZW50QmVsb3cgPT0gYnV0dG9uc1tpXSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfX1cclxuXHJcblxyXG5cclxuICAgIGxldCBzaGlmdFggPSBldmVudC5jbGllbnRYIC0gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgbGV0IHNoaWZ0WSA9IGV2ZW50LmNsaWVudFkgLSBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHJcbiAgICBjYXJkLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGNhcmQuc3R5bGUuekluZGV4ID0gMTAwMDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNhcmQpO1xyXG5cclxuICAgIG1vdmVDYXJkKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblxyXG4vL21vdmVzIENhcmQgYXQgdGhlIFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgdGhlIHBhZ2UsIHRha2luZyBhY2NvdW50IGZvciB0aGUgc2hpZnRzIGluaXRpYWxseSB3aGVuIGNsaWNraW5nIG9uIGNhcmRcclxuICAgIGZ1bmN0aW9uIG1vdmVDYXJkKHBhZ2VYLCBwYWdlWSkge1xyXG4gICAgICAgIGNhcmQuc3R5bGUubGVmdCA9IHBhZ2VYIC0gc2hpZnRYICsgJ3B4JztcclxuICAgICAgICBjYXJkLnN0eWxlLnRvcCA9IHBhZ2VZIC0gc2hpZnRZICsgJ3B4JztcclxuICAgICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50RHJvcHBhYmxlID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xyXG4gICAgICAgIG1vdmVDYXJkKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcbiAgICBcclxuXHJcbiAgICAgICAgY2FyZC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGxldCBlbGVtQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG4gICAgICAgIGNhcmQuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFlbGVtQmVsb3cpIHJldHVybjtcclxuICAgICAgICBsZXQgZHJvcHBhYmxlQmVsb3cgPSBlbGVtQmVsb3cuY2xvc2VzdCgnLmluYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUgIT0gZHJvcHBhYmxlQmVsb3cpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcclxuICAgICAgICAgICAgICAgIGxlYXZlRHJvcHBhYmxlKGN1cnJlbnREcm9wcGFibGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnREcm9wcGFibGUgPSBkcm9wcGFibGVCZWxvdztcclxuICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcclxuICAgICAgICBjYXJkLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgICAgICAgICAvL2N1cnJlbnREcm9wcGFibGUuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjNmNWY5JztcclxuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3ROYW1lID0gY3VycmVudERyb3BwYWJsZS5hdHRyaWJ1dGVzWydpZCddLnZhbHVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGNhcmRJRCA9IGNhcmQuYXR0cmlidXRlc1snaWQnXS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IG51bWIgPSBjYXJkSUQucmVwbGFjZSgvW14wLTldL2csICcnKTsgXHJcbiAgICAgICAgICAgIGxldCBuZXdOdW0gPSBwYXJzZUludChudW1iLDEwKTsgXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHByb2plY3RPYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4gIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2YWx1ZVtudW1iZXJdKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVbaV0ubnVtYmVyID09IG5ld051bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdmFsdWVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9qZWN0ID0gbmV3UHJvamVjdE5hbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBhZGRDYXJkcygpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vICBlbnRlckRyb3BwYWJsZShjdXJyZW50RHJvcHBhYmxlKTtcclxuICAgICAgICBcclxuICAgIH19fVxyXG5cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblxyXG4gICAgY2FyZC5vbm1vdXNldXAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICAgICAgY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICBhZGRDYXJkcygpO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbi8vIGZ1bmN0aW9uIGVudGVyRHJvcHBhYmxlKGVsZW0pIHtcclxuICAgIFxyXG4vLyAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3BpbmsnO1xyXG4vLyAgICAgfVxyXG5cclxuICBmdW5jdGlvbiBsZWF2ZURyb3BwYWJsZShlbGVtKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVsZW0pO1xyXG4gICAvL2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIC8vZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsdWUnO1xyXG4gIH1cclxuXHJcbmNhcmQub25kcmFnc3RhcnQgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBmYWxzZTt9O1xyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5ld0l0ZW0oc3RyaW5nKSB7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3RJdGVtJyk7XHJcbiAgICBpdGVtLmlubmVyVGV4dCA9IHN0cmluZztcclxuICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhck91dCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxufVxyXG5cclxuXHJcbiIsImV4cG9ydCB7Y3JlYXRlTGlzdEl0ZW19XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKCkge1xyXG4gICAgXHJcbiAgICAvLyBsZXQgaXRlbSA9IG5ldyBsaXN0SXRlbSgndGl0bGUnLCAndGhpcyBpcycsICcxMS8yJywgJ2hpZ2gnKVxyXG4gICAgLy8gY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAvLyByZXR1cm4gaXRlbVxyXG5cclxuICAgIC8vIGxldCB0aXRsZSA9IGNyZWF0ZVRpdGxlKCdUaGUgUHJhbmNpbmcgUG9ueScpXHJcbiAgICAvLyBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIC8vIHRpdGxlLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRpbmcoKSk7XHJcblxyXG4gICAgLy8gbGV0IGZvb3RlciA9IGNyZWF0ZVRpdGxlKCdCeSBKQVVHUyAyMDIyJyk7XHJcbiAgICAvLyBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcclxuICAgIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmcoKSB7XHJcbi8vICAgICAgICAgbGV0IHRpdGxlID0gXCItIGJ5IEJhcmxpbWFuIEJ1dHRlcmJ1clwiO1xyXG4vLyAgICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRpbmcnKTtcclxuLy8gICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4vLyAgICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gdGl0bGU7XHJcbi8vICAgICAgICAgcmV0dXJuIGhlYWRpbmc7XHJcbi8vICAgICB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVUaXRsZShzdHJpbmcpIHtcclxuLy8gICAgICAgICBsZXQgdGl0bGVUZXh0ID0gc3RyaW5nO1xyXG4vLyAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcclxuLy8gICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XHJcbi8vICAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVUZXh0KCkge1xyXG4vLyAgICAgbGV0IGluZm9UZXh0ID0gXCJUaGUgUHJhbmNpbmcgUG9ueSBoYXMgYmVlbiBhIEJyZWVsYW5kIHN0YXBsZSBmb3Igb3ZlciAzMDAgeWVhcnMuIENvbWUgYW5kIHN0YXkgaW4gb3VyIG1vc3QgY29tZm9ydGFibGUgcm9vbXMgKGluY2x1ZGluZyBIb2JiaXQtU2l6ZWQgcm9vbXMpIHdoaWxlIGVuam9pbmcgdGhlIGJlc3QgZm9vZCB3ZXN0IG9mIHRoZSBNaXN0eSBNb3VudGFpbnMhIC0gQmFybGltYW5cIjtcclxuLy8gICAgIGxldCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgaW5mbzEuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0Jyk7XHJcbi8vICAgICBpbmZvMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcclxuLy8gICAgIGluZm8xLmlubmVyVGV4dCA9IGluZm9UZXh0O1xyXG4vLyAgICAgcmV0dXJuIGluZm8xO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVIb3VycygpIHtcclxuLy8gICAgICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbi8vICAgICAgICAgbGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJMaXN0Jyk7XHJcbi8vICAgICAgICAgbGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcclxuLy8gICAgICAgICBsZXQgZGF0YSA9IFtcIkJyZWFrZmFzdDogc2VydmVkIGF0IFN1bnJpc2UgZGFpbHlcIiwgXCJTZWNvbmQtQnJlYWtmYXN0OiBzZXJ2ZWQgdHdvIGhvdXJzIGFmdGVyIFN1bnJpc2VcIiwgXCJMdW5jaGVvbjogc2VydmVkIGF0IGhpZ2ggbm9vblwiLCBcIlN1cHBlcjogc2VydmVkIGF0IFN1bnNldFwiLCBcIlN0YWJsZXMgYXZhaWxhYmxlIHVwb24gcmVxdWVzdFwiXVxyXG4gIFxyXG4vLyAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4vLyAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbi8vICAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdEl0ZW0nKVxyXG4vLyAgICAgICAgICAgICBsaS5pbm5lclRleHQgPSBpdGVtO1xyXG4vLyAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICByZXR1cm4gbGlzdDtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XHJcbi8vICAgICBsZXQgaW5mb1RleHQgPSBcIkZpbmQgdXMganVzdCBwYXN0IHRoZSBXZXN0LUdhdGUsIGluIEJyZWUsIHdlc3Qgb2YgQ2hldC13b29kLCBub3J0aCBmcm9tIHRoZSBHcmVlbndheVwiXHJcbi8vICAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIGxvY2F0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24nKTtcclxuLy8gICAgIGxvY2F0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4vLyAgICAgbG9jYXRpb24uaW5uZXJUZXh0ID0gaW5mb1RleHQ7XHJcbi8vICAgICByZXR1cm4gbG9jYXRpb247XHJcbi8vIH1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9