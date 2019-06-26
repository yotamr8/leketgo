import fire from '../config/firebaseConfig'

export default function editPersonal(props, uid, changes) {
    const userCollection = fire.firestore().collection('users');
    userCollection.doc(uid).set(
        changes,
        { merge: true }
    )
        .then(() => {            
            // TODO modal success info
        });
}