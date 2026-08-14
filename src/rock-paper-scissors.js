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

const playerScore = 0;
const computerScore = 0;
const roundsToWin = 3;



async function playRound () {
  let choices = ["rock", "paper", "scissors"];
  let userInput = await ask("Do you choose rock, paper or scissors?", "rock");

  if (
    userInput === "paper" ||
    userInput === "rock" ||
    userInput === "scissors"
  ) {
    console.log(`You chose ${userInput}`);
  } else {
    userInput = prompt("Invalid option. Try again.");
  }


  let computerInput = choices[Math.floor(Math.random() * 3)];
  console.log(`The computer chose ${computerInput}`);

  const winner = declareWinner(userInput, computerInput);
  return winner;

};

function declareWinner(userInput, computerInput) {
  if (userInput === 'rock' && computerInput === 'paper') {
    console.log('You lose! Paper beats rock');
  } else if (userInput === 'paper' && computerInput === 'rock') {
    console.log('You win! paper beats rock');
  } else if (userInput === 'scissors' && computerInput === 'paper') {
    console.log('You win! Scissors beats Paper');
  } else if (userInput === 'paper' && computerInput === 'scissors') {
    console.log('You lose! Scissors beats paper');
  } else if (userInput === 'rock' && computerInput === 'scissors') {
    console.log('You win! Rock beats scissors');
  } else if (userInput === 'scissors' && computerInput === 'rock'){
    console.log('You lose! Rock beats scissors');
  } else {
    console.log('You tie!');
  }
}

if (playerScore < roundsToWin && computerScore < roundsToWin) {
    playRound()
}