'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setAssignedTasks;

var _firebaseConfig = require('../config/firebaseConfig');

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

var _refresh4User = require('./refresh4User');

var _refresh4User2 = _interopRequireDefault(_refresh4User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendCompletionMsg(props, numOfFailures, numOfSuccesses, entrySelectedCounter, selectedEntries) {
    console.log("test2", numOfSuccesses, numOfFailures, entrySelectedCounter);
    if (numOfFailures == 0 && numOfSuccesses == entrySelectedCounter) {
        props.dispatch({ type: 'OPEN_MODAL', msg: 'ASSIGN_TASKS_SUCCESS', entries: selectedEntries });
    }
    if (numOfSuccesses == 0 && numOfFailures == entrySelectedCounter) {
        props.dispatch({ type: 'OPEN_MODAL', msg: 'ASSIGN_TASKS_FAILED', entries: selectedEntries });
    }
    if (numOfFailures > 0 && numOfSuccesses > 0) {
        props.dispatch({ type: 'OPEN_MODAL', msg: 'ASSIGN_TASKS_MIX', entries: selectedEntries });
    }
    (0, _refresh4User2.default)(props.dispatch, props.userData.region, props.userData.uid);
}

function runTrans(props, taskIDs, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db) {
    db.runTransaction(function (transaction) {
        var taskID = taskIDs[index];
        var task = db.collection("tasks").doc(taskID);
        return transaction.get(task).then(function (taskSnapshot) {
            if (!taskSnapshot.exists) {
                throw "Could not find task with given ID: " + taskID;
            }
            var taskIsAvialable = taskSnapshot.data().volunteerUid == null ? true : false;
            if (taskIsAvialable) {
                transaction.update(task, { volunteerUid: props.userData.uid });
                return "Task was assigned to user successfully!";
            } else {
                return Promise.reject("Sorry! task was taken earlier.");
            }
        });
    }).then(function (msg) {
        index++;
        console.log(msg);
        numOfSuccesses++;
        console.log("test", numOfSuccesses, numOfFailures, entrySelectedCounter);
        if (index < entrySelectedCounter) {
            runTrans(props, taskIDs, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db);
        }
        if (numOfFailures + numOfSuccesses == entrySelectedCounter) {
            sendCompletionMsg(props, numOfFailures, numOfSuccesses, entrySelectedCounter, selectedEntries);
        }
    }).catch(function (msg) {
        index++;
        console.log(msg);
        numOfFailures++;
        console.log("test", numOfSuccesses, numOfFailures, entrySelectedCounter);
        if (index < entrySelectedCounter) {
            runTrans(props, taskIDs, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db);
        }
        if (numOfFailures + numOfSuccesses == entrySelectedCounter) {
            sendCompletionMsg(props, numOfFailures, numOfSuccesses, entrySelectedCounter, selectedEntries);
        }
    });
}

function setAssignedTasks(props, taskIDs, entrySelectedCounter, selectedEntries) {
    var db = _firebaseConfig2.default.firestore();
    var numOfSuccesses = 0;
    var numOfFailures = 0;
    var index = 0;
    runTrans(props, taskIDs, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db);
}