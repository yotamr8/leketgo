import fire from '../config/firebaseConfig'

export default function setTaskReport(taskID, reportValues) {
    const db = fire.firestore();
    console.log(taskID, reportValues)
    var numOfFields = 0;
    var fields = [];
    if (reportValues.mainCourseQ > 0) { numOfFields++; fields.push("mainCourseQ"); }
    if (reportValues.sideCourseQ > 0) { numOfFields++; fields.push("sideCourseQ"); }
    if (reportValues.pastriesQ > 0) { numOfFields++; fields.push("pastriesQ"); }
    if (reportValues.breadQ > 0) { numOfFields++; fields.push("breadQ"); }
    var data = {
        reportFilled: true,
        reportFieldNum: numOfFields
    }
    var dic = {
        "mainCourseQ": 'עיקריות',
        "sideCourseQ": 'תוספות',
        "pastriesQ"  : 'מאפים',
        "breadQ"     : 'לחם'
    }

    for (var i = 0; i < numOfFields; i++) {
        data["foodDesc" + (i + 1)] = dic[fields[i]];
        data["foodContainerType" + (i + 1)] = (fields[i] == "mainCourseQ" || fields[i] == "sideCourseQ") ? 'מיכלים' : (fields[i] == "pastriesQ") ? reportValues.pastriesS : reportValues.breadS;
        data["foodContainerQuantity" + (i + 1)] = reportValues[fields[i]]
    }
    // bug with hebrew
    console.log(data)
    /*db.collection("tasks").doc(taskID).set(
        data,
        { merge: true })
        .then(console.log("report filled successfully."));*/
}