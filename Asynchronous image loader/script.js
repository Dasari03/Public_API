"use strict";
const images = document.querySelector(".images");

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const displayImage = document.createElement("img");
    displayImage.src = `${imgPath}`;
    displayImage.addEventListener("load", () => {
      images.insertAdjacentElement("beforeend", displayImage);
      resolve(displayImage);
    });
    displayImage.addEventListener("error", () => {
      reject(new Error("Something went terribly wrong..."));
    });
  });
};

let currentImage;
createImg("DSC00282.JPG")
  .then((imageBeingLoaded) => {
    currentImage = imageBeingLoaded;
    console.log("image loaded");

    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImg("DSC00300.JPG");
  })
  .then((imageBeingLoaded) => {
    console.log("successfuly loaded a second image");
    currentImage = imageBeingLoaded;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImg("DSC01051.JPG");
  })
  .then((imageBeingLoaded) => {
    currentImage = imageBeingLoaded;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImg("DSC01261.JPG");
  })
  .then((anyNameForResolveFromCurrentImage) => {
    currentImage = anyNameForResolveFromCurrentImage;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })

  .catch((err) => console.error(err));
