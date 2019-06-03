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

csv({ ignoreEmpty: false })
    .fromFile(taskFilename)
    .then((jsonObj) => {
        jsonObj.forEach((row) => {            
            taskCollection.doc(row.taskId + '-' + row.date).set({
                name: row.name,
                timestamp: admin.firestore.Timestamp.fromDate(new Date(row.date + 'T' + row.time)),
                city: row.city,
                address: row.address,
                "contact number": row["contact number"],
                "contact name": row["contact name"],
                notes: row.notes,
                region: row.region,
                longitude: Number(row.longitude),
                latitude: Number(row.latitude),
                volunteerUid: (row.volunteerUid != "") ? row.volunteerUid : null,
                reportFilled: (row.reportFilled == 'TRUE') ? true : false,
                reportFieldNum: (row.reportFieldNum != "") ? Number(row.reportFieldNum) : null,
                foodDesc1: (row.foodDesc1 != "") ? row.foodDesc1 : null,
                foodContainerType1: (row.foodContainerType1 != "") ? row.foodContainerType1 : null,
                foodContainerQuantity1: (row.foodContainerQuantity1 != "") ? Number(row.foodContainerQuantity1) : null,
                foodQuantity1: (row.foodQuantity1 != "") ? Number(row.foodQuantity1) : null,
                foodDesc2: (row.foodDesc2 != "") ? row.foodDesc2 : null,
                foodContainerType2: (row.foodContainerType2 != "") ? row.foodContainerType2 : null,
                foodContainerQuantity2: (row.foodContainerQuantity2 != "") ? Number(row.foodContainerQuantity2) : null,
                foodQuantity2: (row.foodQuantity2 != "") ? Number(row.foodQuantity2) : null
            })
        });
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
        password: user.tz,
        displayName: user.firstname + ' ' + user.lastname
    })
    .then(function (userRecord) {
        console.log('Successfully created new user:', userRecord);
        updateUserInDB(userRecord.uid, user);
    })
    .catch(function (error) {
        console.log('Error creating new user: ' + user.email, error);
    });
}

function updateUserInDB(uid, user) {
    user.admin = (user.admin == "TRUE") ? true : false;
    userCollection.doc(uid).set(user);
}