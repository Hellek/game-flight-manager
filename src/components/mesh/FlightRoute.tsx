import { memo } from 'react'

import { QuadraticBezierLine } from '@react-three/drei'
import type {
  iFlightRoute,
} from './types'

const FlightRouteNotMemoized = ({
  departure,
  arrival,
}: Pick<iFlightRoute, 'departure' | 'arrival'>) => {
  console.log('route rendered')

  return (
    <QuadraticBezierLine
      start={departure.position}
      end={arrival.position}
      mid={[0, 0, 3]}
      color="blue"
      lineWidth={2}
    />
  )
}

export const FlightRoute = memo(FlightRouteNotMemoized)
