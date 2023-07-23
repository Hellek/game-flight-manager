import { setCitiesEvent } from './events'
import { $cities } from './state'

$cities
  .on(setCitiesEvent, (_, cities) => cities)
