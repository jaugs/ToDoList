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
___CSS_LOADER_EXPORT___.push([module.id, "/* @font-face {\n    font-family: 'MyFont';\n    src: url('./Tolkien.ttf') format(\"truetype\");\n    font-weight: 600;\n    font-style: normal;\n  }\n   */\nbody {\n  margin: 0;\n  padding: 0px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#container {\n  display: grid;\n  grid-template-columns: 1fr 6fr 6fr;\n  grid-template-rows: 0.5fr 2fr 3fr;\n  grid-template-areas:\n    \"h h h\"\n    \"s c c\"\n    \"t c c\";\n}\n\n#formSpace {\n  grid-area: s;\n  display: flex;\n  flex-direction: column;\n  background-color: #e2e8f0;\n  color: #1e293b;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem;\n  padding-top: 1.5rem;\n  padding-bottom: 2rem;\n}\n\n#header {\n  grid-area: h;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: #f8fafc;\n  background-color: #475569;\n  padding: 0.5rem;\n}\n\nh2 {\n  font-size: 1.8em;\n}\n\n.dragger {\n  width: 250px;\n  height: 30px;\n  background-color: #0f172a;\n}\n\n.button {\n  width: 14rem;\n  /* height: 75px; */\n  cursor: pointer;\n  background-color: #94a3b8;\n  color: #0f172a;\n  font-weight: 700;\n  font-size: 22px;\n  border-radius: 40px;\n  padding: 9px;\n  box-shadow: 0 2px #0f172a;\n}\n\n.button:hover {\n  background-color: #334155;\n  color: #f8fafc;\n}\n\n.button:active {\n  background-color: #1e293b;\n  color: #f8fafc;\n  transform: translateY(4px);\n}\n/* \n.project {\n    /* display: grid;\n    grid-template-columns: 1fr 6fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    background-color: #e2e8f0;\n    color: #0f172a;\n    padding: .5rem;\n    gap: 20px */\n\n#projecttitleBar {\n  grid-area: t;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem;\n  gap: 3rem;\n  align-items: center;\n  background-color: #e2e8f0;\n  color: #1e293b;\n}\n\n.projectField {\n  font-size: 22px;\n  font-weight: 700;\n  background-color: #e2e8f0;\n  color: #0f172a;\n  border-bottom: 1px solid #0f172a;\n  padding-left: 3em;\n  padding-right: 3em;\n  padding-bottom: 0.3em;\n}\n\n.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0) 1px 3px 10px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n  border: 4px solid #475569;\n}\n\n.inactive {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #edf1f5;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n}\n\n.list {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  padding-top: 10px;\n  padding-left: 20px;\n}\n\n.listColor {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n}\n\n#display {\n  grid-area: c;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  background-color: #f8fafc;\n  color: #0f172a;\n  padding: 10px;\n  gap: 20px;\n}\n.card {\n  border: 2px solid black;\n  background-color: #cbd5e1;\n  border-radius: 15px;\n  font-size: 28px;\n  font-weight: 600;\n  padding: 0px 5px 5px 5px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 300px;\n  height: 250px;\n}\n\n.cardBar {\n  padding: 2px;\n}\n\n.cardBody {\n  display: grid;\n  padding: 20px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-areas:\n    \"t tv\"\n    \"d dv\"\n    \"s sv\"\n    \"n nv\"\n    \"b b\";\n  font-size: 22px;\n}\n\n.cardButton {\n  background-color: #fcfdfd;\n  color: #0f172a;\n  border-radius: 10px;\n  width: 75px;\n}\n\n.titleField {\n  grid-area: t;\n}\n.titleValue {\n  grid-area: tv;\n}\n\n.dateField {\n  grid-area: d;\n}\n.dateValue {\n  grid-area: dv;\n}\n\n.descriptionField {\n  grid-area: s;\n}\n.descriptionValue {\n  grid-area: sv;\n}\n\n.notesField {\n  grid-area: n;\n}\n.notesValue {\n  grid-area: nv;\n}\n\n.trashButton {\n  grid-area: b;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  padding: 2px;\n  border-radius: 10px;\n  border: 2px solid #0f172a;\n}\n\n.priorityColor {\n  width: 300px;\n  height: 15px;\n  border-radius: 15px;\n  border: 2px solid #0f172a;\n}\n\n#Urgent {\n  background-color: red;\n}\n\n#High {\n  background-color: orange;\n}\n\n#Medium {\n  background-color: yellow;\n}\n\n#Low {\n  background-color: green;\n}\n\n#content {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.form {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.label {\n  font-size: 22px;\n  font-weight: 700;\n  width: 20rem;\n  color: #f8fafc;\n  padding: 15px;\n  gap: 5px;\n  background-color: #475569;\n  /* background-size: 100% 100%;\n    background-position: center center; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px,\n    rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\n}\n\n.text {\n  text-align: center;\n}\n\n.item,\n.listItem {\n  /* font-family: 'MyFont'; */\n  font-size: 22px;\n  font-weight: 500;\n  width: 15rem;\n  color: black;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ninput[type=\"text\"] {\n  border: 4px solid #1e293b;\n  border-radius: 10px;\n  background-color: #f8fafc;\n}\n\ninput[type=\"text\"]:focus {\n  border: 4px solid #0f172a;\n}\n\n#description {\n  height: 5rem;\n}\n\n.image {\n  width: 200px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* @font-face {\n    font-family: 'MyFont';\n    src: url('./Tolkien.ttf') format(\"truetype\");\n    font-weight: 600;\n    font-style: normal;\n  }\n   */\nbody {\n  margin: 0;\n  padding: 0px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#container {\n  display: grid;\n  grid-template-columns: 1fr 6fr 6fr;\n  grid-template-rows: 0.5fr 2fr 3fr;\n  grid-template-areas:\n    \"h h h\"\n    \"s c c\"\n    \"t c c\";\n}\n\n#formSpace {\n  grid-area: s;\n  display: flex;\n  flex-direction: column;\n  background-color: #e2e8f0;\n  color: #1e293b;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem;\n  padding-top: 1.5rem;\n  padding-bottom: 2rem;\n}\n\n#header {\n  grid-area: h;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: #f8fafc;\n  background-color: #475569;\n  padding: 0.5rem;\n}\n\nh2 {\n  font-size: 1.8em;\n}\n\n.dragger {\n  width: 250px;\n  height: 30px;\n  background-color: #0f172a;\n}\n\n.button {\n  width: 14rem;\n  /* height: 75px; */\n  cursor: pointer;\n  background-color: #94a3b8;\n  color: #0f172a;\n  font-weight: 700;\n  font-size: 22px;\n  border-radius: 40px;\n  padding: 9px;\n  box-shadow: 0 2px #0f172a;\n}\n\n.button:hover {\n  background-color: #334155;\n  color: #f8fafc;\n}\n\n.button:active {\n  background-color: #1e293b;\n  color: #f8fafc;\n  transform: translateY(4px);\n}\n/* \n.project {\n    /* display: grid;\n    grid-template-columns: 1fr 6fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    background-color: #e2e8f0;\n    color: #0f172a;\n    padding: .5rem;\n    gap: 20px */\n\n#projecttitleBar {\n  grid-area: t;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem;\n  gap: 3rem;\n  align-items: center;\n  background-color: #e2e8f0;\n  color: #1e293b;\n}\n\n.projectField {\n  font-size: 22px;\n  font-weight: 700;\n  background-color: #e2e8f0;\n  color: #0f172a;\n  border-bottom: 1px solid #0f172a;\n  padding-left: 3em;\n  padding-right: 3em;\n  padding-bottom: 0.3em;\n}\n\n.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0) 1px 3px 10px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n  border: 4px solid #475569;\n}\n\n.inactive {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #edf1f5;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n}\n\n.list {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  padding-top: 10px;\n  padding-left: 20px;\n}\n\n.listColor {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n}\n\n#display {\n  grid-area: c;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  background-color: #f8fafc;\n  color: #0f172a;\n  padding: 10px;\n  gap: 20px;\n}\n.card {\n  border: 2px solid black;\n  background-color: #cbd5e1;\n  border-radius: 15px;\n  font-size: 28px;\n  font-weight: 600;\n  padding: 0px 5px 5px 5px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 300px;\n  height: 250px;\n}\n\n.cardBar {\n  padding: 2px;\n}\n\n.cardBody {\n  display: grid;\n  padding: 20px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-areas:\n    \"t tv\"\n    \"d dv\"\n    \"s sv\"\n    \"n nv\"\n    \"b b\";\n  font-size: 22px;\n}\n\n.cardButton {\n  background-color: #fcfdfd;\n  color: #0f172a;\n  border-radius: 10px;\n  width: 75px;\n}\n\n.titleField {\n  grid-area: t;\n}\n.titleValue {\n  grid-area: tv;\n}\n\n.dateField {\n  grid-area: d;\n}\n.dateValue {\n  grid-area: dv;\n}\n\n.descriptionField {\n  grid-area: s;\n}\n.descriptionValue {\n  grid-area: sv;\n}\n\n.notesField {\n  grid-area: n;\n}\n.notesValue {\n  grid-area: nv;\n}\n\n.trashButton {\n  grid-area: b;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  padding: 2px;\n  border-radius: 10px;\n  border: 2px solid #0f172a;\n}\n\n.priorityColor {\n  width: 300px;\n  height: 15px;\n  border-radius: 15px;\n  border: 2px solid #0f172a;\n}\n\n#Urgent {\n  background-color: red;\n}\n\n#High {\n  background-color: orange;\n}\n\n#Medium {\n  background-color: yellow;\n}\n\n#Low {\n  background-color: green;\n}\n\n#content {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.form {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.label {\n  font-size: 22px;\n  font-weight: 700;\n  width: 20rem;\n  color: #f8fafc;\n  padding: 15px;\n  gap: 5px;\n  background-color: #475569;\n  /* background-size: 100% 100%;\n    background-position: center center; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px,\n    rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\n}\n\n.text {\n  text-align: center;\n}\n\n.item,\n.listItem {\n  /* font-family: 'MyFont'; */\n  font-size: 22px;\n  font-weight: 500;\n  width: 15rem;\n  color: black;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ninput[type=\"text\"] {\n  border: 4px solid #1e293b;\n  border-radius: 10px;\n  background-color: #f8fafc;\n}\n\ninput[type=\"text\"]:focus {\n  border: 4px solid #0f172a;\n}\n\n#description {\n  height: 5rem;\n}\n\n.image {\n  width: 200px;\n}\n"],"sourceRoot":""}]);
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
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/prefer-default-export

