import fire from '../config/firebaseConfig'
import getAllUsers from './getAllUsers'
import editUserAuth from './editUserAuth'

export default function editUser(props, uid, changes) {
    var authChanges = {}
    if (changes.email) {
        authChanges.email = changes.email        
    }
    if (changes.password) {
        authChanges.password = changes.password
    }
    if (Object.keys(authChanges).length != 0) {
        editUserAuth(props, uid, authChanges)
    }

    const userCollection = fire.firestore().collection('users');
    userCollection.doc(uid).set(
        changes,
        { merge: true }
    )
        .then(() => {
        getAllUsers(props.dispatch)// refresh
        // TODO modal success info
    });
}