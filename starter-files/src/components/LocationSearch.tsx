import { OptionType, SearchProps } from '../types'

const LocationSearch = ({
  term,
  onInputChange,
  options,
  onOptionSelect,
  onSubmit,
}: SearchProps) => {
  return (
    <div className="flex relative flex-row mt-10 md:mt-4">
      <input
        type="text"
        value={term}
        onChange={onInputChange}
        className="px-2 py-1 rounded-l-md border-2 border-white text-slate-600"
      />
      <ul className="absolute top-9 bg-white ml-1 rounded-b-md text-slate-500">
        {options.map((option: OptionType, index: number) => (
          <li key={option.name + '-' + index}>
            <button
              className="text-left text-sm w-full  hover:bg-slate-500 hover:text-white px-2 py-1 cursor-pointer "
              onClick={() => onOptionSelect(option)}
            >
              {option.name}, {option.country}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={onSubmit}
        className="border-2 rounded-r-md border-slate-100 px-2 py-1 text-slate-100 hover:text-slate-400 hover:border-slate-400 "
      >
        search
      </button>
    </div>
  )
}

export default LocationSearch
