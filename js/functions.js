
let gj = {
    "type": "FeatureCollection",
    "features": []
  }
async function onMapLoad(){
    const response = await fetch('streets.fgb')
    for await (const f of flatgeobuf.deserialize(response.body)){
        feature = f;
        gj.features.push(feature)
    }   
    layer = L.geoJson(gj, {
        onEachFeature: onEachFeature,
        style: getStyle
    })
    bounds = layer.getBounds()
    layer.addTo(map)
    //map.fitBounds(bounds);
}
function getStyle(feature){
    return {
        color: getColor(feature.properties.blocked),
        weight: getWidth(feature.properties.blocked)
    }
}
function getColor(blocked){
    return blocked === 1 ? "red" : "black";
}
function getWidth(blocked){
    return blocked === 1 ? 2 : 0.4;
}
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.STREET) {
        layer.bindPopup(feature.properties.STREET);
    }
}