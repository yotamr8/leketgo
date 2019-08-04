import fire from '../config/firebaseConfig'
import refresh4User from './refresh4User'

/*
    Function gets task id, and unassigns it from any user (sets its volunteerUid as 'null').   
    Then sends feedback toast to user.
*/

export default function setUndoTask(props, taskID) {
    const db = fire.firestore();
    db.collection("tasks").doc(taskID).set(
        { volunteerUid: null },
        { merge: true })
        .then(() => {
            props.dispatch({ type: 'PUSH_TOAST', title: `הצלחה`, body: `השיבוץ שלך למשימה בוטל בהצלחה`, delay: 5000 })        
            refresh4User(props.dispatch, props.userData.region, props.userData.uid)
        })
        .catch(() => {
            props.dispatch({ type: 'PUSH_TOAST', title: `שגיאה בביטול השיבוץ`, body: `אירעה תקלה בניסיון לבטל את השיבוץ. אנא בדוק את התקשורת במכשירך, ונסה שנית. אם התקלה חוזרת אנא צור קשר עם המנהל/ת`, delay: 5000 })        
        });
}