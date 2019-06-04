module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Entry.js":
/*!*****************************!*\
  !*** ./components/Entry.js ***!
  \*****************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");






var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\components\\Entry.js";





var Entry =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Entry, _React$Component);

  function Entry(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Entry);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Entry).call(this, props));
    _this.state = {
      isEditable: false
    };
    _this.toggleSelection = _this.toggleSelection.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.toggleEditable = _this.toggleEditable.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Entry, [{
    key: "getDataValues",
    value: function getDataValues(entry) {
      switch (this.props.type) {
        case 'tasks':
          var options = {
            weekday: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          };
          var date = entry.timestamp.toDate();
          return {
            date: date.toLocaleDateString('he-IL', options),
            time: date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2),
            city: entry.city,
            name: entry.name,
            street: entry.address,
            fullAddress: entry.address + ', ' + entry.city,
            actions: 'ACTIONS',
            contactName: entry['contact name'],
            contactNumber: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
              style: {
                whiteSpace: 'nowrap'
              },
              href: 'tel: ' + entry['contact number'],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            }, entry['contact number']),
            checkBox: this.props.isSelected ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Check, {
              custom: true,
              checked: true,
              label: "",
              type: "checkbox",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Check, {
              custom: true,
              label: "",
              type: "checkbox",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            })
          };

        case 'users':
          return {
            uid: entry.id,
            firstName: entry.firstName,
            lastName: entry.lastName,
            region: entry.region,
            email: entry.email,
            phone: entry.phone,
            tz: entry.tz
          };

        default:
          break;
      }
    }
  }, {
    key: "toggleSelection",
    value: function toggleSelection() {
      if (this.props.isSelectable) {
        this.props.selectCallback(this.props.entry, !this.props.isSelected);
      }
    }
  }, {
    key: "toggleEditable",
    value: function toggleEditable() {
      this.setState({
        isEditable: !this.state.isEditable
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var buttons = [];

      switch (this.props.page) {
        case 'assignedTasks':
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'TASK_NOTES',
                entries: _this2.props.entry
              });
            },
            color: 'outline-primary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              class: "far fa-sticky-note",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            }), "\u05D4\u05E2\u05E8\u05D5\u05EA")
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'TASK_DONE',
                entries: _this2.props.entry
              });
            },
            color: 'outline-primary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              class: "far fa-calendar-check",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              },
              __self: this
            }), "\u05D1\u05D5\u05E6\u05E2")
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'TASK_CANCEL',
                entries: _this2.props.entry
              });
            },
            color: 'outline-secondary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              class: "far fa-calendar-times",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              },
              __self: this
            }), "\u05D4\u05E1\u05E8\u05D4")
          }];
          break;

        case 'taskReports':
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'REPORT_FILL',
                entries: _this2.props.entry
              });
            },
            color: 'outline-primary',
            text: 'דיווח'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'REPORT_UNDONE'
              });
            },
            color: 'outline-secondary',
            text: 'לא בוצע'
          }];
          break;

        case 'adminUsers':
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'EDIT_USER',
                entries: _this2.props.entry
              });
            },
            color: 'outline-primary',
            text: 'עריכה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'RESET_PASSWORD',
                entries: _this2.props.entry
              });
            },
            color: 'outline-secondary',
            text: 'איפוס סיסמה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'RESET_PASSWORD',
                entries: _this2.props.entry
              });
            },
            color: 'outline-secondary',
            text: 'מחיקה'
          }];
          break;

        case 'adminTasks':
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'EDIT_USER',
                entries: _this2.props.entry
              });
            },
            color: 'outline-primary',
            text: 'עריכה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'RESET_PASSWORD',
                entries: _this2.props.entry
              });
            },
            color: 'outline-secondary',
            text: 'סטטוס'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'RESET_PASSWORD',
                entries: _this2.props.entry
              });
            },
            color: 'outline-secondary',
            text: 'מחיקה'
          }];
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: (this.props.isSelected ? 'table-primary' : '') + (this.props.isSelectable ? ' entry-selectable' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, this.props.tableColumns.map(function (column) {
        if (column != 'actions') {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
            onClick: _this2.toggleSelection,
            key: column,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            },
            __self: this
          }, _this2.getDataValues(_this2.props.entry)[column]);
        } else {
          switch (_this2.props.page) {
            case 'assignedTasks':
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                key: column,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 146
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
                style: {
                  whiteSpace: 'nowrap'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 147
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
                width: "200",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 147
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Toggle, {
                variant: "secondary",
                id: "dropdown-basic",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 148
                },
                __self: this
              }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 151
                },
                __self: this
              }, buttons.map(function (button) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, {
                  key: button.text,
                  onClick: button.onClick,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                  },
                  __self: this
                }, button.text);
              })))));

            case 'adminUsers':
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                key: column,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 161
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
                style: {
                  whiteSpace: 'nowrap'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
                width: "200",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Toggle, {
                variant: "secondary",
                id: "dropdown-basic",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 163
                },
                __self: this
              }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166
                },
                __self: this
              }, buttons.map(function (button) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, {
                  key: button.text,
                  onClick: button.onClick,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                  },
                  __self: this
                }, button.text);
              })))));

            case 'adminTasks':
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                key: column,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 176
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
                style: {
                  whiteSpace: 'nowrap'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 177
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
                width: "200",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 177
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Toggle, {
                variant: "secondary",
                id: "dropdown-basic",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 178
                },
                __self: this
              }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 181
                },
                __self: this
              }, buttons.map(function (button) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, {
                  key: button.text,
                  onClick: button.onClick,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                  },
                  __self: this
                }, button.text);
              })))));

            default:
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                key: column,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 192
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 193
                },
                __self: this
              }, buttons.map(function (button) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                  key: button.text,
                  onClick: button.onClick,
                  variant: button.color,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                  },
                  __self: this
                }, button.text);
              })));
          }
        }
      }));
    }
  }]);

  return Entry;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(Entry));

/***/ }),

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_bootstrap_min_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/bootstrap.min.scss */ "./static/bootstrap.min.scss");
/* harmony import */ var _static_bootstrap_min_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_bootstrap_min_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_styles_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/styles.scss */ "./static/styles.scss");
/* harmony import */ var _static_styles_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_styles_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Logo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Logo.js */ "./components/Logo.js");







