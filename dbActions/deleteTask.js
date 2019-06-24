import fire from '../config/firebaseConfig'
import getAllRegionTasks from './getAllRegionTasks'

export default function setTaskReport(props, taskID) {
    const taskCollection = fire.firestore().collection('tasks');
    taskCollection.doc(taskID).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });


    //  TODO dispatch modal
    getAllRegionTasks(props.dispatch, props.userData.region) // refresh page data
}