import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AddOneToQuantity } from "../../db/Cart";
import { RemoveOneToQuantity } from "../../db/Cart";
import { DeleteFromCart } from "../../db/Cart";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const ProductsInCart = ({
  productsInCart,
  setProductsInCart,
  user,
  darkMode,
  setShowModal,
  showModal,
}) => {
  const naveg = useNavigate();
  const [totalInCart, setTotalInCart] = useState(0);

  useEffect(() => {
    if (productsInCart && productsInCart.length > 0) {
      const cartTotal = productsInCart.reduce((total, product) => {
        return total + product.cantidad * product.productPrice;
      }, 0);

      setTotalInCart(cartTotal);
    } else {
      setTotalInCart(0);
    }
  }, [productsInCart]);
  const handleDelete = async (prodId) => {
    let data = {
      productId: prodId,
      userId: user.userId,
    };
    let { message } = await DeleteFromCart(data);
    if (message == "Product deleted from your cart") {
      Toastify({
        text: message,
        style: {
          background: "linear-gradient(to right, #df2821, #df2821)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
      setProductsInCart(
        productsInCart.filter((product) => product.productId != prodId)
      );
    } else {
      Toastify({
        text: message,
        style: {
          background: "linear-gradient(to right, #df2821, #df2821)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
    }
  };
  const handleClickPlus = async (prodId) => {
    if (user) {
      let { message } = await AddOneToQuantity({
        userId: user.userId,
        productId: prodId,
      });
      if (message == "Quantity changed") {
        const updateQuantity = productsInCart.map((product) => {
          if (product.productId == prodId) {
            return { ...product, cantidad: product.cantidad + 1 };
          }
          return product;
        });
        setProductsInCart(updateQuantity);
      } else if ((message = "Not enough stock")) {
        Toastify({
          text: message,
          style: {
            background: "linear-gradient(to right, #df2821, #df2821)",
          },
          position: "center",
          duration: 2000,
        }).showToast();
      } else {
        Toastify({
          text: message,
          style: {
            background: "linear-gradient(to right, #df2821, #df2821)",
          },
          position: "center",
          duration: 2000,
        }).showToast();
      }
    }
  };
  const handleClickMinus = async (prodId) => {
    if (user) {
      let { message } = await RemoveOneToQuantity({
        userId: user.userId,
        productId: prodId,
      });
      if (message == "Quantity changed") {
        const updateQuantity = productsInCart.map((product) => {
          if (product.productId == prodId) {
            return { ...product, cantidad: product.cantidad - 1 };
          }
          return product;
        });
        setProductsInCart(updateQuantity);
      } else {
        Toastify({
          text: message,
          style: {
            background: "linear-gradient(to right, #df2821, #df2821)",
          },
          position: "center",
          duration: 2000,
        }).showToast();
      }
    }
  };
  return (
    <div className="products-incart-container">
      <h6 className="cart-title">
        Hi <span>{user.userUsername}</span>!, this is your cart:
      </h6>
      <p className="total-in-cart">Your total: ${totalInCart}</p>
      <ul className="products-ulist">
        {productsInCart.map((product) => (
          <li
            key={product.productId}
            className={
              darkMode
                ? "product-list-item darkContentContainers"
                : "product-list-item"
            }
          >
            <img
              onClick={() => naveg(`/products/${product.productId}`)}
              className="product-incart-img"
              src={`https://utsukushiki-ecommerce-project.azurewebsites.net/${product.productDir.replace(
                "wwwroot/",
                ""
              )}`}
              alt={product.productName}
            />
            <p
              className="product-incart-name"
              onClick={() => naveg(`/products/${product.productId}`)}
            >
              {product.productName}
            </p>
            <p className="product-incart-price">${product.productPrice}</p>
            <div className="quantity-incart-handler">
              {product.cantidad <= 1 ? (
                <p className="minus-incart"></p>
              ) : (
                <p
                  className="minus-incart"
                  onClick={() => handleClickMinus(product.productId)}
                >
                  -
                </p>
              )}
              <p className="quantity-incart">{product.cantidad}</p>
              {product.cantidad == product.productStock ? (
                <p className="plus-incart"></p>
              ) : (
                <p
                  className="plus-incart"
                  onClick={() => handleClickPlus(product.productId)}
                >
                  +
                </p>
              )}
            </div>
            <AiOutlineDelete
              className="delete-from-cart"
              onClick={() => handleDelete(product.productId)}
            />
          </li>
        ))}
      </ul>
      <div className="buy-cart-button-container">
        <button
          className="buy-cart"
          onClick={() => {
            window.scrollTo({ top: 0 });
            setShowModal(true);
            setTimeout(() => {
              setShowModal(false);
            }, 10000);
          }}
        >
          Buy cart
        </button>
      </div>
    </div>
  );
};

export default ProductsInCart;
