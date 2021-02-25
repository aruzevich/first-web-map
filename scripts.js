mapboxgl.accessToken = '<your access token here>';

var map = new mapboxgl.Map({
  container: 'mapContainer', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-73.975050, 40.772002], // starting position [lng, lat]
  zoom: 14 // starting zoom
});

//add navigation control
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1emV2aWNoIiwiYSI6ImNrbGxmdWVlcjBjdHcyb28xNjg5eDF4emUifQ.FbhpNLumz5b3vCmPI5-4Hw';

var map = new mapboxgl.Map({
  container: 'mapContainer', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

// add marker to the map
var marker = new mapboxgl.Marker({
  color: 'red'
})
  .setLngLat([-74.0060, 40.7128])
  .setPopup(new mapboxgl.Popup().setHTML("<h1>City Hall</h1>")) // add popup
  .addTo(map);

//set up dummy data
var dummyData = [
  {
    name: 'The Pond'
    point: [-73.974073,40.765843]
  },
  {
    name: 'Strawberry Fields'
    point: [-73.974803,40.775782]
  },
  {
    name: 'Dalehead Arch'
    point: [-73.978578,40.770726]
  }
]

var makeMarkers = function(data) {
  console.log(data.name, data.point)

  new mapboxgl.Marker()
    .setLngLat(data.point)
    .setPopup(new mapboxgl.Popup().setHTML('<h1>${data.name}</h1>')) // add popup
    .addTo(map);
}

dummyData.forEach(makeMarkers)
