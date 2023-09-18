import { MdPayment, MdSpeed, MdOutlineLibraryAddCheck } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Extras = () => {
  const { darkMode } = useContext(Context);
  const extras = [
    {
      title: "Safe payment",
      icon: <MdPayment className="extras-icon" />,
      description: "We guarantee the security of all your transactions",
    },
    {
      title: "Free delivery",
      icon: <CiDeliveryTruck className="extras-icon" />,
      description: "Shipping is free on purchases over $20",
    },
    {
      title: "Fast delivery",
      icon: <MdSpeed className="extras-icon" />,
      description:
        "Receive your products in 2 days, if not, we will send you a gift on your next purchase",
    },
    {
      title: "Guarantee",
      icon: <MdOutlineLibraryAddCheck className="extras-icon" />,
      description: "2 year warranty on all our products",
    },
    {
      title: "Free Devolution",
      icon: <BsFillBoxSeamFill className="extras-icon" />,
      description:
        "If you did not receive what you expected, make the return completely free",
    },
  ];
  return (
    <section className="extras-sec">
      <div className="extras-sec-title-container">
        <h4 className="extras-sec-title">
          At <span>Utsukushiki</span> our customers are our highest priority,
          that's why we offer you:
        </h4>
      </div>
      <div
        className={
          darkMode ? "darkExtras extras-container" : "extras-container"
        }
      >
        {extras.map((extra) => (
          <div key={extra.title} className="extras">
            <div className="extras-content">
              <h5 className="extras-title">{extra.title}</h5>
              {extra.icon}
              <p className="extras-description">{extra.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extras;
