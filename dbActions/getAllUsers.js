import fire from '../config/firebaseConfig'

export default function getAllUsers(dispatch) {
    const db = fire.firestore();
    var users = [];
    db.collection("users").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (user) {
            users.push({ ...user.data, uid: user.id})
        });
        dispatch({ type: 'GETALLUSERS', users: users })
    });
}