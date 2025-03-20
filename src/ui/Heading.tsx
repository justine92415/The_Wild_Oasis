type HeadingProps = {
  children: React.ReactNode;
  type: "h1" | "h2" | "h3" | "h4";
};

function Heading({ children, type }: HeadingProps) {
  const headingStyles = {
    h1: "text-3xl font-semibold",
    h2: "text-xl font-semibold",
    h3: "text-xl font-medium",
    h4: "text-3xl font-semibold text-center",
  };

  const Component = type;
  return <Component className={headingStyles[type]}>{children}</Component>;
}

export default Heading;
