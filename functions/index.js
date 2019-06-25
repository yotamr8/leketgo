const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

exports.addUser = functions.https.onCall((data, context) => {
    var user = data
    return admin.auth().getUserByEmail(user.email)
        .then(function (userRecord) {
            console.log('Email exists in Auth. ', userRecord.toJSON());
            return { data: false };
        })
        .catch( function(error){     // error means that the email is not in auth system, which is good, because we want to add it
            console.log(user.email, error.code);
            if (error.code == 'auth/user-not-found') {
                return admin.auth().createUser({
                        email: user.email,
                        emailVerified: false,
                        password: user.tz
                    })
                        .then( function(userRecord){
                            console.log(userRecord)
                            return userRecord        
                        })
                        .catch( function(error){
                            console.log('Error creating new user: ' + user.email, error);
                            return { data: error };
                        });
            }                   
        });
});

exports.updateUser = functions.https.onCall((data, context) => {
    var uid = data.uid
    var changes = data.changes
    return admin.auth().updateUser(uid, changes).then((userRecord) => { return userRecord });
});