var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\components\\Header.js";










var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "logout", function () {
      _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_10__["default"].auth().signOut().then(function () {
        _this.props.dispatch({
          type: 'LOGOUT'
        });
      }).catch(function (err) {
        console.log("error on logout.", err);
      });
    });

    _this.state = {
      isUserDropdown: false
    };
    _this.toggleUserDropDown = _this.toggleUserDropDown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "toggleUserDropDown",
    value: function toggleUserDropDown() {
      this.setState({
        isUserDropdown: !this.state.isUserDropdown
      });
    }
  }, {
    key: "render",
    value: function render() {
      var pages;

      if (!this.props.userData.admin) {
        var atNum = this.props.assignedTasks.length;
        var trNum = this.props.taskReports.length;
        pages = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
          className: "mr-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          className: "navlink",
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "\u05E9\u05D9\u05D1\u05D5\u05E5 \u05DC\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/assigned-tasks",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD ", atNum > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Badge"], {
          variant: "secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, atNum) : '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/task-reports",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, "\u05DE\u05D9\u05DC\u05D5\u05D9 \u05DE\u05E9\u05D5\u05D1 ", trNum > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Badge"], {
          variant: "secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, trNum) : '')));
      } else {
        pages = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
          className: "mr-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "\u05DC\u05D5\u05D7 \u05D1\u05E7\u05E8\u05D4")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/users",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/tasks",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA")));
      }

      var navbar = '';

      if (!this.props.isLogin) {
        navbar = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"], {
          id: "top-nav",
          sticky: "top",
          bg: "light",
          variant: "light",
          expand: "lg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "navbar-brand",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Logo_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"].Toggle, {
          "aria-controls": "basic-navbar-nav",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"].Collapse, {
          id: "basic-navbar-nav",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, pages, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
          className: "mr-sm-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NavDropdown"], {
          alignRight: true,
          title: this.props.userData.firstName + ' ' + this.props.userData.lastName,
          id: "basic-nav-dropdown",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/personal-information",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "dropdown-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "far fa-user-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }), "\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NavDropdown"].Divider, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/login",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "dropdown-item",
          onClick: this.logout,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "fas fa-sign-out-alt",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }), "\u05D4\u05EA\u05E0\u05EA\u05E7\u05D5\u05EA"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ButtonToolbar"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["OverlayTrigger"], {
          key: "help",
          placement: "bottom",
          overlay: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], {
            id: "tooltip",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, "\u05E2\u05D6\u05E8\u05D4"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "fas fa-question-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        })))))));
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
        integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        charset: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u05DC\u05E7\u05D8\u05BEGO")), navbar);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return state;
})(Header));

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\components\\Logo.js";



