"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getAllRegionTasks;

var _firebaseConfig = require("../config/firebaseConfig");

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAllRegionTasks(dispatch, region) {
    var db = _firebaseConfig2.default.firestore();
    var tasks = [];
    db.collection("tasks").where("region", "==", region).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (task) {
            tasks.push(_extends({}, task.data, { id: task.id }));
        });
        dispatch({ type: 'GETALLREGIONTASKS', tasks: tasks });
    });
}