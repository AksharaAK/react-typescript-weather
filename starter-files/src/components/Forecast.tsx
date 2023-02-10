import { ForecastType } from '../types'

type Props = {
  data: ForecastType
}

const Degree = ({ temp }: { temp: number }): JSX.Element => {
  return (
    <span>
      {temp}
      <sup>o</sup>
    </span>
  )
}

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0]

  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white/20 backdrop-blur-lg rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {' '}
            {data.name} <span className="font-thin">{data.country}</span>{' '}
          </h2>

          <h1 className="text-3xl font-extrabold">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p className="text-sm">
            {today.weather[0].main}: {today.weather[0].description}{' '}
          </p>
          <p className="text-sm">
            <span className="font-semibold">H:</span>{' '}
            <Degree temp={Math.ceil(today.main.temp_max)} />{' '}
            <span className="font-semibold">L:</span>{' '}
            <Degree temp={Math.ceil(today.main.temp_min)} />
          </p>
        </section>

        <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
          {data.list.map((item, i) => (
            <div
              key={i}
              className="inline-block text-center w-[50px] flex-shrink-0 mb-5 p-1 mt-4"
            >
              <p className="text-sm">
                {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="text-sm font-bold">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Forecast