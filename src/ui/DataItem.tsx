function DataItem({ icon, label, children }) {
  return (
    <div className="flex items-center gap-6 py-3">
      <span className="flex items-center gap-3 font-medium">
        <span className="h-8 w-8 text-indigo-600">{icon}</span>
        {label}
      </span>
      {children}
    </div>
  );
}

export default DataItem;
