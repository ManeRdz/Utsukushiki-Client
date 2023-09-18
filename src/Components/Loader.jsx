import "../styles/loader.css";

const Loader = () => {
  return (
    <section className="loader-section">
      <div className="loader-container">
        <div className="spinner"></div>
        <p className="loader-text">Loading the products, please wait...</p>
      </div>
    </section>
  );
};

export default Loader;
