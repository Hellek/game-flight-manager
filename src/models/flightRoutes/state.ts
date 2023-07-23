import { createStore } from 'effector'

import { iFlightRoute } from '@components/mesh/types'

export const $flightRoutes = createStore<iFlightRoute[]>([])
