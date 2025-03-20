type DataItemProps = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
};

export function DataItem({ icon, label, children }: DataItemProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-2 font-medium">
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}

export default DataItem;
