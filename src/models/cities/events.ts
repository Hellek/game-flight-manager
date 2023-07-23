import { createEvent } from 'effector'

import { iCity } from '@components/mesh/types'

export const setCitiesEvent = createEvent<Map<number, iCity>>('setCitiesEvent')
