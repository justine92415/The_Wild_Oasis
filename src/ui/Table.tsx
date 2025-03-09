import { createContext, useContext } from "react";

type CommonTableProps = {
  columns: string;
  children: React.ReactNode;
};

type TableBodyProps<T> = {
  data: T[];
  render: (item: T) => React.ReactNode;
};

type TableContext = {
  columns: string | undefined;
};

const TableContext = createContext<TableContext>({ columns: undefined });

function Table({ columns, children }: CommonTableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        className="border-grey-200 bg-grey-0 overflow-hidden rounded-md border text-sm"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

// The Header component
function Header({ children }: { children: React.ReactNode }) {
  const { columns } = useContext(TableContext);

  return (
    <header
      role="row"
      className="bg-grey-50 border-grey-100 text-grey-600 grid items-center gap-x-6 border-b px-6
        py-4 font-semibold tracking-[0.4px] uppercase transition-none"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </header>
  );
}

// The Row component
function Row({ children }: { children: React.ReactNode }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className="[&:not(:last-child)]:border-grey-100 grid items-center gap-x-6 px-6 py-3
        transition-none [&:not(:last-child)]:border-b"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

// The Body component
function Body<T>({ data, render }: TableBodyProps<T>) {
  if (data.length === 0) return <EmptyState>No data to show at the moment</EmptyState>;
  return <section className="my-1">{data.map(render)}</section>;
}

// The TableFooter component
function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="bg-grey-50 flex justify-center p-3 [&:empty]:hidden">
      {children}
    </footer>
  );
}

// Empty state component
function EmptyState({ children }: { children: React.ReactNode }) {
  return <p className="m-6 text-center text-base font-medium">{children}</p>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;
Table.Empty = EmptyState;

export default Table;
