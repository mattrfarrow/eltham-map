function processEvents(events) {
    return events.flatMap(event => processEvent(event))
}

function processEvent(event) {
    if(event.weekly) {
        return [0,1,2,3,4].map(week => {
            var today = withoutTime(new Date());
            var firstDateWithSpecificDay = getDateOfNextSpecificDayOfWeek(today, event.weekly.day);
            firstDateWithSpecificDay.setDate(firstDateWithSpecificDay.getDate() + (week*7));
            return cloneEventWithDate(event, firstDateWithSpecificDay)
        })
    } else if(event.oncePerMonth){
        return  [firstDayOfThisMonth, firstDayOfNextMonth, firstDayOfMonthAfterNext].map(firstDayOfMonth => {
            var dateInMonth = getDateOfNextNthSpecificDayOfMonth(firstDayOfMonth.getYear() + 1900, firstDayOfMonth.getMonth(), event.oncePerMonth.day, event.oncePerMonth.nth);
            return cloneEventWithDate(event, dateInMonth)
        })
    } else if(event.dateRange) {
        var todaysDate = withoutTime(new Date());
        if(event.dateRange.endDate < todaysDate) {
            return []
        }
        if(todaysDate > event.dateRange.startDate ) {
            return [cloneEventWithDate(event, todaysDate)]
        } else {
            date = event.dateRange.startDate;
            if(event.startTime) {
                date = cloneDateWithHoursAndMinutes(date, event.startTime.h, event.startTime.m)
            }
            if(!isValidDate(date)) {
                throw "Invalid Date!"
            }
            return [cloneEventWithDate(event, date)]
        }
    } else {
        return [event]
    }
}
function cloneEventWithDate(event, date) {
    if(!date) {
        throw "no date provided"
    }
    if(!isValidDate(date)) {
        throw "Invalid Date!"
    }
    var eventCopy = Object.assign({}, event);
    eventCopy.when = date;
    dateDesc = getDateDescription(event, date);
    eventCopy.dateDescription = dateDesc;
    return eventCopy
}


function cloneDateWithHoursAndMinutes(date, hours, minutes) {
    if(!isValidDate(date)) {
        throw "cloneDateWithHoursAndMinutes received invalid date"
    }
    var dateCopy = new Date(date.getTime());
    if(hours) {
        dateCopy.setHours(hours);
    }
    if(minutes) {
        dateCopy.setMinutes(minutes);
    }

    if(!isValidDate(dateCopy)) {
        throw "cloneDateWithHoursAndMinutes about to return invalid date"
    }
    return dateCopy
}