import { ButtonHTMLAttributes } from "react";

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement>;

function ButtonIcon({ children, className, ...props }: ButtonIconProps) {
  return (
    <button 
      className={`bg-transparent border-none p-2 rounded-sm transition-all duration-200 hover:bg-gray-100 ${className || ""}`} 
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
