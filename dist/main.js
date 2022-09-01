/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cities.js":
/*!***********************!*\
  !*** ./src/cities.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst temp = document.querySelector(\".temp\");\nconst cityName = document.querySelector(\".name\");\nconst cities = document.querySelectorAll(\".cities\");\nconst condition = document.querySelector(\".condition\");\nconst icon = document.querySelector(\".icon\");\nconst cloud = document.querySelector(\".cloud\");\nconst humidity = document.querySelector(\".humidity\");\nconst wind = document.querySelector(\".wind\");\nconst timeOutput = document.querySelector(\".time\");\nconst dateOutput = document.querySelector(\".date\");\nconst weatherApp = document.querySelector(\".weather-app\");\n\ncities.forEach((city) => {\n     city.addEventListener(\"click\", async (e) => {\n          let cityInput = e.target.innerHTML;\n\n          try {\n               let response = await fetch(\n                    `http://api.weatherapi.com/v1/current.json?key=0ae5eb3df5a04d818fc102533222908&q=${cityInput}`,\n                    { mode: \"cors\" }\n               );\n\n               let inputData = await response.json();\n\n               const date = inputData.location.localtime;\n               const y = parseInt(date.substr(0, 4));\n               const m = parseInt(date.substr(5, 2));\n               const d = parseInt(date.substr(8, 2));\n               const time = date.substr(11);\n               dateOutput.innerHTML = ` ${d},${m} ${y}`;\n               timeOutput.textContent = time;\n               temp.innerHTML = `${inputData.current.temp_c}&#176 `;\n               cityName.textContent = inputData.location.name;\n               condition.textContent = inputData.current.condition.text;\n               icon.src = inputData.current.condition.icon;\n               cloud.textContent = `${inputData.current.cloud}%`;\n               humidity.textContent = `${inputData.current.humidity}%`;\n               wind.textContent = `${inputData.current.wind_kph}Km/h`;\n\n               if (inputData.current.condition.code === 1003) {\n                    weatherApp.style.backgroundImage =\n                         \" url(https://images.pexels.com/photos/3742711/pexels-photo-3742711.jpeg?cs=srgb&dl=pexels-andrew-beatson-3742711.jpg&fm=jpg)\";\n               } else if (inputData.current.condition.code === 1000) {\n                    weatherApp.style.backgroundImage =\n                         \" url(https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)\";\n               } else if (inputData.current.condition.code === 1243) {\n                    weatherApp.style.backgroundImage =\n                         \" url(https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)\";\n               } else if (inputData.current.condition.code === 1237) {\n                    weatherApp.style.backgroundImage =\n                         \" url(https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)\";\n               }\n          } catch (err) {\n               console.log(\"city not found: \", err);\n          }\n     });\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cities);\n\n\n//# sourceURL=webpack://weather-app/./src/cities.js?");

/***/ }),

/***/ "./src/geolocation.js":
/*!****************************!*\
  !*** ./src/geolocation.js ***!
  \****************************/
