//create variables
//choices
var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
//wins
var wins = 0;
//losses
var loses = 0;
//guessesLeft
var guessesLeft = 9;
//alreadyguessed
var alreadyGuessed = []
// generate random letter
var randomLetter = allLetters[Math.floor(Math.random()*allLetters.length)]
console.log (randomLetter)
//record key press
document.onkeyup = function(event){
    var letterPressed = event.key.toLowerCase();
//check if random letter equals letter guessed 
    if (letterPressed == randomLetter){
        document.getElementById("wins").innerHTML = "Wins: " + (wins + 1);
        alreadyGuessed.push(event.key);


    }

     else {
        document.getElementById("losses").innerHTML = "Losses: " + (loses + 1); 
        document.getElementById("left").innerHTML = "Guessesleft: " + (guessesLeft - 1);
        alreadyGuessed.push(event.key);
        document.getElementById("guesses").innerHTML = alreadyGuessed;
    }}




