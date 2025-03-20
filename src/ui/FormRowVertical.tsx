import { InputHTMLAttributes } from "react";

type FormRowVerticalProps = {
  label?: string;
  error?: string;
  children: React.ReactElement<InputHTMLAttributes<HTMLInputElement>>;
};

function FormRowVertical({ label, error, children }: FormRowVerticalProps) {
  return (
    <div className="flex flex-col gap-2 p-3">
      {label && (
        <label className="font-medium" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
