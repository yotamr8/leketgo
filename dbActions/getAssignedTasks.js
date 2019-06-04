import fire from '../config/firebaseConfig'
import { getStartDate } from './dates'

export default function getAssigned(dispatch, uid) {
    const db = fire.firestore();

    db.collection("tasks")
        .where("volunteerUid", "==", uid)
        .where("timestamp", ">", getStartDate() )
        .where("collected", "==", false)
        .get()
        .then((querySnapshot) => {
            var tasks = [];
            querySnapshot.forEach(function (doc) {
                var task = doc.data();
                task.id = doc.id;
                tasks.push(task);
            });
            dispatch({ type: 'ASSIGNEDTASKS', tasks: tasks });
        });
}