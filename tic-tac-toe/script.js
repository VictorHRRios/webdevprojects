const gameBoard = (function () {
    const board = [["", "", ""], ["", "", ""], ["", "", ""]];
    const getBoard = () => board;
    const updateBoard = (position, symbol) => {
        if (board[position[0]][position[1]] == "") {
            board[position[0]][position[1]] = symbol;
            display.renderGameboard();
            gameSession.checkWinner();
            gameSession.changeTurn();
            return true;
        } else {
            console.log("Symbol already exists");
            return false;
        }
    }
    const cleanBoard = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = '';
            }
        }
    };
    return {getBoard, updateBoard, cleanBoard};
})();

const displayController = (function () {
    let row = 0;
    let column = 0;
    const moveLeft = () => column > 0 ? column-- : column;
    const moveRight = () => column < 2 ? column++ : column;
    const moveUp = () => row > 0 ? row-- : row;
    const moveDown = () => row < 2 ? row++ : row;
    const getPosition = () => [row, column];
    const resetPosition = () => row = column = 0;
    return {getPosition, moveLeft, moveRight, moveUp, moveDown, resetPosition};
})();

const display = (function () {
    const container = document.querySelector("div.game-content");
    const visualBoard = gameBoard.getBoard();
    const renderGameboard = () => {
        container.textContent = '';
        for (let i = 0; i < visualBoard.length; i++) {
            for (let j = 0; j < visualBoard[0].length; j++) {
                const square = document.createElement("div");
                square.style.backgroundColor = "#fff4e6";
                square.addEventListener("mouseover", () => {
                    square.style.backgroundColor = gameSession.getColor();
                });
                square.addEventListener("mouseleave", () => {
                    square.style.backgroundColor = "#fff4e6";
                });
                square.addEventListener("mousedown", () => {
                    if (!gameSession.getWinner()) {
                        gameBoard.updateBoard([i, j], gameSession.getSymbol());
                    } else {
                        console.log("Winner already decided!");
                    }
                });
                square.setAttribute('row', i);
                square.setAttribute('col', j);
                square.textContent = visualBoard[i][j];
                container.appendChild(square);
            }
        }
    }
    const changeFocus = (position) => {
        const square = document.querySelector(`[data-row='${position[0]}'][data-col='${position[0]}']`);
        square.style.backgroundcolor = "red";
    }
    return {renderGameboard, changeFocus};
})();

function createPlayer (name, symbol, color) {
    return {name, symbol, color};
}

const gameSession = (function () {
    const player1 = createPlayer("Player 1", "X", " 	#9da363");
    const player2 = createPlayer("Player 2", "O", " 	#a6849a");
    let turn = player1;
    let winner = '';
    const changeTurn = () => {
        if (!winner && turn.symbol === player1.symbol) {
            turn = player2;
        } else if (!winner && turn.symbol === player2.symbol) {
            turn = player1;
        } else {
            console.log("Cant change turn! Winner already decided!");
        }
    };
    const checkWinner = () => {
        const board = gameBoard.getBoard();
        // Check if win by diagonal
        if (board[1][1] == turn.symbol) {
            if ((board[0][2] == turn.symbol && board[2][0] == turn.symbol) || (board[0][0] == turn.symbol && board[2][2] == turn.symbol)) {
                winner = turn.name;
                winnerAnnoncement.textContent = `${gameSession.getWinner()} has won the game!`;
                console.log(`${winner} is the winner!`);
                return true;
            }
        }
        // Check for sum in rows and columns
        let RowsinARow;
        let ColumnsinARow;
        for (i = 0; i < 3; i++) { 
            RowsinARow = 0;
            ColumnsinARow = 0;
            for (j = 0; j < 3; j++) {
                if (board[j][i] === turn.symbol) {
                    RowsinARow++;
                }
                if (board[i][j] === turn.symbol) {
                    ColumnsinARow++;
                }
                if (RowsinARow == 3 || ColumnsinARow == 3) {
                    winner = turn.name;
                    winnerAnnoncement.textContent = `${gameSession.getWinner()} has won the game!`;
                    return true;
                } 
            }
        }
        return false;
    }
    const restartGame = () => {
        gameBoard.cleanBoard();
        displayController.resetPosition();
        turn = player1;
        winner = '';
        display.renderGameboard();
    };
    const getWinner = () => winner;
    const getSymbol = () => turn.symbol;
    const getColor = () => turn.color;
    return {getSymbol, changeTurn, checkWinner, getWinner, restartGame, getColor};
})();

const dialog = document.querySelector('dialog');
const acceptButton = document.querySelector("input.accept");
dialog.showModal();
display.renderGameboard();
const winnerAnnoncement = document.querySelector('.winner-announcement');

const restartGame = document.querySelector('.restart-game');
restartGame.addEventListener("click", () =>{
    gameSession.restartGame();
    winnerAnnoncement.textContent = '';
});

// To play on keyboard : experimental
window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return;
    }
    switch(event.key) {
        case "ArrowLeft":
            displayController.moveLeft();
            console.log(displayController.getPosition());
            break;
        case "ArrowRight":
            displayController.moveRight();
            console.log(displayController.getPosition());
            break;
        case "ArrowUp":
            displayController.moveUp();
            console.log(displayController.getPosition());
            break;
        case "ArrowDown":
            displayController.moveDown();
            console.log(displayController.getPosition());
            break;
        case "r":
            console.log("R KEYY!!");
            gameSession.restartGame();
            winnerAnnoncement.textContent = '';
            break;
        case "Enter":
            if (!gameSession.getWinner()) {
                gameBoard.updateBoard(displayController.getPosition(), gameSession.getSymbol());
            } else {
                console.log("Winner already decided!");
            }
            console.table(gameBoard.getBoard());
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);