import getUnassigned from '../dbActions/getUnassignedTasks'
import getAssigned from '../dbActions/getAssignedTasks'
import getTaskReports from '../dbActions/getTaskReports'
import getHistory from '../dbActions/getHistory'

/*
    Function gets volunteers region and uid, and calls all functions thatpull data that is relevant to him.        
*/

export default function refresh4User(dispatch, region, uid) {
    getUnassigned(dispatch, region);

    getAssigned(dispatch, uid);

    getTaskReports(dispatch, uid);
	
	getHistory(dispatch, uid);
}