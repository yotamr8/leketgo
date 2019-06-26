import fire from '../config/firebaseConfig'
import getAllUsers from './getAllUsers'

export default function editUserAuth(props, uid, changes) {
    const updateUserFunc = fire.functions().httpsCallable('updateUser');
    let data =  {
        uid: uid, 
        changes: changes
    }  
    updateUserFunc(data).then((result) => {
        getAllUsers(props.dispatch)// refresh        
        console.log(result)      
    });
}