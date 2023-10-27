import { useState } from "react";
import { observer } from "mobx-react-lite";

import ExpenseItem from "../ExpenseItem";
import ExpenseStore from "../../stores/ExpenseStore";
import { Expense } from "../../types";
import Header from "./Header";

interface SortDirectionState {
  keyToSort: string;
  direction: "asc" | "desc";
}

const ExpensesTable = ({ exchangeRate }: { exchangeRate: any }) => {
  const [sort, setSort] = useState<SortDirectionState>({
    keyToSort: "NAME",
    direction: "desc",
  });

  const handleDelete = (index: number) => {
    ExpenseStore.deleteExpense(index);
  };

  const getSortedExpenses = () => {
    const arr = [...ExpenseStore.expenses];

    if (sort.direction === "asc") {
      return arr.sort((a: Expense, b: Expense) =>
        a[sort.keyToSort as keyof Expense] > b[sort.keyToSort as keyof Expense]
          ? 1
          : -1
      );
    }
    return arr.sort((a: Expense, b: Expense) =>
      a[sort.keyToSort as keyof Expense] > b[sort.keyToSort as keyof Expense]
        ? -1
        : 1
    );
  };

  const handleHeaderClick = (header: any) => {
    setSort({
      keyToSort: header.KEY,
      direction:
        header.KEY === sort.keyToSort
          ? sort.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  };

  const renderExpenses = () => {
    return getSortedExpenses().map((expense, index) => (
      <ExpenseItem
        key={index}
        expense={expense}
        convertedAmount={(expense.amount * exchangeRate).toFixed(2)}
        index={index}
        onDelete={handleDelete}
      />
    ));
  };

  return (
    <table className="w-full max-w-[800px] border-collapse border">
      <thead>
        <tr>
          <Header
            onHeaderClick={handleHeaderClick}
            keyToSort={sort.keyToSort}
            sortDirection={sort.direction}
          />
          <th className="py-4 px-3 bg-gray-300 border border-collapse border-black text-start select-none">
            Options
          </th>
        </tr>
      </thead>
      <tbody>{renderExpenses()}</tbody>
    </table>
  );
};

export default observer(ExpensesTable);
