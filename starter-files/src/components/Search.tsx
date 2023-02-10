import { ChangeEvent } from 'react'
import { OptionType } from '../types'

type SearchProps = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: OptionType) => void
  onSubmit: () => void
}

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: SearchProps): JSX.Element => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-[#bce784] via-[#348aa7]  to-[#892b64] h-[100vh] w-full">
      <section className="bg-white/20 lg:p-24 h-full lg:h-[500px] text-zinc-700 w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 backdrop-blur-lg drop-shadow-lg rounded">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-sm mt-2">
          Enter the place you're travelling to and choose an option from the
          dropdown
        </p>
        <div className="flex relative flex-row mt-10 md:mt-4">
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            className="px-2 py-1 rounded-l-md border-2 border-white "
          />
          <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
            {options.map((option: OptionType, index: number) => (
              <li key={option.name + '-' + index}>
                <button
                  className="text-left text-sm w-full  hover:bg-zinc-500 hover:text-white px-2 py-1 cursor-pointer "
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={onSubmit}
            className="border-2 rounded-r-md border-zinc-100 px-2 py-1 text-zinc-100 hover:text-zinc-400 hover:border-zinc-400 "
          >
            search
          </button>
        </div>
      </section>
    </main>
  )
}

export default Search
