import { useContext, useState } from "react";
import "../../styles/admin/adminlogin.css";
import { AdminLoginHandler } from "../../db/AdminSession";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { AdminContext } from "../../context/AdminContex";
import { Navigate } from "react-router-dom";
const AdminLogin = () => {
  const { adminLogged, setAdminLogged, setAdminSessionExpires } =
    useContext(AdminContext);
  const [loginInfo, setLoginInfo] = useState({
    adminUsername: "",
    adminPassword: "",
  });
  if (adminLogged) {
    return <Navigate to="/admin-dashboard" />;
  }
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    let { Authorized, message, tokenExpires } = await AdminLoginHandler(
      loginInfo
    );
    if (Authorized) {
      Toastify({
        text: message,
        className: "logged-noti",
        style: {
          background: "linear-gradient(to right, #008a02, #008a02)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
      setAdminLogged(true);
      setAdminSessionExpires(new Date(tokenExpires));
    } else {
      Toastify({
        text: message,
        className: "logged-noti",
        style: {
          background: "linear-gradient(to right, #fb2929, #fb2929)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
    }
  };
  return (
    <form className="login-admin-form">
      <h6 className="login-admin-form-title">
        Welcome back, log in to continue.
      </h6>

      <label className="login-admin-username-label">Username: </label>
      <input
        autoComplete="off"
        onChange={handleChange}
        required
        type="text"
        name="adminUsername"
        className="login-admin-username-input"
      />

      <label className="login-admin-password-label">Password: </label>
      <input
        onChange={handleChange}
        required
        type="password"
        name="adminPassword"
        className="login-admin-password-input"
      />

      <button className="login-admin-button" onClick={(e) => handleLogin(e)}>
        Log in
      </button>
    </form>
  );
};

export default AdminLogin;
