var mymap = L.map("mapid").setView([35.6585805, 139.7432442], 13);
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1IjoiaGFkeWFuZGV2IiwiYSI6ImNqbXN6dnhnbDAxeDIzcHBoZzhrODZkOGEifQ.rtS6EwUic6dI6UMZF8bIxg"
  }
).addTo(mymap);
var marker = L.marker([35.6585805, 139.7432442])
  .addTo(mymap)
  .bindPopup("<b>Tokyo Tower</b><br>I haven't visited this place yet. :)")
  .openPopup();
var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on("click", onMapClick);
