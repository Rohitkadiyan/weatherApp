// All get Elements
const submitBtn = document.querySelector("#submitbtn");
const cityInput = document.querySelector("#cityId");
const cityName = document.querySelector("#city_name");
const temp = document.querySelector("#temp");
const temp_status = document.querySelector("#temp_status");
const data_hide = document.querySelector(".middle_layer");

// Call API Fetch Data
const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = cityInput.value;
  if (cityVal === "") {
    cityName.innerHTML = "Please Enter City Name";
    data_hide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=327d666fb38e77a48f45534774f0bde9`;
      let res = await fetch(url);
      let data = await res.json();
      let arrData = [data];
      console.log(arrData[0]);

      //   Record Show
      cityName.innerHTML = `${arrData[0].name} , ${arrData[0].sys.country}`;
      temp.innerHTML = arrData[0].main.temp;
      //Emojies
      let temp_mode = arrData[0].weather[0].main;
      if (temp_mode == "Clear") {
        temp_status.innerHTML =
          '<i class="fas fa-sun" style="color:yellow"></i>';
      } else if (temp_mode == "Clouds") {
        temp_status.innerHTML = '<i class="fas fa-cloud"></i>';
      } else if (temp_mode == "Rain") {
        temp_status.innerHTML = '<i class="fas fa-rain"></i>';
      } else {
        temp_status.innerHTML = '<i class="fas fa-cloud"></i>';
      }
      cityName.style.color = "white";
      data_hide.classList.remove("data_hide");
    } catch (err) {
      cityName.innerHTML = "Please Enter Valid City Name";
      cityName.style.color = "red";
      data_hide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
