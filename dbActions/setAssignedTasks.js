import fire from '../config/firebaseConfig'
import refresh4User from './refresh4User'

const db = fire.firestore();
var numOfSuccesses;
var numOfFailures;
var index;
var failed;
var succeeded;
var taskIDs;
var numberOfTasks;
var tasks;
var props;
var taskIDs;
var taskID;

/* runs as a recursive function, because a only one firebase transaction can run at a time.
The reason this is done in a transaction, is to cover the possobility that 2 volunteers try
to assign themselves to the same task in the same time. */

export default function setAssignedTasks(properties, selectedEntries, entrySelectedCounter) {
    numOfSuccesses = 0;
    numOfFailures = 0;
    index = 0;
    failed = [];
    succeeded = [];
    numberOfTasks = entrySelectedCounter;
    tasks = selectedEntries;
    props = properties;
    taskIDs = [];
    for (let id in tasks) {
        taskIDs.push(id)         
    }
    runTrans()
}

function runTrans() {
    db.runTransaction((transaction) => {
        taskID = taskIDs[index]
        var task = db.collection("tasks").doc(taskID);
        return transaction.get(task).then((taskSnapshot) => {
            if (!taskSnapshot.exists) {
                throw false
            }
            var taskIsAvialable = (taskSnapshot.data().volunteerUid == null) ? true : false;
            if (taskIsAvialable) {
                transaction.update(task, { volunteerUid: props.userData.uid });
                return true
            } else {
                return Promise.reject(false)
            }
        });
    }).then((msg) => {
        succeeded.push(tasks[taskID])
        checkIfEnded()
    }).catch((msg) => {
        failed.push(tasks[taskID])
        checkIfEnded()
    });
}

function checkIfEnded() {
    index++;
    if (index < numberOfTasks) {
        runTrans()
    } else {
        sendCompletionMsg();
    }     
}

function sendCompletionMsg() {    
    if (succeeded.length == numberOfTasks) {
        props.dispatch({ type: 'OPEN_MODAL', msg: 'ASSIGN_TASKS_SUCCESS', entries: succeeded });
    } else {
        if (succeeded.length == 0) {
            props.dispatch({ type: 'OPEN_MODAL', msg: 'ASSIGN_TASKS_FAILED', entries: { failed: failed } });
        } else {
            props.dispatch({ type: 'OPEN_MODAL', msg: 'ASSIGN_TASKS_MIX', entries: { succeeded: succeeded, failed: failed } });
        }

    }
    refresh4User(props.dispatch, props.userData.region, props.userData.uid);
}
