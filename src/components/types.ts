export type Size = [widthX: number, widthY: number, height: number]
export type Position = [x: number, y: number, z: number]

export interface PhysicalObject {
  id: number
  position: Position
  size: Size
}
