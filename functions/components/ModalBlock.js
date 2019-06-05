'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _setUndoTask = require('../dbActions/setUndoTask');

var _setUndoTask2 = _interopRequireDefault(_setUndoTask);

var _refresh4User = require('../dbActions/refresh4User');

var _refresh4User2 = _interopRequireDefault(_refresh4User);

var _setTaskReport = require('../dbActions/setTaskReport');

var _setTaskReport2 = _interopRequireDefault(_setTaskReport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalBlock = function (_React$Component) {
    _inherits(ModalBlock, _React$Component);

    function ModalBlock() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ModalBlock);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalBlock.__proto__ || Object.getPrototypeOf(ModalBlock)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            mainCourseQ: 0,
            sideCourseQ: 0,
            pastriesQ: 0,
            pastriesS: "",
            breadQ: 0,
            breadS: ""
        }, _this.handleChange = function (e) {
            console.log(e.target.id, e.target.value);
            _this.setState(_defineProperty({}, e.target.id, e.target.value));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ModalBlock, [{
        key: 'resetState',
        value: function resetState() {
            this.setState({
                mainCourseQ: 0,
                sideCourseQ: 0,
                pastriesQ: 0,
                pastriesS: "",
                breadQ: 0,
                breadS: ""
            });
        }
    }, {
        key: 'verifyValuesForReport',
        value: function verifyValuesForReport(modal) {
            var isValid = true;
            console.log(this.props.modal.entries.id);
            // some logic here
            if (isValid) {
                (0, _setTaskReport2.default)(this.props.modal.entries.id, this.state);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var modal = this.props.modal;
            var title = '';
            var body = '';
            var buttons = [];

            switch (modal.msg) {
                case 'ASSIGN_TASKS_MIX':
                    title = 'הצלחה חלקית';
                    body = _react2.default.createElement(
                        'span',
                        null,
                        '                   \u05D7\u05DC\u05E7 \u05DE\u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D1\u05D7\u05E8\u05EA \u05E9\u05D5\u05D1\u05E6\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4, \u05D5\u05D7\u05DC\u05E7 \u05DC\u05D0! \u05E0\u05D9\u05EA\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA \u05DC\u05D0\u05D9\u05DC\u05D5 \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D5\u05D1\u05E6\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3 ',
                        _react2.default.createElement(
                            _link2.default,
                            { href: 'assigned-tasks' },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                                    } },
                                '\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD'
                            )
                        ),
                        '.'
                    );
                    buttons = [{
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                        },
                        color: 'secondary',
                        text: 'סגירה'
                    }];
                    break;
                case 'ASSIGN_TASKS_FAILED':
                    title = 'כשלון בשיבוץ האיסופים';
                    body = _react2.default.createElement(
                        'span',
                        null,
                        Object.keys(modal.entries).length,
                        '                     \u05E9\u05D9\u05D1\u05D5\u05E5 \u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E0\u05DB\u05E9\u05DC! \u05D0\u05E0\u05D0 \u05E0\u05E1\u05D4 \u05DC\u05D4\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9\u05DD. '
                    );
                    buttons = [{
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                        },
                        color: 'secondary',
                        text: 'סגירה'
                    }];
                    break;
                case 'ASSIGN_TASKS_SUCCESS':
                    title = 'הצלחה';
                    body = _react2.default.createElement(
                        'span',
                        null,
                        Object.keys(modal.entries).length,
                        '                     \u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D5\u05D1\u05E6\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4! \u05E0\u05D9\u05EA\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05EA \u05DB\u05DC \u05D4\u05E9\u05D9\u05D1\u05D5\u05E6\u05D9\u05DD \u05E9\u05DC\u05DA \u05D1\u05E2\u05DE\u05D5\u05D3 ',
                        _react2.default.createElement(
                            _link2.default,
                            { href: 'assigned-tasks' },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                                    } },
                                '\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD'
                            )
                        ),
                        '.'
                    );
                    buttons = [{
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                        },
                        color: 'secondary',
                        text: 'סגירה'
                    }];
                    break;
                case 'REPORT_FILL':
                    title = 'משוב על איסוף שבוצע';
                    body = _react2.default.createElement(
                        _reactBootstrap.Form,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05E2\u05D9\u05E7\u05E8\u05D9\u05D5\u05EA'
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.InputGroup,
                                    null,
                                    _react2.default.createElement(_reactBootstrap.FormControl, { id: 'mainCourseQ',
                                        onChange: this.handleChange,
                                        placeholder: '\u05DB\u05DE\u05D5\u05EA'
                                    }),
                                    _react2.default.createElement(
                                        _reactBootstrap.InputGroup.Append,
                                        null,
                                        _react2.default.createElement(
                                            _reactBootstrap.InputGroup.Text,
                                            null,
                                            '\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA'
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.InputGroup,
                                    null,
                                    _react2.default.createElement(_reactBootstrap.FormControl, { id: 'sideCourseQ',
                                        onChange: this.handleChange,
                                        placeholder: '\u05DB\u05DE\u05D5\u05EA'
                                    }),
                                    _react2.default.createElement(
                                        _reactBootstrap.InputGroup.Append,
                                        null,
                                        _react2.default.createElement(
                                            _reactBootstrap.InputGroup.Text,
                                            null,
                                            '\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05DE\u05D0\u05E4\u05D9\u05DD'
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.InputGroup,
                                    null,
                                    _react2.default.createElement(_reactBootstrap.FormControl, { id: 'pastriesQ',
                                        onChange: this.handleChange,
                                        placeholder: '\u05DB\u05DE\u05D5\u05EA'
                                    }),
                                    _react2.default.createElement(
                                        _reactBootstrap.Form.Control,
                                        { as: 'select', id: 'pastriesS',
                                            onChange: this.handleChange },
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            '\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            '\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            '\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            '\u05E9\u05E7\u05D9\u05DD'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05DC\u05D7\u05DD'
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.InputGroup,
                                    null,
                                    _react2.default.createElement(_reactBootstrap.FormControl, { id: 'breadQ',
                                        onChange: this.handleChange,
                                        placeholder: '\u05DB\u05DE\u05D5\u05EA'
                                    }),
                                    _react2.default.createElement(
                                        _reactBootstrap.Form.Control,
                                        { as: 'select', id: 'breadS',
                                            onChange: this.handleChange },
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            '\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            '\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            '\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            '\u05E9\u05E7\u05D9\u05DD'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA'
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { as: 'textarea', rows: '3' })
                            )
                        )
                    );
                    buttons = [{
                        onClick: function onClick() {
                            _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                            _this2.verifyValuesForReport(modal);
                            _this2.resetState();
                        },
                        color: 'primary',
                        text: 'שליחה'
                    }, {
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                        },
                        color: 'secondary',
                        text: 'סגירה'
                    }];
                    break;
                case 'REPORT_UNDONE':
                    title = 'משוב על איסוף שלא בוצע';
                    body = _react2.default.createElement(
                        _reactBootstrap.Form,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05DE\u05D3\u05D5\u05E2 \u05DC\u05D0 \u05D1\u05D5\u05E6\u05E2 \u05D4\u05D0\u05D9\u05E1\u05D5\u05E3?'
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Control,
                                    { as: 'select' },
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        '\u05DC\u05D0 \u05E0\u05D5\u05EA\u05E8 \u05DE\u05D6\u05D5\u05DF'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        '\u05DC\u05D0 \u05E0\u05E2\u05E0\u05D9\u05EA\u05D9'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        '\u05E1\u05D9\u05D1\u05D4 \u05D0\u05D7\u05E8\u05EA'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA'
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { as: 'textarea', rows: '3' })
                            )
                        )
                    );
                    buttons = [{
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                        },
                        color: 'primary',
                        text: 'שליחה'
                    }, {
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                        },
                        color: 'secondary',
                        text: 'ביטול'
                    }];
                    break;
                case 'TASK_NOTES':
                    title = 'הערות';
                    body = _react2.default.createElement(
                        'div',
                        null,
                        modal.entries.notes
                    );
                    buttons = [{
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                        },
                        color: 'secondary',
                        text: 'סגירה'
                    }];
                    break;
                case 'TASK_CANCEL':
                    title = 'הסרת שיבוץ';
                    body = 'הסרת השיבוץ תחזיר את משימת האיסוף לרשימת המשימות הפנויות.';
                    buttons = [{
                        onClick: function onClick() {
                            (0, _setUndoTask2.default)(modal.entries.id);
                            _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                            (0, _refresh4User2.default)(_this2.props.dispatch, _this2.props.userData.region, _this2.props.userData.uid);
                        },
                        color: 'danger',
                        text: 'הסרה'
                    }, {
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                        },
                        color: 'secondary',
                        text: 'ביטול'
                    }];
                    break;
                case 'EDIT_USER':
                    var user = modal.entries;
                    title = 'עריכת פרטי משתמש';
                    body = _react2.default.createElement(
                        _reactBootstrap.Form,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9'
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { value: user.firstName })
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4'
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { value: user.lastName })
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA'
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { value: user.tz })
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05D0\u05D6\u05D5\u05E8 \u05D0\u05D9\u05E1\u05D5\u05E3'
                                ),
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Control,
                                    { as: 'select' },
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        '\u05E8\u05D0\u05E9\u05D5\u05DF \u05DC\u05E6\u05D9\u05D5\u05DF'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        '\u05E8\u05E2\u05E0\u05E0\u05D4'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        null,
                                        '\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9'
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { type: 'email', value: user.email })
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicEmail' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF'
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { type: 'email', value: user.phone })
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Form.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicPassword' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8'
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { value: user.street })
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Form.Group,
                                { as: _reactBootstrap.Col, controlId: 'formBasicPassword' },
                                _react2.default.createElement(
                                    _reactBootstrap.Form.Label,
                                    null,
                                    '\u05E2\u05D9\u05E8 \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD'
                                ),
                                _react2.default.createElement(_reactBootstrap.Form.Control, { value: user.city })
                            )
                        )
                    );
                    buttons = [{
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                        },
                        color: 'primary',
                        text: 'שליחה'
                    }, {
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                        },
                        color: 'secondary',
                        text: 'ביטול'
                    }];
                    break;
                case 'TASK_DONE':
                    title = 'האיסוף בוצע';
                    body = 'תודה! האיסוף סומן כבוצע. השלב הבא הוא למלא משוב.';
                    buttons = [{
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'OPEN_MODAL', msg: 'REPORT_FILL', entries: modal.entries });
                        },
                        color: 'primary',
                        text: 'דיווח'
                    }, {
                        onClick: function onClick() {
                            return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                        },
                        color: 'secondary',
                        text: 'סגירה'
                    }];
            }

            return _react2.default.createElement(
                _reactBootstrap.Modal,
                { show: modal.isOpen, onHide: function onHide() {
                        return _this2.props.dispatch({ type: 'CLOSE_MODAL' });
                    } },
                _react2.default.createElement(
                    _reactBootstrap.Modal.Header,
                    { closeButton: true },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Title,
                        null,
                        title
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Body,
                    null,
                    body
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Footer,
                    null,
                    buttons.map(function (button) {
                        return _react2.default.createElement(
                            _reactBootstrap.Button,
                            { key: button.text, variant: button.color, onClick: button.onClick },
                            button.text
                        );
                    })
                )
            );
        }
    }]);

    return ModalBlock;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(ModalBlock);