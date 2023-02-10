import { useState, useEffect, ChangeEvent } from 'react'
import { OptionType } from '../types'

export const useForecast = () => {
  const [term, setTerm] = useState<string>('')
  const [options, setOptions] = useState<[]>([])
  const [city, setCity] = useState<OptionType | null>(null)

  const [forecast, setForecast] = useState<null>(null)

  const getSearchOptions = (value: string): void => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()},&limit=5&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
  }
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(value)
    if (value === '') {
      setOptions([])
      return
    }
    getSearchOptions(value)
  }

  const getForecast = (city: OptionType) => {
    console.log('inside get forecast')
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(16),
        }
        setForecast(forecastData)
      })
  }

  const onSubmit = () => {
    if (!city) return
    console.log('calling getForecast')
    getForecast(city)
  }

  const onOptionSelect = (option: OptionType) => {
    setCity(option)
  }
  useEffect(() => {
    if (city) {
      console.log('city set', city)
      setTerm(city.name)
      setOptions([])
    }
  }, [city])

  return {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  }
}
