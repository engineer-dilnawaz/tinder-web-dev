import { useEffect } from "react";
import { themeChange } from "theme-change";

import { Navbar } from "./components";

const App = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
