"use strict";

console.log("log begins");
setTimeout(() => {
  console.log("setTimeout that is supposed to work immediately"), 0;
});
//Microtasks Queue that has a priority over Callback Queue to enter Call Stack
Promise.resolve("Promise resolved No.1").then((res) => {
  console.log(res);
});
console.log("log ends");
