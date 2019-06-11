//This is a game of Hangman. The user will guess the letters based off of a randomly generated guess from the computer. 
//If the user guesses correctly they will not be subtracted a guess. If the user guesses all the letters before the remaining guesses runs out, they win. If not, they lose.

// Create Global Variables here
var guessCount = document.getElementById("guess-count");
var guessList = document.getElementById("guess-list");
var computerOptions = ["Frodo", "Bilbo", "Gandalf", "Gimli", "Aragon"];
var resetButton = document.getElementById("reset-button");
// These are our tally variables
var guesses = 15;
var computerWordDisplay = document.getElementById("random-word"); //This is temporary for testing purposes
var computerPlaceholder = document.getElementById("random-word-placeholder"); //This is where we will show the number of "_";
var output = [];

//This defines the computerGuess variable our functions will be referencing.
var computerGuess = computerGuesser();
console.log(computerGuess);

//This is the actual function which determines our Computer's guess
function computerGuesser() {
    computerGuess = computerOptions[Math.floor(Math.random() * 5)];
    // computerWordDisplay.textContent = computerGuess;

    output = computerGuess.split('');
    console.log(output);

    for (i = 0; i < output.length; i++) {
        computerWordDisplay.textContent += "_ "
    }
    
    

    return computerGuess;
} 
console.log(computerGuess.length);



//This event listner links our reset button to the resetScores functoin, which resets the variables to their original state and regenerates a computer guess
resetButton.addEventListener("click", resetScores);

//This sets the values for Wins, losses and guesses remaining when browser loads
function displayScores() {
    guesses = 15;
    guessCount.textContent = guesses;
}

//This is the resetScores function mentioned above
function resetScores(){
    guesses = 15;
    guessCount.textContent = guesses;
    guessList.textContent = "";
    computerGuesser();
    console.log(computerGuess);
}


//This alerts you of a win and resets the guesses and text content of 'your guesses'
function endGameWin() {
    alert("You win!");
    guesses = 15;
    guessList.textContent = "";
    computerGuesser(); //this resets the computer's guess
    console.log(computerGuess);
}

//This alerts you of a loss and resets the guesses and text content of 'your losses'
function endGameLoss() {
    alert("You Lose...");
    guesses = 15;
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
    if (output.indexOf((x)) > -1 ) {
        //If your guess = a letter in your computerGuess it shows up in the line
        alert("You've guessed a right letter!");
    }
    else { //if Your guess is wrong it will dock you 1 guess out of 9
        guesses--;
    }

    if (guesses === 0) { //if Your guesses run out before winning, you get a loss and runs endGameLoss function
        endGameLoss();
    }

    //These will document what the new win, loss and guess count are based on the results from our if else statement
    document.getElementById("guess-count").textContent = guesses;
}
// Game will start on key press
document.onkeyup = gameStart;

