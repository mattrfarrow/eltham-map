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

var attractionToShowId;
var eventToShowOnMap;
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
var mapContainer = document.getElementById("map-container");
var sidepanel = document.getElementById("side-panel");

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0.0573, 51.452],
    zoom: 15
});

attractions.forEach(addMarkers);

document.getElementById("attractions").appendChild(generateAttractionsTable(attractions));
document.getElementById("attractions").style.display = "none";
document.getElementById("whats-on").appendChild(generateWhatsOnTable(events));

if(attractionToShowOnMap) {
    if (attractionToShowOnMap) {
        zoomMapToCoords(attractionToShowOnMap);
    }
}

if(mobile) {
    if(attractionToShowOnMap) {
        if(eventToShowOnMap) {
            pushUrlForEvent(eventToShowOnMap)
        } else {
            pushUrlForPoi(attractionToShowOnMap)
        }

        showDetailsOfPoiAndEvent(attractionToShowOnMap, eventToShowOnMap);
        show(mapContainer);
        hide(sidepanel);
    } else {
        show(sidepanel);
        hide(mapContainer);
    }
}

function addMarkers(attraction) {
    var popupContent = document.createElement("div");

    var popupTitle = document.createElement("h2");
    popupTitle.innerText = attraction.name;
    popupContent.appendChild(popupTitle);

    if(attraction.desc) {
        var popupDesc = document.createElement("div");
        popupDesc.innerText = attraction.desc;
        popupContent.appendChild(popupDesc);
    }

    if(attraction.website) {
        var popupUrl = document.createElement("a");
        popupUrl.href = attraction.website;
        popupUrl.innerText = "Website";
        popupUrl.target="_blank";
        popupContent.appendChild(popupUrl);
    }


    var popup = new mapboxgl.Popup({ offset: 25 })
        .setDOMContent(popupContent);

    // create DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';

    // create the marker
    new mapboxgl.Marker(el)
        .setLngLat(attraction.coords)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
}

function showDetailsOfPoiAndEvent(attraction, event) {

    const poiDetailsBox = document.getElementById("poi-details-box");
    poiDetailsBox.innerHTML = "";
    if(event) {
        var eventDiv = document.createElement("div");
        eventDiv.className = "poidetails-eventSection";

        var eventTitleDiv = document.createElement("div");
        eventTitleDiv.id = "poidetails-eventTitleDiv";
        eventTitleDiv.className = "poidetails-title";
        eventTitleDiv.innerHTML = event.title;

        eventDiv.appendChild(eventTitleDiv);

        if(event.shortDesc) {
            var eventDescDiv = document.createElement("div");
            eventDescDiv.id = "poidetails-eventDescDiv";
            eventDescDiv.className = "poidetails-desc";
            eventDescDiv.innerHTML = event.shortDesc;
            eventDiv.appendChild(eventDescDiv);
        }

        if(event.url) {
            var eventLink = document.createElement("a");
            eventLink.className = "poidetails-eventUrl";
            eventLink.innerHTML = "More info on the attractions's event page.";
            eventLink.href = event.url;
            eventLink.target="_blank";

            var eventLinkDiv = document.createElement("div");
            eventLinkDiv.className = "poidetails-eventUrlDiv";
            eventLinkDiv.appendChild(eventLink);
            eventDiv.appendChild(eventLinkDiv);
        }
        poiDetailsBox.appendChild(eventDiv);
    }

    var nameDiv = document.createElement("div");
    nameDiv.id = "poidetails-poiNameDiv";
    if(!event) {
        nameDiv.className = "poidetails-title";
        nameDiv.innerHTML = attraction.name;

    } else {
        nameDiv.className = "poidetails-subtitle";
        nameDiv.innerHTML = "At " + attraction.name;
    }


    if(event && event.date && event.timeSpecified) {
        nameDiv.innerHTML += " at "+getTimeAsString(event.date);
    }
    poiDetailsBox.appendChild(nameDiv);

    if(!event) {
        var poiDescDiv = document.createElement("div");
        poiDescDiv.id = "poidetails-desc";
        poiDescDiv.innerHTML = attraction.desc;
        poiDetailsBox.appendChild(poiDescDiv);
    }

    if(attraction.website) {
        var websiteLink = document.createElement("a");
        websiteLink.id = "poidetails-website";
        websiteLink.innerHTML = attraction.name + " Website";
        websiteLink.href = attraction.website;
        websiteLink.target="_blank";
        poiDetailsBox.appendChild(websiteLink);
    }
}

