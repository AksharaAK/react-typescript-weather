//types
import { ForecastType } from '../types'

//components
import ForecastTitle from './ForecastTitle'
import Hourly from './Hourly'
import Suntimes from './Suntimes'
import TodayWeather from './TodayWeather'

//helpers

type Props = {
  data: ForecastType
}

const Forecast = ({ data }: Props): JSX.Element => {
  return (
    <div className="w-full md:max-w-[500px] py-2 md:py-10 md:px-10 lg:px-24 h-full lg:h-screen overflow-scroll bg-white/20 backdrop-blur-lg rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        {/* header */}
        <ForecastTitle data={data} />

        {/* hourly forecast */}
        <Hourly data={data} />

        <section className="flex flex-wrap justify-between text-zinc-700">
          <Suntimes data={data} />

          {/* other attributes */}
          <TodayWeather data={data} />
        </section>
      </div>
    </div>
  )
}

export default Forecast
