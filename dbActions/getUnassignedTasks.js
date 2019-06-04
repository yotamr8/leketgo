import fire from '../config/firebaseConfig'
import { getEndDate, getStartDate } from './dates'

export default function getUnassigned(dispatch, region){
    const db = fire.firestore();

    console.log(getStartDate())
    console.log(getEndDate() )

    db.collection("tasks")
        .where("region", "==", region)
        .where("volunteerUid", "==", null)
        .where("timestamp", ">", getStartDate() )
        .where("timestamp", "<", getEndDate() )
        .get()
        .then((querySnapshot) => {
            var tasks = [];
            querySnapshot.forEach(function (doc) {
                var task = doc.data();
                task.id = doc.id;
                tasks.push(task);
            });
            console.log(tasks)
            dispatch({ type: 'UNASSIGNEDTASKS', tasks: tasks });
        });
}
