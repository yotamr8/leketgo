import fire from '../config/firebaseConfig'
import refresh4User from './refresh4User'

/*
    Function gets task id and data, and sets its relevant report field to data.        
    Then sends feedback toast to user.
*/

export default function setTaskReport(props, taskID, data) {
    const db = fire.firestore();    
            
    db.collection("tasks").doc(taskID).set(
        data,
        { merge: true })
        .then(() => {
            refresh4User(props.dispatch, props.userData.region, props.userData.uid)
            props.dispatch({ type: 'PUSH_TOAST', title: `הצלחה`, body: `המשוב שמילאת נשמר במערכת. תודה רבה!`, delay: 10000 })                    
        })
        .catch(() => {
            props.dispatch({ type: 'PUSH_TOAST', title: `שגיאה`, body: `לא ניתן היה לשמור את המשוב שמילאת במערכת. אנא בדוק את התקשורת במכשירך, ונסה שנית. אם התקלה חוזרת אנא צור קשר עם המנהל/ת.`, delay: 15000 })        
        });
}