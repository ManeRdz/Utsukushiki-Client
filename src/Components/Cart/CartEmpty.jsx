import { useNavigate } from "react-router-dom";
import empty from "../../assets/empty.png";

const CartEmpty = () => {
  const naveg = useNavigate();
  const handleClick = () => {
    naveg("/products");
  };
  return (
    <div className="empty-cart">
      <h5 className="empty-cart-title">
        Oh no!, seems like your cart is <span>empty</span> ☹️
      </h5>
      <img src={empty} alt="empty-cart" className="empty-cart-img" />
      <p className="empty-cart-p">
        Let's explore some new products to fill your cart!
      </p>
      <button className="empty-cart-button" onClick={handleClick}>
        Explore
      </button>
    </div>
  );
};

export default CartEmpty;
