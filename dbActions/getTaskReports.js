import fire from '../config/firebaseConfig'
import { getStartDate } from './dates'

export default function getTaskReports(dispatch, uid) {
    const db = fire.firestore();

    db.collection("tasks").where("volunteerUid", "==", uid)
        .where("reportFilled", "==", false).get()
        .then((querySnapshot) => {
            var tasks = [];
            querySnapshot.forEach(function (doc) {
                var task = doc.data();
                task.id = doc.id;
                if (task.collected) {
                    tasks.push(task);
                } else {
                    if (task.timestamp < getStartDate() ) {
                        tasks.push(task);
                    }
                }
            });
            dispatch({ type: 'TASKREPORTS', tasks: tasks });
        });
}