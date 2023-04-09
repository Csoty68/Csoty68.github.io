let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//Lekeres Apibol es kiirja
let getWeather = () => {
  let cityValue = cityRef.value;
  //If input field is empty
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Adj meg egy várost</h3>`;
  }
  //Ha nem ures
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    //Lenulazza
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      //Ha letezik
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>
        `;
      })
      //Ha nem letezik
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Nem talalhato</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
