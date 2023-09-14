
// This will return current date and month
function getDate() {
    let today = new Date();
    let month = today.toLocaleString('default', { month: 'long' });
    let day = today.getDate()
    return `${day} ${month}`;
}

let searchCity = document.querySelector('#search-box')
let searchIcon = document.querySelector('#search-icon')

// Show City and current date in these divs
let cityWeather = document.getElementById('city')
let dateDiv = document.getElementById('date')

// Weather Details Div where we show weather Details
let humidity = document.querySelector('.humidity')
let feel_temp = document.querySelector('.feel-temp')
let wind = document.querySelector('.wind')
let temp = document.querySelector('.temp')

let date = getDate()
dateDiv.innerHTML = date;


// Fetch weather API from API Ninjas
searchIcon.addEventListener('click', () => {

    try {


        if (!searchCity.value) {
            alert('Please enter city')
        }
        else {
            cityWeather.innerHTML = `Weather In ${searchCity.value}`

            const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ${searchCity.value}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'Enter Your API-Key',
                    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                }
            };

            let weather = fetch(url, options)
            weather.then((response) => {
                return response.json();
            }).then((val) => {
                temp.innerHTML = `${val.temp}&deg;C`
                feel_temp.innerHTML = `<i class="fa-solid fa-temperature-low"></i>${val.feels_like} &deg;C`
                wind.innerHTML = `<i class="fas fa-thin fa-wind"></i>${val.wind_speed} km/h`
                humidity.innerHTML = `<i class="fa-solid fa-droplet drop"></i>${val.humidity} %`
            })
            searchCity.value = "";
        }
    } catch (error) {
        console.log(error)
    }

})


