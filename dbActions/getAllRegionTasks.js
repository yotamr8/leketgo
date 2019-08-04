import fire from '../config/firebaseConfig'

/*
    Function gets region, and pulls all tasks in that region.        
    Then it stores data in state, and updates the updated list that 'tasks' data is updated.    
*/

export default function getAllRegionTasks(dispatch, region) {
    const db = fire.firestore();
    var tasks = [];
    db.collection("tasks")
        .where("region", "==", region)
        .orderBy("timestamp")
        .get().then(function (querySnapshot) {
        querySnapshot.forEach(function (task) {
            tasks.push({ ...task.data(), id: task.id })
        });
        dispatch({ type: 'GETALLREGIONTASKS', tasks: tasks })       // saves tasks data to state.
        dispatch({ type: 'UPDATE_UPDATED_LIST', data: 'tasks' })    // update updated list that task data is up to date.
    });
}