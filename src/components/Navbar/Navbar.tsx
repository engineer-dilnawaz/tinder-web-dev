import { Avatar } from "../Avatar";
import { Logo } from "../Logo";
import { ThemeToggler } from "../ThemeToggler";

import { ProfileDropdown } from "../ProfileDropdown";
import { useNavbar } from "./useNavbar";

export const Navbar = () => {
  const { avatar, handleProfileOptionClick } = useNavbar();
  return (
    <div className="navbar bg-base-200 shadow-sm sticky top-0 left-0 right-0 z-50">
      <Logo />
      <div className="flex gap-2">
        <ThemeToggler />
        <div className="dropdown dropdown-end">
          <Avatar src={avatar} alt="Profile Avatar" />
          <ProfileDropdown onOptionClick={handleProfileOptionClick} />
        </div>
      </div>
    </div>
  );
};
