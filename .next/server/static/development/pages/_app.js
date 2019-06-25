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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ModalBlock.js":
/*!**********************************!*\
  !*** ./components/ModalBlock.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _dbActions_setUndoTask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dbActions/setUndoTask */ "./dbActions/setUndoTask.js");
/* harmony import */ var _dbActions_refresh4User__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dbActions/refresh4User */ "./dbActions/refresh4User.js");
/* harmony import */ var _dbActions_setTaskReport__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../dbActions/setTaskReport */ "./dbActions/setTaskReport.js");
/* harmony import */ var _dbActions_getTaskReports__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dbActions/getTaskReports */ "./dbActions/getTaskReports.js");
/* harmony import */ var _dbActions_setCollected__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../dbActions/setCollected */ "./dbActions/setCollected.js");
/* harmony import */ var _dbActions_addTask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dbActions/addTask */ "./dbActions/addTask.js");
/* harmony import */ var _dbActions_editTask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../dbActions/editTask */ "./dbActions/editTask.js");
/* harmony import */ var _dbActions_deleteTask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../dbActions/deleteTask */ "./dbActions/deleteTask.js");
/* harmony import */ var _dbActions_addUser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../dbActions/addUser */ "./dbActions/addUser.js");
/* harmony import */ var _dbActions_editUser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../dbActions/editUser */ "./dbActions/editUser.js");
/* harmony import */ var _dbActions_editUserAuth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../dbActions/editUserAuth */ "./dbActions/editUserAuth.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! xlsx */ "xlsx");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_24__);









var _jsxFileName = "C:\\Users\\mwilchek\\Documents\\GitHub\\LeketGo\\components\\ModalBlock.js";

/* ModalBlock
 * This component is responsible for any modal window in the app,
 * whether if it's a simple confirmation for an action or an entire
 * form for creating or editing an entry.
 * Each modal differs from the other by it's "message", therefor each
 * message has its own code name, as seen below.
 */
















var initialState = {
  mainCourseQ: 0,
  sideCourseQ: 0,
  pastriesQ: 0,
  pastriesS: "",
  breadQ: 0,
  breadS: "",
  startDate: new Date(),
  nonCollectedReason: "",
  date: null,
  time: null,
  city: "",
  address: "",
  name: "",
  contact: "",
  contactNumber: "",
  comment: "",
  phone: "",
  email: "",
  tz: "",
  firstName: "",
  lastName: "",
  region: "",
  password: ""
};

