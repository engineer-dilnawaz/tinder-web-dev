const profileList = [
  {
    name: "Profile",
    isNew: true,
  },
  {
    name: "Settings",
    isNew: false,
  },
  {
    name: "Logout",
    isNew: false,
  },
];

export const useProfileDropdown = () => {
  return {
    profileList,
  };
};
