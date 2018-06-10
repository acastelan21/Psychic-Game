var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
//choices

//wins
var wins = 0;
//losses
var loses = 0;
//guessesLeft
var guessesLeft = 9;
//alreadyguessed
var alreadyGuessed = []
// generate random letter
var randomLetter;
//record key press

function getLetter() {
    randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)]
    console.log(randomLetter)

    something();
};




function something() {
document.onkeyup = function (event) {
    var letterPressed = event.key.toLowerCase();
    //check if random letter equals letter guessed 
    if (letterPressed === randomLetter) {
        wins +=1;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        alreadyGuessed.push(event.key);
        getLetter();

        ;



    }

    if (guessesLeft === 0) {
        loses += 1;
        document.getElementById("losses").innerHTML = "Losses: " + loses;
        console.log(loses);
        document.getElementById("left").innerHTML = guessesLeft;
        guessesLeft = 9;
        getLetter();

    }
    if (loses === 3) {
        alert("game over")
        getLetter();

    } else {

        document.getElementById("left").innerHTML = "Guesses left: " + guessesLeft--;
        alreadyGuessed.push(event.key);
        document.getElementById("guesses").innerHTML = alreadyGuessed;

    }
}
}
getLetter()
//trouble/issues
// Get code random letter to generate
// get guesses to reset correctly and not go negative
//reset to run through it again. I think it need to use a function and then call it when need to reset. Couldn't get it work however. 
//