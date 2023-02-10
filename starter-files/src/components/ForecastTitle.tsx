import { ForecastType } from '../types'

import Degree from './Degree'

type Props = {
  data: ForecastType
}

const ForecastTitle = ({ data }: Props) => {
  const today = data.list[0]
  return (
    <section className="text-center">
      <h2 className="text-2xl font-black">
        {' '}
        {data.name} <span className="font-thin">{data.country}</span>{' '}
      </h2>

      <h1 className="text-2xl font-extrabold">
        <Degree temp={Math.round(today.main.temp)} />
      </h1>
      <p className="text-sm">
        {today.weather[0].main}, {today.weather[0].description}{' '}
      </p>
      <p className="text-sm">
        <span className="font-semibold">H:</span>{' '}
        <Degree temp={Math.ceil(today.main.temp_max)} />{' '}
        <span className="font-semibold">L:</span>{' '}
        <Degree temp={Math.ceil(today.main.temp_min)} />
      </p>
    </section>
  )
}

export default ForecastTitle