var Logo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Logo, _React$Component);

  function Logo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Logo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Logo).call(this, props));
    _this.state = {
      color: '#4C7076'
    };
    _this.logoHover = _this.logoHover.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.logoNotHover = _this.logoNotHover.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Logo, [{
    key: "logoHover",
    value: function logoHover() {
      this.setState({
        color: '#2E4347'
      });
    }
  }, {
    key: "logoNotHover",
    value: function logoNotHover() {
      this.setState({
        color: '#4C7076'
      });
    }
  }, {
    key: "render",
    value: function render() {
      switch (this.props.use) {
        case 'login':
          return 'LOGO PLACEHOLDER';

        default:
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
            onMouseEnter: this.logoHover,
            onMouseLeave: this.logoNotHover,
            viewBox: "0 0 117.9 44.77",
            width: "117.9",
            height: "44.77",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            fill: this.state.color,
            d: "M117.78,3.49c-0.55-0.08-1.07-0.16-1.58-0.23c-0.51-0.07-1.06-0.1-1.66-0.1c-3.61,0-6.3,1.29-8.08,3.85\r c-1.5,2.19-2.25,5.17-2.25,8.94c0,0.46,0.05,3.09,0.16,7.87c0.03,1.2,0.04,2.76,0.04,4.67c-0.33-0.52-0.55-0.9-0.66-1.15\r c-0.19-0.38-0.37-0.78-0.53-1.19l-4.8,4.8c1.56,1.86,3.37,3.33,5.43,4.41c2.06,1.08,4.22,1.62,6.46,1.62h0.62l-0.37-20.66v-0.33\r c0-2.02,0.37-3.61,1.11-4.76c0.9-1.39,2.28-2.09,4.14-2.09c0.79,0,1.49,0.1,2.09,0.29L117.78,3.49z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            fill: this.state.color,
            d: "M35.43,22.03l-0.05-0.62H16.7v7.14h9.24c-1.57,2.23-4.56,3.99-8.12,3.99c-2.7,0-4.92-0.81-6.8-2.47\r c-1.91-1.66-2.83-3.62-2.83-5.96s0.93-4.29,2.83-5.96c1.89-1.68,4.12-2.49,6.8-2.49c2.62,0,4.86,0.88,6.81,2.7l0.52,0.49l5.91-5.62\r l-0.51-0.5c-2.86-2.66-7.07-4.84-12.24-4.98l-0.02-0.07h-0.53c-4.97,0-9.26,1.62-12.75,4.83C1.69,15.73,0,19.62,0,24.1\r c0,4.52,1.69,8.41,5.01,11.57c3.47,3.18,7.76,4.79,12.74,4.79c4.94,0,9.23-1.62,12.76-4.81C33.81,32.51,35.92,28.11,35.43,22.03z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            fill: this.state.color,
            d: "M42.16,8.18C42.46,3.06,43.91,2,43.91,2l-1.15-0.74c-0.76,0.6-1.12,2.13-1.28,3.74c-0.17-0.4-1.62-3.69-4.45-4.69\r C34.03-0.74,30.6,1.2,30.6,1.2s1.45,3.67,4.46,4.73c2.87,1.01,6.13-0.71,6.42-0.87c-0.1,1.07-0.12,2.17-0.1,3.06\r c-0.28-0.01-0.57-0.02-0.85-0.02c-3.36,0-6.48,1.02-9.07,2.78c0.15,0.13,0.31,0.26,0.46,0.4l2.02,1.98l-6.47,6.15h9.76l0.19,2.47\r c0.49,6.13-1.37,11.26-5.52,15.23c-0.19,0.17-0.39,0.32-0.58,0.48c2.61,1.81,5.78,2.88,9.21,2.88c8.94,0,16.18-7.25,16.18-16.18\r C56.71,15.89,50.33,9,42.16,8.18z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            fill: this.state.color,
            d: "M74.47,16.48l-5.21,3.03c1.04,0.96,1.86,1.93,2.46,2.91c0.76,1.23,1.15,2.43,1.15,3.61v0.62l-6.71,3.77\r c-1.07-1.15-1.93-2.43-2.59-3.85c-0.66-1.42-0.99-2.85-0.99-4.3c0-2.24,0.81-4.34,2.42-6.3c1.28-1.58,3.14-3.1,5.58-4.54\r c1.72-1.04,3.77-2.03,6.15-2.99L73.6,3.78c-0.88,0.27-1.76,0.6-2.64,0.98c-0.89,0.38-1.72,0.76-2.48,1.15\r c-3.64,1.8-6.52,3.85-8.65,6.14c-1.28,1.38-2.25,2.82-2.93,4.31c1.15,2.4,1.8,5.08,1.8,7.91c0,1.74-0.26,3.43-0.72,5.02\r c0.23,0.42,0.47,0.84,0.74,1.26c1.5,2.43,3.57,4.89,6.19,7.37l13.33-7.91c0.57-1.37,0.86-2.72,0.86-4.06\r c0-1.67-0.49-3.38-1.48-5.13C76.94,19.6,75.89,18.15,74.47,16.48z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
            fill: this.state.color,
            points: "80.65,44.77 87.21,44.77 87.21,20.75 80.65,22.02 \t",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
            fill: this.state.color,
            d: "M95.72,30.84l4.51-4.51l1.57-4.41c-2.13-3.06-4.85-5.58-8.16-7.57c-3.06-1.83-6.52-3.18-10.37-4.05\r c-1.37-0.3-2.23-0.48-2.58-0.53c-0.88-0.14-1.74-0.21-2.58-0.21l-0.33,6.07c3.14,0,6.23,0.63,9.27,1.88\r c3.03,1.26,5.62,2.99,7.75,5.2l-5.25,14.36h6.85l1.38-3.87c-0.3-0.31-0.6-0.62-0.88-0.96L95.72,30.84z",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          })));
      }
    }
  }]);

  return Logo;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(Logo));

