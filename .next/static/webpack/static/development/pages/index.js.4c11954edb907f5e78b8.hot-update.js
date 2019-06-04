webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loading */ "./pages/loading.js");
/* harmony import */ var _dbActions_checkAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dbActions/checkAuth */ "./dbActions/checkAuth.js");





var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\pages\\index.js";










var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      Object(_dbActions_checkAuth__WEBPACK_IMPORTED_MODULE_12__["default"])(this.props.dispatch);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);

      if (!this.props.authChecked || !this.props.isLoggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        });
      }

      var atNum = this.props.assignedTasks.length;
      var trNum = this.props.taskReports.length;
      var alert = '';

      if (atNum > 0 || trNum > 0) {
        alert = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
          variant: "warning",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          class: "fas fa-bell",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), "\u05D4\u05D9\u05D9 ", this.props.userData.firstName, ", \u05D9\u05E9 \u05DC\u05DA ", atNum > 0 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/assigned-tasks",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, atNum), " \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD")) : '', atNum > 0 && trNum > 0 ? 'ועוד ' : '', trNum > 0 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/task-reports",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, trNum), " \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05D4\u05DE\u05DE\u05EA\u05D9\u05E0\u05D9\u05DD \u05DC\u05DE\u05E9\u05D5\u05D1")) : '', ".");
      }

      if (!this.props.userData.admin) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
          page: "index",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "wrapper d-flex justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
          className: "m-2",
          style: {
            paddingBottom: '3rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, alert, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mb-4 mt-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: "/static/assign.png",
          width: "60",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }), "\u05E9\u05D9\u05D1\u05D5\u05E5 \u05DC\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TableBlock_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          isSelectable: true,
          data: this.props.unassignedTasks,
          page: "index",
          type: "tasks",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
          page: "index",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "wrapper d-flex justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
          className: "m-2",
          style: {
            paddingBottom: '3rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, alert, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mb-4 mt-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: "/static/dashboard.png",
          width: "60",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }), "\u05DC\u05D5\u05D7 \u05D1\u05E7\u05E8\u05D4"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["CardColumns"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          bg: "primary",
          text: "white",
          style: {
            width: '18rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "\u05D4\u05D9\u05D5\u05DD \u05D5\u05DE\u05D7\u05E8"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Text, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            textAlign: 'center',
            fontSize: '2rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "5"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            textAlign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05DC\u05D0 \u05E9\u05D5\u05D1\u05E6\u05D5"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mt-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "far fa-envelope",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }), " 43 \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "far fa-envelope",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }), " 19 \u05DE\u05E9\u05D5\u05D1\u05D9\u05DD \u05DE\u05D5\u05DC\u05D0\u05D5")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          bg: "primary",
          text: "white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "\u05D4\u05D9\u05D5\u05DD \u05D5\u05DE\u05D7\u05E8"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Subtitle, {
          className: "mb-2 text-muted",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, "\u05D4\u05D9\u05D5\u05DD \u05D5\u05DE\u05D7\u05E8"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            textAlign: 'center',
            fontSize: '2rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, "5"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05DC\u05D0 \u05E9\u05D5\u05D1\u05E6\u05D5"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Subtitle, {
          className: "mb-2 text-muted mt-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, "\u05D4\u05E9\u05D1\u05D5\u05E2"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Text, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "67 \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05D1\u05D5\u05E6\u05E2\u05D5 \u05D1\u05D0\u05D6\u05D5\u05E8 ", this.props.userData.region), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            textAlign: 'center',
            fontSize: '2rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "21"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "\u05DE\u05E9\u05D5\u05D1\u05D9\u05DD \u05E2\u05D5\u05D3 \u05DC\u05D0 \u05DE\u05D5\u05DC\u05D0\u05D5")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "\u05E1\u05D8\u05D8\u05D5\u05E1 \u05DE\u05EA\u05E0\u05D3\u05D1\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Text, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mt-4",
          style: {
            textAlign: 'center',
            fontSize: '2rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "143"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "\u05DE\u05EA\u05E0\u05D3\u05D1\u05D9\u05DD \u05E4\u05E2\u05D9\u05DC\u05D9\u05DD \u05D4\u05E9\u05D1\u05D5\u05E2"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mt-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          class: "far fa-envelope",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }), " 324 \u05DE\u05EA\u05E0\u05D3\u05D1\u05D9\u05DD \u05E8\u05E9\u05D5\u05DE\u05D9\u05DD \u05D1\u05D0\u05D6\u05D5\u05E8 ", this.props.userData.region), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mt-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          class: "far fa-envelope",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }), " 2 \u05D0\u05D9\u05DE\u05D5\u05EA\u05D9 \u05D3\u05D5\u05D0\"\u05DC \u05DE\u05DE\u05EA\u05D9\u05E0\u05D9\u05DD")))))))));
      }
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.4c11954edb907f5e78b8.hot-update.js.map