/***/ (() => {

eval("const temp = document.querySelector(\".temp\");\nconst cityName = document.querySelector(\".name\");\nconst condition = document.querySelector(\".condition\");\nconst icon = document.querySelector(\".icon\");\nconst cloud = document.querySelector(\".cloud\");\nconst humidity = document.querySelector(\".humidity\");\nconst wind = document.querySelector(\".wind\");\nconst timeOutput = document.querySelector(\".time\");\nconst dateOutput = document.querySelector(\".date\");\nconst weatherApp = document.querySelector(\".weather-app\");\nconst switchTemp = document.querySelector(\".switchTemp\");\nconst sliderRound = document.querySelector(\".slider\");\n\nnavigator.geolocation.getCurrentPosition(async function (position) {\n     let lati = position.coords.latitude;\n     let long = position.coords.longitude;\n\n     try {\n          let response = await fetch(\n               `http://api.openweathermap.org/geo/1.0/reverse?lat=${lati}&lon=${long}&limit=&appid=d7f2302909be07e4e4066c32537729f5`,\n               { mode: \"cors\" }\n          );\n          let currentLocation = await response.json();\n          let GeoCityName = currentLocation[0].name;\n\n          let respo = await fetch(\n               `http://api.weatherapi.com/v1/current.json?key=0ae5eb3df5a04d818fc102533222908&q=${GeoCityName}\n           `,\n               { mode: \"cors\" }\n          );\n\n          let DataGeolocation = await respo.json();\n\n          switchTemp.addEventListener(\"change\", () => {\n               switchTempFunc();\n          });\n          const date = DataGeolocation.location.localtime;\n          const y = parseInt(date.substr(0, 4));\n          const m = parseInt(date.substr(5, 2));\n          const d = parseInt(date.substr(8, 2));\n          const time = date.substr(11);\n          dateOutput.innerHTML = ` ${d},${m} ${y}`;\n          timeOutput.textContent = time;\n          temp.innerHTML = `${DataGeolocation.current.temp_c}&#176 `;\n          cityName.textContent = DataGeolocation.location.name;\n          condition.textContent = DataGeolocation.current.condition.text;\n          icon.src = DataGeolocation.current.condition.icon;\n          cloud.textContent = `${DataGeolocation.current.cloud}%`;\n          humidity.textContent = `${DataGeolocation.current.humidity}%`;\n          wind.textContent = `${DataGeolocation.current.wind_kph}Km/h`;\n\n          function switchTempFunc() {\n               if (switchTemp.checked === true) {\n                    temp.innerHTML = `${DataGeolocation.current.temp_f}&#8457`;\n                    sliderRound.style.backgroundColor = \"red\";\n               } else {\n                    temp.innerHTML = `${DataGeolocation.current.temp_c}&#176 `;\n                    sliderRound.style.backgroundColor = \"#2196f3\";\n                    sliderRound.innerHTML = \"\";\n               }\n          }\n\n          if (DataGeolocation.current.condition.code === 1003) {\n               weatherApp.style.backgroundImage =\n                    \" url(https://images.pexels.com/photos/3742711/pexels-photo-3742711.jpeg?cs=srgb&dl=pexels-andrew-beatson-3742711.jpg&fm=jpg)\";\n          } else if (DataGeolocation.current.condition.code === 1000) {\n               weatherApp.style.backgroundImage =\n                    \" url(https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)\";\n          } else if (DataGeolocation.current.condition.code === 1243) {\n               weatherApp.style.backgroundImage =\n                    \" url(https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)\";\n          } else if (DataGeolocation.current.condition.code === 1237) {\n               weatherApp.style.backgroundImage =\n                    \" url(https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)\";\n          }\n     } catch (error) {\n          console.log(\"geolocation not supported\", error);\n     }\n});\n\n\n//# sourceURL=webpack://weather-app/./src/geolocation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cities */ \"./src/cities.js\");\n/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation */ \"./src/geolocation.js\");\n/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_geolocation__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nlet input = document.querySelector(\"input\");\nconst btn = document.getElementById(\"search\");\nconst temp = document.querySelector(\".temp\");\nconst cityName = document.querySelector(\".name\");\nconst condition = document.querySelector(\".condition\");\nconst icon = document.querySelector(\".icon\");\nconst cloud = document.querySelector(\".cloud\");\nconst humidity = document.querySelector(\".humidity\");\nconst wind = document.querySelector(\".wind\");\nconst timeOutput = document.querySelector(\".time\");\nconst dateOutput = document.querySelector(\".date\");\nconst weatherApp = document.querySelector(\".weather-app\");\nconst switchTemp = document.querySelector(\".switchTemp\");\nconst sliderRound = document.querySelector(\".slider\");\n\nbtn.addEventListener(\"click\", (e) => {\n     e.preventDefault();\n     meteoMain();\n});\n\nasync function meteoMain() {\n     try {\n          let response = await fetch(\n               `https://api.weatherapi.com/v1/current.json?key=0ae5eb3df5a04d818fc102533222908&q=${input.value}\n               `,\n               { mode: \"cors\" }\n          );\n\n          let inputData = await response.json();\n\n          switchTemp.addEventListener(\"change\", () => {\n               switchTempFunc();\n          });\n          const date = inputData.location.localtime;\n          const y = parseInt(date.substr(0, 4));\n          const m = parseInt(date.substr(5, 2));\n          const d = parseInt(date.substr(8, 2));\n          const time = date.substr(11);\n          dateOutput.innerHTML = ` ${d},${m} ${y}`;\n          timeOutput.textContent = time;\n          temp.innerHTML = `${inputData.current.temp_c}&#176 `;\n          cityName.textContent = inputData.location.name;\n          condition.textContent = inputData.current.condition.text;\n          icon.src = inputData.current.condition.icon;\n          cloud.textContent = `${inputData.current.cloud}%`;\n          humidity.textContent = `${inputData.current.humidity}%`;\n          wind.textContent = `${inputData.current.wind_kph}Km/h`;\n\n          function switchTempFunc() {\n               if (switchTemp.checked === true) {\n                    temp.innerHTML = `${inputData.current.temp_f}&#8457`;\n                    sliderRound.style.backgroundColor = \"red\";\n               } else {\n                    temp.innerHTML = `${inputData.current.temp_c}&#176 `;\n                    sliderRound.style.backgroundColor = \"#2196f3\";\n                    sliderRound.innerHTML = \"\";\n               }\n          }\n\n          if (inputData.current.condition.code === 1003) {\n               weatherApp.style.backgroundImage =\n                    \" url(https://images.pexels.com/photos/3742711/pexels-photo-3742711.jpeg?cs=srgb&dl=pexels-andrew-beatson-3742711.jpg&fm=jpg)\";\n          } else if (inputData.current.condition.code === 1000) {\n               weatherApp.style.backgroundImage =\n                    \" url(https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)\";\n          } else if (inputData.current.condition.code === 1243) {\n               weatherApp.style.backgroundImage =\n                    \" url(https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)\";\n          } else if (inputData.current.condition.code === 1237) {\n               weatherApp.style.backgroundImage =\n                    \" url(https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)\";\n          }\n     } catch (err) {\n          console.log(\"city not found: \", err);\n     }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;