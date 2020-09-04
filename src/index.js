import GameOfLife from './conway.js'


var stop = false;

var fpsInterval, now, then, elapsed;

startAnimating(5);

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
}

const theGame = new GameOfLife
// theGame.gameBoard[2][2] = true
// theGame.gameBoard[2][1] = true
// theGame.gameBoard[2][0] = true
// theGame.gameBoard[1][2] = true
// theGame.gameBoard[0][1] = true



theGame.gameBoard[2][3] = true
theGame.gameBoard[3][3] = true
theGame.gameBoard[4][3] = true

theGame.gameBoard[7][2] = true
theGame.gameBoard[7][3] = true
theGame.gameBoard[7][4] = true

theGame.gameBoard[10][3] = true
theGame.gameBoard[11][3] = true
theGame.gameBoard[12][3] = true

theGame.gameBoard[15][2] = true
theGame.gameBoard[15][3] = true
theGame.gameBoard[15][4] = true

theGame.gameBoard[18][3] = true
theGame.gameBoard[19][3] = true
theGame.gameBoard[20][3] = true

// const theCanvas = document.getElementById('canvas')
const context = canvas.getContext("2d");

context.fillStyle = "#FFFFFF";
context.fillRect(0,0,400,400)


function update() {
  theGame.nextRound()
  if(theGame.isDead()) {stop = true}
}

function draw() {
  context.fillStyle = "#FFFFFF";
  context.fillRect(0,0,500,500)
  context.fillStyle = "#000000";

  for (var i = 0; i < theGame.gameBoard.length; i++) {
    for (var j = 0; j < theGame.gameBoard[i].length; j++) {
      if(theGame.gameBoard[i][j]) {
        context.fillRect(i * 4 + i, j * 4 + j, 4, 4)
      }
    }
  }
}

function loop() {
  if(stop) {
    window.alert("Thanks for playing")
    return
  }
  window.requestAnimationFrame(loop)

  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

    update()
    draw()
  }
}
// var lastRender = 0
window.requestAnimationFrame(loop)
