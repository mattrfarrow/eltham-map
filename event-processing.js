function processEvents(events) {
    return events.flatMap(event => processEvent(event))
}

function processEvent(event) {
    if(event.weekly) {
        return [0,1,2,3,4].map(week => {
            var today = withoutTime(new Date())
            var firstDateWithSpecificDay = getDateOfNextSpecificDayOfWeek(today, event.weekly.day)
            firstDateWithSpecificDay.setDate(firstDateWithSpecificDay.getDate() + (week*7));
            if(event.weekly.h) {
                firstDateWithSpecificDay.setHours(event.weekly.h)
            }
            if(event.weekly.m) {
                firstDateWithSpecificDay.setMinutes(event.weekly.m)
            }
            return cloneEventWithDate(event, firstDateWithSpecificDay)
        })
    } else if(event.oncePerMonth){
        return  [firstDayOfThisMonth, firstDayOfNextMonth, firstDayOfMonthAfterNext].map(firstDayOfMonth => {
            var dateInMonth = getDateOfNextNthSpecificDayOfMonth(firstDayOfMonth.getYear() + 1900, firstDayOfMonth.getMonth(), event.oncePerMonth.day, event.oncePerMonth.nth)
            if(event.oncePerMonth.h) {
                dateInMonth.setHours(event.oncePerMonth.h)
            }
            if(event.oncePerMonth.m) {
                dateInMonth.setMinutes(event.oncePerMonth.m)
            }
            return cloneEventWithDate(event, dateInMonth)
        })
    } else if(event.dateRange) {
        var todaysDate = withoutTime(new Date())
        if(event.startTime && event.startTime.h) {
            todaysDate.setHours(event.startTime.h)
        }
        if(event.startTime && event.startTime.m) {
            todaysDate.setMinutes(event.startTime.m)
        }
        if(event.dateRange.endDate < todaysDate) {
            return []
        }
        if(todaysDate > event.dateRange.startDate ) {
            return [cloneEventWithDate(event, todaysDate)]
        } else {
            console.log(event.dateRange.startDate)
            console.log(cloneDateWithHoursAndMinutes(event.dateRange.startDate, event.startTime.h, event.startTime.m))
            return [cloneEventWithDate(event, cloneDateWithHoursAndMinutes(event.dateRange.startDate, event.startTime.h, event.startTime.m))]
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
    return eventCopy
}

function cloneDateWithHours(date, hours) {
}

function cloneDateWithHoursAndMinutes(date, hours, minutes) {
    var dateCopy = new Date(date.getTime())
    date.setHours(hours)
    date.setMinutes(minutes)
    return dateCopy
}