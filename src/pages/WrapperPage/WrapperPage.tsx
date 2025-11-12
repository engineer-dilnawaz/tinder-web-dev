import { Outlet } from "react-router";

import { Footer, Navbar } from "../../components";

export const WrapperPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
