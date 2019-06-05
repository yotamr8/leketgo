'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _head = require('next/head');

var _head2 = _interopRequireDefault(_head);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _firebaseConfig = require('../config/firebaseConfig');

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

var _reactBootstrap = require('react-bootstrap');

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.logout = function () {
            _firebaseConfig2.default.auth().signOut().then(function () {
                _this.props.dispatch({ type: 'LOGOUT' });
            }).catch(function (err) {
                console.log("error on logout.", err);
            });
        };

        _this.state = {
            isUserDropdown: false
        };

        _this.toggleUserDropDown = _this.toggleUserDropDown.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'toggleUserDropDown',
        value: function toggleUserDropDown() {
            this.setState({ isUserDropdown: !this.state.isUserDropdown });
        }
    }, {
        key: 'render',
        value: function render() {
            var pages = void 0;
            if (!this.props.userData.admin) {
                var atNum = this.props.assignedTasks.length;
                var trNum = this.props.taskReports.length;
                pages = _react2.default.createElement(
                    _reactBootstrap.Nav,
                    { className: 'mr-auto' },
                    _react2.default.createElement(
                        _link2.default,
                        { className: 'navlink', href: '/' },
                        _react2.default.createElement(
                            'a',
                            { className: 'nav-link' },
                            '\u05E9\u05D9\u05D1\u05D5\u05E5 \u05DC\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD'
                        )
                    ),
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/assigned-tasks' },
                        _react2.default.createElement(
                            'a',
                            { className: 'nav-link' },
                            '\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD ',
                            atNum > 0 ? _react2.default.createElement(
                                _reactBootstrap.Badge,
                                { variant: 'secondary' },
                                atNum
                            ) : ''
                        )
                    ),
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/task-reports' },
                        _react2.default.createElement(
                            'a',
                            { className: 'nav-link' },
                            '\u05DE\u05D9\u05DC\u05D5\u05D9 \u05DE\u05E9\u05D5\u05D1 ',
                            trNum > 0 ? _react2.default.createElement(
                                _reactBootstrap.Badge,
                                { variant: 'secondary' },
                                trNum
                            ) : ''
                        )
                    )
                );
            } else {
                pages = _react2.default.createElement(
                    _reactBootstrap.Nav,
                    { className: 'mr-auto' },
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/' },
                        _react2.default.createElement(
                            'a',
                            { className: 'nav-link' },
                            '\u05DC\u05D5\u05D7 \u05D1\u05E7\u05E8\u05D4'
                        )
                    ),
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/users' },
                        _react2.default.createElement(
                            'a',
                            { className: 'nav-link' },
                            '\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD'
                        )
                    ),
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/tasks' },
                        _react2.default.createElement(
                            'a',
                            { className: 'nav-link' },
                            '\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA'
                        )
                    )
                );
            }
            var navbar = '';
            if (!this.props.isLogin) {
                navbar = _react2.default.createElement(
                    _reactBootstrap.Navbar,
                    { sticky: 'top', bg: 'dark', variant: 'dark', expand: 'lg' },
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/' },
                        _react2.default.createElement(
                            'a',
                            { className: 'navbar-brand' },
                            'LetsGo'
                        )
                    ),
                    _react2.default.createElement(_reactBootstrap.Navbar.Toggle, { 'aria-controls': 'basic-navbar-nav' }),
                    _react2.default.createElement(
                        _reactBootstrap.Navbar.Collapse,
                        { id: 'basic-navbar-nav' },
                        pages,
                        _react2.default.createElement(
                            _reactBootstrap.Nav,
                            { className: 'mr-sm-2' },
                            _react2.default.createElement(
                                _reactBootstrap.NavDropdown,
                                { alignRight: true, title: this.props.userData.firstName + ' ' + this.props.userData.lastName, id: 'basic-nav-dropdown' },
                                _react2.default.createElement(
                                    _link2.default,
                                    { href: '/personal-information' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'dropdown-item' },
                                        '\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD'
                                    )
                                ),
                                _react2.default.createElement(_reactBootstrap.NavDropdown.Divider, null),
                                _react2.default.createElement(
                                    _link2.default,
                                    { href: '/login' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'dropdown-item', onClick: this.logout },
                                        '\u05D4\u05EA\u05E0\u05EA\u05E7\u05D5\u05EA'
                                    )
                                )
                            )
                        )
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _head2.default,
                    null,
                    _react2.default.createElement('meta', { charset: 'utf-8' }),
                    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }),
                    _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css',
                        integrity: 'sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If', crossorigin: 'anonymous' }),
                    _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
                        integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'LetsGo'
                    )
                ),
                navbar
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(Header);