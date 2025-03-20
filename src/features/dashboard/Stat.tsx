type StatProps = {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: string;
};

function Stat({ icon, title, value, color }: StatProps) {
  return (
    <div className="bg-grey-0 border border-grey-100 rounded-md p-4 grid grid-cols-[6.4rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1">
      <div 
        className={`row-span-2 aspect-square rounded-full flex items-center justify-center bg-${color}-100`}
      >
        <div className={`w-8 h-8 text-${color}-700`}>{icon}</div>
      </div>
      <h5 className="self-end text-xs uppercase tracking-wider font-semibold text-grey-500">
        {title}
      </h5>
      <p className="text-2xl leading-none font-medium">
        {value}
      </p>
    </div>
  );
}

export default Stat;
