
var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)]
console.log(randomLetter)
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

    //record key press

    
    
    
    
    

    document.onkeyup = function (event) {
        var letterPressed = event.key.toLowerCase();
        //check if random letter equals letter guessed 
        if (letterPressed === randomLetter) {
            document.getElementById("wins").innerHTML = "Wins: " + (wins+ 1);
            alreadyGuessed.push(event.key);

            ;



        }

        if ((guessesLeft === 0) && (guessesLeft > 0)) {
            document.getElementById("losses").innerHTML = "Losses: " + (loses + 1);
            document.getElementById("left").innerHTML = guessesLeft;

        }
        if (loses === 3) {
            alert("game over")

        }

        
        else {

            document.getElementById("left").innerHTML = "Guesses left: " + guessesLeft--;
            alreadyGuessed.push(event.key);
            document.getElementById("guesses").innerHTML = alreadyGuessed;

        }
    }
    //trouble/issues
// Get code random letter to generate
// get guesses to reset correctly and not go negative
//reset to run through it again. I think it need to use a function and then call it when need to reset. Couldn't get it work however. 
//


