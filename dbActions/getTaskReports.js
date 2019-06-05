import fire from '../config/firebaseConfig'

export default function getTaskReports(dispatch, uid) {
    const db = fire.firestore();

    db.collection("tasks").where("volunteerUid", "==", uid)
        .where("timestamp", "<", new Date())
        .where("reportFilled", "==", false).get()
        .then((querySnapshot) => {
            var tasks = [];
            querySnapshot.forEach(function (doc) {
                var task = doc.data();
                task.id = doc.id;
                tasks.push(task);
            });
            dispatch({ type: 'TASKREPORTS', tasks: tasks });
        });
}