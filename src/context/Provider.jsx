import { useEffect, useState } from "react";
import { Context } from "./Context";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const now = new Date();

const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sessionExpires, setSessionExpires] = useState("");
  const [user, setUser] = useState(null);
  const [productsInCart, setProductsInCart] = useState(null);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
    maxPrice: 1000,
  });
  useEffect(() => {
    const value = localStorage.getItem("dark");
    if (value === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 19) {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    const loggedUser = window.localStorage.getItem("user");
    if (loggedUser) {
      let user = JSON.parse(loggedUser);
      setUser(user.userData);
      setSessionExpires(new Date(user.tokenExpires));
    }
  }, []);
  useEffect(() => {
    if (sessionExpires) {
      if (sessionExpires > now) {
        const timeremaining = sessionExpires - now;
        setTimeout(() => {
          setUser(null);
          setSessionExpires(null);
          window.localStorage.removeItem("user");
          Toastify({
            text: "Your session has expire, sign in again to continue",
            className: "logged-noti",
            style: {
              background: "linear-gradient(to right, #df2821, #df2821)",
            },
            position: "center",
            duration: 20000,
          }).showToast();
        }, timeremaining);
      }
    }
  }, [sessionExpires]);

  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
        user,
        setUser,
        productsInCart,
        setProductsInCart,
        filters,
        setFilters,
        setSessionExpires,
        sessionExpires,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
