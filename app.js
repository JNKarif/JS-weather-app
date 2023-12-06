// api key f0bbd31e7c47cf24fed175d28afe4139;
// api url https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=f0bbd31e7c47cf24fed175d28afe4139&units=metric

const apiKey = "f0bbd31e7c47cf24fed175d28afe4139";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; /*We have to change the units for degree in units=metric*/

const searchBox = document.querySelector(".search input");
/**to get weather information by search
step 1: delete city name from url>>> add city as parameter>>> add city parameter in fetch url with +
step 2: DOM from search class >>> and .search input
step 3: addEventListener>>>to searchBox because from input we will get data
step 4: call the function inside addEventListener and give the city parameter argument as searchBox.value because value is the builtin
*/
const searchBtn = document.querySelector(".search button");
// to change weather icon dynamically
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  /**changing dynamically the fetch url
   * &appid= will add to the url dynamically for ``back tick
   * city will be added with url dynamically
   */
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) +
      "°c"; /*Math.round() to make the floating number to integer */
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // dynamic weather image implement
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "Images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "Images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "Images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "Images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "Images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

/**
 * To apply Enter key:
 * "keadown" addEventListener
 * take a parameter
 * if condition parameter.key === the given key name
 * call the function inside if condition
 */
searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
