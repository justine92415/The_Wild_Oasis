type ButtonSize = "small" | "medium" | "large";
type ButtonVariation = "primary" | "secondary" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variation?: ButtonVariation;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: (...args: any) => void;
}

function Button({
  size = "medium",
  variation = "primary",
  onClick,
  children,
  type = "submit",
  disabled
}: ButtonProps) {
  // 基礎樣式（適用於所有按鈕）
  const baseStyles = "rounded-sm shadow-sm";

  // 尺寸樣式映射
  const sizeStyles = {
    small: "text-xs py-1 px-2 uppercase font-semibold text-center",
    medium: "text-sm py-3 px-4 font-medium",
    large: "text-base py-3 px-6 font-medium",
  };

  // 變體樣式映射
  const variationStyles = {
    primary: "border-0 text-brand-50 bg-brand-600 hover:bg-brand-700",
    secondary:
      "text-grey-600 bg-grey-0 border border-solid border-grey-200 hover:bg-grey-50",
    danger: "border-0 text-red-100 bg-red-700 hover:bg-red-800",
  };

  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variationStyles[variation]}`;

  return (
    <button type={type} onClick={onClick} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
