import {
  City,
  createCities,
  Terrain,
} from './worldItems'
import type { Size } from './worldItems/types'

export const World = () => {
  const terrainSize: Size = [6, 6, 0.1]

  const cities = createCities(terrainSize, [
    [-2, 1.5, NaN],
    [1, 1.0, NaN],
    [-1.5, -2, NaN],
  ])

  return (
    <>
      <Terrain size={terrainSize} />

      {cities.map(city => (
        <City
          key={city.id}
          position={city.position}
          size={city.size}
        />
      ))}
    </>
  )
}
