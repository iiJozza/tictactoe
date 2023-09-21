const xClass = 'x'
const circleClass = 'circle'
const cellElements = document.querySelectorAll('[data-cell')
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];
let circleTurn = false;


cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once : true })
})

//handles the placment of the marks

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

//handles what mark to place and swapping turns

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? circleClass : xClass;
    placeMark(cell, currentClass);
    circleTurn = !circleTurn;
    gameLoop();
}

//checks win

function winningCombinationExists(currentClass) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}
function checkWin(currentClass) {
  return winningCombinationExists(currentClass);
}
 // Check for a win
function gameLoop() {
    if (checkWin(xClass)) {
        displayResult("X");
        removeClickHandlers(); 
        return;
    } else if (checkWin(circleClass)) {
        displayResult("O");
        removeClickHandlers();
        return;
    } else if (isBoardFull()) {
        displayResult("It's a draw!");
        removeClickHandlers(); 
        return;
    }
}

//Alerts the user if someone won

function displayResult(currentClass) {
    alert(`Congrats ${currentClass} for winning!`);
}

gameLoop();