import {
  Terrain,
} from './mesh'
import type { Size } from './mesh/types'

export const World = () => {
  const terrainSize: Size = [6, 6, 0.1]

  return (
    <Terrain size={terrainSize} />
  )
}
