import fire from '../config/firebaseConfig'
import refresh4User from './refresh4User'

export default function setTaskCollected(taskID, props) {
    const db = fire.firestore();
    db.collection("tasks").doc(taskID).set(
        { collected: true },
        { merge: true })
        .then(() => {
            refresh4User(props.dispatch, props.userData.region, props.userData.uid);
            props.dispatch({ type: 'PUSH_TOAST', title: `הצלחה`, body: `המשימה סומנה כבוצעה במערכת. תודה רבה!`, delay: 5000 })        
        })
        .catch(() => {
            props.dispatch({ type: 'PUSH_TOAST', title: `שגיאה`, body: `אירעה תקלה בנסיון לסמן שהמשימה בוצעה במערכת. אנא בדוק את התקשורת במכשירך, ונסה שנית. אם התקלה חוזרת אנא צור קשר עם המנהל/ת.`, delay: 15000 })        
        });
}