'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = refresh4User;

var _getUnassignedTasks = require('../dbActions/getUnassignedTasks');

var _getUnassignedTasks2 = _interopRequireDefault(_getUnassignedTasks);

var _getAssignedTasks = require('../dbActions/getAssignedTasks');

var _getAssignedTasks2 = _interopRequireDefault(_getAssignedTasks);

var _getTaskReports = require('../dbActions/getTaskReports');

var _getTaskReports2 = _interopRequireDefault(_getTaskReports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function refresh4User(dispatch, region, uid) {
    (0, _getUnassignedTasks2.default)(dispatch, region);

    (0, _getAssignedTasks2.default)(dispatch, uid);

    (0, _getTaskReports2.default)(dispatch, uid);
}