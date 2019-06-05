"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setTaskCollected;

var _firebaseConfig = require("../config/firebaseConfig");

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setTaskCollected(taskID) {
    var db = _firebaseConfig2.default.firestore();
    db.collection("tasks").doc(taskID).set({ collected: true }, { merge: true }).then(console.log("task set to collected."));
}