import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { themeChange } from "theme-change";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Home, Login, Profile, Settings, WrapperPage } from "./pages";

const App = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <WrapperPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default App;
