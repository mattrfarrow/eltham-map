function processEvents(events) {
    return events.flatMap(event => processEvent(event))
}

function processEvent(event) {
    if(event.weekly) {
        console.log(event)
        var ret = [0,1,2,3,4].map(week => {
            var date = new Date()
            date.setDate(date.getDate() + event.weekly.day - date.getDay());
            date.setDate(date.getDate() + (week*7));
            console.log(date)
            if(event.weekly.h) {
                date.setHours(event.weekly.h)
            }
            console.log(date)
            if(event.weekly.m) {
                date.setMinutes(event.weekly.m)
            }
            var eventCopy = Object.assign({}, event)
            eventCopy.when = date
            return eventCopy
        })
        console.log(ret)
        return ret;
    } else {
        return [event]
    }
}