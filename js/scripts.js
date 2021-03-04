mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1emV2aWNoIiwiYSI6ImNrbGxmdWVlcjBjdHcyb28xNjg5eDF4emUifQ.FbhpNLumz5b3vCmPI5-4Hw';

var options = {
  container: 'mapContainer', // container ID
  style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
  center: [-73.96969, 40.77807], // starting position [lng, lat]
  zoom: 9 // starting zoom
}

var map = new mapboxgl.Map(options);


// add navigation control
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');


// set up dummy data
var parks = [
  {
    name: 'Central Park',
    location: 'Where: The Ramble',
    borough: 'Manhattan',
    point: [-73.96969, 40.77807],
    color: '#5B5EA6'
  },
  {
    name: 'Van Cortland Park',
    location: 'Where: John Kieran Trail',
    borough: 'The Bronx',
    point: [-73.89137, 40.89155],
    color: '#B565A7'
  },
  {
    name: 'Prospect Park',
    location: 'Where: The Ravine',
    borough: 'Brooklyn',
    point: [-73.96883, 40.66412],
    color: '#DD4124'
  },
  {
    name: 'Highland Park',
    location: 'Where: Ridgewood Reservoir',
    borough: 'Queens',
    point: [-73.88736, 40.68628],
    color: '#009B77'
  },
  {
    name: 'Clove Lakes Park',
    location: 'Where: Martling Lake',
    borough: 'Staten Island',
    point: [-74.11644, 40.62328],
    color: '#EFC050'
  }
]

parks.forEach(function(park) {
  var html = `
    <h3>${park.borough}</h3>
    <div><b>${park.name}</b></div>
    <div>${park.location}</div>
  `

  new mapboxgl.Marker({
    color: park.color
  })
    .setLngLat(park.point)
    .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
    .addTo(map);
  })