// eslint-disable-next-line import/first, import/extensions, import/no-cycle


function createForm() {
  const header = document.getElementById("header");
  const content = document.createElement("div");
  const addButton = document.getElementById("addTodo");
  addButton.innerText = "Hide";
  addButton.removeEventListener("click", createForm);
  // eslint-disable-next-line no-use-before-define
  addButton.addEventListener("click", hideForm);
  content.style.display = "block flex";
  content.setAttribute("id", "content");
  header.appendChild(content);

  const titleLabel = document.createElement("div");
  titleLabel.setAttribute("class", "label");
  titleLabel.innerText = "Item Title";
  content.appendChild(titleLabel);
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("id", "title");
  title.setAttribute("class", "item");
  titleLabel.appendChild(title);

  const descriptionLabel = document.createElement("div");
  descriptionLabel.setAttribute("class", "label");
  descriptionLabel.innerText = "Item Description";
  content.appendChild(descriptionLabel);
  const description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("id", "description");
  description.setAttribute("class", "item");
  descriptionLabel.appendChild(description);

  const dueLabel = document.createElement("div");
  dueLabel.setAttribute("class", "label");
  dueLabel.innerText = "Due Date";
  content.appendChild(dueLabel);
  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("id", "dueDate");
  dueDate.setAttribute("class", "item");
  dueLabel.appendChild(dueDate);

  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");
  wrapper.setAttribute("class", "label");
  wrapper.innerText = "Set Priority for Item";
  content.appendChild(wrapper);

  const options = {
    Urgent: false,
    High: false,
    Medium: false,
    Low: false,
  };

  // eslint-disable-next-line guard-for-in
  for (const key in options) {
    const label = document.createElement("label");
    label.innerText = key;
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "priority";
    input.value = key;
    label.appendChild(input);
    wrapper.appendChild(label);
  }

  const notesLabel = document.createElement("div");
  notesLabel.setAttribute("class", "label");
  notesLabel.innerText = "Notes:";
  content.appendChild(notesLabel);
  const notes = document.createElement("input");
  notes.setAttribute("type", "text");
  notes.setAttribute("id", "notes");
  notes.setAttribute("class", "item");
  notesLabel.appendChild(notes);

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submit");
  submit.setAttribute("class", "button");
  content.appendChild(submit);
  submit.addEventListener("click", _index_js__WEBPACK_IMPORTED_MODULE_0__.addtoDo);
}

function hideForm() {
  const content = document.getElementById("content");
  content.remove();
  const addButton = document.getElementById("addTodo");
  addButton.removeEventListener("click", hideForm);
  addButton.innerText = "Add new Item";
  addButton.addEventListener("click", createForm);
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash.svg */ "./src/trash.svg");
/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */






// sdfgddgsdg
// ADD DELETE ITEM BUTTON - Done
// ADD MARK COMPLETE BUTTON - done
// CSS
// ADD PRIORITY/NOTES OTHER FIELDS - done
// CHANGE VALUES ON  TO DOS- done
// CLEAN UP/COMMENT
// form validation
// change heading
// delete Projects
// form styling

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

const toDoArr = [];

class listItem {
  constructor(number, title, description, dueDate, priority, project, notes) {
    this.number = number;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.notes = notes;
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
    const projectObj = JSON.parse(localStorage.getItem("projects"));
    console.log("hello");
    // console.log(projectObj);

    for (const key of Object.entries(projectObj)) {
      if (key[0] != "Default") {
        const projectTitle = document.createElement("div");
        const titleBar = document.getElementById("projecttitleBar");
        projectTitle.setAttribute("id", key[0]);
        projectTitle.setAttribute("class", "inactive");
        projectTitle.innerText = key[0];
        titleBar.appendChild(projectTitle);
        console.log(key[0]);
        projectTitle.addEventListener("click", () => {
          switchProject(projectTitle);
        });
        const defaultProject = document.getElementById("Default");
        defaultProject.addEventListener("click", () => {
          switchProject(defaultProject);
        });
      }
    }
    // if (projectObj.length)
    return projectObj;
  }
  const projectObj = {
    Default: toDoArr,
  };
  console.log("empty");
  console.log(projectObj);
  return projectObj;
}

function listItems() {
  const allListItems = document.querySelectorAll(".list");
  for (let k = 0; k < allListItems.length; k++) {
    allListItems[k].remove();
  }
  Object.entries(projectObj).forEach(([, value]) => {
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const { project } = item;
      const projectName = document.getElementById(project);
      if (projectName != null) {
      const sidebarItem = document.createElement("div");
      sidebarItem.innerText = item.title;
      sidebarItem.setAttribute("class", "list");
      projectName.appendChild(sidebarItem);
      const priorityColor = document.createElement("div");
      priorityColor.setAttribute("class", "listColor");
      priorityColor.setAttribute("id", item.priority);
      sidebarItem.appendChild(priorityColor);
    }}
  });
}

function createCounter() {
  if (localStorage.length != 0) {
    const counter = JSON.parse(localStorage.getItem("counter"));
    console.log("counter found");
    console.log(counter);
    return counter;
  }
  const counter = 0;
  return counter;
}

function createHeading() {
  const heading = document.createElement("div");
  heading.setAttribute("id", "header");
  const welcome = document.createElement("h2");
  welcome.setAttribute("id", "welcome");
  welcome.innerText = "Welcome to your Projects";
  container.appendChild(heading);
  heading.appendChild(welcome);
  const formSpace = document.createElement("div");
  formSpace.setAttribute("id", "formSpace");
  container.appendChild(formSpace);
  const newProjectButton = document.createElement("button");
  newProjectButton.setAttribute("id", "newProjectButton");
  newProjectButton.setAttribute("class", "button");
  newProjectButton.innerText = "Create New Project";
  newProjectButton.addEventListener("click", createNewProject);
  formSpace.appendChild(newProjectButton);

  const addButton = document.createElement("button");
  addButton.setAttribute("id", "addTodo");
  addButton.setAttribute("class", "button");
  addButton.innerText = "Add new Item";
  formSpace.appendChild(addButton);
  addButton.addEventListener("click", _form_js__WEBPACK_IMPORTED_MODULE_1__.createForm);

  const saveButton = document.createElement("button");
  saveButton.setAttribute("id", "saveButton");
  saveButton.setAttribute("class", "button");
  saveButton.innerText = "Save Work";
  formSpace.appendChild(saveButton);
  saveButton.addEventListener("click", saveWork);

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteButton");
  deleteButton.setAttribute("class", "button");
  deleteButton.innerText = "Delete Work";
  formSpace.appendChild(deleteButton);
  deleteButton.addEventListener("click", clearOut);
  // const prancingPony = new Image();
  // prancingPony.src = prancingPony2;
  // prancingPony.id="ponyLogo";
  // heading.appendChild(prancingPony);
}
createHeading();

