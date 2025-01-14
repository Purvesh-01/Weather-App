const apiKey = "3812f5043659d0d478afd293f7b15c3b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

const weatherIcon = document.querySelector(".weatherIcon img");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.getElementById("location").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp + " °C";

    document.getElementById("humidity").innerHTML = "Humidity - " + data.main.humidity + " %";
    document.getElementById("weather").innerHTML = "Weather - " + data.weather[0].description;

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./images/cloudy.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./images/rainy-day.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./images/sun.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./images/7477790.png";
    } else {
        weatherIcon.src = "./images/default.png";
    }
}

searchButton.addEventListener("click", () => {
    checkWeather(search.value);
});
