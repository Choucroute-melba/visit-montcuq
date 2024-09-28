
const clocher = document.getElementById("clocher")
const tour = document.getElementById("tour")

/*const motionOption = document.getElementById('reduces-motion')
let motion = !motionOption.value
motionOption.addEventListener('change', (e) => {
    motion = !e.target.value
})*/

tour.style.position = "relative"
tour.style.left = -10 + 'px'
tour.style.top = -30 + 'px'
clocher.style.position = "relative"

let tourPos = {x: -10 * 60, y: -30 * 60};
let clocherPos = {x: 0, y: 0};

/*
window.addEventListener("mousemove", (e) => {
    if(motion) {
        changeTourPos(e.movementX, e.movementY)
        changeClocherPos(e.movementX, e.movementY)
    }
})

window.addEventListener("mouseout", (e) => {

    tour.style.transition = "1s"
    clocher.style.transition = "1s"
    tour.style.left = -10 + 'px'
    tour.style.top = -30 + 'px'
    clocher.style.left = 0 + 'px'
    clocher.style.top = 0 + 'px'
    tourPos = {x: -10 * 50, y: -30 * 50};
    clocherPos = {x: 0, y: 0};
    setTimeout(() => {
        tour.style.transition = "0s"
        clocher.style.transition = "0s"
    }, 1000)
})
*/

function changeTourPos(dx = 0, dy = 0) {
    tourPos.x += dx
    tourPos.y += dy
    tour.style.left = Math.floor(tourPos.x / 50) + 'px'
    tour.style.top = Math.floor(tourPos.y / 50) + 'px'
}

function changeClocherPos(dx = 0, dy = 0) {
    clocherPos.x += dx
    clocherPos.y += dy
    clocher.style.left = Math.floor(clocherPos.x / 60) + 'px'
    clocher.style.top = Math.floor(clocherPos.y / 60) + 'px'
}