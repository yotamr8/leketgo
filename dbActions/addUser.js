import fire from '../config/firebaseConfig'
import getAllUsers from './getAllUsers'

/*
    Function gets the data of a user, and creates new user in the authentication system with data.
    If succesful, recieves a new uid, and uses it as a id for the user in the user database.
    At the end, sends feedback to user with toast, and refreshes the page data.
*/

export default function addUser(props, user) {

    const addUserFunc = fire.functions().httpsCallable('addUser');
    return addUserFunc(user).then((result) => {        
        if (result.data.data == false) {    // check if email already exists in authentication system
            props.dispatch({ type: 'PUSH_TOAST', title: `תקלה ביצירת המשתמש: ${user.firstName} ${user.lastName}`, body: `כתובת המייל ${user.email} כבר נמצאת בשימוש`, delay: 5000 })
            return false
        }
        var userCollection = fire.firestore().collection('users');
        return userCollection.doc(result.data.uid).set(user)    // uses the new uid returned from the auth system as the id in the users database
            .then(() => {            
                getAllUsers(props.dispatch)     // refresh
                props.dispatch({ type: 'PUSH_TOAST', title: `משתמש חדש נוסף בהצלחה`, body: `המשתמש: ${user.firstName } ${user.lastName } נוסף בהצלחה`, delay: 5000 })
                return true                
            })
            .catch((err) => {
                console.log(err)
                props.dispatch({ type: 'PUSH_TOAST', title: `שגיאה ביצירת המשתמש: ${user.firstName} ${user.lastName}`, body: err, delay: 5000 })
                return false
            });
    });    
}
