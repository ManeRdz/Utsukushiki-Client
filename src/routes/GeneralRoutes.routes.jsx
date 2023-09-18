import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import HowToBuy from "../pages/HowToBuy";
import Delivery from "../pages/Delivery";
import Help from "../pages/Help";
import Cart from "../pages/Cart";
import ProductMoreInfo from "../pages/ProductMoreInfo";

const GeneralRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductMoreInfo />} />
        <Route path="how-to-buy" element={<HowToBuy />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="help" element={<Help />} />
        <Route path="my-cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default GeneralRoutes;
