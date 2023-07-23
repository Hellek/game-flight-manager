import { useStore } from 'effector-react'

import { $cities } from '@models/cities'
import { $flightRoutes } from '@models/flightRoutes'
import { $planes } from '@models/planes'
import {
  City,
  Terrain,
} from './mesh'
import { FlightRoute } from './mesh/FlightRoute'
import { Plane } from './mesh/Plane'
import type { Size } from './mesh/types'

export const WORLD_SIZE: Size = [6, 6, 0.1]
export const WORLD_HEIGHT = WORLD_SIZE[2]

export const Model = () => {
  const cities = useStore($cities)
  const planes = useStore($planes)
  const flightRoutes = useStore($flightRoutes)

  return (
    <>
      <Terrain size={WORLD_SIZE} />

      {flightRoutes.map(flight => (
        <FlightRoute
          key={flight.id}
          departure={flight.departure}
          arrival={flight.arrival}
        />
      ))}

      {planes.map(plane => (
        <Plane
          key={plane.id}
          size={plane.size}
          flightRoute={plane.flightRoute}
        />
      ))}

      {[...cities.values()].map(city => (
        <City
          key={city.id}
          position={city.position}
          size={city.size}
        />
      ))}
    </>
  )
}
