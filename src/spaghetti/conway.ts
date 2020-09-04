//import Point from './Point'

export default class GameOfLife {
  private board: boolean[][];
  private canvas: HTMLCanvasElement;
  private readonly boardLength: number;

  private readonly pixelSize = 8;

  constructor(boardLength: number) {
    this.boardLength = boardLength;
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.board = [];
    for (var i = 0; i < this.boardLength; i++) {
      this.board[i] = [];
      for (var j = 0; j < this.boardLength; j++) {
        this.board[i][j] = false;
      }
    }
  }

  public setAlive(x: number, y: number) {
    this.board[x][y] = true;
  }

  public init_paint() {
    if (this.canvas === null) return;

    const context = this.canvas.getContext("2d");

    if (context === null) return;

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, this.boardLength * (this.pixelSize + 1), this.boardLength * (this.pixelSize + 1));
    this.draw();
  }

  public draw() {
    const context = this.canvas.getContext("2d");
    if (context === null) return;

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, this.boardLength * (this.pixelSize + 1), this.boardLength * (this.pixelSize + 1));
    context.fillStyle = "#000000";

    for (var i = 0; i < this.boardLength; i++) {
      for (var j = 0; j < this.boardLength; j++) {
        if (this.board[i][j]) {
          context.fillRect(
            i * this.pixelSize + i,
            j * this.pixelSize + j,
            this.pixelSize,
            this.pixelSize
          );
        }
      }
    }
  }

  public nextRound() {
    let newBoard: boolean[][] = [];
    for (var i = 0; i < this.boardLength; i++) {
      newBoard[i] = [];
      for (var j = 0; j < this.boardLength; j++) {
        newBoard[i][j] = this.willBeAlive(i, j);
      }
    }
    this.board = newBoard;
  }

  private willBeAlive(x: number, y: number) {
    if (this.hasExactlyThreeAliveNeighbours(x, y)) return true;
    if (this.isAlive(x, y) && this.hasExactlyTwoAliveNeighbours(x, y))
      return true;
    return false;
  }

  private isAlive(x: number, y: number) {
    return this.board[x][y];
  }

  private hasExactlyTwoAliveNeighbours(x: number, y: number) {
    return this.numberOfAliveNeighbours(x, y) == 2;
  }

  private hasExactlyThreeAliveNeighbours(x: number, y: number) {
    return this.numberOfAliveNeighbours(x, y) == 3;
  }

  numberOfAliveNeighbours(x: number, y: number) {
    let neighbours = 0;
    for (var i = -1; i < 2; i++) {
      for (var j = -1; j < 2; j++) {
        if (x + i < 0) continue;
        if (x + i >= this.boardLength) continue;
        if (y + j < 0) continue;
        if (y + j >= this.boardLength) continue;
        if (i == 0 && j == 0) continue;
        neighbours += this.board[x + i][y + j] ? 1 : 0;
      }
    }
    return neighbours;
  }
}
