import { Size } from './types'

interface TerrainProps {
  size: Size
}

export const Terrain = ({
  size,
}: TerrainProps) => (
  <mesh>
    <boxGeometry args={size} />
    <meshStandardMaterial color="green" />
  </mesh>
)
