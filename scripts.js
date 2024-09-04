//scrolling trailer videos
function scrollL() {
    const container = document.getElementById('scrollable');
    container.scrollBy(-200, 0);
}

function scrollRight() {
    const container = document.getElementById('scrollable');
    container.scrollBy(200, 0,);
}

const latitude = 13.02474723210269;
const longitude = 77.63456618139959;

document.getElementById('map').style.display = "block";
var map = L.map('map').setView([latitude, longitude], 13);

//displaying open street view map
document.getElementById('display-map').addEventListener('click', () => {


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Company Location')
        .openPopup();

    window.scrollBy({
        top: 500,
        left: 0,
        behavior: 'smooth'
    });
});

//For opening google maps
document.getElementById('open-gmap').addEventListener('click', () => {
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // Open the URL in a new tab
    window.open(mapUrl, '_blank');
});

function addMarkerAndRoute() {
    let existingLatLng = [13.02474723210269, 77.63456618139959];
    let newLatLng = [12.936157106326533, 77.60591792549495]; // Coordinates for the second marker

    // Adding the second marker
    let marker = L.marker(newLatLng).addTo(map).bindPopup('Start Point').openPopup();

    // Drawing a route between the two markers using a polyline
    //let route = L.polyline([existingLatLng, newLatLng], { color: 'blue' }).addTo(map);
    let route = L.Routing.control({
        waypoints: [
            L.latLng(12.936157106326533, 77.60591792549495),
            L.latLng(13.02474723210269, 77.63456618139959)
        ]
    }).addTo(map);

    // Adjust the map view to fit both markers and the route
    map.fitBounds(route.getBounds());
}

// Adding a button event listener
document.getElementById('routeButton').addEventListener('click', addMarkerAndRoute);
