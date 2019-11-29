function getEvents() {
    const now = new Date();
    let sortedEvents = events
        .slice()
        .filter(attraction => attraction.when >= now)
    ;
    sortedEvents.sort(function (a, b) {
        return a.when - b.when;
    });
    return sortedEvents;
}

function addGeneratedContent() {

    var events = getEvents();

    const emailContent = document.getElementById("email-content");

    let lastEventDate;

    const eventsTable = document.createElement("table");


    events.forEach(function(event, index) {

        if(!lastEventDate || withoutTime(lastEventDate).getTime() !== withoutTime(event.when).getTime()) {
            eventsTable.appendChild(generateDateRow(event.when));
        }
        const poi = attractions.find(function (attraction) {
            return event.poi === attraction.name
        });

        const isLastEventInList = index>=events.length-1;
        eventsTable.appendChild(generateRowForEvent(event, isLastEventInList));
        lastEventDate = event.when;



    });

    emailContent.appendChild(eventsTable);
}

function generateDateRow(date) {
    const dateString = dateToString(date);

    const strong = document.createElement("strong");
    strong.innerHTML = dateString;

    const strongAndUnderlined = document.createElement("u");
    strongAndUnderlined.appendChild(strong);

    const dateTd = document.createElement("td");
    dateTd.appendChild(strongAndUnderlined);

    const dateTr = document.createElement("tr");
    dateTr.className = "dateRow";
    dateTr.appendChild(dateTd);

    return dateTr;
}

function dateToString(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + " " +date.getDate() + " " + months[date.getMonth()];
}


function generateRowForEvent(event, isLastEventInList)  {
    const timeText = getTimeAsString(event.startTime, event.endTime)

    const eventTr = document.createElement("tr");

    var eventTd = document.createElement("td");


    eventTitleDiv = document.createElement("div");
    eventTitleDiv.innerHTML = "<strong>" + timeText +  "</strong> ";

    eventTitleWithLink = document.createElement("a");
    eventTitleWithLink.innerHTML = event.title;
    eventTitleWithLink.href = inse9LinkUrlForEvent(event);

    eventTitleDiv.appendChild(eventTitleWithLink);
    eventTd.appendChild(eventTitleDiv);

    if(event.shortDesc) {
        eventDescDiv = document.createElement("div");
        eventDescDiv.innerHTML = event.shortDesc;
        eventTd.appendChild(eventDescDiv);
    }

    eventLocationDiv = document.createElement("div");
    eventLocationDiv.innerHTML = "<em>At " + event.poi +"</em>";
    eventTd.appendChild(eventLocationDiv);

    if(event.price) {
        eventPriceDiv = document.createElement("div");
        eventPriceDiv.innerHTML = event.price;
        eventTd.appendChild(eventPriceDiv);
    }
    if(!isLastEventInList) {
        eventTd.appendChild(document.createElement("hr"));
    }

    eventTr.appendChild(eventTd);
    return eventTr;
}

function inse9LinkUrlForEvent(event) {
    return 'https://inse9.co.uk?event='+event.id;
}

function withoutTime(date) {
    const date2 = new Date(date.getTime());
    date2.setHours(0,0,0,0);
    return date2;
}


// <table id="eventsTable">
//     <tbody>
//     <tr>
//     <td><u><strong>Saturday 21 September</strong></u></td>
// </tr>
// <tr>
// <td><strong>11:00am: </strong><a href="https://inse9.co.uk/?event=wf-03" target="_blank">Hedgerow Liqueurs Course</a><br />
// Forage around Woodlands Farm for sloes before making your own sloe gin to take home.<br />
// <em>At Woodlands Farm</em><br />
// &pound;10/person, &pound;6 for farm members
// <div>&lt;html&gt;</div>
//
// <div>&lt;a href=&quot;whatever&quot;&gt;Hi&lt;/a&gt;</div>
//
// <div>&lt;/html&gt;&lt;html&gt;<br />
// &lt;a href=&quot;whatever&quot;&gt;Hi&lt;/a&gt;<br />
// &lt;/html&gt;</div>
// </td>
// </tr>