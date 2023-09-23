const xClass = 'x';
const circleClass = 'circle';
const cellElements = document.querySelectorAll('[data-cell');
const restartButton = document.getElementById('restart');
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
let circleTurn = false;
let gameOver = false;

/**
 * makes sure only one mark per cell
 */

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

/**
 *handles the placment of the marks
 */
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

/**
 * handles what mark to place and swapping turns
 */
function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? circleClass : xClass;
    placeMark(cell, currentClass);
    circleTurn = !circleTurn;
    gameLoop();
}

/**
 * disables mark placement
 */

function disableCellClick() {
    cellElements.forEach(cell => {
        cell.removeEventListener('click', handleClick);
    });
}

/**
 * checks if winning combination exists
 */

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

//checks for wins, draws, displays results, and ends game.

function gameLoop() {
    if (checkWin(xClass)) {
        displayResult('x');
        incrementScore('x');
        disableCellClick();
        return;
    } else if (checkWin(circleClass)) {
        displayResult('O');
        incrementScore('o');
        disableCellClick();
        return;
    } else if (isBoardFull()) {
        displayResult();
        disableCellClick();
        return;
    }
}

/**
 * increments the score by one depending on who won 
 */

function incrementScore(player) {
    let oldScore = parseInt(document.getElementById(`won-times-${player}`).innerText);
    document.getElementById(`won-times-${player}`).innerText = ++oldScore;
}

//resets the board

restartButton.addEventListener('click', resetBoard);

/**
 * Resets the board and clears messages
 */

function resetBoard() {
    cellElements.forEach(cell => {
        cell.classList.remove(xClass, circleClass);
    });

    circleTurn = false;

    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
    });
}

//alerts the user if someone won

function displayResult(currentClass) {
    if (currentClass !=null) {
        document.querySelector('.messages').innerHTML = `Congrats ${currentClass} for winning!`;
    } else {
        document.querySelector('.messages').innerHTML = `It is a tie!`;
    }
}

gameLoop();