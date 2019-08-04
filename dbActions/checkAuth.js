import fire from '../config/firebaseConfig'
import refresh4User from './refresh4User'
import getAllUsers from './getAllUsers'
import getAllRegionTasks from './getAllRegionTasks'
import Router from 'next/router'

/*
    Function runs every time page is entered, and runs some login checks and data pulls from database.
*/

export default function checkAuthAndRefresh(dispatch) {
    fire.auth().onAuthStateChanged((user) => {
        const db = fire.firestore();        
        if (user) {
            dispatch({ type: "RESET_UPDATED_LIST" })                            // reset updated data list ( = {})
            db.collection("users").doc(user.uid).get().then((doc) => {          // get user data from databse with auth uid
                dispatch({ type: 'LOGIN', user: doc.data(), uid: user.uid });   // set state as logged in
                if (doc.data().admin == false) {                    
                    refresh4User(dispatch, doc.data().region, user.uid);        // pull data relevant for user
                } else {
                    getAllUsers(dispatch);                                      // pull data relevant for admin
                    getAllRegionTasks(dispatch, doc.data().region);
                }
                dispatch({ type: 'AUTHCHECKED' });                              // set state as AUTHCHECKED
            });
        } else {
            Router.push('/login');
            dispatch({ type: 'AUTHCHECKED' });                                  // if not logged in - redirect to login page
        }
    });
}