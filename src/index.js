import cities from "./cities";
import navigator from "./geolocation";

let input = document.querySelector("input");
const btn = document.getElementById("search");
const container = document.querySelector(".container");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".name");
const condition = document.querySelector(".condition");
const icon = document.querySelector(".icon");
const cloud = document.querySelector(".cloud");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const timeOutput = document.querySelector(".time");
const dateOutput = document.querySelector(".date");
const weatherApp = document.querySelector(".weather-app");
const switchTemp = document.querySelector(".switchTemp");
const sliderRound = document.querySelector(".slider");

btn.addEventListener("click", (e) => {
     e.preventDefault();
     meteoMain();
});

async function meteoMain() {
     try {
          let response = await fetch(
               `https://api.weatherapi.com/v1/current.json?key=0ae5eb3df5a04d818fc102533222908&q=${input.value}
               `,
               { mode: "cors" }
          );

          let inputData = await response.json();

          switchTemp.addEventListener("change", () => {
               switchTempFunc();
          });
          const date = inputData.location.localtime;
          const y = parseInt(date.substr(0, 4));
          const m = parseInt(date.substr(5, 2));
          const d = parseInt(date.substr(8, 2));
          const time = date.substr(11);
          dateOutput.innerHTML = ` ${d},${m} ${y}`;
          timeOutput.textContent = time;
          temp.innerHTML = `${inputData.current.temp_c}&#176 `;
          cityName.textContent = inputData.location.name;
          condition.textContent = inputData.current.condition.text;
          icon.src = inputData.current.condition.icon;
          cloud.textContent = `${inputData.current.cloud}%`;
          humidity.textContent = `${inputData.current.humidity}%`;
          wind.textContent = `${inputData.current.wind_kph}Km/h`;

          function switchTempFunc() {
               if (switchTemp.checked === true) {
                    temp.innerHTML = `${inputData.current.temp_f}&#8457`;
                    sliderRound.style.backgroundColor = "red";
               } else {
                    temp.innerHTML = `${inputData.current.temp_c}&#176 `;
                    sliderRound.style.backgroundColor = "#2196f3";
                    sliderRound.innerHTML = "";
               }
          }

          if (inputData.current.condition.code === 1003) {
               weatherApp.style.backgroundImage =
                    " url(https://images.pexels.com/photos/3742711/pexels-photo-3742711.jpeg?cs=srgb&dl=pexels-andrew-beatson-3742711.jpg&fm=jpg)";
          } else if (inputData.current.condition.code === 1000) {
               weatherApp.style.backgroundImage =
                    " url(https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)";
          } else if (inputData.current.condition.code === 1243) {
               weatherApp.style.backgroundImage =
                    " url(https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)";
          } else if (inputData.current.condition.code === 1237) {
               weatherApp.style.backgroundImage =
                    " url(https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)";
          }
     } catch (err) {
          console.log("city not found: ", err);
     }
}
