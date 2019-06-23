import fire from '../config/firebaseConfig'
import { getStartDate } from './dates'

export default function getHistory(dispatch, uid) {
    const db = fire.firestore();

    db.collection("tasks")
        .where("volunteerUid", "==", uid)
        .get()
        .then((querySnapshot) => {
            var tasks = [];
            querySnapshot.forEach(function (doc) {
                var task = doc.data();
                task.id = doc.id;
                tasks.push(task);
            });
            dispatch({ type: 'HISTORYTASKS', tasks: tasks });
        });
}