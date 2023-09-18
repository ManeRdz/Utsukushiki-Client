import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GeneralRoutes from "./GeneralRoutes.routes";
import AdminRoutes from "./AdminRoutes.routes";
import AdminProvider from "../context/AdminProvider";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainRouter = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  if (isAdmin) {
    return (
      <AdminProvider>
        <AdminRoutes />
      </AdminProvider>
    );
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<GeneralRoutes />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