/***/ }),

/***/ "./components/TableBlock.js":
/*!**********************************!*\
  !*** ./components/TableBlock.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Entry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Entry */ "./components/Entry.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _dbActions_setAssignedTasks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dbActions/setAssignedTasks */ "./dbActions/setAssignedTasks.js");







var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\components\\TableBlock.js";






var TableBlock =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TableBlock, _React$Component);

  function TableBlock(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TableBlock);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TableBlock).call(this, props));
    _this.state = {
      tableColumns: _this.getTableColumns(),
      entrySelectedCounter: 0,
      selectedEntries: {},
      columnNames: {
        'actions': 'פעולות',
        'date': 'תאריך',
        'time': 'שעה',
        'city': 'עיר',
        'fullAddress': 'כתובת',
        'name': 'ספק',
        'uid': 'uid',
        'firstName': 'שם פרטי',
        'lastName': 'שם משפחה',
        'region': 'אזור',
        'email': 'דוא"ל',
        'tz': 'תעודת זהות',
        'street': 'רחוב',
        'contactName': 'שם',
        'contactNumber': 'טלפון',
        'checkBox': '',
        'phone': 'טלפון'
      }
    };
    _this.selectCallback = _this.selectCallback.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.cancelSelection = _this.cancelSelection.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.assignTasks = _this.assignTasks.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TableBlock, [{
    key: "getTableColumns",
    value: function getTableColumns() {
      switch (this.props.page) {
        case 'index':
          return ['checkBox', 'date', 'time', 'city', 'name'];

        case 'assignedTasks':
          return ['date', 'time', 'fullAddress', 'name', 'contactName', 'contactNumber', 'actions'];

        case 'taskReports':
          return ['date', 'street', 'city', 'name', 'actions'];

        case 'adminUsers':
          return ['tz', 'firstName', 'lastName', 'email', 'phone', 'region', 'actions'];

        case 'adminTasks':
          return ['date', 'time', 'street', 'city', 'name', 'actions'];

        default:
          break;
      }
    }
  }, {
    key: "selectCallback",
    value: function selectCallback(entry, isSelected) {
      var newSelectedEntries = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.selectedEntries);

      if (isSelected) {
        newSelectedEntries[entry.id] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry);
        this.setState({
          entrySelectedCounter: this.state.entrySelectedCounter + 1,
          selectedEntries: newSelectedEntries
        });
      } else {
        delete newSelectedEntries[entry.id];
        this.setState({
          entrySelectedCounter: this.state.entrySelectedCounter - 1,
          selectedEntries: newSelectedEntries
        });
      }
    }
  }, {
    key: "cancelSelection",
    value: function cancelSelection() {
      this.setState({
        entrySelectedCounter: 0,
        selectedEntries: {}
      });
    }
  }, {
    key: "assignTasks",
    value: function assignTasks() {
      var taskIDs = [];

      for (var taskID in this.state.selectedEntries) {
        taskIDs.push(taskID);
      }

      Object(_dbActions_setAssignedTasks__WEBPACK_IMPORTED_MODULE_11__["default"])(this.props, taskIDs, this.state.entrySelectedCounter, this.state.selectedEntries);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.data.length == 0) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "/static/nothing.png",
          width: "100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            fontSize: '20px',
            marginTop: '10px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, "\u05D4\u05DE\u05DE\u05DE... \u05D0\u05D9\u05DF \u05DB\u05D0\u05DF \u05DB\u05DC\u05D5\u05DD")));
      } else {
        var actionsBar = '';

        if (this.props.isSelectable && this.state.entrySelectedCounter > 0) {
          actionsBar = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"], {
            bg: "light",
            fixed: "bottom",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            onClick: this.assignTasks,
            variant: "primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, "\u05E9\u05D9\u05D1\u05D5\u05E5 ", this.state.entrySelectedCounter, " \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            onClick: this.cancelSelection,
            variant: "secondary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          }, "\u05D1\u05D9\u05D8\u05D5\u05DC")));
        }

        if (this.props.isSearchable && this.props.page == 'adminUsers') {
          actionsBar = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"], {
            bg: "light",
            fixed: "bottom",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "btn-group",
            role: "group",
            "aria-label": "Basic example",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            style: {
              whiteSpace: 'nowrap'
            },
            type: "button",
            className: "btn btn-primary",
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'ADD_USER',
                entries: _this2.props.entry
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            __self: this
          }, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            style: {
              whiteSpace: 'nowrap'
            },
            type: "button",
            className: "btn btn-secondary",
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'ADD_USER_CSV',
                entries: _this2.props.entry
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          }, "\u05D4\u05D5\u05E1\u05E4\u05D4 \u05DE\u05E7\u05D5\u05D1\u05E5"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
            className: "mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
            as: "select",
            variant: "outline-secondary",
            title: "Dropdown",
            drop: "up",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            },
            __self: this
          }, "\u05E9\u05DD \u05DE\u05DC\u05D0"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          }, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
            "aria-describedby": "basic-addon1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }))))));
        }

        if (this.props.isSearchable && this.props.page == 'adminTasks') {
          actionsBar = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"], {
            bg: "light",
            fixed: "bottom",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "btn-group",
            role: "group",
            "aria-label": "Basic example",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            style: {
              whiteSpace: 'nowrap'
            },
            type: "button",
            className: "btn btn-primary",
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'ADD_TASK',
                entries: _this2.props.entry
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05E9\u05D9\u05DE\u05D4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            style: {
              whiteSpace: 'nowrap'
            },
            type: "button",
            className: "btn btn-secondary",
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'ADD_TASK_CSV',
                entries: _this2.props.entry
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }, "\u05D4\u05D5\u05E1\u05E4\u05D4 \u05DE\u05E7\u05D5\u05D1\u05E5"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            style: {
              whiteSpace: 'nowrap'
            },
            type: "button",
            className: "btn btn-secondary",
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'EXPORT_TASK_CSV',
                entries: _this2.props.entry
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05D3\u05D5\u05D7"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
            className: "mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
            as: "select",
            variant: "outline-secondary",
            title: "Dropdown",
            drop: "up",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, "\u05E1\u05E4\u05E7"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }, "\u05DB\u05EA\u05D5\u05D1\u05EA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }, "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, "\u05D8\u05DC\u05E4\u05D5\u05DF")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
            "aria-describedby": "basic-addon1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }))))));
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "table-responsive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Table"], {
          hover: true,
          responsive: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, this.state.tableColumns.map(function (column) {
          switch (column) {
            default:
              return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
                scope: "col",
                key: column,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 194
                },
                __self: this
              }, _this2.state.columnNames[column]);
          }
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, this.props.data.map(function (entry) {
          var isSelected = false;
          if (_this2.state.selectedEntries[entry.id]) isSelected = true;
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Entry__WEBPACK_IMPORTED_MODULE_8__["default"], {
            page: _this2.props.page,
            isSelected: isSelected,
            isSelectable: _this2.props.isSelectable,
            type: _this2.props.type,
            key: entry.id,
            selectCallback: _this2.selectCallback,
            entry: entry,
            tableColumns: _this2.state.tableColumns,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          });
        }))), actionsBar);
      }
    }
  }]);

  return TableBlock;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return state;
})(TableBlock));