function createDefaultProject() {
  const header = document.getElementById("header");
  const defaultProject = document.createElement("div");
  defaultProject.setAttribute("id", "projectSpace");
  defaultProject.setAttribute("class", "project");
  header.appendChild(defaultProject);

  const projecttitleBar = document.createElement("div");
  projecttitleBar.setAttribute("id", "projecttitleBar");
  const projects = document.createElement("div");
  projects.innerText = "Projects";
  projects.setAttribute("class", "projectField");
  projecttitleBar.appendChild(projects);
  const projectTitle = document.createElement("div");
  projectTitle.innerText = "Default Project";
  projectTitle.setAttribute("class", "active");
  projectTitle.setAttribute("id", "Default");
  container.appendChild(projecttitleBar);
  projecttitleBar.appendChild(projectTitle);
  const cardSpace = document.createElement("div");
  cardSpace.setAttribute("id", "display");
  container.appendChild(cardSpace);
}

createDefaultProject();
let counter = createCounter();
const projectObj = createProjectObject();
addCards();

function createNewProject() {
  const formSpace = document.getElementById("formSpace");
  const newProjectButton = document.getElementById("newProjectButton");
  newProjectButton.removeEventListener("click", createNewProject);
  newProjectButton.innerText = "Hide";
  newProjectButton.addEventListener("click", hideProjectForm);
  const newProjectForm = document.createElement("div");
  newProjectForm.setAttribute("id", "newProjectForm");
  newProjectForm.setAttribute("class", "form");

  const titleLabel = document.createElement("div");
  titleLabel.setAttribute("class", "label");
  titleLabel.innerText = "Project Title";
  newProjectForm.appendChild(titleLabel);
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("id", "projectTitle");
  title.setAttribute("class", "item");
  titleLabel.appendChild(title);

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "projectSubmit");
  submit.setAttribute("class", "button");
  newProjectForm.appendChild(submit);
  formSpace.appendChild(newProjectForm);
  submit.addEventListener("click", addnewProject);
}

function currentProject() {
  const current = document.querySelector(".active");
  return current;
}

function switchProject(elem) {
  const project = document.querySelector(".active");
  project.removeAttribute("class", "active");
  project.setAttribute("class", "inactive");
  elem.removeAttribute("class", "inactive");
  elem.setAttribute("class", "active");
  addCards();
}

function addnewProject() {
  const titleBar = document.getElementById("projecttitleBar");
  const defaultProject = currentProject();
  // console.log(defaultProject);
  const newProject = document.createElement("div");
  newProject.setAttribute("class", "active");
  defaultProject.removeAttribute("class", "active");
  defaultProject.setAttribute("class", "inactive");
  const newProjectTitle = document.getElementById("projectTitle").value;
  const newArr = [];
  projectObj[newProjectTitle] = newArr;
  // console.log(projectObj);
  newProject.setAttribute("id", newProjectTitle);
  newProject.innerText = newProjectTitle;
  titleBar.appendChild(newProject);
  defaultProject.addEventListener("click", () => {
    switchProject(defaultProject);
  });
  newProject.addEventListener("click", () => {
    switchProject(newProject);
  });
  // newProject.addEventListener('click', currentProject(newProjectTitle));
  // newProject.onclick = currentProject();
  hideProjectForm();
  // return newprojectObj;
}

function hideProjectForm() {
  const newProjectForm = document.getElementById("newProjectForm");
  newProjectForm.remove();
  const newProjectButton = document.getElementById("newProjectButton");
  newProjectButton.removeEventListener("click", hideProjectForm);
  newProjectButton.innerText = "Create New Project";
  newProjectButton.addEventListener("click", createNewProject);
}

function addCards() {
  // console.log(projectObj);
  listItems();
  const display = document.getElementById("display");
  const project = currentProject();
  const title = project.attributes.id.value;
  const currentProjectArray = projectObj[title];
  const allCards = document.querySelectorAll(".card");
  if (allCards.length != 0) {
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].remove();
    }
  }
  for (let i = 0; i < currentProjectArray.length; i++) {
    if (currentProjectArray[i].project == title) {
      displayCard(currentProjectArray[i]);
    }
  }

  function displayCard(arr) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", `toDo_${arr.number}`);
    display.appendChild(card);
    const cardTitle = document.createElement("div");
    cardTitle.setAttribute("class", "cardBar");
    card.appendChild(cardTitle);
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "cardBody");
    card.appendChild(cardBody);
    const priorityColor = document.createElement("div");
    priorityColor.setAttribute("class", "priorityColor");
    priorityColor.setAttribute("id", arr.priority);
    cardTitle.appendChild(priorityColor);

    const completeButton = document.createElement("button");
    completeButton.setAttribute("id", `complete_${arr.number}`);
    completeButton.setAttribute("class", "cardButton");
    completeButton.innerText = "Complete";
    cardTitle.appendChild(completeButton);

    const uncompleteButton = document.createElement("button");
    uncompleteButton.setAttribute("id", `uncomplete_${arr.number}`);
    uncompleteButton.setAttribute("class", "cardButton");
    uncompleteButton.innerText = "Not Finished";
   

    const editButton = document.createElement("button");
    editButton.setAttribute("id", `edit_${arr.number}`);
    editButton.setAttribute("class", "cardButton");
    editButton.innerText = "Modify";
    cardTitle.appendChild(editButton);

    const expandButton = document.createElement("button");
    expandButton.setAttribute("id", `expand_${arr.number}`);
    expandButton.setAttribute("class", "cardButton");
    expandButton.innerText = "Expand";
    cardTitle.appendChild(expandButton);

    const trashButton = new Image();
    trashButton.src = _trash_svg__WEBPACK_IMPORTED_MODULE_2__;
    trashButton.setAttribute("id", `delete_${arr.number}`);
    trashButton.setAttribute("class", "trashButton");

    const title = document.createElement("div");
    title.setAttribute("class", "titleField");
    title.innerText = "Title:";
    const titleValue = document.createElement("div");
    titleValue.setAttribute("class", "titleValue");
    titleValue.innerText = arr.title;
    const date = document.createElement("div");
    date.setAttribute("class", "dateField");
    date.innerText = "Due-Date:";
    const dateValue = document.createElement("div");
    dateValue.setAttribute("class", "dateValue");
    dateValue.innerText = arr.dueDate;
    cardBody.appendChild(title);
    cardBody.appendChild(titleValue);
    cardBody.appendChild(date);
    cardBody.appendChild(dateValue);
    cardBody.appendChild(trashButton);

    const description = document.createElement("div");
    description.setAttribute("class", "descriptionField");
    description.innerText = "Description:";
    const descriptionValue = document.createElement("div");
    descriptionValue.setAttribute("class", "descriptionValue");
    descriptionValue.innerText = arr.description;
    const notes = document.createElement("div");
    notes.setAttribute("class", "notesField");
    notes.innerText = "Notes:";
    const noteValue = document.createElement("div");
    noteValue.setAttribute("class", "notesValue");
    noteValue.innerText = arr.notes;

    completeButton.onclick = () => {
      card.setAttribute("class", "complete");
      cardTitle.appendChild(uncompleteButton);
      cardTitle.removeChild(completeButton);
    
      uncompleteButton.onclick = () => {
        card.setAttribute("class", "card");
        cardTitle.appendChild(completeButton);
        cardTitle.removeChild(uncompleteButton);
      };
    };

    editButton.onclick = () => {
      arr.project = "deleted";
      cardTitle.removeChild(editButton);
      (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.createForm)();
    };

    trashButton.onclick = () => {
      const text = confirm("Are you sure you want to delete this To-Do?");
      if (text == true) {
        arr.project = "deleted";
        console.log(arr.project);
        addCards();
        
      }
    };

    expandButton.onclick = () => {
      cardBody.appendChild(description);
      cardBody.appendChild(descriptionValue);
      cardBody.appendChild(notes);
      cardBody.appendChild(noteValue);
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
    };
    let collapseButton = document.createElement("button");
    collapseButton.setAttribute("id", `collapse_${arr.number}`);
    collapseButton.setAttribute("class", "cardButton");
    collapseButton.innerText = "Hide";
    cardDrag(card);
  }

  const allInactive = document.querySelectorAll(".inactive");
  // console.log(allInactive);
  for (let k = 0; k < allInactive.length; k++) {
    // console.log(allInactive[k]);
    const projectTitle = allInactive[k].attributes.id.value;
    const projectArray = projectObj[projectTitle];
    // console.log(project);
    for (let r = 0; r < projectArray.length; r++) {
      if (projectArray[r].project == project.attributes.id.value) {
        // console.log(projectArray[r]);
        displayCard(projectArray[r]);
      }
    }
  }
}

