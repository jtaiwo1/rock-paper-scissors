const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
};

const board = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
};

const board1 = {};

const user1Pos = [];
const user2Pos = [];

const user1Score = 0;
const user2Score = 0;
const roundsToWin = 0;

let user1Turn = true;

async function userTurn() {
  if (endGame() == false) {
    if (user1Turn == true) {
      let userInput = await ask("Player 1's turn ");
      if (validTurn(userInput) === true) {
        addMove("X", userInput);
        user1Turn = false;
        userTurn();
      } else {
        console.log("Not valid try again! ");
        userTurn();
      }
    } else {
      let userInput = await ask("Player 2's turn ");
      if (validTurn(userInput) === true) {
        addMove("0", userInput);
        user1Turn = true;
        userTurn();
      } else {
        console.log("Not valid try again");
        userTurn();
      }
    }
  } else {
    if (user1Turn == false) {
      console.log("Game over! User 1 wins");
    } else {
      console.log("Game over! User 2 wins");
    }
  }
}

const validTurn = (userInput) => {
  if (board[userInput] === "") {
    return true;
  } else {
    return false;
  }
};

const addMove = (icon, pos) => {
  board[pos] = icon;
  if (icon === "X") {
    user1Pos.push(Number(pos));
  } else {
    user2Pos.push(Number(pos));
  }
};

const endGame = () => {
  for (let i = 0; i < winCombinations.length; i++) {
    const combo = winCombinations[i];

    if (
      user1Pos.includes(combo[0]) &&
      user1Pos.includes(combo[1]) &&
      user1Pos.includes(combo[2]) ||
      user2Pos.includes(combo[0]) &&
      user2Pos.includes(combo[1]) &&
      user2Pos.includes(combo[2])
    ) {
      return true;
    }  
  }
  return false;
};

const winCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

userTurn();
