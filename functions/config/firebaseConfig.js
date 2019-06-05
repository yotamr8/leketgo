"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _firebase = require("firebase");

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var firebaseConfig = {
    apiKey: "AIzaSyAvu90OSR5YeQ4JSH61gerVvwLJZm64ADQ",
    authDomain: "leketgo.firebaseapp.com",
    databaseURL: "https://leketgo.firebaseio.com",
    projectId: "leketgo",
    storageBucket: "leketgo.appspot.com",
    messagingSenderId: "427584696273",
    appId: "1:427584696273:web:286a00c4ddae79ec"
};
// Initialize Firebase
var fire = !_firebase2.default.apps.length ? _firebase2.default.initializeApp(firebaseConfig) : _firebase2.default.app();

exports.default = fire;