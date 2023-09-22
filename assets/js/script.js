const xClass = 'x'
const circleClass = 'circle'
const cellElements = document.querySelectorAll('[data-cell')
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];
let circleTurn = false;

//makes sure only one mark per cell

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

//checks if winning combination exists

function checkWin(currentClass) {
  return winningCombinationExists(currentClass);
}

function winningCombinationExists(currentClass) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}

//handles if it is a draw

function isBoardFull() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(xClass) || cell.classList.contains(circleClass);
    });
}

 // Checks if the 

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
        displayResult("It's a draw!", "The game ended in a draw.");
        removeClickHandlers();
        return;
    }
}


//Alerts the user if someone won

function displayResult(currentClass, message = '') {
    if (message) {
        alert(message); // Display the custom message if provided
    } else {
        alert(`Congrats ${currentClass} for winning!`);
    }
}

gameLoop();