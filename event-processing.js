function processEvents(events) {
    return events.flatMap(event => processEvent(event))
}

function processEvent(event) {
    if(event.weekly) {
        return [0,1,2,3,4].map(week => {
            var today = withoutTime(new Date())
            var firstDateWithSpecificDay = getDateOfNextSpecificDayOfWeek(today, event.weekly.day)
            firstDateWithSpecificDay.setDate(firstDateWithSpecificDay.getDate() + (week*7));
            return cloneEventWithDate(event, firstDateWithSpecificDay)
        })
    } else if(event.oncePerMonth){
        return  [firstDayOfThisMonth, firstDayOfNextMonth, firstDayOfMonthAfterNext].map(firstDayOfMonth => {
            var dateInMonth = getDateOfNextNthSpecificDayOfMonth(firstDayOfMonth.getYear() + 1900, firstDayOfMonth.getMonth(), event.oncePerMonth.day, event.oncePerMonth.nth)
            return cloneEventWithDate(event, dateInMonth)
        })
    } else if(event.dateRange) {
        var todaysDate = withoutTime(new Date())
        if(event.dateRange.endDate < todaysDate) {
            return []
        }
        if(todaysDate > event.dateRange.startDate ) {
            return [cloneEventWithDate(event, todaysDate)]
        } else {
            date = event.dateRange.startDate
            if(event.startTime) {
                date = cloneDateWithHoursAndMinutes(date, event.startTime.h, event.startTime.m)
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
    var eventCopy = Object.assign({}, event)
    eventCopy.when = date
    dateDesc = getDateDescription(event, date)
    console.log(dateDesc)
    eventCopy.dateDescription = dateDesc
    console.log(event)
    return eventCopy
}


function cloneDateWithHoursAndMinutes(date, hours, minutes) {
    var dateCopy = new Date(date.getTime())
    date.setHours(hours)
    date.setMinutes(minutes)
    return dateCopy
}