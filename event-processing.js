function processEvents(events) {
    return events.flatMap(event => processEvent(event))
}

function processEvent(event) {
    if(event.weekly) {
        var ret = [0,1,2,3,4].map(week => {
            var today = new Date()
            var firstDateWithSpecificDay = getDateOfNextSpecificDayOfWeek(today, event.weekly.day)
            firstDateWithSpecificDay.setDate(firstDateWithSpecificDay.getDate() + (week*7));
            if(event.weekly.h) {
                firstDateWithSpecificDay.setHours(event.weekly.h)
            }
            if(event.weekly.m) {
                firstDateWithSpecificDay.setMinutes(event.weekly.m)
            }
            var eventCopy = Object.assign({}, event)
            eventCopy.when = firstDateWithSpecificDay
            return eventCopy
        })
        return ret;
    } else if(event.oncePerMonth){
        var today = new Date()
        var dateInMonth = getDateOfNextNthSpecificDayOfMonth(today.getYear() + 1900, today.getMonth(), event.oncePerMonth.day, event.oncePerMonth.nth)
        if(event.oncePerMonth.h) {
            dateInMonth.setHours(event.oncePerMonth.h)
        }
        if(event.oncePerMonth.m) {
            dateInMonth.setMinutes(event.oncePerMonth.m)
        }
        var eventCopy = Object.assign({}, event)
        eventCopy.when = dateInMonth
        console.log(eventCopy)
        return [eventCopy]
    } else {
        return [event]
    }
}

