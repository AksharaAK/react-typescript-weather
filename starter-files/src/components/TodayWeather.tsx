import { ForecastType } from '../types'

//helpers
import {
  getWindDirection,
  getPop,
  getHumidityValue,
  getVisibilityValue,
} from '../helpers'

//components
import Tile from './Tile'
import Degree from './Degree'

type Props = {
  data: ForecastType
}
const TodayWeather = ({ data }: Props) => {
  const today = data.list[0]
  return (
    <>
      <Tile
        icon="wind"
        title="Wind"
        info={`${Math.round(today.wind.speed)} km/h`}
        description={`${getWindDirection(
          Math.round(today.wind.deg)
        )} gusts ${today.wind.gust.toFixed(1)} km/h`}
      />
      <Tile
        icon="feels"
        title="Feels like"
        info={<Degree temp={Math.round(today.main.feels_like)} />}
        description={`Feels ${
          Math.round(today.main.feels_like) < Math.round(today.main.temp)
            ? 'colder'
            : 'warmer'
        } `}
      />
      <Tile
        icon="humidity"
        title="Humidity"
        info={`${today.main.humidity} %`}
        description={getHumidityValue(today.main.humidity)}
      />
      <Tile
        icon="pop"
        title="Precipitation"
        info={`${Math.round(today.pop * 1000)}`}
        description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
      />
      <Tile
        icon="pressure"
        title="Pressure"
        info={`${today.main.pressure} hPa`}
        description={` ${
          Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
        } than standard`}
      />
      <Tile
        icon="visibility"
        title="Visibility"
        info={`${(today.visibility / 1000).toFixed()} km`}
        description={getVisibilityValue(today.visibility)}
      />
    </>
  )
}
export default TodayWeather
