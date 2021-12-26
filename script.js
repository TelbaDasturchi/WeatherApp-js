const api = {
    key: '54831d5c2e089dc0d083ff5bfe2e48d4',
    baseurl: 'https://api.openweathermap.org/data/2.5/'
}

const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress', setQuery);

function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
        weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather)
}