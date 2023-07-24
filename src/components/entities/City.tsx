import { memo } from 'react'

import { Box } from '@react-three/drei'
import { PhysicalObject, Position, Size } from '../types'

export interface City extends PhysicalObject {
  name: string
}

let freeCityId = 0

export const createCity = (terrainSize: Size, position: Position): City => {
  const cityHeight = 0.25
  const terrainHeight = terrainSize[2]

  const p = {
    id: freeCityId,
    name: `City on ${position[0]}x${position[1]}`,
    position: [position[0], position[1], (terrainHeight + cityHeight) / 2] as Position,
    size: [0.25, 0.25, cityHeight] as Size,
  }

  freeCityId += 1

  return p
}

export const createCities = (terrainSize: Size, positions: Position[]): City[] => {
  const cities: City[] = []

  positions.forEach(position => {
    cities.push(createCity(terrainSize, position))
  })

  return cities
}

const CityNotMemoized = ({
  position,
  size,
}: Pick<PhysicalObject, 'position' | 'size'>) => {
  console.log('city rendered')

  return (
    <Box
      args={size}
      position={position}
    >
      <meshStandardMaterial color="black" />
    </Box>
  )
}

export const City = memo(CityNotMemoized)
