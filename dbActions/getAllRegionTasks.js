import fire from '../config/firebaseConfig'

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
        dispatch({ type: 'GETALLREGIONTASKS', tasks: tasks })
        dispatch({ type: 'UPDATE_UPDATED_LIST', data: 'tasks' })
    });
}