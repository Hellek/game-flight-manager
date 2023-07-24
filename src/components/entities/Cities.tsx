import { useStore } from 'effector-react'

import { $cities } from '@models/cities'
import { City } from './City'

export const Cities = () => {
  const cities = useStore($cities)

  return (
    <>
      {cities.map(city => (
        <City
          key={city.id}
          position={city.position}
          size={city.size}
        />
      ))}
    </>
  )
}
