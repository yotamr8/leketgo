import fire from '../config/firebaseConfig'
import refresh4User from './refresh4User'

export default function setTaskReport(props, taskID, data) {
    const db = fire.firestore();
    console.log(taskID, data)
    
    // bug with hebrew
    console.log(data)
    db.collection("tasks").doc(taskID).set(
        data,
        { merge: true })
        .then(() => refresh4User(props.dispatch, props.userData.region, props.userData.uid));
}