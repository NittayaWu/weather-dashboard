var weather = {
    "apiKey": "093e40f128be9d59f574e243c76c0986",
    fetchWeather:function(){
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=093e40f128be9d59f574e243c76c0986"
        ).then((Response) => Response.json())
        .then((data) => console.log(data))
    }
}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=093e40f128be9d59f574e243c76c0986
// current weather


// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=093e40f128be9d59f574e243c76c0986
// direct geocode

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=093e40f128be9d59f574e243c76c0986
// 5-day weather forcaste