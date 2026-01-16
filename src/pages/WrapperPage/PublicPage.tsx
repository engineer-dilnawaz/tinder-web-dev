import { Navigate, Outlet } from "react-router";

import { useAuthStore } from "../../store";

export const PublicPage = () => {
  const { isLoggedIn } = useAuthStore();

  if (isLoggedIn) return <Navigate to="/" replace />;

  return <Outlet />;
};
