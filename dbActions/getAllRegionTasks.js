import fire from '../config/firebaseConfig'

export default function getAllRegionTasks(dispatch, region) {
    const db = fire.firestore();
    var tasks = [];
    db.collection("tasks")
        .where("region", "==", region)
        .get().then(function (querySnapshot) {
        querySnapshot.forEach(function (task) {
            tasks.push({ ...task.data(), id: task.id })
        });
		dispatch({ type: 'GETALLREGIONTASKS', tasks: tasks })
    });
}