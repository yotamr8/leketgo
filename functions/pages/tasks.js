'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../statics/styles.scss');

var _TableBlock = require('../components/TableBlock.js');

var _TableBlock2 = _interopRequireDefault(_TableBlock);

var _reactRedux = require('react-redux');

var _Header = require('../components/Header.js');

var _Header2 = _interopRequireDefault(_Header);

var _checkAuth = require('../dbActions/checkAuth');

var _checkAuth2 = _interopRequireDefault(_checkAuth);

var _loading = require('./loading');

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_Component) {
    _inherits(Users, _Component);

    function Users() {
        _classCallCheck(this, Users);

        return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
    }

    _createClass(Users, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            (0, _checkAuth2.default)(this.props.dispatch);
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.authChecked || !this.props.isLoggedIn) {
                return _react2.default.createElement(_loading2.default, null);
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'main',
                    { className: 'm-2', style: { paddingBottom: '3rem' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'mb-4 mt-4' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            '\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD'
                        )
                    ),
                    _react2.default.createElement(_TableBlock2.default, { data: this.props.regionalTasks, page: 'adminTasks', type: 'tasks' })
                )
            );
        }
    }]);

    return Users;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(Users);