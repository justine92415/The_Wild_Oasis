type TodayItemProps = {
  children: React.ReactNode;
}

function TodayItem({ children }: TodayItemProps) {
  return (
    <li className="grid grid-cols-[9rem_2rem_1fr_7rem_9rem] gap-3 items-center text-sm py-2 border-b border-grey-100 first:border-t first:border-grey-100">
      {children}
    </li>
  );
}

function Guest({ children }: { children: React.ReactNode }) {
  return <div className="font-medium">{children}</div>;
}

TodayItem.Guest = Guest;

export default TodayItem;