/***/ }),

/***/ "./config/firebaseConfig.js":
/*!**********************************!*\
  !*** ./config/firebaseConfig.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

var firebaseConfig = {
  apiKey: "AIzaSyAvu90OSR5YeQ4JSH61gerVvwLJZm64ADQ",
  authDomain: "leketgo.firebaseapp.com",
  databaseURL: "https://leketgo.firebaseio.com",
  projectId: "leketgo",
  storageBucket: "leketgo.appspot.com",
  messagingSenderId: "427584696273",
  appId: "1:427584696273:web:286a00c4ddae79ec"
}; // Initialize Firebase

var fire = !firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app();
/* harmony default export */ __webpack_exports__["default"] = (fire);

/***/ }),

/***/ "./dbActions/checkAuth.js":
/*!********************************!*\
  !*** ./dbActions/checkAuth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkAuthAndRefresh; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _refresh4User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh4User */ "./dbActions/refresh4User.js");
/* harmony import */ var _getAllUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getAllUsers */ "./dbActions/getAllUsers.js");
/* harmony import */ var _getAllRegionTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getAllRegionTasks */ "./dbActions/getAllRegionTasks.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





function checkAuthAndRefresh(dispatch) {
  _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged(function (user) {
    var db = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
    console.log(user);

    if (user) {
      db.collection("users").doc(user.uid).get().then(function (doc) {
        dispatch({
          type: 'LOGIN',
          user: doc.data(),
          uid: user.uid
        });

        if (doc.data().admin == false) {
          Object(_refresh4User__WEBPACK_IMPORTED_MODULE_1__["default"])(dispatch, doc.data().region, user.uid);
        } else {
          Object(_getAllUsers__WEBPACK_IMPORTED_MODULE_2__["default"])(dispatch);
          Object(_getAllRegionTasks__WEBPACK_IMPORTED_MODULE_3__["default"])(dispatch, doc.data().region);
        }

        dispatch({
          type: 'AUTHCHECKED'
        });
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
      dispatch({
        type: 'AUTHCHECKED'
      });
    }
  });
}

/***/ }),

