const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

String.prototype.replaceAll = function(search, replacement) {
    const target = this;
    return target.split(search).join(replacement);
};

function hide(el){
    el.style.display="none";
}

function show(el){
    el.style.display="block";
}

function sortAndFilterEvents(eventsIn) {
    const now = withoutTime(new Date());
    if(!now) {
        throw "no withoutTime"
    }
    let ret = eventsIn
        .slice()
        .filter(attraction => attraction.when >= now )
    ;
    ret.sort(function(a,b){return a.when - b.when;});
    return ret;
}

zoomMapToCoords = function(poi) {
    map.panTo(poi.coords);
    if(mobile) {
        show(mapContainer);
        hide(sidepanel);
    }
};

pushUrlForPoi = function(poi) {
    const url = location.protocol + '//' + location.host + location.pathname + '?poi='+poi.name.replaceAll(" ", "_");
    history.pushState({}, "Eltham Map", url);
};

pushUrlForEvent = function(event) {
    const url = location.protocol + '//' + location.host + location.pathname + '?event='+event.id;
    history.pushState({}, "Eltham Map", url);
};

mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dHJmYXJyb3ciLCJhIjoiS0gtNnVKUSJ9.9n4like7mmNyB4aDm27uXw';

const mobile = !window.matchMedia("only screen and (min-width: 401px)").matches;

let attractionToShowId;
let eventToShowOnMap;
const eventToShowId = getUrlVars()["event"];
if(eventToShowId) {
    eventToShowOnMap = events.find(function (event) {
        return eventToShowId === event.id
    });
    attractionToShowId = eventToShowOnMap.poi;
}

if(!attractionToShowId) {
    attractionToShowId = getUrlVars()["poi"];
}
if(attractionToShowId) {
    var attractionToShowOnMap = attractions.find(function (attraction) {
        return attractionToShowId.replaceAll("_", " ") === attraction.name
    });
}
const mapContainer = document.getElementById("map-container");
const sidepanel = document.getElementById("side-panel");

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0.0573, 51.452],
    zoom: 15
});

attractions.forEach(addMarkers);
processedEvents = processEvents(events);
sortedEvents = sortAndFilterEvents(processedEvents);

document.getElementById("attractions").appendChild(generateAttractionsTable(attractions));
document.getElementById("attractions").style.display = "none";
document.getElementById("whats-on").appendChild(generateWhatsOnTable(processedEvents));

if(attractionToShowOnMap) {
    if (attractionToShowOnMap) {
        zoomMapToCoords(attractionToShowOnMap);
        showDetailsOfPoiAndEvent(attractionToShowOnMap, eventToShowOnMap);
    }
}

if(mobile) {
    if(attractionToShowOnMap) {
        if(eventToShowOnMap) {
            pushUrlForEvent(eventToShowOnMap)
        } else {
            pushUrlForPoi(attractionToShowOnMap)
        }

        hide(sidepanel);
        show(mapContainer);
    }
}

function addMarkers(attraction) {
    buildMarker(attraction).addTo(map);
}

function showDetailsOfPoiAndEvent(attraction, event) {
    const poiDetailsBox = document.getElementById("poi-details-box");
    poiDetailsBox.innerHTML = "";
    if(event) {
        const eventDiv = document.createElement("div");
        eventDiv.className = "poidetails-eventSection";

        const eventTitleDiv = document.createElement("div");
        eventTitleDiv.id = "poidetails-eventTitleDiv";
        eventTitleDiv.className = "poidetails-title";
        eventTitleDiv.innerHTML = event.title;

        eventDiv.appendChild(eventTitleDiv);

        if(event.shortDesc) {
            const eventDescDiv = document.createElement("div");
            eventDescDiv.id = "poidetails-eventDescDiv";
            eventDescDiv.className = "poidetails-desc";
            eventDescDiv.innerHTML = event.shortDesc;
            eventDiv.appendChild(eventDescDiv);
        }

        if(event.url) {
            const eventLink = document.createElement("a");
            eventLink.className = "poidetails-eventUrl";
            eventLink.innerHTML = "More info on the attraction's event page.";
            eventLink.href = event.url;
            eventLink.target="_blank";

            const eventLinkDiv = document.createElement("div");
            eventLinkDiv.className = "poidetails-eventUrlDiv";
            eventLinkDiv.appendChild(eventLink);
            eventDiv.appendChild(eventLinkDiv);
        }
        poiDetailsBox.appendChild(eventDiv);
    }

    const nameDiv = document.createElement("div");
    nameDiv.id = "poidetails-poiNameDiv";
    if(!event) {
        nameDiv.className = "poidetails-title";
        nameDiv.innerHTML = attraction.name;

    } else {
        nameDiv.className = "poidetails-subtitle";
        nameDiv.innerHTML = "At " + attraction.name;
    }

    if(event && event.when && event.startTime) {
        nameDiv.innerHTML += " at "+getTimeAsString(event.startTime, event.endTime) + " on " + dateToString(event.when);
    }
    poiDetailsBox.appendChild(nameDiv);

    if(!event) {
        const poiDescDiv = document.createElement("div");
        poiDescDiv.id = "poidetails-desc";
        poiDescDiv.innerHTML = attraction.desc;
        poiDetailsBox.appendChild(poiDescDiv);
    }

    if(attraction.address) {
        const poiAddressDiv = document.createElement("div");
        poiAddressDiv.id = "poidetails-address";
        poiAddressDiv.innerHTML = attraction.address;
        poiDetailsBox.appendChild(poiAddressDiv);
    }

    if(attraction.website) {
        const websiteLink = document.createElement("a");
        websiteLink.id = "poidetails-website";
        websiteLink.innerHTML = attraction.name + " Website";
        websiteLink.href = attraction.website;
        websiteLink.target="_blank";
        poiDetailsBox.appendChild(websiteLink);
    }
}

