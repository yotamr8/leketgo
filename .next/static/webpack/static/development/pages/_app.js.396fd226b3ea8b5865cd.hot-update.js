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

/* ModalBlock
 * This component is responsible for any modal window in the app,
 * whether if it's a simple confirmation for an action or an entire
 * form for creating or editing an entry.
 * Each modal differs from the other by it's "message", therefor each
 * message has its own code name, as seen below.
 */










var ModalBlock =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ModalBlock, _React$Component);

  function ModalBlock(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ModalBlock);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ModalBlock).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (e) {
      /* This method is only relevant
         to the REPORT_FILL modal */
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, e.target.id, e.target.value));
    });

    _this.state = {
      /* The ModalBlock state properties are only
         relevant to the REPORT_FILL modal */
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
      /* This method is only relevant
         to the REPORT_FILL modal */
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
      /* This method is only relevant
         to the REPORT_FILL modal */
      this.setState({
        startDate: date
      });
    }
  }, {
    key: "verifyValuesForReport",
    value: function verifyValuesForReport() {
      /* This method is only relevant
         to the REPORT_FILL modal */
      var isValid = true;

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

      /* Each modal window has the same structure:
       * title - The name of the modal, should be descriptive
       * body - The actual message or form of the modal
       * buttons - An array of objects representing the action buttons
       *           at the bottom of the modal. Each object in the array
       *           should have three properties:
       * onClick - The function that would be called upon clicking that button.
       *           Remember! The type of this property is a FUNCTION and not a
       *           function's returned value. i.e. onClick: func() is wrong,
       *           should be () => func() or func without parenthesis.
       * variant - This will determine the visual style of the button.
       *           Should be the name of a Bootstrap's class for a button.
       *           i.e. primary, secondary...
       * text - The text inside the button.
       */
      var modal = this.props.modal;
      var title = '';
      var body = '';
      var buttons = [];

      switch (modal.msg) {
        case 'ASSIGN_TASKS_MIX':
          /* Partial success when assigning tasks.
           * We still need to review this and adjust
           * according to the feedback we received.
           */
          title = 'הצלחה חלקית';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, "\u05D7\u05DC\u05E7 \u05DE\u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D1\u05D7\u05E8\u05EA \u05E9\u05D5\u05D1\u05E6\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4, \u05D5\u05D7\u05DC\u05E7 \u05DC\u05D0! \u05E0\u05D9\u05EA\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA \u05DC\u05D0\u05D9\u05DC\u05D5 \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D5\u05D1\u05E6\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3 ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "assigned-tasks",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
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
              lineNumber: 129
            },
            __self: this
          }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD")), ".");
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'ASSIGN_TASKS_FAILED':
          /* Failure when assigning tasks.
           * We still need to review this and adjust
           * according to the feedback we received.
           */
          title = 'כשלון בשיבוץ האיסופים';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(modal.entries).length, " \u05E9\u05D9\u05D1\u05D5\u05E5 \u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E0\u05DB\u05E9\u05DC! \u05D0\u05E0\u05D0 \u05E0\u05E1\u05D4 \u05DC\u05D4\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9\u05DD.");
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'ASSIGN_TASKS_SUCCESS':
          /* Success when assigning tasks.
           * We still need to review this and adjust
           * according to the feedback we received.
           */
          title = 'הצלחה';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(modal.entries).length, "                     \u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D5\u05D1\u05E6\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4! \u05E0\u05D9\u05EA\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05EA \u05DB\u05DC \u05D4\u05E9\u05D9\u05D1\u05D5\u05E6\u05D9\u05DD \u05E9\u05DC\u05DA \u05D1\u05E2\u05DE\u05D5\u05D3 ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "assigned-tasks",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
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
              lineNumber: 165
            },
            __self: this
          }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD")), ".");
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'TASK_DONE':
          /* For when a volunteer marks an assignment `done` */
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
            variant: 'primary',
            text: 'דיווח'
          }, {
            onClick: function onClick() {
              _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });

              Object(_dbActions_setCollected__WEBPACK_IMPORTED_MODULE_16__["default"])(modal.entries.id);
              Object(_dbActions_refresh4User__WEBPACK_IMPORTED_MODULE_13__["default"])(_this2.props.dispatch, _this2.props.userData.region, _this2.props.userData.uid);
            },
            variant: 'secondary',
            text: 'מאוחר יותר'
          }];
          break;

        case 'REPORT_FILL':
          /* Form for filling a task report. */
          title = 'משוב על איסוף שבוצע';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }, "\u05E2\u05D9\u05E7\u05E8\u05D9\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            id: "mainCourseQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Append, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Text, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          }, "\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 215
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          }, "\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            id: "sideCourseQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Append, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"].Text, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }, "\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 230
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 231
            },
            __self: this
          }, "\u05DE\u05D0\u05E4\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            id: "pastriesQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "select",
            id: "pastriesS",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 237
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 239
            },
            __self: this
          }, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 240
            },
            __self: this
          }, "\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 241
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 242
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 247
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 248
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 249
            },
            __self: this
          }, "\u05DC\u05D7\u05DD"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 250
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            id: "breadQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 251
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "select",
            id: "breadS",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 255
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 257
            },
            __self: this
          }, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 258
            },
            __self: this
          }, "\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 259
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 260
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 265
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 266
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 267
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "textarea",
            rows: "3",
            id: "formComment",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 268
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
            variant: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'REPORT_UNDONE':
          /* Form for when a volunteer reports a missed task */
          title = 'משוב על איסוף שלא בוצע';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 294
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 296
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297
            },
            __self: this
          }, "\u05DE\u05D3\u05D5\u05E2 \u05DC\u05D0 \u05D1\u05D5\u05E6\u05E2 \u05D4\u05D0\u05D9\u05E1\u05D5\u05E3?"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "select",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 298
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 299
            },
            __self: this
          }, "\u05DC\u05D0 \u05E0\u05D5\u05EA\u05E8 \u05DE\u05D6\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 300
            },
            __self: this
          }, "\u05DC\u05D0 \u05E0\u05E2\u05E0\u05D9\u05EA\u05D9"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 301
            },
            __self: this
          }, "\u05E1\u05D9\u05D1\u05D4 \u05D0\u05D7\u05E8\u05EA")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 306
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "textarea",
            rows: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 308
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'TASK_NOTES':
          /* A modal showing extra notes for a certain task */
          title = 'הערות';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 329
            },
            __self: this
          }, modal.entries.notes);
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'TASK_CANCEL':
          /* For when a volunteer wants to unassign a task */
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
            variant: 'danger',
            text: 'הסרה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'ADD_USER':
          /* For adding a volunteer (Admins only) */
          title = 'הוספת מתנדב';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 361
            },
            __self: this
          });
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'ADD_USER_CSV':
          /* For adding multiple volunteers via uploading a .CSV file (Admins only) */
          title = 'הוספת מתנדבים מקובץ';
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
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'EDIT_USER':
          /* For editing volunteer's details (Admins only) */
          var user = modal.entries;
          title = 'עריכת פרטי מתנדב';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 385
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 386
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 387
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 388
            },
            __self: this
          }, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: user.firstName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 389
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 392
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 393
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 394
            },
            __self: this
          }, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: user.lastName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 395
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 398
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 399
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 400
            },
            __self: this
          }, "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: user.tz,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 401
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 404
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 405
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 406
            },
            __self: this
          }, "\u05D0\u05D6\u05D5\u05E8 \u05D0\u05D9\u05E1\u05D5\u05E3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            as: "select",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 407
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 408
            },
            __self: this
          }, "\u05E8\u05D0\u05E9\u05D5\u05DF \u05DC\u05E6\u05D9\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 409
            },
            __self: this
          }, "\u05E8\u05E2\u05E0\u05E0\u05D4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 410
            },
            __self: this
          }, "\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 414
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 415
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 416
            },
            __self: this
          }, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            type: "email",
            value: user.email,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 417
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 420
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 421
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 422
            },
            __self: this
          }, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            type: "email",
            value: user.phone,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 423
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 426
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 427
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 428
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: user.street,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 429
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 431
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 432
            },
            __self: this
          }, "\u05E2\u05D9\u05E8 \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: user.city,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 433
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'ADD_TASK':
          /* For adding a task (Admins only) */
          title = 'הוספת איסוף';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 453
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 454
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 455
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 456
            },
            __self: this
          }, "\u05EA\u05D0\u05E8\u05D9\u05DA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 456
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            type: "date",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 457
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 460
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 461
            },
            __self: this
          }, "\u05E9\u05E2\u05D4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 461
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            pattern: "[0-9]{2}:[0-9]{2}",
            type: "time",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 462
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 466
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 467
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 468
            },
            __self: this
          }, "\u05E2\u05D9\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 469
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 471
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 472
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 473
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 476
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 477
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 478
            },
            __self: this
          }, "\u05E1\u05E4\u05E7"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 479
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 482
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 483
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 484
            },
            __self: this
          }, "\u05E9\u05DD \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 485
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 487
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 488
            },
            __self: this
          }, "\u05D8\u05DC\u05E4\u05D5\u05DF \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 489
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'primary',
            text: 'הוספה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'EDIT_TASK':
          /* For adding a task (Admins only) */
          var task = modal.entries;
          title = 'עריכת איסוף';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 511
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 512
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 513
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 514
            },
            __self: this
          }, "\u05EA\u05D0\u05E8\u05D9\u05DA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 514
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            type: "date",
            value: task.date.getFullYear() + '' + '01-01',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 515
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 518
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 519
            },
            __self: this
          }, "\u05E9\u05E2\u05D4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 519
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
            pattern: "[0-9]{2}:[0-9]{2}",
            type: "time",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 520
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 524
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 525
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 526
            },
            __self: this
          }, "\u05E2\u05D9\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: task.city,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 527
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 529
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 530
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: task.address,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 531
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 534
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 535
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 536
            },
            __self: this
          }, "\u05E1\u05E4\u05E7"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: task.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 537
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 540
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 541
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 542
            },
            __self: this
          }, "\u05E9\u05DD \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: task['contact name'],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 543
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 545
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 546
            },
            __self: this
          }, "\u05D8\u05DC\u05E4\u05D5\u05DF \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
            value: task['contact number'],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 547
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'primary',
            text: 'עריכה'
          }, {
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'ADD_TASK_CSV':
          /* For adding multiple tasks via uploading a .CSV file (Admins only) */
          title = 'הוספת איסופים מקובץ';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 567
            },
            __self: this
          });
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'EXPORT_TASK_CSV':
          /* For exporting reports (Admins only) */
          title = 'ייצוא דוח';
          body = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 578
            },
            __self: this
          });
          buttons = [{
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
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
          lineNumber: 589
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Header, {
        closeButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }, title)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }, body), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"].Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }, buttons.map(function (button) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          key: button.text,
          variant: button.variant,
          onClick: button.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 599
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
//# sourceMappingURL=_app.js.396fd226b3ea8b5865cd.hot-update.js.map