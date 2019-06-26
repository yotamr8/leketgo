import fire from '../config/firebaseConfig'
import getAllUsers from './getAllUsers'

export default function addUser(props, user) {
    // check if email already exists in authentication system
    const addUserFunc = fire.functions().httpsCallable('addUser');
    addUserFunc(user).then((result) => {
        console.log(result)
        if (result.data == false) {
            // TODO modal fail info - email already exists
            return false
        }
        var userCollection = fire.firestore().collection('users');
        userCollection.doc(result.data.uid).set(user).then(() => {            
            getAllUsers(props.dispatch)// refresh
            // TODO modal success info
        });
    });    
}
