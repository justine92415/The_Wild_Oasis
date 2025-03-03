function Heading({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "h1" | "h2" | "h3";
}) {
  const headingStyles = {
    h1: "text-[3rem] font-semibold",
    h2: "text-[2rem] font-semibold",
    h3: "text-[2rem] font-medium"
  };
  
  const Component = type;
  return <Component className={headingStyles[type]}>{children}</Component>;
}

export default Heading;
