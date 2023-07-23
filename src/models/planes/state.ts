import { createStore } from 'effector'

import { iPlane } from '@components/mesh/types'

export const $planes = createStore<iPlane[]>([])
