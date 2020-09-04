import GameOfLife from "./conway";

const gol: GameOfLife = new GameOfLife(100);
var stop = false;

var fpsInterval = 20
var now = Date.now()
var then = Date.now()
var elapsed: any;

gol.setAlive(2, 0)
gol.setAlive(2, 1)
gol.setAlive(2, 2)
gol.setAlive(1, 2)
gol.setAlive(0, 1)

gol.init_paint();

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

    gol.nextRound()
    gol.draw()
  }
}

window.requestAnimationFrame(loop)
