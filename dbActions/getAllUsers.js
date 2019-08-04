import fire from '../config/firebaseConfig'

/*
    Function pulls all users.
    Then it stores data in state, and updates the updated list that 'users' data is updated.    
*/

export default function getAllUsers(dispatch) {
    const db = fire.firestore();
    var users = [];
    db.collection("users").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (user) {
            users.push({ ...user.data(), uid: user.id})
        });
        dispatch({ type: 'GETALLUSERS', users: users })             // saves users data to state.
        dispatch({ type: 'UPDATE_UPDATED_LIST', data: 'users' })    // update updated list that users data is up to date.
    });
}