import { World } from '@components/World'

import { MapControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export const Scene = () => {
  const distanceFromCenter = -10
  const yIncline = 7

  return (
    <Canvas
      camera={{
        position: [
          0,
          distanceFromCenter,
          yIncline,
        ],
      }}
    >
      <MapControls />

      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <World />
    </Canvas>
  )
}
