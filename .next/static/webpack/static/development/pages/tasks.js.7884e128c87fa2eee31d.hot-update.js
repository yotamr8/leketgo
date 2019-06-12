webpackHotUpdate("static\\development\\pages\\tasks.js",{

/***/ "./pages/tasks.js":
/*!************************!*\
  !*** ./pages/tasks.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_TableBlock_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TableBlock.js */ "./components/TableBlock.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _dbActions_checkAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dbActions/checkAuth */ "./dbActions/checkAuth.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loading */ "./pages/loading.js");





var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\pages\\tasks.js";








var Users =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Users, _Component);

  function Users() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Users);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Users).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Users, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      Object(_dbActions_checkAuth__WEBPACK_IMPORTED_MODULE_9__["default"])(this.props.dispatch);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.authChecked || !this.props.isLoggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "wrapper d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "m-2",
        style: {
          paddingBottom: '3rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mb-4 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/tasks.png",
        width: "60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TableBlock_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isSearchable: true,
        data: this.props.regionalTasks,
        page: "adminTasks",
        type: "tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })))));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(Users));

/***/ })

})
//# sourceMappingURL=tasks.js.7884e128c87fa2eee31d.hot-update.js.map