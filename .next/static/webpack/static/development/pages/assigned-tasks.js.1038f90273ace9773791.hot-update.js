webpackHotUpdate("static\\development\\pages\\assigned-tasks.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
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
            fullName: entry.firstName + '' + entry.lastName,
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
                lineNumber: 67
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-sticky-note fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
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
                lineNumber: 72
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-calendar-check fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
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
                lineNumber: 77
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-calendar-times fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
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
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-edit fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: this
            }), "\u05E2\u05E8\u05D9\u05DB\u05D4")
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'RESET_PASSWORD',
                entries: _this2.props.entry
              });
            },
            color: 'outline-secondary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "fas fa-unlock-alt fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: this
            }), "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4")
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'REMOVE_USER',
                entries: _this2.props.entry
              });
            },
            color: 'outline-secondary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-trash-alt fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            }), "\u05DE\u05D7\u05D9\u05E7\u05D4")
          }];
          break;

        case 'adminTasks':
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'EDIT_TASK',
                entries: _this2.props.entry
              });
            },
            color: 'outline-primary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-edit fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              },
              __self: this
            }), "\u05E2\u05E8\u05D9\u05DB\u05D4")
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'TASK_STATUS',
                entries: _this2.props.entry
              });
            },
            color: 'outline-secondary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "fas fa-question fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              },
              __self: this
            }), "\u05E1\u05D8\u05D8\u05D5\u05E1")
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'REMOVE_TASK',
                entries: _this2.props.entry
              });
            },
            color: 'outline-secondary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-trash-alt fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            }), "\u05DE\u05D7\u05D9\u05E7\u05D4")
          }];
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: (this.props.isSelected ? 'table-primary' : '') + (this.props.isSelectable ? ' entry-selectable' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, this.props.tableColumns.map(function (column) {
        if (column != 'actions') {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
            onClick: _this2.toggleSelection,
            key: column,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
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
                  lineNumber: 147
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
                style: {
                  whiteSpace: 'nowrap'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 148
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
                width: "200",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 148
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Toggle, {
                variant: "secondary",
                id: "dropdown-basic",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
                },
                __self: this
              }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                },
                __self: this
              }, buttons.map(function (button) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, {
                  key: button.text,
                  onClick: button.onClick,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                  },
                  __self: this
                }, button.text);
              })))));

            case 'adminUsers':
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                key: column,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
                style: {
                  whiteSpace: 'nowrap'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 163
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
                width: "200",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 163
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Toggle, {
                variant: "secondary",
                id: "dropdown-basic",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 164
                },
                __self: this
              }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 167
                },
                __self: this
              }, buttons.map(function (button) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, {
                  key: button.text,
                  onClick: button.onClick,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                  },
                  __self: this
                }, button.text);
              })))));

            case 'adminTasks':
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                key: column,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 177
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
                style: {
                  whiteSpace: 'nowrap'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 178
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
                width: "200",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 178
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Toggle, {
                variant: "secondary",
                id: "dropdown-basic",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 179
                },
                __self: this
              }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 182
                },
                __self: this
              }, buttons.map(function (button) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, {
                  key: button.text,
                  onClick: button.onClick,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                  },
                  __self: this
                }, button.text);
              })))));

            case 'taskReports':
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                key: column,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 192
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
                style: {
                  whiteSpace: 'nowrap'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 192
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
                width: "200",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 192
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Toggle, {
                variant: "secondary",
                id: "dropdown-basic",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 193
                },
                __self: this
              }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 196
                },
                __self: this
              }, buttons.map(function (button) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, {
                  key: button.text,
                  onClick: button.onClick,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                  },
                  __self: this
                }, button.text);
              })))));

            default:
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                key: column,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 206
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 207
                },
                __self: this
              }, buttons.map(function (button) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                  key: button.text,
                  onClick: button.onClick,
                  variant: button.color,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
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

/***/ })

})
//# sourceMappingURL=assigned-tasks.js.1038f90273ace9773791.hot-update.js.map