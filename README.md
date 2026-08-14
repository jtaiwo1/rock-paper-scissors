# Pseudocode for rock, paper, scissor

Write welcome messaged

Set player score = 0
Set computer score = 0
Set how many rounds to play to = 3

While player score < rounds to play AND computer score < Rounds to play
Then playRound()


playRound(){
    set user choice = ""
    set computer choice = ""

    prompt user to enter rock, paper or scissors
    retrieve random input from computer

    set computer choice to one of = ["rock", "paper", "scissors"]

    if player choice == computer choice{
        playRound()
        return null
    }
    else if (enter if statement for each condition){

    }
}

# Pseudocode for tic-tac-toe

Two player game where players **X** and **O** take turns inputting their positions on a board object using numbers 1-9 as keys. The goal of the game is to get three marked positions in a row, either horizontally, vertically or diagonally. 

Players take turns inputting their values in the correct positions. If a player wants to input their "mark" onto a taken position, they will be prompted to re-enter. 

## Example of board logic

``` js
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

```