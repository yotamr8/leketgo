import fire from '../config/firebaseConfig'
import { getEndDate, getStartDate } from './dates'

/*
    Function gets volunteers region, and pulls all available tasks in his region.        
    Then it stores data in state, and updates the updated list that 'unassigned' data is updated.    
*/

export default function getUnassigned(dispatch, region){
    const db = fire.firestore();
    
    // for debugging
    //console.log(getStartDate())
    //console.log(getEndDate() )

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
            dispatch({ type: 'UNASSIGNEDTASKS', tasks: tasks });            // saves users data to state.
            dispatch({ type: 'UPDATE_UPDATED_LIST', data: 'unassigned' })   // update updated list that unassigned data is up to date.
        });
}
