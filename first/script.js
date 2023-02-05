const displayGameStatus = document.querySelector('.game-status');

let gameActive = true;
let currPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const currPlayerTurn = () => `It's ${currPlayer}'s turn`;
const winMessage = () => `Player ${currPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;

displayGameStatus.innerHTML = currPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currPlayer;
    clickedCell.innerHTML = currPlayer;
}

function playerChange() {
    currPlayer = currPlayer === "X" ? "O" : "X";
    displayGameStatus.innerHTML = currPlayerTurn();
}

function resultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        gameActive = false;
        setTimeout(restartGame,3000);
        displayGameStatus.innerHTML = winMessage();
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        gameActive = false;
        setTimeout(restartGame,3000);
        displayGameStatus.innerHTML = drawMessage();
        return;
    }

    playerChange();
}

function cellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    cellPlayed(clickedCell, clickedCellIndex);
    resultValidation();
}

function restartGame() {
    gameActive = true;
    currPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    displayGameStatus.innerHTML = currPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}


document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));