function generateAttractionsTableRow(attraction) {
    const nameDiv = document.createElement("div");
    nameDiv.innerHTML = attraction.name;
    nameDiv.className = "attraction-name";

    const descDiv = document.createElement("div");
    descDiv.innerHTML = attraction.desc;

    const el = document.createElement('div');
    el.appendChild(nameDiv);
    el.appendChild(descDiv);
    el.onclick = function() {
        showDetailsOfPoiAndEvent(attraction);
        zoomMapToCoords(attraction);
        pushUrlForPoi(attraction);
    };

    const td = document.createElement("td");
    td.className = "attraction clickable";
    td.appendChild(el);

    const outerTr = document.createElement("tr");
    outerTr.appendChild(td);
    return outerTr;
}

function generateAttractionsTable(attractions) {
    const attractionsTable = document.createElement("table");
    attractionsTable.id = "attractionsTable";

    attractions.forEach(function(attraction) {
        const el = generateAttractionsTableRow(attraction);
        attractionsTable.appendChild(el);
    });
    return attractionsTable;
}

function generateWhatsOnTableRow(event, attraction) {
    const nameDiv = document.createElement("div");
    nameDiv.innerHTML = event.title;
    nameDiv.className = "attraction-name";

    const locationDiv = document.createElement("div");

    if(event.dateDescription) {
        locationDiv.innerHTML = "At " + attraction.name + " " + event.dateDescription
    } else {
        locationDiv.innerHTML = "At " + attraction.name
    }

    locationDiv.className = "attraction-location";

    let timeDiv;
    if(event.startTime) {
        timeDiv = document.createElement("div");

        timeDiv.innerHTML = getTimeAsString(event.startTime, event.endTime)
        timeDiv.className = "event-time";
    }

    let descDiv;
    if(event.shortDesc) {
        descDiv = document.createElement("div");
        descDiv.className = "event-desc"
        descDiv.innerHTML = event.shortDesc;
    }

    const el = document.createElement('div');
    if(timeDiv) {
        el.appendChild(timeDiv);
    }
    el.appendChild(nameDiv);
    if(descDiv) {
        el.appendChild(descDiv);
    }
    el.appendChild(locationDiv);

    if(event.price) {
        const priceDiv = document.createElement("div");
        priceDiv.innerHTML = event.price;
        priceDiv.className = "price";
        el.appendChild(priceDiv);
    }

    el.onclick = function() {
        showDetailsOfPoiAndEvent(attraction, event);
        zoomMapToCoords(attraction);
        pushUrlForEvent(event);
    };

    const td = document.createElement("td");
    td.className = "attraction clickable";
    td.appendChild(el);

    const outerTr = document.createElement("tr");
    outerTr.className = "whatsOnRow";
    outerTr.appendChild(td);
    return outerTr;
}

function dateToString(date) {
    return days[date.getDay()] + " " +date.getDate() + " " + months[date.getMonth()];
}

function generateDateRow(date) {
    const dateTd = document.createElement("td");
    dateTd.innerHTML = dateToString(date);
    dateTd.className = "attraction-name";

    const dateTr = document.createElement("tr");
    dateTr.className = "dateRow";
    dateTr.appendChild(dateTd);

    return dateTr;
}

function generateWhatsOnTable(events) {
    const whatsOnTable = document.createElement("table");
    whatsOnTable.id = "eventsTable";

    var lastEventDate;

    sortedEvents.forEach(function(event) {
        if(!lastEventDate || withoutTime(lastEventDate).getTime() !== withoutTime(event.when).getTime()) {
            whatsOnTable.appendChild(generateDateRow(event.when));
        }
        const poi = attractions.find(function (attraction) {
            return event.poi === attraction.name
        });

        whatsOnTable.appendChild(generateWhatsOnTableRow(event, poi));
        lastEventDate = event.when;
    });
    return whatsOnTable;
}

function attractionsSectionButtonClicked() {
    if(mobile && map){
        show(sidepanel);
        hide(mapContainer);
    }
    document.getElementById("attractions").style.display = "block";
    document.getElementById("whats-on").style.display = "none";

    const url = location.protocol + '//' + location.host + location.pathname;
    history.pushState({}, "Eltham Map", url);
}

function whatsOnSectionButtonClicked() {
    if(mobile && map){
        show(sidepanel);
        hide(mapContainer);
    }
    document.getElementById("attractions").style.display = "none";
    document.getElementById("whats-on").style.display = "block";

    const url = location.protocol + '//' + location.host + location.pathname;
    history.pushState({}, "Eltham Map", url);
}

function getUrlVars() {
    const vars = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}