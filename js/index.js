const OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const map = L.map('map',{
    layers: OpenStreetMap_Mapnik,
    center: [ 31.768310, 35.21032 ],
    zoom: 13,
});

L.Control.Info = L.Control.extend({
    onAdd: function(map) {
        this._container = L.DomUtil.create('div', 'leaflet-bar');
        this._container.style.backgroundColor = "white";
        this._container.style.margin = "5px";
        this._container.style.direction = "rtl";
        this._container.style.width = "200px"
        //this._container.style.whiteSpace =  "nowrap";
        L.DomEvent.disableScrollPropagation(this._container)
        L.DomEvent.disableClickPropagation(this._container)

        this._container.innerHTML = "<p>מפת רחובות חסומים בירושלים לכבוד מרתון ווינר 2022\
        המידע נלקח מ<a href='https://www.jerusalem.muni.il/he/newsandarticles/traffic/jerusalem-marathon-traffic-2022/'>הודעת המירוץ</a> ומ<a href='https://gisviewer.jerusalem.muni.il/arcgis/rest/services/BaseLayers/MapServer/27'>GIS העירייה</a></p>"

        

        return this._container;
    },

    onRemove: function(map) {
        // Nothing to do here
    }
});

L.control.info = function(opts) {
    return new L.Control.Info(opts);
}
L.control.info({ position: 'bottomleft' }).addTo(map);

onMapLoad()