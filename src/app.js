function updateTime() {
  // Warsaw
  let warsawElement = document.querySelector("#warsaw");
  if (warsawElement){
  let warsawDateElement = warsawElement.querySelector(".date");
  let warsawTimeElement = warsawElement.querySelector(".time");
  let warsawTime = moment().tz("Europe/Warsaw");

  warsawDateElement.innerHTML = warsawTime.format("MMMM Do, YYYY");
  warsawTimeElement.innerHTML = warsawTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  }

  // Honolulu
  let honoluluElement = document.querySelector("#honolulu");
  if (honoluluElement) {
  let honoluluDateElement = honoluluElement.querySelector(".date");
  let honoluluTimeElement = honoluluElement.querySelector(".time");
  let honoluluTime = moment().tz("Pacific/Honolulu");

  honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do, YYYY");
  honoluluTimeElement.innerHTML = honoluluTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
}

function updateCity (event) {
  let cityTimezone = event.target.value;
  if(cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName =cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" >
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>

        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
      </div>
  `
}


updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity)