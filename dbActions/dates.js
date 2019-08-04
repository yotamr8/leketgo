export function getEndDate() {     // if it is Thursday or after, return time of next Saturday. else, return time of this saturday. for unassigned tasks.
    var now = new Date();
    var result = new Date(now);
    var weekDay = result.getDay();

    if (weekDay < 4) {    // before thursday
        result.setDate(result.getDate() + 6 - weekDay)
    } else {
        result.setDate(result.getDate() + 13 - weekDay)
    }

    result.setHours(23);
    result.setMinutes(59);
    result.setSeconds(59);
    result.setMilliseconds(999);

    return result
}

export function getStartDate() {   // get the beginning time of the day
    var now = new Date();
    var result = new Date(now);

    result.setHours(0);
    result.setMinutes(0);
    result.setSeconds(0);
    result.setMilliseconds(0);

    return result;
}

export function getWeekBeginning() {
    var now = new Date();
    var result = new Date(now);

    result.setDate(result.getDate() - result.getDay())  // set to sunday

    result.setHours(0);
    result.setMinutes(0);
    result.setSeconds(0);
    result.setMilliseconds(0);

    return result;
}

export function getWeekEnding() {
    var now = new Date();
    var result = new Date(now);

    result.setDate(result.getDate() + (6 - result.getDay()))  // set to saturday

    result.setHours(23);
    result.setMinutes(59);
    result.setSeconds(59);
    result.setMilliseconds(999);

    return result;
}

export function getEndOfNextDay() {
    var now = new Date();
    var result = new Date(now);

    result.setDate(result.getDate() + 1 )  // set to next day

    result.setHours(23);
    result.setMinutes(59);
    result.setSeconds(59);
    result.setMilliseconds(999);

    return result;
}

export function getLastWeekBeginning() {
    var now = new Date();
    var result = new Date(now);

    result.setDate(result.getDate() - (result.getDay() + 7) )  // set to sunday of last week

    result.setHours(0);
    result.setMinutes(0);
    result.setSeconds(0);
    result.setMilliseconds(0);

    return result;
}