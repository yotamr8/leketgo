import fire from '../config/firebaseConfig'
import getAllUsers from './getAllUsers'

export default function addUser(props, user) {
    // check if email already exists in authentication system
    const addUserFunc = fire.functions().httpsCallable('addUser');
    return addUserFunc(user).then((result) => {
        console.log(result, user)
        if (result.data.data == false) {
            props.dispatch({ type: 'PUSH_TOAST', title: `תקלה ביצירת המשתמש: ${user.firstName} ${user.lastName}`, body: `כתובת המייל ${user.email} כבר נמצאת בשימוש.`, delay: 5000 })
            return false
        }
        var userCollection = fire.firestore().collection('users');
        return userCollection.doc(result.data.uid).set(user)
            .then(() => {            
                getAllUsers(props.dispatch)     // refresh
                props.dispatch({ type: 'PUSH_TOAST', title: `משתמש חדש נוסף בהצלחה`, body: `המשתמש: ${user.firstName } ${user.lastName } נוסף בהצלחה.`, delay: 5000 })
                return true                
            })
            .catch((err) => {
                console.log(err)
                props.dispatch({ type: 'PUSH_TOAST', title: `תקלה ביצירת המשתמש: ${user.firstName} ${user.lastName}`, body: err, delay: 5000 })
                return false
            });
    });    
}
