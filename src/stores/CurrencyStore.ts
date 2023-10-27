import { makeObservable, observable, action } from "mobx";

import { SelectableCurrency } from "../types";

class CurrencyStore {
  currency: SelectableCurrency = "EUR";

  constructor() {
    makeObservable(this, {
      currency: observable,
      setCurrency: action,
    });
  }

  setCurrency(currency: SelectableCurrency) {
    this.currency = currency;
  }
}

export default new CurrencyStore();
