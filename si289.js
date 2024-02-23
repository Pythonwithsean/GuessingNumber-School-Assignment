"use strict";

let rand;
let max;
let Alert;
let Wrong;
let lifes;
let lifeElm;
let guesses = [];
let game_active = true;
let checkerbtn;
let AlertBox;

document.addEventListener("DOMContentLoaded", () => {
  lifeElm = document.querySelector(".lifes");
  AlertBox = document.querySelector(".alert");
  const submitBtn = document.getElementById("submitBtn");
  const buttons = document.getElementsByTagName("input");
  checkerbtn = document.querySelector("#checkBtn");
  document.querySelector(".start,.ending").addEventListener("click", () => {
    location.reload();
  });
  submitBtn.style.display = "none";

  for (const button of buttons) {
    button.addEventListener("change", () => {
      if (button.checked) {
        rand = Math.floor(Math.random() * Number.parseInt(button.value)) + 1;
        console.log("Random Number is " + rand);
        console.log(typeof rand);
        max = button.value;
        if (max == 10) lifes = 3;
        else if (max == 100) lifes = 7;
        else if (max == 1000) lifes = 10;
        for (const otherButton of buttons) {
          if (otherButton.name !== button.name) {
            otherButton.checked = false;
          }
        }
        submitBtn.style.display = "block";
      }
    });
  }
  submitBtn.addEventListener("click", () => {
    const instruction = document.querySelector(".instruction-wrapper");
    instruction.style.display = "none";

    const game = document.querySelector(".Game-Section");
    console.log(guesses);
    game.style.display = "block";
    lifeElm.textContent += ` is ${lifes}`;
    const heading = document.querySelector(".Game-Section h3");
    heading.innerHTML += ` Between ${max - max + 1} and ${max}`;
  });

  const input = document.querySelector("#randnumInput");
  checkerbtn.addEventListener("click", () => {
    guesses.push(input.value);
    console.log(guesses);

    if (Number.parseInt(lifes) === 0) {
      AlertBox.style.display = "block";
    } else {
      if (Number.parseInt(input.value) === Number.parseInt(rand)) {
        Alert = document.createElement("h1");
        Alert.classList.add("CORRECT");
        Alert.innerHTML = "Correct";
      } else if (Number.parseInt(input.value) !== Number.parseInt(rand)) {
        lifes -= 1;
        if (isNaN(Number.parseInt(Number.parseInt(input.value)))) {
          if (!Alert) {
            Alert = document.createElement("h5");
            Alert.classList.add("ERROR");
            Alert.innerHTML = "You did not Enter a Number";
            input.value = "";
            setTimeout(() => {
              document.body.removeChild(Alert);
              Alert = undefined;
            }, 1000);
          }
        }
        if (!Alert) {
          Alert = document.createElement("h5");
          Alert.classList.add("ERROR");
          Alert.innerHTML = "Wrong Number";
          input.value = "";
          setTimeout(() => {
            document.body.removeChild(Alert);
            Alert = undefined;
          }, 1000);
        }
      }

      lifeElm.textContent = ` Number of Guesses is ${lifes}`;
      if (Alert) document.body.append(Alert);
    }
  });
});
