
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=093e40f128be9d59f574e243c76c0986
// eventListener
var app = {
    init: () => {
        document
        .getElementById("search-btn")
        .addEventListener("click",app.fetchWeather);

    }
}
// current weather
var weather = {
    "apiKey": "093e40f128be9d59f574e243c76c0986",
    fetchWeather:function(city){
        // fetch the weather
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey
        ).then((Response) => Response.json())
        .then((data) => console.log(data))
    }
}

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=093e40f128be9d59f574e243c76c0986
// direct geocode

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=093e40f128be9d59f574e243c76c0986
// 5-day weather forcaste