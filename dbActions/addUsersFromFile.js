import fire from '../config/firebaseConfig';
import addUser from './addUser'
import XLSX from 'xlsx';

/*
    Function uploads data from the excel file, and iterates through rows, assuming each row represents a valid user.
    Each valid user data, is sent to addUser function.    
*/

export default function handleUserFileUpload(props, file) {
    const reader = new FileReader();

    reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });

        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        addUsers(props, data);
    };
    reader.readAsBinaryString(file);
    console.log(file);
}

function addUsers(props, data) {    
    var rows = data.split(/[\r\n|\n]+/);
    for (let i = 1; i < rows.length; i++) {
        var row = text2arr(rows[i]);

        if (row[0] == "" || row[1] == "" || row[2] == "" || row[3] == ""    // if row doesn't have vital data for user - skip
            || row[4] == "" || row[5] == "" || row[6] == "" || row[7] == "") {
            continue
        }
               
        let user = {
            firstName: row[0],
            lastName: row[1],
            phone: row[2],
            region: row[3],
            tz: row[4],            
            email: row[5],            
            city: row[6],
            address: row[7],            
            comment: (row[8] != "") ? row[8] : "",
            admin: (row[9] != "") ? ((row[9] == "true" ? true : false)) : false,        
            disabled: (row[10] != "") ? ((row[10] == "true" ? true : false)) : false            
        }
        addUser(props, user)        
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