
let foodX  ,foodY ;
const playBOard = document.querySelector(".play-board")

const changFoodPosition =()=>{
    foodX = Math.floor(Math.random()*30)+1
    console.log(foodX)
    foodY = Math.floor(Math.random()*30)+1
    console.log(foodY)
}


const initGame =()=>{
    let htmlMarkup = `<div class="food" style="grid-area:${foodY}/ ${foodX}"></div>`
    playBOard.innerHTML = htmlMarkup
}
// changFoodPosition()
initGame()