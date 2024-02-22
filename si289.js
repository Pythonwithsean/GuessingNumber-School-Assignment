"use strict";

let rand;
let max;
let Alert;
let Wrong;
let lifes;
let lifeElm
let guesses = []
let game_active = true;



document.addEventListener("DOMContentLoaded", () => {
  lifeElm = document.querySelector(".lifes");

  const submitBtn = document.getElementById("submitBtn");
  const buttons = document.getElementsByTagName("input");
  document.querySelector(".start,.ending").addEventListener("click", ()=> { 
    location.reload()
  })
  submitBtn.style.display = "none";

  for (const button of buttons) {
    button.addEventListener("change", () => {
      if (button.checked) {
     
        rand = Math.floor(Math.random() * button.value) + 1;
        console.log("Random Number is " + rand)
        max = button.value;
        if(max == 10) lifes = 3; 
        else if(max == 100) lifes = 7; 
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
    console.log(guesses)
    game.style.display = "block";
  lifeElm.textContent += ` is ${lifes}`
    const heading = document.querySelector(".Game-Section h3");
    heading.innerHTML += ` Between ${max - max + 1} and ${max}`;
  });

  const input = document.querySelector("#randnumInput");
  const checkerbtn = document.querySelector("#checkBtn");
  checkerbtn.addEventListener("click", () => {
    guesses.push(input.value)
    console.log(guesses)
    if (input.value === "" || isNaN(input.value)) {
      lifeElm.textContent = ` Number of Guesses is ${lifes - 1}`
      if (!Alert) {
        Alert = document.createElement("h5");
        Alert.classList.add("ERROR");
        Alert.innerHTML = "You need to Enter a Number";
        lifes -= 1
        lifeElm.textContent = ` Number of Guesses is ${lifes}`
        console.log(lifes)
        document.body.append(Alert);
        if (Alert) {
          setTimeout(() => {
            document.body.removeChild(Alert);
            Alert = undefined;
          }, 1000);
        }
        input.value = "";
      }
    } 
    else if (input.value != rand) {
      
      lifeElm.textContent = ` Number of Guesses is ${lifes - 1}`
    
      if (!Wrong) {
        Wrong = document.createElement("h5");
        Wrong.classList.add("ERROR");
        Wrong.innerHTML = "Wrong Number! Try Again....";
        document.body.append(Wrong);
        if (Wrong) {
          setTimeout(() => {
            document.body.removeChild(Wrong);
            Wrong = undefined;
          }, 1000);
        }
      }
      input.value = "";
    }
  });
  console.log(input);
});
