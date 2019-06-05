"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setTaskReport;

var _firebaseConfig = require("../config/firebaseConfig");

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setTaskReport(taskID, reportValues) {
    var db = _firebaseConfig2.default.firestore();
    console.log(taskID, reportValues);
    var numOfFields = 0;
    var fields = [];
    if (reportValues.mainCourseQ > 0) {
        numOfFields++;fields.push("mainCourseQ");
    }
    if (reportValues.sideCourseQ > 0) {
        numOfFields++;fields.push("sideCourseQ");
    }
    if (reportValues.pastriesQ > 0) {
        numOfFields++;fields.push("pastriesQ");
    }
    if (reportValues.breadQ > 0) {
        numOfFields++;fields.push("breadQ");
    }
    var data = {
        reportFilled: true,
        reportFieldNum: numOfFields
    };
    var dic = {
        "mainCourseQ": '�������',
        "sideCourseQ": '������',
        "pastriesQ": '�����',
        "breadQ": '���'
    };

    for (var i = 0; i < numOfFields; i++) {
        data["foodDesc" + (i + 1)] = dic[fields[i]];
        data["foodContainerType" + (i + 1)] = fields[i] == "mainCourseQ" || fields[i] == "sideCourseQ" ? '������' : fields[i] == "pastriesQ" ? reportValues.pastriesS : reportValues.breadS;
        data["foodContainerQuantity" + (i + 1)] = reportValues[fields[i]];
    }
    // bug with hebrew
    console.log(data);
    /*db.collection("tasks").doc(taskID).set(
        data,
        { merge: true })
        .then(console.log("report filled successfully."));*/
}