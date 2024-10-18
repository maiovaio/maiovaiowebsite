//Play Button
onEvent("button1", "click", function(){
  setScreen("TTTGameScreen");
});
//Main Game 
//Declarations
var p1Score = 0;
var p2Score = 0;
var turn = 0;
//main
resetBoard();
//reset Score
function resetScore() {
  p1Score = 0;
  p2Score = 0;
  setText("score1", "O: " + p1Score);
  setText("score2", "X: " + p2Score);
}
function resetBoard() {
  setText("b1", "");
  setText("b2", "");
  setText("b3", "");
  setText("b4", "");
  setText("b5", "");
  setText("b6", "");
  setText("b7", "");
  setText("b8", "");
  setText("b9", "");
  turn = 0;
}
//is Played 
function isPlayed(text){
  if(text==""){
    return true;
  }
  else{
    return false;
  }
}
function threeInARow(){
  var result = false;
  if(getText("b1")==getText("b2")&&getText("b2")==getText("b3")&&getText("b1")!==""){
    result = true;
  }
  else if(getText("b4")==getText("b5")&&getText("b5")==getText("b6")&&getText("b4")!==""){
    result = true;
  }
  else if(getText("b7")==getText("b8")&&getText("b8")==getText("b9")&&getText("b7")!==""){
    result = true;
  }
  else if(getText("b1")==getText("b4")&&getText("b4")==getText("b7")&&getText("b1")!==""){
    result = true;
  }
  else if(getText("b2")==getText("b5")&&getText("b5")==getText("b8")&&getText("b2")!==""){
    result = true;
  }
  else if(getText("b3")==getText("b6")&&getText("b6")==getText("b9")&&getText("b3")!==""){
    result = true;
  }
  else if(getText("b1")==getText("b5")&&getText("b5")==getText("b9")&&getText("b1")!==""){
    result = true;
  }
  else if(getText("b3")==getText("b5")&&getText("b5")==getText("b7")&&getText("b3")!==""){
    result = true;
  }
  return result;
}
// Win Function
function win() {
  if (p1Score == 3) {
    setScreen("TTTwinner");
    setText("label1", "X");
  } else if ((p2Score == 3)) {
    setScreen("TTTWinner");
    setText("label1", "O");
  }
}
//Game
function game() {
  if (threeInARow()) {
    if (turn % 2 == 1) {
      p1Score = p1Score + 1;
      setText("Oscore", p1Score);
      setText("label1", "O: " + p1Score);
      resetBoard();
    } else {
      p2Score = p2Score + 1;
      setText("Xscore", "X: " + p2Score);
      setText("roundWinner", "Player 2 Wins");
      resetBoard();
    }
  } else if ((turn == 9)) {
    setText("roundWinner", "Draw");
  }
  win();
}
//Button 1
onEvent("b1", "click", function( ) {
  if (isPlayed(getText("b1")) && !threeInARow()) {
    if (turn % 2 == 1) {
      setText("b1", "X");
      turn = turn + 1;
    } else {
      setText("b1", "O");
      turn = turn + 1;
    }
    game();
    if (turn % 2 == 1) {
      setText("whosturnisit", "X's Turn");
    } else {
      setText("whosturnisit", "O's Turn");
    }
  }
});
//Button 2
onEvent("b2", "click", function( ) {
  if (isPlayed(getText("b2")) && !threeInARow()) {
    if (turn % 2 == 1) {
      setText("b2", "X");
      turn = turn + 1;
    } else {
      setText("b2", "O");
      turn = turn + 1;
    }
    game();
    if (turn % 2 == 1) {
      setText("whosturnisit", "X's Turn");
    } else {
      setText("whosturnisit", "O's Turn");
    }
  }
});
//Button 3
onEvent("b3", "click", function( ) {
  if (isPlayed(getText("b3")) && !threeInARow()) {
    if (turn % 2 == 1) {
      setText("b3", "X");
      turn = turn + 1;
    } else {
      setText("b3", "O");
      turn = turn + 1;
    }
    game();
    if (turn % 2 == 1) {
      setText("whosturnisit", "X's Turn");
    } else {
      setText("whosturnisit", "O's Turn");
    }
  }
});
//Button 4
onEvent("b4", "click", function( ) {
  if (isPlayed(getText("b4")) && !threeInARow()) {
    if (turn % 2 == 1) {
      setText("b4", "X");
      turn = turn + 1;
    } else {
      setText("b4", "O");
      turn = turn + 1;
    }
    game();
    if (turn % 2 == 1) {
      setText("whosturnisit", "X's Turn");
    } else {
      setText("whosturnisit", "O's Turn");
    }
  }
});
//Button 5
onEvent("b5", "click", function( ) {
  if (isPlayed(getText("b5")) && !threeInARow()) {
    if (turn % 2 == 1) {
      setText("b5", "X");
      turn = turn + 1;
    } else {
      setText("b5", "O");
      turn = turn + 1;
    }
    game();
    if (turn % 2 == 1) {
      setText("whosturnisit", "X's Turn");
    } else {
      setText("whosturnisit", "O's Turn");
    }
  }
});
//Button 6
onEvent("b6", "click", function( ) {
  if (isPlayed(getText("b6")) && !threeInARow()) {
    if (turn % 2 == 1) {
      setText("b6", "X");
      turn = turn + 1;
    } else {
      setText("b6", "O");
      turn = turn + 1;
    }
    game();
    if (turn % 2 == 1) {
      setText("whosturnisit", "X's Turn");
    } else {
      setText("whosturnisit", "O's Turn");
    }
  }
});
//Button 7
onEvent("b7", "click", function( ) {
  if (isPlayed(getText("b7")) && !threeInARow()) {
    if (turn % 2 == 1) {
      setText("b7", "X");
      turn = turn + 1;
    } else {
      setText("b7", "O");
      turn = turn + 1;
    }
    game();
    if (turn % 2 == 1) {
      setText("whosturnisit", "X's Turn");
    } else {
      setText("whosturnisit", "O's Turn");
    }
  }
});
//Button 8
onEvent("b8", "click", function( ) {
  if (isPlayed(getText("b8")) && !threeInARow()) {
    if (turn % 2 == 1) {
      setText("b8", "X");
      turn = turn + 1;
    } else {
      setText("b8", "O");
      turn = turn + 1;
    }
    game();
    if (turn % 2 == 1) {
      setText("whosturnisit", "X's Turn");
    } else {
      setText("whosturnisit", "O's Turn");
    }
  }
});
//Button 9
onEvent("b9", "click", function( ) {
  if (isPlayed(getText("b9")) && !threeInARow()) {
    if (turn % 2 == 1) {
      setText("b9", "X");
      turn = turn + 1;
    } else {
      setText("b9", "O");
      turn = turn + 1;
    }
    game();
    if (turn % 2 == 1) {
      setText("whosturnisit", "X's Turn");
    } else {
      setText("whosturnisit", "O's Turn");
    }
  }
});
onEvent("resetS", "click", function( ) {
  resetBoard();
  resetScore();
  if (turn % 2 == 1) {
    setText("whosturnisit", "X's Turn");
  } else {
    setText("whosturnisit", "O's Turn");
  }
});
onEvent("resetB", "click", function( ) {
  resetBoard();
  if (turn % 2 == 1) {
    setText("whosturnisit", "X's Turn");
  } else {
    setText("whosturnisit", "O's Turn");
  }
});
onEvent("pa", "click", function( ) {
  setScreen("TTTGameScreen");
  reset();
  if (turn % 2 == 1) {
    setText("whosturnisit", "X's Turn");
  } else {
    setText("whosturnisit", "O's Turn");
  }
});
