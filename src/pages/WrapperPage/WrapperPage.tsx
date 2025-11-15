import { Navigate, Outlet } from "react-router";

import { Footer, Navbar } from "../../components";
import { useAuthStore } from "../../store";

export const WrapperPage = () => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
