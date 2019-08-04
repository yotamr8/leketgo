import fire from '../config/firebaseConfig'
import getAllRegionTasks from './getAllRegionTasks'

/*
    Function gets the region, taskID and data of the task, and updates task with new data.
    At the end, sends feedback to user with toast.
*/

export default function editTask(props, region, taskID, data) {
    const taskCollection = fire.firestore().collection('tasks');
    var timeStampCreator = fire.firebase_.firestore.Timestamp;
    var timeStamp = timeStampCreator.fromDate(new Date(data.date + 'T' + data.time));

    taskCollection.doc(taskID).set(
        { 
            name: data.name,
            timestamp: timeStamp,
            city: data.city,
            address: data.address,
            "contact number": data.contactNumber,
            "contact name": data.contact,
            notes: data.comment
        },
        { merge: true }
    )
        .then(() => {
            props.dispatch({ type: 'PUSH_TOAST', title: `הצלחה בשינוי פרטי משימה`, body: `פרטי משימת ${data.name} שונו בהצלחה`, delay: 5000 })        
        })
        .catch(() => {
            props.dispatch({ type: 'PUSH_TOAST', title: `שגיאה בשינוי פרטי המשימה`, body: `לא ניתן היה לשנות את פרטי משימת ${data.name}`, delay: 5000 })        
        });
    
    getAllRegionTasks(props.dispatch, region) // refresh page data
}