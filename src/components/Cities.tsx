import { City } from '@models/game'

type CitiesProps = City & { cities: City[] }

export const Cities = ({
  name, travelers, cities,
}: CitiesProps) => {
  const travelersArr = [...travelers.entries()]

  return (
    <div className="w-64 px-4 py-3 text-white bg-cyan-700 rounded-xl">
      <div>г. {name}</div>

      <div className="mt-2">
        <div>Кол-во пассажиров в:</div>
        <div>
          {travelersArr.map(([key, val]) => (
            <div
              key={key}
              className="ml-2"
            >
              {cities[key].name} - {val}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