var ModalBlock =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ModalBlock, _React$Component);

  function ModalBlock(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ModalBlock);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ModalBlock).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (e) {
      /* This method is only relevant
         to the REPORT_FILL modal */
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.id, e.target.value));
    });

    _this.state = initialState;
    /* The ModalBlock state properties are only
        relevant to the REPORT_FILL modal */

    _this.dateHandleChange = _this.dateHandleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ModalBlock, [{
    key: "resetState",
    value: function resetState() {
      /* This method is only relevant
         to the REPORT_FILL modal */
      this.setState(initialState);
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
    key: "exportTasksXcell",
    value: function exportTasksXcell() {
      var _this2 = this;

      // TODO decide if this line should stay also
      var rows = [_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.props.regionalTasks[0])];
      this.props.regionalTasks.forEach(function (task) {
        var taskRow = [];

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_this2.props.regionalTasks[0]).forEach(function (key) {
          taskRow.push(task[key]);
        });

        rows.push(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(taskRow));
      });
      var wb = xlsx__WEBPACK_IMPORTED_MODULE_24___default.a.utils.book_new();
      var wsAll = xlsx__WEBPACK_IMPORTED_MODULE_24___default.a.utils.aoa_to_sheet(rows);
      xlsx__WEBPACK_IMPORTED_MODULE_24___default.a.utils.book_append_sheet(wb, wsAll, "All Tasks");
      xlsx__WEBPACK_IMPORTED_MODULE_24___default.a.writeFile(wb, "LeketTasks.xlsx");
    }
  }, {
    key: "exportUsersXcell",
    value: function exportUsersXcell() {
      var _this3 = this;

      // TODO decide if this line should stay.
      var rows = [_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.props.users[0])];
      this.props.users.forEach(function (user) {
        var userRow = [];

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_this3.props.users[0]).forEach(function (key) {
          userRow.push(user[key]);
        });

        rows.push(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(userRow));
      });
      var wb = xlsx__WEBPACK_IMPORTED_MODULE_24___default.a.utils.book_new();
      var wsAll = xlsx__WEBPACK_IMPORTED_MODULE_24___default.a.utils.aoa_to_sheet(rows);
      xlsx__WEBPACK_IMPORTED_MODULE_24___default.a.utils.book_append_sheet(wb, wsAll, "All Users");
      xlsx__WEBPACK_IMPORTED_MODULE_24___default.a.writeFile(wb, "LeketUsers.xlsx");
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
          reportComment: this.state.comment,
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

        Object(_dbActions_setTaskReport__WEBPACK_IMPORTED_MODULE_15__["default"])(this.props, this.props.modal.entries.id, data);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

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
       * 
       * ATTENTION: In switch-case, curly braces are usually not needed.
       *            However, when declaring variables inside a case, you should
       *            Use a 'let' declaration and wrap the case inside a block,
       *            as seen in a few of the cases below. DO NOT REMOVE THEM. 
       */
      var modal = this.props.modal; // Just for keeping things shorter

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
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            },
            __self: this
          }, "\u05D7\u05DC\u05E7 \u05DE\u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D1\u05D7\u05E8\u05EA \u05E9\u05D5\u05D1\u05E6\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4, \u05D5\u05D7\u05DC\u05E7 \u05DC\u05D0! \u05E0\u05D9\u05EA\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA \u05DC\u05D0\u05D9\u05DC\u05D5 \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D5\u05D1\u05E6\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: "assigned-tasks",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
            onClick: function onClick() {
              return _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            },
            __self: this
          }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD")), ".");
          buttons = [{
            onClick: function onClick() {
              return _this4.props.dispatch({
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
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            },
            __self: this
          }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(modal.entries).length, " \u05E9\u05D9\u05D1\u05D5\u05E5 \u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E0\u05DB\u05E9\u05DC! \u05D0\u05E0\u05D0 \u05E0\u05E1\u05D4 \u05DC\u05D4\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9\u05DD.");
          buttons = [{
            onClick: function onClick() {
              return _this4.props.dispatch({
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
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(modal.entries).length, "                     \u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D5\u05D1\u05E6\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4! \u05E0\u05D9\u05EA\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05EA \u05DB\u05DC \u05D4\u05E9\u05D9\u05D1\u05D5\u05E6\u05D9\u05DD \u05E9\u05DC\u05DA \u05D1\u05E2\u05DE\u05D5\u05D3 ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: "assigned-tasks",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
            onClick: function onClick() {
              return _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD")), ".");
          buttons = [{
            onClick: function onClick() {
              return _this4.props.dispatch({
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
              return _this4.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'REPORT_FILL',
                entries: modal.entries
              });
            },
            variant: 'primary',
            text: 'דיווח'
          }, {
            onClick: function onClick() {
              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });

              Object(_dbActions_setCollected__WEBPACK_IMPORTED_MODULE_17__["default"])(modal.entries.id);
              Object(_dbActions_refresh4User__WEBPACK_IMPORTED_MODULE_14__["default"])(_this4.props.dispatch, _this4.props.userData.region, _this4.props.userData.uid); //TODO put async in dbAction
            },
            variant: 'secondary',
            text: 'מאוחר יותר'
          }, {
            onClick: function onClick() {
              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'ביטול פעולה'
          }];
          break;

        case 'REPORT_FILL':
          /* Form for filling a task report. */
          title = 'משוב על איסוף שבוצע';
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 266
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 267
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 268
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            },
            __self: this
          }, "\u05E2\u05D9\u05E7\u05E8\u05D9\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 270
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
            id: "mainCourseQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 271
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"].Append, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 275
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"].Text, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 276
            },
            __self: this
          }, "\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 281
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 282
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 283
            },
            __self: this
          }, "\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 284
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
            id: "sideCourseQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 285
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"].Append, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 289
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"].Text, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 290
            },
            __self: this
          }, "\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 296
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297
            },
            __self: this
          }, "\u05DE\u05D0\u05E4\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 298
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
            id: "pastriesQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 299
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            as: "select",
            id: "pastriesS",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 303
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 306
            },
            __self: this
          }, "\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 308
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 313
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 314
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 315
            },
            __self: this
          }, "\u05DC\u05D7\u05DD"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 316
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
            id: "breadQ",
            onChange: this.handleChange,
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 317
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            as: "select",
            id: "breadS",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 321
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 323
            },
            __self: this
          }, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 324
            },
            __self: this
          }, "\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 325
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 326
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05DD"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 331
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 332
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 333
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            as: "textarea",
            rows: "3",
            id: "comment",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 334
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              _this4.verifyValuesForReport(modal);

              _this4.resetState();

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              _this4.resetState();

              _this4.props.dispatch({
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
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 363
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 364
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 365
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 366
            },
            __self: this
          }, "\u05DE\u05D3\u05D5\u05E2 \u05DC\u05D0 \u05D1\u05D5\u05E6\u05E2 \u05D4\u05D0\u05D9\u05E1\u05D5\u05E3?"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            as: "select",
            id: "nonCollectedReason",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 367
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 368
            },
            __self: this
          }, "\u05D1\u05D7\u05E8 \u05E1\u05D9\u05D1\u05D4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 369
            },
            __self: this
          }, "\u05DC\u05D0 \u05E0\u05D5\u05EA\u05E8 \u05DE\u05D6\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 370
            },
            __self: this
          }, "\u05DC\u05D0 \u05E0\u05E2\u05E0\u05D9\u05EA\u05D9"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 371
            },
            __self: this
          }, "\u05E1\u05D9\u05D1\u05D4 \u05D0\u05D7\u05E8\u05EA")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 375
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 376
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 377
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            as: "textarea",
            rows: "3",
            id: "comment",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 378
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              var data = {
                reportFilled: true,
                reportFieldNum: 0,
                reportComment: _this4.state.nonCollectedReason + ' - ' + _this4.state.comment,
                collected: true
              };
              Object(_dbActions_setTaskReport__WEBPACK_IMPORTED_MODULE_15__["default"])(_this4.props, _this4.props.modal.entries.id, data);

              _this4.resetState();

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              return _this4.props.dispatch({
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
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 409
            },
            __self: this
          }, modal.entries.notes);
          buttons = [{
            onClick: function onClick() {
              return _this4.props.dispatch({
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
              Object(_dbActions_setUndoTask__WEBPACK_IMPORTED_MODULE_13__["default"])(modal.entries.id);

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });

              Object(_dbActions_refresh4User__WEBPACK_IMPORTED_MODULE_14__["default"])(_this4.props.dispatch, _this4.props.userData.region, _this4.props.userData.uid); //TODO put async in dbAction
            },
            variant: 'danger',
            text: 'הסרה'
          }, {
            onClick: function onClick() {
              return _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'REMOVE_TASK':
          title = 'מחיקת משימה';
          body = 'לחיצה על "מחיקה", תמחוק את המשימה לצמיתות.';
          buttons = [{
            onClick: function onClick() {
              Object(_dbActions_deleteTask__WEBPACK_IMPORTED_MODULE_20__["default"])(_this4.props, modal.entries.id);

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'danger',
            text: 'מחיקה'
          }, {
            onClick: function onClick() {
              return _this4.props.dispatch({
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
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 459
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 460
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 461
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 462
            },
            __self: this
          }, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            id: "firstName",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 463
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 466
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 467
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 468
            },
            __self: this
          }, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            id: "lastName",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 469
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 472
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 473
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 474
            },
            __self: this
          }, "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            id: "tz",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 475
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 478
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 479
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 480
            },
            __self: this
          }, "\u05D0\u05D6\u05D5\u05E8 \u05D0\u05D9\u05E1\u05D5\u05E3"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            as: "select",
            id: "region",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 481
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 482
            },
            __self: this
          }, "\u05D1\u05D7\u05E8 \u05D0\u05D6\u05D5\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 483
            },
            __self: this
          }, "\u05E9\u05E8\u05D5\u05DF")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 487
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 488
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 489
            },
            __self: this
          }, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            type: "email",
            id: "email",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 490
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 493
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 494
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 495
            },
            __self: this
          }, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            id: "phone",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 496
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 499
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 500
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 501
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            id: "address",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 502
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 504
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 505
            },
            __self: this
          }, "\u05E2\u05D9\u05E8 \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            id: "city",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 506
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 509
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 510
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 511
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            as: "textarea",
            rows: "3",
            id: "comment",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 512
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              var user = {
                firstName: _this4.state.firstName,
                lastName: _this4.state.lastName,
                tz: _this4.state.tz,
                region: _this4.state.region,
                email: _this4.state.email,
                phone: _this4.state.phone,
                address: _this4.state.address,
                city: _this4.state.city,
                comment: _this4.state.comment,
                disabled: false,
                admin: false
              };
              Object(_dbActions_addUser__WEBPACK_IMPORTED_MODULE_21__["default"])(_this4.props, user);

              _this4.resetState();

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              _this4.resetState();

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'ADD_USER_CSV':
          /* For adding multiple volunteers via uploading a .CSV file (Admins only) */
          title = 'הוספת מתנדבים מקובץ';
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 551
            },
            __self: this
          });
          buttons = [{
            onClick: function onClick() {
              return _this4.props.dispatch({
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

          if (this.state.tz == "" && modal.isOpen) {
            // if it is the first time rendering this form - otherwise goes into infinite loop
            this.setState({
              firstName: user.firstName,
              lastName: user.lastName,
              tz: user.tz,
              region: user.region,
              email: user.email,
              phone: user.phone,
              address: user.address,
              city: user.city,
              comment: user.comment
            });
          }

          title = 'עריכת פרטי מתנדב';
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 577
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 578
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 579
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 580
            },
            __self: this
          }, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            value: this.state.firstName,
            id: "firstName",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 581
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 584
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 585
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 586
            },
            __self: this
          }, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            value: this.state.lastName,
            id: "lastName",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 587
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 590
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 591
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 592
            },
            __self: this
          }, "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            value: this.state.tz,
            id: "tz",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 593
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 596
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 597
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 598
            },
            __self: this
          }, "\u05D0\u05D6\u05D5\u05E8 \u05D0\u05D9\u05E1\u05D5\u05E3"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            as: "select",
            value: this.state.region,
            id: "region",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 599
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 600
            },
            __self: this
          }, "\u05E9\u05E8\u05D5\u05DF")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 604
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 605
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 606
            },
            __self: this
          }, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            type: "email",
            value: this.state.email,
            id: "email",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 607
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 610
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 611
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 612
            },
            __self: this
          }, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            value: this.state.phone,
            id: "phone",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 613
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 616
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 617
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 618
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            value: this.state.address,
            id: "address",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 619
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 621
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 622
            },
            __self: this
          }, "\u05E2\u05D9\u05E8 \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            value: this.state.city,
            id: "city",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 623
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              var changes = {
                firstName: _this4.state.firstName,
                lastName: _this4.state.lastName,
                tz: _this4.state.tz,
                region: _this4.state.region,
                email: _this4.state.email,
                phone: _this4.state.phone,
                address: _this4.state.address,
                city: _this4.state.city,
                comment: _this4.state.comment
              };
              Object(_dbActions_editUser__WEBPACK_IMPORTED_MODULE_22__["default"])(_this4.props, user.uid, changes);

              _this4.resetState();

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              _this4.resetState();

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'REMOVE_USER':
          {
            /* For deleting a user (Admins only) */
            var _user = modal.entries;
            title = 'סגירת חשבון מתנדב';
            body = "\u05E1\u05D2\u05D9\u05E8\u05EA \u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05DE\u05EA\u05E0\u05D3\u05D1 ".concat(_user.firstName, " ").concat(_user.lastName, ": \u05DE\u05EA\u05E0\u05D3\u05D1 \u05E9\u05D9\u05D9\u05E1\u05D2\u05E8 \u05D7\u05E9\u05D1\u05D5\u05E0\u05D5 \u05DC\u05D0 \u05D9\u05D5\u05DB\u05DC \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8. \u05EA\u05D9\u05E2\u05D5\u05D3 \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05E9\u05DC\u05D5 \u05D9\u05D9\u05E9\u05DE\u05E8 \u05D5\u05E0\u05D9\u05EA\u05DF \u05D9\u05D4\u05D9\u05D4 \u05DC\u05D4\u05E4\u05E2\u05D9\u05DC \u05DE\u05D7\u05D3\u05E9 \u05D0\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9.");
            buttons = [{
              onClick: function onClick() {
                var changes = {
                  disabled: true
                };
                Object(_dbActions_editUserAuth__WEBPACK_IMPORTED_MODULE_23__["default"])(_this4.props, _user.uid, changes);
                Object(_dbActions_editUser__WEBPACK_IMPORTED_MODULE_22__["default"])(_this4.props, _user.uid, changes);

                _this4.props.dispatch({
                  type: 'CLOSE_MODAL'
                });
              },
              variant: 'danger',
              text: 'סגירת חשבון'
            }, {
              onClick: function onClick() {
                return _this4.props.dispatch({
                  type: 'CLOSE_MODAL'
                });
              },
              variant: 'secondary',
              text: 'ביטול'
            }];
            break;
          }

        case 'CHANGE_PASSWORD':
          {
            /* For deleting a user (Admins only) */
            var _user2 = modal.entries;
            title = 'שינוי סיסמה למתנדב';
            body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 687
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 688
              },
              __self: this
            }, "\u05D4\u05D9\u05E0\u05DA \u05E2\u05D5\u05DE\u05D3 \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05DC\u05DE\u05EA\u05E0\u05D3\u05D1 ", _user2.firstName, " ", _user2.lastName, ".  \u05D9\u05E9 \u05DC\u05D5\u05D5\u05D3\u05D0 \u05E2\u05DD \u05D4\u05DE\u05EA\u05E0\u05D3\u05D1 \u05E9\u05D4\u05D5\u05D0 \u05DE\u05DB\u05D9\u05E8 \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D4\u05D7\u05D3\u05E9\u05D4."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 689
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 690
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
              as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 691
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 692
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 692
              },
              __self: this
            }, "\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D3\u05E9\u05D4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 692
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
              id: "password",
              onChange: this.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 693
              },
              __self: this
            })))));
            buttons = [{
              onClick: function onClick() {
                var changes = {
                  password: _this4.state.password
                };
                Object(_dbActions_editUserAuth__WEBPACK_IMPORTED_MODULE_23__["default"])(_this4.props, _user2.uid, changes);

                _this4.resetState();

                _this4.props.dispatch({
                  type: 'CLOSE_MODAL'
                });
              },
              variant: 'danger',
              text: 'איפוס סיסמה'
            }, {
              onClick: function onClick() {
                _this4.resetState();

                _this4.props.dispatch({
                  type: 'CLOSE_MODAL'
                });
              },
              variant: 'secondary',
              text: 'ביטול'
            }];
            break;
          }

        case 'ADD_TASK':
          /* For adding a task (Admins only) */
          title = 'הוספת איסוף';
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 724
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 725
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 726
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 727
            },
            __self: this
          }, "\u05EA\u05D0\u05E8\u05D9\u05DA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 727
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
            type: "date",
            id: "date",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 728
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 731
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 732
            },
            __self: this
          }, "\u05E9\u05E2\u05D4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 732
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
            pattern: "[0-9]{2}:[0-9]{2}",
            type: "time",
            id: "time",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 733
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 737
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 738
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 739
            },
            __self: this
          }, "\u05E2\u05D9\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            id: "city",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 740
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 742
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 743
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            id: "address",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 744
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 747
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 748
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 749
            },
            __self: this
          }, "\u05E1\u05E4\u05E7"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            id: "name",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 750
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 753
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 754
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 755
            },
            __self: this
          }, "\u05E9\u05DD \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            id: "contact",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 756
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 758
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 759
            },
            __self: this
          }, "\u05D8\u05DC\u05E4\u05D5\u05DF \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            id: "contactNumber",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 760
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 763
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 764
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 765
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            as: "textarea",
            rows: "3",
            id: "comment",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 766
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              var data = {
                date: _this4.state.date,
                time: _this4.state.time,
                city: _this4.state.city,
                address: _this4.state.address,
                name: _this4.state.name,
                contact: _this4.state.contact,
                contactNumber: _this4.state.contactNumber,
                comment: _this4.state.comment
              };
              Object(_dbActions_addTask__WEBPACK_IMPORTED_MODULE_18__["default"])(_this4.props.dispatch, _this4.props.userData.region, data);

              _this4.resetState();

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'primary',
            text: 'הוספה'
          }, {
            onClick: function onClick() {
              _this4.resetState();

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'EDIT_TASK':
          /* For editnig a task (Admins only) */
          var task = modal.entries;
          var date = task.timestamp.toDate();
          var year = date.getFullYear();
          var month = ('0' + (date.getMonth() + 1)).slice(-2);
          var day = ('0' + date.getDate()).slice(-2);
          var time = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);

          if (this.state.date == null && modal.isOpen) {
            // if it is the first time rendering this form - otherwise goes into infinite loop
            this.setState({
              date: year + '-' + month + '-' + day,
              //`${year}-${month}-${day}`,
              time: time,
              city: task.city,
              address: task.address,
              name: task.name,
              contact: task['contact name'],
              contactNumber: task['contact number'],
              comment: task.comment != null ? task.comment : "" // TODO default comment

            });
          }

          title = 'עריכת איסוף';
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 824
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 825
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 826
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 827
            },
            __self: this
          }, "\u05EA\u05D0\u05E8\u05D9\u05DA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 827
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
            type: "date",
            value: this.state.date,
            id: "date",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 828
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 831
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 832
            },
            __self: this
          }, "\u05E9\u05E2\u05D4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 832
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
            pattern: "[0-9]{2}:[0-9]{2}",
            type: "time",
            value: this.state.time,
            id: "time",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 833
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 837
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 838
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 839
            },
            __self: this
          }, "\u05E2\u05D9\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            value: this.state.city,
            id: "city",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 840
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 842
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 843
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            value: this.state.address,
            id: "address",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 844
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 847
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 848
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 849
            },
            __self: this
          }, "\u05E1\u05E4\u05E7"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            value: this.state.name,
            id: "name",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 850
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 853
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 854
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 855
            },
            __self: this
          }, "\u05E9\u05DD \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            value: this.state.contact,
            id: "contact",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 856
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 858
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 859
            },
            __self: this
          }, "\u05D8\u05DC\u05E4\u05D5\u05DF \u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            value: this.state.contactNumber,
            id: "contactNumber",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 860
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Row, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 863
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 864
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 865
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"].Control, {
            as: "textarea",
            value: this.state.comment,
            rows: "3",
            id: "comment",
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 866
            },
            __self: this
          }))));
          buttons = [{
            onClick: function onClick() {
              var data = {
                date: _this4.state.date,
                time: _this4.state.time,
                city: _this4.state.city,
                address: _this4.state.address,
                name: _this4.state.name,
                contact: _this4.state.contact,
                contactNumber: _this4.state.contactNumber,
                comment: _this4.state.comment
              };
              Object(_dbActions_editTask__WEBPACK_IMPORTED_MODULE_19__["default"])(_this4.props.dispatch, modal.entries.region, modal.entries.id, data);

              _this4.resetState();

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'primary',
            text: 'עריכה'
          }, {
            onClick: function onClick() {
              _this4.resetState();

              _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'ביטול'
          }];
          break;

        /*  case 'ADD_TASK_CSV':                            TODO remove?               
              title = 'הוספת איסופים מקובץ';
              body = <span></span>;
              buttons = [
                  {
                      onClick: () => this.props.dispatch({ type: 'CLOSE_MODAL' }),
                      variant: 'secondary',
                      text: 'סגירה'
                  }];
              break;*/
        // Why is it called csv if it exports to xlsx?

        case 'EXPORT_TASK_CSV':
          /* For exporting reports (Admins only) */
          title = 'ייצוא דוח';
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 915
            },
            __self: this
          }, "\u05DC\u05D7\u05E5 \u05DB\u05D3\u05D9 \u05DC\u05D9\u05D9\u05E6\u05D0 \u05D3\u05D5\u05D7.");
          buttons = [{
            onClick: function onClick() {
              return _this4.exportTasksXcell();
            },
            variant: 'primary',
            text: 'ייצא דוח'
          }, {
            onClick: function onClick() {
              return _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'EXPORT_USER_CSV':
          title = 'ייצוא דוח';
          body = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 934
            },
            __self: this
          }, "\u05DC\u05D7\u05E5 \u05DB\u05D3\u05D9 \u05DC\u05D9\u05D9\u05E6\u05D0 \u05D3\u05D5\u05D7.");
          buttons = [{
            onClick: function onClick() {
              return _this4.exportUsersXcell();
            },
            variant: 'primary',
            text: 'ייצא דוח'
          }, {
            onClick: function onClick() {
              return _this4.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            variant: 'secondary',
            text: 'סגירה'
          }];
          break;
      }

      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
        show: modal.isOpen,
        onHide: function onHide() {
          _this4.resetState();

          _this4.props.dispatch({
            type: 'CLOSE_MODAL'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 953
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"].Header, {
        closeButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 958
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"].Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 959
        },
        __self: this
      }, title)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 961
        },
        __self: this
      }, body), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"].Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 964
        },
        __self: this
      }, buttons.map(function (button) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          key: button.text,
          variant: button.variant,
          onClick: button.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 967
          },
          __self: this
        }, button.text);
      })));
    }
  }]);

  return ModalBlock;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function (state) {
  return state;
})(ModalBlock));

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

