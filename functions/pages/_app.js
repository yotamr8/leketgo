'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _app = require('next/app');

var _app2 = _interopRequireDefault(_app);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _firebaseConfig = require('../config/firebaseConfig');

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

var _ModalBlock = require('../components/ModalBlock.js');

var _ModalBlock2 = _interopRequireDefault(_ModalBlock);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'AUTHCHECKED':
            return _extends({}, state, { authChecked: true });
            break;
        case 'UNASSIGNEDTASKS':
            return _extends({}, state, { unassignedTasks: action.tasks });
            break;
        case 'ASSIGNEDTASKS':
            return _extends({}, state, { assignedTasks: action.tasks });
            break;
        case 'TASKREPORTS':
            return _extends({}, state, { taskReports: action.tasks });
            break;
        case 'LOGIN':
            return _extends({}, state, { isLoggedIn: true, loginErr: false, userData: _extends({}, action.user, { uid: action.uid }) });
            console.log("logged in store");
            break;
        case 'LOGIN_ERR':
            return _extends({}, state, { isLoggedIn: false, loginErr: action.msg });
            break;
        case 'LOGOUT':
            return _extends({}, state, { isLoggedIn: false });
            break;
        case 'GETALLUSERS':
            return _extends({}, state, { users: action.users });
            break;
        case 'GETALLREGIONTASKS':
            return _extends({}, state, { regionalTasks: action.tasks });
            break;
        case 'OPEN_MODAL':
            return _extends({}, state, { modal: {
                    isOpen: true,
                    msg: action.msg,
                    entries: action.entries
                }
            });
            break;
        case 'CLOSE_MODAL':
            return _extends({}, state, { modal: _extends({}, state.modal, { isOpen: false }) });
        default:
            return state;
    }
};

var initialState = {
    authChecked: false,
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
    users: []
};

var makeStore = function makeStore(initialState, options) {
    return (0, _redux.createStore)(reducer, initialState);
};

var MyApp = function (_App) {
    _inherits(MyApp, _App);

    function MyApp() {
        _classCallCheck(this, MyApp);

        return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
    }

    _createClass(MyApp, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                Component = _props.Component,
                pageProps = _props.pageProps,
                store = _props.store;

            return _react2.default.createElement(
                _app.Container,
                null,
                _react2.default.createElement(
                    _reactRedux.Provider,
                    { store: store },
                    _react2.default.createElement(_ModalBlock2.default, null),
                    _react2.default.createElement(Component, pageProps)
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
                var Component = _ref2.Component,
                    ctx = _ref2.ctx;
                var pageProps;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!Component.getInitialProps) {
                                    _context.next = 6;
                                    break;
                                }

                                _context.next = 3;
                                return Component.getInitialProps(ctx);

                            case 3:
                                _context.t0 = _context.sent;
                                _context.next = 7;
                                break;

                            case 6:
                                _context.t0 = {};

                            case 7:
                                pageProps = _context.t0;
                                return _context.abrupt('return', { pageProps: pageProps });

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x2) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return MyApp;
}(_app2.default);

exports.default = (0, _nextReduxWrapper2.default)(makeStore)(MyApp);