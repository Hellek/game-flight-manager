import { sample } from 'effector'

import {
  addCitiesFx,
  addCityFx, GameGate, initGameEvent, tickTravelersCountEvent,
} from './events'
import { $cities, $cityNames } from './state'

GameGate.open.watch(() => {
  initGameEvent()
})

$cities
  .on(addCityFx, (cities, city) => [...cities, city])
  .on(tickTravelersCountEvent, cities => {
    const c = cities.map(city => {
      const newTravelers = new Map()

      city.travelers.forEach((count, cityId) => {
        newTravelers.set(cityId, count + 1)
      })

      return {
        ...city,
        travelers: newTravelers,
      }
    })

    return c
  })

sample({
  clock: initGameEvent,
  source: { cityNames: $cityNames, cities: $cities },
  filter: ({ cities }) => cities.length === 0,
  fn: ({ cityNames }) => cityNames,
  target: addCitiesFx,
})
