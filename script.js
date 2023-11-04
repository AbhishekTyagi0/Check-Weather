function mainfunction() {
  const locationName = document.querySelector(".location-name");
  const temperature = document.querySelector(".temp>h3");
  const input = document.querySelector(".search-box>input");
  const button = document.querySelector(".search-box>button");

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

      let temp = response.current.temp_c;
      temperature.textContent = temp;
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

        let searchLocation = response.location.name;
        locationName.textContent = searchLocation;
      });
  }

  button.addEventListener("click", inputFunction);
}

mainfunction();
