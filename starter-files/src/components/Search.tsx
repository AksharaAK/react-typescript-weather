import { SearchProps } from '../types'
import LocationSearch from './LocationSearch'

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: SearchProps): JSX.Element => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-[#bce784] via-[#348aa7]  to-[#892b64] h-[100vh] w-full">
      <section className="bg-[#892b64]/20 lg:p-24 h-full lg:h-[500px]  w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 backdrop-blur-lg drop-shadow-lg rounded">
        <h1 className="text-4xl font-thin text-slate-300">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-sm mt-2 text-slate-300">
          Enter your location and choose an option from the dropdown
        </p>
        <LocationSearch
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      </section>
    </main>
  )
}

export default Search
