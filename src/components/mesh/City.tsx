import { memo } from 'react'

import type { iCity } from './types'

const CityNotMemoized = ({
  position,
  size,
}: Pick<iCity, 'position' | 'size'>) => {
  console.log('city rendered')

  return (
    <mesh
      position={position}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color="black" />
    </mesh>
  )
}

export const City = memo(CityNotMemoized)
