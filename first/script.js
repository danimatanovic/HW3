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

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currPlayer;
    clickedCell.innerHTML = currPlayer;
}

function playerChange() {
    currPlayer = currPlayer === "X" ? "O" : "X";
    displayGameStatus.innerHTML = currPlayerTurn();
}