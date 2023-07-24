import { Scene } from '@components/Scene'
import { TopPanel } from '@components/TopPanel'

export const Game = () => (
  <div className="w-full relative">
    <TopPanel />
    <Scene />
  </div>
)
