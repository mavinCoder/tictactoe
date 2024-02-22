let scoreBoard = {
  ofO: 0,
  ofX: 0,
};
let turnO = true;
const winningPatterns = [
  [0, 1, 2],
  [0, 3, 3],
  [0, 4, 8],
  [1, 4, 7],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

let gameButton = document.querySelectorAll(".gameButton");

gameButton.forEach((gameButton) => {
  gameButton.addEventListener("click", () => {
    if (turnO) {
      gameButton.innerText = "O";
      turnO = false;
    } else {
      gameButton.innerText = "X";
      turnO = true;
    }
    gameButton.disabled = true;
    checkWinner();
  });
});

let result = undefined;
const checkWinner = () => {
  for (let winCheck of winningPatterns) {
    let pos1Val = gameButton[winCheck[0]].innerText;
    let pos2Val = gameButton[winCheck[1]].innerText;
    let pos3Val = gameButton[winCheck[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        result = pos1Val;
        winner.innerText = result + " Wala";
        disableGameButtons();
        document;
        let newSession = document.querySelector(".newSessionButton");
        newSession.classList.remove("hidden");
      }
    }
  }
};

let disableGameButtons = () => {
  for (let allButtons of gameButton) {
    allButtons.disabled = true;
  }
};

let enableGameButtons = () => {
  for (let allButtons of gameButton) {
    allButtons.disabled = false;
  }
};
updateScore = () => {
  if (result == "O") {
    scoreBoard.ofO++;
    scoreO.innerText = `${scoreBoard.ofO}`;
  } else if (result == "X") {
    scoreBoard.ofX++;
    scoreKata.innerText = `${scoreBoard.ofX}`;
  }
  result = undefined;
};

newSession = () => {
  gameButton.forEach((gameButton) => {
    gameButton.innerText = "";
    enableGameButtons();
    turnO = true;
  });
};
resetGame = () => {
  gameButton.forEach((gameButton) => {
    scoreBoard.ofO = "";
    scoreBoard.ofX = "";
    scoreO.innerText = "0";
    scoreKata.innerText = "0";
    winner.innerText = "oH! I know Resetter was Loosing!";

    gameButton.innerText = "";
    enableGameButtons();
    turnO = true;
  });
};
