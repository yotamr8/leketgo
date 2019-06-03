import fire from '../config/firebaseConfig'

function sendCompletionMsg(dispatch, numOfFailures, numOfSuccesses, entrySelectedCounter, selectedEntries){
    console.log("test2", numOfSuccesses, numOfFailures, entrySelectedCounter)
    if (numOfFailures == 0 && numOfSuccesses == entrySelectedCounter) {
        dispatch({ type: 'OPEN_MODAL', msg: 'ASSIGN_TASKS_SUCCESS', entries: selectedEntries });
    }
    if (numOfSuccesses == 0 && numOfFailures == entrySelectedCounter) {
        dispatch({ type: 'OPEN_MODAL', msg: 'ASSIGN_TASKS_FAILED', entries: selectedEntries });
    }
    if (numOfFailures > 0 && numOfSuccesses > 0) {
        dispatch({ type: 'OPEN_MODAL', msg: 'ASSIGN_TASKS_MIX', entries: selectedEntries });
    }
}


function runTrans(dispatch, taskIDs, uid, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db) {
    db.runTransaction((transaction) => {
        var taskID = taskIDs[index]
        var task = db.collection("tasks").doc(taskID);
        return transaction.get(task).then((taskSnapshot) => {
            if (!taskSnapshot.exists) {
                throw "Could not find task with given ID: " + taskID;
            }
            var taskIsAvialable = (taskSnapshot.data().volunteerUid == null) ? true : false;
            if (taskIsAvialable) {
                transaction.update(task, { volunteerUid: uid });
                return "Task was assigned to user successfully!";
            } else {
                return Promise.reject("Sorry! task was taken earlier.");
            }
        });
    }).then((msg) => {
        index++;
        console.log(msg);
        numOfSuccesses++;
        console.log("test", numOfSuccesses, numOfFailures, entrySelectedCounter)
        if (index < entrySelectedCounter) {
            runTrans(dispatch, taskIDs, uid, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db)
        }
        if (numOfFailures + numOfSuccesses == entrySelectedCounter) {
            sendCompletionMsg(dispatch, numOfFailures, numOfSuccesses, entrySelectedCounter, selectedEntries);
        }
    }).catch((msg) => {
        index++;
        console.log(msg);
        numOfFailures++;
        console.log("test", numOfSuccesses, numOfFailures, entrySelectedCounter)
        if (index < entrySelectedCounter) {
            runTrans(dispatch, taskIDs, uid, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db)
        }
        if (numOfFailures + numOfSuccesses == entrySelectedCounter) {
            sendCompletionMsg(dispatch, numOfFailures, numOfSuccesses, entrySelectedCounter, selectedEntries);
        }
    });
}

export default function setAssignedTasks(dispatch, taskIDs, uid, entrySelectedCounter, selectedEntries) {
    const db = fire.firestore();
    var numOfSuccesses = 0;
    var numOfFailures = 0;
    var index = 0;
    runTrans(dispatch, taskIDs, uid, entrySelectedCounter, selectedEntries, index, numOfSuccesses, numOfFailures, db)
}
