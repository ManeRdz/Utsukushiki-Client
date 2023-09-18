import { useNavigate } from "react-router-dom";
const ProductsContainer = ({ products, darkMode }) => {
  const nav = useNavigate();
  const handleClick = (id) => {
    nav(`/products/${id}`);
  };
  return (
    <div className="products-container">
      {products.map((element) => (
        <div
          key={element.productId}
          className={
            darkMode
              ? "product-container darkContentContainers"
              : "product-container"
          }
        >
          <img
            className="product-image"
            src={`https://utsukushiki-ecommerce-project.azurewebsites.net/${element.productDir.replace(
              "wwwroot/",
              ""
            )}`}
            alt="product-image"
            onClick={() => handleClick(element.productId)}
          />
          <h5 className="product-title">{element.productName}</h5>
          <p className="product-price">$ {element.productPrice}</p>
          <div className="buttons">
            <button
              className="more-details-button"
              onClick={() => handleClick(element.productId)}
            >
              More Details +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsContainer;
