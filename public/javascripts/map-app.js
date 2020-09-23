let map

function initMap() {
    getEventsDataFromAPI()
}

function getEventsDataFromAPI() {

    axios.get('/api/')
        .then(response => drawMap(response.data))
        .catch(err => console.log('Hubo un error:', err))
        console.log(document.querySelector('#map'))
}

function drawMap(event) {
    console.log(event)
    
    let center = {
        lat: event[0].location.coordinates[1],
        lng: event[0].location.coordinates[0],
    }
    //Draw the map
    map = new google.maps.Map(document.querySelector('#map'), {
        center,
        zoom: 14,
    })
    new google.maps.Marker({
        map,
        position: center
    })
}