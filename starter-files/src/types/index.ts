import { ChangeEvent } from 'react'

export type OptionType = {
  name: string
  country: string
  lat: number
  lon: number
}

export type ForecastType = {
  name: string
  country: string
  sunrise: number
  sunset: number
  list: [
    {
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          main: string
          description: string
          icon: string
        }
      ]
      wind: {
        speed: number
        deg: number
        gust: number
      }
      clouds: {
        all: number
      }
      visibility: number
      pop: number
    }
  ]
}

export type SearchProps = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: OptionType) => void
  onSubmit: () => void
}
