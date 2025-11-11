import { Avatar } from "../Avatar";
import { Logo } from "../Logo";
import { ThemeToggler } from "../ThemeToggler";

import { useNavbar } from "./useNavbar";
import { ProfileDropdown } from "../ProfileDropdown";

export const Navbar = () => {
  const { avatar } = useNavbar();
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <Logo />
      <div className="flex gap-2">
        <ThemeToggler />
        <div className="dropdown dropdown-end">
          <Avatar src={avatar} alt="Profile Avatar" />
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};