/***/ "./dbActions/addTask.js":
/*!******************************!*\
  !*** ./dbActions/addTask.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addTask; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _getAllRegionTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAllRegionTasks */ "./dbActions/getAllRegionTasks.js");


function addTask(dispatch, region, data) {
  // TODO verify values exist before trying to create timestamp or item in collection
  var taskCollection = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('tasks');
  var timeStampCreator = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firebase_.firestore.Timestamp;
  var timeStamp = timeStampCreator.fromDate(new Date(data.date + 'T' + data.time));
  taskCollection.doc().set({
    // generates unique id
    name: data.name,
    timestamp: timeStamp,
    city: data.city,
    address: data.address,
    "contact number": data.contactNumber,
    "contact name": data.contact,
    notes: data.comment,
    region: region,
    volunteerUid: null,
    reportFilled: false,
    collected: false
  });
  console.log("added succesfully"); //  TODO dispatch modal

  Object(_getAllRegionTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(dispatch, region); // refresh page data
}

/***/ }),

/***/ "./dbActions/addUser.js":
/*!******************************!*\
  !*** ./dbActions/addUser.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addUser; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _getAllUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAllUsers */ "./dbActions/getAllUsers.js");


function addUser(props, user) {
  // check if email already exists in authentication system
  var addUserFunc = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].functions().httpsCallable('addUser');
  addUserFunc(user).then(function (result) {
    console.log(result);
    var userCollection = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('users');
    userCollection.doc(result.data.uid).set(user).then(function () {
      Object(_getAllUsers__WEBPACK_IMPORTED_MODULE_1__["default"])(props.dispatch); // refresh
      // TODO modal success info
    });
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

/***/ "./dbActions/deleteTask.js":
/*!*********************************!*\
  !*** ./dbActions/deleteTask.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setTaskReport; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _getAllRegionTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAllRegionTasks */ "./dbActions/getAllRegionTasks.js");


function setTaskReport(props, taskID) {
  var taskCollection = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('tasks');
  taskCollection.doc(taskID).delete().then(function () {
    console.log("Document successfully deleted!");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  }); //  TODO dispatch modal

  Object(_getAllRegionTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(props.dispatch, props.userData.region); // refresh page data
}

/***/ }),

