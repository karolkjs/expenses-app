import React from "react";
import ExpensesList from "./components/ExpensesList";

const App: React.FC = () => {
  return (
    <div className="p-4">
      <ExpensesList />
    </div>
  );
};

export default App;
