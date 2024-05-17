let PointsX = 0;
let PointsO = 0;
let p = 1;
let buttonX = ["1", "2","3", "4", "5", "6", "7", "8", "9" ];
let buttonOpen = true;
let tie=0;

onEvent("buttonPlay", "click", function( ) {
  setProperty("buttonPlay", "background-color", "#DE9696");
  showElement("imageLoading1");
  setTimeout(function() {
    hideElement("imageLoading1");
    setScreen("screenTicTacToe");
    setProperty("buttonPlay", "background-color", "#A51928");
    setProperty("buttonPlayer1", "border-color", "#A51928");
  }, 1000);
});

setProperty("buttonX1", "image", "icon://fa-times");
onEvent("buttonX1", "click", function( ) {
  buttonOpen=buttonX[1];
  if (p == 1) {
    setProperty("buttonX1", "icon-color", "#A51928");
    buttonX[1] = "X";
  } else {
    setProperty("buttonX1", "icon-color", "#A51928");
    setProperty("buttonX1", "image", "icon://fa-circle-o");
    buttonX[1] = "O";
  }
  
  switchplayers();
  }); //end of open
  
  
onEvent("buttonX2", "click", function( ) {
  buttonOpen=buttonX[2];
  if (buttonOpen!="O"  && buttonOpen!="X" ) {
  if (p == 1) {
    setProperty("buttonX2", "icon-color", "#A51928");
    setProperty("buttonX2", "image", "icon://fa-times");
    buttonX[2] = "X";
  } else {
    setProperty("buttonX2", "icon-color", "#A51928");
    setProperty("buttonX2", "image", "icon://fa-circle-o");
    buttonX[2] = "O";
  }
  
  switchplayers();
  } //end of open
});

onEvent("buttonX3", "click", function( ) {
  buttonOpen=buttonX[3];
  if (buttonOpen!="O"  && buttonOpen!="X" ) {
  if (p == 1) {
    setProperty("buttonX3", "icon-color", "#A51928");
    setProperty("buttonX3", "image", "icon://fa-times");
    buttonX[3] = "X";
  } else {
    setProperty("buttonX3", "icon-color", "#A51928");
    setProperty("buttonX3", "image", "icon://fa-circle-o");
    buttonX[3] = "O";
  }
  
  switchplayers();
  } //end of open
});

onEvent("buttonX4", "click", function( ) {
  buttonOpen=buttonX[4];
  if (buttonOpen!="O"  && buttonOpen!="X" ) {
  if (p == 1) {
    setProperty("buttonX4", "icon-color", "#A51928");
    setProperty("buttonX4", "image", "icon://fa-times");
    buttonX[4] = "X";
  } else {
    setProperty("buttonX4", "icon-color", "#A51928");
    setProperty("buttonX4", "image", "icon://fa-circle-o");
    buttonX[4] = "O";
  }
    switchplayers();
  } //end of open
});
onEvent("buttonX5", "click", function( ) {
  buttonOpen=buttonX[5];
  if (buttonOpen!="O"  && buttonOpen!="X" ) {
  if (p == 1) {
    setProperty("buttonX5", "icon-color", "#A51928");
    setProperty("buttonX5", "image", "icon://fa-times");
    buttonX[5] = "X";
  } else {
    setProperty("buttonX5", "icon-color", "#A51928");
    setProperty("buttonX5", "image", "icon://fa-circle-o");
    buttonX[5] = "O";
  }
    switchplayers();
  } //end of open
});
onEvent("buttonX6", "click", function( ) {
  buttonOpen=buttonX[6];
  if (buttonOpen!="O"  && buttonOpen!="X" ) {
  if (p == 1) {
    setProperty("buttonX6", "icon-color", "#A51928");
    setProperty("buttonX6", "image", "icon://fa-times");
    buttonX[6] = "X";
  } else {
    setProperty("buttonX6", "icon-color", "#A51928");
    setProperty("buttonX6", "image", "icon://fa-circle-o");
    buttonX[6] = "O";
  }
    switchplayers();
  } //end of open
});
onEvent("buttonX7", "click", function( ) {
  buttonOpen=buttonX[7];
  if (buttonOpen!="O"  && buttonOpen!="X" ) {
  if (p == 1) {
    setProperty("buttonX7", "icon-color", "#A51928");
    setProperty("buttonX7", "image", "icon://fa-times");
    buttonX[7] = "X";
  } else {
    setProperty("buttonX7", "icon-color", "#A51928");
    setProperty("buttonX7", "image", "icon://fa-circle-o");
    buttonX[7] = "O";
  }
    switchplayers();
  } //end of open
});
onEvent("buttonX8", "click", function( ) {
  buttonOpen=buttonX[8];
  if (buttonOpen!="O"  && buttonOpen!="X" ) {
  if (p == 1) {
    setProperty("buttonX8", "icon-color", "#A51928");
    setProperty("buttonX8", "image", "icon://fa-times");
    buttonX[8] = "X";
  } else {
    setProperty("buttonX8", "icon-color", "#A51928");
    setProperty("buttonX8", "image", "icon://fa-circle-o");
    buttonX[8] = "O";
  }
  switchplayers();
  } //end of open
});
onEvent("buttonX9", "click", function( ) {
  buttonOpen=buttonX[9];
  if (buttonOpen!="O"  && buttonOpen!="X" ) {
  if (p == 1) {
    setProperty("buttonX9", "icon-color", "#A51928");
    setProperty("buttonX9", "image", "icon://fa-times");
    buttonX[9] = "X";
  } else {
    setProperty("buttonX9", "icon-color", "#A51928");
    setProperty("buttonX9", "image", "icon://fa-circle-o");
    buttonX[9] = "O";
  }
  
  switchplayers();
  } //end of open
});




