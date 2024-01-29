import { useGate, useStore } from 'effector-react'

import { Cities } from '@components/Cities'

import {
  $cities, GameGate,
} from '@models/game'

export const Game = () => {
  useGate(GameGate)

  const cities = useStore($cities)

  return (
    <div className="w-full relative">
      <div className="p-3 flex flex-wrap gap-3">
        {cities.map(c => (
          <Cities
            key={c.id}
            cities={cities}
            {...c}
          />
        ))}
      </div>
    </div>
  )
}
