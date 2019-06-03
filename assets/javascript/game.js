// We're going to create a game where I will guess 9 times a letter, and if that
// letter is correct than I win. If It's not correct, I lose.


// Create Global Variables here
var winText = document.getElementById("win-count");
var lossText = document.getElementById("loss-count");
var guessCount = document.getElementById("guess-count");
var guessList = document.getElementById("guess-list");

// 
var wins = 0;
var losses = 0;
var guesses = 9;


// Start to create Code here: 
// First when a key is pressed, the game begins


function gameStart(e) {
    var computerChoice = computerGuesser();
    console.log(computerChoice);
}

document.onkeydown = gameStart();
// The computer will automatically put a number in it's reserve

// Then the user can press 8 more times to guess the number if that number === computer number then you win

// Then we're going to make it so that the integers show the increase with each guess

function displayScores() {
    winText.textContent = wins;
    lossText.textContent = losses;
    guessCount.textContent = guesses;
}

function computerGuesser() {
    var computerOptions = ['a','e','i','o','u'];
    var computerNumber = computerOptions[Math.floor(Math.random() * 5)];
    return computerNumber;
}

displayScores();