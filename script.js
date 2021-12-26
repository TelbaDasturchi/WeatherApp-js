const api = {
  key: "54831d5c2e089dc0d083ff5bfe2e48d4",
  baseurl: "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("keypress", setQuery);

function setQuery(e) {
  if (e.keyCode == 13) {
    getResults(searchBox.value);
    console.log(searchBox.value);
  }
}

function getResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerHTML = dateBuilder(now);

  let temp = document.querySelector('.main-temp .temp')
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`

  let weatherEl = document.querySelector('.main-temp .weather')
  weatherEl.innerHTML = `${weather.weather[0].main}`;

  let hiLow = document.querySelector('.main-temp .hi-low')
  hiLow.innerHTML = `${Math.round(weather.main.temp_min)}<span>°C</span> / ${Math.round(weather.main.temp_max)}<span>°C</span>`
}

function dateBuilder(s) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[s.getDay()];
  let data = s.getDate();
  let month = months[s.getMonth()];
  let year = s.getFullYear();

  return `${day} ${data} ${month} ${year}`;
}
