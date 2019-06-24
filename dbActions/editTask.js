import fire from '../config/firebaseConfig'
import getAllRegionTasks from './getAllRegionTasks'

export default function editTask(dispatch, region, taskID, data) {

    // TODO verify values exist before trying to create timestamp or item in collection

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
    ).then(console.log("edited succesfully"));
    
    //  TODO dispatch modal
    getAllRegionTasks(dispatch, region) // refresh page data
}