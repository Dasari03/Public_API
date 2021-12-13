"use strict";

const card = document.querySelector(".card");

const getCountryData = (country) => {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
<article class="country">
    <img class="country_img" src="${data.flag}"/>
    <div class = "country_data">
        <h3 class="country_name">${data.name}</h3>
        <h4 class="counrty_region">${data.region}</h4>
        <p class="country_row"><span> 👨‍👩‍👧‍👦 </span>${(
          +data.population / 1000000
        ).toFixed(1)} million people</p>
        <p class="country_row"><span> 🔤 </span>${data.languages[0].name}</p>
        <p class="country_row"><span> 💰 </span>${data.currencies[0].name}</p>
    </div>
</article>
  `;

    card.insertAdjacentHTML("beforeend", html);
  });
};

getCountryData("usa");
getCountryData("brazil");
getCountryData("greece");
getCountryData("japan");
getCountryData("portugal");
getCountryData("france");