/***/ "./dbActions/dates.js":
/*!****************************!*\
  !*** ./dbActions/dates.js ***!
  \****************************/
/*! exports provided: getEndDate, getStartDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndDate", function() { return getEndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartDate", function() { return getStartDate; });
function getEndDate() {
  // if it is Thursday or after, return time of next Saturday. else, return time of this saturday.
  var now = new Date();
  var result = new Date(now);
  var weekDay = result.getDay();

  if (weekDay < 4) {
    // before thursday
    result.setDate(result.getDate() + 6 - weekDay);
  } else {
    result.setDate(result.getDate() + 13 - weekDay);
  }

  result.setHours(23);
  result.setMinutes(59);
  result.setSeconds(59);
  result.setMilliseconds(999);
  return result;
}
function getStartDate() {
  // get the beginning time of the day
  var now = new Date();
  var result = new Date(now);
  result.setHours(0);
  result.setMinutes(0);
  result.setSeconds(0);
  result.setMilliseconds(0);
  return result;
}

/***/ }),

/***/ "./dbActions/getAllRegionTasks.js":
/*!****************************************!*\
  !*** ./dbActions/getAllRegionTasks.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAllRegionTasks; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");


function getAllRegionTasks(dispatch, region) {
  var db = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].firestore();
  var tasks = [];
  db.collection("tasks").where("region", "==", region).get().then(function (querySnapshot) {
    querySnapshot.forEach(function (task) {
      tasks.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, task.data(), {
        id: task.id
      }));
    });
    dispatch({
      type: 'GETALLREGIONTASKS',
      tasks: tasks
    });
  });
}

/***/ }),

