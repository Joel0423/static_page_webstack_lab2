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

//displaying open street view map
document.getElementById('display-map').addEventListener('click', () => {
    document.getElementById('map').style.display = "block";
    const latitude = 13.02474723210269;
    const longitude = 77.63456618139959;

    var map = L.map('map').setView([latitude, longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Specified location')
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
