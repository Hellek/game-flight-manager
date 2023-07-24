import { CreateFlight } from './panel'

export const TopPanel = () => (
  <div className="absolute w-full flex items-center justify-center">
    <div className="z-10 bg-slate-600 text-white p-2 rounded-b-lg">
      <CreateFlight />
    </div>
  </div>
)
