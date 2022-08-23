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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* @font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./Tolkien.ttf') format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n   */\r\nbody {\r\n    margin: 0;\r\n    padding: 0px;\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\n#container {\r\n    display: grid;\r\ngrid-template-columns: 1fr 6fr 6fr;\r\ngrid-template-rows: .5fr 2fr 3fr;\r\ngrid-template-areas: \r\n                    \"h h h\"\r\n                    \"s c c\"\r\n                    \"t c c\";\r\n}\r\n\r\n#formSpace {\r\n    grid-area: s;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding:.5rem;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 2rem;\r\n\r\n}\r\n\r\n#header {\r\n    grid-area: h;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: #f8fafc;\r\n    background-color: #475569;\r\n    padding: .5rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 1.8em;\r\n}\r\n\r\n.dragger {\r\n    width: 250px;\r\n    height: 30px;\r\n    background-color: #0f172a;\r\n}\r\n\r\n\r\n.button {\r\n    width: 14rem;\r\n    /* height: 75px; */\r\n    cursor: pointer;\r\n    background-color: #94a3b8;\r\n    color: #0f172a;\r\n    font-weight: 700;\r\n    font-size: 22px;\r\n    border-radius: 40px;\r\n    padding: 9px;\r\n    box-shadow: 0 2px #0f172a;\r\n\r\n}\r\n\r\n.button:hover {\r\n    background-color: #334155;\r\n    color: #f8fafc;\r\n}\r\n\r\n\r\n.button:active {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    transform: translateY(4px);\r\n}\r\n/* \r\n.project {\r\n    /* display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    padding: .5rem;\r\n    gap: 20px */\r\n\r\n\r\n#projecttitleBar {\r\n    grid-area: t;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: .5rem;\r\n    gap: 3rem;\r\n    align-items: center;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n}\r\n\r\n.titleField {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    border-bottom: 1px solid #0f172a;\r\n    padding-left: 3em;\r\n    padding-right: 3em;\r\n    padding-bottom: 0.3em;\r\n}\r\n\r\n.active {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #fcfdfd;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0) 1px 3px 10px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n    border: 4px solid #475569;\r\n \r\n}\r\n\r\n.inactive {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #edf1f5;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.list {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    padding-top: 10px;\r\n    padding-left: 20px;\r\n  \r\n}\r\n\r\n.listColor {\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 15px;\r\n}\r\n\r\n\r\n#display {\r\n    grid-area: c;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    background-color: #f8fafc;\r\n    color: #0f172a;\r\n    padding: 10px;\r\n    gap: 20px;\r\n}\r\n.card {\r\n    border: 2px solid black;\r\n    background-color: #cbd5e1;\r\n    border-radius: 15px;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 0px 5px 5px 5px;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 300px;\r\n    height: 250px;\r\n}\r\n\r\n.cardBar {\r\n    padding: 2px;\r\n}\r\n\r\n.cardBody {\r\n    display:grid;\r\n    padding: 20px;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    grid-template-areas: \r\n                    \"t t\"\r\n                    \"d d\"\r\n                    \"n n\"\r\n                    \"f f\";\r\n\r\n}\r\n\r\n.cardButton {\r\n    background-color: #fcfdfd;\r\n    color:#0f172a;\r\n    border-radius: 10px;\r\n    width: 75px;\r\n\r\n}\r\n\r\n.trashButton {\r\n    grid-area: f;\r\n    background-color: #fcfdfd;\r\n    color: #0f172a;\r\n    padding: 2px;\r\n    border-radius: 10px;\r\n    border: 2px solid #0f172a;\r\n}\r\n\r\n.priorityColor {\r\n    width: 300px;\r\n    height: 15px;\r\n    border-radius: 15px;\r\n    border: 2px solid #0f172a;\r\n}\r\n\r\n#Urgent {\r\n    background-color: red;\r\n}\r\n\r\n#High {\r\n    background-color: orange;\r\n}\r\n\r\n#Medium {\r\n    background-color: yellow;\r\n}\r\n\r\n#Low {\r\n    background-color: green;\r\n}\r\n\r\n\r\n#content {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.label {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    width: 20rem;\r\n    color: #f8fafc;\r\n    padding: 15px;\r\n    gap: 5px;\r\n   background-color: #475569;\r\n    /* background-size: 100% 100%;\r\n    background-position: center center; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  \r\n    border-radius: 10px;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\r\n}\r\n\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item, .listItem {\r\n    /* font-family: 'MyFont'; */\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    width: 15rem;\r\n    color: black;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n   border: 4px solid #1e293b;\r\n   border-radius: 10px;\r\n   background-color: #f8fafc;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border: 4px solid #0f172a\r\n  }\r\n\r\n#description {\r\n    height: 5rem;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n/* @font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./Tolkien.ttf') format(\"truetype\");\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n   */\r\nbody {\r\n    margin: 0;\r\n    padding: 0px;\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\n#container {\r\n    display: grid;\r\ngrid-template-columns: 1fr 6fr 6fr;\r\ngrid-template-rows: .5fr 2fr 3fr;\r\ngrid-template-areas: \r\n                    \"h h h\"\r\n                    \"s c c\"\r\n                    \"t c c\";\r\n}\r\n\r\n#formSpace {\r\n    grid-area: s;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding:.5rem;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 2rem;\r\n\r\n}\r\n\r\n#header {\r\n    grid-area: h;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    color: #f8fafc;\r\n    background-color: #475569;\r\n    padding: .5rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 1.8em;\r\n}\r\n\r\n.dragger {\r\n    width: 250px;\r\n    height: 30px;\r\n    background-color: #0f172a;\r\n}\r\n\r\n\r\n.button {\r\n    width: 14rem;\r\n    /* height: 75px; */\r\n    cursor: pointer;\r\n    background-color: #94a3b8;\r\n    color: #0f172a;\r\n    font-weight: 700;\r\n    font-size: 22px;\r\n    border-radius: 40px;\r\n    padding: 9px;\r\n    box-shadow: 0 2px #0f172a;\r\n\r\n}\r\n\r\n.button:hover {\r\n    background-color: #334155;\r\n    color: #f8fafc;\r\n}\r\n\r\n\r\n.button:active {\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    transform: translateY(4px);\r\n}\r\n/* \r\n.project {\r\n    /* display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    padding: .5rem;\r\n    gap: 20px */\r\n\r\n\r\n#projecttitleBar {\r\n    grid-area: t;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: .5rem;\r\n    gap: 3rem;\r\n    align-items: center;\r\n    background-color: #e2e8f0;\r\n    color: #1e293b;\r\n}\r\n\r\n.titleField {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    background-color: #e2e8f0;\r\n    color: #0f172a;\r\n    border-bottom: 1px solid #0f172a;\r\n    padding-left: 3em;\r\n    padding-right: 3em;\r\n    padding-bottom: 0.3em;\r\n}\r\n\r\n.active {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #fcfdfd;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0) 1px 3px 10px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n    border: 4px solid #475569;\r\n \r\n}\r\n\r\n.inactive {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 200px;\r\n    padding: .7rem;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    background-color: #edf1f5;\r\n    color:#0f172a;\r\n    box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.list {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    padding-top: 10px;\r\n    padding-left: 20px;\r\n  \r\n}\r\n\r\n.listColor {\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 15px;\r\n}\r\n\r\n\r\n#display {\r\n    grid-area: c;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    background-color: #f8fafc;\r\n    color: #0f172a;\r\n    padding: 10px;\r\n    gap: 20px;\r\n}\r\n.card {\r\n    border: 2px solid black;\r\n    background-color: #cbd5e1;\r\n    border-radius: 15px;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    padding: 0px 5px 5px 5px;\r\n    align-items: center;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    width: 300px;\r\n    height: 250px;\r\n}\r\n\r\n.cardBar {\r\n    padding: 2px;\r\n}\r\n\r\n.cardBody {\r\n    display:grid;\r\n    padding: 20px;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr;\r\n    grid-template-areas: \r\n                    \"t t\"\r\n                    \"d d\"\r\n                    \"n n\"\r\n                    \"f f\";\r\n\r\n}\r\n\r\n.cardButton {\r\n    background-color: #fcfdfd;\r\n    color:#0f172a;\r\n    border-radius: 10px;\r\n    width: 75px;\r\n\r\n}\r\n\r\n.trashButton {\r\n    grid-area: f;\r\n    background-color: #fcfdfd;\r\n    color: #0f172a;\r\n    padding: 2px;\r\n    border-radius: 10px;\r\n    border: 2px solid #0f172a;\r\n}\r\n\r\n.priorityColor {\r\n    width: 300px;\r\n    height: 15px;\r\n    border-radius: 15px;\r\n    border: 2px solid #0f172a;\r\n}\r\n\r\n#Urgent {\r\n    background-color: red;\r\n}\r\n\r\n#High {\r\n    background-color: orange;\r\n}\r\n\r\n#Medium {\r\n    background-color: yellow;\r\n}\r\n\r\n#Low {\r\n    background-color: green;\r\n}\r\n\r\n\r\n#content {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.form {\r\n    width: 35rem;\r\n    background-color: #1e293b;\r\n    color: #f8fafc;\r\n    font-size: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 15px;\r\n    padding-top: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.label {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    width: 20rem;\r\n    color: #f8fafc;\r\n    padding: 15px;\r\n    gap: 5px;\r\n   background-color: #475569;\r\n    /* background-size: 100% 100%;\r\n    background-position: center center; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  \r\n    border-radius: 10px;\r\n    box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px, rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\r\n}\r\n\r\n\r\n.text {\r\n    text-align: center;\r\n}\r\n\r\n.item, .listItem {\r\n    /* font-family: 'MyFont'; */\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    width: 15rem;\r\n    color: black;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n   border: 4px solid #1e293b;\r\n   border-radius: 10px;\r\n   background-color: #f8fafc;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    border: 4px solid #0f172a\r\n  }\r\n\r\n#description {\r\n    height: 5rem;\r\n}\r\n\r\n.image {\r\n    width: 200px;\r\n}"],"sourceRoot":""}]);
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

