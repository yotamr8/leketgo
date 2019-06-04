webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/ModalBlock.js":
/*!**********************************!*\
  !*** ./components/ModalBlock.js ***!
  \**********************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _dbActions_setUndoTask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dbActions/setUndoTask */ "./dbActions/setUndoTask.js");
/* harmony import */ var _dbActions_refresh4User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dbActions/refresh4User */ "./dbActions/refresh4User.js");
/* harmony import */ var _dbActions_setTaskReport__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dbActions/setTaskReport */ "./dbActions/setTaskReport.js");
/* harmony import */ var _dbActions_getTaskReports__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../dbActions/getTaskReports */ "./dbActions/getTaskReports.js");
/* harmony import */ var _dbActions_setCollected__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dbActions/setCollected */ "./dbActions/setCollected.js");








var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\components\\ModalBlock.js";










var ModalBlock =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ModalBlock, _React$Component);

  function ModalBlock(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ModalBlock);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ModalBlock).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (e) {
      console.log(e.target.id, e.target.value);

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, e.target.id, e.target.value));
    });

    _this.state = {
      mainCourseQ: 0,
      sideCourseQ: 0,
      pastriesQ: 0,
      pastriesS: "",
      breadQ: 0,
      breadS: "",
      formComment: "",
      startDate: new Date()
    };
    _this.dateHandleChange = _this.dateHandleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ModalBlock, [{
    key: "resetState",
    value: function resetState() {
      this.setState({
        mainCourseQ: 0,
        sideCourseQ: 0,
        pastriesQ: 0,
        pastriesS: "",
        breadQ: 0,
        breadS: "",
        formComment: ""
      });
    }
  }, {
    key: "dateHandleChange",
    value: function dateHandleChange(date) {
      this.setState({
        startDate: date
      });
    }
  }, {
    key: "verifyValuesForReport",
    value: function verifyValuesForReport() {
      var isValid = true;
      console.log(this.props.modal.entries.id); // some logic here
      // organize data for db

      if (isValid) {
        var numOfFields = 0;
        var fields = [];

        if (this.state.mainCourseQ > 0) {
          numOfFields++;
          fields.push("mainCourseQ");
        }

        if (this.state.sideCourseQ > 0) {
          numOfFields++;
          fields.push("sideCourseQ");
        }

        if (this.state.pastriesQ > 0) {
          numOfFields++;
          fields.push("pastriesQ");
        }

        if (this.state.breadQ > 0) {
          numOfFields++;
          fields.push("breadQ");
        }

        var data = {
          reportFilled: true,
          reportFieldNum: numOfFields,
          reportComment: this.state.formComment,
          collected: true
        };
        var dic = {
          "mainCourseQ": 'עיקריות',
          "sideCourseQ": 'תוספות',
          "pastriesQ": 'מאפים',
          "breadQ": 'לחם'
        };

        for (var i = 0; i < numOfFields; i++) {
          data["foodDesc" + (i + 1)] = dic[fields[i]];
          data["foodContainerType" + (i + 1)] = fields[i] == "mainCourseQ" || fields[i] == "sideCourseQ" ? 'מיכלים' : fields[i] == "pastriesQ" ? this.state.pastriesS : this.state.breadS;
          data["foodContainerQuantity" + (i + 1)] = this.state[fields[i]];
        }

        Object(_dbActions_setTaskReport__WEBPACK_IMPORTED_MODULE_14__["default"])(this.props.modal.entries.id, data);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var modal = this.props.modal;
      var title = '';
      var body = '';
      var buttons = [];

      switch (modal.msg) {
        case 'ASSIGN_TASKS_MIX':
          title = 'הצלחה חלקית';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, "                   \u05D7\u05DC\u05E7 \u05DE\u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D1\u05D7\u05E8\u05EA \u05E9\u05D5\u05D1\u05E6\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4, \u05D5\u05D7\u05DC\u05E7 \u05DC\u05D0! \u05E0\u05D9\u05EA\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA \u05DC\u05D0\u05D9\u05DC\u05D5 \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D5\u05D1\u05E6\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3 ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "assigned-tasks",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD")), ".");
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'ASSIGN_TASKS_FAILED':
          title = 'כשלון בשיבוץ האיסופים';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(modal.entries).length, "                     \u05E9\u05D9\u05D1\u05D5\u05E5 \u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E0\u05DB\u05E9\u05DC! \u05D0\u05E0\u05D0 \u05E0\u05E1\u05D4 \u05DC\u05D4\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9\u05DD. ");
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'ASSIGN_TASKS_SUCCESS':
          title = 'הצלחה';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(modal.entries).length, "                     \u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D5\u05D1\u05E6\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4! \u05E0\u05D9\u05EA\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05EA \u05DB\u05DC \u05D4\u05E9\u05D9\u05D1\u05D5\u05E6\u05D9\u05DD \u05E9\u05DC\u05DA \u05D1\u05E2\u05DE\u05D5\u05D3 ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "assigned-tasks",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD")), ".");
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'REPORT_FILL':
          title = 'משוב על איסוף שבוצע';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          }, "\u05E2\u05D9\u05E7\u05E8\u05D9\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            id: "mainCourseQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Append, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Text, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            },
            __self: this
          }, "\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }, "\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            id: "sideCourseQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Append, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Text, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, "\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, "\u05DE\u05D0\u05E4\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            id: "pastriesQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "select",
            id: "pastriesS",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, "\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            },
            __self: this
          }, "\u05DC\u05D7\u05DD"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            id: "breadQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "select",
            id: "breadS",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            },
            __self: this
          }, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            },
            __self: this
          }, "\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 195
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "textarea",
            rows: "3",
            id: "formComment",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });

              _this2.verifyValuesForReport(modal);

              _this2.resetState();

              Object(_dbActions_getTaskReports__WEBPACK_IMPORTED_MODULE_15__["default"])(_this2.props.dispatch, _this2.props.userData.uid);
            },
            color: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'REPORT_UNDONE':
          title = 'משוב על איסוף שלא בוצע';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 221
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 222
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }, "\u05DE\u05D3\u05D5\u05E2 \u05DC\u05D0 \u05D1\u05D5\u05E6\u05E2 \u05D4\u05D0\u05D9\u05E1\u05D5\u05E3?"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "select",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }, "\u05DC\u05D0 \u05E0\u05D5\u05EA\u05E8 \u05DE\u05D6\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 227
            },
            __self: this
          }, "\u05DC\u05D0 \u05E0\u05E2\u05E0\u05D9\u05EA\u05D9"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 228
            },
            __self: this
          }, "\u05E1\u05D9\u05D1\u05D4 \u05D0\u05D7\u05E8\u05EA")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 234
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "textarea",
            rows: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 235
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'TASK_NOTES':
          title = 'הערות';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 253
            },
            __self: this
          }, modal.entries.notes);
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'TASK_CANCEL':
          title = 'הסרת שיבוץ';
          body = 'הסרת השיבוץ תחזיר את משימת האיסוף לרשימת המשימות הפנויות.';
          buttons = [{
            onClick: function onClick() {
              Object(_dbActions_setUndoTask__WEBPACK_IMPORTED_MODULE_12__["default"])(modal.entries.id);

              _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });

              Object(_dbActions_refresh4User__WEBPACK_IMPORTED_MODULE_13__["default"])(_this2.props.dispatch, _this2.props.userData.region, _this2.props.userData.uid);
            },
            color: 'danger',
            text: 'הסרה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'EDIT_USER':
          var user = modal.entries;
          title = 'עריכת פרטי מתנדב';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 284
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 285
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 286
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 287
            },
            __self: this
          }, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: user.firstName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 288
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 291
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 292
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 293
            },
            __self: this
          }, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: user.lastName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 294
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 298
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 299
            },
            __self: this
          }, "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: user.tz,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 300
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 303
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 304
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }, "\u05D0\u05D6\u05D5\u05E8 \u05D0\u05D9\u05E1\u05D5\u05E3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "select",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 306
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307
            },
            __self: this
          }, "\u05E8\u05D0\u05E9\u05D5\u05DF \u05DC\u05E6\u05D9\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 308
            },
            __self: this
          }, "\u05E8\u05E2\u05E0\u05E0\u05D4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 309
            },
            __self: this
          }, "\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 313
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 314
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 315
            },
            __self: this
          }, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            type: "email",
            value: user.email,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 316
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 319
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 320
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 321
            },
            __self: this
          }, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            type: "email",
            value: user.phone,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 322
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 325
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicPassword",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 326
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 327
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: user.street,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 328
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicPassword",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 330
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 331
            },
            __self: this
          }, "\u05E2\u05D9\u05E8 \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: user.city,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 332
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'TASK_DONE':
          title = 'האיסוף בוצע';
          body = 'תודה! האיסוף סומן כבוצע. השלב הבא הוא למלא משוב.';
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'REPORT_FILL',
                entries: modal.entries
              });
            },
            color: 'primary',
            text: 'דיווח'
          }, {
            onClick: function onClick() {
              _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });

              Object(_dbActions_setCollected__WEBPACK_IMPORTED_MODULE_16__["default"])(modal.entries.id);
              Object(_dbActions_refresh4User__WEBPACK_IMPORTED_MODULE_13__["default"])(_this2.props.dispatch, _this2.props.userData.region, _this2.props.userData.uid);
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'ADD_USER':
          title = 'הוספת מתנדב';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 372
            },
            __self: this
          });
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'ADD_TASK':
          title = 'הוספת איסוף';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 383
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 384
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 385
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 386
            },
            __self: this
          }, "\u05EA\u05D0\u05E8\u05D9\u05DA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 386
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            type: "date",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 387
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 390
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 391
            },
            __self: this
          }, "\u05E9\u05E2\u05D4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 391
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            pattern: "[0-9]{2}:[0-9]{2}",
            type: "time",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 392
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 396
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 397
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 398
            },
            __self: this
          }, "\u05E2\u05D9\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 399
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 401
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 402
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 403
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 406
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 407
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 408
            },
            __self: this
          }, "\u05E1\u05E4\u05E7"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 409
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 412
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 413
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 414
            },
            __self: this
          }, "\u05E9\u05DD \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 415
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            controlId: "formBasicEmail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 417
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 418
            },
            __self: this
          }, "\u05D8\u05DC\u05E4\u05D5\u05DF \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 419
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'primary',
            text: 'הוספה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'ADD_USER_CSV':
          title = 'הוספת מתנדבים מקובץ';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 437
            },
            __self: this
          });
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'ADD_TASK_CSV':
          title = 'הוספת איסופים מקובץ';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 447
            },
            __self: this
          });
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'EXPORT_TASK_CSV':
          title = 'הוספת איסופים מקובץ';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 457
            },
            __self: this
          });
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
        show: modal.isOpen,
        onHide: function onHide() {
          return _this2.props.dispatch({
            type: 'CLOSE_MODAL'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Header, {
        closeButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, title)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, body), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, buttons.map(function (button) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          key: button.text,
          variant: button.color,
          onClick: button.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 478
          },
          __self: this
        }, button.text);
      })));
    }
  }]);

  return ModalBlock;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(function (state) {
  return state;
})(ModalBlock));

/***/ })

})
//# sourceMappingURL=_app.js.5e4fbb135d0620eae48b.hot-update.js.map