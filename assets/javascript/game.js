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

//This generates a random number for our computer
function computerGuesser() {
    var computerNumber = computerOptions[Math.floor(Math.random() * 5)];
    return computerNumber;
}

//This sets the values for Wins, losses and guesses remaining when browser loads
function displayScores() {
    winText.textContent = wins;
    lossText.textContent = losses;
    guessCount.textContent = guesses;
}

//This sets the value of the computer Guess to be used in our game function aka gameStart()
computerGuess = computerGuesser();
console.log(computerGuess);

//This alerts you of a win and resets the guesses and text content of 'your guesses'
function endGameWin() {
    alert("You win!");
    guesses = 9;
    guessList.textContent = "";
}

//This alerts you of a loss and resets the guesses and text content of 'your losses'
function endGameLoss() {
    alert("You Lose...");
    guesses = 9;
    guessList.textContent = "";
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