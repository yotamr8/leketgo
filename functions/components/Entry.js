'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _firebaseConfig = require('../config/firebaseConfig');

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entry = function (_React$Component) {
    _inherits(Entry, _React$Component);

    function Entry(props) {
        _classCallCheck(this, Entry);

        var _this = _possibleConstructorReturn(this, (Entry.__proto__ || Object.getPrototypeOf(Entry)).call(this, props));

        _this.state = {
            isEditable: false
        };
        _this.toggleSelection = _this.toggleSelection.bind(_this);
        _this.toggleEditable = _this.toggleEditable.bind(_this);
        return _this;
    }

    _createClass(Entry, [{
        key: 'getDataValues',
        value: function getDataValues(entry) {
            switch (this.props.type) {
                case 'tasks':
                    var options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
                    var date = entry.timestamp.toDate();
                    return {
                        date: date.toLocaleDateString('he-IL', options),
                        time: date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2),
                        city: entry.city,
                        name: entry.name,
                        street: entry.address,
                        actions: 'ACTIONS',
                        contactName: entry['contact name'],
                        contactNumber: _react2.default.createElement(
                            'a',
                            { href: 'tel: ' + entry['contact number'] },
                            entry['contact number']
                        ),
                        checkBox: this.props.isSelected ? _react2.default.createElement(_reactBootstrap.Form.Check, { custom: true, checked: true, label: '', type: 'checkbox' }) : _react2.default.createElement(_reactBootstrap.Form.Check, { custom: true, label: '', type: 'checkbox' })
                    };
                case 'users':
                    return {
                        uid: entry.id,
                        firstName: entry.firstName,
                        lastName: entry.lastName,
                        region: entry.region,
                        email: entry.email,
                        phone: entry.phone,
                        tz: entry.tz
                    };
                default:
                    break;
            }
        }
    }, {
        key: 'toggleSelection',
        value: function toggleSelection() {
            if (this.props.isSelectable) {
                this.props.selectCallback(this.props.entry, !this.props.isSelected);
            }
        }
    }, {
        key: 'toggleEditable',
        value: function toggleEditable() {
            this.setState({ isEditable: !this.state.isEditable });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var buttons = [];
            switch (this.props.page) {
                case 'assignedTasks':
                    buttons = [{
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_NOTES', entries: _this2.props.entry });
                        },
                        color: 'outline-primary',
                        text: 'הערות'
                    }, {
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_DONE', entries: _this2.props.entry });
                        },
                        color: 'outline-primary',
                        text: 'בוצע'
                    }, {
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'OPEN_MODAL', msg: 'TASK_CANCEL', entries: _this2.props.entry });
                        },
                        color: 'outline-secondary',
                        text: 'הסרה'
                    }];
                    break;
                case 'taskReports':
                    buttons = [{
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'OPEN_MODAL', msg: 'REPORT_FILL', entries: _this2.props.entry });
                        },
                        color: 'outline-primary',
                        text: 'דיווח'
                    }, {
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'OPEN_MODAL', msg: 'REPORT_UNDONE' });
                        },
                        color: 'outline-secondary',
                        text: 'לא בוצע'
                    }];
                    break;
                case 'adminUsers':
                    buttons = [{
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'OPEN_MODAL', msg: 'EDIT_USER', entries: _this2.props.entry });
                        },
                        color: 'outline-primary',
                        text: 'עריכה'
                    }, {
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'OPEN_MODAL', msg: 'RESET_PASSWORD', entries: _this2.props.entry });
                        },
                        color: 'outline-secondary',
                        text: 'איפוס סיסמה'
                    }, {
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'OPEN_MODAL', msg: 'RESET_PASSWORD', entries: _this2.props.entry });
                        },
                        color: 'outline-secondary',
                        text: 'מחיקה'
                    }];
                    break;
            }

            return _react2.default.createElement(
                'tr',
                { className: (this.props.isSelected ? 'table-primary' : '') + (this.props.isSelectable ? ' entry-selectable' : '') },
                this.props.tableColumns.map(function (column) {
                    if (column != 'actions') {
                        return _react2.default.createElement(
                            'td',
                            { onClick: _this2.toggleSelection, key: column },
                            _this2.getDataValues(_this2.props.entry)[column]
                        );
                    } else {
                        return _react2.default.createElement(
                            'td',
                            { key: column },
                            _react2.default.createElement(
                                _reactBootstrap.ButtonGroup,
                                null,
                                buttons.map(function (button) {
                                    return _react2.default.createElement(
                                        _reactBootstrap.Button,
                                        { key: button.text, onClick: button.onClick, variant: button.color },
                                        button.text
                                    );
                                })
                            )
                        );
                    }
                })
            );
        }
    }]);

    return Entry;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(Entry);