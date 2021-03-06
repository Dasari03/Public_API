"use strict";

const cardContainer = document.querySelector(".card-container");
const card = document.querySelector(".card");
const btn = document.querySelector(".btn");

const renderingCountry = (data, className = "") => {
  const html = `
      <article class="country ">
          <img class="country_img ${className}" src="${data.flag}"/>
          <div class = "country_data">
              <h3 class="country_name">${data.name}</h3>
              <h4 class="counrty_region">${data.region}</h4>
              <p class="country_row"><span> ๐จโ๐ฉโ๐งโ๐ฆ </span>${(
                +data.population / 1000000
              ).toFixed(1)} million people</p>
              <p class="country_row"><span> ๐ค </span>${
                data.languages[0].name
              }</p>
              <p class="country_row"><span> ๐ฐ </span>${
                data.currencies[0].name
              }</p>
          </div>
      </article>
        `;

  card.insertAdjacentHTML("beforeend", html);
};
///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating ๐
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK ๐
*/

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Geocode.xyz cannot handle more than 3 API calls at the same time..."
        );
      }
      return response.json();
    })
    .then((data) => {
      //   console.log(data);

      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Country Not Found...");
      }
      return response.json();
    })
    .then((data) => {
      renderingCountry(data[0]);
      console.log(data[0]);
    })
    .catch((Error) => console.error(Error.message));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
