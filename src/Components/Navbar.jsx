import { useContext, useState, useEffect } from "react";
import "../styles/navbar.css";
import "../styles/hamburgers.css";
import { Context } from "../context/Context";
import SessionIcon from "./Navbar/SessionIcon";
import SessionButtons from "./Navbar/SessionButtons";
import LightMode from "../assets/LightMode.png";
import DarkMode from "../assets/DarkMode.png";
import { NavLink, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import {
  BsWhatsapp,
  BsFillTelephoneFill,
  BsFacebook,
  BsCart4,
  BsFillMoonFill,
  BsFillSunFill,
  BsInstagram,
} from "react-icons/bs";

const Navbar = () => {
  const { darkMode, setDarkMode, user } = useContext(Context);
  const [navbarScrolled, setNavbarScrolled] = useState(true);
  const [shadow, setShadow] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [panelActive, setPanelActive] = useState(false);
  const naveg = useNavigate();
  const links = ["Products", "How to buy", "Delivery", "Help"];
  useEffect(() => {
    let lastScroll = window.scrollY;
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      if (scrollTop > lastScroll) {
        setNavbarScrolled(false);
      } else {
        setNavbarScrolled(true);
      }
      lastScroll = scrollTop;
      if (window.scrollY > 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    });
  }, []);

  const handleClick = async () => {
    if (!user) {
      naveg("/login");
    } else {
      naveg("/my-cart");
    }
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("dark", !darkMode);
  };
  const handleClickPanel = () => {
    setPanelActive(false);
    setHamburgerActive(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      <header
        className={`${darkMode ? "dark " : ""}${
          navbarScrolled ? "" : "hidden "
        }${shadow ? "shadow" : ""}`}
      >
        <div className="logo">
          <NavLink
            className={darkMode ? "darkLinks location" : "location"}
            target="_blank"
            to="https://www.google.com.mx/maps/@20.9497151,-101.4329077,18.5z?entry=ttu"
          >
            <CiLocationOn className="location-icon" />
            Av. Anystreet #102, Some City, Guanajuato, México.
          </NavLink>
          <NavLink to="/" onClick={() => window.scrollTo({ top: 0 })}>
            <img src={darkMode ? DarkMode : LightMode} alt="company-logo" />
          </NavLink>

          <div className="social-media">
            <span>
              +52 9967542019 <BsWhatsapp className="whatsapp" />
            </span>
            <span>
              +52 9967542019 <BsFillTelephoneFill className="phone" />
            </span>
            <NavLink
              to="/w"
              className={darkMode ? "darkLinks socialLinks" : "socialLinks"}
            >
              Utsukushiki Home <BsFacebook className="facebook" />
            </NavLink>
            <NavLink
              to="/w"
              className={darkMode ? "darkLinks socialLinks" : "socialLinks"}
            >
              @UtsukuHomeDecor
              <BsInstagram className="instagram" />
            </NavLink>
          </div>
        </div>
        <div className="navbar-responsive">
          <NavLink
            className="logo-responsive"
            to="/"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <img
              className="logo-responsive-img"
              src={darkMode ? DarkMode : LightMode}
              alt="company-logo"
            />
          </NavLink>
          <button
            onClick={() => {
              setHamburgerActive(!hamburgerActive);
              if (panelActive) {
                setPanelActive(false);
                document.body.style.overflow = "auto";
              } else {
                setPanelActive(true);
                document.body.style.overflow = "hidden";
              }
            }}
            className={
              hamburgerActive
                ? "burger-btn hamburger hamburger--squeeze is-active"
                : "burger-btn hamburger hamburger--squeeze"
            }
            type="button"
          >
            <span className="hamburger-box">
              <span
                className={
                  darkMode
                    ? "hamburger-inner darkInner"
                    : "hamburger-inner lightInner"
                }
              ></span>
            </span>
          </button>
        </div>
        <div
          className={`panel ${panelActive ? "" : "panel-hidden"} ${
            darkMode ? "darkContentContainers" : ""
          }`}
        >
          <div className="panel-links">
            {links.map((link) => (
              <NavLink
                onClick={handleClickPanel}
                key={link}
                to={`/${link.toLowerCase().replaceAll(" ", "-")}`}
                className={darkMode ? "nav-links darkLinks" : "nav-links"}
              >
                {link}
              </NavLink>
            ))}
            <button
              onClick={() => {
                handleClick();
                handleClickPanel();
              }}
              className={darkMode ? "nav-cart darkLinks" : "nav-cart"}
            >
              <div className="cart-container">
                <BsCart4 className="cart" />
              </div>
            </button>
            {user ? (
              <SessionIcon
                setPanelActive={setPanelActive}
                setHamburgerActive={setHamburgerActive}
              />
            ) : (
              <SessionButtons
                setPanelActive={setPanelActive}
                setHamburgerActive={setHamburgerActive}
              />
            )}
            <button className="dark-modeBtn" onClick={handleDarkMode}>
              {darkMode ? (
                <BsFillSunFill className="sun" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}
            </button>
          </div>
        </div>
        <nav className="navbar">
          {links.map((link) => (
            <NavLink
              key={link}
              to={`/${link.toLowerCase().replaceAll(" ", "-")}`}
              className={darkMode ? "nav-links darkLinks" : "nav-links"}
            >
              {link}
            </NavLink>
          ))}
          <button
            onClick={handleClick}
            className={darkMode ? "nav-cart darkLinks" : "nav-cart"}
          >
            <div className="cart-container">
              <BsCart4 className="cart" />
            </div>
          </button>
          {user ? <SessionIcon /> : <SessionButtons />}
          <button className="dark-modeBtn" onClick={handleDarkMode}>
            {darkMode ? (
              <BsFillSunFill className="sun" />
            ) : (
              <BsFillMoonFill className="moon" />
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
