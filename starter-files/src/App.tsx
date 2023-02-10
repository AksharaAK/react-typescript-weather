//hooks
import { useForecast } from './hooks/useForecast'

//components
import Search from './components/Search'
import Forecast from './components/Forecast'
import Back from './components/Icons/Back'

const App = (): JSX.Element => {
  const {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
    clearForecast,
  } = useForecast()

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-[#bce784] via-[#348aa7] to-[#892b64] h-[100vh] w-full">
      <span className="absolute top-3 left-1 m-2 z-10">
        <button onClick={clearForecast}>
          <Back />
        </button>
      </span>
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <>
          <Search
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        </>
      )}
    </main>
  )
}

export default App
