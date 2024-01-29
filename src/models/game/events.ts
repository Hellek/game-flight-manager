import { createEffect, createEvent } from 'effector'
import { createGate } from 'effector-react'

import { City } from './state'

export const GameGate = createGate()

export const initGameEvent = createEvent('initGameEvent')
export const tickTravelersCountEvent = createEvent('tickTravelersCountEvent')

export const addCityFx = createEffect((city: City) => city)

export const addCitiesFx = createEffect((cityNames: string[]) => {
  const cityIDs = cityNames.map((_, i) => i)

  cityNames.forEach((cityName, i) => {
    const travelers = new Map()

    cityIDs.forEach(id => {
      if (id === i) return

      travelers.set(id, 0)
    })

    addCityFx({
      id: i,
      name: cityName,
      travelers,
    })
  })

  setInterval(() => {
    tickTravelersCountEvent()
  }, 1000)
})
