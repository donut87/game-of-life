import GUI from '../graphical'
import Point from '../Point'

export default class CanvasPainter implements GUI {

  private canvas: HTMLCanvasElement;
  private readonly pixelSize: number;
  private readonly canvasDimension: number;
  private readonly spaceBetweenPixels = 1;

  constructor(pixelSize: number, numberOfPixels: number) {
    this.pixelSize = pixelSize
    this.canvasDimension = (pixelSize + this.spaceBetweenPixels) * numberOfPixels;
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
  }

  paint(aliveCells: Point[]) {
    this.clearCanvas()
    aliveCells.forEach(cell => {
      this.draw(cell)
    })
  }

  private clearCanvas(): void {
    const context = this.canvas.getContext("2d");
    if (context === null) return;

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, this.canvasDimension, this.canvasDimension)
  }

  private draw(cell: Point) {
    const context = this.canvas.getContext("2d");
    if (context === null) return;

    context.fillStyle = "#000000";

    context.fillRect(
      cell.x * this.pixelSize + cell.x,
      cell.y * this.pixelSize + cell.y,
      this.pixelSize,
      this.pixelSize
    );
  }
}
