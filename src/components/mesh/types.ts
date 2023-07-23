export type Size = [widthX: number, widthY: number, height: number]
export type Position = [x: number, y: number, z: number]

export interface iPhysicalObject {
  id: number
  position: Position
  size: Size
}

export type iCity = iPhysicalObject

export interface iFlightRoute {
  id: number
  departure: iCity
  arrival: iCity
  planes: number[]
}

export interface iPlane extends iPhysicalObject {
  flightRoute: iFlightRoute
}
