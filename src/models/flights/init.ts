import { addFlightEvent } from './events'
import { $flights } from './state'

$flights
  .on(addFlightEvent, (flights, flight) => [...flights, flight])
