import CurrencyStore from "../../stores/CurrencyStore";
import CaretIcon from "../Caret";

interface HeaderProps {
  onHeaderClick: (header: any) => void;
  keyToSort: string;
  sortDirection: "asc" | "desc";
}

const Header = ({ onHeaderClick, keyToSort, sortDirection }: HeaderProps) => {
  const headers = [
    {
      id: 1,
      KEY: "NAME",
      LABEL: "Name",
    },
    {
      id: 2,
      key: "AMOUNT",
      LABEL: "Amount (PLN)",
    },
    {
      id: 3,
      key: "AMOUNT_EUR",
      LABEL: `Amount ${CurrencyStore.currency}`,
    },
  ];

  return headers.map((header) => {
    return (
      <th
        className="py-4 px-3 bg-gray-300 border border-collapse border-black text-start select-none"
        onClick={() => onHeaderClick(header)}
        key={header.id}
      >
        <div className="flex items-center">
          {header.KEY === keyToSort && <CaretIcon direction={sortDirection} />}
          <span>{header.LABEL}</span>
        </div>
      </th>
    );
  });
};

export default Header;
