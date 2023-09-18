import "../styles/cart.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { getProductsInCart } from "../db/Cart";
import ProductsInCart from "../Components/Cart/ProductsInCart";
import CartEmpty from "../Components/Cart/CartEmpty";
import Loader from "../Components/Loader";
import { Navigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Cart = () => {
  const { productsInCart, setProductsInCart, user, darkMode } =
    useContext(Context);
  const [showModal, setShowModal] = useState(false);
  if (!user) {
    return <Navigate to="/login" />;
  }
  useEffect(() => {
    (async () => {
      if (user) {
        let { Success, products } = await getProductsInCart({
          userId: user.userId,
        });
        if (Success) {
          setProductsInCart(products);
        } else {
          Toastify({
            text: "Something went wrong",
            className: "logged-noti",
            style: {
              background: "linear-gradient(to right, #df2821, #df2821)",
            },
            position: "center",
            duration: 5000,
          }).showToast();
        }
      }
    })();
  }, [user]);
  if (!productsInCart) {
    return <Loader />;
  }
  return (
    <section className="my-cart-section">
      <div
        className={
          showModal
            ? "modal-no-functionally-container"
            : "modal-no-functionally-container modal-hidden"
        }
      >
        <div
          className={
            darkMode
              ? "modal-no-functionally darkContentContainers"
              : "modal-no-functionally"
          }
        >
          <p className="modal-no-f-message">
            This is a fake e-commerce app, you can't buy anything, sorry :(
          </p>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="modal-close-btn"
          >
            Close
          </button>
        </div>
      </div>
      <>
        {productsInCart.length > 0 ? (
          <ProductsInCart
            productsInCart={productsInCart}
            setProductsInCart={setProductsInCart}
            user={user}
            darkMode={darkMode}
            setShowModal={setShowModal}
          />
        ) : (
          <CartEmpty />
        )}
      </>
    </section>
  );
};

export default Cart;
