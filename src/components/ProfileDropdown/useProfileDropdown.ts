import { useAuthStore } from "../../store";

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
  const { logout } = useAuthStore();

  const handleProfileOptionClick = (option: string) => {
    switch (option) {
      case "Profile": {
        console.log("Profile");
        break;
      }
      case "Settings": {
        console.log("Settings");
        break;
      }
      case "Logout": {
        handleLogout();
        break;
      }
    }
  };

  const handleLogout = () => {
    logout();
  };

  return {
    profileList,
    handleProfileOptionClick,
  };
};
