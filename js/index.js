"use strict";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];

const form = document.querySelector(".form");
const containerWorkoust = document.querySelector(".workouts");
const inputType = document.querySelector(".form_input--type");
const inputDistance = document.querySelector(".form_input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longited } = position.coords;
      console.log(
        `https://www.google.com/maps/@54.8699365,37.2740523,11.97z?entry=ttu ${latitude}`
      );
    },

    function () {
      alert("Cloud not get your position");
    }
  );
}
