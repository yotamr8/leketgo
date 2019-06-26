import fire from '../config/firebaseConfig'
import refresh4User from './refresh4User'

export default function setUndoTask(props, taskID) {
    const db = fire.firestore();
    db.collection("tasks").doc(taskID).set(
        { volunteerUid: null },
        { merge: true })
        .then(refresh4User(props.dispatch, props.userData.region, props.userData.uid));
}