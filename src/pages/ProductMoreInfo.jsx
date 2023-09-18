import "../styles/productmoreinfo.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getProduct } from "../db/Products";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Context } from "../context/Context";
import { addToCart } from "../db/Cart";
import Loader from "../Components/Loader";
import { IconArrowLeft } from "@tabler/icons-react";
import NonCoincidence from "../Components/NonCoincidence";

const ProductMoreInfo = () => {
  const { id } = useParams();
  const { user, darkMode } = useContext(Context);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [productToCart, setProductToCart] = useState({
    productId: Number(id),
    userId: user?.userId,
    cantidad: 0,
  });
  const naveg = useNavigate();
  const idModel = { productId: id };
  useEffect(() => {
    (async () => {
      let { Success, product } = await getProduct(idModel);
      if (Success) {
        setProduct(product);
      } else {
        setProduct(404);
      }
    })();
  }, [id]);
  useEffect(() => {
    setProductToCart({ ...productToCart, cantidad: quantity });
  }, [quantity]);
  if (!product) {
    return <Loader />;
  } else if (product == 404) {
    return <NonCoincidence />;
  }
  const handleClickPlus = (maxQuantity) => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };
  const handleClickMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleClickAddToCart = async () => {
    if (!user) {
      Toastify({
        text: "You must be logged in to add products to your cart, redirecting to login...",
        style: {
          background: "linear-gradient(to right, #df2821, #df2821)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
      setTimeout(() => {
        naveg("/login");
      }, 2000);
      return;
    }
    let { message, quantityInCart } = await addToCart(productToCart);
    if (message == "Product already in your cart") {
      Toastify({
        text: message + `, we added ${quantity} to the quantity to order :)`,
        style: {
          background: "linear-gradient(to right, #008000, #008000)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
    } else if (message == "Product added correctly") {
      Toastify({
        text: message + " to your cart",
        style: {
          background: "linear-gradient(to right, #008000, #008000)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
    } else if (message == "Not enough stock") {
      Toastify({
        text: message + `, you already have ${quantityInCart} in your cart`,
        style: {
          background: "linear-gradient(to right, #df2821, #df2821)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
    }
  };
  return (
    <section className="more-info-section">
      <NavLink to="/products" className="go-back">
        <IconArrowLeft />
        Go back
      </NavLink>
      <div className="product-mi-container">
        <div
          className={
            darkMode ? "product-mi-img darkContentContainers" : "product-mi-img"
          }
        >
          <img
            className="product-img"
            src={`https://utsukushiki-ecommerce-project.azurewebsites.net/${product.productDir.replace(
              "wwwroot/",
              ""
            )}`}
          />
        </div>
        <div
          className={
            darkMode
              ? "product-mi-desc-container darkContentContainers"
              : "product-mi-desc-container"
          }
        >
          <h6 className="product-mi-title">{product.productName}</h6>
          <p className="product-mi-desc">{product.productDescription}</p>
          <p className="product-mi-price">${product.productPrice}</p>
          <p className="product-mi-stock">Stock: {product.productStock}</p>
          <div className="quantity-handler">
            <p onClick={handleClickMinus} className="minus">
              -
            </p>
            <p className="quantity">{quantity}</p>
            <p
              onClick={() => handleClickPlus(product.productStock)}
              className="plus"
            >
              +
            </p>
          </div>
          <button onClick={handleClickAddToCart} className="addtocart-button">
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductMoreInfo;
