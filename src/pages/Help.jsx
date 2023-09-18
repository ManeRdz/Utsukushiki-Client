import { useContext } from "react";
import { Context } from "../context/Context";
import "../styles/help.css";

const Help = () => {
  const { darkMode } = useContext(Context);
  return (
    <section className="help-section">
      <div className="help-top-page">
        <div className="help-top-page-text">
          <h3 className="help-section-title">You need help?</h3>
          <h5 className="help-section-subtitle">
            Here you can find the FAQ section, maybe the solution is here!
          </h5>
        </div>
      </div>
      <div className="help-FAQ-container">
        <ul className="FAQ-ul">
          <li className={darkMode ? "FAQ-li darkContentContainers" : "FAQ-li "}>
            <h6 className="question-title">Do you have a physical store?</h6>
            <p className="question-answer">
              Yes we only have one store by the moment, you can find us at Av.
              Anystreet #102, Some City, Guanajuato, México.
            </p>
          </li>
          <li className={darkMode ? "FAQ-li darkContentContainers" : "FAQ-li "}>
            <h6 className="question-title">Is delivery free?</h6>
            <p className="question-answer">Only on over $20 purchases.</p>
          </li>
          <li className={darkMode ? "FAQ-li darkContentContainers" : "FAQ-li "}>
            <h6 className="question-title">Do the products have a warranty?</h6>
            <p className="question-answer">
              Yes, all the products in the store have 1 year of warranty, but
              you can extend it, call +52 9967542019 to know more.
            </p>
          </li>
          <li className={darkMode ? "FAQ-li darkContentContainers" : "FAQ-li "}>
            <h6 className="question-title">Do you make home deliveries?</h6>
            <p className="question-answer">Yes, we always do home delivery.</p>
          </li>
          <li className={darkMode ? "FAQ-li darkContentContainers" : "FAQ-li "}>
            <h6 className="question-title">Do you sell wholesale?</h6>
            <p className="question-answer">
              Yes, call +52 9967542019 to give you a better attention.
            </p>
          </li>
          <li className={darkMode ? "FAQ-li darkContentContainers" : "FAQ-li "}>
            <h6 className="question-title">
              I forgot my password, what should I do?
            </h6>
            <p className="question-answer">
              Oops!, by the moment we don't have a recovery password system, but
              you can call the support team and they will help you! call +52
              9967542019.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Help;
