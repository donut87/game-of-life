import Point from './Point'

export default interface GameLogic {

  step(aliveCells: Point[]): Point[]
}
