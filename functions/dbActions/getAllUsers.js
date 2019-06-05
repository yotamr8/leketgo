'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getAllUsers;

var _firebaseConfig = require('../config/firebaseConfig');

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAllUsers(dispatch) {
    var db = _firebaseConfig2.default.firestore();
    var users = [];
    db.collection("users").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (user) {
            users.push(_extends({}, user.data, { uid: user.id }));
        });
        dispatch({ type: 'GETALLUSERS', users: users });
    });
}