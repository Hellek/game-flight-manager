import type {
  iCity,
  iFlightRoute,
} from './types'

let freeFlightId = 0

export const createFlightRoute = (departure: iCity, arrival: iCity): iFlightRoute => {
  const f = {
    id: freeFlightId,
    departure,
    arrival,
    planes: [],
  }

  freeFlightId += 1

  return f
}
