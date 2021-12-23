"use strict";

const getCountry = async function (country) {
  try {
    //fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res))
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error("Something went wrong...💥");
    console.log(res);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};
getCountry("mingyun");

console.log("This will be printed first...");

// try {
//   let a = 1;
//   const b = 1;
//   b = 2;
// } catch (err) {
//   alert(err.message);
// }
