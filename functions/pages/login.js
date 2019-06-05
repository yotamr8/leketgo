"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("../statics/styles.scss");

var _reactRedux = require("react-redux");

var _firebaseConfig = require("../config/firebaseConfig");

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

var _Header = require("../components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _router = require("next/router");

var _router2 = _interopRequireDefault(_router);

var _checkAuth = require("../dbActions/checkAuth");

var _checkAuth2 = _interopRequireDefault(_checkAuth);

var _loading = require("./loading");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            email: '',
            password: ''
        }, _this.handleChange = function (e) {
            _this.setState(_defineProperty({}, e.target.id, e.target.value));
        }, _this.handleSubmit = function (e) {
            var db = _firebaseConfig2.default.firestore();
            _firebaseConfig2.default.auth().signInWithEmailAndPassword(_this.state.email, _this.state.password).then(function (user) {
                db.collection("users").doc(user.user.uid).get().then(function (doc) {
                    _router2.default.push('/');
                });
            }).catch(function (err) {
                _this.props.dispatch({ type: 'LOGIN_ERR', msg: err.message });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Login, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            if (!this.props.authChecked) (0, _checkAuth2.default)(this.props.dispatch);
        }
    }, {
        key: "render",
        value: function render() {
            console.log(this.props);
            if (!this.props.authChecked) {
                return _react2.default.createElement(_loading2.default, null);
            }
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Header2.default, { isLogin: true }),
                _react2.default.createElement(
                    "main",
                    { className: "m-2", style: { paddingBottom: '3rem' } },
                    _react2.default.createElement(
                        "div",
                        { className: "card" },
                        _react2.default.createElement(
                            "h5",
                            { className: "card-header" },
                            "\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA"
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "card-body" },
                            _react2.default.createElement(
                                "h5",
                                { className: "card-title" },
                                "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC\u05DC\u05E7\u05D8\u05BEnight!"
                            ),
                            _react2.default.createElement(
                                "form",
                                null,
                                _react2.default.createElement(
                                    "div",
                                    { className: "form-group" },
                                    _react2.default.createElement(
                                        "label",
                                        { htmlFor: "email" },
                                        "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9"
                                    ),
                                    _react2.default.createElement("input", { type: "email", className: "form-control", id: "email", "aria-describedby": "emailHelp", onChange: this.handleChange })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "form-group" },
                                    _react2.default.createElement(
                                        "label",
                                        { htmlFor: "password" },
                                        "\u05E1\u05D9\u05E1\u05DE\u05D4"
                                    ),
                                    _react2.default.createElement("input", { type: "password", className: "form-control", id: "password", onChange: this.handleChange })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "custom-control custom-checkbox" },
                                    _react2.default.createElement("input", { type: "checkbox", className: "custom-control-input", id: "customCheck3" }),
                                    _react2.default.createElement(
                                        "label",
                                        { className: "custom-control-label", htmlFor: "customCheck3" },
                                        "\u05D6\u05DB\u05E8\u05D5\u05E0\u05D9"
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    "\u05E9\u05DB\u05D7\u05EA\u05D9 \u05E1\u05D9\u05E1\u05DE\u05D4"
                                )
                            ),
                            _react2.default.createElement(
                                "a",
                                { role: "button", onClick: this.handleSubmit, className: "mt-2 btn btn-primary" },
                                "\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { style: { color: 'red' } },
                        this.props.loginErr ? _react2.default.createElement(
                            "h3",
                            null,
                            this.props.loginErr
                        ) : null
                    )
                )
            );
        }
    }]);

    return Login;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(Login);