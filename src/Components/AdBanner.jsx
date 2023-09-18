import { NavLink } from "react-router-dom";
const AdBanner = ({ title, subtitle, paragraph, paragraph2, src }) => {
  return (
    <section className="offerssec">
      <div className="offers-container">
        <div className="offers-article">
          <article className="offers-info">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{paragraph}</p>
            <p>{paragraph2}</p>
          </article>
        </div>
        <div className="img-container">
          <NavLink to="/products" className="text-container">
            <h4>Let's explore</h4>
          </NavLink>
          <img src={src} alt="bfriday-promo-image" />
        </div>
      </div>
    </section>
  );
};

export default AdBanner;
