import productNotFound from "../assets/productNotFound.png";
import "../styles/nocoincidences.css";

const NonCoincidence = () => {
  return (
    <section className="no-coincidences-sec">
      <div className="no-coincidences-container">
        <p className="no-coincidences-text">
          <span>Oops!</span>, seems like we can't find what you looking for, try
          again with other parameters{" "}
        </p>
        <img
          src={productNotFound}
          alt="no-coincidences-img"
          className="no-coincidences-img"
        />
      </div>
    </section>
  );
};

export default NonCoincidence;
