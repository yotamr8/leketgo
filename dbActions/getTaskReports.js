import fire from '../config/firebaseConfig'
import { getStartDate } from './dates'

/*
    Function gets volunteers uid, and pulls all history reports awaiting for that volunteer.        
    Then it stores data in state, and updates the updated list that 'reports' data is updated.    
*/

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
            dispatch({ type: 'TASKREPORTS', tasks: tasks });            // saves users data to state.
            dispatch({ type: 'UPDATE_UPDATED_LIST', data: 'reports' })  // update updated list that reports data is up to date.
        });
}