// Adds To Do items from Form into List Item Objects, then adds them to appropriate Project Array after form Submit Button is clicked
function addtoDo() {
  const project = currentProject();
  const projectName = project.attributes.id.value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const radioButtons = document.querySelectorAll('input[name="priority"]');
  let selectedSize;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      break;
    }
  }
  const notes = document.getElementById("notes").value;
  const newItem = new listItem(
    counter,
    title,
    description,
    dueDate,
    selectedSize,
    projectName,
    notes
  );
  projectObj[projectName].push(newItem);
  removeForm();
  counter++;
  addCards();
}

function saveWork() {
  localStorage.setItem("projects", JSON.stringify(projectObj));
  console.log(JSON.parse(localStorage.getItem("projects")));
  localStorage.setItem("counter", JSON.stringify(counter));
}

function removeForm() {
  const formSpace = document.getElementById("formSpace");
  const content = document.getElementById("content");
  // content.style.display = 'none';
  content.remove();
  let addButton = document.getElementById("addTodo");
  addButton.remove();
  addButton = document.createElement("button");
  addButton.setAttribute("id", "addTodo");
  addButton.setAttribute("class", "button");
  addButton.innerText = "Add new Item";
  formSpace.appendChild(addButton);
  addButton.addEventListener("click", _form_js__WEBPACK_IMPORTED_MODULE_1__.createForm);
  // currentProject.removeChild(content);
}

function cardDrag(card) {
  // let card = document.querySelector('.card');
  // let cardID = document.querySelector('.card')
  // let currentProject = currentProject();
  card.onmousedown = function (event) {
    const buttons = document.querySelectorAll(".cardButton");
    const trashButtons = document.querySelectorAll(".trashButton");
    const elementBelow = document.elementFromPoint(
      event.clientX,
      event.clientY
    );
    for (let i = 0; i < buttons.length; i++) {
      if (elementBelow == buttons[i]) {
        return;
      }
      if (elementBelow == trashButtons[i]) {
        return;
      }
    }

    const shiftX = event.clientX - card.getBoundingClientRect().left;
    const shiftY = event.clientY - card.getBoundingClientRect().top;

    card.style.position = "absolute";
    card.style.zIndex = 1000;
    document.body.append(card);

    moveCard(event.pageX, event.pageY);

    // moves Card at the X and Y coordinates of the page, taking account for the shifts initially when clicking on card
    function moveCard(pageX, pageY) {
      card.style.left = `${pageX - shiftX}px`;
      card.style.top = `${pageY - shiftY}px`;
    }

    let currentDroppable = null;

    function onMouseMove(event) {
      moveCard(event.pageX, event.pageY);

      card.hidden = true;
      const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      card.hidden = false;
      if (!elemBelow) return;
      const droppableBelow = elemBelow.closest(".inactive");
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          card.onmouseup = function () {
            document.removeEventListener("mousemove", onMouseMove);
            // currentDroppable.style.background = '#f3f5f9';
            const newProjectName = currentDroppable.attributes.id.value;

            const cardID = card.attributes.id.value;
            const numb = cardID.replace(/[^0-9]/g, "");
            const newNum = parseInt(numb, 10);

            Object.entries(projectObj).forEach(([, value]) => {
              // console.log(value);
              // console.log(value[number]);
              for (let i = 0; i < value.length; i++) {
                if (value[i].number == newNum) {
                  const item = value[i];
                  item.project = newProjectName;
                }
              }
            });

            card.remove();
            addCards();
          };

          //  enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener("mousemove", onMouseMove);

    card.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      card.remove();
      addCards();
    };
  };

  // function enterDroppable(elem) {

  //     elem.style.background = 'pink';
  //     }

  function leaveDroppable(elem) {
    console.log(elem);
    // document.removeEventListener('mousemove', onMouseMove);
    // elem.style.background = 'blue';
  }

  card.ondragstart = function () {
    return false;
  };
}

console.log(localStorage);

