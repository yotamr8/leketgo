"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("../statics/styles.scss");

var _reactRedux = require("react-redux");

var _reactBootstrap = require("react-bootstrap");

var _Header = require("../components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _checkAuth = require("../dbActions/checkAuth");

var _checkAuth2 = _interopRequireDefault(_checkAuth);

var _loading = require("./loading");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Personal_information = function (_Component) {
    _inherits(Personal_information, _Component);

    function Personal_information() {
        var _ref;

        _classCallCheck(this, Personal_information);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Personal_information.__proto__ || Object.getPrototypeOf(Personal_information)).call.apply(_ref, [this].concat(args)));

        _this.state = { validated: false };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Personal_information, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            (0, _checkAuth2.default)(this.props.dispatch);
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            var form = event.currentTarget;

            var formEmail = document.getElementById('formEmail').value;
            console.log(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(formEmail));

            console.log(formEmail);
            if (!this.state.validated) {
                event.preventDefault();
                event.stopPropagation();
            }
            this.setState({ validated: true });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            if (!this.props.authChecked || !this.props.isLoggedIn) {
                return _react2.default.createElement(_loading2.default, null);
            }
            var user = this.props.userData;
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    "main",
                    { className: "m-2", style: { paddingBottom: '3rem' } },
                    _react2.default.createElement(
                        "div",
                        { className: "mt-4 mb-4" },
                        _react2.default.createElement(
                            "h2",
                            null,
                            "\u05E2\u05D3\u05DB\u05D5\u05DF \u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD"
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Form,
                        {
                            noValidate: true,
                            validated: this.state.validated,
                            onSubmit: function onSubmit(e) {
                                return _this2.handleSubmit(e);
                            }
                        },
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: "formFirsName" },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { readOnly: true, defaultValue: user.firstName })
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: "formLastName" },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { readOnly: true, defaultValue: user.lastName })
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: "formTZ" },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA"
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { readOnly: true, defaultValue: user.tz })
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: "formRegion" },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    "\u05D0\u05D6\u05D5\u05E8 \u05D0\u05D9\u05E1\u05D5\u05E3"
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { readOnly: true, defaultValue: user.region })
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: "formEmail" },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9"
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { required: true, type: "email", defaultValue: user.email }),
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Control.Feedback,
                                    { type: "invalid" },
                                    "Please choose an email."
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: "formPhone" },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { required: true, type: "tel", defaultValue: user.phone })
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: "formStreet" },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8"
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { required: true, defaultValue: user.address })
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: "formCity" },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    "\u05E2\u05D9\u05E8 \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD"
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { required: true, defaultValue: user.city })
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "mt-4 mb-4" },
                            _react2.default.createElement(
                                "h2",
                                null,
                                "\u05E9\u05D9\u05E0\u05D5\u05D9 \u05E1\u05D9\u05E1\u05DE\u05D4"
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: "formPassword" },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    "\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D3\u05E9\u05D4"
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { type: "password" })
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: "formValidatePassword" },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    "\u05D5\u05D9\u05D3\u05D5\u05D0 \u05E1\u05D9\u05E1\u05DE\u05D4"
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { type: "password" }),
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Text,
                                    { className: "text-muted" },
                                    "\u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D4\u05D7\u05D3\u05E9\u05D4 \u05E9\u05E0\u05D9\u05EA"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Navbar,
                            { bg: "light", fixed: "bottom" },
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { variant: "primary", type: "submit" },
                                "\u05E9\u05DE\u05D9\u05E8\u05EA \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Personal_information;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(Personal_information);