type TagProps = {
  children: React.ReactNode;
  type: "blue" | "green" | "silver" | "indigo" | "red" | "yellow";
};

export type Type = TagProps["type"];

function Tag({ children, type }: TagProps) {
  const tagColorStyles = {
    blue: "text-blue-700 bg-blue-100",
    green: "text-green-700 bg-green-100",
    silver: "text-silver-700 bg-silver-100",
    indigo: "text-indigo-700 bg-indigo-100",
    red: "text-red-700 bg-red-100",
    yellow: "text-yellow-700 bg-yellow-100",
  };

  return (
    <span className={`inline-block w-fit uppercase text-xs font-semibold py-1 px-3 rounded-full ${tagColorStyles[type]}`}>
      {children}
    </span>
  );
}

export default Tag;
