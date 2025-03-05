import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> {
  registration?: UseFormRegisterReturn; // 使用 React Hook Form 的類型
}

function Input({ type, defaultValue, id, registration }: InputProps) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      className="bg-grey-0 border-grey-300 rounded-sm border px-3 py-2 shadow-sm"
      id={id}
      {...registration}
    />
  );
}

export default Input;
