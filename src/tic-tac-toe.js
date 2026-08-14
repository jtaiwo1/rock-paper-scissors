const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
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
}


const user1Score = 0;
const user2Score = 0;
const roundsToWin = 0;

const user1Turn = true;

const userTurn = () => {
    if (endGame() == false){
        if (user1Turn == true){
            let userInput = await ask("Player 1's turn");
            if (validTurn() === true){
                addMove("X", userInput)
                user1Turn = false
            }
        }
        else{
            let userInput = await ask("Player 2's turn");
            if (validTurn() === true){
                addMove("0", userInput)
                user1Turn = true
            }
        }
    }
    
}

const validTurn = (userInput) => {
    if (board[userInput] === null){
        return true
    } else {
        return false
    }
}

const addMove = () => {

}

const endGame = () => {

}