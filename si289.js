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
let gap = 0;
let listOfGuesses;
document.addEventListener("DOMContentLoaded", () => {
  lifeElm = document.querySelector(".lifes");
  AlertBox = document.querySelector(".alert");
  listOfGuesses = document.querySelector(".list-of-guesses");
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
    game.style.display = "flex";
    lifeElm.textContent += ` is ${lifes}`;
    const heading = document.querySelector(".Game-Section h3");
    heading.innerHTML += ` Between ${max - max + 1} and ${max}`;
  });

  const input = document.querySelector("#randnumInput");
  checkerbtn.addEventListener("click", () => {
    guesses.push(input.value);
    const guessElement = document.createElement("li");

    guessElement.innerHTML = guesses[guesses.length - 1];
    if (!isNaN(input.value) && lifes !== 0) listOfGuesses.append(guessElement);

    document.createElement("li");
    if (Number.parseInt(lifes) <= 0) {
      checkerbtn.style.display = "none";
      AlertBox.style.display = "block";
      setTimeout(() => {
        location.reload();
      }, 5000);
    } else {
      if (Number.parseInt(input.value) === Number.parseInt(rand)) {
        Alert = document.createElement("h1");
        Alert.classList.add("CORRECT");
        Alert.innerHTML = "Correct Well Done!! Game Will Restart in 3 Seconds";
        setTimeout(() => {
          location.reload();
        }, 3000);
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
        } else if (Number.parseInt(input.value) > Number.parseInt(rand)) {
          if (!Alert) {
            Alert = document.createElement("h5");
            Alert.classList.add("WRONG");
            Alert.innerHTML = "Too high. Try again!”";
            input.value = "";
            setTimeout(() => {
              document.body.removeChild(Alert);
              Alert = undefined;
            }, 1000);
          }
        } else if (Number.parseInt(input.value) < Number.parseInt(rand)) {
          if (!Alert) {
            Alert = document.createElement("h5");
            Alert.classList.add("WRONG");
            Alert.innerHTML = "Too Low. Try again!”";
            input.value = "";
            setTimeout(() => {
              document.body.removeChild(Alert);
              Alert = undefined;
            }, 1000);
          }
        }
      }

      lifeElm.textContent = ` Number of Guesses is ${lifes}`;
      if (Alert) document.body.append(Alert);
    }
  });
});
