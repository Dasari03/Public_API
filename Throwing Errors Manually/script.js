"use strict";
const cardContainer = document.querySelector(".card-container");
const card = document.querySelector(".card");
const btn = document.querySelector(".btn");

const renderErrorMessage = (msg) => {
  card.insertAdjacentText("beforeend", msg);
};

const justAddMessage = (msg) => {
  card.insertAdjacentText("beforeend", msg);
};

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

// const getCountryAndNeighbor = (country) => {
//   const request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderingCountry(data);
//     //neighbor
//     const [neighbor] = data.borders;
//     console.log(neighbor);
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       console.log(this.responseText);
//       const info = JSON.parse(this.responseText);
//       console.log(info);
//       renderingCountry(info, "neighboring");
//     });
//   });
// };

// getCountryAndNeighbor("netherlands");

const getJSON = (url, errorMsg = "Something went wrong...") => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg}(${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v2/name/${country}`,
    "Country Not Found..."
  )
    .then((data) => {
      renderingCountry(data[0]);
      // const neighbor = data[0].borders[0];
      const neighbor = "";

      if (!neighbor) {
        throw new Error(`There are no neighbor...`);
      }
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        "Country Not Found..."
      );
    })

    .then((data) => renderingCountry(data, "neighboring"))
    .catch((errorMsg) => {
      console.error(`${errorMsg} ๐คฎ๐คฎ๐คฎ`);
      renderErrorMessage(`Something went wrong...${errorMsg.message}๐คฎ๐คฎ๐คฎ`);
    })
    .finally(() => {
      console.log(`finished...`);
    });
};

btn.addEventListener("click", () => {
  getCountryData("france");
});

getCountryData("japan");
