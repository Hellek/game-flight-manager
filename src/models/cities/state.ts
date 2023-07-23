import { createStore } from 'effector'

import { iCity } from '@components/mesh/types'

export const $cities = createStore<Map<number, iCity>>(new Map())
