import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminAddProduct from "../pages/admin/AdminAddProduct";
import AdminLayout from "../Components/admin/AdminLayout";
const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-add-product" element={<AdminAddProduct />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
