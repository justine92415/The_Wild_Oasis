import { InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type FormRowProps = {
  label: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  children: React.ReactElement<InputHTMLAttributes<HTMLInputElement>>;
};

function FormRow({ label, error, children }: FormRowProps) {
  return (
    <div
      className="border-grey-100 grid grid-cols-[240px_1fr_1.2fr] items-center gap-6 border-b
        py-3 first:pt-0 last:border-b-0 last:pb-0"
    >
      {label && (
        <label htmlFor={children?.props.id} className="font-medium">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-red-700">{error.toString?.() || String(error)}</span>}
    </div>
  );
}
export default FormRow;
