// api key f0bbd31e7c47cf24fed175d28afe4139;
// api url https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=f0bbd31e7c47cf24fed175d28afe4139&units=metric

const apiKey = "f0bbd31e7c47cf24fed175d28afe4139";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=dhaka"; /*We have to change the units for degree in units=metric*/

async function checkWeather() {
  const res = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await res.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp;
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed;
}

checkWeather();
