import Filters from "../Components/Products/Filters";
import ProductsContainer from "../Components/Products/ProductsContainer";
import "../styles/products.css";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../db/Products";
import Loader from "../Components/Loader";
import { Context } from "../context/Context";
import NonCoincidence from "../Components/NonCoincidence";

const Products = () => {
  const [products, setProducts] = useState(null);
  const { filters, setFilters, darkMode } = useContext(Context);
  useEffect(() => {
    (async () => {
      let { Success, products } = await getProducts();
      if (Success) {
        setProducts(products);
      } else {
        return <Loader />;
      }
    })();
  }, []);
  if (!products) {
    return <Loader />;
  }
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.productPrice >= filters.minPrice &&
        product.productPrice <= filters.maxPrice &&
        (filters.category === "all" ||
          product.productCategory === filters.category)
      );
    });
  };
  const filteredProducts = filterProducts(products);
  return (
    <section className="products-section">
      <Filters setFilters={setFilters} filters={filters} />
      {filteredProducts.length < 1 ? (
        <NonCoincidence />
      ) : (
        <ProductsContainer products={filteredProducts} darkMode={darkMode} />
      )}
    </section>
  );
};

export default Products;
