import { makeObservable, observable, action } from "mobx";

import { Expense } from "../types";

class ExpenseStore {
  expenses: Expense[] = [];

  constructor() {
    makeObservable(this, {
      expenses: observable,
      addExpense: action,
      deleteExpense: action,
    });
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
  }
}

export default new ExpenseStore();
