webpackHotUpdate("static\\development\\pages\\task-reports.js",{

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
          var _options = {
            weekday: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          };

          var _date = entry.timestamp.toDate();

          var statusIcon;
          var statusMessage;

          if (entry.collected) {
            if (entry.reportFilled) {
              statusIcon = 'fas fa-calendar-check';
              statusMessage = 'בוצע ומושב';
            } else {
              statusIcon = 'far fa-calendar-check';
              statusMessage = 'בוצע ולא מושב';
            }
          } else {
            if (entry.reportFilled) {
              statusIcon = 'fas fa-calendar-times';
              statusMessage = 'לא בוצע ומושב';
            } else {
              statusIcon = 'far fa-calendar-times';
              statusMessage = 'לא בוצע ולא מושב';
            }
          }

          return {
            date: _date.toLocaleDateString('he-IL', _options),
            time: _date.getHours() + ':' + ('0' + _date.getMinutes()).slice(-2),
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
                lineNumber: 50
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
                lineNumber: 51
              },
              __self: this
            }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Check, {
              custom: true,
              label: "",
              type: "checkbox",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            }),
            statusIcon: statusIcon,
            statusMessage: statusMessage
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
            variant: 'outline-primary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-sticky-note fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
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
            variant: 'outline-primary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-calendar-check fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 94
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
            variant: 'outline-secondary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-calendar-times fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
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
            variant: 'outline-primary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-calendar-check fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            }), "\u05D3\u05D9\u05D5\u05D5\u05D7")
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'REPORT_UNDONE'
              });
            },
            variant: 'outline-secondary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-calendar-times fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            }), "\u05DC\u05D0 \u05D1\u05D5\u05E6\u05E2")
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
            variant: 'outline-primary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-edit fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
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
            variant: 'outline-secondary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "fas fa-unlock-alt fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
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
            variant: 'outline-secondary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-trash-alt fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              },
              __self: this
            }), "\u05E1\u05D2\u05D9\u05E8\u05EA \u05D7\u05E9\u05D1\u05D5\u05DF")
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
            variant: 'outline-primary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-edit fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 141
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
            variant: 'outline-secondary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "fas fa-question fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 146
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
            variant: 'outline-secondary',
            text: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
              className: "far fa-trash-alt fa-fw",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              },
              __self: this
            }), "\u05DE\u05D7\u05D9\u05E7\u05D4")
          }];
          break;
      }

      if (this.props.tableTasksCardView) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, date.toLocaleDateString('he-IL', options), ", ", date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card.Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card.Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, entry.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card.Subtitle, {
          className: "mb-2 text-muted",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, entry['address'], ", ", entry['city']), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card.Text, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "mt-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }, entry['contact name']), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          style: {
            whiteSpace: 'nowrap'
          },
          href: 'tel: ' + entry['contact number'],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, entry['contact number'])), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
          className: "w-100 mt-4",
          "aria-label": "Basic example",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          onClick: function onClick() {
            return _this2.props.dispatch({
              type: 'OPEN_MODAL',
              msg: 'TASK_NOTES',
              entries: _this2.props.entry
            });
          },
          style: {
            whiteSpace: 'nowrap'
          },
          variant: "outline-secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "far fa-sticky-note fa-fw",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }), "\u05D4\u05E2\u05E8\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          onClick: function onClick() {
            return _this2.props.dispatch({
              type: 'OPEN_MODAL',
              msg: 'TASK_DONE',
              entries: _this2.props.entry
            });
          },
          style: {
            whiteSpace: 'nowrap'
          },
          variant: "outline-secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, "\u05D1\u05D5\u05E6\u05E2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          onClick: function onClick() {
            return _this2.props.dispatch({
              type: 'OPEN_MODAL',
              msg: 'TASK_CANCEL',
              entries: _this2.props.entry
            });
          },
          style: {
            whiteSpace: 'nowrap'
          },
          variant: "outline-secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, "\u05D4\u05E1\u05E8\u05D4")))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
          className: (this.props.isSelected ? 'table-primary' : '') + (this.props.isSelectable ? ' entry-selectable' : ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, this.props.tableColumns.map(function (column) {
          switch (column) {
            case 'actions':
              {
                switch (_this2.props.page) {
                  case 'assignedTasks':
                    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                      className: "align-middle",
                      key: column,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 188
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
                      style: {
                        whiteSpace: 'nowrap'
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 189
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
                      width: "200",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 189
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Toggle, {
                      variant: "secondary",
                      id: "dropdown-basic",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 190
                      },
                      __self: this
                    }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 193
                      },
                      __self: this
                    }, buttons.map(function (button) {
                      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, {
                        key: button.text,
                        onClick: button.onClick,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 196
                        },
                        __self: this
                      }, button.text);
                    })))));

                  case 'adminUsers':
                    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                      className: "align-middle",
                      key: column,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 207
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
                      style: {
                        whiteSpace: 'nowrap'
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 208
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
                      width: "200",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 209
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Toggle, {
                      variant: "secondary",
                      id: "dropdown-basic",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 210
                      },
                      __self: this
                    }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 213
                      },
                      __self: this
                    }, buttons.map(function (button) {
                      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, {
                        key: button.text,
                        onClick: button.onClick,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 216
                        },
                        __self: this
                      }, button.text);
                    })))));

                  case 'adminTasks':
                    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                      className: "align-middle",
                      key: column,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 227
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
                      style: {
                        whiteSpace: 'nowrap'
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 228
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
                      width: "200",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 229
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Toggle, {
                      variant: "secondary",
                      id: "dropdown-basic",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 230
                      },
                      __self: this
                    }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 233
                      },
                      __self: this
                    }, buttons.map(function (button) {
                      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, {
                        key: button.text,
                        onClick: button.onClick,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 236
                        },
                        __self: this
                      }, button.text);
                    })))));

                  case 'taskReports':
                    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                      className: "align-middle",
                      key: column,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 247
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
                      style: {
                        whiteSpace: 'nowrap'
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 248
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
                      width: "200",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 249
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Toggle, {
                      variant: "secondary",
                      id: "dropdown-basic",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 250
                      },
                      __self: this
                    }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 253
                      },
                      __self: this
                    }, buttons.map(function (button) {
                      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, {
                        key: button.text,
                        onClick: button.onClick,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 256
                        },
                        __self: this
                      }, button.text);
                    })))));

                  default:
                    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                      className: "align-middle",
                      key: column,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 268
                      },
                      __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 269
                      },
                      __self: this
                    }, buttons.map(function (button) {
                      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
                        key: button.text,
                        onClick: button.onClick,
                        variant: button.variant,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 272
                        },
                        __self: this
                      }, button.text);
                    })));
                }
              }

            case 'status':
              {
                var values = _this2.getDataValues(_this2.props.entry);

                var message = values.statusMessage;
                var icon = values.statusIcon;
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                  className: "align-middle",
                  key: column,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 286
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ButtonToolbar"], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 287
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["OverlayTrigger"], {
                  placement: "left",
                  overlay: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 291
                    },
                    __self: this
                  }, message),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 288
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
                  className: icon,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 295
                  },
                  __self: this
                }))));
              }

            default:
              {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
                  className: "align-middle",
                  onClick: _this2.toggleSelection,
                  key: column,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 304
                  },
                  __self: this
                }, _this2.getDataValues(_this2.props.entry)[column]);
              }
          }
        }));
      }
    }
  }]);

  return Entry;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
})(Entry));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Entry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Entry */ "./components/Entry.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
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
        'fullName': 'שם מלא',
        'region': 'אזור',
        'email': 'דוא"ל',
        'tz': 'תעודת זהות',
        'street': 'רחוב ומספר',
        'contactName': 'שם',
        'contactNumber': 'טלפון',
        'checkBox': '',
        'status': '',
        'phone': 'טלפון'
      },
      searchValue: '',
      searchField: _this.props.page == 'adminUsers' ? 'firstName' : 'name'
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
          return ['status', 'date', 'time', 'street', 'city', 'name', 'actions'];

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
    key: "handleChangeForm",
    value: function handleChangeForm(event) {
      var fleldVal = event.target.value;
      this.setState({
        searchValue: fleldVal
      });
    }
  }, {
    key: "handleChangeDropDown",
    value: function handleChangeDropDown(event) {
      var fleldVal = event.target.value;

      switch (fleldVal) {
        case 'שם פרטי':
          this.setState({
            searchField: 'firstName'
          });
          break;

        case 'שם משפחה':
          this.setState({
            searchField: 'lastName'
          });
          break;

        case 'תעודת זהות':
          this.setState({
            searchField: 'tz'
          });
          break;

        case 'רחוב ומספר':
          this.setState({
            searchField: 'address'
          });
          break;

        case 'עיר מגורים':
          this.setState({
            searchField: 'city'
          });
          break;

        case 'מספר טלפון':
          this.setState({
            searchField: 'phone'
          });
          break;

        case 'דואר אלקטרוני':
          this.setState({
            searchField: 'email'
          });
          break;

        case 'ספק':
          this.setState({
            searchField: 'name'
          });
          break;

        case 'עיר':
          this.setState({
            searchField: 'city'
          });
          break;

        case 'רחוב ומספר':
          this.setState({
            searchField: 'address'
          });
          break;

        case 'איש קשר':
          this.setState({
            searchField: 'contact name'
          });
          break;

        case 'טלפון':
          this.setState({
            searchField: 'contact number'
          });
          break;

        default:
          break;
      }
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
            lineNumber: 145
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "nothing",
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "/static/nothing.png",
          width: "100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            fontSize: '20px',
            marginTop: '10px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
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
              lineNumber: 170
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            onClick: this.assignTasks,
            variant: "primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, "\u05E9\u05D9\u05D1\u05D5\u05E5 ", this.state.entrySelectedCounter, " \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            onClick: this.cancelSelection,
            variant: "secondary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
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
              lineNumber: 179
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "btn-group",
            role: "group",
            "aria-label": "Basic example",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
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
              lineNumber: 184
            },
            __self: this
          }, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05EA\u05E0\u05D3\u05D1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
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
              lineNumber: 185
            },
            __self: this
          }, "\u05D4\u05D5\u05E1\u05E4\u05D4 \u05DE\u05E7\u05D5\u05D1\u05E5"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
            className: "mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
            as: "select",
            variant: "outline-secondary",
            title: "Dropdown",
            drop: "up",
            onChange: this.handleChangeDropDown.bind(this),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          }, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 195
            },
            __self: this
          }, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            },
            __self: this
          }, "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 198
            },
            __self: this
          }, "\u05E2\u05D9\u05E8 \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            },
            __self: this
          }, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            },
            __self: this
          }, "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
            onChange: this.handleChangeForm.bind(this),
            "aria-describedby": "basic-addon1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
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
              lineNumber: 211
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 213
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 214
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "btn-group",
            role: "group",
            "aria-label": "Basic example",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 215
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
              lineNumber: 216
            },
            __self: this
          }, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D0\u05D9\u05E1\u05D5\u05E3"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
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
              lineNumber: 217
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
              lineNumber: 218
            },
            __self: this
          }, "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05D3\u05D5\u05D7"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 221
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
            className: "mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 222
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
            as: "select",
            variant: "outline-secondary",
            title: "Dropdown",
            drop: "up",
            onChange: this.handleChangeDropDown.bind(this),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          }, "\u05E1\u05E4\u05E7"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 230
            },
            __self: this
          }, "\u05E2\u05D9\u05E8"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 231
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232
            },
            __self: this
          }, "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          }, "\u05D8\u05DC\u05E4\u05D5\u05DF")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
            onChange: this.handleChangeForm.bind(this),
            "aria-describedby": "basic-addon1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 235
            },
            __self: this
          }))))));
        }

        if (this.props.tableTasksCardView) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["CardColumns"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 244
            },
            __self: this
          }, this.props.data.map(function (entry) {
            var options = {
              weekday: 'short',
              year: 'numeric',
              month: 'numeric',
              day: 'numeric'
            };
            var date = entry.timestamp.toDate();
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Entry__WEBPACK_IMPORTED_MODULE_8__["default"], {
              tableTasksCardView: _this2.props.tableTasksCardView,
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
                lineNumber: 249
              },
              __self: this
            });
          }));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "table-responsive",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 256
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Table"], {
            hover: true,
            responsive: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 257
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 258
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 259
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
                    lineNumber: 264
                  },
                  __self: this
                }, _this2.state.columnNames[column]);
            }
          }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 270
            },
            __self: this
          }, this.props.data.map(function (entry) {
            var isSelected = false;

            if (_this2.state.selectedEntries[entry.id]) {
              isSelected = true;
            }

            var ret = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Entry__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                lineNumber: 276
              },
              __self: this
            });

            if (_this2.props.isSearchable) {
              for (var key in entry) {
                if (key == _this2.state.searchField) if (entry[key].includes(_this2.state.searchValue)) return ret;
              }
            } else {
              return ret;
            }
          }))), actionsBar);
        }
      }
    }
  }]);

  return TableBlock;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return state;
})(TableBlock));

/***/ })

})
//# sourceMappingURL=task-reports.js.56b9fbaeb8e39adfc1db.hot-update.js.map