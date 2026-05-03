import { Outlet } from "react-router";

import CommonLayout from "./components/layout/CommonLayout";
import { generateRoutes } from "./utils/generateRoutes";
import { adminSidebarItems } from "./routes/adminSidebarItems";

function App() {
  const generateRoutesConsole = generateRoutes(adminSidebarItems); // ✅ function call
  console.log("generateRoutesConsole", generateRoutesConsole);
  return (
    <>
      <CommonLayout>
        <Outlet />
      </CommonLayout>
    </>
  );
}

export default App;
