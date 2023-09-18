import { useContext, useState } from "react";
import "../../styles/admin/adminaddproduct.css";
import { AddProduct } from "../../db/AdminProducts";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { AdminContext } from "../../context/AdminContex";
import { Navigate } from "react-router-dom";

const AdminAddProduct = () => {
  const { adminLogged } = useContext(AdminContext);
  const [data, setData] = useState({
    ProductName: "",
    ProductDescription: "",
    ProductCategory: "",
    ProductPrice: 0,
    ProductStock: 0,
  });
  const [imageFile, setImageFile] = useState(null);
  if (!adminLogged) {
    return <Navigate to="/admin-login" />;
  }
  const sendData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ProductName", data.ProductName);
    formData.append("ProductDescription", data.ProductDescription);
    formData.append("ProductCategory", data.ProductCategory);
    formData.append("ProductPrice", data.ProductPrice);
    formData.append("ProductStock", data.ProductStock);
    formData.append("ProductImage", imageFile);
    let { Success, message } = await AddProduct(formData);
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
    } else {
      Toastify({
        text: "Something went wrong, " + message,
        className: "logged-noti",
        style: {
          background: "linear-gradient(to right, #008a02, #008a02)",
        },
        position: "center",
        duration: 3000,
      }).showToast();
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]:
        name == "ProductPrice" || name == "ProductStock"
          ? Number(value)
          : value,
    });
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    setImageFile(e.target.files[0]);
  };
  return (
    <form className="add-product-form">
      <h6 className="form-add-product-title">Add a new product</h6>

      <label className="add-product-name-label">Product Name: </label>
      <input
        autoComplete="off"
        className="add-product-name-input"
        required
        type="text"
        name="ProductName"
        onChange={handleChange}
      />

      <label className="add-product-description-label">
        Product Description:{" "}
      </label>
      <textarea
        className="add-product-description-input"
        required
        name="ProductDescription"
        cols="80"
        rows="6"
        maxLength={255}
        minLength={0}
        onChange={handleChange}
      />

      <label className="add-product-category-label">Product Category: </label>
      <select
        className="add-product-category-input"
        required
        name="ProductCategory"
        onChange={handleChange}
      >
        <option value="default">--Select a category--</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Cleaning Appliances">Cleaning Appliances</option>
        <option value="Living Room">Living Room</option>
        <option value="Technology">Technology</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
      </select>

      <label className="add-product-price-label">Product Price: </label>
      <input
        className="add-product-price-input"
        required
        type="number"
        name="ProductPrice"
        onChange={handleChange}
      />

      <label className="add-product-stock-label">Product Stock: </label>
      <input
        className="add-product-stock-input"
        required
        type="number"
        name="ProductStock"
        onChange={handleChange}
      />

      <label className="add-product-image-label">Product Image: </label>
      <input
        accept=".jpg, .jpeg, .png"
        className="add-product-image-input"
        required
        type="file"
        name="ProductImage"
        onChange={handleImageChange}
      />
      <span>Only .jpg .png .jpeg files</span>
      <button className="add-product-button" onClick={sendData}>
        Add product
      </button>
    </form>
  );
};

export default AdminAddProduct;