/***/ "./dbActions/getAllUsers.js":
/*!**********************************!*\
  !*** ./dbActions/getAllUsers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAllUsers; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");


function getAllUsers(dispatch) {
  var db = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].firestore();
  var users = [];
  db.collection("users").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (user) {
      users.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user.data(), {
        uid: user.id
      }));
    });
    dispatch({
      type: 'GETALLUSERS',
      users: users
    });
  });
}

/***/ }),

/***/ "./dbActions/getAssignedTasks.js":
/*!***************************************!*\
  !*** ./dbActions/getAssignedTasks.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAssigned; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dates */ "./dbActions/dates.js");


function getAssigned(dispatch, uid) {
  var db = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
  db.collection("tasks").where("volunteerUid", "==", uid).where("timestamp", ">", Object(_dates__WEBPACK_IMPORTED_MODULE_1__["getStartDate"])()).where("collected", "==", false).get().then(function (querySnapshot) {
    var tasks = [];
    querySnapshot.forEach(function (doc) {
      var task = doc.data();
      task.id = doc.id;
      tasks.push(task);
    });
    dispatch({
      type: 'ASSIGNEDTASKS',
      tasks: tasks
    });
  });
}

/***/ }),

/***/ "./dbActions/getTaskReports.js":
/*!*************************************!*\
  !*** ./dbActions/getTaskReports.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTaskReports; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dates */ "./dbActions/dates.js");


function getTaskReports(dispatch, uid) {
  var db = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
  db.collection("tasks").where("volunteerUid", "==", uid).where("reportFilled", "==", false).get().then(function (querySnapshot) {
    var tasks = [];
    querySnapshot.forEach(function (doc) {
      var task = doc.data();
      task.id = doc.id;

      if (task.collected) {
        tasks.push(task);
      } else {
        if (task.timestamp < Object(_dates__WEBPACK_IMPORTED_MODULE_1__["getStartDate"])()) {
          tasks.push(task);
        }
      }
    });
    dispatch({
      type: 'TASKREPORTS',
      tasks: tasks
    });
  });
}

/***/ }),

/***/ "./dbActions/getUnassignedTasks.js":
/*!*****************************************!*\
  !*** ./dbActions/getUnassignedTasks.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUnassigned; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dates */ "./dbActions/dates.js");


function getUnassigned(dispatch, region) {
  var db = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
  console.log(Object(_dates__WEBPACK_IMPORTED_MODULE_1__["getStartDate"])());
  console.log(Object(_dates__WEBPACK_IMPORTED_MODULE_1__["getEndDate"])());
  db.collection("tasks").where("region", "==", region).where("volunteerUid", "==", null).where("timestamp", ">", Object(_dates__WEBPACK_IMPORTED_MODULE_1__["getStartDate"])()).where("timestamp", "<", Object(_dates__WEBPACK_IMPORTED_MODULE_1__["getEndDate"])()).get().then(function (querySnapshot) {
    var tasks = [];
    querySnapshot.forEach(function (doc) {
      var task = doc.data();
      task.id = doc.id;
      tasks.push(task);
    });
    console.log(tasks);
    dispatch({
      type: 'UNASSIGNEDTASKS',
      tasks: tasks
    });
  });
}

/***/ }),

/***/ "./dbActions/refresh4User.js":
/*!***********************************!*\
  !*** ./dbActions/refresh4User.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return refresh4User; });
/* harmony import */ var _dbActions_getUnassignedTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dbActions/getUnassignedTasks */ "./dbActions/getUnassignedTasks.js");
/* harmony import */ var _dbActions_getAssignedTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dbActions/getAssignedTasks */ "./dbActions/getAssignedTasks.js");
/* harmony import */ var _dbActions_getTaskReports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dbActions/getTaskReports */ "./dbActions/getTaskReports.js");



function refresh4User(dispatch, region, uid) {
  Object(_dbActions_getUnassignedTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(dispatch, region);
  Object(_dbActions_getAssignedTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(dispatch, uid);
  Object(_dbActions_getTaskReports__WEBPACK_IMPORTED_MODULE_2__["default"])(dispatch, uid);
}

/***/ }),

