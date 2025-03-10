type DashboardLayoutProps = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_34rem_auto] gap-6">
      {children}
    </div>
  );
}

export default DashboardLayout;
