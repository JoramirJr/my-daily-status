webpackHotUpdate("static/development/pages/create-status.js",{

/***/ "./pages/create-status.js":
/*!********************************!*\
  !*** ./pages/create-status.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "/home/joramirjr/Documentos/my-daily-status/pages/create-status.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var CreateStatus = function CreateStatus() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    status: 'bem',
    coords: {
      lat: null,
      "long": null
    }
  }),
      dados = _useState[0],
      setDados = _useState[1];

  var getMyLocation = function getMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setDados(function (old) {
          return _objectSpread({}, old, {
            coords: {
              lat: position.coords.latitude,
              "long": position.coords.longitude
            }
          });
        });
      });
    }
  };

  var onStatusChange = function onStatusChange(evt) {
    console.log(evt.target);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Create Status"), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "radio",
    name: "status",
    value: "bem",
    onClick: onStatusChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 34
    }
  }), "Estou bem e sem sintomos"), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "radio",
    name: "status",
    value: "gripe",
    onClick: onStatusChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 34
    }
  }), "Estou com sintomas de gripe / resfriado"), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "radio",
    name: "status",
    value: "covid",
    onClick: onStatusChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 34
    }
  }), "Estoucom sintmas da COVID"), "Sua posi\xE7\xE3o atual: ", JSON.stringify(dados), __jsx("button", {
    onClick: getMyLocation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Get My Location"));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (CreateStatus);

/***/ })

})
//# sourceMappingURL=create-status.js.e235d9dd9cacd4021818.hot-update.js.map