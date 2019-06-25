import fire from '../config/firebaseConfig'
import getAllUsers from './getAllUsers'

export default function editUser(props, uid, changes) {
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