let now = new Date();

let did = document.querySelector("#day");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
did.innerHTML = `${day} ${hours}:${minutes}`;

function showMyCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let input = document.querySelector("#search-city");
  city.innerHTML = `${input.value}`;
  if (city.innerHTML.length > 7) {
    city.style.fontSize = "45px";
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("click", showMyCity);

let cel = document.querySelector("#celsius");
cel.addEventListener("click", showMyCel);

function showMyCel(event) {
  event.preventDefault();
  let cell = document.querySelector("#temp");
  cell.innerHTML = 58;
}

let tem = document.querySelector("#tempp");
tem.addEventListener("click", showMyTemp);

function showMyTemp(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = 22;
}

function search(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#search-city");
  searchCity(inputCity.value);
}

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#hum").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#cl").innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey1 = "892622ecf527c4af16694837b25e5852";
  let apiURL1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey1}&units=metric`;
  axios.get(apiURL1).then(displayWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("click", search);

function showMyPosition(position) {
  let apiKey = "892622ecf527c4af16694837b25e5852";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeather);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showMyPosition);
}

let button = document.querySelector("#curr");
button.addEventListener("click", getCurrentPosition);
