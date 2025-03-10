type ButtonTextProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

function ButtonText({ children, onClick }: ButtonTextProps) {
  return (
    <button 
      onClick={onClick}
      className="text-brand-600 font-medium text-center transition-all duration-300 bg-transparent border-0 rounded-sm hover:text-brand-700 active:text-brand-700"
    >
      {children}
    </button>
  );
}

export default ButtonText;
