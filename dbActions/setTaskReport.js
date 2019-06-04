import fire from '../config/firebaseConfig'

export default function setTaskReport(taskID, data) {
    const db = fire.firestore();
    console.log(taskID, data)
    
    // bug with hebrew
    console.log(data)
    db.collection("tasks").doc(taskID).set(
        data,
        { merge: true })
        .then(console.log("report filled successfully."));
}