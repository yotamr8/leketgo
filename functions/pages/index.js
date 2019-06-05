'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('next/router');

var _router2 = _interopRequireDefault(_router);

require('../statics/styles.scss');

var _TableBlock = require('../components/TableBlock.js');

var _TableBlock2 = _interopRequireDefault(_TableBlock);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

var _firebaseConfig = require('../config/firebaseConfig');

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

var _Header = require('../components/Header.js');

var _Header2 = _interopRequireDefault(_Header);

var _loading = require('./loading');

var _loading2 = _interopRequireDefault(_loading);

var _checkAuth = require('../dbActions/checkAuth');

var _checkAuth2 = _interopRequireDefault(_checkAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            (0, _checkAuth2.default)(this.props.dispatch);
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.props);
            if (!this.props.authChecked || !this.props.isLoggedIn) {
                return _react2.default.createElement(_loading2.default, null);
            }

            var atNum = this.props.assignedTasks.length;
            var trNum = this.props.taskReports.length;
            var alert = '';
            if (atNum > 0 || trNum > 0) {
                alert = _react2.default.createElement(
                    _reactBootstrap.Alert,
                    { variant: 'warning' },
                    '\u05D4\u05D9\u05D9 ',
                    this.props.userData.firstName,
                    ', \u05D9\u05E9 \u05DC\u05DA ',
                    atNum > 0 ? _react2.default.createElement(
                        _link2.default,
                        { href: '/assigned-tasks' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement(
                                'strong',
                                null,
                                atNum
                            ),
                            ' \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD'
                        )
                    ) : '',
                    atNum > 0 && trNum > 0 ? 'ועוד ' : '',
                    trNum > 0 ? _react2.default.createElement(
                        _link2.default,
                        { href: '/task-reports' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement(
                                'strong',
                                null,
                                trNum
                            ),
                            ' \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05D4\u05DE\u05DE\u05EA\u05D9\u05E0\u05D9\u05DD \u05DC\u05DE\u05E9\u05D5\u05D1'
                        )
                    ) : '',
                    '.'
                );
            }

            if (!this.props.userData.admin) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_Header2.default, null),
                    _react2.default.createElement(
                        'main',
                        { className: 'm-2', style: { paddingBottom: '3rem' } },
                        alert,
                        _react2.default.createElement(
                            'div',
                            { className: 'mb-4 mt-4' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                '\u05E9\u05D9\u05D1\u05D5\u05E5 \u05DC\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD'
                            )
                        ),
                        _react2.default.createElement(_TableBlock2.default, { isSelectable: true, data: this.props.unassignedTasks, page: 'index', type: 'tasks' })
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_Header2.default, null)
                );
            }
        }
    }]);

    return Index;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(Index);