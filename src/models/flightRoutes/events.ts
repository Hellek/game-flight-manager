import { createEvent } from 'effector'

import { iFlightRoute } from '@components/mesh/types'

export const addFlightRouteEvent = createEvent<iFlightRoute>('addFlightRouteEvent')
