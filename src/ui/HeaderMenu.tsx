import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className="flex gap-1">
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
