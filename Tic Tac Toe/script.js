const GameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const reset = () => board = ["", "", "", "", "", "", "", "", ""];

    const placeMark = (index, mark) => {
        if (board[index] === "") {
            board[index] = mark;
            return true;
        }
        return false;
    };

    return { getBoard, placeMark, reset };
})();

const Player = (name, marker) => {
    return { name, marker };
};

const Game = (() => {
  let player1, player2, currentPlayer;
  let isGameOver = false;

  const start = (name1, name2) => {
    player1 = Player(name1, "X");
    player2 = Player(name2, "O");
    currentPlayer = player1;
    isGameOver = false;
    GameBoard.reset();
  };

  const playTurn = (index) => {
    if (isGameOver || !GameBoard.placeMark(index, currentPlayer.marker)) return;

    if (checkWin(currentPlayer.marker)) {
      isGameOver = true;
      DisplayController.showResult(`${currentPlayer.name} wins!`);
    } else if (checkTie()) {
      isGameOver = true;
      DisplayController.showResult("It's a tie!");
    } else {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      DisplayController.updateTurn(currentPlayer.name);
    }
  };

  const checkWin = (mark) => {
    const b = GameBoard.getBoard();
    const winCombos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    return winCombos.some(combo => combo.every(i => b[i] === mark));
  };

  const checkTie = () => GameBoard.getBoard().every(cell => cell !== "");

  return { start, playTurn };
})();

const DisplayController = (() => {
    const cells = document.querySelectorAll(".cell");
    const result = document.getElementById("result");
    const restartBtn = document.getElementById("restart");
    const startBtn = document.getElementById("start");

    cells.forEach((cell, i) => {
        cell.addEventListener("click", () => Game.playTurn(i));
    });

    restartBtn.addEventListener("click", () => {
        const p1 = document.getElementById("player1").value || "Player 1";
        const p2 = document.getElementById("player2").value || "Player 2";
        Game.start(p1, p2);
        render();
        showResult("");
    })

    startBtn.addEventListener("click", () => {
        const p1 = document.getElementById("player1").value || "Player 1";
        const p2 = document.getElementById("player2").value || "Player 2";
        Game.start(p1, p2);
        render();
        showResult("");
    })

    const render = () => {
        const board = GameBoard.getBoard();
        cells.forEach((cell, i) => {
            cell.textContent = board[i];
        })
    }

    const showResult = (message) => {
        result.textContent = message;
        render();
    };

    const updateTurn = (name) => {
        result.textContent = `${name}'s turn`;
        render();
    }

    return { showResult, updateTurn };
})();

