import "../../styles/admin/adminlayout.css";
import EditModal from "./EditModal";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContex";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = ({ children }) => {
  const { adminLogged, setAdminLogged } = useContext(AdminContext);
  return (
    <section className="admin-sec-layout">
      <div className="admin-layout-maincontainer">
        {adminLogged ? <AdminNavbar /> : null}
        <h4 className="admin-layout-title">Utsukushiki Administration Panel</h4>
        <div className="admin-layout">{children}</div>
      </div>
      <EditModal />
    </section>
  );
};

export default AdminLayout;
