const gameBoard = (function () {
    const board = [["", "", ""], ["", "", ""], ["", "", ""]];
    const getBoard = () => board;
    const updateBoard = (position, symbol) => {
        if (board[position[0]][position[1]] == "") {
            board[position[0]][position[1]] = symbol;
            return true;
        } else {
            console.log("Symbol already exists");
            return false;
        }
    }
    return {board, getBoard, updateBoard};
})();

const displayController = (function () {
    let row = 0;
    let column = 0;
    const moveLeft = () => column > 0 ? column-- : column;
    const moveRight = () => column < 2 ? column++ : column;
    const moveUp = () => row > 0 ? row-- : row;
    const moveDown = () => row < 2 ? row++ : row;
    const getPosition = () => [row, column];
    return {getPosition, moveLeft, moveRight, moveUp, moveDown};
})();

function createPlayer (name, symbol) {
    return {name, symbol};
}

const gameSession = (function () {
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");
    let turn = player1;
    let winner = '';
    const changeTurn = () => {
        if (!winner && turn.symbol === player1.symbol) {
            turn = player2;
        } else if (!winner && turn.symbol === player2.symbol) {
            turn = player1;
        } else {
            console.log("Cant change turn! Winner already decided!");
            turn = '';
        }
    };
    const checkWinner = () => {
        const board = gameBoard.getBoard();
        // Check if win by diagonal
        if (board[1][1] == turn.symbol) {
            if ((board[0][2] == turn.symbol && board[2][0] == turn.symbol) || (board[0][0] == turn.symbol && board[2][2] == turn.symbol)) {
                console.table(board);
                console.log("We got a winner!");
                winner = turn.name;
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
                    console.table(board);
                    console.log("We got a winner!");
                    winner = turn.name;
                    return true;
                } 
            }
        }
        return false;
    }
    const getSymbol = () => turn.symbol;
    return {getSymbol, changeTurn, checkWinner};
})();



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
        case "Enter":
            gameBoard.updateBoard(displayController.getPosition(), gameSession.getSymbol());
            gameSession.checkWinner();
            gameSession.changeTurn();
            console.table(gameBoard.getBoard());
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);