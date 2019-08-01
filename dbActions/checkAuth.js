import fire from '../config/firebaseConfig'
import refresh4User from './refresh4User'
import getAllUsers from './getAllUsers'
import getAllRegionTasks from './getAllRegionTasks'
import Router from 'next/router'

export default function checkAuthAndRefresh(dispatch) {
    fire.auth().onAuthStateChanged((user) => {
        const db = fire.firestore();
        console.log(user);
        if (user) {
            dispatch({ type: "RESET_UPDATED_LIST" })
            db.collection("users").doc(user.uid).get().then((doc) => {
                dispatch({ type: 'LOGIN', user: doc.data(), uid: user.uid });
                if (doc.data().admin == false) {                    
                    refresh4User(dispatch, doc.data().region, user.uid);
                } else {
                    getAllUsers(dispatch);
                    getAllRegionTasks(dispatch, doc.data().region);
                }
                dispatch({ type: 'AUTHCHECKED' });
            });
        } else {
            Router.push('/login');
            dispatch({ type: 'AUTHCHECKED' });
        }
    });
}