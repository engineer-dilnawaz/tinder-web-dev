import { useNavigate } from "react-router";

import { AVATAR_URL, type HeaderOptionName } from "../../constants";
import { useAuthStore } from "../../store";

export const useNavbar = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleProfileOptionClick = (option: HeaderOptionName) => {
    switch (option) {
      case "Profile": {
        navigate("/profile");
        break;
      }
      case "Settings": {
        navigate("/settings");
        break;
      }
      case "Logout": {
        logout();
        break;
      }

      default:
        console.log("Coming Soon! This page is under development...");
    }
  };
  return { avatar: AVATAR_URL, handleProfileOptionClick };
};
