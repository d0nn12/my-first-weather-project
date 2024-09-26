let now = new Date();

let dateTime = document.querySelector(".date-time");

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
let hours = now.getHours();
let minutes = now.getMinutes();

minutes = minutes < 10 ? "0" + minutes : minutes;

dateTime.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let currentCity = document.querySelector("h1");
  if (searchInput.value) {
    currentCity.innerHTML = `${searchInput.value}`;

    let apiKey = "3bace0c34doe40bafa090t390947e976";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(showTemperature);
  }
}

function showTemperature(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  currentTemperature.innerHTML = `${temperature}`;
  console.log(temperature);
}

let form = document.querySelector("#city-search");
form.addEventListener("submit", search);
