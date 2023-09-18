import { useContext } from "react";
import { AdminContext } from "../../context/AdminContex";
import { EditProduct } from "../../db/AdminProducts";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "../../styles/admin/admindashboard.css";
const EditModal = () => {
  const {
    showModalEdit,
    setShowModalEdit,
    youAreEditing,
    setNewImage,
    newImage,
    productToEdit,
    setProductToEdit,
    setAdminProducts,
  } = useContext(AdminContext);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProductToEdit({
      ...productToEdit,
      [name]:
        name == "productPrice" || name == "productStock"
          ? Number(value)
          : value,
    });
  };
  const handleSendData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ProductId", productToEdit.productId);
    formData.append("ProductName", productToEdit.productName);
    formData.append("ProductDescription", productToEdit.productDescription);
    formData.append("ProductCategory", productToEdit.productCategory);
    formData.append("ProductPrice", productToEdit.productPrice);
    formData.append("ProductStock", productToEdit.productStock);
    formData.append("ProductDir", productToEdit.productDir);
    formData.append("ProductImage", newImage);
    let { Success, message, image } = await EditProduct(formData);
    if (Success) {
      setAdminProducts((prevAdminProducts) => {
        return prevAdminProducts.map((product) => {
          if (product.productId == productToEdit.productId) {
            return {
              ...product,
              productName: productToEdit.productName,
              productDescription: productToEdit.productDescription,
              productCategory: productToEdit.productCategory,
              productPrice: productToEdit.productPrice,
              productStock: productToEdit.productStock,
              productDir: image,
            };
          } else {
            return product;
          }
        });
      });
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
        text: message,
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
    <div
      className={
        showModalEdit
          ? "edit-modal-container modal-visible"
          : "edit-modal-container"
      }
    >
      <div className="edit-modal">
        <span
          className="close-button"
          onClick={() => {
            setShowModalEdit(false);
            setProductToEdit({
              productId: 0,
              productName: "",
              productDescription: "",
              productCategory: "",
              productStock: 0,
              productPrice: 0,
            });
          }}
        >
          x
        </span>
        <form action="" className="edit-modal-form">
          <h6 className="edit-modal-title">You are editing: {youAreEditing}</h6>
          <label htmlFor="productName" className="edit-name-label">
            Edit name:{" "}
          </label>
          <input
            autoComplete="off"
            onChange={(e) => handleChange(e)}
            value={productToEdit.productName}
            type="text"
            maxLength={50}
            name="productName"
            className="edit-name-input"
          />

          <label htmlFor="productDescription" className="edit-name-label">
            Edit description:{" "}
          </label>
          <textarea
            autoComplete="off"
            onChange={(e) => handleChange(e)}
            value={productToEdit.productDescription}
            maxLength={255}
            name="productDescription"
            cols="60"
            rows="6"
            className="edit-description-input"
          ></textarea>

          <label htmlFor="productCategory" className="edit-name-label">
            Edit category:{" "}
          </label>
          <select
            value={productToEdit.productCategory}
            onChange={(e) => handleChange(e)}
            className="edit-category-select"
            name="productCategory"
          >
            <option value="Kitchen">Kitchen</option>
            <option value="Cleaning Solutions">Cleaning Solutions</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Bedroom">Kitchen</option>
            <option value="Living Room">Living Room</option>
            <option value="Technology">Technology</option>
          </select>

          <label htmlFor="productPrice" className="edit-name-label">
            Edit price:{" "}
          </label>
          <input
            autoComplete="off"
            onChange={(e) => handleChange(e)}
            value={productToEdit.productPrice}
            type="number"
            name="productPrice"
            className="edit-price-input"
          />

          <label htmlFor="productStock" className="edit-name-label">
            Edit stock:{" "}
          </label>
          <input
            autoComplete="off"
            onChange={(e) => handleChange(e)}
            value={productToEdit.productStock}
            type="number"
            name="productStock"
            className="edit-price-input"
          />

          <label htmlFor="ProductImage" className="edit-name-label">
            Edit image:{" "}
          </label>
          <input
            autoComplete="off"
            onChange={(e) => setNewImage(e.target.files[0])}
            type="file"
            accept=".jpg, .jpeg, .png"
            name="ProductImage"
            className="edit-image-input"
          />
          <span>Only .jpg .png .jpeg files</span>
          <div className="edit-form-buttons">
            <button
              className="edit-cancel"
              onClick={(e) => {
                e.preventDefault();
                setShowModalEdit(false);
              }}
            >
              Cancel
            </button>
            <button
              className="edit-save"
              onClick={(e) => {
                e.preventDefault();
                handleSendData(e);
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
