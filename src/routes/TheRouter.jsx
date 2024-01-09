import { Route, Routes } from "react-router-dom";
import TheNavbar from "../components/navigation/TheNavbar";
import TheHome from "../pages/TheHome";
import TheMenu from "../pages/TheMenu";
import TheProfile from "../../src/components/profile/TheProfile";
import "./TheRouter.css";
import TheYourOrder from "../pages/TheYourOrder";

const routes = [
  { path: "/", element: <TheHome /> },
  { path: "/menu", element: <TheMenu /> },
  { path: "/username", element: <TheProfile /> },
  { path: "/your-order", element: <TheYourOrder /> },
];

export default function TheRouter() {
  return (
    <div className="flex flex-col">
        <div className="border mb-5 shadow-bottom sticky top-0 z-50 bg-white">
          <TheNavbar />
        </div>
      <div>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}
