function processEvents(events) {
    return events.flatMap(event => processEvent(event))
}

function processEvent(event) {
    if(event.weekly) {
        return [0,1,2,3,4].map(week => {
            var today = new Date()
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
        a =  [firstDayOfThisMonth, firstDayOfNextMonth, firstDayOfMonthAfterNext].map(firstDayOfMonth => {
            var dateInMonth = getDateOfNextNthSpecificDayOfMonth(firstDayOfMonth.getYear() + 1900, firstDayOfMonth.getMonth(), event.oncePerMonth.day, event.oncePerMonth.nth)
            if(event.oncePerMonth.h) {
                dateInMonth.setHours(event.oncePerMonth.h)
            }
            if(event.oncePerMonth.m) {
                dateInMonth.setMinutes(event.oncePerMonth.m)
            }
            return cloneEventWithDate(event, dateInMonth)
        })
        console.log(a)
        return a

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
