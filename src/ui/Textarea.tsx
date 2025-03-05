import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLInputElement> {
  registration?: UseFormRegisterReturn; // 使用 React Hook Form 的類型
}

function Textarea({ id, defaultValue, registration }: TextAreaProps) {
  return (
    <textarea
      id={id}
      defaultValue={defaultValue}
      className="border-grey-300 bg-grey-0 h-32 w-full rounded-sm border p-3 shadow-sm"
      {...registration}
    />
  );
}

export default Textarea;
