import { useEffect, useState } from "react";
import { AdminContext } from "./AdminContex";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { AdminLogout } from "../db/AdminSession";
const now = new Date();
const AdminProvider = ({ children }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [youAreEditing, setYouAreEditing] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [adminProducts, setAdminProducts] = useState(null);
  const [adminLogged, setAdminLogged] = useState(false);
  const [adminSessionExpires, setAdminSessionExpires] = useState(null);

  const [productToEdit, setProductToEdit] = useState({
    productId: 0,
    productName: "",
    productDescription: "",
    productCategory: "",
    productStock: 0,
    productPrice: 0,
    productDir: "",
  });

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("admin");
    if (loggedUser) {
      let admin = JSON.parse(loggedUser);
      setAdminLogged(true);
      setAdminSessionExpires(new Date(admin.tokenExpires));
    }
  }, []);
  useEffect(() => {
    if (adminSessionExpires != null) {
      if (adminSessionExpires > now) {
        const timeremaining = adminSessionExpires - now;
        setTimeout(() => {
          setAdminLogged(false);
          setAdminSessionExpires(null);
          window.localStorage.removeItem("admin");
          Toastify({
            text: "Your session has expire, sign in again to continue",
            className: "logged-noti",
            style: {
              background: "linear-gradient(to right, #df2821, #df2821)",
            },
            position: "center",
            duration: 20000,
          }).showToast();
        }, timeremaining);
      }
    }
  }, [adminSessionExpires]);

  return (
    <AdminContext.Provider
      value={{
        showModalEdit,
        setShowModalEdit,
        productToEdit,
        setProductToEdit,
        youAreEditing,
        setYouAreEditing,
        newImage,
        setNewImage,
        adminProducts,
        setAdminProducts,
        adminLogged,
        setAdminLogged,
        adminSessionExpires,
        setAdminSessionExpires,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
