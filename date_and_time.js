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

const jan = 0;
const feb = 1;
const mar = 2;
const apr = 3;
const may = 4;
const jun = 5;
const jul = 6;
const aug = 7;
const sep = 8;
const oct = 9;
const nov = 10;
const dec = 11;

const sunday = 0
const monday = 1
const tuesday = 2
const wednesday = 3
const thursday = 4
const friday = 5
const saturday = 6

function withoutTime(date) {
    var date = new Date(date.getTime());
    date.setHours(0,0,0,0);
    return date;
}

function getDateOfNextSpecificDayOfWeek(firstCandidateDate, dayOfWeek) {
    var copiedDate = new Date(firstCandidateDate.getTime());
    copiedDate.setDate(firstCandidateDate.getDate() + dayOfWeek - firstCandidateDate.getDay());
    return copiedDate;
}

module.exports = {
    getTimeAsString,
    getDateOfNextSpecificDayOfWeek,
    monday,
    saturday
}