import fire from '../config/firebaseConfig'
import getAllUsers from './getAllUsers'
import editUserAuth from './editUserAuth'

/*
    Function gets uid of user and changes that are to be made in users data.    
    If changes contain email, password or disabled, changes are also made in auth.
    All changes (except password which isn't saved in database) are made in database.
    At the end, sends true if successful or false if not, so mother function can sent appropriavte toast.
*/

export default function editUser(props, uid, changes) {
    var authChanges = {}
    if (changes.email) {
        authChanges.email = changes.email        
    }
    if (changes.password) {
        authChanges.password = changes.password
        delete changes.password
    }
    if (changes.disabled != undefined) {
        authChanges.disabled = changes.disabled        
    }
    if (Object.keys(authChanges).length != 0) {
        editUserAuth(props, uid, authChanges)
    }

    const userCollection = fire.firestore().collection('users');    
    return userCollection.doc(uid).set(
        changes,
        { merge: true }
    )
        .then(() => {
            getAllUsers(props.dispatch) // refresh 
            return true                 // return true to the promise
        })
        .catch((err) =>
        { return false });              // return false to the promise
}