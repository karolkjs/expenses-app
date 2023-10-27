import React from "react";
import { Field, ErrorMessage } from "formik";

interface FieldInputProps {
  name: string;
  type: string;
  placeholder: string;
  label?: string;
}

const FieldInput: React.FC<FieldInputProps> = ({
  name,
  type,
  placeholder,
  label,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-bold mb-3" htmlFor={name}>
          {label}
        </label>
      )}
      <Field
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="p-2 border h-10 rounded-md"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default FieldInput;
