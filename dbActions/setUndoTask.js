import fire from '../config/firebaseConfig'

export default function setUndoTask(taskID) {
    const db = fire.firestore();
    db.collection("tasks").doc(taskID).set(
        { volunteerUid: null },
        { merge: true })
        .then(console.log("undo success"));
}