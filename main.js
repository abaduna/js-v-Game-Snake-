const playBOard = document.querySelector(".play-board")
let foodX  ,foodY ;


const changFoodPosition =()=>{
    foodX = Math.floor(Math.random()*30)+1
    foodY = Math.floor(Math.random()*30)+1

}


const initGame =()=>{
    let htmlMarkup = `<div class="food" style="grid-area:${foodY}/ ${foodX}"></div>`
    playBOard.innerHTML = htmlMarkup
}
changFoodPosition()
initGame()