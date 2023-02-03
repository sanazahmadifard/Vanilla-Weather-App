function displaytemperatur(response) {
  console.log(response.data);
  let temperaturElement = document.querySelector("#temperatur");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windspeedElement = document.querySelector("#wind-speed");
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.main.humidity;
  descriptionElement.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = response.data.name;
  temperaturElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "1ee4264117b73d2263eecd562f31ef5c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displaytemperatur);
