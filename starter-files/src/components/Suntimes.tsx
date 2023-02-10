import { ForecastType } from '../types'

import Sunrise from './Icons/Sunrise'
import Sunset from './Icons/Sunset'

import { getSunTime } from '../helpers'

type Props = {
  data: ForecastType
}
const Suntimes = ({ data }: Props) => {
  return (
    <>
      <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-2 md:mb-5">
        <Sunrise />
        <span className="mt-3">{getSunTime(data.sunrise)}</span>
      </div>
      <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-2 md:mb-5">
        <Sunset />
        <span className="mt-3">{getSunTime(data.sunset)}</span>
      </div>
    </>
  )
}

export default Suntimes
