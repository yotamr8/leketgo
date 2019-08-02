import fire from '../config/firebaseConfig'
import getAllRegionTasks from './getAllRegionTasks'

export default function addTask(props, region, data) {

// TODO verify values exist before trying to create timestamp or item in collection

    const taskCollection = fire.firestore().collection('tasks');
    var timeStampCreator = fire.firebase_.firestore.Timestamp;
    var timeStamp = timeStampCreator.fromDate(new Date(data.date + 'T' + data.time));

    taskCollection.doc().set({  // generates unique id
        name: data.name,
        timestamp: timeStamp,
        city: data.city,
        address: data.address,
        "contact number": data.contactNumber,
        "contact name": data.contact,
        notes: data.comment,
        region: region,
        volunteerUid: null,
        reportFilled: false,
        collected: false
    })
        .then(() => {
            props.dispatch({ type: 'PUSH_TOAST', title: 'משימה נוספה בהצלחה', body: `משימת ${data.name} נוספה בהצלחה.`, delay: 5000 })
        })
        .catch(() => {
            props.dispatch({ type: 'PUSH_TOAST', title: 'שגיאה בהוספת משימה', body: `לא ניתן היה להוסיף את משימת ${data.name}.`, delay: 5000 })
        });
    
//  TODO dispatch modal
    getAllRegionTasks(props.dispatch, region) // refresh page data
} 