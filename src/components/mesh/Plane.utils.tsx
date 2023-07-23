import type {
  iFlightRoute,
  iPlane,
  Position,
  Size,
} from './types'

let freePlaneId = 0

export const createPlane = (flightRoute: iFlightRoute, position: Position): iPlane => {
  const p = {
    id: freePlaneId,
    position,
    size: [0.25, 0.25, 0.25] as Size,
    flightRoute,
  }

  freePlaneId += 1

  return p
}
