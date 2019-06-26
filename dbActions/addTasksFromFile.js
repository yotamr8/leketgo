import fire from '../config/firebaseConfig';
import getAllRegionTasks from './getAllRegionTasks'
import XLSX from 'xlsx';

export default function handleFileUpload(props, file){
    const reader = new FileReader();

    reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });

        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        addTasksToDB(props, data);
        console.log("Data from file was read succesfully.");
    };
    reader.readAsBinaryString(file);
    console.log(file);
}

function addTasksToDB(props, data) {
    const taskCollection = fire.firestore().collection('tasks');
    const timeStampCreator = fire.firebase_.firestore.Timestamp;
    var rows = data.split(/[\r\n|\n]+/);
    for (let i = 1; i < rows.length ; i++) {
        var row = text2arr(rows[i]);

        if (row[0] == "" || row[1] == "" || row[2] == "" || row[3] == ""
            || row[4] == "" || row[5] == "" || row[6] == "" || row[8] == "") {
            continue
        }
        
        let year = row[1].split('/')[2]
        year = (year.length == 2) ? ("20" + year) : year
        let month = row[1].split('/')[1]
        month = (month.length == 1) ? ("0" + month) : month
        let day = row[1].split('/')[0]
        day = (day.length == 1) ? ("0" + day) : day
        let date = year + "-" + month + "-" + day
        var timeStamp = timeStampCreator.fromDate(new Date(date + 'T' + row[2]));

        var firstSuccess = false;

        taskCollection.doc().set({  // generates unique id
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
        }).then(() => {
            if (!firstSuccess) {
                firstSuccess = true;
                props.dispatch({ type: 'PUSH_TOAST', title: 'success', body: 'Data loaded from file successfully.', delay: 5000 })  //TODO cant write here in hebrew
            }
        });
        getAllRegionTasks(props.dispatch, props.userData.region)
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