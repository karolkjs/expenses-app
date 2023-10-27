import { observer } from "mobx-react-lite";

import CurrencyStore from "../../stores/CurrencyStore";
import { Expense } from "../../types";

interface ExpenseItemProps {
  expense: Expense;
  convertedAmount: any;
  index: number;
  onDelete: (index: number) => void;
}

const tdStyle = "p-3 border border-black";

const ExpenseItem = ({
  expense,
  convertedAmount,
  index,
  onDelete,
}: ExpenseItemProps) => {
  return (
    <tr>
      <td className={tdStyle}>{expense.title}</td>
      <td className={tdStyle}>{expense.amount} PLN</td>
      <td className={tdStyle}>
        {convertedAmount} {CurrencyStore.currency}
      </td>
      <td className={tdStyle}>
        <button onClick={() => onDelete(index)}>Delete</button>
      </td>
    </tr>
  );
};

export default observer(ExpenseItem);
