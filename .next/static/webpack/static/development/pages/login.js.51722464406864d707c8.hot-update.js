webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _statics_styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../statics/styles.scss */ "./statics/styles.scss");
/* harmony import */ var _statics_styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_statics_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Table_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Table.js */ "./components/Table.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "C:\\Users\\mwilchek\\Documents\\GitHub\\leketgo\\pages\\login.js";









var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      email: '',
      password: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.id, e.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (e) {
      _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_12__["default"].auth().signInWithEmailAndPassword(_this.state.email, _this.state.password).then(function (user) {
        _this.props.dispatch({
          type: 'LOGIN',
          user: user
        });
      }).catch(function (err) {
        _this.props.dispatch({
          type: 'LOGIN_ERR',
          msg: err.message
        });
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      if (this.props.isLoggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
          charset: "utf-8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
          rel: "stylesheet",
          href: "https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css",
          integrity: "sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If",
          crossorigin: "anonymous",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
          integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
          crossorigin: "anonymous",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "LeketGo")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
          class: "m-2",
          style: {
            paddingBottom: '3rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          class: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
          class: "card-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          class: "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
          class: "card-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC\u05DC\u05E7\u05D8\u05BE\u05D2\u05D5!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          class: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
          for: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          type: "email",
          class: "form-control",
          id: "email",
          "aria-describedby": "emailHelp",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          class: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
          for: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "\u05E1\u05D9\u05E1\u05DE\u05D4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          type: "password",
          class: "form-control",
          id: "password",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          class: "custom-control custom-checkbox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          type: "checkbox",
          class: "custom-control-input",
          id: "customCheck3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
          class: "custom-control-label",
          for: "customCheck3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "\u05D6\u05DB\u05E8\u05D5\u05E0\u05D9")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "\u05E9\u05DB\u05D7\u05EA\u05D9 \u05E1\u05D9\u05E1\u05DE\u05D4")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          role: "button",
          onClick: this.handleSubmit,
          class: "mt-2 btn btn-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, "\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            color: 'red'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, this.props.loginErr ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, this.props.loginErr) : null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
          src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
          integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
          crossOrigin: "anonymous",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
          src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",
          integrity: "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
          crossOrigin: "anonymous",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
          src: "https://cdn.rtlcss.com/bootstrap/v4.2.1/js/bootstrap.min.js",
          integrity: "sha384-a9xOd0rz8w0J8zqj1qJic7GPFfyMfoiuDjC9rqXlVOcGO/dmRqzMn34gZYDTel8k",
          crossOrigin: "anonymous",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }));
      }
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function (state) {
  return state;
})(Login));

/***/ })

})
//# sourceMappingURL=login.js.51722464406864d707c8.hot-update.js.map