/***/ "./dbActions/setAssignedTasks.js":
/*!***************************************!*\
  !*** ./dbActions/setAssignedTasks.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setAssignedTasks; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _refresh4User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refresh4User */ "./dbActions/refresh4User.js");




function sendCompletionMsg(props, numOfFailures, numOfSuccesses, entrySelectedCounter, selectedEntries) {
  console.log("test2", numOfSuccesses, numOfFailures, entrySelectedCounter);

  if (numOfFailures == 0 && numOfSuccesses == entrySelectedCounter) {
    props.dispatch({
      type: 'OPEN_MODAL',
      msg: 'ASSIGN_TASKS_SUCCESS',
      entries: selectedEntries
    });
  }

  if (numOfSuccesses == 0 && numOfFailures == entrySelectedCounter) {
    props.dispatch({
      type: 'OPEN_MODAL',
      msg: 'ASSIGN_TASKS_FAILED',
      entries: selectedEntries
    });
  }

  if (numOfFailures > 0 && numOfSuccesses > 0) {
    props.dispatch({
      type: 'OPEN_MODAL',
      msg: 'ASSIGN_TASKS_MIX',
      entries: selectedEntries
    });
  }

  Object(_refresh4User__WEBPACK_IMPORTED_MODULE_2__["default"])(props.dispatch, props.userData.region, props.userData.uid);
}

function runTrans(props, taskIDs, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db) {
  db.runTransaction(function (transaction) {
    var taskID = taskIDs[index];
    var task = db.collection("tasks").doc(taskID);
    return transaction.get(task).then(function (taskSnapshot) {
      if (!taskSnapshot.exists) {
        throw "Could not find task with given ID: " + taskID;
      }

      var taskIsAvialable = taskSnapshot.data().volunteerUid == null ? true : false;

      if (taskIsAvialable) {
        transaction.update(task, {
          volunteerUid: props.userData.uid
        });
        return "Task was assigned to user successfully!";
      } else {
        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject("Sorry! task was taken earlier.");
      }
    });
  }).then(function (msg) {
    index++;
    console.log(msg);
    numOfSuccesses++;
    console.log("test", numOfSuccesses, numOfFailures, entrySelectedCounter);

    if (index < entrySelectedCounter) {
      runTrans(props, taskIDs, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db);
    }

    if (numOfFailures + numOfSuccesses == entrySelectedCounter) {
      sendCompletionMsg(props, numOfFailures, numOfSuccesses, entrySelectedCounter, selectedEntries);
    }
  }).catch(function (msg) {
    index++;
    console.log(msg);
    numOfFailures++;
    console.log("test", numOfSuccesses, numOfFailures, entrySelectedCounter);

    if (index < entrySelectedCounter) {
      runTrans(props, taskIDs, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db);
    }

    if (numOfFailures + numOfSuccesses == entrySelectedCounter) {
      sendCompletionMsg(props, numOfFailures, numOfSuccesses, entrySelectedCounter, selectedEntries);
    }
  });
}

function setAssignedTasks(props, taskIDs, entrySelectedCounter, selectedEntries) {
  var db = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].firestore();
  var numOfSuccesses = 0;
  var numOfFailures = 0;
  var index = 0;
  runTrans(props, taskIDs, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/loading.js":
/*!**************************!*\
  !*** ./pages/loading.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Logo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Logo.js */ "./components/Logo.js");
var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\pages\\loading.js";


function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/loading.png",
    width: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: '20px',
      marginTop: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\u05D1\u05D8\u05E2\u05D9\u05E0\u05D4...")));
}

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_TableBlock_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TableBlock.js */ "./components/TableBlock.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
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
        className: "wrapper d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "m-2",
        style: {
          paddingBottom: '3rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mb-4 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/tasks.png",
        width: "60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), " \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TableBlock_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isSearchable: true,
        data: this.props.regionalTasks,
        page: "adminTasks",
        type: "tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }))));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(Users));

/***/ }),

/***/ "./static/bootstrap.min.scss":
/*!***********************************!*\
  !*** ./static/bootstrap.min.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/styles.scss":
/*!****************************!*\
  !*** ./static/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/tasks.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\baram\Git\leket-go\pages\tasks.js */"./pages/tasks.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=tasks.js.map