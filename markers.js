function buildMarker(attraction) {
    const popupContent = document.createElement("div");

    const popupTitle = document.createElement("h2");
    popupTitle.innerText = attraction.name;
    popupContent.appendChild(popupTitle);

    if(attraction.desc) {
        const popupDesc = document.createElement("div");
        popupDesc.innerText = attraction.desc;
        popupContent.appendChild(popupDesc);
    }

    if(attraction.website) {
        const popupUrl = document.createElement("a");
        popupUrl.href = attraction.website;
        popupUrl.innerText = "Website";
        popupUrl.target="_blank";
        popupContent.appendChild(popupUrl);
    }

    const popup = new mapboxgl.Popup({offset: 25})
        .setDOMContent(popupContent);

    const el = document.createElement('div');
    el.className = 'marker';

    return new mapboxgl.Marker(el)
        .setLngLat(attraction.coords)
        .setPopup(popup);
}