import { useState } from 'react'

import { WORLD_HEIGHT } from '@components/Model'

import { useFrame } from '@react-three/fiber'
import type {
  iPlane,
  Position,
} from './types'

export const Plane = ({
  flightRoute,
  size,
}: Pick<iPlane, 'flightRoute' | 'size'>) => {
  const [depX, depY] = flightRoute.departure.position
  const [arrX, arrY] = flightRoute.arrival.position
  const planeHeight = 0.25
  const [position, setPosition] = useState<Position>([depX, depY, (WORLD_HEIGHT + planeHeight) / 2])
  const [toArrivalDirection, setToArrivalDirection] = useState(true)

  console.log('plane rendered')

  useFrame(() => {
    if (depX === arrX && depY === arrY) {
      setToArrivalDirection(!toArrivalDirection)
      return
    }

    setPosition(prevPos => [
      toArrivalDirection ? prevPos[0] + 0.01 : prevPos[0] - 0.01,
      toArrivalDirection ? prevPos[1] + 0.01 : prevPos[1] - 0.01,
      prevPos[2],
    ])
  })

  return (
    <mesh
      position={position}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
}