/***/ "./dbActions/editTask.js":
/*!*******************************!*\
  !*** ./dbActions/editTask.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return editTask; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _getAllRegionTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAllRegionTasks */ "./dbActions/getAllRegionTasks.js");


function editTask(dispatch, region, taskID, data) {
  // TODO verify values exist before trying to create timestamp or item in collection
  var taskCollection = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('tasks');
  var timeStampCreator = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firebase_.firestore.Timestamp;
  var timeStamp = timeStampCreator.fromDate(new Date(data.date + 'T' + data.time));
  taskCollection.doc(taskID).set({
    name: data.name,
    timestamp: timeStamp,
    city: data.city,
    address: data.address,
    "contact number": data.contactNumber,
    "contact name": data.contact,
    notes: data.comment
  }, {
    merge: true
  }).then(console.log("edited succesfully")); //  TODO dispatch modal

  Object(_getAllRegionTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(dispatch, region); // refresh page data
}

/***/ }),

/***/ "./dbActions/editUser.js":
/*!*******************************!*\
  !*** ./dbActions/editUser.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return editUser; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _getAllUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAllUsers */ "./dbActions/getAllUsers.js");


function editUser(props, uid, changes) {
  var userCollection = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('users');
  userCollection.doc(uid).set(changes, {
    merge: true
  }).then(function () {
    Object(_getAllUsers__WEBPACK_IMPORTED_MODULE_1__["default"])(props.dispatch); // refresh
    // TODO modal success info
  });
}

