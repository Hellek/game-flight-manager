import { createEvent } from 'effector'

import { City } from '@components/entities'

export const setCitiesEvent = createEvent<City[]>('setCitiesEvent')
