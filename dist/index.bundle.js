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
___CSS_LOADER_EXPORT___.push([module.id, "/* @font-face {\n    font-family: 'MyFont';\n    src: url('./Tolkien.ttf') format(\"truetype\");\n    font-weight: 600;\n    font-style: normal;\n  }\n   */\nbody {\n  margin: 0;\n  padding: 0px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#container {\n  display: grid;\n  grid-template-columns: 1fr 6fr 6fr;\n  grid-template-rows: 0.5fr 2fr 3fr;\n  grid-template-areas:\n    \"h h h\"\n    \"s c c\"\n    \"t c c\";\n}\n\n#formSpace {\n  grid-area: s;\n  display: flex;\n  flex-direction: column;\n  background-color: #e2e8f0;\n  color: #1e293b;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem;\n  padding-top: 1.5rem;\n  padding-bottom: 2rem;\n}\n\n#header {\n  grid-area: h;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: #f8fafc;\n  background-color: #475569;\n  padding: 0.5rem;\n}\n\nh2 {\n  font-size: 1.8em;\n}\n\n.dragger {\n  width: 250px;\n  height: 30px;\n  background-color: #0f172a;\n}\n\n.button {\n  width: 14rem;\n  /* height: 75px; */\n  cursor: pointer;\n  background-color: #94a3b8;\n  color: #0f172a;\n  font-weight: 700;\n  font-size: 22px;\n  border-radius: 40px;\n  padding: 9px;\n  box-shadow: 0 2px #0f172a;\n}\n\n.button:hover {\n  background-color: #334155;\n  color: #f8fafc;\n}\n\n.button:active {\n  background-color: #1e293b;\n  color: #f8fafc;\n  transform: translateY(4px);\n}\n\n#projecttitleBar {\n  grid-area: t;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem;\n  gap: 3rem;\n  align-items: center;\n  background-color: #e2e8f0;\n  color: #1e293b;\n}\n\n.projectField {\n  font-size: 22px;\n  font-weight: 700;\n  background-color: #e2e8f0;\n  color: #0f172a;\n  border-bottom: 1px solid #0f172a;\n  padding-left: 3em;\n  padding-right: 3em;\n  padding-bottom: 0.3em;\n}\n\n.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0) 1px 3px 10px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n  border: 4px solid #475569;\n}\n\n.inactive {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #edf1f5;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n}\n\n.list {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  padding-top: 10px;\n  padding-left: 20px;\n}\n\n.listColor {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n}\n\n#display {\n  grid-area: c;\n  display: grid;\n  grid-auto-flow: dense;\n  grid-template-columns: repeat(auto-fit, 20rem);\n  background-color: #f8fafc;\n  color: #0f172a;\n  padding: 10px;\n  gap: 20px;\n}\n.card {\n  border: 2px solid black;\n  background-color: #cbd5e1;\n  border-radius: 15px;\n  font-size: 28px;\n  font-weight: 600;\n  padding: 0px 5px 5px 5px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 300px;\n  height: 250px;\n}\n\n.expandCard {\n  grid-column: 1 / -1;\n  border: 2px solid black;\n  background-color: #cbd5e1;\n  border-radius: 15px;\n  font-size: 28px;\n  font-weight: 600;\n  padding: 0px 5px 5px 5px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  /* width: 300px;\n  height: 250px; */\n}\n\n.cardComplete {\n    opacity: .4;\n    display: grid;\n  padding: 20px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-areas:\n    \"t tv\"\n    \"d dv\"\n    \"s sv\"\n    \"n nv\"\n    \"b b\";\n  font-size: 22px;\n}\n\n\n.cardBar {\n  padding: 2px;\n}\n\n.cardBody {\n  display: flex;\n  float: inline-end;\n  flex-direction: column;\n  max-width: 300px;\n  padding: 10px;\n  /* grid-template-columns: repeat(auto-fit);\n  grid-auto-flow: column; */\n  /* grid-template-columns: 1fr; */\n  /* grid-template-rows: 1fr 1fr 1fr; \n  grid-template-areas:\n    \"tv\"\n    \"dv\"\n    \"b\"; */\n  font-size: 22px;\n  gap: 5px;\n}\n\n.expandBody {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 1fr 1fr 4fr 4fr 1fr;\n  grid-template-areas:\n  \"t tv\"\n  \"d dv\"\n  \"s sv\"\n  \"n nv\"\n  \"b b\";\n  gap: 5px;\n}\n\n.cardButton {\n  background-color: #fcfdfd;\n  color: #0f172a;\n  border-radius: 10px;\n  width: 75px;\n  opacity: 1;\n}\n\n.titleField {\n  grid-area: t;\n  align-self: center;\n  justify-self: center;\n}\n.titleValue {\n  grid-area: tv;\n  align-self: center;\n  justify-self: flex-start;\n}\n\n.dateField {\n  grid-area: d;\n  align-self: center;\n  justify-self: center;\n}\n.dateValue {\n  grid-area: dv;\n  align-self: center;\n  justify-self: flex-start;\n}\n\n.descriptionField {\n  grid-area: s;\n  align-self: center;\n  justify-self: center;\n}\n.descriptionValue {\n  grid-area: sv;\n  align-self: center;\n  justify-self: flex-start;\n}\n\n.notesField {\n  grid-area: n;\n  align-self: center;\n  justify-self: center;\n}\n.notesValue {\n  grid-area: nv;\n  align-self: center;\n  justify-self: flex-start;\n}\n\n.trashButton {\n  margin: auto;\n  margin-bottom: 10px;\n  grid-area: b;\n  display: flex;\n  align-self: flex-end;\n  justify-self: flex-end;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  padding: 5px;\n  border-radius: 10px;\n  border: 2px solid #0f172a;\n}\n\n.priorityColor {\n  width: 300px;\n  height: 15px;\n  border-radius: 15px;\n  border: 2px solid #0f172a;\n}\n\n#Urgent {\n  background-color: red;\n}\n\n#High {\n  background-color: orange;\n}\n\n#Medium {\n  background-color: yellow;\n}\n\n#Low {\n  background-color: green;\n}\n\n#complete {\n  background-color: blue;\n}\n\n#content {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.form {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.label {\n  font-size: 22px;\n  font-weight: 700;\n  width: 20rem;\n  color: #f8fafc;\n  padding: 15px;\n  gap: 5px;\n  background-color: #475569;\n  /* background-size: 100% 100%;\n    background-position: center center; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px,\n    rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\n}\n\n.text {\n  text-align: center;\n}\n\n.item,\n.listItem {\n  /* font-family: 'MyFont'; */\n  font-size: 22px;\n  font-weight: 500;\n  width: 15rem;\n  color: black;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ninput[type=\"text\"] {\n  border: 4px solid #1e293b;\n  border-radius: 10px;\n  background-color: #f8fafc;\n}\n\ninput[type=\"text\"]:focus {\n  border: 4px solid #0f172a;\n}\n\n#description {\n  height: 5rem;\n}\n\n.image {\n  width: 200px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* @font-face {\n    font-family: 'MyFont';\n    src: url('./Tolkien.ttf') format(\"truetype\");\n    font-weight: 600;\n    font-style: normal;\n  }\n   */\nbody {\n  margin: 0;\n  padding: 0px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#container {\n  display: grid;\n  grid-template-columns: 1fr 6fr 6fr;\n  grid-template-rows: 0.5fr 2fr 3fr;\n  grid-template-areas:\n    \"h h h\"\n    \"s c c\"\n    \"t c c\";\n}\n\n#formSpace {\n  grid-area: s;\n  display: flex;\n  flex-direction: column;\n  background-color: #e2e8f0;\n  color: #1e293b;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem;\n  padding-top: 1.5rem;\n  padding-bottom: 2rem;\n}\n\n#header {\n  grid-area: h;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: #f8fafc;\n  background-color: #475569;\n  padding: 0.5rem;\n}\n\nh2 {\n  font-size: 1.8em;\n}\n\n.dragger {\n  width: 250px;\n  height: 30px;\n  background-color: #0f172a;\n}\n\n.button {\n  width: 14rem;\n  /* height: 75px; */\n  cursor: pointer;\n  background-color: #94a3b8;\n  color: #0f172a;\n  font-weight: 700;\n  font-size: 22px;\n  border-radius: 40px;\n  padding: 9px;\n  box-shadow: 0 2px #0f172a;\n}\n\n.button:hover {\n  background-color: #334155;\n  color: #f8fafc;\n}\n\n.button:active {\n  background-color: #1e293b;\n  color: #f8fafc;\n  transform: translateY(4px);\n}\n\n#projecttitleBar {\n  grid-area: t;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5rem;\n  gap: 3rem;\n  align-items: center;\n  background-color: #e2e8f0;\n  color: #1e293b;\n}\n\n.projectField {\n  font-size: 22px;\n  font-weight: 700;\n  background-color: #e2e8f0;\n  color: #0f172a;\n  border-bottom: 1px solid #0f172a;\n  padding-left: 3em;\n  padding-right: 3em;\n  padding-bottom: 0.3em;\n}\n\n.active {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0) 1px 3px 10px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n  border: 4px solid #475569;\n}\n\n.inactive {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 200px;\n  padding: 0.7rem;\n  font-size: 26px;\n  font-weight: 700;\n  background-color: #edf1f5;\n  color: #0f172a;\n  box-shadow: rgba(0, 0, 0, 0.33) -2px 2px 5px;\n  border-radius: 7px;\n  text-align: center;\n  margin: auto;\n}\n\n.list {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  padding-top: 10px;\n  padding-left: 20px;\n}\n\n.listColor {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n}\n\n#display {\n  grid-area: c;\n  display: grid;\n  grid-auto-flow: dense;\n  grid-template-columns: repeat(auto-fit, 20rem);\n  background-color: #f8fafc;\n  color: #0f172a;\n  padding: 10px;\n  gap: 20px;\n}\n.card {\n  border: 2px solid black;\n  background-color: #cbd5e1;\n  border-radius: 15px;\n  font-size: 28px;\n  font-weight: 600;\n  padding: 0px 5px 5px 5px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  width: 300px;\n  height: 250px;\n}\n\n.expandCard {\n  grid-column: 1 / -1;\n  border: 2px solid black;\n  background-color: #cbd5e1;\n  border-radius: 15px;\n  font-size: 28px;\n  font-weight: 600;\n  padding: 0px 5px 5px 5px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  /* width: 300px;\n  height: 250px; */\n}\n\n.cardComplete {\n    opacity: .4;\n    display: grid;\n  padding: 20px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-areas:\n    \"t tv\"\n    \"d dv\"\n    \"s sv\"\n    \"n nv\"\n    \"b b\";\n  font-size: 22px;\n}\n\n\n.cardBar {\n  padding: 2px;\n}\n\n.cardBody {\n  display: flex;\n  float: inline-end;\n  flex-direction: column;\n  max-width: 300px;\n  padding: 10px;\n  /* grid-template-columns: repeat(auto-fit);\n  grid-auto-flow: column; */\n  /* grid-template-columns: 1fr; */\n  /* grid-template-rows: 1fr 1fr 1fr; \n  grid-template-areas:\n    \"tv\"\n    \"dv\"\n    \"b\"; */\n  font-size: 22px;\n  gap: 5px;\n}\n\n.expandBody {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 1fr 1fr 4fr 4fr 1fr;\n  grid-template-areas:\n  \"t tv\"\n  \"d dv\"\n  \"s sv\"\n  \"n nv\"\n  \"b b\";\n  gap: 5px;\n}\n\n.cardButton {\n  background-color: #fcfdfd;\n  color: #0f172a;\n  border-radius: 10px;\n  width: 75px;\n  opacity: 1;\n}\n\n.titleField {\n  grid-area: t;\n  align-self: center;\n  justify-self: center;\n}\n.titleValue {\n  grid-area: tv;\n  align-self: center;\n  justify-self: flex-start;\n}\n\n.dateField {\n  grid-area: d;\n  align-self: center;\n  justify-self: center;\n}\n.dateValue {\n  grid-area: dv;\n  align-self: center;\n  justify-self: flex-start;\n}\n\n.descriptionField {\n  grid-area: s;\n  align-self: center;\n  justify-self: center;\n}\n.descriptionValue {\n  grid-area: sv;\n  align-self: center;\n  justify-self: flex-start;\n}\n\n.notesField {\n  grid-area: n;\n  align-self: center;\n  justify-self: center;\n}\n.notesValue {\n  grid-area: nv;\n  align-self: center;\n  justify-self: flex-start;\n}\n\n.trashButton {\n  margin: auto;\n  margin-bottom: 10px;\n  grid-area: b;\n  display: flex;\n  align-self: flex-end;\n  justify-self: flex-end;\n  background-color: #fcfdfd;\n  color: #0f172a;\n  padding: 5px;\n  border-radius: 10px;\n  border: 2px solid #0f172a;\n}\n\n.priorityColor {\n  width: 300px;\n  height: 15px;\n  border-radius: 15px;\n  border: 2px solid #0f172a;\n}\n\n#Urgent {\n  background-color: red;\n}\n\n#High {\n  background-color: orange;\n}\n\n#Medium {\n  background-color: yellow;\n}\n\n#Low {\n  background-color: green;\n}\n\n#complete {\n  background-color: blue;\n}\n\n#content {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.form {\n  width: 35rem;\n  background-color: #1e293b;\n  color: #f8fafc;\n  font-size: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 15px;\n  padding-top: 5px;\n  border-radius: 10px;\n}\n\n.label {\n  font-size: 22px;\n  font-weight: 700;\n  width: 20rem;\n  color: #f8fafc;\n  padding: 15px;\n  gap: 5px;\n  background-color: #475569;\n  /* background-size: 100% 100%;\n    background-position: center center; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 40%) 20px 5px 10px,\n    rgb(0 0 0 / 30%) 5px 10px 0px -10px, rgb(0 0 0 / 20%) 6px -5px 18px inset;\n}\n\n.text {\n  text-align: center;\n}\n\n.item,\n.listItem {\n  /* font-family: 'MyFont'; */\n  font-size: 22px;\n  font-weight: 500;\n  width: 15rem;\n  color: black;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ninput[type=\"text\"] {\n  border: 4px solid #1e293b;\n  border-radius: 10px;\n  background-color: #f8fafc;\n}\n\ninput[type=\"text\"]:focus {\n  border: 4px solid #0f172a;\n}\n\n#description {\n  height: 5rem;\n}\n\n.image {\n  width: 200px;\n}\n"],"sourceRoot":""}]);
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
  constructor(number, title, description, dueDate, priority, project, notes, complete) {
    this.number = number;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.notes = notes;
    this.complete = complete;
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
    // cardBody.appendChild(title);
    cardBody.appendChild(titleValue);
    // cardBody.appendChild(date);
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
      arr.complete = true;
      priorityColor.setAttribute("id", "complete");
      cardTitle.appendChild(uncompleteButton);
      cardTitle.removeChild(completeButton);
    
      uncompleteButton.onclick = () => {
        cardBody.setAttribute("class", "cardBody");
        arr.complete = "false";
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
      cardTitle.setAttribute('class', 'expandBar');
      cardBody.setAttribute('class', 'expandBody');
      cardBody.appendChild(description);
      cardBody.appendChild(descriptionValue);
      cardBody.appendChild(notes);
      cardBody.appendChild(noteValue);
      cardTitle.appendChild(collapseButton);
      cardTitle.removeChild(expandButton);

      collapseButton.onclick = () => {
        card.setAttribute('class', 'card');
        cardTitle.setAttribute('class', 'cardBar');
        cardBody.setAttribute('class', 'cardBody');
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
  const complete = false;
  const newItem = new listItem(
    counter,
    title,
    description,
    dueDate,
    selectedSize,
    projectName,
    notes,
    complete,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssT0FBTyxhQUFhLFNBQVMsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1B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QUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNzQjtBQUN0QjtBQUNxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUFPO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7QUFDa0I7QUFDSDs7QUFFakI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnREFBVTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FB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bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIHNyYzogdXJsKCcuL1RvbGtpZW4udHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuICAgKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgNmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImggaCBoXFxcIlxcbiAgICBcXFwicyBjIGNcXFwiXFxuICAgIFxcXCJ0IGMgY1xcXCI7XFxufVxcblxcbiNmb3JtU3BhY2Uge1xcbiAgZ3JpZC1hcmVhOiBzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgY29sb3I6ICMxZTI5M2I7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgY29sb3I6ICNmOGZhZmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4uZHJhZ2dlciB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIC8qIGhlaWdodDogNzVweDsgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGEzYjg7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgcGFkZGluZzogOXB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggIzBmMTcyYTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTU1O1xcbiAgY29sb3I6ICNmOGZhZmM7XFxufVxcblxcbi5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICBjb2xvcjogI2Y4ZmFmYztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG5cXG4jcHJvamVjdHRpdGxlQmFyIHtcXG4gIGdyaWQtYXJlYTogdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBnYXA6IDNyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIGNvbG9yOiAjMWUyOTNiO1xcbn1cXG5cXG4ucHJvamVjdEZpZWxkIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgY29sb3I6ICMwZjE3MmE7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBmMTcyYTtcXG4gIHBhZGRpbmctbGVmdDogM2VtO1xcbiAgcGFkZGluZy1yaWdodDogM2VtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmZGZkO1xcbiAgY29sb3I6ICMwZjE3MmE7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDApIDFweCAzcHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlcjogNHB4IHNvbGlkICM0NzU1Njk7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmNTtcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMzKSAtMnB4IDJweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5saXN0Q29sb3Ige1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4jZGlzcGxheSB7XFxuICBncmlkLWFyZWE6IGM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIwcmVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5jYXJkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMHB4IDVweCA1cHggNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLmV4cGFuZENhcmQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMHB4IDVweCA1cHggNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgLyogd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDsgKi9cXG59XFxuXFxuLmNhcmRDb21wbGV0ZSB7XFxuICAgIG9wYWNpdHk6IC40O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0IHR2XFxcIlxcbiAgICBcXFwiZCBkdlxcXCJcXG4gICAgXFxcInMgc3ZcXFwiXFxuICAgIFxcXCJuIG52XFxcIlxcbiAgICBcXFwiYiBiXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuXFxuLmNhcmRCYXIge1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uY2FyZEJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsb2F0OiBpbmxpbmUtZW5kO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgKi9cXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAqL1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjsgXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidHZcXFwiXFxuICAgIFxcXCJkdlxcXCJcXG4gICAgXFxcImJcXFwiOyAqL1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5leHBhbmRCb2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNGZyIDRmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgXFxcInQgdHZcXFwiXFxuICBcXFwiZCBkdlxcXCJcXG4gIFxcXCJzIHN2XFxcIlxcbiAgXFxcIm4gbnZcXFwiXFxuICBcXFwiYiBiXFxcIjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uY2FyZEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmZGZkO1xcbiAgY29sb3I6ICMwZjE3MmE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGl0bGVGaWVsZCB7XFxuICBncmlkLWFyZWE6IHQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRpdGxlVmFsdWUge1xcbiAgZ3JpZC1hcmVhOiB0djtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmRhdGVGaWVsZCB7XFxuICBncmlkLWFyZWE6IGQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmRhdGVWYWx1ZSB7XFxuICBncmlkLWFyZWE6IGR2O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZGVzY3JpcHRpb25GaWVsZCB7XFxuICBncmlkLWFyZWE6IHM7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmRlc2NyaXB0aW9uVmFsdWUge1xcbiAgZ3JpZC1hcmVhOiBzdjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLm5vdGVzRmllbGQge1xcbiAgZ3JpZC1hcmVhOiBuO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5ub3Rlc1ZhbHVlIHtcXG4gIGdyaWQtYXJlYTogbnY7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50cmFzaEJ1dHRvbiB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZ3JpZC1hcmVhOiBiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMGYxNzJhO1xcbn1cXG5cXG4ucHJpb3JpdHlDb2xvciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzBmMTcyYTtcXG59XFxuXFxuI1VyZ2VudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNIaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuI01lZGl1bSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbiNMb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbiNjb21wbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogMzVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgY29sb3I6ICNmOGZhZmM7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgd2lkdGg6IDM1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gIGNvbG9yOiAjZjhmYWZjO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5sYWJlbCB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgY29sb3I6ICNmOGZhZmM7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcbiAgLyogYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA0MCUpIDIwcHggNXB4IDEwcHgsXFxuICAgIHJnYigwIDAgMCAvIDMwJSkgNXB4IDEwcHggMHB4IC0xMHB4LCByZ2IoMCAwIDAgLyAyMCUpIDZweCAtNXB4IDE4cHggaW5zZXQ7XFxufVxcblxcbi50ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0sXFxuLmxpc3RJdGVtIHtcXG4gIC8qIGZvbnQtZmFtaWx5OiAnTXlGb250JzsgKi9cXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aWR0aDogMTVyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjMWUyOTNiO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjMGYxNzJhO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG4uaW1hZ2Uge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7SUFNSTtBQUNK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IGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vVG9sa2llbi50dGYnKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG4gICAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciA2ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDJmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaCBoIGhcXFwiXFxuICAgIFxcXCJzIGMgY1xcXCJcXG4gICAgXFxcInQgYyBjXFxcIjtcXG59XFxuXFxuI2Zvcm1TcGFjZSB7XFxuICBncmlkLWFyZWE6IHM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICBjb2xvcjogIzFlMjkzYjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBjb2xvcjogI2Y4ZmFmYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxufVxcblxcbi5kcmFnZ2VyIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxufVxcblxcbi5idXR0b24ge1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgLyogaGVpZ2h0OiA3NXB4OyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0YTNiODtcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCAjMGYxNzJhO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxuICBjb2xvcjogI2Y4ZmFmYztcXG59XFxuXFxuLmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXG4gIGNvbG9yOiAjZjhmYWZjO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbiNwcm9qZWN0dGl0bGVCYXIge1xcbiAgZ3JpZC1hcmVhOiB0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGdhcDogM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgY29sb3I6ICMxZTI5M2I7XFxufVxcblxcbi5wcm9qZWN0RmllbGQge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGYxNzJhO1xcbiAgcGFkZGluZy1sZWZ0OiAzZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAzZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMC43cmVtO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCkgMXB4IDNweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiA0cHggc29saWQgIzQ3NTU2OTtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWY1O1xcbiAgY29sb3I6ICMwZjE3MmE7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzMpIC0ycHggMnB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLmxpc3RDb2xvciB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNkaXNwbGF5IHtcXG4gIGdyaWQtYXJlYTogYztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjByZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuLmNhcmQge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAwcHggNXB4IDVweCA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4uZXhwYW5kQ2FyZCB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAwcHggNXB4IDVweCA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICAvKiB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4OyAqL1xcbn1cXG5cXG4uY2FyZENvbXBsZXRlIHtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInQgdHZcXFwiXFxuICAgIFxcXCJkIGR2XFxcIlxcbiAgICBcXFwicyBzdlxcXCJcXG4gICAgXFxcIm4gbnZcXFwiXFxuICAgIFxcXCJiIGJcXFwiO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG5cXG4uY2FyZEJhciB7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5jYXJkQm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxvYXQ6IGlubGluZS1lbmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCk7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAqL1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7ICovXFxuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyOyBcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0dlxcXCJcXG4gICAgXFxcImR2XFxcIlxcbiAgICBcXFwiYlxcXCI7ICovXFxuICBmb250LXNpemU6IDIycHg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmV4cGFuZEJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0ZnIgNGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwidCB0dlxcXCJcXG4gIFxcXCJkIGR2XFxcIlxcbiAgXFxcInMgc3ZcXFwiXFxuICBcXFwibiBudlxcXCJcXG4gIFxcXCJiIGJcXFwiO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5jYXJkQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZkZmQ7XFxuICBjb2xvcjogIzBmMTcyYTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogNzVweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50aXRsZUZpZWxkIHtcXG4gIGdyaWQtYXJlYTogdDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4udGl0bGVWYWx1ZSB7XFxuICBncmlkLWFyZWE6IHR2O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZGF0ZUZpZWxkIHtcXG4gIGdyaWQtYXJlYTogZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uZGF0ZVZhbHVlIHtcXG4gIGdyaWQtYXJlYTogZHY7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbkZpZWxkIHtcXG4gIGdyaWQtYXJlYTogcztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uZGVzY3JpcHRpb25WYWx1ZSB7XFxuICBncmlkLWFyZWE6IHN2O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubm90ZXNGaWVsZCB7XFxuICBncmlkLWFyZWE6IG47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLm5vdGVzVmFsdWUge1xcbiAgZ3JpZC1hcmVhOiBudjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnRyYXNoQnV0dG9uIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBncmlkLWFyZWE6IGI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmRmZDtcXG4gIGNvbG9yOiAjMGYxNzJhO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZjE3MmE7XFxufVxcblxcbi5wcmlvcml0eUNvbG9yIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMGYxNzJhO1xcbn1cXG5cXG4jVXJnZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI0hpZ2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4jTWVkaXVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuI0xvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuI2NvbXBsZXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAzNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxuICBjb2xvcjogI2Y4ZmFmYztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICB3aWR0aDogMzVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcbiAgY29sb3I6ICNmOGZhZmM7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB3aWR0aDogMjByZW07XFxuICBjb2xvcjogI2Y4ZmFmYztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBnYXA6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMjBweCA1cHggMTBweCxcXG4gICAgcmdiKDAgMCAwIC8gMzAlKSA1cHggMTBweCAwcHggLTEwcHgsIHJnYigwIDAgMCAvIDIwJSkgNnB4IC01cHggMThweCBpbnNldDtcXG59XFxuXFxuLnRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaXRlbSxcXG4ubGlzdEl0ZW0ge1xcbiAgLyogZm9udC1mYW1pbHk6ICdNeUZvbnQnOyAqL1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICMxZTI5M2I7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICMwZjE3MmE7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbi5pbWFnZSB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgY3JlYXRlRm9ybSB9O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9maXJzdCwgaW1wb3J0L2V4dGVuc2lvbnMsIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgYWRkdG9EbyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb2RvXCIpO1xuICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCJIaWRlXCI7XG4gIGFkZEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlRm9ybSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVGb3JtKTtcbiAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9jayBmbGV4XCI7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFwiKTtcbiAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIkl0ZW0gVGl0bGVcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1cIik7XG4gIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxcIik7XG4gIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gXCJJdGVtIERlc2NyaXB0aW9uXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBkdWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGR1ZUxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxcIik7XG4gIGR1ZUxhYmVsLmlubmVyVGV4dCA9IFwiRHVlIERhdGVcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChkdWVMYWJlbCk7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbVwiKTtcbiAgZHVlTGFiZWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3cmFwcGVyXCIpO1xuICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxcIik7XG4gIHdyYXBwZXIuaW5uZXJUZXh0ID0gXCJTZXQgUHJpb3JpdHkgZm9yIEl0ZW1cIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIFVyZ2VudDogZmFsc2UsXG4gICAgSGlnaDogZmFsc2UsXG4gICAgTWVkaXVtOiBmYWxzZSxcbiAgICBMb3c6IGZhbHNlLFxuICB9O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IGtleTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgIGlucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gICAgaW5wdXQudmFsdWUgPSBrZXk7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB9XG5cbiAgY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGVzTGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFwiKTtcbiAgbm90ZXNMYWJlbC5pbm5lclRleHQgPSBcIk5vdGVzOlwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpO1xuICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbm90ZXMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIG5vdGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNcIik7XG4gIG5vdGVzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbVwiKTtcbiAgbm90ZXNMYWJlbC5hcHBlbmRDaGlsZChub3Rlcyk7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidXR0b25cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGR0b0RvKTtcbn1cblxuZnVuY3Rpb24gaGlkZUZvcm0oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQucmVtb3ZlKCk7XG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9kb1wiKTtcbiAgYWRkQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlRm9ybSk7XG4gIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBuZXcgSXRlbVwiO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUZvcm0pO1xufVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVJdGVtKHN0cmluZywgaWQpIHtcbi8vICAgICBsZXQgdGl0bGUgPSBzdHJpbmc7XG4vLyAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4vLyAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcbi8vICAgICBpdGVtLmlubmVyVGV4dCA9IHRpdGxlO1xuLy8gICAgIHJldHVybiBpdGVtO1xuLy8gIH1cblxuLy8gIGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cmluZykge1xuLy8gICAgIGxldCB0aXRsZVRleHQgPSBzdHJpbmc7XG4vLyAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xuLy8gICAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcbi8vICAgICByZXR1cm4gdGl0bGU7XG4vLyAgfVxuXG4vLyAgZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oc3RyaW5nKSB7XG4vLyAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0Jyk7XG4vLyAgICAgdGl0bGUuaW5uZXJUZXh0ID0gc3RyaW5nO1xuLy8gICAgIHJldHVybiB0aXRsZTtcbi8vICB9XG5cbi8vICBmdW5jdGlvbiBjcmVhdGVJbWFnZShzdHJpbmcsIGlkKXtcbi8vICAgICBsZXQgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbi8vICAgICBuZXdJbWFnZS5zcmMgPSBzdHJpbmc7XG4vLyAgICAgbmV3SW1hZ2UuaWQgPSBpZDtcbi8vICAgICBuZXdJbWFnZS5jbGFzc05hbWUgPSAnaW1hZ2UnO1xuLy8gICAgIHJldHVybiBuZXdJbWFnZTtcbi8vICB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QgKCkge1xuLy8gICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuLy8gICAgIGxldCBjb250YWN0VGl0bGUgPSBjcmVhdGVUaXRsZSgnQ29udGFjdCBVcycpO1xuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcblxuLy8gICAgIGxldCBiYXJsaW1hbkNhcmQgPSBjcmVhdGVJdGVtKCdCYXJsaW1hbiBCdXR0ZXJidXInLCAnYmFybGltYW4nKVxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFybGltYW5DYXJkKTtcbi8vICAgICBsZXQgYmFybGltYW5JbWFnZSA9IGNyZWF0ZUltYWdlKGJhcmxpbWFuLCAnYmFybGltYW4nKTtcbi8vICAgICBiYXJsaW1hbkNhcmQuYXBwZW5kQ2hpbGQoYmFybGltYW5JbWFnZSk7XG4vLyAgICAgbGV0IGJhcmxpbWFuVGV4dCA9IGNyZWF0ZURlc2NyaXB0aW9uKCdJbm5rZWVwIC0gQkJidXJAYnJlZWxhbmQubmV0Jyk7XG4vLyAgICAgYmFybGltYW5DYXJkLmFwcGVuZENoaWxkKGJhcmxpbWFuVGV4dCk7XG5cbi8vICAgICBsZXQgbm9iQ2FyZCA9IGNyZWF0ZUl0ZW0oJ05vYicsICdub2InKVxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9iQ2FyZCk7XG4vLyAgICAgbGV0IG5vYkltYWdlID0gY3JlYXRlSW1hZ2Uobm9iLCAnbm9iJyk7XG4vLyAgICAgbm9iQ2FyZC5hcHBlbmRDaGlsZChub2JJbWFnZSk7XG4vLyAgICAgbGV0IG5vYlRleHQgPSBjcmVhdGVEZXNjcmlwdGlvbignQ29vayAtIHNsb3djb2FjaDFAYnJlZWxhbmQubmV0Jyk7XG4vLyAgICAgbm9iQ2FyZC5hcHBlbmRDaGlsZChub2JUZXh0KTtcblxuLy8gfVxuIiwiLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gXCIuL2Zvcm0uanNcIjtcbmltcG9ydCB0cmFzaEljb24gZnJvbSBcIi4vdHJhc2guc3ZnXCI7XG5cbmV4cG9ydCB7IGFkZHRvRG8gfTtcbi8vIHNkZmdkZGdzZGdcbi8vIEFERCBERUxFVEUgSVRFTSBCVVRUT04gLSBEb25lXG4vLyBBREQgTUFSSyBDT01QTEVURSBCVVRUT04gLSBkb25lXG4vLyBDU1Ncbi8vIEFERCBQUklPUklUWS9OT1RFUyBPVEhFUiBGSUVMRFMgLSBkb25lXG4vLyBDSEFOR0UgVkFMVUVTIE9OICBUTyBET1MtIGRvbmVcbi8vIENMRUFOIFVQL0NPTU1FTlRcbi8vIGZvcm0gdmFsaWRhdGlvblxuLy8gY2hhbmdlIGhlYWRpbmdcbi8vIGRlbGV0ZSBQcm9qZWN0c1xuLy8gZm9ybSBzdHlsaW5nXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXJcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbmNvbnN0IHRvRG9BcnIgPSBbXTtcblxuY2xhc3MgbGlzdEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIG5vdGVzLCBjb21wbGV0ZSkge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPYmplY3QoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoICE9IDApIHtcbiAgICBjb25zdCBwcm9qZWN0T2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RPYmopO1xuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdE9iaikpIHtcbiAgICAgIGlmIChrZXlbMF0gIT0gXCJEZWZhdWx0XCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGl0bGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3R0aXRsZUJhclwiKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIGtleVswXSk7XG4gICAgICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluYWN0aXZlXCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0ga2V5WzBdO1xuICAgICAgICB0aXRsZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhrZXlbMF0pO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBzd2l0Y2hQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGVmYXVsdFwiKTtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBzd2l0Y2hQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIChwcm9qZWN0T2JqLmxlbmd0aClcbiAgICByZXR1cm4gcHJvamVjdE9iajtcbiAgfVxuICBjb25zdCBwcm9qZWN0T2JqID0ge1xuICAgIERlZmF1bHQ6IHRvRG9BcnIsXG4gIH07XG4gIGNvbnNvbGUubG9nKFwiZW1wdHlcIik7XG4gIGNvbnNvbGUubG9nKHByb2plY3RPYmopO1xuICByZXR1cm4gcHJvamVjdE9iajtcbn1cblxuZnVuY3Rpb24gbGlzdEl0ZW1zKCkge1xuICBjb25zdCBhbGxMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3RcIik7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsTGlzdEl0ZW1zLmxlbmd0aDsgaysrKSB7XG4gICAgYWxsTGlzdEl0ZW1zW2tdLnJlbW92ZSgpO1xuICB9XG4gIE9iamVjdC5lbnRyaWVzKHByb2plY3RPYmopLmZvckVhY2goKFssIHZhbHVlXSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtpXTtcbiAgICAgIGNvbnN0IHsgcHJvamVjdCB9ID0gaXRlbTtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdCk7XG4gICAgICBpZiAocHJvamVjdE5hbWUgIT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2lkZWJhckl0ZW0uaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcbiAgICAgIHNpZGViYXJJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdFwiKTtcbiAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHNpZGViYXJJdGVtKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHlDb2xvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3RDb2xvclwiKTtcbiAgICAgIHByaW9yaXR5Q29sb3Iuc2V0QXR0cmlidXRlKFwiaWRcIiwgaXRlbS5wcmlvcml0eSk7XG4gICAgICBzaWRlYmFySXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eUNvbG9yKTtcbiAgICB9fVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ291bnRlcigpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggIT0gMCkge1xuICAgIGNvbnN0IGNvdW50ZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRlclwiKSk7XG4gICAgY29uc29sZS5sb2coXCJjb3VudGVyIGZvdW5kXCIpO1xuICAgIGNvbnNvbGUubG9nKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9XG4gIGNvbnN0IGNvdW50ZXIgPSAwO1xuICByZXR1cm4gY291bnRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGluZygpIHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG4gIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHdlbGNvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWxjb21lXCIpO1xuICB3ZWxjb21lLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byB5b3VyIFByb2plY3RzXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgaGVhZGluZy5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgY29uc3QgZm9ybVNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybVNwYWNlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybVNwYWNlXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVNwYWNlKTtcbiAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdQcm9qZWN0QnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ3JlYXRlIE5ldyBQcm9qZWN0XCI7XG4gIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU5ld1Byb2plY3QpO1xuICBmb3JtU3BhY2UuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbik7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVG9kb1wiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgbmV3IEl0ZW1cIjtcbiAgZm9ybVNwYWNlLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlRm9ybSk7XG5cbiAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNhdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzYXZlQnV0dG9uXCIpO1xuICBzYXZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBzYXZlQnV0dG9uLmlubmVyVGV4dCA9IFwiU2F2ZSBXb3JrXCI7XG4gIGZvcm1TcGFjZS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVdvcmspO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZUJ1dHRvblwiKTtcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGUgV29ya1wiO1xuICBmb3JtU3BhY2UuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhck91dCk7XG4gIC8vIGNvbnN0IHByYW5jaW5nUG9ueSA9IG5ldyBJbWFnZSgpO1xuICAvLyBwcmFuY2luZ1Bvbnkuc3JjID0gcHJhbmNpbmdQb255MjtcbiAgLy8gcHJhbmNpbmdQb255LmlkPVwicG9ueUxvZ29cIjtcbiAgLy8gaGVhZGluZy5hcHBlbmRDaGlsZChwcmFuY2luZ1BvbnkpO1xufVxuY3JlYXRlSGVhZGluZygpO1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0U3BhY2VcIik7XG4gIGRlZmF1bHRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdFwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0KTtcblxuICBjb25zdCBwcm9qZWN0dGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0dGl0bGVCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0dGl0bGVCYXJcIik7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdHMuaW5uZXJUZXh0ID0gXCJQcm9qZWN0c1wiO1xuICBwcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RGaWVsZFwiKTtcbiAgcHJvamVjdHRpdGxlQmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IFwiRGVmYXVsdCBQcm9qZWN0XCI7XG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiRGVmYXVsdFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3R0aXRsZUJhcik7XG4gIHByb2plY3R0aXRsZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBjb25zdCBjYXJkU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkU3BhY2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXNwbGF5XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFNwYWNlKTtcbn1cblxuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbmxldCBjb3VudGVyID0gY3JlYXRlQ291bnRlcigpO1xuY29uc3QgcHJvamVjdE9iaiA9IGNyZWF0ZVByb2plY3RPYmplY3QoKTtcbmFkZENhcmRzKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IGZvcm1TcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVNwYWNlXCIpO1xuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0QnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVOZXdQcm9qZWN0KTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBcIkhpZGVcIjtcbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVByb2plY3RGb3JtKTtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Byb2plY3RGb3JtXCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm1cIik7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFwiKTtcbiAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlByb2plY3QgVGl0bGVcIjtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0VGl0bGVcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbVwiKTtcbiAgdGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFN1Ym1pdFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICBmb3JtU3BhY2UuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZG5ld1Byb2plY3QpO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50UHJvamVjdCgpIHtcbiAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICByZXR1cm4gY3VycmVudDtcbn1cblxuZnVuY3Rpb24gc3dpdGNoUHJvamVjdChlbGVtKSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgcHJvamVjdC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcbiAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluYWN0aXZlXCIpO1xuICBlbGVtLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5hY3RpdmVcIik7XG4gIGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmVcIik7XG4gIGFkZENhcmRzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZG5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IHRpdGxlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0dGl0bGVCYXJcIik7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcbiAgLy8gY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcbiAgZGVmYXVsdFByb2plY3QucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmVcIik7XG4gIGRlZmF1bHRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5hY3RpdmVcIik7XG4gIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlXCIpLnZhbHVlO1xuICBjb25zdCBuZXdBcnIgPSBbXTtcbiAgcHJvamVjdE9ialtuZXdQcm9qZWN0VGl0bGVdID0gbmV3QXJyO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0T2JqKTtcbiAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBuZXdQcm9qZWN0VGl0bGUpO1xuICBuZXdQcm9qZWN0LmlubmVyVGV4dCA9IG5ld1Byb2plY3RUaXRsZTtcbiAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gIGRlZmF1bHRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3dpdGNoUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG4gIH0pO1xuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3dpdGNoUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgfSk7XG4gIC8vIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjdXJyZW50UHJvamVjdChuZXdQcm9qZWN0VGl0bGUpKTtcbiAgLy8gbmV3UHJvamVjdC5vbmNsaWNrID0gY3VycmVudFByb2plY3QoKTtcbiAgaGlkZVByb2plY3RGb3JtKCk7XG4gIC8vIHJldHVybiBuZXdwcm9qZWN0T2JqO1xufVxuXG5mdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKTtcbiAgbmV3UHJvamVjdEZvcm0ucmVtb3ZlKCk7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdXR0b25cIik7XG4gIG5ld1Byb2plY3RCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVQcm9qZWN0Rm9ybSk7XG4gIG5ld1Byb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJDcmVhdGUgTmV3IFByb2plY3RcIjtcbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmV3UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZENhcmRzKCkge1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0T2JqKTtcbiAgbGlzdEl0ZW1zKCk7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlcIik7XG4gIGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdCgpO1xuICBjb25zdCB0aXRsZSA9IHByb2plY3QuYXR0cmlidXRlcy5pZC52YWx1ZTtcbiAgY29uc3QgY3VycmVudFByb2plY3RBcnJheSA9IHByb2plY3RPYmpbdGl0bGVdO1xuICBjb25zdCBhbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKTtcbiAgaWYgKGFsbENhcmRzLmxlbmd0aCAhPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWxsQ2FyZHNbaV0ucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjdXJyZW50UHJvamVjdEFycmF5W2ldLnByb2plY3QgPT0gdGl0bGUpIHtcbiAgICAgIGRpc3BsYXlDYXJkKGN1cnJlbnRQcm9qZWN0QXJyYXlbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlDYXJkKGFycikge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkXCIpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvRG9fJHthcnIubnVtYmVyfWApO1xuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQmFyXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQm9keVwiKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcbiAgICBjb25zdCBwcmlvcml0eUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eUNvbG9yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJpb3JpdHlDb2xvclwiKTtcbiAgICBwcmlvcml0eUNvbG9yLnNldEF0dHJpYnV0ZShcImlkXCIsIGFyci5wcmlvcml0eSk7XG4gICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHByaW9yaXR5Q29sb3IpO1xuXG4gICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBjb21wbGV0ZV8ke2Fyci5udW1iZXJ9YCk7XG4gICAgY29tcGxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiQ29tcGxldGVcIjtcbiAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuXG4gICAgY29uc3QgdW5jb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdW5jb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdW5jb21wbGV0ZV8ke2Fyci5udW1iZXJ9YCk7XG4gICAgdW5jb21wbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRCdXR0b25cIik7XG4gICAgdW5jb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIk5vdCBGaW5pc2hlZFwiO1xuICAgXG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBlZGl0XyR7YXJyLm51bWJlcn1gKTtcbiAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZEJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmlubmVyVGV4dCA9IFwiTW9kaWZ5XCI7XG4gICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGV4cGFuZF8ke2Fyci5udW1iZXJ9YCk7XG4gICAgZXhwYW5kQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZEJ1dHRvblwiKTtcbiAgICBleHBhbmRCdXR0b24uaW5uZXJUZXh0ID0gXCJFeHBhbmRcIjtcbiAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcblxuICAgIGNvbnN0IHRyYXNoQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgdHJhc2hCdXR0b24uc3JjID0gdHJhc2hJY29uO1xuICAgIHRyYXNoQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWxldGVfJHthcnIubnVtYmVyfWApO1xuICAgIHRyYXNoQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidHJhc2hCdXR0b25cIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUZpZWxkXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiVGl0bGU6XCI7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVWYWx1ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlVmFsdWVcIik7XG4gICAgdGl0bGVWYWx1ZS5pbm5lclRleHQgPSBhcnIudGl0bGU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRhdGVGaWVsZFwiKTtcbiAgICBkYXRlLmlubmVyVGV4dCA9IFwiRHVlLURhdGU6XCI7XG4gICAgY29uc3QgZGF0ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlVmFsdWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkYXRlVmFsdWVcIik7XG4gICAgZGF0ZVZhbHVlLmlubmVyVGV4dCA9IGFyci5kdWVEYXRlO1xuICAgIC8vIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjYXJkQm9keS5hcHBlbmRDaGlsZCh0aXRsZVZhbHVlKTtcbiAgICAvLyBjYXJkQm9keS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChkYXRlVmFsdWUpO1xuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRyYXNoQnV0dG9uKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlc2NyaXB0aW9uRmllbGRcIik7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgICBjb25zdCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjcmlwdGlvblZhbHVlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVzY3JpcHRpb25WYWx1ZVwiKTtcbiAgICBkZXNjcmlwdGlvblZhbHVlLmlubmVyVGV4dCA9IGFyci5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90ZXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub3Rlc0ZpZWxkXCIpO1xuICAgIG5vdGVzLmlubmVyVGV4dCA9IFwiTm90ZXM6XCI7XG4gICAgY29uc3Qgbm90ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3RlVmFsdWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub3Rlc1ZhbHVlXCIpO1xuICAgIG5vdGVWYWx1ZS5pbm5lclRleHQgPSBhcnIubm90ZXM7XG5cbiAgICBjb21wbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQ29tcGxldGVcIik7XG4gICAgICBhcnIuY29tcGxldGUgPSB0cnVlO1xuICAgICAgcHJpb3JpdHlDb2xvci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbXBsZXRlXCIpO1xuICAgICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHVuY29tcGxldGVCdXR0b24pO1xuICAgICAgY2FyZFRpdGxlLnJlbW92ZUNoaWxkKGNvbXBsZXRlQnV0dG9uKTtcbiAgICBcbiAgICAgIHVuY29tcGxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQm9keVwiKTtcbiAgICAgICAgYXJyLmNvbXBsZXRlID0gXCJmYWxzZVwiO1xuICAgICAgICBwcmlvcml0eUNvbG9yLnNldEF0dHJpYnV0ZShcImlkXCIsIGFyci5wcmlvcml0eSk7XG4gICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG4gICAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZCh1bmNvbXBsZXRlQnV0dG9uKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGVkaXRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGFyci5wcm9qZWN0ID0gXCJkZWxldGVkXCI7XG4gICAgICBjYXJkVGl0bGUucmVtb3ZlQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICBjcmVhdGVGb3JtKCk7XG4gICAgfTtcblxuICAgIHRyYXNoQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBUby1Ebz9cIik7XG4gICAgICBpZiAodGV4dCA9PSB0cnVlKSB7XG4gICAgICAgIGFyci5wcm9qZWN0ID0gXCJkZWxldGVkXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyci5wcm9qZWN0KTtcbiAgICAgICAgYWRkQ2FyZHMoKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfTtcblxuICAgIGV4cGFuZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2V4cGFuZENhcmQnKTtcbiAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2V4cGFuZEJhcicpO1xuICAgICAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRCb2R5Jyk7XG4gICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblZhbHVlKTtcbiAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKG5vdGVWYWx1ZSk7XG4gICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoY29sbGFwc2VCdXR0b24pO1xuICAgICAgY2FyZFRpdGxlLnJlbW92ZUNoaWxkKGV4cGFuZEJ1dHRvbik7XG5cbiAgICAgIGNvbGxhcHNlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XG4gICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCYXInKTtcbiAgICAgICAgY2FyZEJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQm9keScpO1xuICAgICAgICBjYXJkQm9keS5yZW1vdmVDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGNhcmRCb2R5LnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uVmFsdWUpO1xuICAgICAgICBjYXJkQm9keS5yZW1vdmVDaGlsZChub3Rlcyk7XG4gICAgICAgIGNhcmRCb2R5LnJlbW92ZUNoaWxkKG5vdGVWYWx1ZSk7XG4gICAgICAgIGNhcmRUaXRsZS5yZW1vdmVDaGlsZChjb2xsYXBzZUJ1dHRvbik7XG4gICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChleHBhbmRCdXR0b24pO1xuICAgICAgfTtcbiAgICB9O1xuICAgIGxldCBjb2xsYXBzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29sbGFwc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNvbGxhcHNlXyR7YXJyLm51bWJlcn1gKTtcbiAgICBjb2xsYXBzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRCdXR0b25cIik7XG4gICAgY29sbGFwc2VCdXR0b24uaW5uZXJUZXh0ID0gXCJIaWRlXCI7XG4gICAgY2FyZERyYWcoY2FyZCk7XG4gIH1cblxuICBjb25zdCBhbGxJbmFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5hY3RpdmVcIik7XG4gIC8vIGNvbnNvbGUubG9nKGFsbEluYWN0aXZlKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxJbmFjdGl2ZS5sZW5ndGg7IGsrKykge1xuICAgIC8vIGNvbnNvbGUubG9nKGFsbEluYWN0aXZlW2tdKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBhbGxJbmFjdGl2ZVtrXS5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IHByb2plY3RPYmpbcHJvamVjdFRpdGxlXTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHByb2plY3RBcnJheS5sZW5ndGg7IHIrKykge1xuICAgICAgaWYgKHByb2plY3RBcnJheVtyXS5wcm9qZWN0ID09IHByb2plY3QuYXR0cmlidXRlcy5pZC52YWx1ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlbcl0pO1xuICAgICAgICBkaXNwbGF5Q2FyZChwcm9qZWN0QXJyYXlbcl0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGRzIFRvIERvIGl0ZW1zIGZyb20gRm9ybSBpbnRvIExpc3QgSXRlbSBPYmplY3RzLCB0aGVuIGFkZHMgdGhlbSB0byBhcHByb3ByaWF0ZSBQcm9qZWN0IEFycmF5IGFmdGVyIGZvcm0gU3VibWl0IEJ1dHRvbiBpcyBjbGlja2VkXG5mdW5jdGlvbiBhZGR0b0RvKCkge1xuICBjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3QoKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmF0dHJpYnV0ZXMuaWQudmFsdWU7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlO1xuICBjb25zdCByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl0nKTtcbiAgbGV0IHNlbGVjdGVkU2l6ZTtcbiAgZm9yIChjb25zdCByYWRpb0J1dHRvbiBvZiByYWRpb0J1dHRvbnMpIHtcbiAgICBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgc2VsZWN0ZWRTaXplID0gcmFkaW9CdXR0b24udmFsdWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpLnZhbHVlO1xuICBjb25zdCBjb21wbGV0ZSA9IGZhbHNlO1xuICBjb25zdCBuZXdJdGVtID0gbmV3IGxpc3RJdGVtKFxuICAgIGNvdW50ZXIsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBzZWxlY3RlZFNpemUsXG4gICAgcHJvamVjdE5hbWUsXG4gICAgbm90ZXMsXG4gICAgY29tcGxldGUsXG4gICk7XG4gIHByb2plY3RPYmpbcHJvamVjdE5hbWVdLnB1c2gobmV3SXRlbSk7XG4gIHJlbW92ZUZvcm0oKTtcbiAgY291bnRlcisrO1xuICBhZGRDYXJkcygpO1xufVxuXG5mdW5jdGlvbiBzYXZlV29yaygpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0T2JqKSk7XG4gIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgSlNPTi5zdHJpbmdpZnkoY291bnRlcikpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICBjb25zdCBmb3JtU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1TcGFjZVwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgLy8gY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb250ZW50LnJlbW92ZSgpO1xuICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb2RvXCIpO1xuICBhZGRCdXR0b24ucmVtb3ZlKCk7XG4gIGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRvZG9cIik7XG4gIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkIG5ldyBJdGVtXCI7XG4gIGZvcm1TcGFjZS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUZvcm0pO1xuICAvLyBjdXJyZW50UHJvamVjdC5yZW1vdmVDaGlsZChjb250ZW50KTtcbn1cblxuZnVuY3Rpb24gY2FyZERyYWcoY2FyZCkge1xuICAvLyBsZXQgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XG4gIC8vIGxldCBjYXJkSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpXG4gIC8vIGxldCBjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KCk7XG4gIGNhcmQub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkQnV0dG9uXCIpO1xuICAgIGNvbnN0IHRyYXNoQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2hCdXR0b25cIik7XG4gICAgY29uc3QgZWxlbWVudEJlbG93ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChcbiAgICAgIGV2ZW50LmNsaWVudFgsXG4gICAgICBldmVudC5jbGllbnRZXG4gICAgKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChlbGVtZW50QmVsb3cgPT0gYnV0dG9uc1tpXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudEJlbG93ID09IHRyYXNoQnV0dG9uc1tpXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpZnRYID0gZXZlbnQuY2xpZW50WCAtIGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICBjb25zdCBzaGlmdFkgPSBldmVudC5jbGllbnRZIC0gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICBjYXJkLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGNhcmQuc3R5bGUuekluZGV4ID0gMTAwMDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcblxuICAgIG1vdmVDYXJkKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG5cbiAgICAvLyBtb3ZlcyBDYXJkIGF0IHRoZSBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIHRoZSBwYWdlLCB0YWtpbmcgYWNjb3VudCBmb3IgdGhlIHNoaWZ0cyBpbml0aWFsbHkgd2hlbiBjbGlja2luZyBvbiBjYXJkXG4gICAgZnVuY3Rpb24gbW92ZUNhcmQocGFnZVgsIHBhZ2VZKSB7XG4gICAgICBjYXJkLnN0eWxlLmxlZnQgPSBgJHtwYWdlWCAtIHNoaWZ0WH1weGA7XG4gICAgICBjYXJkLnN0eWxlLnRvcCA9IGAke3BhZ2VZIC0gc2hpZnRZfXB4YDtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudERyb3BwYWJsZSA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgbW92ZUNhcmQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblxuICAgICAgY2FyZC5oaWRkZW4gPSB0cnVlO1xuICAgICAgY29uc3QgZWxlbUJlbG93ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgIGNhcmQuaGlkZGVuID0gZmFsc2U7XG4gICAgICBpZiAoIWVsZW1CZWxvdykgcmV0dXJuO1xuICAgICAgY29uc3QgZHJvcHBhYmxlQmVsb3cgPSBlbGVtQmVsb3cuY2xvc2VzdChcIi5pbmFjdGl2ZVwiKTtcbiAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlICE9IGRyb3BwYWJsZUJlbG93KSB7XG4gICAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlKSB7XG4gICAgICAgICAgbGVhdmVEcm9wcGFibGUoY3VycmVudERyb3BwYWJsZSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudERyb3BwYWJsZSA9IGRyb3BwYWJsZUJlbG93O1xuICAgICAgICBpZiAoY3VycmVudERyb3BwYWJsZSkge1xuICAgICAgICAgIGNhcmQub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgICAgICAvLyBjdXJyZW50RHJvcHBhYmxlLnN0eWxlLmJhY2tncm91bmQgPSAnI2YzZjVmOSc7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGN1cnJlbnREcm9wcGFibGUuYXR0cmlidXRlcy5pZC52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZElEID0gY2FyZC5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbnVtYiA9IGNhcmRJRC5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIik7XG4gICAgICAgICAgICBjb25zdCBuZXdOdW0gPSBwYXJzZUludChudW1iLCAxMCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHByb2plY3RPYmopLmZvckVhY2goKFssIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlW251bWJlcl0pO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlW2ldLm51bWJlciA9PSBuZXdOdW0pIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvamVjdCA9IG5ld1Byb2plY3ROYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgICAgICBhZGRDYXJkcygpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyAgZW50ZXJEcm9wcGFibGUoY3VycmVudERyb3BwYWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcblxuICAgIGNhcmQub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgICBjYXJkLnJlbW92ZSgpO1xuICAgICAgYWRkQ2FyZHMoKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIGZ1bmN0aW9uIGVudGVyRHJvcHBhYmxlKGVsZW0pIHtcblxuICAvLyAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3BpbmsnO1xuICAvLyAgICAgfVxuXG4gIGZ1bmN0aW9uIGxlYXZlRHJvcHBhYmxlKGVsZW0pIHtcbiAgICBjb25zb2xlLmxvZyhlbGVtKTtcbiAgICAvLyBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgLy8gZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsdWUnO1xuICB9XG5cbiAgY2FyZC5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59XG5cbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5cbmZ1bmN0aW9uIGNsZWFyT3V0KCkge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==