import fire from '../config/firebaseConfig'
import { getStartDate } from './dates'

/*
    Function gets volunteers uid, and pulls all history tasks that the volunteer has done.        
    Then it stores data in state, and updates the updated list that 'history' data is updated.    
*/

export default function getHistory(dispatch, uid) {
    const db = fire.firestore();

    db.collection("tasks")
        .where("volunteerUid", "==", uid)
        .where("reportFilled", "==", true)
        .get()
        .then((querySnapshot) => {
            var tasks = [];
            querySnapshot.forEach(function (doc) {
                var task = doc.data();
                task.id = doc.id;
                tasks.push(task);
            });
            dispatch({ type: 'HISTORYTASKS', tasks: tasks });           // saves users data to state.
            dispatch({ type: 'UPDATE_UPDATED_LIST', data: 'history' })  // update updated list that history data is up to date.
        });
}