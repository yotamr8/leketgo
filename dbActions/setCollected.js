import fire from '../config/firebaseConfig'

export default function setTaskCollected(taskID) {
    const db = fire.firestore();
    db.collection("tasks").doc(taskID).set(
        { collected: true },
        { merge: true })
        .then(console.log("task set to collected."));
}