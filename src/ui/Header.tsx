import Logout from "../features/authentication/Logout";

function Header() {
  return (
    <header className="border-grey-100 bg-grey-0 border-b border-solid px-12 py-3">
      <Logout />
    </header>
  );
}

export default Header;
