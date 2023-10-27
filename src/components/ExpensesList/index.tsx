import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import ExpensesForm from "../ExpensesForm";
import ExpensesTable from "../ExpensesTable";
import CurrencySelector from "../CurrencySelector";
import { SelectableCurrency } from "../../types";
import CurrencyStore from "../../stores/CurrencyStore";

const ExpensesList = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState<SelectableCurrency>(
    CurrencyStore.currency
  );

  const handleSelectCurrency = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    return setSelectedCurrency(event.target.value as SelectableCurrency);
  };

  const fetchExchangeRate = async () => {
    fetch(
      `${
        import.meta.env.VITE_EXCHANGE_RATES_API
      }/latest?base_currency=PLN&apikey=${
        import.meta.env.VITE_EXCHANGE_RATES_API_KEY
      }`
    )
      .then((response) => response.json())
      .then(({ data }) => {
        setExchangeRate(data[selectedCurrency]);
        CurrencyStore.setCurrency(selectedCurrency);
      })
      .catch((error) => {
        console.error("Error fetching exchange rates: ", error);
      });
  };

  useEffect(() => {
    fetchExchangeRate();
  }, [selectedCurrency]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">List of expenses</h1>
        <CurrencySelector
          selectedCurrency={selectedCurrency}
          onChange={handleSelectCurrency}
        />
      </div>
      <ExpensesForm />
      <ExpensesTable exchangeRate={exchangeRate} />
    </div>
  );
};

export default observer(ExpensesList);
