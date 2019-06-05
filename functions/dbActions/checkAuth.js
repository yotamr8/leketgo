'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkAuthAndRefresh;

var _firebaseConfig = require('../config/firebaseConfig');

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

var _refresh4User = require('./refresh4User');

var _refresh4User2 = _interopRequireDefault(_refresh4User);

var _getAllUsers = require('./getAllUsers');

var _getAllUsers2 = _interopRequireDefault(_getAllUsers);

var _getAllRegionTasks = require('./getAllRegionTasks');

var _getAllRegionTasks2 = _interopRequireDefault(_getAllRegionTasks);

var _router = require('next/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkAuthAndRefresh(dispatch) {
    _firebaseConfig2.default.auth().onAuthStateChanged(function (user) {
        var db = _firebaseConfig2.default.firestore();
        console.log(user);
        if (user) {
            db.collection("users").doc(user.uid).get().then(function (doc) {
                dispatch({ type: 'LOGIN', user: doc.data(), uid: user.uid });
                if (doc.data().admin == false) {
                    (0, _refresh4User2.default)(dispatch, doc.data().region, user.uid);
                } else {
                    (0, _getAllUsers2.default)(dispatch);
                    (0, _getAllRegionTasks2.default)(dispatch, doc.data().region);
                }
                dispatch({ type: 'AUTHCHECKED' });
            });
        } else {
            _router2.default.push('/login');
            dispatch({ type: 'AUTHCHECKED' });
        }
    });
}