import { createStore } from 'effector'

import { City } from '@components/entities'

export const $cities = createStore<City[]>([])