/***/ }),

/***/ "./dbActions/editUserAuth.js":
/*!***********************************!*\
  !*** ./dbActions/editUserAuth.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return editUserAuth; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _getAllUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAllUsers */ "./dbActions/getAllUsers.js");


function editUserAuth(props, uid, changes) {
  var updateUserFunc = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].functions().httpsCallable('updateUser');
  var data = {
    uid: uid,
    changes: changes
  };
  updateUserFunc(data).then(function (result) {
    Object(_getAllUsers__WEBPACK_IMPORTED_MODULE_1__["default"])(props.dispatch); // refresh        

    console.log(result);
  });
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

/***/ "./dbActions/getHistory.js":
/*!*********************************!*\
  !*** ./dbActions/getHistory.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHistory; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dates */ "./dbActions/dates.js");


function getHistory(dispatch, uid) {
  var db = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
  db.collection("tasks").where("volunteerUid", "==", uid).get().then(function (querySnapshot) {
    var tasks = [];
    querySnapshot.forEach(function (doc) {
      var task = doc.data();
      task.id = doc.id;
      tasks.push(task);
    });
    dispatch({
      type: 'HISTORYTASKS',
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
/* harmony import */ var _dbActions_getHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dbActions/getHistory */ "./dbActions/getHistory.js");




function refresh4User(dispatch, region, uid) {
  Object(_dbActions_getUnassignedTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(dispatch, region);
  Object(_dbActions_getAssignedTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(dispatch, uid);
  Object(_dbActions_getTaskReports__WEBPACK_IMPORTED_MODULE_2__["default"])(dispatch, uid);
  Object(_dbActions_getHistory__WEBPACK_IMPORTED_MODULE_3__["default"])(dispatch, uid);
}

/***/ }),

/***/ "./dbActions/setCollected.js":
/*!***********************************!*\
  !*** ./dbActions/setCollected.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setTaskCollected; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");

function setTaskCollected(taskID) {
  var db = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
  db.collection("tasks").doc(taskID).set({
    collected: true
  }, {
    merge: true
  }).then(console.log("task set to collected."));
}

/***/ }),

/***/ "./dbActions/setTaskReport.js":
/*!************************************!*\
  !*** ./dbActions/setTaskReport.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setTaskReport; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _refresh4User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh4User */ "./dbActions/refresh4User.js");


function setTaskReport(props, taskID, data) {
  var db = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
  console.log(taskID, data); // bug with hebrew

  console.log(data);
  db.collection("tasks").doc(taskID).set(data, {
    merge: true
  }).then(function () {
    return Object(_refresh4User__WEBPACK_IMPORTED_MODULE_1__["default"])(props.dispatch, props.userData.region, props.userData.uid);
  });
}

/***/ }),

