import { useEvent } from 'effector-react'

import { createCitiesMap } from '@components/mesh'
import { Scene } from '@components/Scene'
import { TopPanel } from '@components/TopPanel'

import { setCitiesEvent } from '@models/cities'

export const Game = () => {
  const setCities = useEvent(setCitiesEvent)

  setCities(createCitiesMap([
    [-2, 1.5, NaN],
    [1, 1.0, NaN],
    [-1.5, -2, NaN],
  ]))

  return (
    <div className="w-full relative">
      <TopPanel />

      <Scene />
    </div>
  )
}
