import { createEvent } from 'effector'

import { iPlane } from '@components/mesh/types'

export const addPlaneEvent = createEvent<iPlane>('addPlaneEvent')
