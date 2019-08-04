import fire from '../config/firebaseConfig';
import getAllRegionTasks from './getAllRegionTasks'
import XLSX from 'xlsx';

/*
    Function uploads data from the excel file, and iterates through rows, assuming each row represents a valid task.
    Each valid task data, is added to database.
    At the end, sends feedback to user with toast about how many tasks out of valid rows were succesfully added, and refreshes the page data.
*/

export default function handleTaskFileUpload(props, file){
    const reader = new FileReader();

    reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });

        const wsname = wb.SheetNames[0];    
        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        addTasksToDB(props, data);        
    };
    reader.readAsBinaryString(file);
    console.log(file);
}

function addTasksToDB(props, data) {
    const taskCollection = fire.firestore().collection('tasks');
    const timeStampCreator = fire.firebase_.firestore.Timestamp;

    var rows = data.split(/[\r\n|\n]+/);
    var numOfValidRows = rows.length - 1;   // num of valid rows starts at the number of rows minus headers
    var numOfSuccess = 0;                   // num of rows that were loaded succesfully to database
    var numOfFailure = 0;                   // num of rows that were not loaded succesfully to database

    for (let i = 1; i < rows.length; i++) {
        var row = text2arr(rows[i]);

        if (row[0] == "" || row[1] == "" || row[2] == "" || row[3] == ""    // check for row validity
            || row[4] == "" || row[5] == "" || row[6] == "" || row[8] == "") {
            numOfValidRows--;               // if row is not valid, reduce numOfValidRows by 1            
            if (numOfFailure + numOfSuccess == numOfValidRows) {    // if finished interating through rows - pop toast for user feedback 
                adminFeedback(props, numOfValidRows, numOfSuccess, numOfFailure)
            }
            continue
        }

        // get timestamp out of date columns
        let year = row[1].split('/')[2]
        year = (year.length == 2) ? ("20" + year) : year
        let month = row[1].split('/')[1]
        month = (month.length == 1) ? ("0" + month) : month
        let day = row[1].split('/')[0]
        day = (day.length == 1) ? ("0" + day) : day
        let date = year + "-" + month + "-" + day
        var timeStamp = timeStampCreator.fromDate(new Date(date + 'T' + row[2]));

        taskCollection.doc().set({  // generates unique id for task, and set its fields
            name: row[0],
            timestamp: timeStamp,
            city: row[3],
            address: row[4],
            "contact number": row[5],
            "contact name": row[6],
            notes: row[7],
            region: row[8],
            volunteerUid: null,
            reportFilled: false,
            collected: false
        })
        .then(() => {       // in case of success
            numOfSuccess++;            
            if (numOfFailure + numOfSuccess == numOfValidRows) {    // if finished interating through rows - pop toast for user feedback 
                adminFeedback(props, numOfValidRows, numOfSuccess, numOfFailure)
            }
        
        })
        .catch((err) => {      // in case of error
            console.log(err)            
            numOfFailure++;
            if (numOfFailure + numOfSuccess == numOfValidRows) {    // if finished interating through rows - pop toast for user feedback 
                adminFeedback(props, numOfValidRows, numOfSuccess, numOfFailure)
            }
        });        
    }
}

function adminFeedback(props, numOfValidRows, numOfSuccess, numOfFailure) {
    getAllRegionTasks(props.dispatch, props.userData.region) // refresh data for app
    if (numOfValidRows == numOfFailure) {
        props.dispatch({ type: 'PUSH_TOAST', title: 'שגיאה בהעלאת הנתונים מהקובץ', body: `לא היה ניתן להעלות אף שורה מתוך הקובץ, מתוך ${numOfValidRows} שורות תקינות.`, delay: 10000 })
    } else {
        props.dispatch({ type: 'PUSH_TOAST', title: 'המידע מהקובץ נשמר במאגר הנתונים', body: `מתוך ${numOfValidRows} שורות תקינות בקובץ, הועלו ${numOfSuccess} בהצלחה.`, delay: 10000 })
    }
}

function text2arr(text) {
    var arr = [];
    var cell = '';
    var between = false;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == '"') {
            between = !between;
        } else {
            if (text[i] == ',') {
                if (between) {
                    cell += text[i];
                } else {
                    arr.push(cell);
                    cell = '';
                }
            } else {
                cell += text[i];
            }
        }
    }
    arr.push(cell);
    return arr;
}