import GameLogic from '../game-logic'
import Point from '../Point'

export default class GameOfLife implements GameLogic {

  private board: boolean[][]
  private readonly boardLength: number

  constructor(boardLength: number) {
    this.boardLength = boardLength
    this.board = this.clearBoard()
  }

  public step(aliveCells: Point[]): Point[] {
    this.board = this.clearBoard();
    aliveCells.forEach(cell => {
      this.board[cell.x][cell.y] = true
    });

    this.nextRound()

    return this.gatherLiveCells();
  }

  private gatherLiveCells(): Point[] {
    let liveCells: Point[] = []
    for (var i = 0; i < this.boardLength; i++) {
      for (var j = 0; j < this.boardLength; j++) {
        if (this.board[i][j]) {
          liveCells.push(new Point(i, j))
        }
      }
    }
    return liveCells
  }

  private nextRound() {
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

  private clearBoard(): boolean[][] {
    let newBoard: boolean[][] = []
    for (var i = 0; i < this.boardLength; i++) {
      newBoard[i] = [];
      for (var j = 0; j < this.boardLength; j++) {
        newBoard[i][j] = false;
      }
    }
    return newBoard
  }
}
