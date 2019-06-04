// We're going to create a game where I will guess 9 times a letter, and if that
// letter is correct than I win. If It's not correct, I lose.


// Create Global Variables here
var winText = document.getElementById("win-count");
var lossText = document.getElementById("loss-count");
var guessCount = document.getElementById("guess-count");
var guessList = document.getElementById("guess-list");
var computerOptions = ['a', 'e', 'i', 'o', 'u'];
var resetButton = document.getElementById("reset-button");
// 
var wins = 0;
var losses = 0;
var guesses = 9;

function computerGuesser() {
    var computerNumber = computerOptions[Math.floor(Math.random() * 5)];
    return computerNumber;
}

function displayScores() {
    winText.textContent = wins;
    lossText.textContent = losses;
    guessCount.textContent = guesses;
}


computerGuess = computerGuesser();
console.log(computerGuess);




//This is the code that will run the game once the user presses a key
// document.addEventListener('keydown', logKey);

function logKey() {
    var x = event.key;
    guessList.textContent = x;
    console.log(x);
    if (x === computerGuess) {
        wins++;
    }

    else {
        guesses--;
    }

    if (guesses === 0) {
        losses++;
    }
    
    document.getElementById("win-count").textContent = wins;
    document.getElementById("loss-count").textContent = losses;
    document.getElementById("guess-count").textContent = guesses;
}
// Game will start on key press
document.onkeyup = logKey;

//Add event listener to our reset button when user clicks it
resetButton.addEventListener("click", displayScores);

// Original Score setting as file loads
displayScores();


// function userGuess() {
//     var key = document.onkeyup;
//     console.log(key);
// }

// document.onkeyup = userGuess(); 



// document.onkeydown = gameStart();