/***/ "./dbActions/setUndoTask.js":
/*!**********************************!*\
  !*** ./dbActions/setUndoTask.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setUndoTask; });
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");

function setUndoTask(taskID) {
  var db = _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
  db.collection("tasks").doc(taskID).set({
    volunteerUid: null
  }, {
    merge: true
  }).then(console.log("undo success"));
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

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

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

var router_1 = __webpack_require__(/*! next/router */ "next/router");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_ModalBlock_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ModalBlock.js */ "./components/ModalBlock.js");









var _jsxFileName = "C:\\Users\\mwilchek\\Documents\\GitHub\\LeketGo\\pages\\_app.js";







var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'AUTHCHECKED':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        authChecked: true
      });
      break;

    case 'UNASSIGNEDTASKS':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        unassignedTasks: action.tasks
      });
      break;

    case 'ASSIGNEDTASKS':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        assignedTasks: action.tasks
      });
      break;

    case 'TASKREPORTS':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        taskReports: action.tasks
      });
      break;

    case 'LOGIN':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        isLoggedIn: true,
        loginErr: false,
        userData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, action.user, {
          uid: action.uid
        })
      });
      console.log("logged in store");
      break;

    case 'LOGIN_ERR':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        isLoggedIn: false,
        loginErr: action.msg
      });
      break;

    case 'LOGOUT':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        isLoggedIn: false,
        userData: {},
        authChecked: false,
        loginErr: false,
        modal: {
          isOpen: false
        },
        unassignedTasks: [],
        assignedTasks: [],
        taskReports: [],
        regionalTasks: [],
        users: []
      });
      break;

    case 'GETALLUSERS':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        users: action.users
      });
      break;

    case 'HISTORYTASKS':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        historyTasks: action.tasks
      });
      break;

    case 'GETALLREGIONTASKS':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        regionalTasks: action.tasks
      });
      break;

    case 'OPEN_MODAL':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        modal: {
          isOpen: true,
          msg: action.msg,
          entries: action.entries
        }
      });
      break;

    case 'CLOSE_MODAL':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        modal: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state.modal, {
          isOpen: false
        })
      });

    case 'TASK_LIST_VIEW':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        tasksCardView: false
      });

    case 'TASK_CARDS_VIEW':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        tasksCardView: true
      });

    default:
      return state;
  }
};

var initialState = {
  authChecked: false,
  tasksCardView: true,
  loginErr: false,
  isLoggedIn: false,
  userData: {},
  modal: {
    isOpen: false
  },
  unassignedTasks: [],
  assignedTasks: [],
  taskReports: [],
  regionalTasks: [],
  historyTasks: [],
  users: []
};

var makeStore = function makeStore(initialState, options) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_10__["createStore"])(reducer, initialState);
};

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ModalBlock_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_12___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13___default()(makeStore)(MyApp));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

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

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "xlsx":
/*!***********************!*\
  !*** external "xlsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xlsx");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map