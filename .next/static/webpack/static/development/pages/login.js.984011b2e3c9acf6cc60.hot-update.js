webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");







var _jsxFileName = "C:\\Users\\mwilchek\\Documents\\GitHub\\leketgo\\components\\Header.js";






var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "logout", function () {
      _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_11__["default"].auth().signOut().then(function () {
        _this.props.dispatch({
          type: 'LOGOUT'
        });
      }).catch(function (err) {
        console.log("error on logout.", err);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      if (!this.props.userData.isManager) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
          charset: "utf-8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
          rel: "stylesheet",
          href: "https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css",
          integrity: "sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If",
          crossorigin: "anonymous",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
          integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
          crossorigin: "anonymous",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "LeketGo")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("nav", {
          class: "navbar navbar-expand-lg navbar-dark bg-dark position-sticky sticky-top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          class: "navbar-brand",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, "LeketGo")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          class: "navbar-toggler",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          class: "navbar-toggler-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          class: "collapse navbar-collapse",
          id: "navbarSupportedContent",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
          class: "navbar-nav mr-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          class: "nav-item active",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          class: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "\u05E9\u05D9\u05D1\u05D5\u05E5 \u05DC\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          class: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/assigned-tasks",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          class: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          class: "badge badge-secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "2")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          class: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/task-reports",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          class: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "\u05DE\u05D9\u05DC\u05D5\u05D9 \u05DE\u05E9\u05D5\u05D1 ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          class: "badge badge-secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "2"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
          class: "navbar-nav",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          class: "nav-item dropdown",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          class: "nav-link dropdown-toggle",
          href: "#",
          id: "navbarDropdown",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, this.props.userData.firstName, " ", this.props.userData.lastName), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          class: "dropdown-menu dropdown-menu-right",
          "aria-labelledby": "navbarDropdown",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/personal-information",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          class: "dropdown-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          class: "dropdown-divider",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/login",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          class: "dropdown-item",
          onClick: this.logout,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, "\u05D4\u05EA\u05E0\u05EA\u05E7\u05D5\u05EA")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          class: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          class: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          class: "fas fa-map-marker-alt",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }), " ", this.props.userData.region))))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "\u05EA\u05E4\u05E8\u05D9\u05D8 \u05DE\u05E0\u05D4\u05DC");
      }
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(function (state) {
  return state;
})(Header));

/***/ })

})
//# sourceMappingURL=login.js.984011b2e3c9acf6cc60.hot-update.js.map