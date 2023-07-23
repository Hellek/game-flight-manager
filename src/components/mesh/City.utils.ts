import { WORLD_HEIGHT } from '@components/World'

import type {
  iCity,
  Position,
  Size,
} from './types'

let freeCityId = 0

export const createCity = (position: Position): iCity => {
  const cityHeight = 0.25

  const p = {
    id: freeCityId,
    position: [position[0], position[1], (WORLD_HEIGHT + cityHeight) / 2] as Position,
    size: [0.25, 0.25, cityHeight] as Size,
    flights: [],
  }

  freeCityId += 1

  return p
}

export const createCitiesMap = (positions: Position[]): Map<number, iCity> => {
  const cities: Map<number, iCity> = new Map()

  positions.forEach(position => {
    const city = createCity(position)

    cities.set(city.id, city)
  })

  return cities
}
