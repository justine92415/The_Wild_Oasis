import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUser,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

function MainNav() {
  const navLinkStyle = `group text-grey-600 hover:text-grey-800 hover:bg-grey-50 flex items-center gap-3
                        rounded-sm px-6 py-3 text-base font-medium transition-all duration-300`;
  const iconStyle = `text-grey-400 group-hover:text-brand-600 group-[.active]:text-brand-600 h-6 w-6
                     transition-colors duration-300`;
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink className={navLinkStyle} to="/dashboard">
            <HiOutlineHome className={iconStyle} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="/bookings">
            <HiOutlineCalendarDays className={iconStyle} />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="/cabins">
            <HiOutlineHomeModern className={iconStyle} />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="/users">
            <HiOutlineUser className={iconStyle} />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="/qq">
            <HiOutlineCog6Tooth className={iconStyle} />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
