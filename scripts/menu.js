import { meteorSpawn } from "./meteor.js";
import { startGame } from "./playStart.js";

const buttons = document.querySelectorAll('.menu button')

buttons.forEach((button)=>{
    button.addEventListener('click', ()=> {
        startGame()
        switch (button.id) {
            case "easy":
                meteorSpawn(3000)
                break;
            case "medium":
                meteorSpawn(1500)
                break;
            case "hard":
                meteorSpawn(700)
                    break;
            default:
                break;
        }
    })
})