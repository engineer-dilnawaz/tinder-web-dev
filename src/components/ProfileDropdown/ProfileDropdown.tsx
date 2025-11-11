import { useProfileDropdown } from "./useProfileDropdown";

export const ProfileDropdown = () => {
  const { profileList } = useProfileDropdown();
  return (
    <ul
      tabIndex={-1}
      className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
    >
      {profileList.map((profile) => (
        <li key={profile.name}>
          <a className="justify-between">
            {profile.name}
            {profile.isNew && <span className="badge">New</span>}
          </a>
        </li>
      ))}
    </ul>
  );
};
