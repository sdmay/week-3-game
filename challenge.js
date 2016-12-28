var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;
var regex = /^[a-zA-Z]+$/;

function newLetter() {
    var guessesLeft = 10;
    var guessesSoFar = 0;
    $(".guessesLeft").html("Guesses Left: " + guessesLeft);
    $(".guessesSoFar").html("Your Guesses So Far: " + guessesSoFar);
    var randomLetter = Math.floor(Math.random() * 26);

    var computerGuess = alphabet[randomLetter];
    window.computerGuess = computerGuess;
    console.log(computerGuess)
}
$(".userGuess").html("Your Guess: ")
$(".wins").html("Wins: " + wins);
$(".losses").html("Losses: " + losses);
$(".guessesLeft").html("Guesses Left: " + guessesLeft);
$(".guessesSoFar").html("Your Guesses So Far: " + guessesSoFar);

$("#guess").on("click", function letterGuess() {
    var guessMade = $("#newGuess").val().trim();
    if (guessMade === "") {
        alert('You did not enter a valid guess.');
        $("#newGuess").val(" ");
        return false;
    }
    console.log(guessMade)
    for (i = 0; i < guessMade.length; i++) {
        console.log(i)
        if (!guessMade.match(regex) || i >= 1) {
            alert('You did not enter a valid guess.');
            $("#newGuess").val(" ");
            return false;
        }
    }
    guessesSoFar++
    $(".guessesSoFar").html("Your Guesses So Far: " + guessesSoFar);
    guessesLeft--
    $(".guessesLeft").html("Guesses Left: " + guessesLeft);
    $(".userGuess").append(guessMade + " - ")
    if (guessMade === computerGuess) {
        wins++
        $(".wins").html("Wins: " + wins);
        alert("YOU WIN! Let's Play again!")
        guessesLeft = 10;
        guessesSoFar = 0;
        $(".userGuess").html('Your Guess: ');
        newLetter();
    }
    else {
        alert("Incorrect, guess again!");

        if (guessesLeft === 0) {
            losses++
            $(".losses").html("Losses: " + losses);
            alert("YOU LOSE! Let's play one more time!");
            guessesLeft = 10;
            guessesSoFar = 0;
            $(".userGuess").html('Your Guess: ');
            newLetter();
        }
    }
    if (wins === 5) {
        alert("YOU ARE THE WINNER!!")
        guessesLeft = 10;
        guessesSoFar = 0;
        wins = 0;
        losses = 0;
        $(".userGuess").html('Your Guess: ');
        newLetter();

    }
    if (losses === 5) {
        alert("YOU ARE THE LOSER!!")
        guessesLeft = 10;
        guessesSoFar = 0;
        wins = 0;
        losses = 0;
        $(".userGuess").html('Your Guess: ');
        newLetter();

    }
    $("#newGuess").val(" ");
});
newLetter();

$('#newGuess').keypress(function (e) {
    if (e.which == 13) {//Enter key pressed
        $('#guess').click();//Trigger search button click event
    }
});