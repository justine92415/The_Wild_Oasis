type DashboardBoxProps = {
  children: React.ReactNode;
};

function DashboardBox({ children }: DashboardBoxProps) {
  return (
    <div className="bg-grey-0 border border-grey-100 rounded-md p-8 flex flex-col gap-6">
      {children}
    </div>
  );
}

export default DashboardBox;
