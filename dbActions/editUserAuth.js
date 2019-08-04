import fire from '../config/firebaseConfig'
import getAllUsers from './getAllUsers'

/*
    Function gets uid of user and changes that are to be made in users auth data.        
    Then calls cloud function (stored in firebase) to change user auth data.
    At the end, sends true if successful or false if not, so mother function can sent appropriavte toast.
*/

export default function editUserAuth(props, uid, changes) {
    const updateUserFunc = fire.functions().httpsCallable('updateUser');
    let data =  {
        uid: uid, 
        changes: changes
    }  
    return updateUserFunc(data)
        .then(() => {
            return true
        })
        .catch(() => {
            return false
        });;
}