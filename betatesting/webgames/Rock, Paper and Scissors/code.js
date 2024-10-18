var ROCK = 0, PAPER = 1, SCISSORS = 2;
var choiceToText = ["Rock", 
                    "Paper", 
                    "Scissors"];
var DRAW = 0, PLAYER = 1, COMPUTER = 2;
// who will win? whoWins[player][computer]
// Computer plays   Rock      Paper     Scissors    Player plays
var whoWins = [[    DRAW,     COMPUTER, PLAYER],  // Rock
              [     PLAYER,   DRAW,     COMPUTER],// Paper
              [     COMPUTER, PLAYER,   DRAW]];   // Scissors
var winnerToString = ["Draw!", "You win!", "Computer wins!"];
onEvent("rock", "click", function( ) {
  updateScreen(ROCK);
  setScreen("RPSResults");
});
onEvent("paper", "click", function( ) {
  updateScreen(PAPER);
  setScreen("RPSResults");
});
onEvent("scissors", "click", function( ) {
  updateScreen(SCISSORS);
  setScreen("RPSResults");
});
onEvent("play", "click", function( ) {
  setScreen("RPSGameScreen");
});
onEvent("playagain", "click", function( ) {
  setScreen("RPSGameScreen");
});

function updateScreen(playerChoice){
  var computerChoice = randomNumber(ROCK,SCISSORS);
  var winner = whoWins[playerChoice][computerChoice];
  
  setProperty("winner", "text", winnerToString[winner]);
  setProperty("YC", "text", choiceToText[playerChoice]);
  setProperty("CC", "text", choiceToText[computerChoice]);
}
