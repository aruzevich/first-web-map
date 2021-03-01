mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1emV2aWNoIiwiYSI6ImNrbGxmdWVlcjBjdHcyb28xNjg5eDF4emUifQ.FbhpNLumz5b3vCmPI5-4Hw';

var options = {
  container: 'mapContainer', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-73.96969, 40.77807], // starting position [lng, lat]
  zoom: 9 // starting zoom
}

var map = new mapboxgl.Map(options);


// add navigation control
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');


// add marker to the map
var marker = new mapboxgl.Marker({
  color: 'red'
})
  .setLngLat([-73.96969, 40.77807])
  .setPopup(new mapboxgl.Popup().setHTML("<h3>Central Park - The Ramble</h3>")) // add popup
  .addTo(map);


// set up dummy data
var dummyData = [
  {
    name: 'Van Cortland Park - John Kieran Trail',
    borough: 'Bronx',
    point: [-73.89137, 40.89155],
    color: 'slateblue'
  },
  {
    name: 'Prospect Park - The Ravine',
    borough: 'Brooklyn',
    point: [-73.96883, 40.66412],
    color: 'coral'
  },
  {
    name: 'Highland Park - Ridgewood Reservoir',
    borough: 'Queens',
    point: [-73.88736, 40.68628],
    color: 'indigo'
  },
  {
    name: 'Clove Lakes Park - Martling Lake',
    borough: 'Staten Island',
    point: [-74.11644, 40.62328],
    color: 'darkgreen'
  }
]

dummyData.forEach(function(data) {
  new mapboxgl.Marker()
    .setLngLat(data.point)
    .setPopup(new mapboxgl.Popup().setHTML(`
      <h3>${data.name}</h3>
      <p>${data.borough}</p>
    `)) // add popup
    .addTo(map);
})