function switchplayers() {
  checkWin();
  if (p==1) {
    p = 2;
    setProperty("buttonPlayer2", "border-color", "#A51928");
    setProperty("buttonPlayer1", "border-color", "#DE9696");
  } else {
    p = 1;
    setProperty("buttonPlayer1", "border-color", "#A51928");
    setProperty("buttonPlayer2", "border-color", "#DE9696");
  }
}

function checkWin(){
  tie = tie + 1;
  
  if(buttonX[1]==buttonX[2]&&buttonX[2]==buttonX[3]){
    win(buttonX[1]);
  } else if (buttonX[4]==buttonX[5]&&buttonX[5]==buttonX[6]) {
    win(buttonX[4]); 
  } else if (buttonX[7]==buttonX[8]&&buttonX[8]==buttonX[9]) {
     win(buttonX[7]);
  } else if (buttonX[1]==buttonX[4]&&buttonX[4]==buttonX[7]) {
     win(buttonX[1]); 
  } else if (buttonX[2]==buttonX[5]&&buttonX[5]==buttonX[8]) {
    win(buttonX[2]); 
  } else if (buttonX[3]==buttonX[6]&&buttonX[6]==buttonX[9]) {
    win(buttonX[3]); 
  } else if (buttonX[1]==buttonX[5]&&buttonX[5]==buttonX[9]) {
    win(buttonX[1]); 
  } else if (buttonX[3]==buttonX[5]&&buttonX[5]==buttonX[7]) {
     win(buttonX[3]); 
  } else if ((tie==9)) {
    setProperty("labelWinner", "hidden", false);
    PointsX++;
    PointsO++;
    setText("labelWinner", "Tie! You suck!");
    setProperty("labelWinner", "hidden", false);
    setText("labelPointsPlayer1", PointsX);
    setText("labelPointsPlayer2", PointsO);
    setProperty("buttonNewGame", "hidden", false);
  }
}

function win(winner){
  
  setProperty("labelWinner", "hidden", false);
  if(winner=="X"){
    PointsX++;
  }else{
    PointsO++;
  }
  if(winner=="X"){
    setText("labelWinner", "Player 1 is the winner!");
    setProperty("labelWinner", "hidden", false);
    setText("labelPointsPlayer1", PointsX);
    setProperty("buttonNewGame", "hidden", false);
  }else{
    setText("labelWinner", "Player 2 is the winner!");
    setProperty("labelWinner", "hidden", false);
    setText("labelPointsPlayer2", PointsO);
    setProperty("buttonNewGame", "hidden", false);
  }
}
onEvent("buttonNewGame", "click", function( ) {
  setProperty("labelWinner", "hidden", true);
  setProperty("buttonX1", "icon-color", "#FFF5F5");
  setProperty("buttonX2", "icon-color", "#FFF5F5");
  setProperty("buttonX3", "icon-color", "#FFF5F5");
  setProperty("buttonX4", "icon-color", "#FFF5F5");
  setProperty("buttonX5", "icon-color", "#FFF5F5");
  setProperty("buttonX6", "icon-color", "#FFF5F5");
  setProperty("buttonX7", "icon-color", "#FFF5F5");
  setProperty("buttonX8", "icon-color", "#FFF5F5");
  setProperty("buttonX9", "icon-color", "#FFF5F5");
  setProperty("buttonNewGame", "hidden", true);
  buttonX = ["1", "2","3", "4", "5", "6", "7", "8", "9" ];
  p = 1;
  tie=0;

  buttonOpen = true;
});
