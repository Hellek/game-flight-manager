import { useEvent } from 'effector-react'

import { setCitiesEvent } from '@models/cities'
import {
  Cities,
  createCities,
  Terrain,
} from './entities'
import type { Size } from './types'

export const World = () => {
  const terrainSize: Size = [6, 6, 0.1]

  const setCities = useEvent(setCitiesEvent)

  setCities(createCities(terrainSize, [
    [-2, 1.5, NaN],
    [1, 1.0, NaN],
    [-1.5, -2, NaN],
  ]))

  return (
    <>
      <Terrain size={terrainSize} />

      <Cities />
    </>
  )
}
