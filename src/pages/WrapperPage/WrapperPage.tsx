import { Outlet } from "react-router";

import { Navbar } from "../../components";

export const WrapperPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
