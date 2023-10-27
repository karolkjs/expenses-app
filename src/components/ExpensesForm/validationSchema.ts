import * as yup from "yup";

export const validationSchema = yup.object({
  title: yup
    .string()
    .min(5, "Title must be at least 5 characters")
    .required("Title is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .max(999999, "Amount is too large")
    .required("Amount is required"),
});
