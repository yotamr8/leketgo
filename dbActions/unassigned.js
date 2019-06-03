import fire from '../config/firebaseConfig'

export const getUnassigned = (dispatch, region) => {
    const db = fire.firestore();
    db.collection("tasks")
        .where("region", "==", region)
        .where("volunteerUid", "==", null)
        .where("timestamp", "<", new Date())
        .get()
        .then((querySnapshot) => {
            var tasks = [];
            querySnapshot.forEach(function (doc) {
                var task = doc.data();
                task.id = doc.id;
                tasks.push(task);
            });
            dispatch({ type: 'UNASSIGNEDTASKS', tasks: tasks });
        });
}