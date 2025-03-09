import { SelectHTMLAttributes } from "react";

type SelectProps = {
  type?: "white" | "default";
  options: Option[];
} & SelectHTMLAttributes<HTMLSelectElement>;

type Option = {
  value: string;
  label: string;
};

function Select({
  options,
  type = "default",
  className = "",
  ...props
}: SelectProps) {
  return (
    <select
      className={`border border-solid px-3 py-2 text-sm ${
        type === "white" ? "border-grey-100" : "border-grey-300" } bg-grey-0 rounded-sm
        font-medium shadow-sm ${className}`}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
