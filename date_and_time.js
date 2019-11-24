const getTimeAsString = (startTime, endTime) => {
    if(!startTime) return "";
    const startMinutes = startTime && startTime.m && startTime.m !== 0
        ? startTime.m
        : "00";

    let hours = startTime.h;
    let startHours =  hours>12 ? hours-12 : hours;
    let startAmOrPm;
    if(startTime.h>11) {
        startAmOrPm = "pm";
    } else {
        startAmOrPm = "am";
    }


    let endAmOrPm;
    if(endTime && endTime.h && endTime.h>11) {
        endAmOrPm = "pm";
    } else {
        endAmOrPm = "am";
    }


    var ret = startHours + ":" + startMinutes;
    if(!endTime || startAmOrPm != endAmOrPm) {
        ret += startAmOrPm;
    }

    if(endTime && endTime.h) {
        let endHours = endTime.h>12 ? endTime.h-12 : endTime.h;
        ret += "-";
        ret += endHours;
        if(endTime.m) {
            ret +=  ":" + endTime.m
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
//    console.log("params: "+  firstCandidateDate + " and " +dayOfWeek)
    var copiedDate = new Date(firstCandidateDate.getTime());
    var daysToOffset = dayOfWeek - firstCandidateDate.getDay()
    if(daysToOffset<0){
        daysToOffset = daysToOffset + 7
    }

    copiedDate.setDate(firstCandidateDate.getDate() + daysToOffset);
    //console.log(firstCandidateDate + " + "+dayOfWeek + " - "+firstCandidateDate.getDay() + " = " + copiedDate)
    return copiedDate;
}

function getDateOfNextNthSpecificDayOfMonth(year, month, dayOfWeek, nthInMonth) {
    firstDayOfMonth = new Date(year, month, 1)
    firstDayWithDayOfWeek = getDateOfNextSpecificDayOfWeek(firstDayOfMonth, dayOfWeek)
    daysToAdd = (nthInMonth-1)*7
    return addDaysToDate(firstDayWithDayOfWeek, daysToAdd)
}

function addDaysToDate(theDate, daysToAdd) {
    var copiedDate = new Date(theDate.getTime());
    copiedDate.setDate(copiedDate.getDate() + daysToAdd)
    console.log(copiedDate)
    return copiedDate;
}

function firstDayOfMonthPlusN(n) {
    date = new Date();
    date.setHours(0,0,0,0);
    date.setMonth(date.getMonth()+n)
    date.setDate(1)
    return date
}

const firstDayOfThisMonth = firstDayOfMonthPlusN(0)
const firstDayOfNextMonth = firstDayOfMonthPlusN(1)
const firstDayOfMonthAfterNext = firstDayOfMonthPlusN(2)

module.exports = {
    getTimeAsString,
    getDateOfNextSpecificDayOfWeek,
    getDateOfNextNthSpecificDayOfMonth,
    addDaysToDate,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
}