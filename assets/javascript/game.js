// We're going to create a game where I will guess 9 times a letter, and if that
// letter is correct than I win. If It's not correct, I lose.

// Create Global Variables here
var winText = document.getElementById("win-count");
var lossText = document.getElementById("loss-count");
var guessCount = document.getElementById("guess-count");
var guessList = document.getElementById("guess-list");
var computerOptions = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var resetButton = document.getElementById("reset-button");
// These are our tally variables
var wins = 0;
var losses = 0;
var guesses = 9;


//This defines the computerGuess variable our functions will be referencing.
var computerGuess = computerGuesser();
console.log(computerGuess);

//This is the actual function which determines our Computer's guess
function computerGuesser() {
    computerGuess = computerOptions[Math.floor(Math.random() * 26)];
    return computerGuess;
} 


//This event listner links our reset button to the resetScores functoin, which resets the variables to their original state and regenerates a computer guess
resetButton.addEventListener("click", resetScores);

//This sets the values for Wins, losses and guesses remaining when browser loads
function displayScores() {
    wins = 0;
    losses = 0;
    guesses = 9;
    winText.textContent = wins;
    lossText.textContent = losses;
    guessCount.textContent = guesses;
}

//This is the resetScores function mentioned above
function resetScores(){
    wins = 0;
    losses = 0;
    guesses = 9;
    winText.textContent = wins;
    lossText.textContent = losses;
    guessCount.textContent = guesses;
    guessList.textContent = "";
    computerGuesser();
    console.log(computerGuess);
}


//This alerts you of a win and resets the guesses and text content of 'your guesses'
function endGameWin() {
    alert("You win!");
    guesses = 9;
    guessList.textContent = "";
    computerGuesser(); //this resets the computer's guess
    console.log(computerGuess);
}

//This alerts you of a loss and resets the guesses and text content of 'your losses'
function endGameLoss() {
    alert("You Lose...");
    guesses = 9;
    guessList.textContent = "";
    computerGuesser(); //this resets the computer's guess
    console.log(computerGuess);
}

//This is the code that will run the game once the user presses a key
//It will set the variable X to the key pressed

function gameStart() {
    var x = event.key; //Sets x to key you pressed 
    guessList.textContent += (x + ", "); //Shows you key you pressed in 'your guesses' line
    console.log(x);
    if (x === computerGuess) { //If your guess = computer guess you get a win and runs endGameWin function
        wins++;
        endGameWin();
    }

    else { //if Your guess is wrong it will dock you 1 guess out of 9
        guesses--;
    }

    if (guesses === 0) { //if Your guesses run out before winning, you get a loss and runs endGameLoss function
        losses++;
        endGameLoss();
    }

    //These will document what the new win, loss and guess count are based on the results from our if else statement
    document.getElementById("win-count").textContent = wins; 
    document.getElementById("loss-count").textContent = losses;
    document.getElementById("guess-count").textContent = guesses;
}
// Game will start on key press
document.onkeyup = gameStart;

// Original Score setting as file loads
console.log(displayScores());
