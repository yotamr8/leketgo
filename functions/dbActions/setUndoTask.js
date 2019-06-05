"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setUndoTask;

var _firebaseConfig = require("../config/firebaseConfig");

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setUndoTask(taskID) {
    var db = _firebaseConfig2.default.firestore();
    db.collection("tasks").doc(taskID).set({ volunteerUid: null }, { merge: true }).then(console.log("undo success"));
}