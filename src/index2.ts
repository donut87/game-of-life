import GameOfLife from './logic/game-with-boundaries'
import Point from './Point'
import GUI from 'graphical'
import CanvasPainter from './gui/canvas-gui'

const boardDimensions = 100
const logic = new GameOfLife(boardDimensions)
let aliveCells: Point[] = [
  new Point(2, 0),
  new Point(2, 1),
  new Point(2, 2),
  new Point(1, 2),
  new Point(0, 1)
]
let then = Date.now()
let fpsInterval = 1000.0 / 10
const gui: GUI = new CanvasPainter(4, boardDimensions)
let stop = false

function loop() {
  if(stop) {
    window.alert("Thanks for playing")
    return
  }
  window.requestAnimationFrame(loop)

  let now = Date.now();
  let elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    aliveCells = logic.step(aliveCells)
    gui.paint(aliveCells)
  }
}

window.requestAnimationFrame(loop)
