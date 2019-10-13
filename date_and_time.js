const getTimeAsString = (date, end) => {
    if(!date) return "";
    const startMinutes = date.getMinutes() && date.getMinutes() !== 0
        ? date.getMinutes()
        : "00";

    let hours = date.getHours();
    let startHours =  hours>12 ? hours-12 : hours;
    let startAmOrPm;
    if(date.getHours()>11) {
        startAmOrPm = "pm";
    } else {
        startAmOrPm = "am";
    }


    let endAmOrPm;
    if(end && end.h && end.h>11) {
        endAmOrPm = "pm";
    } else {
        endAmOrPm = "am";
    }


    var ret = startHours + ":" + startMinutes;
    if(!end || startAmOrPm != endAmOrPm) {
        ret += startAmOrPm;
    }

    if(end && end.h) {
        let endHours = end.h>12 ? end.h-12 : end.h;
        ret += "-";
        ret += endHours;
        if(end.m) {
            ret +=  ":" + end.m
        } else {
            ret +=  ":00"
        }
        ret += endAmOrPm;
    }
    return ret;
};

//module.exports = getTimeAsString;