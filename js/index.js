const OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const map = L.map('map',{
    layers: OpenStreetMap_Mapnik,
    center: [ 31.768310, 35.21032 ],
    zoom: 13,
});

onMapLoad()