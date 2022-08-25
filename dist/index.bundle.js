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
___CSS_LOADER_EXPORT___.push([module.id, "/* @font-face {\n    font-family: 'MyFont';\n    src: url('./Tolkien.ttf') format(\"truetype\");\n    font-weight: 600;\n    font-style: normal;\n  }\n   */\nbody {\n  margin: 0;\n  padding: 0px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#container {\n  display: grid;\n  grid-template-columns: 1fr 6fr 6fr;\n  grid-template-rows: 0.5fr 2fr 3fr;\n  grid-template-areas:\n    \"h h h\"\n    \"s c c\"\n    \"t c c\";\n}\n\n#formSpace {\n  grid-area: s;\n  display: flex;\n  flex-direction: column;\n  background-color: #e2e8f0;\n  color: #1e293b;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem;\n  padding-top: 1.5rem;\n  padding-bottom: 2rem;\n}\n\n#header {\n  grid-area: h;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: #f8fafc;\n  background-color: #475569;\n  padding: 0.5rem;\n}\n\nh2 {\n  font-size: 1.8em;\n}\n\n.dragger {\n  width: 250px;\n  height: 30px;\n  background-color: #0f172a;\n}\n\n.button {\n  width: 14rem;\n  /* height: 75px; */\n  cursor: pointer;\n  background-color: #94a3b8;\n  color: #0f172a;\n  font-weight: 700;\n  font-size: 22px;\n  border-radius: 40px;\n  padding: 9px;\n  box-shadow: 0 2px #0f172a;\n}\n\n.button:hover {\n  background-color: #334155;\n  color: #f8fafc;\n}\n\n.button:active {\n  background-color: #1e293b;\n  color: #f8fafc;\n  transform: translateY(4px);\n}\n\n#projecttitleBar {\n  grid-area: t;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem;\n  gap: 3rem;\n  align-items: center;\n  background-color: #e2e8f0;\n  color: #1e293b;\n}\n\n.projectField {\n  font-size: 22px;\n  font-weight: 700;\n  background-color: #e2e8f0;\n  color: #0f172a;\n  border-bottom: 1px solid #0f172a;\n  padding-left: 3em;\n  padding-right: 3em;\n  padding-bottom: 0.3em;\n}\n\n.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0) 1px 3px 10px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n  border: 4px solid #475569;\n}\n\n.inactive {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #edf1f5;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n}\n\n.list {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  padding-top: 10px;\n  padding-left: 20px;\n}\n\n.listColor {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n}\n\n#display {\n  grid-area: c;\n  display: grid;\n  grid-auto-flow: dense;\n  grid-template-columns: repeat(auto-fit, 20rem);\n  background-color: #f8fafc;\n  color: #0f172a;\n  padding: 10px;\n  gap: 20px;\n}\n.card {\n  border: 2px solid black;\n  background-color: #cbd5e1;\n  border-radius: 15px;\n  font-size: 28px;\n  font-weight: 600;\n  padding: 0px 5px 5px 5px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 300px;\n  height: 250px;\n}\n\n.expandCard {\n  grid-column: 1 / -1;\n  border: 2px solid black;\n  background-color: #cbd5e1;\n  border-radius: 15px;\n  font-size: 28px;\n  font-weight: 600;\n  padding: 0px 5px 5px 5px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  /* width: 300px;\n  height: 250px; */\n}\n\n.cardComplete {\n    opacity: .4;\n    display: grid;\n  padding: 20px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-areas:\n    \"t tv\"\n    \"d dv\"\n    \"s sv\"\n    \"n nv\"\n    \"b b\";\n  font-size: 22px;\n}\n\n\n.cardBar {\n  padding: 2px;\n}\n\n.cardBody {\n  display: grid;\n  padding: 20px;\n  grid-template-columns: repeat(auto-fit, 10rem);\n  grid-auto-flow: column;\n  /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr; */\n  grid-template-areas:\n    \"t tv\"\n    \"d dv\"\n    \"s sv\"\n    \"n nv\"\n    \"b b\";\n  font-size: 22px;\n  gap: 5px;\n}\n\n.cardButton {\n  background-color: #fcfdfd;\n  color: #0f172a;\n  border-radius: 10px;\n  width: 75px;\n  opacity: 1;\n}\n\n.titleField {\n  grid-area: t;\n}\n.titleValue {\n  grid-area: tv;\n}\n\n.dateField {\n  grid-area: d;\n}\n.dateValue {\n  grid-area: dv;\n}\n\n.descriptionField {\n  grid-area: s;\n}\n.descriptionValue {\n  grid-area: sv;\n}\n\n.notesField {\n  grid-area: n;\n}\n.notesValue {\n  grid-area: nv;\n}\n\n.trashButton {\n  grid-area: b;\n  display: flex;\n  justify-self: flex-end;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  padding: 2px;\n  border-radius: 10px;\n  border: 2px solid #0f172a;\n}\n\n.priorityColor {\n  width: 300px;\n  height: 15px;\n  border-radius: 15px;\n  border: 2px solid #0f172a;\n}\n\n#Urgent {\n  background-color: red;\n}\n\n#High {\n  background-color: orange;\n}\n\n#Medium {\n  background-color: yellow;\n}\n\n#Low {\n  background-color: green;\n}\n\n#complete {\n  background-color: blue;\n}\n\n#content {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.form {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.label {\n  font-size: 22px;\n  font-weight: 700;\n  width: 20rem;\n  color: #f8fafc;\n  padding: 15px;\n  gap: 5px;\n  background-color: #475569;\n  /* background-size: 100% 100%;\n    background-position: center center; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px,\n    rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\n}\n\n.text {\n  text-align: center;\n}\n\n.item,\n.listItem {\n  /* font-family: 'MyFont'; */\n  font-size: 22px;\n  font-weight: 500;\n  width: 15rem;\n  color: black;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ninput[type=\"text\"] {\n  border: 4px solid #1e293b;\n  border-radius: 10px;\n  background-color: #f8fafc;\n}\n\ninput[type=\"text\"]:focus {\n  border: 4px solid #0f172a;\n}\n\n#description {\n  height: 5rem;\n}\n\n.image {\n  width: 200px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* @font-face {\n    font-family: 'MyFont';\n    src: url('./Tolkien.ttf') format(\"truetype\");\n    font-weight: 600;\n    font-style: normal;\n  }\n   */\nbody {\n  margin: 0;\n  padding: 0px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#container {\n  display: grid;\n  grid-template-columns: 1fr 6fr 6fr;\n  grid-template-rows: 0.5fr 2fr 3fr;\n  grid-template-areas:\n    \"h h h\"\n    \"s c c\"\n    \"t c c\";\n}\n\n#formSpace {\n  grid-area: s;\n  display: flex;\n  flex-direction: column;\n  background-color: #e2e8f0;\n  color: #1e293b;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem;\n  padding-top: 1.5rem;\n  padding-bottom: 2rem;\n}\n\n#header {\n  grid-area: h;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: #f8fafc;\n  background-color: #475569;\n  padding: 0.5rem;\n}\n\nh2 {\n  font-size: 1.8em;\n}\n\n.dragger {\n  width: 250px;\n  height: 30px;\n  background-color: #0f172a;\n}\n\n.button {\n  width: 14rem;\n  /* height: 75px; */\n  cursor: pointer;\n  background-color: #94a3b8;\n  color: #0f172a;\n  font-weight: 700;\n  font-size: 22px;\n  border-radius: 40px;\n  padding: 9px;\n  box-shadow: 0 2px #0f172a;\n}\n\n.button:hover {\n  background-color: #334155;\n  color: #f8fafc;\n}\n\n.button:active {\n  background-color: #1e293b;\n  color: #f8fafc;\n  transform: translateY(4px);\n}\n\n#projecttitleBar {\n  grid-area: t;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem;\n  gap: 3rem;\n  align-items: center;\n  background-color: #e2e8f0;\n  color: #1e293b;\n}\n\n.projectField {\n  font-size: 22px;\n  font-weight: 700;\n  background-color: #e2e8f0;\n  color: #0f172a;\n  border-bottom: 1px solid #0f172a;\n  padding-left: 3em;\n  padding-right: 3em;\n  padding-bottom: 0.3em;\n}\n\n.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0) 1px 3px 10px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n  border: 4px solid #475569;\n}\n\n.inactive {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #edf1f5;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n}\n\n.list {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  padding-top: 10px;\n  padding-left: 20px;\n}\n\n.listColor {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n}\n\n#display {\n  grid-area: c;\n  display: grid;\n  grid-auto-flow: dense;\n  grid-template-columns: repeat(auto-fit, 20rem);\n  background-color: #f8fafc;\n  color: #0f172a;\n  padding: 10px;\n  gap: 20px;\n}\n.card {\n  border: 2px solid black;\n  background-color: #cbd5e1;\n  border-radius: 15px;\n  font-size: 28px;\n  font-weight: 600;\n  padding: 0px 5px 5px 5px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 300px;\n  height: 250px;\n}\n\n.expandCard {\n  grid-column: 1 / -1;\n  border: 2px solid black;\n  background-color: #cbd5e1;\n  border-radius: 15px;\n  font-size: 28px;\n  font-weight: 600;\n  padding: 0px 5px 5px 5px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  /* width: 300px;\n  height: 250px; */\n}\n\n.cardComplete {\n    opacity: .4;\n    display: grid;\n  padding: 20px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-areas:\n    \"t tv\"\n    \"d dv\"\n    \"s sv\"\n    \"n nv\"\n    \"b b\";\n  font-size: 22px;\n}\n\n\n.cardBar {\n  padding: 2px;\n}\n\n.cardBody {\n  display: grid;\n  padding: 20px;\n  grid-template-columns: repeat(auto-fit, 10rem);\n  grid-auto-flow: column;\n  /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr; */\n  grid-template-areas:\n    \"t tv\"\n    \"d dv\"\n    \"s sv\"\n    \"n nv\"\n    \"b b\";\n  font-size: 22px;\n  gap: 5px;\n}\n\n.cardButton {\n  background-color: #fcfdfd;\n  color: #0f172a;\n  border-radius: 10px;\n  width: 75px;\n  opacity: 1;\n}\n\n.titleField {\n  grid-area: t;\n}\n.titleValue {\n  grid-area: tv;\n}\n\n.dateField {\n  grid-area: d;\n}\n.dateValue {\n  grid-area: dv;\n}\n\n.descriptionField {\n  grid-area: s;\n}\n.descriptionValue {\n  grid-area: sv;\n}\n\n.notesField {\n  grid-area: n;\n}\n.notesValue {\n  grid-area: nv;\n}\n\n.trashButton {\n  grid-area: b;\n  display: flex;\n  justify-self: flex-end;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  padding: 2px;\n  border-radius: 10px;\n  border: 2px solid #0f172a;\n}\n\n.priorityColor {\n  width: 300px;\n  height: 15px;\n  border-radius: 15px;\n  border: 2px solid #0f172a;\n}\n\n#Urgent {\n  background-color: red;\n}\n\n#High {\n  background-color: orange;\n}\n\n#Medium {\n  background-color: yellow;\n}\n\n#Low {\n  background-color: green;\n}\n\n#complete {\n  background-color: blue;\n}\n\n#content {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.form {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.label {\n  font-size: 22px;\n  font-weight: 700;\n  width: 20rem;\n  color: #f8fafc;\n  padding: 15px;\n  gap: 5px;\n  background-color: #475569;\n  /* background-size: 100% 100%;\n    background-position: center center; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px,\n    rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\n}\n\n.text {\n  text-align: center;\n}\n\n.item,\n.listItem {\n  /* font-family: 'MyFont'; */\n  font-size: 22px;\n  font-weight: 500;\n  width: 15rem;\n  color: black;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ninput[type=\"text\"] {\n  border: 4px solid #1e293b;\n  border-radius: 10px;\n  background-color: #f8fafc;\n}\n\ninput[type=\"text\"]:focus {\n  border: 4px solid #0f172a;\n}\n\n#description {\n  height: 5rem;\n}\n\n.image {\n  width: 200px;\n}\n"],"sourceRoot":""}]);
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
      cardBody.setAttribute("class", "cardComplete");
      arr.priority = "complete";
      priorityColor.setAttribute("id", arr.priority);
      cardTitle.appendChild(uncompleteButton);
      cardTitle.removeChild(completeButton);
    
      uncompleteButton.onclick = () => {
        cardBody.setAttribute("class", "cardBody");
        arr.priority = "Medium";
        priorityColor.setAttribute("id", arr.priority);
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
      card.setAttribute('class', 'expandCard');
      cardBody.appendChild(description);
      cardBody.appendChild(descriptionValue);
      cardBody.appendChild(notes);
      cardBody.appendChild(noteValue);
      cardTitle.appendChild(collapseButton);
      cardTitle.removeChild(expandButton);

      collapseButton.onclick = () => {
        card.setAttribute('class', 'card');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsVUFBVSxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxVQUFVLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjtBQUNrQjtBQUNIOztBQUVqQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIHNyYzogdXJsKCcuL1RvbGtpZW4udHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuICAgKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgNmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImggaCBoXFxcIlxcbiAgICBcXFwicyBjIGNcXFwiXFxuICAgIFxcXCJ0IGMgY1xcXCI7XFxufVxcblxcbiNmb3JtU3BhY2Uge1xcbiAgZ3JpZC1hcmVhOiBzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgY29sb3I6ICMxZTI5M2I7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgY29sb3I6ICNmOGZhZmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4uZHJhZ2dlciB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIC8qIGhlaWdodDogNzVweDsgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGEzYjg7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgcGFkZGluZzogOXB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggIzBmMTcyYTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xcbiAgY29sb3I6ICNmOGZhZmM7XFxufVxcblxcbi5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICBjb2xvcjogI2Y4ZmFmYztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG5cXG4jcHJvamVjdHRpdGxlQmFyIHtcXG4gIGdyaWQtYXJlYTogdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBnYXA6IDNyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIGNvbG9yOiAjMWUyOTNiO1xcbn1cXG5cXG4ucHJvamVjdEZpZWxkIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgY29sb3I6ICMwZjE3MmE7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBmMTcyYTtcXG4gIHBhZGRpbmctbGVmdDogM2VtO1xcbiAgcGFkZGluZy1yaWdodDogM2VtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmZGZkO1xcbiAgY29sb3I6ICMwZjE3MmE7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDApIDFweCAzcHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlcjogNHB4IHNvbGlkICM0NzU1Njk7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmNTtcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMzKSAtMnB4IDJweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5saXN0Q29sb3Ige1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4jZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IGM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIwcmVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5jYXJkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMHB4IDVweCA1cHggNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLmV4cGFuZENhcmQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMHB4IDVweCA1cHggNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgLyogd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDsgKi9cXG59XFxuXFxuLmNhcmRDb21wbGV0ZSB7XFxuICAgIG9wYWNpdHk6IC40O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0IHR2XFxcIlxcbiAgICBcXFwiZCBkdlxcXCJcXG4gICAgXFxcInMgc3ZcXFwiXFxuICAgIFxcXCJuIG52XFxcIlxcbiAgICBcXFwiYiBiXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuXFxuLmNhcmRCYXIge1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uY2FyZEJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMTByZW0pO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmcjsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0IHR2XFxcIlxcbiAgICBcXFwiZCBkdlxcXCJcXG4gICAgXFxcInMgc3ZcXFwiXFxuICAgIFxcXCJuIG52XFxcIlxcbiAgICBcXFwiYiBiXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uY2FyZEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmZGZkO1xcbiAgY29sb3I6ICMwZjE3MmE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGl0bGVGaWVsZCB7XFxuICBncmlkLWFyZWE6IHQ7XFxufVxcbi50aXRsZVZhbHVlIHtcXG4gIGdyaWQtYXJlYTogdHY7XFxufVxcblxcbi5kYXRlRmllbGQge1xcbiAgZ3JpZC1hcmVhOiBkO1xcbn1cXG4uZGF0ZVZhbHVlIHtcXG4gIGdyaWQtYXJlYTogZHY7XFxufVxcblxcbi5kZXNjcmlwdGlvbkZpZWxkIHtcXG4gIGdyaWQtYXJlYTogcztcXG59XFxuLmRlc2NyaXB0aW9uVmFsdWUge1xcbiAgZ3JpZC1hcmVhOiBzdjtcXG59XFxuXFxuLm5vdGVzRmllbGQge1xcbiAgZ3JpZC1hcmVhOiBuO1xcbn1cXG4ubm90ZXNWYWx1ZSB7XFxuICBncmlkLWFyZWE6IG52O1xcbn1cXG5cXG4udHJhc2hCdXR0b24ge1xcbiAgZ3JpZC1hcmVhOiBiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmZGZkO1xcbiAgY29sb3I6ICMwZjE3MmE7XFxuICBwYWRkaW5nOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzBmMTcyYTtcXG59XFxuXFxuLnByaW9yaXR5Q29sb3Ige1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XFxufVxcblxcbiNVcmdlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jSGlnaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbiNNZWRpdW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4jTG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jY29tcGxldGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDM1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gIGNvbG9yOiAjZjhmYWZjO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mb3JtIHtcXG4gIHdpZHRoOiAzNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICBjb2xvcjogI2Y4ZmFmYztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGNvbG9yOiAjZjhmYWZjO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAyMHB4IDVweCAxMHB4LFxcbiAgICByZ2IoMCAwIDAgLyAzMCUpIDVweCAxMHB4IDBweCAtMTBweCwgcmdiKDAgMCAwIC8gMjAlKSA2cHggLTVweCAxOHB4IGluc2V0O1xcbn1cXG5cXG4udGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLFxcbi5saXN0SXRlbSB7XFxuICAvKiBmb250LWZhbWlseTogJ015Rm9udCc7ICovXFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiA0cHggc29saWQgIzFlMjkzYjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgYm9yZGVyOiA0cHggc29saWQgIzBmMTcyYTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGhlaWdodDogNXJlbTtcXG59XFxuXFxuLmltYWdlIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7O0lBTUk7QUFDSjtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakM7OztXQUdTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdC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O0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vVG9sa2llbi50dGYnKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG4gICAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciA2ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDJmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaCBoIGhcXFwiXFxuICAgIFxcXCJzIGMgY1xcXCJcXG4gICAgXFxcInQgYyBjXFxcIjtcXG59XFxuXFxuI2Zvcm1TcGFjZSB7XFxuICBncmlkLWFyZWE6IHM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICBjb2xvcjogIzFlMjkzYjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBjb2xvcjogI2Y4ZmFmYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxufVxcblxcbi5kcmFnZ2VyIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxufVxcblxcbi5idXR0b24ge1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgLyogaGVpZ2h0OiA3NXB4OyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0YTNiODtcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCAjMGYxNzJhO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxuICBjb2xvcjogI2Y4ZmFmYztcXG59XFxuXFxuLmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gIGNvbG9yOiAjZjhmYWZjO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbiNwcm9qZWN0dGl0bGVCYXIge1xcbiAgZ3JpZC1hcmVhOiB0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGdhcDogM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgY29sb3I6ICMxZTI5M2I7XFxufVxcblxcbi5wcm9qZWN0RmllbGQge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGYxNzJhO1xcbiAgcGFkZGluZy1sZWZ0OiAzZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAzZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMC43cmVtO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCkgMXB4IDNweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiA0cHggc29saWQgIzQ3NTU2OTtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWY1O1xcbiAgY29sb3I6ICMwZjE3MmE7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzMpIC0ycHggMnB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLmxpc3RDb2xvciB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNkaXNwbGF5IHtcXG4gIGdyaWQtYXJlYTogYztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjByZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuLmNhcmQge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAwcHggNXB4IDVweCA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4uZXhwYW5kQ2FyZCB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAwcHggNXB4IDVweCA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICAvKiB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4OyAqL1xcbn1cXG5cXG4uY2FyZENvbXBsZXRlIHtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInQgdHZcXFwiXFxuICAgIFxcXCJkIGR2XFxcIlxcbiAgICBcXFwicyBzdlxcXCJcXG4gICAgXFxcIm4gbnZcXFwiXFxuICAgIFxcXCJiIGJcXFwiO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG5cXG4uY2FyZEJhciB7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5jYXJkQm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAxMHJlbSk7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyOyAqL1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInQgdHZcXFwiXFxuICAgIFxcXCJkIGR2XFxcIlxcbiAgICBcXFwicyBzdlxcXCJcXG4gICAgXFxcIm4gbnZcXFwiXFxuICAgIFxcXCJiIGJcXFwiO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5jYXJkQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogNzVweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50aXRsZUZpZWxkIHtcXG4gIGdyaWQtYXJlYTogdDtcXG59XFxuLnRpdGxlVmFsdWUge1xcbiAgZ3JpZC1hcmVhOiB0djtcXG59XFxuXFxuLmRhdGVGaWVsZCB7XFxuICBncmlkLWFyZWE6IGQ7XFxufVxcbi5kYXRlVmFsdWUge1xcbiAgZ3JpZC1hcmVhOiBkdjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uRmllbGQge1xcbiAgZ3JpZC1hcmVhOiBzO1xcbn1cXG4uZGVzY3JpcHRpb25WYWx1ZSB7XFxuICBncmlkLWFyZWE6IHN2O1xcbn1cXG5cXG4ubm90ZXNGaWVsZCB7XFxuICBncmlkLWFyZWE6IG47XFxufVxcbi5ub3Rlc1ZhbHVlIHtcXG4gIGdyaWQtYXJlYTogbnY7XFxufVxcblxcbi50cmFzaEJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IGI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMGYxNzJhO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzBmMTcyYTtcXG59XFxuXFxuI1VyZ2VudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNIaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuI01lZGl1bSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbiNMb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbiNjb21wbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogMzVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgY29sb3I6ICNmOGZhZmM7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgd2lkdGg6IDM1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gIGNvbG9yOiAjZjhmYWZjO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5sYWJlbCB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgY29sb3I6ICNmOGZhZmM7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcbiAgLyogYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA0MCUpIDIwcHggNXB4IDEwcHgsXFxuICAgIHJnYigwIDAgMCAvIDMwJSkgNXB4IDEwcHggMHB4IC0xMHB4LCByZ2IoMCAwIDAgLyAyMCUpIDZweCAtNXB4IDE4cHggaW5zZXQ7XFxufVxcblxcbi50ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0sXFxuLmxpc3RJdGVtIHtcXG4gIC8qIGZvbnQtZmFtaWx5OiAnTXlGb250JzsgKi9cXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aWR0aDogMTVyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjMWUyOTNiO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjMGYxNzJhO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG4uaW1hZ2Uge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IGNyZWF0ZUZvcm0gfTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZmlyc3QsIGltcG9ydC9leHRlbnNpb25zLCBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCB7IGFkZHRvRG8gfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9kb1wiKTtcbiAgYWRkQnV0dG9uLmlubmVyVGV4dCA9IFwiSGlkZVwiO1xuICBhZGRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUZvcm0pO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlRm9ybSk7XG4gIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2sgZmxleFwiO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxcIik7XG4gIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gXCJJdGVtIFRpdGxlXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtXCIpO1xuICB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9IFwiSXRlbSBEZXNjcmlwdGlvblwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbVwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkdWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsXCIpO1xuICBkdWVMYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBEYXRlXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHVlTGFiZWwpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZVwiKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1cIik7XG4gIGR1ZUxhYmVsLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid3JhcHBlclwiKTtcbiAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsXCIpO1xuICB3cmFwcGVyLmlubmVyVGV4dCA9IFwiU2V0IFByaW9yaXR5IGZvciBJdGVtXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBVcmdlbnQ6IGZhbHNlLFxuICAgIEhpZ2g6IGZhbHNlLFxuICAgIE1lZGl1bTogZmFsc2UsXG4gICAgTG93OiBmYWxzZSxcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG4gIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC5pbm5lclRleHQgPSBrZXk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcbiAgICBpbnB1dC5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgIGlucHV0LnZhbHVlID0ga2V5O1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfVxuXG4gIGNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub3Rlc0xhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxcIik7XG4gIG5vdGVzTGFiZWwuaW5uZXJUZXh0ID0gXCJOb3RlczpcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChub3Rlc0xhYmVsKTtcbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5vdGVzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBub3Rlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVzXCIpO1xuICBub3Rlcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1cIik7XG4gIG5vdGVzTGFiZWwuYXBwZW5kQ2hpbGQobm90ZXMpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkdG9Ebyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVGb3JtKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LnJlbW92ZSgpO1xuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XG4gIGFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUZvcm0pO1xuICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgbmV3IEl0ZW1cIjtcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVGb3JtKTtcbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlSXRlbShzdHJpbmcsIGlkKSB7XG4vLyAgICAgbGV0IHRpdGxlID0gc3RyaW5nO1xuLy8gICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuLy8gICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtJyk7XG4vLyAgICAgaXRlbS5pbm5lclRleHQgPSB0aXRsZTtcbi8vICAgICByZXR1cm4gaXRlbTtcbi8vICB9XG5cbi8vICBmdW5jdGlvbiBjcmVhdGVUaXRsZShzdHJpbmcpIHtcbi8vICAgICBsZXQgdGl0bGVUZXh0ID0gc3RyaW5nO1xuLy8gICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbi8vICAgICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XG4vLyAgICAgcmV0dXJuIHRpdGxlO1xuLy8gIH1cblxuLy8gIGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKHN0cmluZykge1xuLy8gICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xuLy8gICAgIHRpdGxlLmlubmVyVGV4dCA9IHN0cmluZztcbi8vICAgICByZXR1cm4gdGl0bGU7XG4vLyAgfVxuXG4vLyAgZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc3RyaW5nLCBpZCl7XG4vLyAgICAgbGV0IG5ld0ltYWdlID0gbmV3IEltYWdlKCk7XG4vLyAgICAgbmV3SW1hZ2Uuc3JjID0gc3RyaW5nO1xuLy8gICAgIG5ld0ltYWdlLmlkID0gaWQ7XG4vLyAgICAgbmV3SW1hZ2UuY2xhc3NOYW1lID0gJ2ltYWdlJztcbi8vICAgICByZXR1cm4gbmV3SW1hZ2U7XG4vLyAgfVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVDb250YWN0ICgpIHtcbi8vICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vICAgICBsZXQgY29udGFjdFRpdGxlID0gY3JlYXRlVGl0bGUoJ0NvbnRhY3QgVXMnKTtcbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG5cbi8vICAgICBsZXQgYmFybGltYW5DYXJkID0gY3JlYXRlSXRlbSgnQmFybGltYW4gQnV0dGVyYnVyJywgJ2JhcmxpbWFuJylcbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhcmxpbWFuQ2FyZCk7XG4vLyAgICAgbGV0IGJhcmxpbWFuSW1hZ2UgPSBjcmVhdGVJbWFnZShiYXJsaW1hbiwgJ2JhcmxpbWFuJyk7XG4vLyAgICAgYmFybGltYW5DYXJkLmFwcGVuZENoaWxkKGJhcmxpbWFuSW1hZ2UpO1xuLy8gICAgIGxldCBiYXJsaW1hblRleHQgPSBjcmVhdGVEZXNjcmlwdGlvbignSW5ua2VlcCAtIEJCYnVyQGJyZWVsYW5kLm5ldCcpO1xuLy8gICAgIGJhcmxpbWFuQ2FyZC5hcHBlbmRDaGlsZChiYXJsaW1hblRleHQpO1xuXG4vLyAgICAgbGV0IG5vYkNhcmQgPSBjcmVhdGVJdGVtKCdOb2InLCAnbm9iJylcbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5vYkNhcmQpO1xuLy8gICAgIGxldCBub2JJbWFnZSA9IGNyZWF0ZUltYWdlKG5vYiwgJ25vYicpO1xuLy8gICAgIG5vYkNhcmQuYXBwZW5kQ2hpbGQobm9iSW1hZ2UpO1xuLy8gICAgIGxldCBub2JUZXh0ID0gY3JlYXRlRGVzY3JpcHRpb24oJ0Nvb2sgLSBzbG93Y29hY2gxQGJyZWVsYW5kLm5ldCcpO1xuLy8gICAgIG5vYkNhcmQuYXBwZW5kQ2hpbGQobm9iVGV4dCk7XG5cbi8vIH1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tc2hhZG93ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuZXctY2FwICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tIFwiLi9mb3JtLmpzXCI7XG5pbXBvcnQgdHJhc2hJY29uIGZyb20gXCIuL3RyYXNoLnN2Z1wiO1xuXG5leHBvcnQgeyBhZGR0b0RvIH07XG4vLyBzZGZnZGRnc2RnXG4vLyBBREQgREVMRVRFIElURU0gQlVUVE9OIC0gRG9uZVxuLy8gQUREIE1BUksgQ09NUExFVEUgQlVUVE9OIC0gZG9uZVxuLy8gQ1NTXG4vLyBBREQgUFJJT1JJVFkvTk9URVMgT1RIRVIgRklFTERTIC0gZG9uZVxuLy8gQ0hBTkdFIFZBTFVFUyBPTiAgVE8gRE9TLSBkb25lXG4vLyBDTEVBTiBVUC9DT01NRU5UXG4vLyBmb3JtIHZhbGlkYXRpb25cbi8vIGNoYW5nZSBoZWFkaW5nXG4vLyBkZWxldGUgUHJvamVjdHNcbi8vIGZvcm0gc3R5bGluZ1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5jb25zdCB0b0RvQXJyID0gW107XG5cbmNsYXNzIGxpc3RJdGVtIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBub3Rlcykge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdE9iamVjdCgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggIT0gMCkge1xuICAgIGNvbnN0IHByb2plY3RPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdE9iaik7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0T2JqKSkge1xuICAgICAgaWYgKGtleVswXSAhPSBcIkRlZmF1bHRcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0aXRsZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHRpdGxlQmFyXCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwga2V5WzBdKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5hY3RpdmVcIik7XG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBrZXlbMF07XG4gICAgICAgIHRpdGxlQmFyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGtleVswXSk7XG4gICAgICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIHN3aXRjaFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEZWZhdWx0XCIpO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIHN3aXRjaFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgKHByb2plY3RPYmoubGVuZ3RoKVxuICAgIHJldHVybiBwcm9qZWN0T2JqO1xuICB9XG4gIGNvbnN0IHByb2plY3RPYmogPSB7XG4gICAgRGVmYXVsdDogdG9Eb0FycixcbiAgfTtcbiAgY29uc29sZS5sb2coXCJlbXB0eVwiKTtcbiAgY29uc29sZS5sb2cocHJvamVjdE9iaik7XG4gIHJldHVybiBwcm9qZWN0T2JqO1xufVxuXG5mdW5jdGlvbiBsaXN0SXRlbXMoKSB7XG4gIGNvbnN0IGFsbExpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdFwiKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxMaXN0SXRlbXMubGVuZ3RoOyBrKyspIHtcbiAgICBhbGxMaXN0SXRlbXNba10ucmVtb3ZlKCk7XG4gIH1cbiAgT2JqZWN0LmVudHJpZXMocHJvamVjdE9iaikuZm9yRWFjaCgoWywgdmFsdWVdKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHZhbHVlW2ldO1xuICAgICAgY29uc3QgeyBwcm9qZWN0IH0gPSBpdGVtO1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0KTtcbiAgICAgIGlmIChwcm9qZWN0TmFtZSAhPSBudWxsKSB7XG4gICAgICBjb25zdCBzaWRlYmFySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaWRlYmFySXRlbS5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuICAgICAgc2lkZWJhckl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0XCIpO1xuICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQoc2lkZWJhckl0ZW0pO1xuICAgICAgY29uc3QgcHJpb3JpdHlDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eUNvbG9yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdENvbG9yXCIpO1xuICAgICAgcHJpb3JpdHlDb2xvci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpdGVtLnByaW9yaXR5KTtcbiAgICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5Q29sb3IpO1xuICAgIH19XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb3VudGVyKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPSAwKSB7XG4gICAgY29uc3QgY291bnRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb3VudGVyXCIpKTtcbiAgICBjb25zb2xlLmxvZyhcImNvdW50ZXIgZm91bmRcIik7XG4gICAgY29uc29sZS5sb2coY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH1cbiAgY29uc3QgY291bnRlciA9IDA7XG4gIHJldHVybiBjb3VudGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKCkge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbiAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgd2VsY29tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlbGNvbWVcIik7XG4gIHdlbGNvbWUuaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIHlvdXIgUHJvamVjdHNcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBoZWFkaW5nLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuICBjb25zdCBmb3JtU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtU3BhY2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtU3BhY2VcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtU3BhY2UpO1xuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Byb2plY3RCdXR0b25cIik7XG4gIG5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJDcmVhdGUgTmV3IFByb2plY3RcIjtcbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmV3UHJvamVjdCk7XG4gIGZvcm1TcGFjZS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcblxuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRUb2RvXCIpO1xuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidXR0b25cIik7XG4gIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBuZXcgSXRlbVwiO1xuICBmb3JtU3BhY2UuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVGb3JtKTtcblxuICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2F2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNhdmVCdXR0b25cIik7XG4gIHNhdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidXR0b25cIik7XG4gIHNhdmVCdXR0b24uaW5uZXJUZXh0ID0gXCJTYXZlIFdvcmtcIjtcbiAgZm9ybVNwYWNlLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlV29yayk7XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlQnV0dG9uXCIpO1xuICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIkRlbGV0ZSBXb3JrXCI7XG4gIGZvcm1TcGFjZS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyT3V0KTtcbiAgLy8gY29uc3QgcHJhbmNpbmdQb255ID0gbmV3IEltYWdlKCk7XG4gIC8vIHByYW5jaW5nUG9ueS5zcmMgPSBwcmFuY2luZ1BvbnkyO1xuICAvLyBwcmFuY2luZ1BvbnkuaWQ9XCJwb255TG9nb1wiO1xuICAvLyBoZWFkaW5nLmFwcGVuZENoaWxkKHByYW5jaW5nUG9ueSk7XG59XG5jcmVhdGVIZWFkaW5nKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWZhdWx0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RTcGFjZVwiKTtcbiAgZGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0XCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3QpO1xuXG4gIGNvbnN0IHByb2plY3R0aXRsZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3R0aXRsZUJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3R0aXRsZUJhclwiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0cy5pbm5lclRleHQgPSBcIlByb2plY3RzXCI7XG4gIHByb2plY3RzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdEZpZWxkXCIpO1xuICBwcm9qZWN0dGl0bGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gXCJEZWZhdWx0IFByb2plY3RcIjtcbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlXCIpO1xuICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJEZWZhdWx0XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHRpdGxlQmFyKTtcbiAgcHJvamVjdHRpdGxlQmFyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gIGNvbnN0IGNhcmRTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRTcGFjZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRpc3BsYXlcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkU3BhY2UpO1xufVxuXG5jcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xubGV0IGNvdW50ZXIgPSBjcmVhdGVDb3VudGVyKCk7XG5jb25zdCBwcm9qZWN0T2JqID0gY3JlYXRlUHJvamVjdE9iamVjdCgpO1xuYWRkQ2FyZHMoKTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCgpIHtcbiAgY29uc3QgZm9ybVNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtU3BhY2VcIik7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdXR0b25cIik7XG4gIG5ld1Byb2plY3RCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU5ld1Byb2plY3QpO1xuICBuZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiSGlkZVwiO1xuICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlUHJvamVjdEZvcm0pO1xuICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3UHJvamVjdEZvcm1cIik7XG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybVwiKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdCBUaXRsZVwiO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RUaXRsZVwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtXCIpO1xuICB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0U3VibWl0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gIGZvcm1TcGFjZS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkbmV3UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRQcm9qZWN0KCkge1xuICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XG4gIHJldHVybiBjdXJyZW50O1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hQcm9qZWN0KGVsZW0pIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICBwcm9qZWN0LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlXCIpO1xuICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5hY3RpdmVcIik7XG4gIGVsZW0ucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbmFjdGl2ZVwiKTtcbiAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcbiAgYWRkQ2FyZHMoKTtcbn1cblxuZnVuY3Rpb24gYWRkbmV3UHJvamVjdCgpIHtcbiAgY29uc3QgdGl0bGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3R0aXRsZUJhclwiKTtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBjdXJyZW50UHJvamVjdCgpO1xuICAvLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlXCIpO1xuICBkZWZhdWx0UHJvamVjdC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcbiAgZGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbmFjdGl2ZVwiKTtcbiAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0VGl0bGVcIikudmFsdWU7XG4gIGNvbnN0IG5ld0FyciA9IFtdO1xuICBwcm9qZWN0T2JqW25ld1Byb2plY3RUaXRsZV0gPSBuZXdBcnI7XG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RPYmopO1xuICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIG5ld1Byb2plY3RUaXRsZSk7XG4gIG5ld1Byb2plY3QuaW5uZXJUZXh0ID0gbmV3UHJvamVjdFRpdGxlO1xuICB0aXRsZUJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgZGVmYXVsdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzd2l0Y2hQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgfSk7XG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzd2l0Y2hQcm9qZWN0KG5ld1Byb2plY3QpO1xuICB9KTtcbiAgLy8gbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGN1cnJlbnRQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSkpO1xuICAvLyBuZXdQcm9qZWN0Lm9uY2xpY2sgPSBjdXJyZW50UHJvamVjdCgpO1xuICBoaWRlUHJvamVjdEZvcm0oKTtcbiAgLy8gcmV0dXJuIG5ld3Byb2plY3RPYmo7XG59XG5cbmZ1bmN0aW9uIGhpZGVQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5yZW1vdmUoKTtcbiAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEJ1dHRvblwiKTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVByb2plY3RGb3JtKTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBcIkNyZWF0ZSBOZXcgUHJvamVjdFwiO1xuICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVOZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2FyZHMoKSB7XG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RPYmopO1xuICBsaXN0SXRlbXMoKTtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVwiKTtcbiAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KCk7XG4gIGNvbnN0IHRpdGxlID0gcHJvamVjdC5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xuICBjb25zdCBjdXJyZW50UHJvamVjdEFycmF5ID0gcHJvamVjdE9ialt0aXRsZV07XG4gIGNvbnN0IGFsbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpO1xuICBpZiAoYWxsQ2FyZHMubGVuZ3RoICE9IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbENhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhbGxDYXJkc1tpXS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0QXJyYXlbaV0ucHJvamVjdCA9PSB0aXRsZSkge1xuICAgICAgZGlzcGxheUNhcmQoY3VycmVudFByb2plY3RBcnJheVtpXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUNhcmQoYXJyKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRcIik7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdG9Eb18ke2Fyci5udW1iZXJ9YCk7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRCYXJcIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICAgIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkQm9keS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRCb2R5XCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xuICAgIGNvbnN0IHByaW9yaXR5Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcmlvcml0eUNvbG9yXCIpO1xuICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKFwiaWRcIiwgYXJyLnByaW9yaXR5KTtcbiAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb2xvcik7XG5cbiAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29tcGxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNvbXBsZXRlXyR7YXJyLm51bWJlcn1gKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRCdXR0b25cIik7XG4gICAgY29tcGxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJDb21wbGV0ZVwiO1xuICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG5cbiAgICBjb25zdCB1bmNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB1bmNvbXBsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGB1bmNvbXBsZXRlXyR7YXJyLm51bWJlcn1gKTtcbiAgICB1bmNvbXBsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZEJ1dHRvblwiKTtcbiAgICB1bmNvbXBsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiTm90IEZpbmlzaGVkXCI7XG4gICBcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGVkaXRfJHthcnIubnVtYmVyfWApO1xuICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJNb2RpZnlcIjtcbiAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICBjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGV4cGFuZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZXhwYW5kXyR7YXJyLm51bWJlcn1gKTtcbiAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQnV0dG9uXCIpO1xuICAgIGV4cGFuZEJ1dHRvbi5pbm5lclRleHQgPSBcIkV4cGFuZFwiO1xuICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuXG4gICAgY29uc3QgdHJhc2hCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0cmFzaEJ1dHRvbi5zcmMgPSB0cmFzaEljb247XG4gICAgdHJhc2hCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbGV0ZV8ke2Fyci5udW1iZXJ9YCk7XG4gICAgdHJhc2hCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0cmFzaEJ1dHRvblwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlRmllbGRcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJUaXRsZTpcIjtcbiAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZVZhbHVlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVWYWx1ZVwiKTtcbiAgICB0aXRsZVZhbHVlLmlubmVyVGV4dCA9IGFyci50aXRsZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGF0ZUZpZWxkXCIpO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gXCJEdWUtRGF0ZTpcIjtcbiAgICBjb25zdCBkYXRlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGVWYWx1ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRhdGVWYWx1ZVwiKTtcbiAgICBkYXRlVmFsdWUuaW5uZXJUZXh0ID0gYXJyLmR1ZURhdGU7XG4gICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRpdGxlVmFsdWUpO1xuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGRhdGVWYWx1ZSk7XG4gICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQodHJhc2hCdXR0b24pO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVzY3JpcHRpb25GaWVsZFwiKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uVmFsdWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNjcmlwdGlvblZhbHVlXCIpO1xuICAgIGRlc2NyaXB0aW9uVmFsdWUuaW5uZXJUZXh0ID0gYXJyLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5vdGVzRmllbGRcIik7XG4gICAgbm90ZXMuaW5uZXJUZXh0ID0gXCJOb3RlczpcIjtcbiAgICBjb25zdCBub3RlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVWYWx1ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5vdGVzVmFsdWVcIik7XG4gICAgbm90ZVZhbHVlLmlubmVyVGV4dCA9IGFyci5ub3RlcztcblxuICAgIGNvbXBsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBjYXJkQm9keS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRDb21wbGV0ZVwiKTtcbiAgICAgIGFyci5wcmlvcml0eSA9IFwiY29tcGxldGVcIjtcbiAgICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKFwiaWRcIiwgYXJyLnByaW9yaXR5KTtcbiAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZCh1bmNvbXBsZXRlQnV0dG9uKTtcbiAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG4gICAgXG4gICAgICB1bmNvbXBsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNhcmRCb2R5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZEJvZHlcIik7XG4gICAgICAgIGFyci5wcmlvcml0eSA9IFwiTWVkaXVtXCI7XG4gICAgICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKFwiaWRcIiwgYXJyLnByaW9yaXR5KTtcbiAgICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcbiAgICAgICAgY2FyZFRpdGxlLnJlbW92ZUNoaWxkKHVuY29tcGxldGVCdXR0b24pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgZWRpdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgYXJyLnByb2plY3QgPSBcImRlbGV0ZWRcIjtcbiAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgIGNyZWF0ZUZvcm0oKTtcbiAgICB9O1xuXG4gICAgdHJhc2hCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFRvLURvP1wiKTtcbiAgICAgIGlmICh0ZXh0ID09IHRydWUpIHtcbiAgICAgICAgYXJyLnByb2plY3QgPSBcImRlbGV0ZWRcIjtcbiAgICAgICAgY29uc29sZS5sb2coYXJyLnByb2plY3QpO1xuICAgICAgICBhZGRDYXJkcygpO1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZXhwYW5kQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZXhwYW5kQ2FyZCcpO1xuICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25WYWx1ZSk7XG4gICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChub3Rlcyk7XG4gICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChub3RlVmFsdWUpO1xuICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGNvbGxhcHNlQnV0dG9uKTtcbiAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChleHBhbmRCdXR0b24pO1xuXG4gICAgICBjb2xsYXBzZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xuICAgICAgICBjYXJkQm9keS5yZW1vdmVDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGNhcmRCb2R5LnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uVmFsdWUpO1xuICAgICAgICBjYXJkQm9keS5yZW1vdmVDaGlsZChub3Rlcyk7XG4gICAgICAgIGNhcmRCb2R5LnJlbW92ZUNoaWxkKG5vdGVWYWx1ZSk7XG4gICAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChjb2xsYXBzZUJ1dHRvbik7XG4gICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuICAgICAgfTtcbiAgICB9O1xuICAgIGxldCBjb2xsYXBzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNvbGxhcHNlXyR7YXJyLm51bWJlcn1gKTtcbiAgICBjb2xsYXBzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRCdXR0b25cIik7XG4gICAgY29sbGFwc2VCdXR0b24uaW5uZXJUZXh0ID0gXCJIaWRlXCI7XG4gICAgY2FyZERyYWcoY2FyZCk7XG4gIH1cblxuICBjb25zdCBhbGxJbmFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5hY3RpdmVcIik7XG4gIC8vIGNvbnNvbGUubG9nKGFsbEluYWN0aXZlKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxJbmFjdGl2ZS5sZW5ndGg7IGsrKykge1xuICAgIC8vIGNvbnNvbGUubG9nKGFsbEluYWN0aXZlW2tdKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBhbGxJbmFjdGl2ZVtrXS5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IHByb2plY3RPYmpbcHJvamVjdFRpdGxlXTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHByb2plY3RBcnJheS5sZW5ndGg7IHIrKykge1xuICAgICAgaWYgKHByb2plY3RBcnJheVtyXS5wcm9qZWN0ID09IHByb2plY3QuYXR0cmlidXRlcy5pZC52YWx1ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlbcl0pO1xuICAgICAgICBkaXNwbGF5Q2FyZChwcm9qZWN0QXJyYXlbcl0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGRzIFRvIERvIGl0ZW1zIGZyb20gRm9ybSBpbnRvIExpc3QgSXRlbSBPYmplY3RzLCB0aGVuIGFkZHMgdGhlbSB0byBhcHByb3ByaWF0ZSBQcm9qZWN0IEFycmF5IGFmdGVyIGZvcm0gU3VibWl0IEJ1dHRvbiBpcyBjbGlja2VkXG5mdW5jdGlvbiBhZGR0b0RvKCkge1xuICBjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmF0dHJpYnV0ZXMuaWQudmFsdWU7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlO1xuICBjb25zdCByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl0nKTtcbiAgbGV0IHNlbGVjdGVkU2l6ZTtcbiAgZm9yIChjb25zdCByYWRpb0J1dHRvbiBvZiByYWRpb0J1dHRvbnMpIHtcbiAgICBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgc2VsZWN0ZWRTaXplID0gcmFkaW9CdXR0b24udmFsdWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpLnZhbHVlO1xuICBjb25zdCBuZXdJdGVtID0gbmV3IGxpc3RJdGVtKFxuICAgIGNvdW50ZXIsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBzZWxlY3RlZFNpemUsXG4gICAgcHJvamVjdE5hbWUsXG4gICAgbm90ZXNcbiAgKTtcbiAgcHJvamVjdE9ialtwcm9qZWN0TmFtZV0ucHVzaChuZXdJdGVtKTtcbiAgcmVtb3ZlRm9ybSgpO1xuICBjb3VudGVyKys7XG4gIGFkZENhcmRzKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVXb3JrKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RPYmopKTtcbiAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRlclwiLCBKU09OLnN0cmluZ2lmeShjb3VudGVyKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gIGNvbnN0IGZvcm1TcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVNwYWNlXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAvLyBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRlbnQucmVtb3ZlKCk7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XG4gIGFkZEJ1dHRvbi5yZW1vdmUoKTtcbiAgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVG9kb1wiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgbmV3IEl0ZW1cIjtcbiAgZm9ybVNwYWNlLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlRm9ybSk7XG4gIC8vIGN1cnJlbnRQcm9qZWN0LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBjYXJkRHJhZyhjYXJkKSB7XG4gIC8vIGxldCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcbiAgLy8gbGV0IGNhcmRJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcbiAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcbiAgY2FyZC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRCdXR0b25cIik7XG4gICAgY29uc3QgdHJhc2hCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaEJ1dHRvblwiKTtcbiAgICBjb25zdCBlbGVtZW50QmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KFxuICAgICAgZXZlbnQuY2xpZW50WCxcbiAgICAgIGV2ZW50LmNsaWVudFlcbiAgICApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGVsZW1lbnRCZWxvdyA9PSBidXR0b25zW2ldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50QmVsb3cgPT0gdHJhc2hCdXR0b25zW2ldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGlmdFggPSBldmVudC5jbGllbnRYIC0gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIGNvbnN0IHNoaWZ0WSA9IGV2ZW50LmNsaWVudFkgLSBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgIGNhcmQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgY2FyZC5zdHlsZS56SW5kZXggPSAxMDAwO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNhcmQpO1xuXG4gICAgbW92ZUNhcmQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblxuICAgIC8vIG1vdmVzIENhcmQgYXQgdGhlIFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgdGhlIHBhZ2UsIHRha2luZyBhY2NvdW50IGZvciB0aGUgc2hpZnRzIGluaXRpYWxseSB3aGVuIGNsaWNraW5nIG9uIGNhcmRcbiAgICBmdW5jdGlvbiBtb3ZlQ2FyZChwYWdlWCwgcGFnZVkpIHtcbiAgICAgIGNhcmQuc3R5bGUubGVmdCA9IGAke3BhZ2VYIC0gc2hpZnRYfXB4YDtcbiAgICAgIGNhcmQuc3R5bGUudG9wID0gYCR7cGFnZVkgLSBzaGlmdFl9cHhgO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50RHJvcHBhYmxlID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICBtb3ZlQ2FyZChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG4gICAgICBjYXJkLmhpZGRlbiA9IHRydWU7XG4gICAgICBjb25zdCBlbGVtQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgY2FyZC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIGlmICghZWxlbUJlbG93KSByZXR1cm47XG4gICAgICBjb25zdCBkcm9wcGFibGVCZWxvdyA9IGVsZW1CZWxvdy5jbG9zZXN0KFwiLmluYWN0aXZlXCIpO1xuICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUgIT0gZHJvcHBhYmxlQmVsb3cpIHtcbiAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcbiAgICAgICAgICBsZWF2ZURyb3BwYWJsZShjdXJyZW50RHJvcHBhYmxlKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50RHJvcHBhYmxlID0gZHJvcHBhYmxlQmVsb3c7XG4gICAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlKSB7XG4gICAgICAgICAgY2FyZC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIC8vIGN1cnJlbnREcm9wcGFibGUuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjNmNWY5JztcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gY3VycmVudERyb3BwYWJsZS5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkSUQgPSBjYXJkLmF0dHJpYnV0ZXMuaWQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBudW1iID0gY2FyZElELnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld051bSA9IHBhcnNlSW50KG51bWIsIDEwKTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocHJvamVjdE9iaikuZm9yRWFjaCgoWywgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWVbbnVtYmVyXSk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVbaV0ubnVtYmVyID09IG5ld051bSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHZhbHVlW2ldO1xuICAgICAgICAgICAgICAgICAgaXRlbS5wcm9qZWN0ID0gbmV3UHJvamVjdE5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGFkZENhcmRzKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vICBlbnRlckRyb3BwYWJsZShjdXJyZW50RHJvcHBhYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuXG4gICAgY2FyZC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICBhZGRDYXJkcygpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gZnVuY3Rpb24gZW50ZXJEcm9wcGFibGUoZWxlbSkge1xuXG4gIC8vICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAncGluayc7XG4gIC8vICAgICB9XG5cbiAgZnVuY3Rpb24gbGVhdmVEcm9wcGFibGUoZWxlbSkge1xuICAgIGNvbnNvbGUubG9nKGVsZW0pO1xuICAgIC8vIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAvLyBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAnYmx1ZSc7XG4gIH1cblxuICBjYXJkLm9uZHJhZ3N0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn1cblxuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcblxuZnVuY3Rpb24gY2xlYXJPdXQoKSB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9