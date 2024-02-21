"use strict";

let rand;
let max;
let Alert;
let Wrong;
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const buttons = document.getElementsByTagName("input");
  submitBtn.style.display = "none";

  for (const button of buttons) {
    button.addEventListener("change", () => {
      if (button.checked) {
        console.log(button.value);
        rand = Math.floor(Math.random() * button.value) + 1;
        max = button.value;
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
    game.style.display = "block";
    console.log(rand);
    const heading = document.querySelector(".Game-Section h3");
    heading.innerHTML += ` Between ${max - max + 1} and ${max}`;
  });

  const input = document.querySelector("#randnumInput");
  const checkerbtn = document.querySelector("#checkBtn");
  checkerbtn.addEventListener("click", () => {
    console.log(input.value);

    if (input.value === "" || isNaN(input.value)) {
      if (!Alert) {
        Alert = document.createElement("h5");
        Alert.classList.add("ERROR");
        Alert.innerHTML = "You need to Enter a Number";
        document.body.append(Alert);
        if (Alert) {
          setTimeout(() => {
            document.body.removeChild(Alert);
            Alert = undefined;
          }, 3000);
        }
        input.value = "";
      }
    } else if (input.value != rand) {
      if (!Wrong) {
        Wrong = document.createElement("h5");
        Wrong.classList.add("ERROR");
        Wrong.innerHTML = "Wrong Number! Try Again....";
        document.body.append(Wrong);
        if (Wrong) {
          setTimeout(() => {
            document.body.removeChild(Wrong);
            Wrong = undefined;
          }, 3000);
        }
      }
      input.value = "";
    }
  });
  console.log(input);
});
