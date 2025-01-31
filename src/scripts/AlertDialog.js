import { playAudio } from "./AudioAlert.js"
import { stopConfetti } from "./confetti.js"
import { resetGameState } from "./game/GameProvider.js"

//exports a function that accepts a string as an input
export const AlertDialog = (string, endOfGame=false) => {
    const dialogContainer = document.querySelector("#dialog")
    //function checks browser for dialogue options
    //displays string with the appropriate option
    dialogContainer.innerHTML  = `<div class="alert">${string}</div>`
    if (typeof dialogContainer.showModal === "function") {
        if (endOfGame === true) {

            dialogContainer.innerHTML += `<form method="dialog"><button id="endGameButton">Ok</button></form>`
            playAudio()
        }else {
            dialogContainer.innerHTML += `<form method="dialog"><button id="dialogButton">Ok</button></form>`
        }
        
        dialogContainer.showModal()
    } 
     else {
            window.alert(string)
    }
}

document.addEventListener(
    "click",
    clickEvent=> {
        if (clickEvent.target.id === "endGameButton"){
            stopConfetti()
            resetGameState()
        }
    }
    
)