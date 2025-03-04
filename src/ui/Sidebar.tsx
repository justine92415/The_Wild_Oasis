import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside
      className="border-grey-100 bg-grey-0 row-span-full flex flex-col gap-8 border-r
        border-solid px-6 py-8"
    >
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
