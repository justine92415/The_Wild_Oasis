import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="bg-grey-50 p-12 pt-10 pb-16">
        <div className="mx-auto my-0 max-w-300 flex flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
