import { Formik, Form } from "formik";

import ExpenseStore from "../../stores/ExpenseStore";
import FieldInput from "../FieldInput";
import Button from "../Button";
import { Expense } from "../../types";

import { validationSchema } from "./validationSchema";

const ExpensesForm = () => {
  const handleSubmit = (values: Expense, { resetForm }: any) => {
    ExpenseStore.addExpense(values);
    resetForm();
  };

  const initialValues: Expense = {
    title: "",
    amount: 0,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FieldInput
          name="title"
          type="text"
          placeholder="Title of transaction"
          label="Title"
        />
        <div className="flex">
          <FieldInput
            name="amount"
            type="number"
            placeholder="Amount (PLN)"
            label="Amount (PLN)"
          />
          <Button type="submit" style="mt-4 ml-5">
            Add
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default ExpensesForm;
