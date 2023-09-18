import "../../styles/admin/admindashboard.css";
import { useContext, useEffect } from "react";
import { getProducts } from "../../db/Products";
import Loader from "../../Components/Loader";
import { IconTrash } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
import { AdminContext } from "../../context/AdminContex";
import { DeleteProduct } from "../../db/AdminProducts";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { Navigate } from "react-router-dom";

const AdminDashboard = () => {
  const {
    setShowModalEdit,
    setProductToEdit,
    setYouAreEditing,
    adminProducts,
    setAdminProducts,
    adminLogged,
  } = useContext(AdminContext);
  if (!adminLogged) {
    return <Navigate to="/admin-login" />;
  }
  useEffect(() => {
    (async () => {
      let { Success, products } = await getProducts();
      if (Success) {
        setAdminProducts(products);
      }
    })();
  }, []);
  if (!adminProducts) {
    return <Loader />;
  }
  const handleClick = (productId) => {
    setShowModalEdit(true);
    setYouAreEditing(
      adminProducts.find((product) => product.productId == productId)
        .productName
    );
    setProductToEdit(
      adminProducts.find((product) => product.productId == productId)
    );
  };
  const handleDelete = async (prodId) => {
    let productToDelete = {
      productId: prodId,
    };
    let { Success, message } = await DeleteProduct(productToDelete);
    if (Success) {
      Toastify({
        text: message,
        className: "logged-noti",
        style: {
          background: "linear-gradient(to right, #008a02, #008a02)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
      setAdminProducts(
        adminProducts.filter((product) => product.productId != prodId)
      );
    } else {
      Toastify({
        text: "Something went wrong, " + message,
        className: "logged-noti",
        style: {
          background: "linear-gradient(to right, #008a02, #008a02)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
    }
  };
  return (
    <div className="admin-dashboard-container">
      <ul className="admin-products-ulist">
        {adminProducts.map((product) => (
          <li key={product.productId} className="admin-product-item">
            <img
              src={`https://localhost:7139/${product.productDir.replace(
                "wwwroot/",
                ""
              )}`}
              alt={product.productName}
              className="admin-product-img"
            />
            <p className="admin-product-name">{product.productName}</p>
            <p className="admin-product-price">
              Price: ${product.productPrice}
            </p>
            <p className="admin-product-stock">Stock: {product.productStock}</p>
            <div className="admin-product-buttons">
              <IconEdit
                className="admin-product-edit-icon"
                onClick={() => handleClick(product.productId)}
              />
              <IconTrash
                className="admin-product-delete-icon"
                onClick={() => handleDelete(product.productId)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
