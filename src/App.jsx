import { useContext } from "react";
import { Context } from "./context/Context";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MainRouter from "./routes/MainRouter.routes";
import AdminRoutes from "./routes/AdminRoutes.routes.jsx";
import { Route, useLocation } from "react-router-dom";
import AdminProvider from "./context/AdminProvider";
import AdminLayout from "./Components/admin/AdminLayout";
import { createHashRouter, RouterProvider } from "react-router-dom";

function App() {
  const { darkMode } = useContext(Context);
  const router = createHashRouter([
    {
      path: "/*",
      element: <MainRouter />,
    },
  ]);
  return (
    <>
      <main className={darkMode ? "dark" : null}>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
