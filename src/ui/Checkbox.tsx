function Checkbox({ checked, onChange, disabled = false, id, children }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </div>
  );
}

export default Checkbox;
