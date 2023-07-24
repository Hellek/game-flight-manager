import { useEffect, useState } from 'react'
import { Select } from 'antd'
import { useStore } from 'effector-react'

import { $cities } from '@models/cities'

export const CreateFlight = () => {
  const cities = useStore($cities)
  const [from, setFrom] = useState<number>()
  const [to, setTo] = useState<number>()

  useEffect(() => {
    if (typeof from !== 'undefined' && typeof to !== 'undefined') {
      console.log('create flight', from, to)

      setFrom(undefined)
      setTo(undefined)
    }
  }, [from, to])

  return (
    <div className="flex items-center gap-3">
      <div>Create flight</div>

      <Select
        className="min-w-[200px]"
        options={cities.map(city => ({ label: city.name, value: city.id }))}
        value={from}
        onSelect={setFrom}
      />

      <Select
        className="min-w-[200px]"
        options={cities.map(city => ({ label: city.name, value: city.id }))}
        value={to}
        onSelect={setTo}
      />
    </div>
  )
}