let notesLabel = document.createElement('div');
notesLabel.setAttribute('class', 'label')
notesLabel.innerText = 'Notes:'
 content.appendChild(notesLabel);
 let notes = document.createElement('input');
 notes.setAttribute('type', 'text')
 notes.setAttribute('id', 'notes');
 notes.setAttribute('class', 'item');
 notesLabel.appendChild(notes);


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
/* harmony import */ var _trash_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trash.svg */ "./src/trash.svg");


// import {createMenu} from './menu.js';
// import {createContact} from './contact.js';

// import prancingPony2 from './prancingPony.png';



//sdfgddgsdg
//ADD DELETE ITEM BUTTON - Done
//ADD MARK COMPLETE BUTTON - done
//CSS
//ADD PRIORITY/NOTES OTHER FIELDS - done
//CHANGE VALUES ON  TO DOS- done
//CLEAN UP/COMMENT
//form validation
//change heading
//delete Projects
//form styling

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
     this.notes;
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
            
            let expandButton = document.createElement('button');
            expandButton.setAttribute('id', `expand_${arr.number}`);
            expandButton.setAttribute('class', 'cardButton');
            expandButton.innerText = 'Expand';
            cardTitle.appendChild(expandButton);

            let trashButton = new Image;
            trashButton.src = _trash_svg__WEBPACK_IMPORTED_MODULE_3__;
            trashButton.setAttribute('id', `delete_${arr.number}`);
            trashButton.setAttribute('class', 'trashButton');

            let title = document.createElement('div');
            title.setAttribute('class', 'field');
            title.innerText = 'Title:';
            let titleValue = document.createElement('div');
            titleValue.setAttribute('class', 'value');
            titleValue.innerText = arr.title;
            let date = document.createElement('div');
            date.setAttribute('class', 'field');
            date.innerText = 'Due-Date:';
            let dateValue = document.createElement('div');
            dateValue.setAttribute('class', 'value');
            dateValue.innerText = arr.dueDate;
            cardBody.appendChild(title)
            cardBody.appendChild(titleValue)
            cardBody.appendChild(date)
            cardBody.appendChild(dateValue)
            cardBody.appendChild(trashButton);

    
           let description = document.createElement('div');
           description.setAttribute('class', 'field');
           description.innerText = 'Description:';
           let descriptionValue = document.createElement('div');
           descriptionValue.setAttribute('class', 'value');
           descriptionValue.innerText = arr.description;
           let notes = document.createElement('div');
           notes.setAttribute('class', 'field');
           notes.innerText = 'Notes:';
           let noteValue = document.createElement('div');
           noteValue.setAttribute('class', 'value');
           noteValue.innerText = arr.notes;

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

            trashButton.onclick = () => {
                let text = confirm("Are you sure you want to delete this To-Do?")
                if (text == true) {
                    arr.project = "deleted";
                    addCards();
                    console.log(arr.project)
                } else {
                    return
                }}

           expandButton.onclick = () => {
            cardBody.appendChild(description)
            cardBody.appendChild(descriptionValue)
            cardBody.appendChild(notes)
            cardBody.appendChild(noteValue)
            cardTitle.appendChild(collapseButton);
            cardTitle.removeChild(expandButton);

            collapseButton.onclick = () => {
                cardBody.removeChild(description);
                cardBody.removeChild(descriptionValue);
                cardBody.removeChild(notes);
                cardBody.removeChild(noteValue);
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
    let notes = document.getElementById("notes").value;
    let newItem = new listItem(counter, title, description, dueDate, selectedSize, projectName, notes);
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
    let trashButtons = document.querySelectorAll('.trashButton')
    let elementBelow = document.elementFromPoint(event.clientX, event.clientY);
    for (let i = 0; i < buttons.length; i++) {
    if (elementBelow == buttons[i]) {
        return
    }else if (elementBelow == trashButtons[i]) {
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



/***/ }),

/***/ "./src/trash.svg":
/*!***********************!*\
  !*** ./src/trash.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bba7f8a90befcbd8f9c0.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQjtBQUNpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDhDQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUM2QztBQUM3QyxXQUFXLFlBQVk7QUFDdkIsV0FBVyxlQUFlO0FBQ0w7QUFDckI7QUFDdUM7QUFDSDtBQUNuQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCw0QkFBNEI7QUFDMUY7QUFDQSxnRUFBZ0UsOEJBQThCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0RBQVU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw4QkFBOEI7QUFDdEYsb0RBQW9ELDBCQUEwQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC8uL3NyYy9saXN0SXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb0xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9MaXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi8qIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgIHNyYzogdXJsKCcuL1RvbGtpZW4udHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB9XFxyXFxuICAgKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciA2ZnI7XFxyXFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDJmciAzZnI7XFxyXFxuZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaCBoIGhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwicyBjIGNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwidCBjIGNcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybVNwYWNlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzFlMjkzYjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6LjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnZXIge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxNHJlbTtcXHJcXG4gICAgLyogaGVpZ2h0OiA3NXB4OyAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGEzYjg7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggIzBmMTcyYTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG59XFxyXFxuLyogXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGdhcDogMjBweCAqL1xcclxcblxcclxcblxcclxcbiNwcm9qZWN0dGl0bGVCYXIge1xcclxcbiAgICBncmlkLWFyZWE6IHQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzFlMjkzYjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlRmllbGQge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxyXFxuICAgIGNvbG9yOiMwZjE3MmE7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCkgMXB4IDNweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjNDc1NTY5O1xcclxcbiBcXHJcXG59XFxyXFxuXFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IC43cmVtO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZjU7XFxyXFxuICAgIGNvbG9yOiMwZjE3MmE7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zMykgLTJweCAycHggNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5saXN0Q29sb3Ige1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZGlzcGxheSB7XFxyXFxuICAgIGdyaWQtYXJlYTogYztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5jYXJkIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgcGFkZGluZzogMHB4IDVweCA1cHggNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCb2R5IHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ0IHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZCBkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxcIm4gblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJmIGZcXFwiO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxyXFxuICAgIGNvbG9yOiMwZjE3MmE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA3NXB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udHJhc2hCdXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IGY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxyXFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eUNvbG9yIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XFxyXFxufVxcclxcblxcclxcbiNVcmdlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNIaWdoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4jTWVkaXVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4jTG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDM1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAzNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAyMHB4IDVweCAxMHB4LCByZ2IoMCAwIDAgLyAzMCUpIDVweCAxMHB4IDBweCAtMTBweCwgcmdiKDAgMCAwIC8gMjAlKSA2cHggLTVweCAxOHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0sIC5saXN0SXRlbSB7XFxyXFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnTXlGb250JzsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB3aWR0aDogMTVyZW07XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgIGJvcmRlcjogNHB4IHNvbGlkICMxZTI5M2I7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzBmMTcyYVxcclxcbiAgfVxcclxcblxcclxcbiNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTs7Ozs7O0lBTUk7QUFDSjtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakIsa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUNoQzs7OzJCQUcyQjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCO0FBQ0E7Ozs7Ozs7O2VBUWU7OztBQUdmO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQzs7Ozt5QkFJcUI7O0FBRXpCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLFFBQVE7R0FDVCx5QkFBeUI7SUFDeEI7eUNBQ3FDO0lBQ3JDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLHFIQUFxSDtBQUN6SDs7O0FBR0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7R0FDRyx5QkFBeUI7R0FDekIsbUJBQW1CO0dBQ25CLHlCQUF5QjtBQUM1Qjs7QUFFQTtJQUNJO0VBQ0Y7O0FBRUY7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4vKiBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9Ub2xraWVuLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgfVxcclxcbiAgICovXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgNmZyO1xcclxcbmdyaWQtdGVtcGxhdGUtcm93czogLjVmciAyZnIgM2ZyO1xcclxcbmdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxcImggaCBoXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxcInMgYyBjXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxcInQgYyBjXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm1TcGFjZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogcztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOi41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICB3aWR0aDogMTRyZW07XFxyXFxuICAgIC8qIGhlaWdodDogNzVweDsgKi9cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhM2I4O1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcclxcbiAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4ICMwZjE3MmE7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxyXFxufVxcclxcbi8qIFxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgLyogZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgY29sb3I6ICMwZjE3MmE7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBnYXA6IDIwcHggKi9cXHJcXG5cXHJcXG5cXHJcXG4jcHJvamVjdHRpdGxlQmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgY29sb3I6ICMxZTI5M2I7XFxyXFxufVxcclxcblxcclxcbi50aXRsZUZpZWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwZjE3MmE7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM2VtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAuN3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmZGZkO1xcclxcbiAgICBjb2xvcjojMGYxNzJhO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDApIDFweCAzcHggMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzQ3NTU2OTtcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbi5pbmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAuN3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWY1O1xcclxcbiAgICBjb2xvcjojMGYxNzJhO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzMpIC0ycHggMnB4IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ubGlzdENvbG9yIHtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2Rpc3BsYXkge1xcclxcbiAgICBncmlkLWFyZWE6IGM7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHBhZGRpbmc6IDBweCA1cHggNXB4IDVweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCYXIge1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQm9keSB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwidCB0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxcImQgZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJuIG5cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZiBmXFxcIjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCdXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmZGZkO1xcclxcbiAgICBjb2xvcjojMGYxNzJhO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB3aWR0aDogNzVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRyYXNoQnV0dG9uIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmZGZkO1xcclxcbiAgICBjb2xvcjogIzBmMTcyYTtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMGYxNzJhO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHlDb2xvciB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMGYxNzJhO1xcclxcbn1cXHJcXG5cXHJcXG4jVXJnZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jSGlnaCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuI01lZGl1bSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuI0xvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAzNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgY29sb3I6ICNmOGZhZmM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICB3aWR0aDogMzVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBjb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMjBweCA1cHggMTBweCwgcmdiKDAgMCAwIC8gMzAlKSA1cHggMTBweCAwcHggLTEwcHgsIHJnYigwIDAgMCAvIDIwJSkgNnB4IC01cHggMThweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLCAubGlzdEl0ZW0ge1xcclxcbiAgICAvKiBmb250LWZhbWlseTogJ015Rm9udCc7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICBib3JkZXI6IDRweCBzb2xpZCAjMWUyOTNiO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwZjE3MmFcXHJcXG4gIH1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb24ge1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQge2NyZWF0ZUZvcm19O1xyXG5pbXBvcnQgeyBhZGR0b0RvIH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xyXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XHJcbmFkZEJ1dHRvbi5pbm5lclRleHQgPSAnSGlkZSc7XHJcbmFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUZvcm0pO1xyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRm9ybSk7XHJcbmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayBmbGV4JztcclxuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcclxuaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwnKVxyXG4gdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnSXRlbSBUaXRsZSdcclxuIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG4gdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xyXG4gdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtJyk7XHJcbiB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiBsZXQgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xhYmVsJylcclxuIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ0l0ZW0gRGVzY3JpcHRpb24nXHJcbiBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxuIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcclxuIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbScpO1xyXG4gZGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gbGV0IGR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiBkdWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xhYmVsJylcclxuIGR1ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgRGF0ZSdcclxuIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHVlTGFiZWwpO1xyXG4gbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXHJcbiBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xyXG4gZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxuIGR1ZUxhYmVsLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG5cclxuIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd3JhcHBlcicpO1xyXG4gd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xhYmVsJyk7XHJcbiB3cmFwcGVyLmlubmVyVGV4dCA9ICdTZXQgUHJpb3JpdHkgZm9yIEl0ZW0nXHJcbiBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuIGxldCBvcHRpb25zID0ge1xyXG4gICAgXCJVcmdlbnRcIjogZmFsc2UsXHJcbiAgICBcIkhpZ2hcIjogZmFsc2UsXHJcbiAgICBcIk1lZGl1bVwiOiBmYWxzZSxcclxuICAgIFwiTG93XCI6IGZhbHNlLFxyXG4gfVxyXG5cclxuXHJcbmZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5pbm5lclRleHQgPSBrZXk7XHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgaW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XHJcbiAgICBpbnB1dC52YWx1ZSA9IGtleTtcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG59XHJcblxyXG5sZXQgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5ub3Rlc0xhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwnKVxyXG5ub3Rlc0xhYmVsLmlubmVyVGV4dCA9ICdOb3RlczonXHJcbiBjb250ZW50LmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpO1xyXG4gbGV0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuIG5vdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxuIG5vdGVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbm90ZXMnKTtcclxuIG5vdGVzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbScpO1xyXG4gbm90ZXNMYWJlbC5hcHBlbmRDaGlsZChub3Rlcyk7XHJcblxyXG5cclxubGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jylcclxuc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKHN1Ym1pdCk7XHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZHRvRG8pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGlkZUZvcm0oKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb250ZW50LnJlbW92ZSgpO1xyXG4gICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9kb1wiKTtcclxuICAgIGFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVGb3JtKTtcclxuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIG5ldyBJdGVtJztcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUZvcm0pO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVJdGVtKHN0cmluZywgaWQpIHtcclxuLy8gICAgIGxldCB0aXRsZSA9IHN0cmluZztcclxuLy8gICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbi8vICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbScpO1xyXG4vLyAgICAgaXRlbS5pbm5lclRleHQgPSB0aXRsZTtcclxuLy8gICAgIHJldHVybiBpdGVtO1xyXG4vLyAgfVxyXG4gXHJcbi8vICBmdW5jdGlvbiBjcmVhdGVUaXRsZShzdHJpbmcpIHtcclxuLy8gICAgIGxldCB0aXRsZVRleHQgPSBzdHJpbmc7XHJcbi8vICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcclxuLy8gICAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcclxuLy8gICAgIHJldHVybiB0aXRsZTtcclxuLy8gIH1cclxuIFxyXG4vLyAgZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oc3RyaW5nKSB7XHJcbi8vICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xyXG4vLyAgICAgdGl0bGUuaW5uZXJUZXh0ID0gc3RyaW5nO1xyXG4vLyAgICAgcmV0dXJuIHRpdGxlO1xyXG4vLyAgfVxyXG4gXHJcbi8vICBmdW5jdGlvbiBjcmVhdGVJbWFnZShzdHJpbmcsIGlkKXtcclxuLy8gICAgIGxldCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgbmV3SW1hZ2Uuc3JjID0gc3RyaW5nO1xyXG4vLyAgICAgbmV3SW1hZ2UuaWQgPSBpZDtcclxuLy8gICAgIG5ld0ltYWdlLmNsYXNzTmFtZSA9ICdpbWFnZSc7XHJcbi8vICAgICByZXR1cm4gbmV3SW1hZ2U7XHJcbi8vICB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVDb250YWN0ICgpIHtcclxuLy8gICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbi8vICAgICBsZXQgY29udGFjdFRpdGxlID0gY3JlYXRlVGl0bGUoJ0NvbnRhY3QgVXMnKTtcclxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcclxuXHJcbi8vICAgICBsZXQgYmFybGltYW5DYXJkID0gY3JlYXRlSXRlbSgnQmFybGltYW4gQnV0dGVyYnVyJywgJ2JhcmxpbWFuJylcclxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFybGltYW5DYXJkKTtcclxuLy8gICAgIGxldCBiYXJsaW1hbkltYWdlID0gY3JlYXRlSW1hZ2UoYmFybGltYW4sICdiYXJsaW1hbicpO1xyXG4vLyAgICAgYmFybGltYW5DYXJkLmFwcGVuZENoaWxkKGJhcmxpbWFuSW1hZ2UpO1xyXG4vLyAgICAgbGV0IGJhcmxpbWFuVGV4dCA9IGNyZWF0ZURlc2NyaXB0aW9uKCdJbm5rZWVwIC0gQkJidXJAYnJlZWxhbmQubmV0Jyk7XHJcbi8vICAgICBiYXJsaW1hbkNhcmQuYXBwZW5kQ2hpbGQoYmFybGltYW5UZXh0KTtcclxuXHJcbi8vICAgICBsZXQgbm9iQ2FyZCA9IGNyZWF0ZUl0ZW0oJ05vYicsICdub2InKVxyXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChub2JDYXJkKTtcclxuLy8gICAgIGxldCBub2JJbWFnZSA9IGNyZWF0ZUltYWdlKG5vYiwgJ25vYicpO1xyXG4vLyAgICAgbm9iQ2FyZC5hcHBlbmRDaGlsZChub2JJbWFnZSk7XHJcbi8vICAgICBsZXQgbm9iVGV4dCA9IGNyZWF0ZURlc2NyaXB0aW9uKCdDb29rIC0gc2xvd2NvYWNoMUBicmVlbGFuZC5uZXQnKTtcclxuLy8gICAgIG5vYkNhcmQuYXBwZW5kQ2hpbGQobm9iVGV4dCk7XHJcblxyXG4vLyB9ICIsIlxyXG5pbXBvcnQge2NyZWF0ZUxpc3RJdGVtfSBmcm9tICcuL2xpc3RJdGVtLmpzJztcclxuLy8gaW1wb3J0IHtjcmVhdGVNZW51fSBmcm9tICcuL21lbnUuanMnO1xyXG4vLyBpbXBvcnQge2NyZWF0ZUNvbnRhY3R9IGZyb20gJy4vY29udGFjdC5qcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG4vLyBpbXBvcnQgcHJhbmNpbmdQb255MiBmcm9tICcuL3ByYW5jaW5nUG9ueS5wbmcnO1xyXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9mb3JtLmpzJztcclxuaW1wb3J0IHRyYXNoSWNvbiBmcm9tICcuL3RyYXNoLnN2Zyc7XHJcbmV4cG9ydCB7YWRkdG9Eb307XHJcbi8vc2RmZ2RkZ3NkZ1xyXG4vL0FERCBERUxFVEUgSVRFTSBCVVRUT04gLSBEb25lXHJcbi8vQUREIE1BUksgQ09NUExFVEUgQlVUVE9OIC0gZG9uZVxyXG4vL0NTU1xyXG4vL0FERCBQUklPUklUWS9OT1RFUyBPVEhFUiBGSUVMRFMgLSBkb25lXHJcbi8vQ0hBTkdFIFZBTFVFUyBPTiAgVE8gRE9TLSBkb25lXHJcbi8vQ0xFQU4gVVAvQ09NTUVOVFxyXG4vL2Zvcm0gdmFsaWRhdGlvblxyXG4vL2NoYW5nZSBoZWFkaW5nXHJcbi8vZGVsZXRlIFByb2plY3RzXHJcbi8vZm9ybSBzdHlsaW5nXHJcblxyXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG5sZXQgdG9Eb0FyciA9IFtdO1xyXG5cclxuY2xhc3MgbGlzdEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobnVtYmVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcbiAgICAgdGhpcy5udW1iZXIgPSBudW1iZXJcclxuICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgdGhpcy5ub3RlcztcclxuICAgIH1cclxuICAgICBnZXRUaXRsZSgpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICAgfVxyXG4gICAgIGdldE51bWJlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXI7XHJcbiAgICB9XHJcbiB9XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0T2JqZWN0KCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0T2JqID0gSlNPTi5wYXJzZSggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIGBwcm9qZWN0c2AgKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0T2JqKTtcclxuICAgIFxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5lbnRyaWVzKHByb2plY3RPYmopKSB7XHJcbiAgICAgICAgICAgaWYgKGtleVswXSAhPSBcIkRlZmF1bHRcIil7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgbGV0IHRpdGxlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3R0aXRsZUJhcicpO1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsIGtleVswXSk7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBrZXlbMF07XHJcbiAgICAgICAgICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleVswXSk7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7c3dpdGNoUHJvamVjdChwcm9qZWN0VGl0bGUpfSk7XHJcbiAgICAgICAgICAgIGxldCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdEZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtzd2l0Y2hQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KX0pO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgLy9pZiAocHJvamVjdE9iai5sZW5ndGgpXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RPYmpcclxuICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgIGxldCBwcm9qZWN0T2JqID0ge1xyXG4gICAgICAgICdEZWZhdWx0JzogdG9Eb0FyclxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ2VtcHR5JylcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RPYmopXHJcbiAgICByZXR1cm4gcHJvamVjdE9ialxyXG59fVxyXG5cclxuZnVuY3Rpb24gbGlzdEl0ZW1zKCkge1xyXG4gICAgbGV0IGFsbExpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0Jyk7XHJcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbExpc3RJdGVtcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGFsbExpc3RJdGVtc1trXS5yZW1vdmUoKVxyXG4gICAgfVxyXG5PYmplY3QuZW50cmllcyhwcm9qZWN0T2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+ICB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB2YWx1ZVtpXTtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IGl0ZW0ucHJvamVjdDtcclxuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdCk7XHJcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcclxuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QnKTtcclxuICAgICAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gICAgICAgIGxldCBwcmlvcml0eUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJpb3JpdHlDb2xvci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdENvbG9yJyk7XHJcbiAgICAgICAgcHJpb3JpdHlDb2xvci5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbS5wcmlvcml0eSk7XHJcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHlDb2xvcik7XHJcblxyXG4gICAgfX0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb3VudGVyKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gSlNPTi5wYXJzZSggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIGBjb3VudGVyYCApKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY291bnRlciBmb3VuZCcpXHJcbiAgICAgICAgY29uc29sZS5sb2coY291bnRlcik7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50ZXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHJldHVybiBjb3VudGVyXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmcoKSB7XHJcbmxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcclxubGV0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG53ZWxjb21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VsY29tZScpXHJcbndlbGNvbWUuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8geW91ciBQcm9qZWN0cydcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG5oZWFkaW5nLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xyXG5sZXQgZm9ybVNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmZvcm1TcGFjZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1TcGFjZScpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVNwYWNlKTtcclxubGV0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxubmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2plY3RCdXR0b24nKTtcclxubmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdDcmVhdGUgTmV3IFByb2plY3QnO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3UHJvamVjdCk7XHJcbmZvcm1TcGFjZS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcclxuXHJcbmxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVG9kbycpO1xyXG5hZGRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24nKTtcclxuYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgbmV3IEl0ZW0nO1xyXG5mb3JtU3BhY2UuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlRm9ybSk7XHJcblxyXG5sZXQgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5zYXZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2F2ZUJ1dHRvbicpO1xyXG5zYXZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbnNhdmVCdXR0b24uaW5uZXJUZXh0ID0gJ1NhdmUgV29yayc7XHJcbmZvcm1TcGFjZS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVXb3JrKTtcclxuXHJcbmxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlQnV0dG9uJyk7XHJcbmRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5kZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSBXb3JrJztcclxuZm9ybVNwYWNlLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyT3V0KTtcclxuLy8gY29uc3QgcHJhbmNpbmdQb255ID0gbmV3IEltYWdlKCk7XHJcbi8vIHByYW5jaW5nUG9ueS5zcmMgPSBwcmFuY2luZ1BvbnkyO1xyXG4vLyBwcmFuY2luZ1BvbnkuaWQ9XCJwb255TG9nb1wiO1xyXG4vLyBoZWFkaW5nLmFwcGVuZENoaWxkKHByYW5jaW5nUG9ueSk7XHJcbn1cclxuY3JlYXRlSGVhZGluZygpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKXtcclxuXHJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJylcclxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0U3BhY2UnKTtcclxuZGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0Jyk7XHJcbmhlYWRlci5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdCk7XHJcblxyXG5sZXQgcHJvamVjdHRpdGxlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnByb2plY3R0aXRsZUJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3R0aXRsZUJhcicpXHJcbmxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wcm9qZWN0cy5pbm5lclRleHQgPSAnUHJvamVjdHMnXHJcbnByb2plY3RzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGVGaWVsZCcpXHJcbnByb2plY3R0aXRsZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XHJcbmxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucHJvamVjdFRpdGxlLmlubmVyVGV4dCA9ICdEZWZhdWx0IFByb2plY3QnXHJcbnByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpO1xyXG5wcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdEZWZhdWx0Jyk7XHJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0dGl0bGVCYXIpO1xyXG5wcm9qZWN0dGl0bGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuXHJcbmxldCBjYXJkU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY2FyZFNwYWNlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGlzcGxheScpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFNwYWNlKTtcclxuXHJcblxyXG59XHJcblxyXG5jcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xyXG5sZXQgY291bnRlciA9IGNyZWF0ZUNvdW50ZXIoKTtcclxuY29uc3QgcHJvamVjdE9iaiA9IGNyZWF0ZVByb2plY3RPYmplY3QoKTtcclxuYWRkQ2FyZHMoKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKXtcclxuXHJcbmxldCBmb3JtU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVNwYWNlJyk7XHJcbmxldCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RCdXR0b24nKTtcclxubmV3UHJvamVjdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld1Byb2plY3QpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdIaWRlJ1xyXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVByb2plY3RGb3JtKTtcclxubGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3UHJvamVjdEZvcm0nKTtcclxubmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtJyk7XHJcblxyXG5sZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG50aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwnKVxyXG50aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0IFRpdGxlJ1xyXG5uZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxubGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG50aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RUaXRsZScpO1xyXG50aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcclxudGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG5sZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxyXG5zdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0U3VibWl0Jyk7XHJcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbicpO1xyXG5uZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG5mb3JtU3BhY2UuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pXHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZG5ld1Byb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjdXJyZW50UHJvamVjdCgpe1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFByb2plY3QoZWxlbSl7XHJcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcbiAgICBjdXJyZW50UHJvamVjdC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpXHJcbiAgICBjdXJyZW50UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luYWN0aXZlJylcclxuICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycsICdpbmFjdGl2ZScpXHJcbiAgICBlbGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJylcclxuICAgIGFkZENhcmRzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZG5ld1Byb2plY3QoKXtcclxuICAgIGxldCB0aXRsZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0dGl0bGVCYXInKTtcclxuICAgIGxldCBkZWZhdWx0UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcclxuICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJyk7XHJcbiAgICBkZWZhdWx0UHJvamVjdC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpXHJcbiAgICBkZWZhdWx0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luYWN0aXZlJylcclxuICAgIGxldCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJykudmFsdWU7XHJcbiAgICBsZXQgbmV3QXJyID0gW11cclxuICAgcHJvamVjdE9ialtuZXdQcm9qZWN0VGl0bGVdID0gbmV3QXJyXHJcbiAgIC8vY29uc29sZS5sb2cocHJvamVjdE9iaik7XHJcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBuZXdQcm9qZWN0VGl0bGUpO1xyXG4gICAgbmV3UHJvamVjdC5pbm5lclRleHQgPSBuZXdQcm9qZWN0VGl0bGU7XHJcbiAgICB0aXRsZUJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtzd2l0Y2hQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KX0pXHJcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtzd2l0Y2hQcm9qZWN0KG5ld1Byb2plY3QpfSlcclxuICAgLy8gbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSkpO1xyXG4gICAgLy9uZXdQcm9qZWN0Lm9uY2xpY2sgPSBjdXJyZW50UHJvamVjdCgpO1xyXG4gICAgaGlkZVByb2plY3RGb3JtKCk7XHJcbiAgICAvL3JldHVybiBuZXdwcm9qZWN0T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XHJcbiAgICBsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKTtcclxuICAgIG5ld1Byb2plY3RGb3JtLnJlbW92ZSgpO1xyXG4gICAgbGV0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdXR0b25cIik7XHJcbiAgICBuZXdQcm9qZWN0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZVByb2plY3RGb3JtKTtcclxuICAgIG5ld1Byb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0NyZWF0ZSBOZXcgUHJvamVjdCc7XHJcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3UHJvamVjdCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZENhcmRzKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0T2JqKTtcclxuICAgIGxpc3RJdGVtcygpO1xyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG4gICAgbGV0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdCgpO1xyXG4gICAgbGV0IHRpdGxlID0gcHJvamVjdC5hdHRyaWJ1dGVzWydpZCddLnZhbHVlO1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0T2JqW3RpdGxlXTtcclxuICAgIGxldCBhbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XHJcbiAgICBpZiAoYWxsQ2FyZHMubGVuZ3RoICE9IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbENhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFsbENhcmRzW2ldLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdEFycmF5W2ldLnByb2plY3QgPT0gdGl0bGUpIHtcclxuICAgICAgICBkaXNwbGF5Q2FyZChjdXJyZW50UHJvamVjdEFycmF5W2ldKTtcclxuICAgIH19XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNhcmQoYXJyKSB7XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4gICAgICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGB0b0RvXyR7YXJyLm51bWJlcn1gKTtcclxuICAgICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgICAgIGxldCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQmFyJyk7XHJcbiAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xyXG4gICAgICAgICAgIGxldCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgIGNhcmRCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJvZHknKTtcclxuICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcclxuICAgICAgICAgICBsZXQgcHJpb3JpdHlDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eUNvbG9yJyk7XHJcbiAgICAgICAgICAgcHJpb3JpdHlDb2xvci5zZXRBdHRyaWJ1dGUoJ2lkJywgYXJyLnByaW9yaXR5KTtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHByaW9yaXR5Q29sb3IpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBgY29tcGxldGVfJHthcnIubnVtYmVyfWApO1xyXG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCdXR0b24nKTtcclxuICAgICAgICAgICAgY29tcGxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0NvbXBsZXRlJztcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGBlZGl0XyR7YXJyLm51bWJlcn1gKTtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCdXR0b24nKTtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvbi5pbm5lclRleHQgPSAnTW9kaWZ5JztcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGBleHBhbmRfJHthcnIubnVtYmVyfWApO1xyXG4gICAgICAgICAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGV4cGFuZEJ1dHRvbi5pbm5lclRleHQgPSAnRXhwYW5kJztcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHJhc2hCdXR0b24gPSBuZXcgSW1hZ2U7XHJcbiAgICAgICAgICAgIHRyYXNoQnV0dG9uLnNyYyA9IHRyYXNoSWNvbjtcclxuICAgICAgICAgICAgdHJhc2hCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGBkZWxldGVfJHthcnIubnVtYmVyfWApO1xyXG4gICAgICAgICAgICB0cmFzaEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RyYXNoQnV0dG9uJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaWVsZCcpO1xyXG4gICAgICAgICAgICB0aXRsZS5pbm5lclRleHQgPSAnVGl0bGU6JztcclxuICAgICAgICAgICAgbGV0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGl0bGVWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ZhbHVlJyk7XHJcbiAgICAgICAgICAgIHRpdGxlVmFsdWUuaW5uZXJUZXh0ID0gYXJyLnRpdGxlO1xyXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmllbGQnKTtcclxuICAgICAgICAgICAgZGF0ZS5pbm5lclRleHQgPSAnRHVlLURhdGU6JztcclxuICAgICAgICAgICAgbGV0IGRhdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkYXRlVmFsdWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd2YWx1ZScpO1xyXG4gICAgICAgICAgICBkYXRlVmFsdWUuaW5uZXJUZXh0ID0gYXJyLmR1ZURhdGU7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRpdGxlKVxyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCh0aXRsZVZhbHVlKVxyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChkYXRlKVxyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChkYXRlVmFsdWUpXHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRyYXNoQnV0dG9uKTtcclxuXHJcbiAgICBcclxuICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpZWxkJyk7XHJcbiAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XHJcbiAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBkZXNjcmlwdGlvblZhbHVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndmFsdWUnKTtcclxuICAgICAgICAgICBkZXNjcmlwdGlvblZhbHVlLmlubmVyVGV4dCA9IGFyci5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICBsZXQgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpZWxkJyk7XHJcbiAgICAgICAgICAgbm90ZXMuaW5uZXJUZXh0ID0gJ05vdGVzOic7XHJcbiAgICAgICAgICAgbGV0IG5vdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgIG5vdGVWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ZhbHVlJyk7XHJcbiAgICAgICAgICAgbm90ZVZhbHVlLmlubmVyVGV4dCA9IGFyci5ub3RlcztcclxuXHJcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICdSZXN0YXJ0J1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0NvbXBsZXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlZGl0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHJvamVjdCA9IFwiZGVsZXRlZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FyZFRpdGxlLnJlbW92ZUNoaWxkKGVkaXRCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlRm9ybSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cmFzaEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFRvLURvP1wiKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRleHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wcm9qZWN0ID0gXCJkZWxldGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2FyZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnIucHJvamVjdClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICBleHBhbmRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVmFsdWUpXHJcbiAgICAgICAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKG5vdGVzKVxyXG4gICAgICAgICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChub3RlVmFsdWUpXHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChjb2xsYXBzZUJ1dHRvbik7XHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChleHBhbmRCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY29sbGFwc2VCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhcmRCb2R5LnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIGNhcmRCb2R5LnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY2FyZEJvZHkucmVtb3ZlQ2hpbGQobm90ZXMpO1xyXG4gICAgICAgICAgICAgICAgY2FyZEJvZHkucmVtb3ZlQ2hpbGQobm90ZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChjb2xsYXBzZUJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgIH1cclxuICAgICAgIGxldCBjb2xsYXBzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgIGNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBgY29sbGFwc2VfJHthcnIubnVtYmVyfWApO1xyXG4gICAgICAgICAgIGNvbGxhcHNlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJ1dHRvbicpO1xyXG4gICAgICAgICAgIGNvbGxhcHNlQnV0dG9uLmlubmVyVGV4dCA9ICdIaWRlJztcclxuICAgICAgICAgIGNhcmREcmFnKGNhcmQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgYWxsSW5hY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5hY3RpdmUnKVxyXG4gICAgLy9jb25zb2xlLmxvZyhhbGxJbmFjdGl2ZSk7XHJcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbEluYWN0aXZlLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhhbGxJbmFjdGl2ZVtrXSk7XHJcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGFsbEluYWN0aXZlW2tdLmF0dHJpYnV0ZXNbJ2lkJ10udmFsdWU7XHJcbiAgICAgICAgbGV0IHByb2plY3RBcnJheSA9IHByb2plY3RPYmpbcHJvamVjdFRpdGxlXTtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0QXJyYXlbcl0ucHJvamVjdCA9PSBwcm9qZWN0LmF0dHJpYnV0ZXNbJ2lkJ10udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5W3JdKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlDYXJkKHByb2plY3RBcnJheVtyXSk7XHJcbiAgICAgICAgICAgIH19fX1cclxuXHJcblxyXG4vLyBBZGRzIFRvIERvIGl0ZW1zIGZyb20gRm9ybSBpbnRvIExpc3QgSXRlbSBPYmplY3RzLCB0aGVuIGFkZHMgdGhlbSB0byBhcHByb3ByaWF0ZSBQcm9qZWN0IEFycmF5IGFmdGVyIGZvcm0gU3VibWl0IEJ1dHRvbiBpcyBjbGlja2VkXHJcbmZ1bmN0aW9uIGFkZHRvRG8oKSB7XHJcbiAgICBsZXQgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmF0dHJpYnV0ZXNbJ2lkJ10udmFsdWU7XHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlO1xyXG4gICAgbGV0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpO1xyXG4gICAgbGV0IHNlbGVjdGVkU2l6ZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByYWRpb0J1dHRvbiBvZiByYWRpb0J1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYWRpb0J1dHRvbi5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTaXplID0gcmFkaW9CdXR0b24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIGxldCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXNcIikudmFsdWU7XHJcbiAgICBsZXQgbmV3SXRlbSA9IG5ldyBsaXN0SXRlbShjb3VudGVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHNlbGVjdGVkU2l6ZSwgcHJvamVjdE5hbWUsIG5vdGVzKTtcclxuICAgIHByb2plY3RPYmpbcHJvamVjdE5hbWVdLnB1c2gobmV3SXRlbSk7XHJcbiAgICByZW1vdmVGb3JtKCk7XHJcbiAgICBjb3VudGVyKys7XHJcbiAgICBhZGRDYXJkcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlV29yaygpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBgcHJvamVjdHNgLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0T2JqKSApO1xyXG4gICAgY29uc29sZS5sb2coIEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBgcHJvamVjdHNgICkgKSApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIGBjb3VudGVyYCwgSlNPTi5zdHJpbmdpZnkoY291bnRlcikgKTtcclxufVxyXG4gICBcclxuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcclxuICAgIGxldCBmb3JtU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVNwYWNlJylcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIC8vY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY29udGVudC5yZW1vdmUoKTtcclxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XHJcbiAgICBhZGRCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVG9kbycpO1xyXG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uJyk7XHJcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBuZXcgSXRlbSc7XHJcbiAgICBmb3JtU3BhY2UuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUZvcm0pO1xyXG4gICAgLy9jdXJyZW50UHJvamVjdC5yZW1vdmVDaGlsZChjb250ZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FyZERyYWcoY2FyZCkge1xyXG5cclxuLy9sZXQgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XHJcbi8vbGV0IGNhcmRJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcclxuLy9sZXQgY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdCgpO1xyXG5jYXJkLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRCdXR0b24nKVxyXG4gICAgbGV0IHRyYXNoQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFzaEJ1dHRvbicpXHJcbiAgICBsZXQgZWxlbWVudEJlbG93ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGVsZW1lbnRCZWxvdyA9PSBidXR0b25zW2ldKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9ZWxzZSBpZiAoZWxlbWVudEJlbG93ID09IHRyYXNoQnV0dG9uc1tpXSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfX1cclxuXHJcblxyXG5cclxuICAgIGxldCBzaGlmdFggPSBldmVudC5jbGllbnRYIC0gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgbGV0IHNoaWZ0WSA9IGV2ZW50LmNsaWVudFkgLSBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHJcbiAgICBjYXJkLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGNhcmQuc3R5bGUuekluZGV4ID0gMTAwMDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNhcmQpO1xyXG5cclxuICAgIG1vdmVDYXJkKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcblxyXG4vL21vdmVzIENhcmQgYXQgdGhlIFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgdGhlIHBhZ2UsIHRha2luZyBhY2NvdW50IGZvciB0aGUgc2hpZnRzIGluaXRpYWxseSB3aGVuIGNsaWNraW5nIG9uIGNhcmRcclxuICAgIGZ1bmN0aW9uIG1vdmVDYXJkKHBhZ2VYLCBwYWdlWSkge1xyXG4gICAgICAgIGNhcmQuc3R5bGUubGVmdCA9IHBhZ2VYIC0gc2hpZnRYICsgJ3B4JztcclxuICAgICAgICBjYXJkLnN0eWxlLnRvcCA9IHBhZ2VZIC0gc2hpZnRZICsgJ3B4JztcclxuICAgICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50RHJvcHBhYmxlID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xyXG4gICAgICAgIG1vdmVDYXJkKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XHJcbiAgICBcclxuXHJcbiAgICAgICAgY2FyZC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGxldCBlbGVtQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG4gICAgICAgIGNhcmQuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFlbGVtQmVsb3cpIHJldHVybjtcclxuICAgICAgICBsZXQgZHJvcHBhYmxlQmVsb3cgPSBlbGVtQmVsb3cuY2xvc2VzdCgnLmluYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUgIT0gZHJvcHBhYmxlQmVsb3cpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcclxuICAgICAgICAgICAgICAgIGxlYXZlRHJvcHBhYmxlKGN1cnJlbnREcm9wcGFibGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnREcm9wcGFibGUgPSBkcm9wcGFibGVCZWxvdztcclxuICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcclxuICAgICAgICBjYXJkLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgICAgICAgICAvL2N1cnJlbnREcm9wcGFibGUuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjNmNWY5JztcclxuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3ROYW1lID0gY3VycmVudERyb3BwYWJsZS5hdHRyaWJ1dGVzWydpZCddLnZhbHVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGNhcmRJRCA9IGNhcmQuYXR0cmlidXRlc1snaWQnXS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IG51bWIgPSBjYXJkSUQucmVwbGFjZSgvW14wLTldL2csICcnKTsgXHJcbiAgICAgICAgICAgIGxldCBuZXdOdW0gPSBwYXJzZUludChudW1iLDEwKTsgXHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHByb2plY3RPYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4gIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2YWx1ZVtudW1iZXJdKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVbaV0ubnVtYmVyID09IG5ld051bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdmFsdWVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9qZWN0ID0gbmV3UHJvamVjdE5hbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBhZGRDYXJkcygpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vICBlbnRlckRyb3BwYWJsZShjdXJyZW50RHJvcHBhYmxlKTtcclxuICAgICAgICBcclxuICAgIH19fVxyXG5cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblxyXG4gICAgY2FyZC5vbm1vdXNldXAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICAgICAgY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICBhZGRDYXJkcygpO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbi8vIGZ1bmN0aW9uIGVudGVyRHJvcHBhYmxlKGVsZW0pIHtcclxuICAgIFxyXG4vLyAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3BpbmsnO1xyXG4vLyAgICAgfVxyXG5cclxuICBmdW5jdGlvbiBsZWF2ZURyb3BwYWJsZShlbGVtKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGVsZW0pO1xyXG4gICAvL2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIC8vZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsdWUnO1xyXG4gIH1cclxuXHJcbmNhcmQub25kcmFnc3RhcnQgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBmYWxzZTt9O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhck91dCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxufVxyXG5cclxuXHJcbiIsImV4cG9ydCB7Y3JlYXRlTGlzdEl0ZW19XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKCkge1xyXG4gICAgXHJcbiAgICAvLyBsZXQgaXRlbSA9IG5ldyBsaXN0SXRlbSgndGl0bGUnLCAndGhpcyBpcycsICcxMS8yJywgJ2hpZ2gnKVxyXG4gICAgLy8gY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAvLyByZXR1cm4gaXRlbVxyXG5cclxuICAgIC8vIGxldCB0aXRsZSA9IGNyZWF0ZVRpdGxlKCdUaGUgUHJhbmNpbmcgUG9ueScpXHJcbiAgICAvLyBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIC8vIHRpdGxlLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRpbmcoKSk7XHJcblxyXG4gICAgLy8gbGV0IGZvb3RlciA9IGNyZWF0ZVRpdGxlKCdCeSBKQVVHUyAyMDIyJyk7XHJcbiAgICAvLyBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcclxuICAgIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmcoKSB7XHJcbi8vICAgICAgICAgbGV0IHRpdGxlID0gXCItIGJ5IEJhcmxpbWFuIEJ1dHRlcmJ1clwiO1xyXG4vLyAgICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRpbmcnKTtcclxuLy8gICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4vLyAgICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gdGl0bGU7XHJcbi8vICAgICAgICAgcmV0dXJuIGhlYWRpbmc7XHJcbi8vICAgICB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVUaXRsZShzdHJpbmcpIHtcclxuLy8gICAgICAgICBsZXQgdGl0bGVUZXh0ID0gc3RyaW5nO1xyXG4vLyAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcclxuLy8gICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XHJcbi8vICAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVUZXh0KCkge1xyXG4vLyAgICAgbGV0IGluZm9UZXh0ID0gXCJUaGUgUHJhbmNpbmcgUG9ueSBoYXMgYmVlbiBhIEJyZWVsYW5kIHN0YXBsZSBmb3Igb3ZlciAzMDAgeWVhcnMuIENvbWUgYW5kIHN0YXkgaW4gb3VyIG1vc3QgY29tZm9ydGFibGUgcm9vbXMgKGluY2x1ZGluZyBIb2JiaXQtU2l6ZWQgcm9vbXMpIHdoaWxlIGVuam9pbmcgdGhlIGJlc3QgZm9vZCB3ZXN0IG9mIHRoZSBNaXN0eSBNb3VudGFpbnMhIC0gQmFybGltYW5cIjtcclxuLy8gICAgIGxldCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgaW5mbzEuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0Jyk7XHJcbi8vICAgICBpbmZvMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcclxuLy8gICAgIGluZm8xLmlubmVyVGV4dCA9IGluZm9UZXh0O1xyXG4vLyAgICAgcmV0dXJuIGluZm8xO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVIb3VycygpIHtcclxuLy8gICAgICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbi8vICAgICAgICAgbGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJMaXN0Jyk7XHJcbi8vICAgICAgICAgbGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcclxuLy8gICAgICAgICBsZXQgZGF0YSA9IFtcIkJyZWFrZmFzdDogc2VydmVkIGF0IFN1bnJpc2UgZGFpbHlcIiwgXCJTZWNvbmQtQnJlYWtmYXN0OiBzZXJ2ZWQgdHdvIGhvdXJzIGFmdGVyIFN1bnJpc2VcIiwgXCJMdW5jaGVvbjogc2VydmVkIGF0IGhpZ2ggbm9vblwiLCBcIlN1cHBlcjogc2VydmVkIGF0IFN1bnNldFwiLCBcIlN0YWJsZXMgYXZhaWxhYmxlIHVwb24gcmVxdWVzdFwiXVxyXG4gIFxyXG4vLyAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4vLyAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbi8vICAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdEl0ZW0nKVxyXG4vLyAgICAgICAgICAgICBsaS5pbm5lclRleHQgPSBpdGVtO1xyXG4vLyAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICByZXR1cm4gbGlzdDtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XHJcbi8vICAgICBsZXQgaW5mb1RleHQgPSBcIkZpbmQgdXMganVzdCBwYXN0IHRoZSBXZXN0LUdhdGUsIGluIEJyZWUsIHdlc3Qgb2YgQ2hldC13b29kLCBub3J0aCBmcm9tIHRoZSBHcmVlbndheVwiXHJcbi8vICAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIGxvY2F0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24nKTtcclxuLy8gICAgIGxvY2F0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xyXG4vLyAgICAgbG9jYXRpb24uaW5uZXJUZXh0ID0gaW5mb1RleHQ7XHJcbi8vICAgICByZXR1cm4gbG9jYXRpb247XHJcbi8vIH1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==