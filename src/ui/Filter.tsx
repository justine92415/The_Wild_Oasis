import { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

type FilterProps = {
  disabled?: boolean;
  filterField: string;
  options: Option[];
};

type Option = {
  value: string;
  label: string;
};

function Filter({ disabled, filterField, options }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options?.at(0)?.value;

  function handleClick(value: string) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="border-grey-100 bg-grey-0 flex gap-1 rounded-sm border p-1 shadow-sm">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={disabled}
          className={`rounded-sm border-none px-2 py-[4.4px] text-sm font-medium transition-all
          duration-300
          ${option.value === currentFilter ? "bg-brand-600 text-brand-50" : "bg-grey-0"}
          ${!disabled ? "hover:bg-brand-600 hover:text-brand-50" : "bg-grey-0"} `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
