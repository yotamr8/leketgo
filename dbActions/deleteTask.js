import fire from '../config/firebaseConfig'
import getAllRegionTasks from './getAllRegionTasks'

/*
    Function get taskID, and deletes it.
    At the end, sends feedback to user about the success of the action.
*/

export default function setTaskReport(props, taskID) {  
    const taskCollection = fire.firestore().collection('tasks');
    taskCollection.doc(taskID).delete().then(() => {      
        props.dispatch({ type: 'PUSH_TOAST', title: `הצלחה`, body: `המשימה נמחקה בהצלחה.`, delay: 5000 })        
    }).catch((error) => {
        props.dispatch({ type: 'PUSH_TOAST', title: `תקלה במחיקת המשימה`, body: `לא ניתן היה למחוק את המשימה: ${error}.`, delay: 5000 })        
    });

    getAllRegionTasks(props.dispatch, props.userData.region) // refresh page data
}