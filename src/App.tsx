import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { themeChange } from "theme-change";

import { Home, Login, Profile, WrapperPage } from "./pages";

const App = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <WrapperPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
