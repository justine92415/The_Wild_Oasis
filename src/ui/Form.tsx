import React from "react";

type FormProps = {
  type?: "modal" | "non-modal";
  children: React.ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

function Form({ type = "modal", children, onSubmit }: FormProps) {
  // 根據條件組合不同的類名
  const baseClasses = "overflow-hidden text-sm";
  const nonModalClasses =
    type !== "modal"
      ? "px-10 py-6 bg-grey-0 border border-grey-100 rounded-md"
      : "";
  const modalClasses = type === "modal" ? "w-200" : "";

  const combinedClasses = `${baseClasses} ${nonModalClasses} ${modalClasses}`;

  return (
    <form onSubmit={onSubmit} className={combinedClasses}>
      {children}
    </form>
  );
}

export default Form;
