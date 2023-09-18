import { useContext } from "react";
import "../styles/footer.css";
import { Context } from "../context/Context";
const Footer = () => {
  const { darkMode } = useContext(Context);
  return (
    <footer className={darkMode ? "darkFooter" : null}>
      <div className="about-container">
        <h5 className="about-title">About</h5>
        <ul className="about-list">
          <li className="about-element">Where we are?</li>
          <li className="about-element">Careers</li>
          <li className="about-element">Suppliers</li>
        </ul>
      </div>
      <div className="help-container">
        <h5 className="help-title">Help</h5>
        <ul className="help-list">
          <li className="help-element">FAQ</li>
          <li className="help-element">Terms & conditions</li>
          <li className="help-element">How to buy</li>
          <li className="help-element">Shipping</li>
          <li className="help-element">Payments</li>
          <li className="help-element">Return Policy</li>
          <li className="help-element">Warranty</li>
        </ul>
      </div>
      <div className="contact-container">
        <h5 className="contact-title">Contact</h5>
        <ul className="contact-list">
          <li className="contact-element">Phone</li>
          <li className="contact-element">WhatsApp</li>
          <li className="contact-element">Facebook</li>
          <li className="contact-element">Instagram</li>
          <li className="contact-element">Mail</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
