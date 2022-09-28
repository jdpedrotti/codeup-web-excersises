$(function () {

//     $.get("http://api.openweathermap.org/data/2.5/forecast", {
//         APPID: OPEN_WEATHER_APPID,
//         lat: 29.423017,
//         lon: -98.48527,
//         units: "imperial"
//     }).done(function (data) {
//         console.log(data);
//         console.log(data.city.population);
//         console.log(data.list[0].visibility);
//         data.list.forEach((forecast, index) =>{
//            if (index < 5) {
//                console.log(forecast)
//            }
//
//         })
//
//     });
// })




    function windCardinalDirection(degrees){
        let cardinalDirection = '';
        if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
            cardinalDirection = "N";
        } else if (degrees > 11.25 && degrees  <= 33.75) {
            cardinalDirection = "NNE";
        } else if (degrees > 33.75 && degrees <= 56.25) {
            cardinalDirection = "NE";
        } else if (degrees > 56.25 && degrees <= 78.75) {
            cardinalDirection = "ENE";
        } else if (degrees > 78.75 && degrees <= 101.25) {
            cardinalDirection = "E";
        } else if (degrees > 101.25 && degrees <= 123.75) {
            cardinalDirection = "ESE";
        } else if (degrees > 123.75 && degrees <= 146.25) {
            cardinalDirection = "SE";
        } else if (degrees > 146.25 && degrees <= 168.75) {
            cardinalDirection = "SSE";
        } else if (degrees > 168.75 && degrees <= 191.25) {
            cardinalDirection = "S";
        } else  if (degrees > 191.25 && degrees <= 213.75) {
            cardinalDirection = "SSW";
        } else if (degrees > 213.75 && degrees <= 236.25)  {
            cardinalDirection = "SW";
        } else if (degrees > 236.25 && degrees <= 258.75) {
            cardinalDirection = "WSW";
        } else if (degrees > 258.75 && degrees <= 281.25) {
            cardinalDirection = "W";
        } else if (degrees > 281.25 && degrees <= 303.75) {
            cardinalDirection = "WNW";
        } else if (degrees > 303.75 && degrees <= 326.25) {
            cardinalDirection = "NW";
        } else if (degrees > 326.75 && degrees <= 348.75) {
            cardinalDirection = "NNW";
        }
        return cardinalDirection;
    }



    function appendLeadingZeroes(n){
        if(n <= 9){
            return "0" + n;
        }
        return n;
    }

    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    function formatTime(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        let year = dateTime.getFullYear();
        let month = months[dateTime.getMonth()];
        let day = dateTime.getDate();
        let hour = appendLeadingZeroes(dateTime.getHours());
        let minutes = appendLeadingZeroes(dateTime.getMinutes());
        let seconds = appendLeadingZeroes(dateTime.getSeconds());
        let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
        return formattedDateTime;
    }



    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (data) {
        console.log("currentWeather:")
        console.log(data);
        console.log(data.main.temp);
        console.log(data.main.feels_like)
        console.log(data.wind.speed)
        console.log(windCardinalDirection(data.wind.deg));

    });

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log("forecasts:")
        console.log(data);
        console.log(data.list.dt_txt)
        // $('h5').append(`${data.list[0].dt_txt}</p>`)
        printWeatherCards(data);

    });

    function namedDayFromDay(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        return daysOfWeek[dateTime.getDay()];
    }



//    for loop to populate and update cards with current weather info

function printWeatherCards(data){
    console.log(data)
    for(let i=0; i < data.list.length; i++){
        let seperatedDateAndTime = data.list[i].dt_txt.split(" ");
        if(i % 8 === 0){
            console.log("inside card for loop if statement" + i);
            $(`#card${i/8}`).empty().append(`
                    <div class="card" style="width: 15rem; background-color: #5d5d5d; color: white">
                        <div class="card-header text-center">
                            ${seperatedDateAndTime[0]}
                            <br>
                            <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" rel="icon">

                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Temperature: ${data.list[i].main.temp}</li>
                            <li class="list-group-item">Feels like: ${data.list[i].main.feels_like}</li>
                            <li class="list-group-item">Description: ${data.list[i].weather[0].description}</li>
                            <li class="list-group-item">Humidity: ${data.list[i].main.humidity}</li>
                            <li class="list-group-item">Pressure: ${data.list[i].main.pressure}</li>
                        </ul>
                    </div>
           `);
        }
    }
}




    //  geocode

    const geocode = (search, token) => {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
            }).then(function(data) {
                return data.features[0].center;
            });
    }


    // set marker and location by search bar

    document.getElementById("setMarkerButton").addEventListener('click', function (e){
        e.preventDefault();
        const address = $("#setMarker").val();
        geocode(address, MAPBOX_API_TOKEN).then(function (coordinates){
            const userMarker = new mapboxgl.Marker({draggable: true}).setLngLat(coordinates).addTo(map);
            map.setCenter(coordinates)
            console.log(coordinates)


            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_APPID,
                lat:    coordinates[1],
                lon:   coordinates[0],
                units: "imperial"
            }).done(function(data) {
                console.log("forecasts:")
                console.log(data);
                console.log(data.list.dt_txt)

                printWeatherCards(data);
                $("#currentLocation").html(`Location: ${data.city.name}`)

            });
        })
    })

    // mapboxgl.accessToken = MAPBOX_API_TOKEN;
    // const map = new mapboxgl.Map({
    //     container: 'map', // container ID
    //     style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL
    //     center: [-74.5, 40], // starting position [lng, lat]
    //     zoom: 9, // starting zoom
    //     projection: 'globe' // display the map as a 3D globe
    // });
    // map.on('style.load', () => {
    //     map.setFog({}); // Set the default atmosphere style
    // });
    // map.setZoom(12);
    // map.setCenter([-96.3344, 30.6280]);

    // $("#map").show();


    //mapbox token and default map center on refresh

    mapboxgl.accessToken = 'pk.eyJ1IjoianBlZHJvdHRpIiwiYSI6ImNsOGVwbjdvbzA0d24zdWxvbHQ1aWdnY3AifQ.5PL-00nl2qQqV9Iw_gMJMQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL
        center: [-98.4870, 29.4284], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });



    // set marker on click and zoom

    map.on('click', (e) => {
        console.log(`a click happened at ${e.lngLat}`);
            // let longlat = e.lngLat.split(', ')
        console.log(typeof e.lngLat)

        // function setMarker() {
        //     let marker1 = new mapboxgl.Marker()
        //         .setLngLat([e.lngLat.lng, e.lngLat.lng])
        //         .addTo(map);
        //     }
        const userMarker = new mapboxgl.Marker().setLngLat(e.lngLat).addTo(map);
        map.setCenter(e.lngLat)
        map.setZoom(10)
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat:    e.lngLat.lat,
            lon:   e.lngLat.lng,
            units: "imperial"
        }).done(function(data) {
            console.log("forecasts:")
            console.log(data);
            console.log(data.list.dt_txt)
            // $('h5').append(`${data.list[0].dt_txt}</p>`)
            printWeatherCards(data);


        });
    });

});






