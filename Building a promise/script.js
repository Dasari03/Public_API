"use strict";

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw result is on the way...");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You won the lottery ticket...Congratulations!");
    } else {
      reject(new Error("You just lost your money...Sorry"));
    }
  }, 2000);
});
lotteryPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

//promisify
const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("I have waited for 1 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I have waited for 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I have waited for 3 seconds");
    return wait(1);
  })
  .then(() => console.log("I have waited for 4 second"));

Promise.resolve("abcd").then((x) => console.log(x));
Promise.reject(new Error("A caught error")).catch((err) => console.error(err));
