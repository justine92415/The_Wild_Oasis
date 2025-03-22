import { UseFormRegisterReturn } from "react-hook-form";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  registration?: UseFormRegisterReturn; // 使用 React Hook Form 的類型
}

function FileInput({
  type,
  id,
  accept,
  registration,
  onChange,
}: FileInputProps) {
  return (
    <input
      id={id}
      type={type}
      accept={accept}
      className="file-input"
      onChange={onChange}
      {...registration}
    />
  );
}

export default FileInput;
