import { SelectableCurrency } from "../../types";

interface CurrencySelectorProps {
  selectedCurrency: SelectableCurrency;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CurrencySelector = ({
  selectedCurrency,
  onChange,
}: CurrencySelectorProps) => {
  return (
    <div className="relative w-[100px]">
      <select
        id="selectInput"
        name="selectInput"
        className="block appearance-none w-full focus:outline-none p-2 border h-10 rounded-md"
        onChange={onChange}
        value={selectedCurrency}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10.293 14.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414 1 1 0 01-1.414 0L10 16.414l-4.293 4.293a1 1 0 01-1.414 0 1 1 0 010-1.414l5-5a1 1 0 011.414 0z" />
        </svg>
      </div>
    </div>
  );
};

export default CurrencySelector;
