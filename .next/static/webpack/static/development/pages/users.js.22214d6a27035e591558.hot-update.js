webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Entry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Entry */ "./components/Entry.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");







var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\components\\Table.js";









var Table =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Table, _React$Component);

  function Table(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Table);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Table).call(this, props));
    _this.state = {
      tableColumns: _this.getTableColumns(),
      entrySelectedCounter: 0,
      selectedEntries: {},
      columnNames: {
        'actions': 'פעולות',
        'date': 'תאריך',
        'city': 'עיר',
        'name': 'שם',
        'catering': 'קייטרינג',
        'uid': 'uid',
        'firstName': 'שם פרטי',
        'lastName': 'שם משפחה',
        'region': 'אזור',
        'email': 'דוא"ל'
      }
    };
    _this.selectCallback = _this.selectCallback.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.cancelSelection = _this.cancelSelection.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.assignTasks = _this.assignTasks.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Table, [{
    key: "getTableColumns",
    value: function getTableColumns() {
      switch (this.props.page) {
        case 'index':
          return ['date', 'city', 'name', 'catering'];

        case 'assignedTasks':
          return ['date', 'city', 'name', 'catering', 'actions'];

        case 'taskReports':
          return ['date', 'city', 'name', 'catering', 'actions'];

        case 'users':
          return ['uid', 'firstName', 'lastName', 'email', 'region', 'actions'];

        case 'tasks':
          return ['actions', 'date', 'city', 'name', 'catering'];

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
      //check if someone assigned it in the meantime
      //if a task can no longer be assigned, remove it from selectedEntries
      //if still open for assignment, assign
      this.props.dispatch({
        type: 'OPEN_MODAL',
        msg: 'ASSIGN_TASKS_SUCCESS',
        entries: this.state.selectedEntries
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var actionsBar = '';

      if (this.props.isSelectable && this.state.entrySelectedCounter > 0) {
        actionsBar = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "p-2 position-fixed fixed-bottom bg-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "btn-group",
          role: "group",
          "aria-label": "Basic example",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          type: "button",
          className: "btn btn-primary",
          onClick: this.assignTasks,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, "\u05E9\u05D9\u05D1\u05D5\u05E5 ", this.state.entrySelectedCounter, " \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          type: "button",
          onClick: this.cancelSelection,
          className: "btn btn-secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "\u05D1\u05D9\u05D8\u05D5\u05DC")));
      }

      if (this.props.isSearchable) {
        actionsBar = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "p-2 position-fixed fixed-bottom bg-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "btn-group",
          role: "group",
          "aria-label": "Basic example",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          type: "button",
          className: "btn btn-primary",
          onClick: this.assignTasks,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          type: "button",
          className: "btn btn-secondary",
          onClick: this.assignTasks,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, "\u05D4\u05D5\u05E1\u05E4\u05D4 \u05DE\u05E7\u05D5\u05D1\u05E5")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["InputGroup"], {
          className: "mb-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["DropdownButton"], {
          as: react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["InputGroup"].Prepend,
          variant: "outline-secondary",
          title: "Dropdown",
          id: "input-group-dropdown-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "Action"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, "Another action"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, "Something else here"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Divider, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, "Separated link")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["FormControl"], {
          "aria-describedby": "basic-addon1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "table-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        className: "table table-hover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, this.state.tableColumns.map(function (column) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
          scope: "col",
          key: column,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, _this2.state.columnNames[column]);
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, this.props.data.map(function (entry) {
        var isSelected = false;
        if (_this2.state.selectedEntries[entry.id]) isSelected = true;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Entry__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
            lineNumber: 143
          },
          __self: this
        });
      }))), actionsBar));
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(function (state) {
  return state;
})(Table));

/***/ }),

/***/ "./node_modules/react-bootstrap/Button.js":
false,

/***/ "./node_modules/react-bootstrap/Dropdown.js":
false,

/***/ "./node_modules/react-bootstrap/DropdownButton.js":
false,

/***/ "./node_modules/react-bootstrap/DropdownItem.js":
false,

/***/ "./node_modules/react-bootstrap/DropdownMenu.js":
false,

/***/ "./node_modules/react-bootstrap/DropdownToggle.js":
false,

/***/ "./node_modules/react-bootstrap/Feedback.js":
false,

/***/ "./node_modules/react-bootstrap/FormContext.js":
false,

/***/ "./node_modules/react-bootstrap/FormControl.js":
false,

/***/ "./node_modules/react-bootstrap/InputGroup.js":
false,

/***/ "./node_modules/react-bootstrap/NavContext.js":
false,

/***/ "./node_modules/react-bootstrap/NavbarContext.js":
false,

/***/ "./node_modules/react-bootstrap/SafeAnchor.js":
false,

/***/ "./node_modules/react-bootstrap/SelectableContext.js":
false,

/***/ "./node_modules/react-bootstrap/ThemeProvider.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/react-bootstrap/utils/createChainedFunction.js":
false,

/***/ "./node_modules/react-bootstrap/utils/createWithBsPrefix.js":
false

})
//# sourceMappingURL=users.js.22214d6a27035e591558.hot-update.js.map