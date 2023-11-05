function mainfunction() {
  const locationName = document.querySelector(".location-name");
  const temperature = document.querySelector(".temp>h3");
  const time = document.querySelector(".time");
  const input = document.querySelector(".search-box>input");
  const button = document.querySelector(".search-box>button");
  const condition = document.querySelector('.PHWind>p:first-child');
  const humidity = document.querySelector('.PHWind>p:nth-child(2)');
  const wind = document.querySelector('.PHWind>p:last-child');

  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=329d61e18fda465e918165250230211&q=07112&days=7`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      let region = response.location.name;
      locationName.textContent = region;

    });

  function inputFunction() {
    let search = input.value;

    fetch(
      `http://api.weatherapi.com/v1/current.json?key=329d61e18fda465e918165250230211&q=${search}`,
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);

        let searchLocation = response.location.name +", "+ response.location.country.slice(0,2);
        locationName.textContent = searchLocation;

        let temp = response.current.temp_c + " \u00B0C";
        temperature.textContent = temp;

        let cond = response.current.condition.text;
        condition.textContent = `Condition: ${cond}`;
        
        let humidityRange = response.current.humidity;
        humidity.textContent = `Humidity: ${humidityRange}%`;

        let windSpeed = response.current.wind_kph;
        wind.textContent = `Wind Speed: ${windSpeed} Km/H`;

        let timeZone = response.location.localtime;
        time.textContent = `Time: ${timeZone}`;


      })

      .catch(function(err){

        console.log(`Error: ${err}`);
      })
  }

  button.addEventListener("click", inputFunction);
}

mainfunction();
