import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <header
      className="border-grey-100 bg-grey-0 flex items-center justify-end gap-6 border-b
        border-solid px-12 py-3"
    >
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
}

export default Header;
