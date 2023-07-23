import { Button } from 'antd'
import { useEvent, useStore } from 'effector-react'

import { $cities } from '@models/cities'
import { addFlightRouteEvent } from '@models/flightRoutes'
import { addPlaneEvent } from '@models/planes'
import { createFlightRoute } from './mesh/FlightRoute.utils'
import { createPlane } from './mesh/Plane.utils'

export const TopPanel = () => {
  const cities = useStore($cities)
  const addPlane = useEvent(addPlaneEvent)
  const addFlightRoute = useEvent(addFlightRouteEvent)

  const createFlight = () => {
    const departureCityId = 2
    const arrivalCityId = 0

    const departure = cities.get(departureCityId)!
    const arrival = cities.get(arrivalCityId)!

    const flightRoute = createFlightRoute(departure, arrival)
    const plane = createPlane(flightRoute, flightRoute.departure.position)

    // add items to the store
    addFlightRoute(flightRoute)
    addPlane(plane)
  }

  return (
    <div className="absolute w-full flex items-center justify-center">
      <div className="z-10 bg-slate-600 text-white p-2 rounded-b-lg">
        <Button
          onClick={createFlight}
        >
          Create flight
        </Button>
      </div>
    </div>
  )
}
