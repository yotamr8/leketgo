webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/myModal.js":
/*!*******************************!*\
  !*** ./components/myModal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Entry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Entry */ "./components/Entry.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");






var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\components\\myModal.js";








var myModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(myModal, _React$Component);

  function myModal(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, myModal);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(myModal).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(myModal, [{
    key: "render",
    value: function render() {
      var _this = this;

      var modal = this.props.modal;
      var title, body, buttons;

      switch (modal.msg) {
        case 'ASSIGN_TASKS_SUCCESS':
          title = 'הצלחה';
          body = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(modal.entries).length, "                     \u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D5\u05D1\u05E6\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4! \u05E0\u05D9\u05EA\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05EA \u05DB\u05DC \u05D4\u05E9\u05D9\u05D1\u05D5\u05E6\u05D9\u05DD \u05E9\u05DC\u05DA \u05D1\u05E2\u05DE\u05D5\u05D3 ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "assigned-tasks",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD")), ".");
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'REPORT_FILL':
          title = 'משוב על איסוף שבוצע';
          body = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "inputGroupSelect01",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, "\u05E2\u05D9\u05E7\u05E8\u05D9\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            class: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            type: "text",
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            class: "form-control",
            id: "basic-url",
            "aria-describedby": "basic-addon3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            class: "input-group-append",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            class: "input-group-text",
            id: "basic-addon3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, "\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "inputGroupSelect01",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, "\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            class: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            type: "text",
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            class: "form-control",
            id: "basic-url",
            "aria-describedby": "basic-addon3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            class: "input-group-append",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            class: "input-group-text",
            id: "basic-addon3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, "\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "inputGroupSelect01",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, "\u05DE\u05D0\u05E4\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            class: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            type: "text",
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            "aria-label": "First name",
            class: "form-control",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
            class: "custom-select",
            id: "inputGroupSelect03",
            "aria-label": "Example select with button addon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            value: "1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, "\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            value: "2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            value: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05DD"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "inputGroupSelect01",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "\u05DC\u05D7\u05DD"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            class: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            type: "text",
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            "aria-label": "First name",
            class: "form-control",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
            class: "custom-select",
            id: "inputGroupSelect03",
            "aria-label": "Example select with button addon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            value: "1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, "\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            value: "2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            value: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05DD"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            class: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "exampleFormControlInput1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, "\u05E2\u05DE\u05D5\u05EA\u05D4"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            type: "email",
            class: "form-control",
            id: "exampleFormControlInput1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            class: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "exampleFormControlTextarea1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
            class: "form-control",
            id: "exampleFormControlTextarea1",
            rows: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          })));
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'REPORT_UNDONE':
          title = 'משוב על איסוף שלא בוצע';
          body = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            class: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, "\u05DE\u05D3\u05D5\u05E2 \u05DC\u05D0 \u05D1\u05D5\u05E6\u05E2 \u05D4\u05D0\u05D9\u05E1\u05D5\u05E3?"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
            class: "form-control",
            id: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          }, "\u05DC\u05D0 \u05E0\u05D5\u05EA\u05E8 \u05DE\u05D6\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, "\u05DC\u05D0 \u05E0\u05E2\u05E0\u05D9\u05EA\u05D9"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, "\u05E1\u05D9\u05D1\u05D4 \u05D0\u05D7\u05E8\u05EA"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            class: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "exampleFormControlTextarea1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
            class: "form-control",
            id: "exampleFormControlTextarea1",
            rows: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          })));
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'TASK_NOTES':
          title = 'הערות';
          body = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }, modal.entries.notes);
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'TASK_CANCEL':
          title = 'הסרת שיבוץ';
          body = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, "...");
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'danger',
            text: 'הסרה'
          }, {
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'EDIT_USER':
          title = 'עריכת פרטי משתמש';
          body = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            class: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            class: "form-control",
            id: "exampleFormControlInput1",
            value: modal.entries.firstName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            class: "form-control",
            id: "exampleFormControlInput1",
            value: modal.entries.lastName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }, "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            type: "email",
            class: "form-control",
            id: "exampleFormControlInput1",
            value: modal.entries.email,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            htmlFor: "exampleFormControlInput1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "input-group-prepend",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "input-group-text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            "aria-label": "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "input-group-prepend",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "input-group-text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, "\u05DE\u05E1\u05E4\u05E8")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            "aria-label": "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "input-group-prepend",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "input-group-text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, "\u05E2\u05D9\u05E8")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            "aria-label": "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            for: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            },
            __self: this
          }, "\u05D0\u05D6\u05D5\u05E8 \u05E9\u05D9\u05D5\u05DA"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
            class: "form-control",
            id: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }, "\u05E8\u05D0\u05E9\u05D5\u05DF \u05DC\u05E6\u05D9\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }, "\u05E8\u05E2\u05E0\u05E0\u05D4"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, "\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1"))));
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'ביטול'
          }];
          break;
      }

      return (// <Modal show={} onHide={this.handleClose}>
        //     <Modal.Header closeButton>
        //         <Modal.Title>{title}</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //     {body}
        //     </Modal.Body>
        //     <Modal.Footer>
        //         {buttons.map((button) => {
        //             return (
        //                 <button type="button" onClick={button.onClick} className={'btn btn-' + button.color} data-dismiss="modal">{button.text}</button>
        //             );
        //         })}
        //     </Modal.Footer>
        // </Modal>
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Dialog, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Header, {
          closeButton: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, "Modal title")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, "Modal body text goes here.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Footer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
          variant: "secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, "Close"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
          variant: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, "Save changes")))
      );
    }
  }]);

  return myModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function (state) {
  return state;
})(myModal));

/***/ })

})
//# sourceMappingURL=_app.js.7a99ff3266d4cecef2d2.hot-update.js.map