
export default class GameOfLife {

  constructor() {
    this.gameBoard = []
    for (var i = 0; i < 100 ; i++) {
      this.gameBoard[i] = []
      for (var j = 0; j < 100; j++) {
        this.gameBoard[i][j] = false
      }
    }
  }

  nextRound() {
    let newBoard = []
    for (var i = 0; i < 100 ; i++) {
      newBoard[i] = []
      for (var j = 0; j < 100; j++) {
        newBoard[i][j] = this.willBeAlive(i, j)
      }
    }
    this.gameBoard = newBoard
  }

  numberOfAliveNeighbours(x, y) {
    let neighbours = 0
    for (var i = -1; i < 2; i++) {
      for (var j = -1; j < 2; j++) {
        if(x + i < 0) continue
        if(x + i > 99) continue
        if(y + j < 0) continue
        if(y + j > 99) continue
        if(i == 0 && j == 0) continue
        neighbours += this.gameBoard[x + i][y + j]? 1 : 0
      }
    }
    return neighbours
  }

  isAlive (x, y)  {return this.gameBoard[x][y]}

  hasExactlyTwoAliveNeighbours(x, y) {
    return this.numberOfAliveNeighbours(x, y) == 2
  }

  hasExactlyThreeAliveNeighbours(x, y) {return this.numberOfAliveNeighbours(x, y) == 3}

  willBeAlive(x, y) {
    if(this.hasExactlyThreeAliveNeighbours(x, y)) return true
    if(this.isAlive(x, y) && this.hasExactlyTwoAliveNeighbours(x, y)) return true
    return false
  }

  isDead() {
    for (var i = 0; i < 100 ; i++) {
      for (var j = 0; j < 100; j++) {
        if(this.gameBoard[i][j]) {return false}
      }
    }
    return true
  }
}