function generateAttractionsTableRow(attraction) {
    var nameDiv = document.createElement("div");
    nameDiv.innerHTML = attraction.name;
    nameDiv.className = "attraction-name";

    var descDiv = document.createElement("div");
    descDiv.innerHTML = attraction.desc;

    var el = document.createElement('div');
    el.appendChild(nameDiv);
    el.appendChild(descDiv);
    el.onclick = function() {
        showDetailsOfPoiAndEvent(attraction);
        zoomMapToCoords(attraction);
        pushUrlForPoi(attraction);
    };

    var td = document.createElement("td");
    td.className = "attraction";
    td.appendChild(el);

    var outerTr = document.createElement("tr");
    outerTr.appendChild(td);
    return outerTr;
}

function generateAttractionsTable(attractions) {
    var attractionsTable = document.createElement("table");
    attractionsTable.id = "attractionsTable";

    attractions.forEach(function(attraction) {
        var el = generateAttractionsTableRow(attraction);
        attractionsTable.appendChild(el);
    });
    return attractionsTable;
}

function generateWhatsOnTableRow(event, attraction) {
    var nameDiv = document.createElement("div");
    nameDiv.innerHTML = event.title;
    nameDiv.className = "attraction-name";

    var locationDiv = document.createElement("div");
    var timeAndPlace = "At " + attraction.name;
    if(event.timeSpecified) {
        timeAndPlace += " @"+getTimeAsString(event.date);
    }
    locationDiv.innerHTML = timeAndPlace;
    locationDiv.className = "attraction-name";

    var descDiv = document.createElement("div");
    if(event.shortDesc) {
        descDiv.innerHTML = event.shortDesc;
    }

    var el = document.createElement('div');
    el.appendChild(nameDiv);
    el.appendChild(locationDiv);
    el.appendChild(descDiv);
    el.onclick = function() {
        showDetailsOfPoiAndEvent(attraction, event);
        zoomMapToCoords(attraction);
        pushUrlForEvent(event);
    };

    var td = document.createElement("td");
    td.className = "attraction";
    td.appendChild(el);

    var outerTr = document.createElement("tr");
    outerTr.className = "whatsOnRow";
    outerTr.appendChild(td);
    return outerTr;
}

function getTimeAsString(date) {
    var minutes = date.getMinutes() !== 0
        ? ":" + date.getMinutes()
        : "";

    if(date.getHours()>12) {
        return (date.getHours()-12) + minutes + "pm";
    } else if (date.getHours() === 12) {
        return date.getHours() + minutes + "pm";
    } else {
        return date.getHours() + minutes + "am";
    }
}

function generateDateRow(date) {
    var days = [  "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dateString = days[date.getDay()] + " " +date.getDate() + " " + months[date.getMonth()];

    var dateTd = document.createElement("td");
    dateTd.innerHTML = dateString;
    dateTd.className = "attraction-name";

    var dateTr = document.createElement("tr");
    dateTr.className = "dateRow";
    dateTr.appendChild(dateTd);

    return dateTr;
}

function generateWhatsOnTable(events) {
    var whatsOnTable = document.createElement("table");
    whatsOnTable.id = "eventsTable";

    const now = new Date();
    var sortedEvents = events
        .slice()
        .filter(attraction => attraction.date >= now )
    ;
    sortedEvents.sort(function(a,b){return a.date - b.date;});

    var lastEventDate;

    sortedEvents.forEach(function(event) {

        if(!lastEventDate || lastEventDate.getTime() !== event.date.getTime()) {
            whatsOnTable.appendChild(generateDateRow(event.date));
        }
        var poi = attractions.find(function(attraction) {return event.poi === attraction.name});

        whatsOnTable.appendChild(generateWhatsOnTableRow(event, poi));
        lastEventDate = event.date;
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
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}