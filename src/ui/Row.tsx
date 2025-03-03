function Row({
  children,
  type = 'vertical',
}: {
  children: React.ReactNode;
  type?: "horizontal" | "vertical";
}) {
  const rowStyles = {
    horizontal: "items-center justify-between",
    vertical: "flex-col gap-4",
  };

  return <div className={`flex ${rowStyles[type]}`}>{children}</div>;
}

export default Row;
