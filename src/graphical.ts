import Point from './Point'

export default interface GUI {
  paint(aliveCells: Point[]): void;
}
