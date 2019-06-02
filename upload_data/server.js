const admin = require('firebase-admin');
const csv = require('csvtojson');

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var taskFilename = './tasks.csv';
var userFilename = './users.csv';

var taskCollection = db.collection('tasks');
var userCollection = db.collection('users');
var results = [];
var newUsers = [];

csv({ ignoreEmpty: true })
    .fromFile(taskFilename)
    .then((jsonObj) => {
        jsonObj.forEach( (row) => taskCollection.doc(row.taskId + '-' + row.date).set(row) );
    })


csv({ ignoreEmpty: true })
    .fromFile(userFilename)
    .on('data', (data) => {
        results.push(JSON.parse(data.toString('utf8')))
    })
    .then((jsonObj) => {
        jsonObj.forEach((user) => (checkIfUserExistsInAuth(user)))
    })


function checkIfUserExistsInAuth(user) {
    admin.auth().getUserByEmail(user.email)
        .then(function (userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Found user in Auth. updating in DB:', userRecord.toJSON());
            updateUserInDB(userRecord.uid, user);
        })
        .catch(function (error) {
            console.log('Error with ' + user.email, error.code);
            if (error.code == 'auth/user-not-found') {
                addNewUserToAuth(user);     
            }
        });
}

function addNewUserToAuth(user) {
    admin.auth().createUser({
        email: user.email,
        emailVerified: false,
        password: user.id,
        displayName: user.firstname + ' ' + user.lastname
    })
    .then(function (userRecord) {
        console.log('Successfully created new user:', userRecord);
        addNewUserToDB(userRecord.uid, user);
    })
    .catch(function (error) {
        console.log('Error creating new user: ' + user.email, error);
    });
}

function addNewUserToDB(uid, user) {
    userCollection.doc(uid).set(user);
}

function updateUserInDB(uid, user) { // duplicate code - remove
    userCollection.doc(uid).set(user);
}