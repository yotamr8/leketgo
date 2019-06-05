'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Entry = require('../components/Entry');

var _Entry2 = _interopRequireDefault(_Entry);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _setAssignedTasks = require('../dbActions/setAssignedTasks');

var _setAssignedTasks2 = _interopRequireDefault(_setAssignedTasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableBlock = function (_React$Component) {
	_inherits(TableBlock, _React$Component);

	function TableBlock(props) {
		_classCallCheck(this, TableBlock);

		var _this = _possibleConstructorReturn(this, (TableBlock.__proto__ || Object.getPrototypeOf(TableBlock)).call(this, props));

		_this.state = {
			tableColumns: _this.getTableColumns(),
			entrySelectedCounter: 0,
			selectedEntries: {},
			columnNames: {
				'actions': 'פעולות',
				'date': 'תאריך',
				'time': 'שעה',
				'city': 'עיר',
				'name': 'ספק',
				'uid': 'uid',
				'firstName': 'שם פרטי',
				'lastName': 'שם משפחה',
				'region': 'אזור',
				'email': 'דוא"ל',
				'tz': 'תעודת זהות',
				'street': 'רחוב',
				'contactName': 'איש קשר',
				'contactNumber': 'טלפון',
				'checkBox': ''
			}
		};
		_this.selectCallback = _this.selectCallback.bind(_this);
		_this.cancelSelection = _this.cancelSelection.bind(_this);
		_this.assignTasks = _this.assignTasks.bind(_this);
		return _this;
	}

	_createClass(TableBlock, [{
		key: 'getTableColumns',
		value: function getTableColumns() {
			switch (this.props.page) {
				case 'index':
					return ['checkBox', 'date', 'time', 'city', 'name'];
				case 'assignedTasks':
					return ['date', 'time', 'street', 'city', 'name', 'contactName', 'contactNumber', 'actions'];
				case 'taskReports':
					return ['date', 'street', 'city', 'name', 'actions'];
				case 'adminUsers':
					return ['tz', 'firstName', 'lastName', 'email', 'phone', 'region', 'actions'];
				case 'adminTasks':
					return ['date', 'time', 'street', 'city', 'name', 'actions'];
				default:
					break;
			}
		}
	}, {
		key: 'selectCallback',
		value: function selectCallback(entry, isSelected) {
			var newSelectedEntries = _extends({}, this.state.selectedEntries);
			if (isSelected) {
				newSelectedEntries[entry.id] = _extends({}, entry);
				this.setState({
					entrySelectedCounter: this.state.entrySelectedCounter + 1,
					selectedEntries: newSelectedEntries
				});
			} else {
				delete newSelectedEntries[entry.id];
				this.setState({
					entrySelectedCounter: this.state.entrySelectedCounter - 1,
					selectedEntries: newSelectedEntries
				});
			}
		}
	}, {
		key: 'cancelSelection',
		value: function cancelSelection() {
			this.setState({
				entrySelectedCounter: 0,
				selectedEntries: {}
			});
		}
	}, {
		key: 'assignTasks',
		value: function assignTasks() {
			var taskIDs = [];
			for (var taskID in this.state.selectedEntries) {
				taskIDs.push(taskID);
			}
			(0, _setAssignedTasks2.default)(this.props, taskIDs, this.state.entrySelectedCounter, this.state.selectedEntries);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var actionsBar = '';
			if (this.props.isSelectable && this.state.entrySelectedCounter > 0) {
				actionsBar = _react2.default.createElement(
					_reactBootstrap.Navbar,
					{ bg: 'light', fixed: 'bottom' },
					_react2.default.createElement(
						_reactBootstrap.ButtonGroup,
						null,
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ onClick: this.assignTasks, variant: 'primary' },
							'\u05E9\u05D9\u05D1\u05D5\u05E5 ',
							this.state.entrySelectedCounter,
							' \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD'
						),
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ onClick: this.cancelSelection, variant: 'secondary' },
							'\u05D1\u05D9\u05D8\u05D5\u05DC'
						)
					)
				);
			}
			if (this.props.isSearchable) {
				actionsBar = _react2.default.createElement(
					_reactBootstrap.Navbar,
					{ bg: 'light', fixed: 'bottom' },
					_react2.default.createElement(
						_reactBootstrap.Form,
						null,
						_react2.default.createElement(
							_reactBootstrap.Row,
							null,
							_react2.default.createElement(
								_reactBootstrap.Col,
								null,
								_react2.default.createElement(
									'div',
									{ className: 'btn-group', role: 'group', 'aria-label': 'Basic example' },
									_react2.default.createElement(
										'button',
										{ type: 'button', className: 'btn btn-primary' },
										'\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9'
									),
									_react2.default.createElement(
										'button',
										{ type: 'button', className: 'btn btn-secondary' },
										'\u05D4\u05D5\u05E1\u05E4\u05D4 \u05DE\u05E7\u05D5\u05D1\u05E5'
									)
								)
							),
							_react2.default.createElement(
								_reactBootstrap.Col,
								null,
								_react2.default.createElement(
									_reactBootstrap.InputGroup,
									{ className: 'mb-3' },
									_react2.default.createElement(
										_reactBootstrap.Form.Control,
										{
											as: 'select',
											variant: 'outline-secondary',
											title: 'Dropdown',
											drop: 'up' },
										_react2.default.createElement(
											'option',
											null,
											'\u05E9\u05DD \u05DE\u05DC\u05D0'
										),
										_react2.default.createElement(
											'option',
											null,
											'\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA'
										),
										_react2.default.createElement(
											'option',
											null,
											'\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD'
										),
										_react2.default.createElement(
											'option',
											null,
											'\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF'
										),
										_react2.default.createElement(
											'option',
											null,
											'\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9'
										)
									),
									_react2.default.createElement(_reactBootstrap.FormControl, { 'aria-describedby': 'basic-addon1' })
								)
							)
						)
					)
				);
			}

			return _react2.default.createElement(
				'div',
				{ className: 'table-responsive' },
				_react2.default.createElement(
					_reactBootstrap.Table,
					{ hover: true, responsive: true },
					_react2.default.createElement(
						'thead',
						null,
						_react2.default.createElement(
							'tr',
							null,
							this.state.tableColumns.map(function (column) {
								return _react2.default.createElement(
									'th',
									{ scope: 'col', key: column },
									_this2.state.columnNames[column]
								);
							})
						)
					),
					_react2.default.createElement(
						'tbody',
						null,
						this.props.data.map(function (entry) {
							var isSelected = false;
							if (_this2.state.selectedEntries[entry.id]) isSelected = true;
							return _react2.default.createElement(_Entry2.default, { page: _this2.props.page, isSelected: isSelected, isSelectable: _this2.props.isSelectable, type: _this2.props.type, key: entry.id, selectCallback: _this2.selectCallback, entry: entry, tableColumns: _this2.state.tableColumns });
						})
					)
				),
				actionsBar
			);
		}
	}]);

	return TableBlock;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return state;
})(TableBlock);