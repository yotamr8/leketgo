import getUnassigned from '../dbActions/getUnassignedTasks'
import getAssigned from '../dbActions/getAssignedTasks'
import getTaskReports from '../dbActions/getTaskReports'

export default function refresh4User(dispatch, region, uid) {
    getUnassigned(dispatch, region);

    getAssigned(dispatch, uid);

    getTaskReports(dispatch, uid);
}