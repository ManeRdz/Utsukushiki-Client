import "../styles/delivery.css";
import homedelivery from "../assets/homedelivery.jpg";
import postofficedelivery from "../assets/postofficedelivery.webp";
import { useContext } from "react";
import { Context } from "../context/Context";

const Delivery = () => {
  const { darkMode } = useContext(Context);
  return (
    <section className="delivery-section">
      <div className="delivery-top-page">
        <div className="delivery-top-page-text">
          <h3 className="delivery-title">We have the fastest deliveries!</h3>
          <h5 className="delivery-subtitle">
            Receive your order at home or at the nearest post office
          </h5>
        </div>
      </div>
      <div className="delivery-main-container">
        <article
          className={
            darkMode
              ? "delivery-article darkContentContainers"
              : "delivery-article"
          }
        >
          <div className="delivery-text-article">
            <h5 className="delivery-text-title">
              Receive your product at your home.
            </h5>
            <p className="delivery-text-p">
              Receive the product in the comfort of your home if you know
              someone's going to be there, and remember it's free on over $20
              purchases.
            </p>
          </div>
          <img src={homedelivery} alt="" className="delivery-img" />
        </article>
        <article
          className={
            darkMode
              ? "delivery-article darkContentContainers"
              : "delivery-article"
          }
        >
          <div className="delivery-text-article">
            <h5 className="delivery-text-title">
              Pick up your product at your nearest post office.
            </h5>
            <p className="delivery-text-p">
              But if you're not sure someone's going to be at home, don't worry,
              you can pick it up at the nearest post office without any extra
              charges, and remember it's free on over $20 purchases.
            </p>
          </div>
          <img src={postofficedelivery} alt="" className="delivery-img" />
        </article>
      </div>
    </section>
  );
};

export default Delivery;
