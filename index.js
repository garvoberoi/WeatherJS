let weather = {
    "apikey": "6537fdbfe284842510179ed226a64c87",
    fetchWeather: function(city) {
        displayLoading();
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch(error => alert(error.message));
    },
    displayWeather: function(data) {
        hideLoading();
        const name = data.name;
        const desc = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const speed = data.wind.speed;
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".temp").innerHTML = temp + " °C";
        document.querySelector(".desc").innerHTML = desc;
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + " %";
        document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + " km/h";
        document.querySelector(".W-info").classList.remove("loading");
    },
    search: function(){
        this.fetchWeather(document.querySelector(".Sinput").value);
    }
}

document.querySelector(".input button").addEventListener("click", function(){
    weather.search();
});
document.querySelector(".Sinput").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});
const load = document.querySelector(".load");
function displayLoading() {
    load.classList.add("display");
    load.innerHTML = "Loading....";

}
function hideLoading() {
    load.classList.remove("display");
    
}