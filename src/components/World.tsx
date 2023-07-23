import {
  Terrain,
} from './mesh'
import type { Size } from './mesh/types'

export const WORLD_SIZE: Size = [6, 6, 0.1]
export const WORLD_HEIGHT = WORLD_SIZE[2]

export const World = () => (
  <Terrain size={WORLD_SIZE} />
)
