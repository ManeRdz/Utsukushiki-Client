import "../styles/howtobuy.css";
import { IconUserCheck } from "@tabler/icons-react";
import { IconShoppingBagSearch } from "@tabler/icons-react";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import { IconBrandCashapp } from "@tabler/icons-react";
import { IconCreditCard } from "@tabler/icons-react";
import { IconHomeLink } from "@tabler/icons-react";
import { IconTruckDelivery } from "@tabler/icons-react";
import { IconBoxSeam } from "@tabler/icons-react";
import { useContext } from "react";
import { Context } from "../context/Context";

const HowToBuy = () => {
  const { darkMode } = useContext(Context);
  const arraySteps = [
    {
      title: "1.- Sing in/Sign up",
      p1: "If you already have an account, sign in, and go to the next step",
      p2: "If you don't have an account, what are you waiting for?, go to the navigation bar, click on the sign up button and join us!",
      icon: <IconUserCheck className="step-icon-1" />,
    },
    {
      title: "2.- Explore products",
      p1: "Once you're signed in, explore what Utsukushiki offers you!",
      p2: "Go to the products section, look for the best product for you and click on the more details button to know more about it.",
      icon: <IconShoppingBagSearch className="step-icon-2" />,
    },
    {
      title: "3.- Add to the cart",
      p1: "Okay, now you know more about the excellent product you choose",
      p2: "The next step is clicking on the add to cart button, and verify your cart.",
      icon: <IconShoppingCartPlus className="step-icon-3" />,
    },
    {
      title: "4.- Payment",
      p1: "Come on! It's almost yours, only few more steps.",
      p2: "Go to your cart section by clicking the cart icon in the navigation bar, verify you have the right products and click on the button buy.",
      icon: <IconBrandCashapp className="step-icon-4" />,
    },
    {
      title: "5.- Payment method",
      p1: "We're almost there!",
      p2: "Choose your payment method (we accept credit and debit cards only) and fill the card information",
      icon: <IconCreditCard className="step-icon-5" />,
    },
    {
      title: "6.- Complete your adress information",
      p1: "Where we going to send your package?",
      p2: "Complete your address information, make sure it's right!",
      icon: <IconHomeLink className="step-icon-6" />,
    },
    {
      title: "7.- Do the order",
      p1: "Only one click more!",
      p2: "When you have all the steps done and make sure everything it's correct it's time to do the order!, just click the order now button and we will send you the mail guide",
      icon: <IconTruckDelivery className="step-icon-7" />,
    },
    {
      title: "8.- Receive your product",
      p1: "Finally you got it!",
      p2: "The last step, receive your product!",
      icon: <IconBoxSeam className="step-icon-8" />,
    },
  ];
  return (
    <section className="how-to-buy-section">
      <div className="how-to-buy-main-text">
        <h3 className="how-to-buy-title">Don't know how to buy?</h3>
        <h5 className="how-to-buy-subtitle">
          Let's take a little tutorial about how to buy at Utsukushiki
        </h5>
      </div>
      <div className="tutorial-container">
        {arraySteps.map((item, index) => (
          <div
            key={index}
            className={
              darkMode
                ? "step-container darkContentContainers"
                : "step-container"
            }
          >
            <h5 className="step-title">{item.title}</h5>
            <p className="step-p">{item.p1}</p>
            <p className="step-p">{item.p2}</p>
            {item.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToBuy;
