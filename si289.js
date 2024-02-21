"use strict";


let rand 
let max 
document.addEventListener("DOMContentLoaded", () => {   
    const submitBtn = document.getElementById("submitBtn");
    const buttons = document.getElementsByTagName("input");
    submitBtn.style.display = "none";

    for (const button of buttons) {
        button.addEventListener("change", () => {
            if (button.checked) {
                console.log(button.value)
                rand = Math.floor(Math.random() * button.value) +1
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
    submitBtn.addEventListener("click", (e)=>{
            const instruction = document.querySelector(".instruction-wrapper");
            instruction.style.display ="none";
            const game = document.querySelector(".Game-Section")
            game.style.display = "block";
            const heading = document.querySelector(".Game-Section h3")
            heading.innerHTML += ` Between ${(max - max) + 1} and ${max}`
            
          
           
                        
    })
 
 
});
