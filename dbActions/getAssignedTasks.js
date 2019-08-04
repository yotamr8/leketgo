import fire from '../config/firebaseConfig'
import { getStartDate } from './dates'

/*
    Function gets volunteers uid, and pulls all tasks assigned to that volunteer, that were not collected yet.        
    Then it stores data in state, and updates the updated list that 'assigned' data is updated.    
*/

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
            dispatch({ type: 'ASSIGNEDTASKS', tasks: tasks });              // saves data to state.
            dispatch({ type: 'UPDATE_UPDATED_LIST', data: 'assigned' })     // update updated list that data is up to date.
        });
}