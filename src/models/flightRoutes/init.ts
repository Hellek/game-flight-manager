import { addFlightRouteEvent } from './events'
import { $flightRoutes } from './state'

$flightRoutes
  .on(addFlightRouteEvent, (flightRoutes, flightRoute) => [...flightRoutes, flightRoute])
