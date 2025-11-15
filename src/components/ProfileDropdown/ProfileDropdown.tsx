import type { HeaderOptionName } from "../../constants";
import { useProfileDropdown } from "./useProfileDropdown";

type ProfileDropdownProps = {
  onOptionClick: (option: HeaderOptionName) => void;
};

export const ProfileDropdown = ({ onOptionClick }: ProfileDropdownProps) => {
  const { profileList } = useProfileDropdown();
  return (
    <ul
      tabIndex={-1}
      className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
    >
      {profileList.map((profile) => (
        <li key={profile.name}>
          <button
            className="justify-between"
            onClick={() => onOptionClick(profile.name)}
          >
            {profile.name}
            {profile.isNew && <span className="badge">New</span>}
          </button>
        </li>
      ))}
    </ul>
  );
};
