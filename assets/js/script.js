const xClass = 'x'
const circleClass = 'circle'
const cellElements = document.querySelectorAll('[data-cell')
let circleTurn = false;

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once : true })
})

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? circleClass : xClass
    placeMark(cell, currentClass)
    //check for win
    //check for tch 
    swapTurns()
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn; // Toggle between true and false
}