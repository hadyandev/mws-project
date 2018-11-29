// Init map
const mymap = L.map("mapid").setView([-6.3015898, 106.6528262], 11);
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

(async function() {
  const URL = "../project3/data/coworking.json";
  try {
    const res = await fetch(URL);
    const data = await res.json();
    localStorage.setItem("places", JSON.stringify(data.places));
  } catch (err) {
    console.log(err);
  }

  const img = document.getElementById("image");
  const title = document.getElementById("title");
  const review = document.getElementById("review");

  let places;
  try {
    places = await JSON.parse(await localStorage.getItem("places"));
  } catch (err) {
    console.log(err);
  }

  const findLocation = (x, y) => {
    for (let i = 0; i < places.length; i++) {
      if (places[i].location[0] === x && places[i].location[1] === y) {
        return i;
      }
    }
    return -1;
  };

  const insertView = index => {
    img.src = places[index].image;
    img.alt = places[index].title;
    title.innerHTML = places[index].title;
    review.innerHTML = places[index].review;
  };

  const showLocation = e => {
    const index = findLocation(e.latlng.lat, e.latlng.lng);
    if (index >= 0) {
      insertView(index);
    }
  };

  if (places) {
    places.map((place, index) => {
      var marker = L.marker(place.location)
        .addTo(mymap)
        .bindPopup(`<b>${place.title}</b>`);
      marker.on("click", showLocation);
      if (index === 0) {
        marker.openPopup();
      }
    });
    // Init data
    insertView(0);
  }
})();
