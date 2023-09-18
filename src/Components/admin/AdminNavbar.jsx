import { NavLink } from "react-router-dom";
import { IconHome } from "@tabler/icons-react";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";
import { IconLogout2 } from "@tabler/icons-react";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContex";
import { AdminLogout } from "../../db/AdminSession";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const AdminNavbar = () => {
  const { setAdminLogged, setAdminSessionExpires } = useContext(AdminContext);
  const handleLogout = async () => {
    setAdminLogged(false);
    setAdminSessionExpires(null);
    let { LoggedOut, message } = await AdminLogout();
    if (LoggedOut) {
      Toastify({
        text: message,
        style: {
          background: "linear-gradient(to right, #df2821, #df2821)",
        },
        position: "center",
        duration: 20000,
      }).showToast();
    } else {
      Toastify({
        text: message,
        style: {
          background: "linear-gradient(to right, #df2821, #df2821)",
        },
        position: "center",
        duration: 20000,
      }).showToast();
    }
  };
  return (
    <nav className="admin-layout-nav">
      <NavLink to="/admin-dashboard" className="admin-layout-nav-links">
        <IconHome className="nav-links-icons" />
        <span className="nav-links-span">Dashboard</span>
      </NavLink>
      <NavLink to="/admin-add-product" className="admin-layout-nav-links">
        <IconSquareRoundedPlusFilled className="nav-links-icons" />
        <span className="nav-links-span">Add new product</span>
      </NavLink>
      <div className="admin-layout-nav-links" onClick={handleLogout}>
        <IconLogout2 className="nav-links-icons" />
        <span className="nav-links-span">Log out</span>
      </div>
    </nav>
  );
};

export default AdminNavbar;
