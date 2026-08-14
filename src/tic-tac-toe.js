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

let board = {
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

let board1 = {};

let user1Pos = [];
let user2Pos = [];

let user1Score = 0;
let user2Score = 0;
const roundsToWin = 3;

let user1Turn = true;

async function userTurn() {
  if (user1Score == roundsToWin) {
    console.log("Winner winner, chicken dinner! User 1 WINS");
  } else if (user2Score == roundsToWin) {
    console.log("Winner winner, chicken dinner! User 2 WINS");
  } else if (endGame() == false) {
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
      console.log("Round over! User 1 wins");
      user1Score += 1;
      user1Pos = [];
      user2Pos = [];
      board = { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "" };
      userTurn();
    } else {
      console.log("Round over! User 2 wins");
      user2Score += 1;
      user1Pos = [];
      user2Pos = [];
      board = { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "" };
      userTurn();
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