function clearOut() {
  localStorage.clear();
  console.log(localStorage);
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxh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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUFPO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7QUFDa0I7QUFDSDs7QUFFakI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaG1CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9Ub2xraWVuLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcbiAgICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDZmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMmZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoIGggaFxcXCJcXG4gICAgXFxcInMgYyBjXFxcIlxcbiAgICBcXFwidCBjIGNcXFwiO1xcbn1cXG5cXG4jZm9ybVNwYWNlIHtcXG4gIGdyaWQtYXJlYTogcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIGNvbG9yOiAjMWUyOTNiO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBncmlkLWFyZWE6IGg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGNvbG9yOiAjZjhmYWZjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG59XFxuXFxuLmRyYWdnZXIge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICB3aWR0aDogMTRyZW07XFxuICAvKiBoZWlnaHQ6IDc1cHg7ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhM2I4O1xcbiAgY29sb3I6ICMwZjE3MmE7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIHBhZGRpbmc6IDlweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4ICMwZjE3MmE7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcXG4gIGNvbG9yOiAjZjhmYWZjO1xcbn1cXG5cXG4uYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgY29sb3I6ICNmOGZhZmM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuLyogXFxuLnByb2plY3Qge1xcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgICBjb2xvcjogIzBmMTcyYTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGdhcDogMjBweCAqL1xcblxcbiNwcm9qZWN0dGl0bGVCYXIge1xcbiAgZ3JpZC1hcmVhOiB0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGdhcDogM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgY29sb3I6ICMxZTI5M2I7XFxufVxcblxcbi5wcm9qZWN0RmllbGQge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGYxNzJhO1xcbiAgcGFkZGluZy1sZWZ0OiAzZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAzZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMC43cmVtO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCkgMXB4IDNweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiA0cHggc29saWQgIzQ3NTU2OTtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWY1O1xcbiAgY29sb3I6ICMwZjE3MmE7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzMpIC0ycHggMnB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLmxpc3RDb2xvciB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNkaXNwbGF5IHtcXG4gIGdyaWQtYXJlYTogYztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5jYXJkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMHB4IDVweCA1cHggNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLmNhcmRCYXIge1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uY2FyZEJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidCB0dlxcXCJcXG4gICAgXFxcImQgZHZcXFwiXFxuICAgIFxcXCJzIHN2XFxcIlxcbiAgICBcXFwibiBudlxcXCJcXG4gICAgXFxcImIgYlxcXCI7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5jYXJkQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogNzVweDtcXG59XFxuXFxuLnRpdGxlRmllbGQge1xcbiAgZ3JpZC1hcmVhOiB0O1xcbn1cXG4udGl0bGVWYWx1ZSB7XFxuICBncmlkLWFyZWE6IHR2O1xcbn1cXG5cXG4uZGF0ZUZpZWxkIHtcXG4gIGdyaWQtYXJlYTogZDtcXG59XFxuLmRhdGVWYWx1ZSB7XFxuICBncmlkLWFyZWE6IGR2O1xcbn1cXG5cXG4uZGVzY3JpcHRpb25GaWVsZCB7XFxuICBncmlkLWFyZWE6IHM7XFxufVxcbi5kZXNjcmlwdGlvblZhbHVlIHtcXG4gIGdyaWQtYXJlYTogc3Y7XFxufVxcblxcbi5ub3Rlc0ZpZWxkIHtcXG4gIGdyaWQtYXJlYTogbjtcXG59XFxuLm5vdGVzVmFsdWUge1xcbiAgZ3JpZC1hcmVhOiBudjtcXG59XFxuXFxuLnRyYXNoQnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogYjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMGYxNzJhO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzBmMTcyYTtcXG59XFxuXFxuI1VyZ2VudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNIaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuI01lZGl1bSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbiNMb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAzNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICBjb2xvcjogI2Y4ZmFmYztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICB3aWR0aDogMzVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgY29sb3I6ICNmOGZhZmM7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB3aWR0aDogMjByZW07XFxuICBjb2xvcjogI2Y4ZmFmYztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBnYXA6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMjBweCA1cHggMTBweCxcXG4gICAgcmdiKDAgMCAwIC8gMzAlKSA1cHggMTBweCAwcHggLTEwcHgsIHJnYigwIDAgMCAvIDIwJSkgNnB4IC01cHggMThweCBpbnNldDtcXG59XFxuXFxuLnRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaXRlbSxcXG4ubGlzdEl0ZW0ge1xcbiAgLyogZm9udC1mYW1pbHk6ICdNeUZvbnQnOyAqL1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICMxZTI5M2I7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICMwZjE3MmE7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbi5pbWFnZSB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7OztJQU1JO0FBQ0o7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDOzs7V0FHUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLDBCQUEwQjtBQUM1QjtBQUNBOzs7Ozs7OztlQVFlOztBQUVmO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFD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LGNBQWM7RUFDZCxhQUFhO0VBQ2IsUUFBUTtFQUNSLHlCQUF5QjtFQUN6Qjt5Q0FDdUM7RUFDdkMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixtQkFBbUI7RUFDbkI7NkVBQzJFO0FBQzdFOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIHNyYzogdXJsKCcuL1RvbGtpZW4udHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuICAgKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgNmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImggaCBoXFxcIlxcbiAgICBcXFwicyBjIGNcXFwiXFxuICAgIFxcXCJ0IGMgY1xcXCI7XFxufVxcblxcbiNmb3JtU3BhY2Uge1xcbiAgZ3JpZC1hcmVhOiBzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgY29sb3I6ICMxZTI5M2I7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgY29sb3I6ICNmOGZhZmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4uZHJhZ2dlciB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIC8qIGhlaWdodDogNzVweDsgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGEzYjg7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgcGFkZGluZzogOXB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggIzBmMTcyYTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xcbiAgY29sb3I6ICNmOGZhZmM7XFxufVxcblxcbi5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICBjb2xvcjogI2Y4ZmFmYztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG4vKiBcXG4ucHJvamVjdCB7XFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICAgIGNvbG9yOiAjMGYxNzJhO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgZ2FwOiAyMHB4ICovXFxuXFxuI3Byb2plY3R0aXRsZUJhciB7XFxuICBncmlkLWFyZWE6IHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZ2FwOiAzcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICBjb2xvcjogIzFlMjkzYjtcXG59XFxuXFxuLnByb2plY3RGaWVsZCB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwZjE3MmE7XFxuICBwYWRkaW5nLWxlZnQ6IDNlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDNlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmRmZDtcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwKSAxcHggM3B4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXI6IDRweCBzb2xpZCAjNDc1NTY5O1xcbn1cXG5cXG4uaW5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMC43cmVtO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZjU7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zMykgLTJweCAycHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ubGlzdENvbG9yIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuI2Rpc3BsYXkge1xcbiAgZ3JpZC1hcmVhOiBjO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuLmNhcmQge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAwcHggNXB4IDVweCA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4uY2FyZEJhciB7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5jYXJkQm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0IHR2XFxcIlxcbiAgICBcXFwiZCBkdlxcXCJcXG4gICAgXFxcInMgc3ZcXFwiXFxuICAgIFxcXCJuIG52XFxcIlxcbiAgICBcXFwiYiBiXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmNhcmRCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmRmZDtcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA3NXB4O1xcbn1cXG5cXG4udGl0bGVGaWVsZCB7XFxuICBncmlkLWFyZWE6IHQ7XFxufVxcbi50aXRsZVZhbHVlIHtcXG4gIGdyaWQtYXJlYTogdHY7XFxufVxcblxcbi5kYXRlRmllbGQge1xcbiAgZ3JpZC1hcmVhOiBkO1xcbn1cXG4uZGF0ZVZhbHVlIHtcXG4gIGdyaWQtYXJlYTogZHY7XFxufVxcblxcbi5kZXNjcmlwdGlvbkZpZWxkIHtcXG4gIGdyaWQtYXJlYTogcztcXG59XFxuLmRlc2NyaXB0aW9uVmFsdWUge1xcbiAgZ3JpZC1hcmVhOiBzdjtcXG59XFxuXFxuLm5vdGVzRmllbGQge1xcbiAgZ3JpZC1hcmVhOiBuO1xcbn1cXG4ubm90ZXNWYWx1ZSB7XFxuICBncmlkLWFyZWE6IG52O1xcbn1cXG5cXG4udHJhc2hCdXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmRmZDtcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMGYxNzJhO1xcbn1cXG5cXG4jVXJnZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI0hpZ2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4jTWVkaXVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuI0xvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDM1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gIGNvbG9yOiAjZjhmYWZjO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mb3JtIHtcXG4gIHdpZHRoOiAzNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICBjb2xvcjogI2Y4ZmFmYztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGNvbG9yOiAjZjhmYWZjO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAyMHB4IDVweCAxMHB4LFxcbiAgICByZ2IoMCAwIDAgLyAzMCUpIDVweCAxMHB4IDBweCAtMTBweCwgcmdiKDAgMCAwIC8gMjAlKSA2cHggLTVweCAxOHB4IGluc2V0O1xcbn1cXG5cXG4udGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLFxcbi5saXN0SXRlbSB7XFxuICAvKiBmb250LWZhbWlseTogJ015Rm9udCc7ICovXFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiA0cHggc29saWQgIzFlMjkzYjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgYm9yZGVyOiA0cHggc29saWQgIzBmMTcyYTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGhlaWdodDogNXJlbTtcXG59XFxuXFxuLmltYWdlIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBjcmVhdGVGb3JtIH07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2ZpcnN0LCBpbXBvcnQvZXh0ZW5zaW9ucywgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgeyBhZGR0b0RvIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XG4gIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIkhpZGVcIjtcbiAgYWRkQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVGb3JtKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUZvcm0pO1xuICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrIGZsZXhcIjtcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiSXRlbSBUaXRsZVwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbVwiKTtcbiAgdGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC5pbm5lclRleHQgPSBcIkl0ZW0gRGVzY3JpcHRpb25cIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1cIik7XG4gIGRlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHVlTGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFwiKTtcbiAgZHVlTGFiZWwuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZVwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGR1ZUxhYmVsKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVcIik7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtXCIpO1xuICBkdWVMYWJlbC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndyYXBwZXJcIik7XG4gIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFwiKTtcbiAgd3JhcHBlci5pbm5lclRleHQgPSBcIlNldCBQcmlvcml0eSBmb3IgSXRlbVwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgVXJnZW50OiBmYWxzZSxcbiAgICBIaWdoOiBmYWxzZSxcbiAgICBNZWRpdW06IGZhbHNlLFxuICAgIExvdzogZmFsc2UsXG4gIH07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0ga2V5O1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgaW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICBpbnB1dC52YWx1ZSA9IGtleTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH1cblxuICBjb25zdCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90ZXNMYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsXCIpO1xuICBub3Rlc0xhYmVsLmlubmVyVGV4dCA9IFwiTm90ZXM6XCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm90ZXNMYWJlbCk7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBub3Rlcy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgbm90ZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3Rlc1wiKTtcbiAgbm90ZXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtXCIpO1xuICBub3Rlc0xhYmVsLmFwcGVuZENoaWxkKG5vdGVzKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ1dHRvblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZHRvRG8pO1xufVxuXG5mdW5jdGlvbiBoaWRlRm9ybSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5yZW1vdmUoKTtcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb2RvXCIpO1xuICBhZGRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVGb3JtKTtcbiAgYWRkQnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkIG5ldyBJdGVtXCI7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlRm9ybSk7XG59XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUl0ZW0oc3RyaW5nLCBpZCkge1xuLy8gICAgIGxldCB0aXRsZSA9IHN0cmluZztcbi8vICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbi8vICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbScpO1xuLy8gICAgIGl0ZW0uaW5uZXJUZXh0ID0gdGl0bGU7XG4vLyAgICAgcmV0dXJuIGl0ZW07XG4vLyAgfVxuXG4vLyAgZnVuY3Rpb24gY3JlYXRlVGl0bGUoc3RyaW5nKSB7XG4vLyAgICAgbGV0IHRpdGxlVGV4dCA9IHN0cmluZztcbi8vICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG4vLyAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVUZXh0O1xuLy8gICAgIHJldHVybiB0aXRsZTtcbi8vICB9XG5cbi8vICBmdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbihzdHJpbmcpIHtcbi8vICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcbi8vICAgICB0aXRsZS5pbm5lclRleHQgPSBzdHJpbmc7XG4vLyAgICAgcmV0dXJuIHRpdGxlO1xuLy8gIH1cblxuLy8gIGZ1bmN0aW9uIGNyZWF0ZUltYWdlKHN0cmluZywgaWQpe1xuLy8gICAgIGxldCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuLy8gICAgIG5ld0ltYWdlLnNyYyA9IHN0cmluZztcbi8vICAgICBuZXdJbWFnZS5pZCA9IGlkO1xuLy8gICAgIG5ld0ltYWdlLmNsYXNzTmFtZSA9ICdpbWFnZSc7XG4vLyAgICAgcmV0dXJuIG5ld0ltYWdlO1xuLy8gIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlQ29udGFjdCAoKSB7XG4vLyAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4vLyAgICAgbGV0IGNvbnRhY3RUaXRsZSA9IGNyZWF0ZVRpdGxlKCdDb250YWN0IFVzJyk7XG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuXG4vLyAgICAgbGV0IGJhcmxpbWFuQ2FyZCA9IGNyZWF0ZUl0ZW0oJ0JhcmxpbWFuIEJ1dHRlcmJ1cicsICdiYXJsaW1hbicpXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChiYXJsaW1hbkNhcmQpO1xuLy8gICAgIGxldCBiYXJsaW1hbkltYWdlID0gY3JlYXRlSW1hZ2UoYmFybGltYW4sICdiYXJsaW1hbicpO1xuLy8gICAgIGJhcmxpbWFuQ2FyZC5hcHBlbmRDaGlsZChiYXJsaW1hbkltYWdlKTtcbi8vICAgICBsZXQgYmFybGltYW5UZXh0ID0gY3JlYXRlRGVzY3JpcHRpb24oJ0lubmtlZXAgLSBCQmJ1ckBicmVlbGFuZC5uZXQnKTtcbi8vICAgICBiYXJsaW1hbkNhcmQuYXBwZW5kQ2hpbGQoYmFybGltYW5UZXh0KTtcblxuLy8gICAgIGxldCBub2JDYXJkID0gY3JlYXRlSXRlbSgnTm9iJywgJ25vYicpXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChub2JDYXJkKTtcbi8vICAgICBsZXQgbm9iSW1hZ2UgPSBjcmVhdGVJbWFnZShub2IsICdub2InKTtcbi8vICAgICBub2JDYXJkLmFwcGVuZENoaWxkKG5vYkltYWdlKTtcbi8vICAgICBsZXQgbm9iVGV4dCA9IGNyZWF0ZURlc2NyaXB0aW9uKCdDb29rIC0gc2xvd2NvYWNoMUBicmVlbGFuZC5uZXQnKTtcbi8vICAgICBub2JDYXJkLmFwcGVuZENoaWxkKG5vYlRleHQpO1xuXG4vLyB9XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xuLyogZXNsaW50LWRpc2FibGUgbmV3LWNhcCAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSBcIi4vZm9ybS5qc1wiO1xuaW1wb3J0IHRyYXNoSWNvbiBmcm9tIFwiLi90cmFzaC5zdmdcIjtcblxuZXhwb3J0IHsgYWRkdG9EbyB9O1xuLy8gc2RmZ2RkZ3NkZ1xuLy8gQUREIERFTEVURSBJVEVNIEJVVFRPTiAtIERvbmVcbi8vIEFERCBNQVJLIENPTVBMRVRFIEJVVFRPTiAtIGRvbmVcbi8vIENTU1xuLy8gQUREIFBSSU9SSVRZL05PVEVTIE9USEVSIEZJRUxEUyAtIGRvbmVcbi8vIENIQU5HRSBWQUxVRVMgT04gIFRPIERPUy0gZG9uZVxuLy8gQ0xFQU4gVVAvQ09NTUVOVFxuLy8gZm9ybSB2YWxpZGF0aW9uXG4vLyBjaGFuZ2UgaGVhZGluZ1xuLy8gZGVsZXRlIFByb2plY3RzXG4vLyBmb3JtIHN0eWxpbmdcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuY29uc3QgdG9Eb0FyciA9IFtdO1xuXG5jbGFzcyBsaXN0SXRlbSB7XG4gIGNvbnN0cnVjdG9yKG51bWJlciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgbm90ZXMpIHtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPYmplY3QoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoICE9IDApIHtcbiAgICBjb25zdCBwcm9qZWN0T2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RPYmopO1xuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdE9iaikpIHtcbiAgICAgIGlmIChrZXlbMF0gIT0gXCJEZWZhdWx0XCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGl0bGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3R0aXRsZUJhclwiKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIGtleVswXSk7XG4gICAgICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluYWN0aXZlXCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0ga2V5WzBdO1xuICAgICAgICB0aXRsZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhrZXlbMF0pO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBzd2l0Y2hQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGVmYXVsdFwiKTtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBzd2l0Y2hQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIChwcm9qZWN0T2JqLmxlbmd0aClcbiAgICByZXR1cm4gcHJvamVjdE9iajtcbiAgfVxuICBjb25zdCBwcm9qZWN0T2JqID0ge1xuICAgIERlZmF1bHQ6IHRvRG9BcnIsXG4gIH07XG4gIGNvbnNvbGUubG9nKFwiZW1wdHlcIik7XG4gIGNvbnNvbGUubG9nKHByb2plY3RPYmopO1xuICByZXR1cm4gcHJvamVjdE9iajtcbn1cblxuZnVuY3Rpb24gbGlzdEl0ZW1zKCkge1xuICBjb25zdCBhbGxMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3RcIik7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsTGlzdEl0ZW1zLmxlbmd0aDsgaysrKSB7XG4gICAgYWxsTGlzdEl0ZW1zW2tdLnJlbW92ZSgpO1xuICB9XG4gIE9iamVjdC5lbnRyaWVzKHByb2plY3RPYmopLmZvckVhY2goKFssIHZhbHVlXSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtpXTtcbiAgICAgIGNvbnN0IHsgcHJvamVjdCB9ID0gaXRlbTtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdCk7XG4gICAgICBpZiAocHJvamVjdE5hbWUgIT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2lkZWJhckl0ZW0uaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcbiAgICAgIHNpZGViYXJJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdFwiKTtcbiAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHNpZGViYXJJdGVtKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHlDb2xvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3RDb2xvclwiKTtcbiAgICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKFwiaWRcIiwgaXRlbS5wcmlvcml0eSk7XG4gICAgICBzaWRlYmFySXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eUNvbG9yKTtcbiAgICB9fVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ291bnRlcigpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggIT0gMCkge1xuICAgIGNvbnN0IGNvdW50ZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRlclwiKSk7XG4gICAgY29uc29sZS5sb2coXCJjb3VudGVyIGZvdW5kXCIpO1xuICAgIGNvbnNvbGUubG9nKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9XG4gIGNvbnN0IGNvdW50ZXIgPSAwO1xuICByZXR1cm4gY291bnRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGluZygpIHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG4gIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHdlbGNvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWxjb21lXCIpO1xuICB3ZWxjb21lLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byB5b3VyIFByb2plY3RzXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgaGVhZGluZy5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgY29uc3QgZm9ybVNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybVNwYWNlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybVNwYWNlXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVNwYWNlKTtcbiAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdQcm9qZWN0QnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ3JlYXRlIE5ldyBQcm9qZWN0XCI7XG4gIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU5ld1Byb2plY3QpO1xuICBmb3JtU3BhY2UuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbik7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVG9kb1wiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgbmV3IEl0ZW1cIjtcbiAgZm9ybVNwYWNlLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlRm9ybSk7XG5cbiAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNhdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzYXZlQnV0dG9uXCIpO1xuICBzYXZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBzYXZlQnV0dG9uLmlubmVyVGV4dCA9IFwiU2F2ZSBXb3JrXCI7XG4gIGZvcm1TcGFjZS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVdvcmspO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZUJ1dHRvblwiKTtcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGUgV29ya1wiO1xuICBmb3JtU3BhY2UuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhck91dCk7XG4gIC8vIGNvbnN0IHByYW5jaW5nUG9ueSA9IG5ldyBJbWFnZSgpO1xuICAvLyBwcmFuY2luZ1Bvbnkuc3JjID0gcHJhbmNpbmdQb255MjtcbiAgLy8gcHJhbmNpbmdQb255LmlkPVwicG9ueUxvZ29cIjtcbiAgLy8gaGVhZGluZy5hcHBlbmRDaGlsZChwcmFuY2luZ1BvbnkpO1xufVxuY3JlYXRlSGVhZGluZygpO1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0U3BhY2VcIik7XG4gIGRlZmF1bHRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdFwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0KTtcblxuICBjb25zdCBwcm9qZWN0dGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0dGl0bGVCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0dGl0bGVCYXJcIik7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdHMuaW5uZXJUZXh0ID0gXCJQcm9qZWN0c1wiO1xuICBwcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RGaWVsZFwiKTtcbiAgcHJvamVjdHRpdGxlQmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IFwiRGVmYXVsdCBQcm9qZWN0XCI7XG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiRGVmYXVsdFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3R0aXRsZUJhcik7XG4gIHByb2plY3R0aXRsZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBjb25zdCBjYXJkU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkU3BhY2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXNwbGF5XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFNwYWNlKTtcbn1cblxuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbmxldCBjb3VudGVyID0gY3JlYXRlQ291bnRlcigpO1xuY29uc3QgcHJvamVjdE9iaiA9IGNyZWF0ZVByb2plY3RPYmplY3QoKTtcbmFkZENhcmRzKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IGZvcm1TcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVNwYWNlXCIpO1xuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0QnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVOZXdQcm9qZWN0KTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBcIkhpZGVcIjtcbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVByb2plY3RGb3JtKTtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Byb2plY3RGb3JtXCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1cIik7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFwiKTtcbiAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlByb2plY3QgVGl0bGVcIjtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0VGl0bGVcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbVwiKTtcbiAgdGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFN1Ym1pdFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICBmb3JtU3BhY2UuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZG5ld1Byb2plY3QpO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50UHJvamVjdCgpIHtcbiAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICByZXR1cm4gY3VycmVudDtcbn1cblxuZnVuY3Rpb24gc3dpdGNoUHJvamVjdChlbGVtKSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgcHJvamVjdC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcbiAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluYWN0aXZlXCIpO1xuICBlbGVtLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5hY3RpdmVcIik7XG4gIGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmVcIik7XG4gIGFkZENhcmRzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZG5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IHRpdGxlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0dGl0bGVCYXJcIik7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcbiAgLy8gY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcbiAgZGVmYXVsdFByb2plY3QucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmVcIik7XG4gIGRlZmF1bHRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5hY3RpdmVcIik7XG4gIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlXCIpLnZhbHVlO1xuICBjb25zdCBuZXdBcnIgPSBbXTtcbiAgcHJvamVjdE9ialtuZXdQcm9qZWN0VGl0bGVdID0gbmV3QXJyO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0T2JqKTtcbiAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBuZXdQcm9qZWN0VGl0bGUpO1xuICBuZXdQcm9qZWN0LmlubmVyVGV4dCA9IG5ld1Byb2plY3RUaXRsZTtcbiAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gIGRlZmF1bHRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3dpdGNoUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG4gIH0pO1xuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3dpdGNoUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgfSk7XG4gIC8vIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjdXJyZW50UHJvamVjdChuZXdQcm9qZWN0VGl0bGUpKTtcbiAgLy8gbmV3UHJvamVjdC5vbmNsaWNrID0gY3VycmVudFByb2plY3QoKTtcbiAgaGlkZVByb2plY3RGb3JtKCk7XG4gIC8vIHJldHVybiBuZXdwcm9qZWN0T2JqO1xufVxuXG5mdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKTtcbiAgbmV3UHJvamVjdEZvcm0ucmVtb3ZlKCk7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdXR0b25cIik7XG4gIG5ld1Byb2plY3RCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVQcm9qZWN0Rm9ybSk7XG4gIG5ld1Byb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJDcmVhdGUgTmV3IFByb2plY3RcIjtcbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmV3UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZENhcmRzKCkge1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0T2JqKTtcbiAgbGlzdEl0ZW1zKCk7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlcIik7XG4gIGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdCgpO1xuICBjb25zdCB0aXRsZSA9IHByb2plY3QuYXR0cmlidXRlcy5pZC52YWx1ZTtcbiAgY29uc3QgY3VycmVudFByb2plY3RBcnJheSA9IHByb2plY3RPYmpbdGl0bGVdO1xuICBjb25zdCBhbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKTtcbiAgaWYgKGFsbENhcmRzLmxlbmd0aCAhPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWxsQ2FyZHNbaV0ucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjdXJyZW50UHJvamVjdEFycmF5W2ldLnByb2plY3QgPT0gdGl0bGUpIHtcbiAgICAgIGRpc3BsYXlDYXJkKGN1cnJlbnRQcm9qZWN0QXJyYXlbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlDYXJkKGFycikge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkXCIpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvRG9fJHthcnIubnVtYmVyfWApO1xuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQmFyXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQm9keVwiKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcbiAgICBjb25zdCBwcmlvcml0eUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eUNvbG9yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJpb3JpdHlDb2xvclwiKTtcbiAgICBwcmlvcml0eUNvbG9yLnNldEF0dHJpYnV0ZShcImlkXCIsIGFyci5wcmlvcml0eSk7XG4gICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHByaW9yaXR5Q29sb3IpO1xuXG4gICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBjb21wbGV0ZV8ke2Fyci5udW1iZXJ9YCk7XG4gICAgY29tcGxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiQ29tcGxldGVcIjtcbiAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuXG4gICAgY29uc3QgdW5jb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdW5jb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdW5jb21wbGV0ZV8ke2Fyci5udW1iZXJ9YCk7XG4gICAgdW5jb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRCdXR0b25cIik7XG4gICAgdW5jb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIk5vdCBGaW5pc2hlZFwiO1xuICAgXG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBlZGl0XyR7YXJyLm51bWJlcn1gKTtcbiAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZEJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmlubmVyVGV4dCA9IFwiTW9kaWZ5XCI7XG4gICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGV4cGFuZF8ke2Fyci5udW1iZXJ9YCk7XG4gICAgZXhwYW5kQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZEJ1dHRvblwiKTtcbiAgICBleHBhbmRCdXR0b24uaW5uZXJUZXh0ID0gXCJFeHBhbmRcIjtcbiAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcblxuICAgIGNvbnN0IHRyYXNoQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgdHJhc2hCdXR0b24uc3JjID0gdHJhc2hJY29uO1xuICAgIHRyYXNoQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWxldGVfJHthcnIubnVtYmVyfWApO1xuICAgIHRyYXNoQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidHJhc2hCdXR0b25cIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUZpZWxkXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiVGl0bGU6XCI7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVWYWx1ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlVmFsdWVcIik7XG4gICAgdGl0bGVWYWx1ZS5pbm5lclRleHQgPSBhcnIudGl0bGU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRhdGVGaWVsZFwiKTtcbiAgICBkYXRlLmlubmVyVGV4dCA9IFwiRHVlLURhdGU6XCI7XG4gICAgY29uc3QgZGF0ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlVmFsdWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkYXRlVmFsdWVcIik7XG4gICAgZGF0ZVZhbHVlLmlubmVyVGV4dCA9IGFyci5kdWVEYXRlO1xuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCh0aXRsZVZhbHVlKTtcbiAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChkYXRlVmFsdWUpO1xuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRyYXNoQnV0dG9uKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlc2NyaXB0aW9uRmllbGRcIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgICBjb25zdCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjcmlwdGlvblZhbHVlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVzY3JpcHRpb25WYWx1ZVwiKTtcbiAgICBkZXNjcmlwdGlvblZhbHVlLmlubmVyVGV4dCA9IGFyci5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90ZXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub3Rlc0ZpZWxkXCIpO1xuICAgIG5vdGVzLmlubmVyVGV4dCA9IFwiTm90ZXM6XCI7XG4gICAgY29uc3Qgbm90ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3RlVmFsdWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub3Rlc1ZhbHVlXCIpO1xuICAgIG5vdGVWYWx1ZS5pbm5lclRleHQgPSBhcnIubm90ZXM7XG5cbiAgICBjb21wbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbXBsZXRlXCIpO1xuICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHVuY29tcGxldGVCdXR0b24pO1xuICAgICAgY2FyZFRpdGxlLnJlbW92ZUNoaWxkKGNvbXBsZXRlQnV0dG9uKTtcbiAgICBcbiAgICAgIHVuY29tcGxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRcIik7XG4gICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG4gICAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZCh1bmNvbXBsZXRlQnV0dG9uKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGVkaXRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGFyci5wcm9qZWN0ID0gXCJkZWxldGVkXCI7XG4gICAgICBjYXJkVGl0bGUucmVtb3ZlQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICBjcmVhdGVGb3JtKCk7XG4gICAgfTtcblxuICAgIHRyYXNoQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBUby1Ebz9cIik7XG4gICAgICBpZiAodGV4dCA9PSB0cnVlKSB7XG4gICAgICAgIGFyci5wcm9qZWN0ID0gXCJkZWxldGVkXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyci5wcm9qZWN0KTtcbiAgICAgICAgYWRkQ2FyZHMoKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfTtcblxuICAgIGV4cGFuZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25WYWx1ZSk7XG4gICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChub3Rlcyk7XG4gICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChub3RlVmFsdWUpO1xuICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGNvbGxhcHNlQnV0dG9uKTtcbiAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChleHBhbmRCdXR0b24pO1xuXG4gICAgICBjb2xsYXBzZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjYXJkQm9keS5yZW1vdmVDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGNhcmRCb2R5LnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uVmFsdWUpO1xuICAgICAgICBjYXJkQm9keS5yZW1vdmVDaGlsZChub3Rlcyk7XG4gICAgICAgIGNhcmRCb2R5LnJlbW92ZUNoaWxkKG5vdGVWYWx1ZSk7XG4gICAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChjb2xsYXBzZUJ1dHRvbik7XG4gICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuICAgICAgfTtcbiAgICB9O1xuICAgIGxldCBjb2xsYXBzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNvbGxhcHNlXyR7YXJyLm51bWJlcn1gKTtcbiAgICBjb2xsYXBzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRCdXR0b25cIik7XG4gICAgY29sbGFwc2VCdXR0b24uaW5uZXJUZXh0ID0gXCJIaWRlXCI7XG4gICAgY2FyZERyYWcoY2FyZCk7XG4gIH1cblxuICBjb25zdCBhbGxJbmFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5hY3RpdmVcIik7XG4gIC8vIGNvbnNvbGUubG9nKGFsbEluYWN0aXZlKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxJbmFjdGl2ZS5sZW5ndGg7IGsrKykge1xuICAgIC8vIGNvbnNvbGUubG9nKGFsbEluYWN0aXZlW2tdKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBhbGxJbmFjdGl2ZVtrXS5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IHByb2plY3RPYmpbcHJvamVjdFRpdGxlXTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHByb2plY3RBcnJheS5sZW5ndGg7IHIrKykge1xuICAgICAgaWYgKHByb2plY3RBcnJheVtyXS5wcm9qZWN0ID09IHByb2plY3QuYXR0cmlidXRlcy5pZC52YWx1ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlbcl0pO1xuICAgICAgICBkaXNwbGF5Q2FyZChwcm9qZWN0QXJyYXlbcl0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGRzIFRvIERvIGl0ZW1zIGZyb20gRm9ybSBpbnRvIExpc3QgSXRlbSBPYmplY3RzLCB0aGVuIGFkZHMgdGhlbSB0byBhcHByb3ByaWF0ZSBQcm9qZWN0IEFycmF5IGFmdGVyIGZvcm0gU3VibWl0IEJ1dHRvbiBpcyBjbGlja2VkXG5mdW5jdGlvbiBhZGR0b0RvKCkge1xuICBjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmF0dHJpYnV0ZXMuaWQudmFsdWU7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlO1xuICBjb25zdCByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl0nKTtcbiAgbGV0IHNlbGVjdGVkU2l6ZTtcbiAgZm9yIChjb25zdCByYWRpb0J1dHRvbiBvZiByYWRpb0J1dHRvbnMpIHtcbiAgICBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgc2VsZWN0ZWRTaXplID0gcmFkaW9CdXR0b24udmFsdWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpLnZhbHVlO1xuICBjb25zdCBuZXdJdGVtID0gbmV3IGxpc3RJdGVtKFxuICAgIGNvdW50ZXIsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBzZWxlY3RlZFNpemUsXG4gICAgcHJvamVjdE5hbWUsXG4gICAgbm90ZXNcbiAgKTtcbiAgcHJvamVjdE9ialtwcm9qZWN0TmFtZV0ucHVzaChuZXdJdGVtKTtcbiAgcmVtb3ZlRm9ybSgpO1xuICBjb3VudGVyKys7XG4gIGFkZENhcmRzKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVXb3JrKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RPYmopKTtcbiAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRlclwiLCBKU09OLnN0cmluZ2lmeShjb3VudGVyKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gIGNvbnN0IGZvcm1TcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVNwYWNlXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAvLyBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRlbnQucmVtb3ZlKCk7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XG4gIGFkZEJ1dHRvbi5yZW1vdmUoKTtcbiAgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVG9kb1wiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgbmV3IEl0ZW1cIjtcbiAgZm9ybVNwYWNlLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlRm9ybSk7XG4gIC8vIGN1cnJlbnRQcm9qZWN0LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBjYXJkRHJhZyhjYXJkKSB7XG4gIC8vIGxldCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcbiAgLy8gbGV0IGNhcmRJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcbiAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcbiAgY2FyZC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRCdXR0b25cIik7XG4gICAgY29uc3QgdHJhc2hCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaEJ1dHRvblwiKTtcbiAgICBjb25zdCBlbGVtZW50QmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KFxuICAgICAgZXZlbnQuY2xpZW50WCxcbiAgICAgIGV2ZW50LmNsaWVudFlcbiAgICApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGVsZW1lbnRCZWxvdyA9PSBidXR0b25zW2ldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50QmVsb3cgPT0gdHJhc2hCdXR0b25zW2ldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGlmdFggPSBldmVudC5jbGllbnRYIC0gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIGNvbnN0IHNoaWZ0WSA9IGV2ZW50LmNsaWVudFkgLSBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgIGNhcmQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgY2FyZC5zdHlsZS56SW5kZXggPSAxMDAwO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNhcmQpO1xuXG4gICAgbW92ZUNhcmQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblxuICAgIC8vIG1vdmVzIENhcmQgYXQgdGhlIFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgdGhlIHBhZ2UsIHRha2luZyBhY2NvdW50IGZvciB0aGUgc2hpZnRzIGluaXRpYWxseSB3aGVuIGNsaWNraW5nIG9uIGNhcmRcbiAgICBmdW5jdGlvbiBtb3ZlQ2FyZChwYWdlWCwgcGFnZVkpIHtcbiAgICAgIGNhcmQuc3R5bGUubGVmdCA9IGAke3BhZ2VYIC0gc2hpZnRYfXB4YDtcbiAgICAgIGNhcmQuc3R5bGUudG9wID0gYCR7cGFnZVkgLSBzaGlmdFl9cHhgO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50RHJvcHBhYmxlID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICBtb3ZlQ2FyZChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG4gICAgICBjYXJkLmhpZGRlbiA9IHRydWU7XG4gICAgICBjb25zdCBlbGVtQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgY2FyZC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIGlmICghZWxlbUJlbG93KSByZXR1cm47XG4gICAgICBjb25zdCBkcm9wcGFibGVCZWxvdyA9IGVsZW1CZWxvdy5jbG9zZXN0KFwiLmluYWN0aXZlXCIpO1xuICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUgIT0gZHJvcHBhYmxlQmVsb3cpIHtcbiAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcbiAgICAgICAgICBsZWF2ZURyb3BwYWJsZShjdXJyZW50RHJvcHBhYmxlKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50RHJvcHBhYmxlID0gZHJvcHBhYmxlQmVsb3c7XG4gICAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlKSB7XG4gICAgICAgICAgY2FyZC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIC8vIGN1cnJlbnREcm9wcGFibGUuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjNmNWY5JztcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gY3VycmVudERyb3BwYWJsZS5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkSUQgPSBjYXJkLmF0dHJpYnV0ZXMuaWQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBudW1iID0gY2FyZElELnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld051bSA9IHBhcnNlSW50KG51bWIsIDEwKTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocHJvamVjdE9iaikuZm9yRWFjaCgoWywgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWVbbnVtYmVyXSk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVbaV0ubnVtYmVyID09IG5ld051bSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHZhbHVlW2ldO1xuICAgICAgICAgICAgICAgICAgaXRlbS5wcm9qZWN0ID0gbmV3UHJvamVjdE5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGFkZENhcmRzKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vICBlbnRlckRyb3BwYWJsZShjdXJyZW50RHJvcHBhYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuXG4gICAgY2FyZC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICBhZGRDYXJkcygpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gZnVuY3Rpb24gZW50ZXJEcm9wcGFibGUoZWxlbSkge1xuXG4gIC8vICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAncGluayc7XG4gIC8vICAgICB9XG5cbiAgZnVuY3Rpb24gbGVhdmVEcm9wcGFibGUoZWxlbSkge1xuICAgIGNvbnNvbGUubG9nKGVsZW0pO1xuICAgIC8vIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAvLyBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAnYmx1ZSc7XG4gIH1cblxuICBjYXJkLm9uZHJhZ3N0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn1cblxuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcblxuZnVuY3Rpb24gY2xlYXJPdXQoKSB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9