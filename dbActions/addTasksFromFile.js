import fire from '../config/firebaseConfig';
import XLSX from 'xlsx';

export default function handleFileUpload(file){
    const reader = new FileReader();

    reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });

        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        addTasksToDB(data);
        console.log("Data from file was read succesfully.");
    };
    reader.readAsBinaryString(file);
    console.log(file);
}

function addTasksToDB(data) {
    const taskCollection = fire.firestore().collection('tasks');
    const timeStampCreator = fire.firebase_.firestore.Timestamp; //.firestore.Timestamp;
    console.log(timeStampCreator);
    var rows = data.split(/[\r\n|\n]+/);
    for (let i = 1; i < rows.length - 1; i++) {
        var row = text2arr(rows[i]);
        console.log(row);
        var timeStamp = timeStampCreator.fromDate(new Date(row[2] + 'T' + row[3]));
        taskCollection.doc(row[0] + '-' + row[2]).set({  // row[0]-taskID, row[2]-date. create unique id for each task.
            name: row[1],
            timestamp: timeStamp,
            city: row[4],
            address: row[5],
            "contact number": row[6],
            "contact name": row[7],
            notes: row[8],
            region: row[9],
            longitude: (row[10] == "") ? "" : Number(row[10]),
            latitude: (row[11] == "") ? "" : Number(row[11]),
            volunteerUid: null,
            reportFilled: false,
            collected: false
        });
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