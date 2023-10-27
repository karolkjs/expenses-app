import React from "react";

interface ButtonProps {
  type?: "submit" | "button";
  onClick?: any;
  children: React.ReactNode;
  style: string;
}

const Button = ({ type = "button", onClick, style, children }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gray text-[#000] rounded-md border h-10 self-center min-w-[100px] ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
