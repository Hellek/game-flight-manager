import { addPlaneEvent } from './events'
import { $planes } from './state'

$planes
  .on(addPlaneEvent, (planes, plane) => [...planes, plane])
