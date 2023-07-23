import { Box } from '@react-three/drei'
import { Size } from './types'

interface TerrainProps {
  size: Size
}

export const Terrain = ({
  size,
}: TerrainProps) => (
  <Box args={size} material-color="green" />
)
